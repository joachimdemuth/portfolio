import queryString from 'querystring-es3'


const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
const basic = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')
const TOKEN_ENDPOINT = process.env.SPOTIFY_TOKEN_ENDPOINT
export async function getAccessToken() {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString.stringify({
            grant_type: 'refresh_token', refresh_token,
        }),
    })

    return response.json();

}