'use client'
import Name from '@/app/_components/name';
import Navbar from '@/app/_components/navbar';
import React, {useState, useEffect} from 'react';



export default function Music() {
    const [data, setData] = useState(null);


    useEffect(() => {
        const getArtists = async () => {
            const res = await fetch('/api/getRecents', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            setData(data)
            console.log(data)
        }
        getArtists()

    } ,[])

    return(
        <div className='flex flex-col w-full min-h-screen font-text'>
            <div className='flex flex-col flex-1 justify-start items-center p-4 gap-4 min-w-full bg-bg dark:bg-dark-bg md:p-6'>
                <Name />
				<div className='flex w-full bg-accent dark:bg-dark-accent h-[1px]'></div>
<Navbar />
<div className='flex flex-wrap w-full lg:flex-row flex-col justify-between gap-12 pt-6'>
{/* {data && data.items.map((artist, index) => (
   <div>
    {data}
   </div>   
))} */}
</div>
            </div>
        </div>
    )
}