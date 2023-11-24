var Buffer = require('buffer/').Buffer; // note: the trailing slash is important!
import { NextResponse } from 'next/server';
import { getAccessToken } from '../../_utils/getAccessToken';

export const revalidate = 0;


export async function GET(request) {
	const { access_token } = await getAccessToken();
	const res = await fetch(
		'https://api.spotify.com/v1/me/player/currently-playing',
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
				'Content-Type': 'application/json',
			},
		},
	);
	console.log(res.status);
	if (res.ok) {
		const data = await res.json();
		// console.log(data);
		return NextResponse.json(data);
	} else {
		console.log('error');
		console.log(res)
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		);
		// return new Response(JSON.stringify({
		//     message: `Error fetching data: ${res.status} ${res.statusText}`
		// }), { status: res.status })
	}
}
