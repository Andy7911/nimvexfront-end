import React from "react";
import Image from "next/image";

import Editeur from "../../components/templates/Editeur";


export default async function Blog() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/blogs?[populate][picture]=*&populate[category]=*`, { caches: "no-store" })

    const response = await res.json()

    console.log(response)

    return (<div className="blog container">

        <div className="blog__top">
            <h2> Blog</h2>
            <p>
                Bienvenue sur notre blog ! Ici, nous partageons des idées, des conseils et des histoires inspirantes. Restez connectés pour découvrir des articles variés sur des sujets passionnants
            </p>

        </div>

        <div className="blog__content">
            {response.data.map((item, index) => {

                return (
                    <div className="blog__card" key={index}>


                        <Image src={`${process.env.NEXT_PUBLIC_API_HOST}${item.picture.url}`} width={150} height={50}  alt={item.picture.alternativeText} />
                        
                        <div className="blog__card_top">

                            <span className="blog__card_category">
                                {item.category.title}
                            </span>

                            <h4> {item.title}</h4>




                        </div>
                        <div className="blog__card_body">
                            <p>
                                {item.apercu}
                            </p>
                        </div>
                        <div className="blog__card_bottom">
                            <a href={`/blog/${item.slug}`}> En Savoir </a>
                        </div>

                    </div>

                )


            })}
        </div>
    </div>)




}