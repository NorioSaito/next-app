import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3バケットの作成
    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      removalPolicy: cdk.RemovalPolicy.DESTROY, // スタック削除時にバケットを削除
      autoDeleteObjects: true, // スタック削除時にバケット内のオブジェクトを削除
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // パブリックアクセスをブロック
    });

    // CloudFront OAI (Origin Access Identity) の作成
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'OAI');

    // S3バケットポリシーの更新
    websiteBucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [websiteBucket.arnForObjects('*')],
      principals: [new iam.CanonicalUserPrincipal(originAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId)],
    }));

    // CloudFrontディストリビューションの作成
    new cloudfront.Distribution(this, 'WebsiteDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(websiteBucket, {
          originAccessIdentity: originAccessIdentity,
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
    });

    // CodeCommitリポジトリの作成
    const repo = new codecommit.Repository(this, 'CorporateSite', {
      repositoryName: 'CorporateSite',
    });

    // CodeBuildプロジェクトの作成
    const project = new codebuild.PipelineProject(this, 'CorporateSiteBuild', {
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            commands: ['npm install --prefix src'],
          },
          build: {
            commands: ['npm run build --prefix src'],
          },
        },
        artifacts: {
          'base-directory': 'build', // ビルド成果物のディレクトリ
          files: ['**/*'],
        },
      }),
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_5_0,
      },
    });

    // CodePipelineの作成
    const sourceOutput = new codepipeline.Artifact();
    const buildOutput = new codepipeline.Artifact();

    const pipeline = new codepipeline.Pipeline(this, 'CorporateSitePipeline', {
      pipelineName: 'WebsitePipeline',
      stages: [
        {
          stageName: 'Source',
          actions: [
            new codepipeline_actions.CodeCommitSourceAction({
              actionName: 'CodeCommit_Source',
              repository: repo,
              branch: 'master',
              output: sourceOutput,
            }),
          ],
        },
        {
          stageName: 'Build',
          actions: [
            new codepipeline_actions.CodeBuildAction({
              actionName: 'Build_and_Export',
              project: project,
              input: sourceOutput,
              outputs: [buildOutput], // ビルド成果物
            }),
          ],
        },
        {
          stageName: 'Deploy',
          actions: [
            new codepipeline_actions.S3DeployAction({
              actionName: 'S3_Deploy',
              bucket: websiteBucket,
              input: buildOutput,
            }),
          ],
        },
      ],
    });

    // // VPCの作成
    // const vpc = new ec2.Vpc(this, 'CorporateSiteVPC', {
    //   ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/24'),
    //   maxAzs: 1,
    //   subnetConfiguration: [
    //     {
    //       cidrMask: 28,
    //       name: 'corporate_site_pub_snet',
    //       subnetType: ec2.SubnetType.PUBLIC,
    //     },
    //   ],
    // });

    // // セキュリティグループの作成
    // const securityGroup = new ec2.SecurityGroup(this, 'CorporateSiteSG', {
    //   vpc,
    //   allowAllOutbound: true,
    //   securityGroupName: 'corporate_site_sg',
    // });

    // // セキュリティグループのルール追加
    // securityGroup.addIngressRule(ec2.Peer.ipv4('14.8.17.224/32'), ec2.Port.tcp(22), 'Allow SSH');
    // securityGroup.addIngressRule(ec2.Peer.ipv4('14.8.17.224/32'), ec2.Port.tcp(80), 'Allow HTTP');
    // securityGroup.addIngressRule(ec2.Peer.ipv4('14.8.17.224/32'), ec2.Port.tcp(443), 'Allow HTTPS');

    // // SSH キーペアの作成
    // const keyPair = new ec2.KeyPair(this, 'KeyPair', {
    //   keyPairName: 'corporate-site-key',
    //   type: ec2.KeyPairType.ED25519,
    //   format: ec2.KeyPairFormat.PEM,
    // });
    // // EC2インスタンスの作成
    // new ec2.Instance(this, 'CorporateSiteInstance', {
    //   instanceName: 'corporate_site',
    //   vpc,
    //   vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
    //   instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
    //   machineImage: ec2.MachineImage.latestAmazonLinux2023(),
    //   keyPair,
    //   securityGroup,
    //   blockDevices: [
    //     {
    //       deviceName: '/dev/xvda',
    //       volume: ec2.BlockDeviceVolume.ebs(30),
    //     },
    //   ],
    // });
  }
}
