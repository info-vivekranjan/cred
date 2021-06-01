import React from 'react';
import { Route, Switch } from 'react-router';
import { BlogHome } from './BlogHome';

import { CreditCards } from './BlogCategory/CreditCards'
import { CreditCardsPayment } from './BlogCategory/CreditCardsPayment';
import { MoneyMatters } from './BlogCategory/MoneyMatters';
import { CreditCardsDataPage } from './BlogCategory/CreditCardsDataPage'

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
                <Route path="/category/credit-cards/:id" exact>
                    <CreditCardsDataPage />
                </Route>


            </Switch>
        </div>
    );
}
export { BlogRoutes }