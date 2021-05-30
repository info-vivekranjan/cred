import React from 'react';
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
    },
    {
        id: 2,
        imgPath: 'Update on Oxygen mission: 450 oxygen concentrators received.',
    },
    {
        id: 3,
        imgPath: 'How we at CRED are responding to the COVID crisis',
    },
    {
        id: 4,
        imgPath: 'The Cosmos of CRED Application Security',
    },
    {
        id: 5,
        imgPath: 'How To Convert Credit Card Payment To EMI?',
    },

];

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 400,
        flexGrow: 1,

    },
    img: {
        height: "70vh",
        display: 'block',
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

                >
                    {tutorialSteps.map((step, index) => (
                        <div className={classes.img} key={step.id}>

                            <Link style={{ color: "white", textDecoration: "none" }}>
                                <h1 style={{ fontSize: "70px", width: "70%", margin: " auto", }}> {step.imgPath} </h1>
                            </Link>

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