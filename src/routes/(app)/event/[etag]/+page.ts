/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return { tag: params.etag };
}
