import PhoneAnimation from "./PhoneAnimation"

const HeadingBanner = () => {
    return(
        <div className="heading-banner-container">
            <div className="top-Heading">
                <p className="title">rewards for paying <br/> credit card bills.</p>
                <p>join 5.9M+ members and win rewards worth ₹5 crores daily.</p>
                <button>Download CRED</button>
            </div>
            <PhoneAnimation/>
        </div>
    )
}

export default HeadingBanner;