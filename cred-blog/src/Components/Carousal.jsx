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


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {

        imgPath: 'How To Increase Your Credit Card Limit',
    },
    {
        imgPath: 'How to Apply for a Credit Card in India?',
    },
    {
        imgPath: 'How to Apply for a Credit Card in India?',
    },
    {

        imgPath: 'What Is A Credit Card? 5 Major Advantages',
    },
    {
        imgPath: 'How to Apply for a Credit Card in India?',
    },

];

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 400,
        flexGrow: 1,

    },
    header: {
        display: 'flex',
        alignItems: 'center',
        // height: 50,
        paddingLeft: theme.spacing(5),

    },
    img: {
        height: "70vh",
        display: 'block',
        width: "100%",
        overflow: 'hidden',

    },
    dots: {

        backgroundColor: "transparent",
        width: "8%",
        height: "10vh",
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
                        <div className={classes.img}>

                            <Link style={{ color: "white", textDecoration: "none" }}>
                                <h1 style={{ fontSize: "70px", width: "70%", margin: " auto", }}> {step.imgPath} </h1>
                            </Link>

                        </div>
                    ))}
                </AutoPlaySwipeableViews>



            </>

            {/* <MobileStepper

                style={{ backgroundColor: "transparent", color: "white", }}

                activeStep={activeStep}
                nextButton={
                    <Button style={{ color: "white" }} size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>

                        <i style={{ color: "white", fontSize: "200px", fontWeight: "700" }} className="ri-arrow-right-s-line"></i>
                    </Button>
                }
                backButton={
                    <Button style={{ color: "white" }} size="large" onClick={handleBack} disabled={activeStep === 0}>
                        <i style={{ color: "white", fontSize: "200px", fontWeight: "700" }} className="ri-arrow-left-s-line"></i>
                    </Button>
                }

            /> */}


            <MobileStepper
                steps={maxSteps}
                className={classes.dots}
                variant="dots"

                activeStep={activeStep}

            />
        </div>
    );
}

export default SwipeableTextMobileStepper;