import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from 'react-router-dom';
import styles from './Carousal.module.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        id: 1,
        imgPath: 'Update on Oxygen mission: 100 Million O2 Litres Deployed',
        para: "In Social announcement / 2 Min read",
        to: "category/social-announcement/1",
        firstLetter: "U"

    },
    {
        id: 2,
        imgPath: 'Update on Oxygen mission: 450 oxygen concentrators received.',
        para: "In Social announcement / 2 Min read",
        to: "category/social-announcement/2",
        firstLetter: "U"
    },
    {
        id: 3,
        imgPath: 'How we at CRED are responding to the COVID crisis',
        para: "In Social announcement / 3 Min read",
        to: "category/social-announcement/3",
        firstLetter: "H"
    },
    {
        id: 4,
        imgPath: 'The Cosmos of CRED Application Security',
        para: "In Tech / 9 Min read",
        to: "#",
        firstLetter: "T"
    },
    {
        id: 5,
        imgPath: 'How To Convert Credit Card Payment To EMI?',
        para: "In Credit card payment / 5 Min read",
        to: "category/credit-card-payment/1",
        firstLetter: "H"
    },

];

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 400,
        flexGrow: 1,

    },
    img: {
        height: "75vh",
        // display: 'block',
        width: "82%",
        overflow: 'hidden',
        margin: "auto"
    },
    dots: {

        backgroundColor: "transparent",
        width: "100%",
        height: "15vh",
        margin: "auto",

    }
}));

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root} >


            {/* <Paper square elevation={0} className={classes.header}>
                <Typography >{tutorialSteps[activeStep].label}</Typography>
            </Paper> */}
            <>

                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    autoplay={false}

                >
                    {tutorialSteps.map((step, index) => (
                        <div className={styles.carousalContDiv}>

                            <div className={styles.firstLetter}>
                                {step.firstLetter}
                            </div>

                            <div className={classes.img} key={step.id}>


                                <Link className={styles.carousalTitle} to={step.to} >
                                    <h1> {step.imgPath} </h1>
                                </Link>
                                <p className={styles.carousalPara}>{step.para}</p>

                                <Link className={styles.readOnBtn} to={step.to}>
                                    <button>READ ON</button>
                                </Link>

                            </div>




                        </div>

                    ))}


                </AutoPlaySwipeableViews>



            </>


            <MobileStepper
                steps={maxSteps}
                className={classes.dots}
                variant="dots"

                activeStep={activeStep}


                nextButton={
                    <Button className={styles.nextBackButton} size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>

                        <i className="ri-arrow-right-s-line"></i>
                    </Button>
                }
                backButton={
                    <Button className={styles.nextBackButton} size="large" onClick={handleBack} disabled={activeStep === 0}>
                        <i className="ri-arrow-left-s-line"></i>
                    </Button>
                }
            />

        </div>
    );
}

export default SwipeableTextMobileStepper;