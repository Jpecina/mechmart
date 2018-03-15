import React from 'react';
import Review from '../../Form';

function ReviewSection(){
    const reviewResultsContainerStyle = {
        height:"60%",
        width: "80%",
        border:"solid",
        marginTop:"300px",
        marginBottom:"50px"
    };
    return(
        <div className="review-component-div">
        <div style={ reviewResultsContainerStyle }>
            <div>
                <div className="review-name-handle">
                    <h5>name</h5>
                    <h6>handleName</h6>
                </div>
                <div>
                <p>lorem ipsum askchasckhkh kasckjh kjhasckhlkahck hjakcs sacnacjkasckjbakcb absckjba;skcjb;kajsbcuajkb jbaskjbc;kabscuack;jbeue;kjcbuasbcab ujbcsuakbc </p>
                </div>
            </div>
        </div>
            <Review/>
        </div>
    )
}

export default ReviewSection;