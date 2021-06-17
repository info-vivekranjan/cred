import CalNavbar from "./Cal-Components/CalNavbar";
import LoanCalculator from "./Cal-Components/LoanCalculator";
import Footer from "../../Components/Footer";
import { useState } from "react";
import {Pie, Doughnut} from "react-chartjs-2";
import Slider from "@material-ui/core/Slider";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const FixedDepositCalculator = () => {

    const [monthlyInvestment, setMonthlyInvestment] = useState(100000);
    const [interest, setInterest] = useState(6.5);
    const [duration, setDuration] = useState(60);
    // const [totalValue, setTotalValue] = useState();
    // const [totalIntrest, setTotalInterst] = useState();
    const maxValue = 6000000;
    const intMax = 20;
    const maxDuration = 360;

    // A = P × (1 + r/4)n

    const MaturityAmount = monthlyInvestment * (1 + 0.1/4) ** (4*(duration/12));

    // const intr = interest / 1200;
    // const emi = duration ? Math.round(pAmount * intr / (1-(Math.pow(1/(1+intr),duration)))) : 0;
    // const totalAmt = duration * emi;
    // var TotalAmountofCredit = Math.round((emi/intr) * (1-Math.pow((1+intr),(-duration))));
    const TotaolAmountofInterest = MaturityAmount - monthlyInvestment;

    const PresttoSlider = withStyles({
         root : {color:"rgb(125, 144, 226)",height:10},
         thumb : {height:20,width:20,backgroundColor:"white", border:"3px solid skyblue", marginTop:-7,marginLeft : -9},
         track : {height:7, borderRadius:3},
         rail : {height:7, boderRadius:3},    
    })(Slider);
    

    return(
       <div>
          <CalNavbar/>

            <div className="emi-cal-container">
                        <h2>Fixed Deposit Calculator</h2>
                        <p>
                            an sip calculator is an online tool using which you can decide on your sip <br/>
                            monthly investment amount and the investment time period. you can also <br/> 
                            find out how much you can expect to earn by investing an amount for a <br/>
                            specific period
                        </p>
                        <div className="sip-cal-cover"></div>
                        
                    <div className="calculator">
                        <div className="calculator-col-1"> 
                                <div><p>monthly investment</p> <p>₹ {monthlyInvestment}</p> </div>
                                <PresttoSlider value={monthlyInvestment} onChange={(event,vAmt)=>{setMonthlyInvestment(vAmt)}} defaultValue={monthlyInvestment} max={maxValue}></PresttoSlider>

                                <div><p>rate of interest</p> <p>{interest} %</p></div>
                                <PresttoSlider value={interest} onChange={(event,vInt)=>{setInterest(vInt)}} defaultValue={interest} max={intMax}></PresttoSlider>

                                <div><p>time period</p> <p>{Math.round(duration/12)} years</p></div>
                                <PresttoSlider value={duration} onChange={(event,vDur)=>{setDuration(vDur)}} defaultValue={duration} max={maxDuration}></PresttoSlider>

                                <div>
                                    <p>Maturity Amount :</p>
                                    <p>₹ {MaturityAmount}</p>
                                </div>

                        </div>

                        <div className="calculator-col-2"> 
                            
                            <Doughnut
                                data = {{
                                    datasets : [{
                                        data : [TotaolAmountofInterest, monthlyInvestment],
                                        backgroundColor : ['rgb(125, 144, 226)','pink'],
                                        radius: 110,
                                        cutout:175
                                    }]
                                    //labels : [`Principal amount : ${pAmount}` , `Total Interest : ${TotaolAmountofInterest}`],
                                }}
                                width={10}
                                height={10}
                            />
                             <div>

                             </div>

                                <div style={{width:"100%",marginTop:"-50px"}}>
                                    <table style={{width:"100%",marginLeft:"40px"}}>
                                        <tr>
                                              <td height="40px"><div style={{height:"15px",width:"15px",backgroundColor:"rgb(125, 144, 226)",float:"left", borderRadius:"50px"}}></div><p style={{marginLeft:"25px"}}>Principal amount </p></td>
                                              <td style={{textAlign:"center"}}><p>₹ {monthlyInvestment}</p></td>
                                        </tr>
                                        <tr>
                                              <td><div style={{height:"15px",width:"15px",backgroundColor:"pink",float:"left", borderRadius:"50px"}}></div><p style={{marginLeft:"25px"}}>Total Interest</p></td>
                                              <td style={{textAlign:"center"}}><p>₹ {TotaolAmountofInterest}</p></td>
                                        </tr>
                                    </table>
                                </div>   

                        </div>
                    </div>

            </div>

          <Footer/>

       </div>
    )
}

export default FixedDepositCalculator;