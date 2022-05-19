/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    const data = await request.json();
    return {
        body: {
            "recieved": true,
            "body": data
        }
    }
}