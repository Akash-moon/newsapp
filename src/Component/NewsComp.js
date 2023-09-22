import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItemComp from './NewsItemComp'
import Spinner from './Spinner';
export class NewsComponent extends Component {
  // articles naam ka array bana leinge 
  
  constructor(){
    super();
    console.log("i am constructor");
    this.state ={
      articles : [],
      loading : false,
      page : 1
      // if load ho rha hai toh gol gol dikha sake
    } 
  }

// make functions for the buttons 

handlePrevclick= async ()=>{
  console.log("Previous");
  
  let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=f0c2c60b39fd4d18b220bbcefb20e865&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({
    loading:true
  })
  let data =await fetch(url);
  let parsedata = await data.json();
  console.log(parsedata);

  this.setState({
    page: this.state.page - 1,
    articles: parsedata.articles,
    loading : false
  })
}

handleNextclick= async ()=>{
  console.log("Next");

  if(this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)){
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=f0c2c60b39fd4d18b220bbcefb20e865&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data =await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);

    this.setState({
      page: this.state.page + 1,
      articles: parsedata.articles,
      loading : false
    })
  }
}


  // yeh hai state banane ka terika in rcc 
  // and isme method hota hai for set the state i.e setstate()

  async componentDidMount(){
    console.log("cdm");
    // axios.get('https://newsapi.org/v2/everything?q=sports&apiKey=<KEY>')
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=f0c2c60b39fd4d18b220bbcefb20e865&page=1&pageSize=3}`;
    // pageSize = 21 matab 1 page pr 21 news aaeingii
    let data =await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults : parsedata.totalResults
    });

}



  render() {
    return (
      <div className="container my-3" >
        <h1 className='text-center'>News App - Top Headlines</h1>
        {/* jab jab request jaegii tab true krna h  */}
        {this.state.loading && <Spinner/>}
        
        {/* ab looping kr deinge inki */}

        {/* yeh map function poore article array pr lagega or sarre object le lega , see on console  */}
        {/* {this.state.articles.map((ele)=>{console.log(ele)})} */}

        <div className="row">
          {!this.state.loading && this.state.articles.map((ele,i)=>{
            
            // ek key use kareinge jo ki uniques hogi i.e url of the source , jo ki return ho jaegi 
            return <div className="col-md-4" key={i}>
              {/* <NewsItemComp title = "Mytitle" description = "xyz" imageurl = "https://i.insider.com/64f217441e6afd00196a380f?width=1200&format=jpeg" newsurl = "TODO"/> */}
              <NewsItemComp title = {ele.title ? ele.title.slice(0,45): " "} description = {ele.description ? ele.description.slice(0,88): " "} imageurl = {ele.urlToImage} newsurl = {ele.url}/>

              {/* tile lamba hone ki wajah se blocks uper nicche ho rhe hain  */}
            </div>

          })}
        </div>

          {/* buttons from bootstrap {components and utilities} */}
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
          {/* larr == left arrow , rarr == right arrow */}
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default NewsComponent
