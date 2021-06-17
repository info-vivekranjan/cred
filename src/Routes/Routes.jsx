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




import { BlogHome } from '../Components/BlogHome';

import { CreditCards } from '../Components/BlogCategory/CreditCards'
import { CreditCardsPayment } from '../Components/BlogCategory/CreditCardsPayment';
import { MoneyMatters } from '../Components/BlogCategory/MoneyMatters';
import { CreditCardsDataPage } from '../Components/BlogCategory/CreditCardsDataPage'
import { MoneyMattersDataPage } from '../Components/BlogCategory/MoneyMattersDataPage';
import { CreditCardsPaymentDataPage } from '../Components/BlogCategory/CreditCardsPaymentDataPage';
import { BookMarks } from '../Components/Bookmarks/Bookmarks';
import { BestCreditCards } from '../Components/BlogCategory/BestCreditCards';
import { BestCreditCardsDataPage } from '../Components/BlogCategory/BestCreditCardsDataPage';
import { SocialAnnouncement } from '../Components/BlogCategory/SocialAnnouncement';
import { SocialDataPage } from '../Components/BlogCategory/SocialAnnouncementDataPage';
import { NavTabs } from '../Components/PostBlogCategory/AddAllBlogs';

import { Chat } from "../Components/Chat/Chat";
import { Join } from "../Components/Join/Join";
import { RegisterForChat } from '../Components/RegisterForChat/RegisterForChat';
import { ChatRequestAdminPage } from '../Components/ChatRequestAdmin/ChatRequestAdminPage';

import { Tech } from '../Components/BlogCategory/Tech';
import { TechDataPage } from '../Components/BlogCategory/TechDataPage';





const Routes = () => {
    return (
        <Switch>

            {/* ---------------------------------------- HOMEPAGE ---------------------------------- */}
            <Route path="/" exact>
                <HomePage />
            </Route>

            {/* ---------------------------------------- CALCULATORS ---------------------------------- */}
            <Route path="/calculators/" exact>
                <CalculatorsPage />
            </Route>
            <Route path="/calculators/SipCalculator" exact>
                <SipCalculator />
            </Route>
            <Route path="/calculators/EmiCalculator" exact>
                <EmiCalculator />
            </Route>
            <Route path="/calculators/CarLoanCalculator" exact>
                <CarLoanCalculator />
            </Route>
            <Route path="/calculators/HomeLoanCalculator" exact>
                <HomeLoanCalculator />
            </Route>
            <Route path="/calculators/SimpleLoanCalculator" exact>
                <SimpleLoanCalculator />
            </Route>
            <Route path="/calculators/FixedDepositCalculator" exact>
                <FixedDepositCalculator />
            </Route>
            <Route path="/calculators/CompoundInterestCalculator" exact>
                <CompoundInterestCalculator />
            </Route>
            {/* ---------------------------------------- BLOGS ---------------------------------- */}



            <Route path="/blogs" exact>
                <BlogHome />
            </Route>
            <Route path="/category/credit-cards" exact>
                <CreditCards />
            </Route>
            <Route path="/category/credit-card-payment" exact>
                <CreditCardsPayment />
            </Route>
            <Route path="/category/money-matters" exact>
                <MoneyMatters />
            </Route>

            <Route path="/category/best-credit-cards" exact>
                <BestCreditCards />
            </Route>

            <Route path="/category/social-announcement" exact>
                <SocialAnnouncement />
            </Route>

            <Route path="/category/tech" exact>
                <Tech />
            </Route>


            <Route path="/category/bookmarks" exact>
                <BookMarks />
            </Route>

            <Route path="/category/postblogs" exact>
                <NavTabs />
            </Route>



            <Route path="/register-for-meeting" exact>
                <RegisterForChat />
            </Route>
            <Route path="/joinmeeting" exact>
                <Join />
            </Route>
            <Route path="/chat">
                <Chat />
            </Route>

            <Route path="/admin/chatrequests">
                <ChatRequestAdminPage />
            </Route>

            <Route path="/category/credit-cards/:id" exact>
                <CreditCardsDataPage />
            </Route>

            <Route path="/category/money-matters/:id" exact>
                <MoneyMattersDataPage />
            </Route>


            <Route path="/category/credit-card-payment/:id" exact>
                <CreditCardsPaymentDataPage />
            </Route>

            <Route path="/category/best-credit-cards/:id" exact>
                <BestCreditCardsDataPage />
            </Route>


            <Route path="/category/social-announcement/:id" exact>
                <SocialDataPage />
            </Route>

            <Route path="/category/tech/:id" exact>
                <TechDataPage />
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