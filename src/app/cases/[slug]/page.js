import React from 'react'
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Editeur from '../../../components/templates/Editeur';
import Image from 'next/image';

export default async function Page({ params }){

const {slug } = await params

const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/user-cases?[populate]=*&filters[slug][$eq]=${slug}`, {
    headers: {
       'Authorization': "Bearer 8eec51f7f8bb98d277f49e44633c5b7b221a0b3c44a712f2c462497f46539e4ab7392c43c1b6d19a37ecaf329e7f8ae1d63b39a99d912ec4c7ee7abd85bf11cc1fe2817eb105626d365cb135427e935d34e1832799e15b670015251e5f02da902195dc08b679ce92fb00be2647c9289ddb1714324f8e4182fae5e46f1ded6507",
    },

 }
)
const response = await res.json()

console.log(response.data[0])

    return(
       <div className="blog-single container">
       
             <div className="wysiwyg">
             <h1> {response.data[0].title ?? "null"}</h1>
                    <Image src={`${process.env.NEXT_PUBLIC_API_HOST}${response.data[0].Picture.url}`}  width={600} height={400}/>
                      <Editeur Article={response.data[0].richText}/> 
             </div>
       
          </div>
    )
}