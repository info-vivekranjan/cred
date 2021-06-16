import Navbar from "../Components/Navbar";
import "../Components/homePage.css";
import HeadingBanner from "../Components/HeadingBanner";
import PhoneAnimation from "../Components/PhoneAnimation";
import RewardsContainer from "../Components/RewardContainer";
import Brands from "../Components/Brands";
import UpGrade from "../Components/UpGrade";
import PhoneScrollAnimation from "../Components/PhoneScrollAnimation";
import Parallax from "../Components/Parallax";
import BecomeMember from "../Components/BecomeMember";
import TrustUsSection from "../Components/TrustUsSection";
import Rating from "../Components/Rating";
import Footer from "../Components/Footer";

const HomePage = () => {
    return(
        <>
        <Navbar/>
        <HeadingBanner/>
        <RewardsContainer/>
        <Brands/>
        <UpGrade/>
        {/* <PhoneScrollAnimation/> */}
        <Parallax/>
        <BecomeMember/>
        <TrustUsSection/>
        <Rating/>
        <Footer/>
        </>
    )
}

export default HomePage