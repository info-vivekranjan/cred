import React from 'react';
import { Switch, Route } from 'react-router-dom';
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

            {/* ALL JOBS PAGE */}
            <Route exact path="/careers/allJob">
                <AllJobs />
            </Route>

            {/* DETAILS OF A PARTICULAR JOB POST */}
            <Route path={`/careers/allJob/:jobId`}>
                <JobPost />
            </Route>

            {/* FORM FOR JOB APPLICANTS */}
            <Route path={`/careers/form/:jobDepartment/:jobId/:jobName`}>
                <JobApplication />
            </Route>

            {/* ========================ADMIN====================== */}
                {/* NEW JOB POST FORM */}
                <Route path="/newJobPost">
                    <NewJob />
                </Route>
                
                {/* LIST OF JOB APPLICANTIONS */}
                <Route exact path={`/applications`}>
                    <Applications/>
                </Route>

                {/* RESUME */}
                <Route path={`/applications/resume/:name/:id`}>
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