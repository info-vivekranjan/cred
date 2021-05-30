import React from 'react';
import { Route, Switch } from 'react-router';
import { BlogHome } from './BlogHome';

import { CreditCards } from './BlogCategory/CreditCards'
import { CreditCardsPayment } from './BlogCategory/CreditCardsPayment';


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
            </Switch>
        </div>
    );
}
export { BlogRoutes }