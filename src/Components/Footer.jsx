import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <div className="footer-content">
                <div className="footer-col-1">
                    <ul>
                        <li>blog</li>
                        <li>careers</li>
                        <li>articles</li>
                        <li>credit score check</li>
                        <li>terms and conditions</li>
                        <li>UPI faq</li>
                        <li>google API disclosure</li>
                        <li>security</li>
                        <li>privacy policy</li>
                        <li>return & refund policy</li>
                        <li>transaction & user verification policy</li>
                    </ul>
                    <div className="footer-security">
                        <h4>complete security. no asterisks.</h4>
                        <p>CRED encrypts all data and transactions 
                        to <br/> ensure a completely secure experience 
                        for our <br/> members.</p>
                        <img src="https://web-assets.cred.club/_next/assets/images/home-page/security-cert.png"/>
                    </div>
                </div>

                <div className="footer-col-2">
                    
                        <ul>
                            <li><Link to={'/calculators/'}>calculators</Link></li>
                            <li><Link to={'/calculators/SipCalculator/'}>SIP calculator</Link></li>
                            <li><Link to={'/calculators/EmiCalculator/'}>EMI calculator</Link></li>
                            <li><Link>PPF calculator</Link></li>
                            <li><Link to={'/calculators/HomeLoanCalculator'}>home loan calculator</Link></li>
                            <li><Link to={'/calculators/CarLoanCalculator'}>Car loan calculator</Link></li>
                            <li><Link to={'/calculators/FixedDepositCalculator'}>fixed deposit calculator</Link></li>
                            <li><Link>recurring deposit calculator</Link></li>
                            <li><Link to={'/calculators/SimpleLoanCalculator'}>simple loan calculator</Link></li>
                            <li><Link to={'/calculators/CompoundInterestCalculator'}>compound interest calculator</Link></li>
                        </ul>

                    <div className="clear"></div>

                    <h4>about CRED</h4>

                    <p>CRED is a members only credit card bill payment platform that 
                    rewards its members for clearing their credit card bills on time.
                    CRED members get access to exclusive rewards and experiences from 
                    premier brands upon clearing their credit card bills on CRED.</p>

                    <h4>how does CRED reward their users?</h4>

                    <p>CRED partners with the best premier and luxury brands to bring 
                    you an unmatched experience at the end of every credit card bill 
                    payment cycle.</p>

                    <h4>how to earn rewards on CRED?</h4>

                    <p>members can earn rewards in two different ways. CRED coins & gems.<br/>
                    CRED Coin Rewards:<br/>
                    when you pay your credit card bill on CRED, for every rupee cleared on your bill you earn a CRED coin.
                    you can then use earned CRED coins to claim exclusive rewards from different brands.<br/>
                    CRED Gem Rewards:<br/>
                    for every person that you refer to CRED who makes a bill payment, you earn 10 gems.</p>

                   <h4> what do you get as a CRED Member?</h4>

                    as a CRED member, you instantly make your credit card payment experience hassle-free by unlocking several perks only available to CRED members.
                    - seamless bill payment experience through modes like upi, net banking and debit cards
                    - timely credit card bill payment reminders
                    - automate your credit card bill payments
                    - expose hidden charges on your credit card with cred protect
                    - get real-time alerts on duplicate transactions on your credit card
                    - manage multiple credit cards on a single portal
                    - keep a realtime check on your credit score

                    <h4>how does one become a member of CRED?</h4>

                    you can apply to be a member by signing up on CRED with your name and 
                    valid mobile number(issued within India). CRED is India’s most trustworthy 
                    and creditworthy community. This means we are selective about the members 
                    we take. For membership an Experian credit score of 750 or above is mandatory.
                    
                    <h4>how to know your credit score?</h4>

                    upon becoming a member, you can check and refresh your credit score 
                    with a single click. CRED then proceeds to acquire your updated credit
                    score through a CIBIL score soft inquiry. on CRED, you can access your 
                    credit score data anytime without any extra charges. as a member, this helps 
                    you keep regular checks on your credit score and re-evaluate your spending patterns 
                    to maintain a healthy credit status.
                    
                    <h4>banks supported on CRED</h4>

                    CRED supports credit card bill payment for American Express, Standard 
                    Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, Kotak, RBL, PNB and 
                    other top Indian banks. We support VISA, MasterCard, American express & RuPay cards.
                    for product feedback, reach out to us at feedback@cred.club
                    this site is protected by reCAPTCHA and the Google privacy policy and terms of service apply.

                </div>

            </div>

        </footer>
    )
}

export default Footer;