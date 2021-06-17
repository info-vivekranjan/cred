import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import AdminLogin from '../Pages/Admin/AdminLogin';
import Applications from '../Pages/Admin/Applications';
import AllJobs from '../Pages/Careers/AllJobs';
import Careers from '../Pages/Careers/Careers';
import ErrorPage from '../Pages/ErrorPage';
import JobApplication from '../Pages/Careers/JobApplication';
import JobPost from '../Pages/Careers/JobPost';
import NewJob from '../Pages/Admin/NewJob';
import Resume from '../Pages/Admin/Resume';
import Footer from '../Components/Careers/Footer';
import Navbar from '../Components/Careers/Navbar';

import CalculatorsPage from '../Pages/calculators/CalculatorsPage';
import SipCalculator from '../Pages/calculators/SipCalculator';
import EmiCalculator from '../Pages/calculators/EmiCalculator';
import CarLoanCalculator from '../Pages/calculators/CarLoanCalculator';
import HomeLoanCalculator from '../Pages/calculators/HomeLoanCalculator';
import SimpleLoanCalculator from '../Pages/calculators/SimpleLoanCalculator';
import FixedDepositCalculator from '../Pages/calculators/FixedDepositCalculator';
import CompoundInterestCalculator from '../Pages/calculators/CompoundInterestCalculator';
import HomePage from '../Pages/HomePage';

const Routes = () => {
    return (
        <Switch>

            {/* ---------------------------------------- HOMEPAGE ---------------------------------- */}
            <Route path="/" exact>
                <HomePage/>
            </Route>

            {/* ---------------------------------------- CALCULATORS ---------------------------------- */}        
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

            {/* ---------------------------------------- CAREERS ---------------------------------- */}

            {/* HOMEPAGE OF CRED CAREERS "careers.cred.club" */}
            <Route exact path="/careers">
                <Navbar />
                <Careers />
                <Footer />
            </Route>

            {/* ALL JOBS PAGE "careers.cred.club/allJob" */}
            <Route exact path="/careers/allJob">
                <Navbar />
                <AllJobs />
                <Footer />
            </Route>

            {/* DETAILS OF A JOB POST "careers.cred.club/jobPosting?apply_url=https://jobs.lever.co/cred/ID/apply" */}
            <Route path={`/careers/allJob/:jobId`}>
                <Navbar />
                <JobPost />
                <Footer />
            </Route>

            {/* FORM FOR JOB APPLICANTS "careers.cred.club/form?jobId=ID" */}
            <Route path={`/careers/form/:jobDepartment/:jobId/:jobName`}>
                <Navbar />
                <JobApplication />
                <Footer />
            </Route>

            {/* ============================================= ADMIN ============================================== */}
                {/* ADMIN LOGIN PAGE */}
                <Route path="/login">
                    <Navbar />
                    <AdminLogin />
                    <Footer />
                </Route>

                {/* ADMIN DASHBOARD PAGE */}
                <Route path="/dashboard">
                    <Navbar />
                    <AdminDashboard />
                    <Footer />
                </Route>

                {/* ADMIN NEW JOB POST FORM */}
                <Route path="/newJobPost">
                    <Navbar />
                    <NewJob />
                    <Footer />
                </Route>
                
                {/* ADMIN LIST OF JOB APPLICANTIONS */}
                <Route exact path="/applications">
                    <Navbar />
                    <Applications />
                    <Footer />
                </Route>

                {/* ADMIN VIEW RESUME */}
                <Route path="/applications/resume/:name/:id">
                    <Navbar />
                    <Resume />
                    <Footer />
                </Route>
            {/* =================================================== */}

            <Route>
                <Navbar />
                <ErrorPage />
                <Footer />
            </Route>
            
        </Switch>
    )
}

export default Routes;