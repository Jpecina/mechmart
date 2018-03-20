import React from 'react';


function Home(){
    const mainImage = {
        minHeight:'100%'
    }
    return(
        <div className="home-page-main-div">
        <img src="https://static1.squarespace.com/static/563c788ae4b099120ae219e2/t/581fd9cc9f7456e5fe38eec7/1478482918116/?format=1000w" style = {mainImage}/>
        </div>
    )
}
export default Home;