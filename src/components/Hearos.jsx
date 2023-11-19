import { SlRocket } from "react-icons/sl";
import herImg from "../images/Image Placeholder.png"
import animakit from "../images/aniajit.png"

export default function Header() {
    return (
      <section id="hero">
       
        <div className="container">
           <div className="hero__container" id="hero__container">
           <div className="hero__right">
           <h1 className="header__title">
            Discover digital art & Collect NFTs
            </h1>
            <div className="hero__text">
            NFT marketplace UI created with Anima for Figma. 
            Collect, buy and sell art from more than 20k NFT artists.
            </div>
            <button className="hero__button"><SlRocket className="racket"/>
            Get Started</button>
            <div className="kg__wraper">
                <div className="kg__card">
                    <h3 className="kg">240k+ </h3>
                    <p className="total__sale">
                    Total Sale
                    </p>
                </div>
                <div className="kg__card">
                    <h3 className="kg">240k+ </h3>
                    <p className="total__sale">
                    Total Sale
                    </p>
                </div>
                <div className="kg__card">
                    <h3 className="kg">240k+ </h3>
                    <p className="total__sale">
                    Total Sale
                    </p>
                </div>
            </div>
           </div>
            <div className="hero__img">
             <img className="anima__img" src={herImg} alt="" />
             <div className="animatik__buttom">
             <h4 className="hero__img_title">Space Walking</h4>
             <div className="animakit">
                <img src={animakit} alt="" />
                <p className="animakit__title">Animakid</p>
             </div>
             </div>
            </div>
           </div>
        </div>
      </section>
    );
  }