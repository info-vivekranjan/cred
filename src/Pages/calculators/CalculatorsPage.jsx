import "./StylesCalculator.css";
import Footer from "../../Components/Footer"
import CalNavbar from "./Cal-Components/CalNavbar"
import {Link} from 'react-router-dom';

const CalculatorsPage = () => {
    return(
        <>
           <CalNavbar/>
           <div className="calculators-container">
                <h2>Calculators</h2>
                <p>
                    from finding returns on investments to the ideal EMI to pay for your dream car: <br/>
                    take the first step towards securing your financial health with the help of <br/>
                    these calculators
                </p>

                <div className="calculators-container-grid">

                    <div className="box-one">
                        <div>
                            <p>investments</p>
                            <h2>compound interest calculator</h2>
                        </div>
                        <button className="try-now-btn">Try now</button>
                    </div>

                    <div className="box-two">
                        <div>
                            <p>investments</p>
                            <h2>fixed deposit calculator</h2>
                        </div>
                        <button className="try-now-btn">Try now</button>
                    </div>

                    <div className="box-three">
                        <div>
                            <p>loans</p>
                            <h2>simple loan calculator</h2>
                        </div>
                        <button className="try-now-btn">Try now</button>
                    </div>

                    <div className="box-four">
                        <div>
                            <p>investments</p>
                            <h2>rd calculator</h2>
                        </div>
                        <button className="try-now-btn">Try now</button>
                    </div>

                    <div className="box-five">
                        <div>
                            <p>loans</p>
                            <h2>car loan calculator</h2>
                        </div>
                        <Link to={'/calculators/CarLoanCalculator'}><button className="try-now-btn">Try now</button></Link>
                    </div>

                    <div className="box-six">
                        <div>
                            <p>savings</p>
                            <h2>ppf calculator</h2>
                        </div>
                        <button className="try-now-btn">Try now</button>
                    </div>  

                    <div className="box-seven">
                        <div>
                            <p>loans</p>
                            <h2>home loan calculator</h2>
                        </div>
                        <Link to={'/calculators/HomeLoanCalculator'}><button className="try-now-btn">Try now</button></Link>
                    </div>

                    <div className="box-eight">
                        <div>
                            <p>loans</p>
                            <h2>emi calculator</h2>
                        </div>
                        <button className="try-now-btn">Try now</button>
                    </div>

                    <div className="box-nine">
                        <div>
                            <p>investments</p>
                            <h2>sip calculator</h2>
                        </div>
                        <Link to={'/calculators/SipCalculator'}><button className="try-now-btn">Try now</button></Link>
                    </div>

                </div>
           </div>
           <Footer/>
        </>
    )
}

export default CalculatorsPage;