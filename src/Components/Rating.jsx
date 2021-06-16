const Rating = () => {
    return(
        <div className="rating-container">
            <div className="box-container">

                <div style={{width:"50%"}}>
                    <div className="app-store-rating">
                        <div className="ratings">
                            <p>4.8</p>
                            <img src="https://web-assets.cred.club/_next/assets/images/home-page/rating-ios.png"/>
                        </div>
                        <p style={{fontSize:"76px",marginLeft: "40px",marginRight:"40px"}}>app <br/> store</p>
                    </div>
                    <button style={{margin:"10% 50% 10% 37%", 
                                    padding:"15px",
                                    display:"flex",
                                    justifyContent:"space-around",
                                    alignItems:"center",
                                    backgroundColor:"rgb(248, 248, 248)",
                                    border:"none",
                                    fontSize:"26px",
                                    width:"300px",
                                    borderRadius : "50px"
                                    }}>
                        <img src="https://web-assets.cred.club/_next/assets/images/home-page/apple-store-logo.png" style={{height:"40px"}}/>
                        <p>Download the app</p>
                    </button>    
                </div>
 
                <div>
                    <div className="play-store-rating">
                        <div className="ratings">
                            <p>4.7</p>
                            <img src="https://web-assets.cred.club/_next/assets/images/home-page/rating-ios.png"/>
                        </div>
                        <p style={{fontSize:"76px",marginLeft: "40px"}}>play <br/>store</p>
                    </div>
                    <button style={{margin:"14% 0% 10% 9%",
                                    padding:"15px",
                                    display:"flex",
                                    justifyContent:"space-around",
                                    alignItems:"center",
                                    backgroundColor:"rgb(248, 248, 248)",
                                    border:"none",
                                    fontSize:"26px",
                                    width:"300px",
                                    borderRadius : "50px"
                                    }}>
                        <img src="https://web-assets.cred.club/_next/assets/images/home-page/play-store-logo.png" style={{height:"40px"}}/>
                        <p>Download the app</p>
                    </button>    
                </div>

            </div>
        </div>
    )
}

export default Rating;