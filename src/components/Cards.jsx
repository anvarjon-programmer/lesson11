import pupy from "../images/pupy.png"
import cat from "../images/cat.png"
import bear from "../images/bear.png"
import number from "../images/number.png"
import prime from "../images/prime.png"
import robot from "../images/robot.png"
export default function Cards(){
    return(
        <section id="cards">
            <div className="container cards">
                <h2 className="trending">Trending Collection</h2>
                <p className="checkout">Checkout our weekly updated trending collection.</p>
                <div className="pupy__card__total">
                    <div className="pupy__card">
                        <img src={pupy} alt="" />
                        <div className="pupy__card__under">
                            <div className="under_1">
                                <img src={cat} alt="" />
                            </div>
                            <div className="under_1">
                                <img src={bear} alt="" />
                            </div>
                            <div className="under_1">
                                <img src={number} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="pupy__card" id="prime">
                        <img src={prime} alt="" />
                        <div className="pupy__card__under">
                            <div className="under_1">
                                <img src={prime} alt="" />
                            </div>
                            <div className="under_1">
                                <img src={prime} alt="" />
                            </div>
                            <div className="under_1">
                                <img src={number} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="pupy__card robot">
                        <img src={robot} alt="" />
                        <div className="pupy__card__under">
                            <div className="under_1">
                                <img src={robot} alt="" />
                            </div>
                            <div className="under_1">
                                <img src={robot} alt="" />
                            </div>
                            <div className="under_1">
                                <img src={number} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}