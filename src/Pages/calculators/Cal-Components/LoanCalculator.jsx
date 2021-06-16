import { useState } from "react";
import {Pie, Doughnut} from "react-chartjs-2";
import Slider from "@material-ui/core/Slider";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const LoanCalculator = () => {

    const [pAmount, setpAmount] = useState(1000000);
    const [interest, setInterest] = useState(8.5);
    const [duration, setDuration] = useState(120);
    // const [totalValue, setTotalValue] = useState();
    // const [totalIntrest, setTotalInterst] = useState();
    const maxValue = 6000000;
    const intMax = 20;
    const maxDuration = 360;

    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1-(Math.pow(1/(1+intr),duration)))) : 0;
    const totalAmt = duration * emi;
    var TotalAmountofCredit = Math.round((emi/intr) * (1-Math.pow((1+intr),(-duration))));
    const TotaolAmountofInterest = Math.round(totalAmt - TotalAmountofCredit);

    const PresttoSlider = withStyles({
        root : {color:"rgb(125, 144, 226)",height:10},
        thumb : {height:20,width:20,backgroundColor:"white", border:"3px solid skyblue", marginTop:-7,marginLeft : -9},
        track : {height:7, borderRadius:3},
        rail : {height:7, boderRadius:3},  
    })(Slider);
    

    return(
        <>
        {/* <div className="calculator">
            <div className="calculator-col-1"> 
                <div><p>monthly investment</p> <p>₹ {pAmount}</p></div>
                <input type="range" value={pAmount} defaultValue={pAmount} max={maxValue} onChange={(event,vAmt)=>{setpAmount(vAmt)}}/>
                <div><p>expected annual return rate</p> <p>₹ {interest}</p></div>
                <input type="range" value={interest} defaultValue={interest} max={intMax} onChange={(event,vInt)=>{setInterest(vInt)}}/>
                <div><p>time period</p> <p>{duration/12} years</p></div>
                <input type="range" value={duration} defaultValue={duration} max={maxDuration} onChange={(event,vDur)=>{setDuration(vDur)}}/>
                <div>
                    <p>total value: </p>
                    <p>₹ 73,61,616</p>
                </div>
            </div>
            <div className="calculator-col-2"> 
                
                    <div className="pie"></div>
                    <div style={{width:"100%"}}>
                        <span style={{display:"flex",justifyContent:"space-around"}}><p>invested amount</p> <p>₹48,00,000</p></span> <br/>
                        <span style={{display:"flex",justifyContent:"space-around"}}><p>estimated returns</p> <p>₹25,61,616</p> </span>
                    </div>   

            </div>
        </div> */}


           <div className="calculator">
            <div className="calculator-col-1"> 
                    <div><p>loan amount</p> <p>₹ {pAmount}</p> </div>
                    <PresttoSlider value={pAmount} onChange={(event,vAmt)=>{setpAmount(vAmt)}} defaultValue={pAmount} max={maxValue}></PresttoSlider>

                    <div><p>rate of interest</p> <p>{interest} %</p></div>
                    <PresttoSlider value={interest} onChange={(event,vInt)=>{setInterest(vInt)}} defaultValue={interest} max={intMax}></PresttoSlider>

                    <div><p>loan tenure</p> <p>{Math.round(duration/12)} years</p></div>
                    <PresttoSlider value={duration} onChange={(event,vDur)=>{setDuration(vDur)}} defaultValue={duration} max={maxDuration}></PresttoSlider>

                    <div>
                        <p>EMI </p>
                        <p>₹ {emi}</p>
                    </div>

            </div>

            <div className="calculator-col-2"> 
                
                <Doughnut
                    data = {{
                        datasets : [{
                            data : [TotaolAmountofInterest, pAmount],
                            backgroundColor : ['rgb(125, 144, 226)','pink'],
                            radius: 110,
                            cutout:175
                        }]
                        //labels : [`Principal amount : ${pAmount}` , `Total Interest : ${TotaolAmountofInterest}`],
                    }}
                    width={10}
                    height={10}
                />

                    <div style={{width:"100%",marginTop:"-50px"}}>
                        {/* <span style={{display:"flex",justifyContent:"space-around"}}><p>Principal amount </p> <p>₹ {pAmount}</p></span> <br/>
                        <span style={{display:"flex",justifyContent:"space-around"}}><p>Total Interest</p> <p>₹ {TotaolAmountofInterest}</p> </span> */}

                        <table style={{width:"100%",marginLeft:"40px"}}>
                                        <tr>
                                              <td height="40px"><div style={{height:"15px",width:"15px",backgroundColor:"rgb(125, 144, 226)",float:"left", borderRadius:"50px"}}></div><p style={{marginLeft:"25px"}}>Principal amount </p></td>
                                              <td style={{textAlign:"center"}}><p>₹ {pAmount}</p></td>
                                        </tr>
                                        <tr>
                                              <td><div style={{height:"15px",width:"15px",backgroundColor:"pink",float:"left", borderRadius:"50px"}}></div><p style={{marginLeft:"25px"}}>Total Interest</p></td>
                                              <td style={{textAlign:"center"}}><p>₹ {TotaolAmountofInterest}</p></td>
                                        </tr>
                        </table>
                    </div>   

            </div>
        </div>


        </>
    )
}

export default LoanCalculator;