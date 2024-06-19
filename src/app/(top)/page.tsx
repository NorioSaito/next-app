import Hero from '../_components/Hero';
import OnclickSample from '../_components/OnclickSample';
import ScssSample from '../_components/ScssSample';

export default function Home() {
	return (
		<main>
			<Hero title="Top" text="トップページ" />
			<ScssSample />
			<OnclickSample />
		</main>
	);
}
