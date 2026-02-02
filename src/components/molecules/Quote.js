'use client'
import React, { useState, useEffect } from "react";




export default function Quote() {


    const [quote, setQuote] = useState()
    const [quotes, setQuotes] = useState()
    const getRandomNumber = (max) => {
        return Math.floor(Math.random() * max)
    }

    const RandomQuote = () => {




    }
    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/quotes`, {
                headers: { 'Authorization': "Bearer 8eec51f7f8bb98d277f49e44633c5b7b221a0b3c44a712f2c462497f46539e4ab7392c43c1b6d19a37ecaf329e7f8ae1d63b39a99d912ec4c7ee7abd85bf11cc1fe2817eb105626d365cb135427e935d34e1832799e15b670015251e5f02da902195dc08b679ce92fb00be2647c9289ddb1714324f8e4182fae5e46f1ded6507", }

            })

            if (!res.ok) {
                throw new Error("Something happen!")

            }
            const data = await res.json()
            console.log('quote',data.data.length)
            setQuotes(data.data)
               const number= getRandomNumber(data.data.length)
               console.log('number',number);
          

        }
        fetchData()

      

    }, [])

const tab=quotes.map((item,index)=>
    item.text
)

console.log('tab',tab)





    return (
        <div>
            <h3>
                {tab[2]}

            </h3>

        </div>
    )

}