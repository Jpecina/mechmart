import React from 'react';
import Poker from '../../assets/poker.jpg'
function Home(){
    const coverphotoStyle={
        paddingTop:"100px",
    }
    const smallPhotos={
        height:"230px",
        width:"300px",
        padding:"20px",
        display:"flex",
        backgroundColor:"pink"

    }
    return(
        <div className="home-page-main-div">
        <img src="https://s3.us-east-2.amazonaws.com/devmountain-personal-project-mechmart/mechmarket+pics/coverphoto1.JPG" className="main-image-larger" style={coverphotoStyle}/>
        <div className="small-cover-images">
        <img src="https://s3.us-east-2.amazonaws.com/devmountain-personal-project-mechmart/mechmarket+pics/coverphoto2.JPG" style={smallPhotos}/>
        <div style={smallPhotos}></div>
        </div>
        <div></div>
        </div>
    )
}
export default Home;