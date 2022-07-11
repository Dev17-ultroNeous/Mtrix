import React from "react";
import { Image } from "react-bootstrap";
import Smily from "../image/Smily.svg"
import Group from "../image/Group 993.svg"
const Thankyou = () => {
    return (
        <>
            <section className="ThankyouBox">
                <div className="heading-thankyou">
                    <h1 className="Thank-heading">Thank</h1>
                    <h1 className="Thank-dublicat">Thank</h1>
                    <h1 className="you-heading">Y<span><Image src={Smily} /></span>u <span><Image src={Group} /></span> </h1>
                    <h1 className="you-dublicat">Y<span className="img-smily"><Image src={Smily} /></span>u</h1>
                </div>

            </section>

        </>
    )
}

export default Thankyou;