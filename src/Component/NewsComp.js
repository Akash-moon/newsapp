import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItemComp from './NewsItemComp'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'


export class NewsComponent extends Component {
  // articles naam ka array bana leinge 
  
  // yeh hain proptypes default and their types 


  
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }


  Capitilize = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("i am constructor");
    this.state ={
      articles : [],
      loading : false,
      page : 1,
      totalResults : 0
      // if load ho rha hai toh gol gol dikha sake
    } 
    document.title = "News App - " + this.Capitilize(this.props.category);
  }

async updadeNews(){
  this.props.setProgress(10);
  const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({
    loading:true
  })
  // this.props.setProgress(30);
  let data =await fetch(url);
  this.props.setProgress(30);
  let parsedata = await data.json();
  this.props.setProgress(70);
  console.log(parsedata);
  
  this.setState({
    articles: parsedata.articles,
    totalResults : parsedata.totalResults,
    loading : false
  })
  this.props.setProgress(100);
}

  fetchMoreData = async () => {
    this.setState({
      page : this.state.page + 1
    })

    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    
    this.setState({
        articles: this.state.articles.concat(parsedata.articles),
        totalResults : parsedata.totalResults
    })
  };

// make functions for the buttons 


// handlePrevclick= async ()=>{
//   console.log("Previous");
  
//   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0c2c60b39fd4d18b220bbcefb20e865&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//   this.setState({
//     loading:true
//   })
//   let data =await fetch(url);
//   let parsedata = await data.json();
//   console.log(parsedata);

//   this.setState({
//     page: this.state.page - 1,
//     articles: parsedata.articles,
//     loading : false
//   })
// }

// handleNextclick= async ()=>{
//   console.log("Next");

//   if(this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)){
//     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0c2c60b39fd4d18b220bbcefb20e865&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     this.setState({
//       loading:true
//     })
//     let data =await fetch(url);
//     let parsedata = await data.json();
//     console.log(parsedata);

//     this.setState({
//       page: this.state.page + 1,
//       articles: parsedata.articles,
//       loading : false
//     })
//   }
// }


  // yeh hai state banane ka terika in rcc 
  // and isme method hota hai for set the state i.e setstate()

  async componentDidMount(){
    this.props.setProgress(10);
    console.log("cdm");
    // axios.get('https://newsapi.org/v2/everything?q=sports&category=${this.props.category}&apiKey=<KEY>')
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0c2c60b39fd4d18b220bbcefb20e865&page=1&pageSize=3}`;
    // pageSize = 21 matab 1 page pr 21 news aaeingii
    let data =await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults : parsedata.totalResults
    });
    this.props.setProgress(100);

    // this.updadeNews();

}



  render() {
    return (
      <>
        <h1 className='text-center' style={{margin:'30px 30px',marginTop : '90px'}}>News App - Top {this.Capitilize(this.props.category)} Headlines</h1>
        {/* jab jab request jaegii tab true krna h  */}
        {this.state.loading && <Spinner/>}
        
        {/* ab looping kr deinge inki */}

        {/* yeh map function poore article array pr lagega or sarre object le lega , see on console  */}
        {/* {this.state.articles.map((ele)=>{console.log(ele)})} */}


        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>} >


          <div className="container">
            <div className="row">
              {this.state.articles.map((ele,i)=>{
                
                // ek key use kareinge jo ki uniques hogi i.e url of the source , jo ki return ho jaegi 
                return <div className="col-md-4" key={i}>
                  {/* <NewsItemComp title = "Mytitle" description = "xyz" imageurl = "https://i.insider.com/64f217441e6afd00196a380f?width=1200&format=jpeg" newsurl = "TODO"/> */}
                  <NewsItemComp title = {ele.title ? ele.title.slice(0,45): " "} description = {ele.description ? ele.description.slice(0,88): " "} imageurl = {ele.urlToImage} newsurl = {ele.url} author = {ele.author} date={ele.publishedAt} source={ele.source.name}/>

                </div>
                  {/* tile lamba hone ki wajah se blocks uper nicche ho rhe hain  */}
              })}
            </div>
          </div>

        </InfiniteScroll>

        {/* buttons from bootstrap {components and utilities}
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
          larr == left arrow , rarr == right arrow
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}> Next &rarr;</button>
        </div> */}


      </>
    )
  }
}

export default NewsComponent
