
import Image from "next/image"

export default async function Page() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/User-Cases?[populate]=*`, {

        headers: {
            'Authorization': "Bearer 8eec51f7f8bb98d277f49e44633c5b7b221a0b3c44a712f2c462497f46539e4ab7392c43c1b6d19a37ecaf329e7f8ae1d63b39a99d912ec4c7ee7abd85bf11cc1fe2817eb105626d365cb135427e935d34e1832799e15b670015251e5f02da902195dc08b679ce92fb00be2647c9289ddb1714324f8e4182fae5e46f1ded6507",
        }

    })

    const response = await res.json()

    console.log('dtata', response)


    return (
        <div className="blog container">

            <div className="blog__top">
                <h2> User Cases</h2>
                <p>
                    Bienvenue sur notre page de cas d'utilisateur ! Ici, nous partageons des idées, des conseils et des histoires inspirantes. Restez connectés pour découvrir des articles variés sur des sujets passionnants
                </p>

            </div>

            <div className="blog__content">
                {response.data.map((item, index) => {

                    return (
                        <div className="blog__card" key={index}>



                            <Image src={`${process.env.NEXT_PUBLIC_API_HOST}${item.Picture.url}`} width={150} height={50} alt={`${item.Picture.alternativeText}`}  />

                            <div className="blog__card_top">
                                <div className="blog__top_content">
                                    {item.categories.map((item, index) => {
                                        return (
                                            <span className="blog__card_category">
                                                {item.title}
                                            </span>)
                                    })}

                                </div>
                                <h4> {item.title}</h4>




                            </div>
                            <div className="blog__card_body">
                                <p>
                                    {item.apercu}
                                </p>
                            </div>
                            <div className="blog__card_bottom">
                                <a href={`/cases/${item.slug}`}> En Savoir </a>
                            </div>

                        </div>

                    )


                })}
            </div>
        </div>
    )




}