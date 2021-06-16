import {Switch, Route} from 'react-router-dom';
import CalculatorsPage from './Pages/calculators/CalculatorsPage';
import SipCalculator from './Pages/calculators/SipCalculator';
import EmiCalculator from './Pages/calculators/EmiCalculator';
import CarLoanCalculator from './Pages/calculators/CarLoanCalculator';
import HomeLoanCalculator from './Pages/calculators/HomeLoanCalculator';
import SimpleLoanCalculator from './Pages/calculators/SimpleLoanCalculator';
import FixedDepositCalculator from './Pages/calculators/FixedDepositCalculator';
import CompoundInterestCalculator from './Pages/calculators/CompoundInterestCalculator';
import HomePage from './Pages/HomePage';


const Routes = () => {
    return(
       <Switch>
           <Route path="/" exact>
               <HomePage/>
           </Route>
           <Route path="/calculators/" exact>
               <CalculatorsPage/>
           </Route>
           <Route path="/calculators/SipCalculator" exact>
               <SipCalculator/>
           </Route>
           <Route path="/calculators/EmiCalculator" exact>
               <EmiCalculator/>
           </Route>
           <Route path="/calculators/CarLoanCalculator" exact>
               <CarLoanCalculator/>
           </Route>
           <Route path="/calculators/HomeLoanCalculator" exact>
               <HomeLoanCalculator/>
           </Route>
           <Route path="/calculators/SimpleLoanCalculator" exact>
               <SimpleLoanCalculator/>
           </Route>
           <Route path="/calculators/FixedDepositCalculator" exact>
               <FixedDepositCalculator/>
           </Route>
           <Route path="/calculators/CompoundInterestCalculator" exact>
               <CompoundInterestCalculator/>
           </Route>

       </Switch>
    )
}

export default Routes;