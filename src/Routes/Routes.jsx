import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminDashboard from '../Pages/AdminDashboard';
import AdminLogin from '../Pages/AdminLogin';
import Applications from '../Pages/Applications';
import AllJobs from '../Pages/Careers/AllJobs';
import Careers from '../Pages/Careers/Careers';
import ErrorPage from '../Pages/Careers/ErrorPage';
import JobApplication from '../Pages/Careers/JobApplication';
import JobPost from '../Pages/Careers/JobPost';
import NewJob from '../Pages/NewJob';
import Resume from '../Pages/Resume';

const Routes = () => {
    return (
        <Switch>

            {/* ---------------------------------------- CAREERS ---------------------------------- */}

            {/* HOMEPAGE OF CRED CAREERS "careers.cred.club" */}
            <Route exact path="/careers">
                <Careers />
            </Route>

            {/* ALL JOBS PAGE "careers.cred.club/allJob" */}
            <Route exact path="/careers/allJob">
                <AllJobs />
            </Route>

            {/* DETAILS OF A JOB POST "careers.cred.club/jobPosting?apply_url=https://jobs.lever.co/cred/ID/apply" */}
            <Route path={`/careers/allJob/:jobId`}>
                <JobPost />
            </Route>

            {/* FORM FOR JOB APPLICANTS "careers.cred.club/form?jobId=ID" */}
            <Route path={`/careers/form/:jobDepartment/:jobId/:jobName`}>
                <JobApplication />
            </Route>

            {/* ======================== ADMIN ====================== */}
                {/* ADMIN LOGIN PAGE */}
                <Route path="/login">
                    <AdminLogin />
                </Route>

                {/* ADMIN DASHBOARD PAGE */}
                <Route path="/dashboard">
                    <AdminDashboard />
                </Route>

                {/* ADMIN NEW JOB POST FORM */}
                <Route path="/newJobPost">
                    <NewJob />
                </Route>
                
                {/* ADMIN LIST OF JOB APPLICANTIONS */}
                <Route exact path="/applications">
                    <Applications/>
                </Route>

                {/* ADMIN VIEW RESUME */}
                <Route path="/applications/resume/:name/:id">
                    <Resume/>
                </Route>
            {/* =================================================== */}

            <Route>
                <ErrorPage />
            </Route>

            {/* ------------------------------------------------------------------------------------ */}
            
        </Switch>
    )
}

export default Routes;