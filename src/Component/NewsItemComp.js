import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsItemComp extends Component {

  render() {
    let {title,description,imageurl,newsurl} = this.props;
    // this set  the title and descriptuo of newsitem block
    return (
      <div className="my-3">
        <div className="card" style={{width : "18rem"}}>
          <img src={imageurl ? imageurl : "https://images.moneycontrol.com/static-mcnews/2023/09/Justin-Trudeau-VS-Modi-1-770x433.jpg" } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            
            <p className="card-text">
              {description}
            </p>
            
            <a href={newsurl} target = "_blank" className="container btn btn-sn btn-dark">
              Read More 
              {/* newsurl is used to uniqly identified the news  */}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItemComp;
