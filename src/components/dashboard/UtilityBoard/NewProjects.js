import React from 'react';
import './NewProjects.css';
import { useHistory } from "react-router-dom";



function Projects(){
    let history = useHistory();




    const handleClick = () => {
        console.log(history)
        history.push({
            pathname: `/dashboard/utilityboard/projectDescription`
        })
    } 





    return(
        <div className="proj-div shadow">
            <div className="proj-card-title-div">
                <h1 className="proj-card-title">Projects By Companies</h1>
            </div>

            <div className="proj-div-2">

                
                <div className="proj-card-2"  onClick = {handleClick}>
                <div className="proj-img-div">
                    <img src="/images/utility_assets/logos/Babbel.jfif" className="proj-card-img"/>
                </div>
                <p className="proj-card-text">Babbel</p>
                </div>


                <div className="proj-card-2"   onClick = {handleClick}>
                <div className="proj-img-div">
                    <img src="/images/utility_assets/logos/cred.png" className="proj-card-img"/>
                </div>
                <p className="proj-card-text">Cred</p>
                </div>

                <div className="proj-card-2"   onClick = {handleClick}>
                <div className="proj-img-div">
                    <img src="/images/utility_assets/logos/dunzo1.png" className="proj-card-img"/>
                </div>
                <p className="proj-card-text">Dunzo</p>
                </div>

                <div className="proj-card-2" >
                <div className="proj-img-div">
                    <img src="/images/utility_assets/logos/Meesho.png" className="proj-card-img"/>
                </div>
                <p className="proj-card-text">Meesho</p>
                </div>

                <div className="proj-card-2" >
                <div className="proj-img-div">
                    <img src="/images/utility_assets/logos/paytm.png" className="proj-card-img"/>
                </div>
                <p className="proj-card-text">PayTM</p>
                </div>

                <div className="proj-card-2" >
                <div className="proj-img-div">
                    <img src="/images/utility_assets/logos/ShopBack.png" className="proj-card-img"/>
                </div>
                <p className="proj-card-text">ShopBack</p>
                </div>

                <div className="proj-card-2" >
                <div className="proj-img-div">
                    <img src="/images/utility_assets/logos/ShopBack.png" className="proj-card-img"/>
                </div>
                <p className="proj-card-text">ShopBack</p>
                </div>

                <div className="proj-card-2" >
                <div className="proj-img-div">
                    <img src="/images/utility_assets/logos/ShopBack.png" className="proj-card-img"/>
                </div>
                <p className="proj-card-text">ShopBack</p>
                </div>


                <div className="proj-card-2"  onClick = {handleClick}>
                <div className="proj-img-div">
                    <img src="/images/utility_assets/logos/Babbel.jfif" className="proj-card-img"/>
                </div>
                <p className="proj-card-text">Babbel</p>
                </div>

                <div className="proj-card-2"  onClick = {handleClick}>
                <div className="proj-img-div">
                    <img src="/images/utility_assets/logos/Babbel.jfif" className="proj-card-img"/>
                </div>
                <p className="proj-card-text">Babbel</p>
                </div>


        

            </div>
            

           
        </div>
    );
}

export default Projects;










// <div className="proj-card" style={{left:"20px"}} onClick = {handleClick}>
// <div className="proj-img-div">
//     <img src="/images/utility_assets/logos/Babbel.jfif" className="proj-card-img"/>
// </div>
// <p className="proj-card-text">Babbel</p>
// </div>


// <div className="proj-card" style={{left:"130px"}}  onClick = {handleClick}>
// <div className="proj-img-div">
//     <img src="/images/utility_assets/logos/cred.png" className="proj-card-img"/>
// </div>
// <p className="proj-card-text">Cred</p>
// </div>

// <div className="proj-card" style={{left:"240px"}}  onClick = {handleClick}>
// <div className="proj-img-div">
//     <img src="/images/utility_assets/logos/dunzo1.png" className="proj-card-img"/>
// </div>
// <p className="proj-card-text">Dunzo</p>
// </div>

// <div className="proj-card" style={{left:"350px"}}>
// <div className="proj-img-div">
//     <img src="/images/utility_assets/logos/Meesho.png" className="proj-card-img"/>
// </div>
// <p className="proj-card-text">Meesho</p>
// </div>

// <div className="proj-card" style={{left:"460px"}}>
// <div className="proj-img-div">
//     <img src="/images/utility_assets/logos/paytm.png" className="proj-card-img"/>
// </div>
// <p className="proj-card-text">PayTM</p>
// </div>

// <div className="proj-card" style={{left:"570px"}}>
// <div className="proj-img-div">
//     <img src="/images/utility_assets/logos/ShopBack.png" className="proj-card-img"/>
// </div>
// <p className="proj-card-text">ShopBack</p>
// </div>

// <div className="proj-card" style={{left:"680px"}}>
// <div className="proj-img-div">
//     <img src="/images/utility_assets/logos/ShopBack.png" className="proj-card-img"/>
// </div>
// <p className="proj-card-text">ShopBack</p>
// </div>

// <div className="proj-card" style={{left:"790px"}}>
// <div className="proj-img-div">
//     <img src="/images/utility_assets/logos/ShopBack.png" className="proj-card-img"/>
// </div>
// <p className="proj-card-text">ShopBack</p>
// </div>


