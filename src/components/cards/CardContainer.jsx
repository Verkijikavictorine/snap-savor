import React from 'react';
import CardItem from './CardItem';
import pasta from '../../assets/beaf_rice.jpg';
import rice from "../../assets/rice.jpg"
import NavBar from '../navbar/NavBar';


const CardContainer = () => {
    const menu={
        image: rice,
        title: "Jellof",
        description: "A classic African dish of cooked rice",
        price: "1500FCFA",
    };

    const menu1={
        image: pasta,
        title: "Pasta",
        description: "A classic African dish of cooked rice",
        price: "2000FCFA",

    };
    return ( 
         <React.Fragment>
            <NavBar/>
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 ">
            <h1>Tuesday</h1>
          <div className="row">
            <div className="col-12  mt-5 mb-5  col-lg-4 d-flex justify-content-center property-cards">
              <CardItem object={menu} />
            </div>
            <div className="col-12  mt-5 mb-5  col-lg-4 d-flex justify-content-center property-cards">
              <CardItem object={menu} />
            </div>
            <div className="col-12  mt-5 mb-5  col-lg-4 d-flex justify-content-center property-cards">
              <CardItem object={menu} />
            </div>
            <div className="col-12  mt-5 mb-5  col-lg-4 d-flex justify-content-center property-cards">
              <CardItem object={menu1} />
            </div>
            <div className="col-12  col-lg-4  mt-5 mb-5 d-flex justify-content-center property-cards">
              <CardItem object={menu1} />
            </div>
            <div className="col-12  col-lg-4  mt-5 mb-5 d-flex justify-content-center property-cards">
              <CardItem object={menu1} />
            </div>
          </div>
        </div>
      </div>
    </div>
         </React.Fragment>
     );
}
 
export default CardContainer;