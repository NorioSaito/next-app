import ProductDetail from '../ProductDetail';

type Detail = {
	subject: string;
	description: string;
};
type Feature = {
	name: string;
	details: Detail[];
};
type Product = {
	name: string;
	text: string;
	features: Feature[];
};
function Celf() {
	const celf: Product = {
		name: 'CELF',
		text: 'CELF CELF CELF CELF CELF CELF CELF CELF CELF CELF CELF ',
		features: [
			{
				name: 'ノーコードアプリ開発ツール',
				details: [
					{
						subject: 'ノーコードアプリ開発ツール',
						description:
							'hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge ',
					},
					{
						subject: 'Excel ライクで開発できる',
						description:
							'hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge ',
					},
				],
			},
			{
				name: 'RPA 機能搭載（有償オプション）',
				details: [
					{
						subject: '定型作業を自動化できる',
						description:
							'hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge ',
					},
					{
						subject: '開発未経験者でもアプリ開発ができる',
						description:
							'hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge ',
					},
				],
			},
		],
	};

	return <ProductDetail product={celf} />;
}

export default Celf;
