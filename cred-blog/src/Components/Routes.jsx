import React from 'react';
import { Route, Switch } from 'react-router';
import { BlogHome } from './BlogHome';

import { CreditCards } from './BlogCategory/CreditCards'
import { CreditCardsPayment } from './BlogCategory/CreditCardsPayment';
import { MoneyMatters } from './BlogCategory/MoneyMatters';
import { CreditCardsDataPage } from './BlogCategory/CreditCardsDataPage'
import { MoneyMattersDataPage } from './BlogCategory/MoneyMattersDataPage';
import { CreditCardsPaymentDataPage } from './BlogCategory/CreditCardsPaymentDataPage';
import { BookMarks } from './Bookmarks/Bookmarks';
import { BestCreditCards } from './BlogCategory/BestCreditCards';
import { BestCreditCardsDataPage } from './BlogCategory/BestCreditCardsDataPage';
import { SocialAnnouncement } from './BlogCategory/SocialAnnouncement';
import { SocialDataPage } from './BlogCategory/SocialAnnouncementDataPage';
import { NavTabs } from './PostBlogCategory/AddAllBlogs';

import { Chat } from "./Chat/Chat";
import { Join } from "./Join/Join";

function BlogRoutes() {
    return (
        <div>


            <Switch>

                <Route path="/" exact>
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


                <Route path="/category/bookmarks" exact>
                    <BookMarks />
                </Route>

                <Route path="/category/postblogs" exact>
                    <NavTabs />
                </Route>


                <Route path="/joinmeeting" exact>
                    <Join />
                </Route>
                <Route path="/chat">
                    <Chat />
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


                <Route>
                    <h3 style={{ paddingTop: "300px" }}>404 | Page Not Found</h3>
                </Route>

            </Switch>
        </div>
    );
}
export { BlogRoutes }