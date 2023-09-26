import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class NewsItemComp extends Component {

  render() {
    let {title,description,imageurl,newsurl,author,date,source} = this.props;
    // this set  the title and descriptuo of newsitem block
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left :'90%',zIndex : '1'}}>
                  {source}
          </span>
          <img src={imageurl ? imageurl : "https://www.hindustantimes.com/ht-img/img/2023/09/24/1600x900/Priyanka_chopra_1695518968332_1695518998538.jpg" } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-danger">By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
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
