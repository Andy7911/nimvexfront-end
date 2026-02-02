import React from "react";
import Accordion from "../../components/organisms/Accordion";
import Image from "next/image";
import ServicesAccordion from "../../components/organisms/ServicesAccordion";
import Editeur from "../../components/templates/Editeur";
export default async function Page() {

    async function getData() {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?[populate]=*`, {

            headers: {
                'Authorization': "Bearer 8eec51f7f8bb98d277f49e44633c5b7b221a0b3c44a712f2c462497f46539e4ab7392c43c1b6d19a37ecaf329e7f8ae1d63b39a99d912ec4c7ee7abd85bf11cc1fe2817eb105626d365cb135427e935d34e1832799e15b670015251e5f02da902195dc08b679ce92fb00be2647c9289ddb1714324f8e4182fae5e46f1ded6507",
            }
        });
        let data = await res.json(); // Lire les données une seule fois
        await new Promise((resolve) => setTimeout(resolve, 3000));

        return data


    }
    let  response  = await getData();
    console.log(response.data)

    return (

        <div className="services container">

            <h1>Service</h1>

            {
                response.data.map((item, index) => {
                    return (<section className="service_section">

                        <div className="service_section__left" key={index}>
                            <h2>
                               {item.Title}
                            </h2>
                            <Editeur Article={item.Text} />
                            <p>  </p>
                            <div className="service_section__service" id="mobile">
                                {item.accordions.map((item,index)=>{ 
                                    return(                             
                                <ServicesAccordion title={item.Headline ?? 'Null'} content={item.Description ?? "Null"} />
                            )  
                                })}
                                <ServicesAccordion title="Les Services que J’offre" content="✅ Touchez plus de clients : Une application permet une présence directe sur le téléphone de vos utilisateurs.✅ Améliorez l’expérience utilisateur : Offrez une interface fluide et intuitive.✅ Gagnez en efficacité : Automatisez certaines tâches et simplifiez l’interaction avec vos clients. " />
                            </div>
                        </div>
                        <div className="service_section__right">
                            {item.Image && (
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${item.Image.url}`} width={500} height={500} alt="service_section service" />)}
                        </div>

                    </section>)
                   })}
            
        </div >)
}