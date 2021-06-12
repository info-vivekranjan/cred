import { Link } from 'react-router-dom';
import React from 'react';
import styles from './FooterBlog.module.css';


function FooterBlog() {
    return (
        <div className={styles.FooterBlogContainer}>

            <div className={styles.leftFooterBlog}>

                <div className={styles.FooterDownloadApp}>

                    <div className={styles.FooterBlogSubHeader}>download the app</div>
                    <div className={styles.FooterBlogParas}>
                        CRED is a members-only app that offers you exclusive rewards for paying your credit card bill.

                    </div>
                    <div className={styles.FooterBlogIcon}>
                        <i class="ri-android-fill"></i>
                        <i class="ri-apple-fill"></i>
                    </div>
                    <div style={{ marginBottom: "40px", fontSize: "15px" }}>
                        Copyright © 2019 Dreamplug Technologies Pvt Ltd. All rights reserved.
                    </div>

                </div>
                <div className={styles.FooterCategoryCont}>
                    <div className={styles.FooterBlogSubHeader}></div>
                    <div style={{ lineHeight: "27px", marginBottom: "60px" }}>

                        <Link className={styles.FooterBlogLink} to="/category/credit-card-payment">
                            Credit Card Bill Payment :
                        </Link>


                        <Link className={styles.FooterBlogLink}>   Hdfc Credit Card Bill Payment  | </Link>
                        <Link className={styles.FooterBlogLink}>   ICICI Credit Card Bill Payment    |</Link>
                        <Link className={styles.FooterBlogLink}>   SBI Credit Card Bill Payment    |</Link>
                        <Link className={styles.FooterBlogLink}>   RBL Credit Card Payment   |</Link>
                        <Link className={styles.FooterBlogLink}>   Kodak Credit Card Bill Payment    |</Link>
                        <Link className={styles.FooterBlogLink}>   Best Credit Card   |</Link>
                        <Link className={styles.FooterBlogLink}>   Best Premium Credit Card   |</Link>
                    </div>
                    <div>
                        <Link className={styles.FooterBlogLink}> Credit Score:  </Link>
                        <Link className={styles.FooterBlogLink}> Credit Score Check  |</Link>
                        <Link className={styles.FooterBlogLink}> How to Improve Credit Score  </Link>
                    </div>
                </div>

            </div>

            <div className={styles.rightFooterBlog}>

                <div className={styles.FooterReacentPost}>

                    <div className={styles.FooterBlogSubHeader}>Recent Posts</div>
                    <div>
                        <li>
                            <Link className={styles.FooterBlogLinkLi}> Update on Oxygen mission: 100 Million O2 Litres Deployed</Link>
                        </li>
                        <li>
                            <Link className={styles.FooterBlogLinkLi}>
                                Update on Oxygen mission: 450 oxygen concentrators received.
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.FooterBlogLinkLi}>
                                How we at CRED are responding to the COVID crisis
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.FooterBlogLinkLi}>
                                The Cosmos of CRED Application Security
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.FooterBlogLinkLi}>
                                Meet the CRED member who won a Mercedes-Benz GLC Coupé
                            </Link>
                        </li>
                    </div>

                </div>
                <div className={styles.FooterCalculator}>

                    <div className={styles.FooterBlogSubHeader}>Calculator</div>

                    <div>
                        <Link className={styles.FooterBlogLink} style={{ lineHeight: "30px" }}> sip calculator  |  </Link>
                        <Link className={styles.FooterBlogLink} style={{ lineHeight: "30px" }}> emi calculator  |</Link>
                        <Link className={styles.FooterBlogLink} style={{ lineHeight: "30px" }}> ppf calculator  |</Link>
                        <Link className={styles.FooterBlogLink} style={{ lineHeight: "30px" }}> home loan calculator  |</Link>
                        <Link className={styles.FooterBlogLink} style={{ lineHeight: "30px" }}> car loan calculator  </Link>
                    </div>

                </div>

            </div>

        </div>
    );
}

export { FooterBlog }