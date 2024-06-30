export default function customLoader({
	src,
	width,
	quality,
}: {
	src: string;
	width: string;
	quality: string;
}) {
	return `/${encodeURIComponent(src)}?w=${width}&q=${quality || 75}`;
}
