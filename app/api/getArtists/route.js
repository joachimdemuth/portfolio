import querystring from 'querystring-es3'
var Buffer = require('buffer/').Buffer
import { NextResponse } from 'next/server'
import { getAccessToken } from '../../_utils/getAccessToken'

export const revalidate = 180;



export async function GET(request){
    const { access_token } = await getAccessToken()
        const res = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10`, {

                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                }
            })
            if(res.ok) {
        
                const data = await res.json()
                // console.log(data)
                return NextResponse.json(data)
            } else {
                console.log("error")
                return NextResponse.json(
                    { error: 'Internal Server Error' },
                    { status: 500 },
                );
            }
}

