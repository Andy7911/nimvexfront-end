import Image from "next/image";

import imgTokyoSeach from "../../public/img/tokyo-magnifier-web.png";
import iconButton from '../../public/img/icon.png'
import Accordion from "../components/organisms/Accordion";
import Contact from "../components/organisms/Contact";
import LoadingScreen from "../components/templates/LoadingScreen";
import CurtainAnimation from "../components/templates/CurtainAnimation";
import ReactMarkdown from 'react-markdown';
import parse from 'html-react-parser';
import Editeur from '../components/templates/Editeur'
import UseCaseSwiper from '../components/organisms/UserCaseSwiper';
import Quote from "../components/molecules/Quote";
export default async function Home() {

 


  async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate[Hero][populate]=*&populate[MarketingInfo][populate]=*&populate[Services][populate]=*&populate[UserCase][populate]=*&populate[ProcessCard][populate]=*&locale=fr`, {

      headers: {
        'Authorization': "Bearer 8eec51f7f8bb98d277f49e44633c5b7b221a0b3c44a712f2c462497f46539e4ab7392c43c1b6d19a37ecaf329e7f8ae1d63b39a99d912ec4c7ee7abd85bf11cc1fe2817eb105626d365cb135427e935d34e1832799e15b670015251e5f02da902195dc08b679ce92fb00be2647c9289ddb1714324f8e4182fae5e46f1ded6507",
      }
    });
    let data = await res.json(); // Lire les données une seule fois
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    return data


  }
  let data = await getData();
  const { Hero, MarketingInfo, Services, ProcessCard, UserCase } = data.data;



  const switchLanguage = (lang) => {
    push(pathname, pathname, { locale: lang });
  };



  // const element = INFO.map((item,index) =>{
  //   return(
  //   <p key={item.id}> {item} </p>)
  // })
  // Vérifier si les données sont disponibles

  return (



    <div className="home container">

      <div className="hero">
        <div className="hero__left">
          {/* {element} */}
          <h1 className="desktop-show">{Hero.Headline}</h1>
          <p className="">{Hero.Text} </p>
          <a className="primary-btn" href="#Contact">{Hero.btn.Text}</a>
        </div>
        <div className="hero__right">
          <h1 className="mobile-show">{Hero.Headline}</h1>
          <img src={`${process.env.NEXT_PUBLIC_API_HOST}${Hero.Image.url}`} alt="text" />
        </div>
      </div>

      <div className="service">
        <div className="service__title">
          <h2>Service</h2>
          <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>
        <div className="service__content">

          {Services.map((item, index) => (
            <div className="service__card" key={index}>
              <div className="service__card_left">
                <div>
                  <h3>{item.Title ?? "null"} </h3>
                  <h3> {item.title_2 ?? 'Null'} </h3>
                </div>
                <a className="icon-btn" href='/services'> <span className="icon"><Image src={iconButton} width={30} height={30} alt="icon" /> </span> <span className="desktop-show">En apprendre plus</span> </a>
              </div>


              <div className="service__card_right">

                <img className="" src={`${process.env.NEXT_PUBLIC_API_HOST}${item.image.url}`} width={210} height={166} alt="img"></img>
              </div>
            </div>
          ))}
        </div>



      </div>
      <div className="marketing">

        <div className='marketing__card'>
          <div className="marketing__card_left">
            <h3> {MarketingInfo.Headline} </h3>
            <p>{MarketingInfo.Paragraphe}</p>

            <a className="primary-btn">{MarketingInfo.Btn.Text}</a>
          </div>
          <div className="marketing__card_right  desktop-show">
            <img width={300} height={300} src={`${process.env.NEXT_PUBLIC_API_HOST}${MarketingInfo.Image.url}`} alt="img2" ></img>
          </div>

        </div>

      </div>
      <UseCaseSwiper UserCases={UserCase}>

      </UseCaseSwiper>
{/* 
      <section className="case_study">
        <div className="case_study__top">
          <h3> {UserCase.highline_title}</h3>
          <p>{UserCase.paragraphe}</p>
        </div>

        <div className="case_study__content">
         
          {UserCase.user_cases.map((item,index)=>{
          

            return(
          <div className="case_study__text" key={index}>
            <p>{item.intro}</p>
            <a>Learn more <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66" />
            </svg> </span></a>
          </div>)})}

        </div>
      </section> */}



      <div className="working">
        <div className="working__top">
          <h2> Nos Processus</h2>
          <p>Guide étape par étape pour atteindre vos objectifs commerciaux</p>

        </div>
        {ProcessCard.map((item, index) => (
          <Accordion key={index} title={item.Headline} content={item.Description} />

        ))}
      </div>
      {/* <section className="team">
        <div className="team__introduction">

          <h2>Mon equipe</h2>
          <p>Notre equipe est pret a concevoir des site web ou application mobile  afin de faire grandir votre entreprise </p>
        </div>
        <div className="member">
          <h3>Membres de equipe</h3>

          <div className="member__content">
            <div className="member__picture">
              <div className="member__picture_left">

                <Image src='http://localhost:1337/uploads/Untitled_2_4348142d38.jpg' width={150} height={100} alt="bon" />
              </div>
              <div className="member__picture_right">
                <span>Anderson beauvais</span>
                <h4>Programmeur - Full stack</h4>
                <span><strong>Expertise:</strong> Javacript Next.js Node.js React native</span>
              </div>
            </div>
            <div className="member__picture">
              <div className="member__picture_left">
                <Image src='http://localhost:1337/uploads/daviddoe_strapi_c7da979d27.jpeg' width={150} height={100} alt="ju" />
              </div>
              <div className="member__picture_right">
                <h4>Programmeur - Full stack</h4>
                <span><strong>Expertise:</strong> Javacript Next.js Node.js React native</span>
              </div>
            </div>
            <div className="member__picture">
              <div className="member__picture_left">
                <Image src='http://localhost:1337/uploads/daviddoe_strapi_c7da979d27.jpeg' width={150} height={100}  alt="hyu"/>
              </div>
              <div className="member__picture_right">
                <h4>Programmeur - Full stack</h4>
                <span><strong>Expertise:</strong> Javacript Next.js Node.js React native</span>
              </div>
            </div>

          </div>

        </div>
     
      </section> */}
{/* <Quote/> */}
      <Contact />
    </div>
  );
}
