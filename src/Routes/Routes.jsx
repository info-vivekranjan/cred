import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllJobs from '../Pages/AllJobs';
import Careers from '../Pages/Careers';
import ErrorPage from '../Pages/ErrorPage';
import Form from '../Pages/Form';
import JobPost from '../Pages/JobPost';

const Routes = () => {
    return (
        <Switch>

            {/* HOMEPAGE OF CRED CAREERS "careers.cred.club" */}
            <Route exact path="/careers.cred.club">
                <Careers />
            </Route>

            {/* ALL JOBS PAGE */}
            <Route path="/careers.cred.club/allJob">
                <AllJobs />
            </Route>

            {/* DETAILS OF A PARTICULAR JOB POST */}
            <Route path="/careers.cred.club/jobPosting">
                <JobPost />
            </Route>

            {/* FORM FOR JOB APPLICANTS */}
            <Route path="/careers.cred.club/form">
                <Form />
            </Route>

            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Routes
