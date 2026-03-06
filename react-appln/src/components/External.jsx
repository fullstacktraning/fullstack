import "./External.css"
import acer from "../../public/acer.png"
import dell from "../../public/dell.png"
import hp from "../../public/hp.png"
import mac from "../../public/mac.png"
const External = ()=>{
    return(
        <>
            <div className="parent">
                <div className="common">
                    <img src={acer} alt="Acer" className="img"></img>
                    <h2>Acer</h2>
                    <p><i className="fa fa-inr"></i> 20000</p>
                </div>

                <div className="common">
                    <img src={dell} alt="Dell" className="img"></img>
                    <h2>Dell</h2>
                    <p>40000</p>
                </div>

                <div className="common">
                    <img src={hp} alt="Hp" className="img"></img>
                    <h2>Hp</h2>
                    <p>60000</p>
                </div>

                <div className="common">
                    <img src={hp} alt="Hp" className="img"></img>
                    <h2>Hp</h2>
                    <p>60000</p>
                </div>


                 <div className="common">
                    <img src={acer} alt="Acer" className="img"></img>
                    <h2>Acer</h2>
                    <p>20000</p>
                </div>

                <div className="common">
                    <img src={dell} alt="Dell" className="img"></img>
                    <h2>Dell</h2>
                    <p>40000</p>
                </div>

                <div className="common">
                    <img src={hp} alt="Hp" className="img"></img>
                    <h2>Hp</h2>
                    <p>60000</p>
                </div>

                <div className="common">
                    <img src={hp} alt="Hp" className="img"></img>
                    <h2>Hp</h2>
                    <p>60000</p>
                </div>

                <div className="common">
                    <img src={mac} alt="Mac" className="img"></img>
                    <h2>Mac</h2>
                    <p>80000</p>
                </div>
            
            </div>
        </>
    )
}
export default External;