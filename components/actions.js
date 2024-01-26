'use client'
export async function submitForm(query) {
	await new Promise((res) => {
		setTimeout(res, 1000)
		console.log('algo esta pasando ', res)
		console.log('query ', query)
	});
}
