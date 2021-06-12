import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllJobs from '../Pages/Careers/AllJobs';
import Careers from '../Pages/Careers/Careers';
import ErrorPage from '../Pages/Careers/ErrorPage';
import Form from '../Pages/Careers/Form';
import JobPost from '../Pages/Careers/JobPost';

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
                <Form />
            </Route>

            <Route>
                <ErrorPage />
            </Route>

            {/* ------------------------------------------------------------------------------------ */}
            
        </Switch>
    )
}

export default Routes;