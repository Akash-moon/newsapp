import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItemComp from './NewsItemComp'

export class NewsComponent extends Component {
  // articles naam ka array bana leinge 
  articles = [
    {
      "source": {
        "id": "business-insider-uk",
        "name": "Business Insider (UK)"
      },
      "author": "Dan Latu",
      "title": "Homeowners insurance's vicious cycle is screwing over Americans",
      "description": "As disaster risks grow in vulnerable areas, insurers are pulling back from offering the kinds of coverage that are becoming more needed than ever.",
      "url": "http://uk.businessinsider.com/homeowners-insurance-screwing-americans-over-vicious-cycle-2023-9",
      "urlToImage": "https://i.insider.com/6509fc8b12dc4f001a16c15c?width=1200&format=jpeg",
      "publishedAt": "2023-09-20T09:59:01Z",
      "content": "The insurance industry is feeling the heat of increasing costs related to natural disasters and the repercussions are trickling down to homeowners. \r\nIt's getting harder to find insurance in regions … [+4476 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Ella Nilsen, Krystina Shveda",
      "title": "Insurance premiums could surge in these American cities because of climate disasters, new data shows",
      "description": "Millions of American homeowners could see insurance rates surge in the coming years in part due to worsening climate disasters, new data shows.",
      "url": "https://www.cnn.com/2023/09/20/business/insurance-price-increase-risk-climate-first-street-dg/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230919120439-kentucky-home-flood-damage-0729-file.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-09-20T04:23:41Z",
      "content": "Millions of American homeowners could see insurance rates surge in the coming years in part due to worsening climate disasters, new data shows.\r\nAn analysis of from nonprofit research group First Str… [+6282 chars]"
    },
    {
        "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
 
  ];


  constructor(){
    super();
    console.log("i am constructor");
    this.state ={
      articles: this.articles,
      loading : false
      // if load ho rha hai toh gol gol dikha sake
    } 
  }

  // yeh hai state banane ka terika in rcc 
  // and isme method hota hai for set the state i.e setstate()

  render() {
    return (
      <div className="container my-3" >
        <h2>News App - Top Headlines</h2>

        {/* ab looping kr deinge inki */}

        {/* yeh map function poore article array pr lagega or sarre object le lega , see on console  */}
        {/* {this.state.articles.map((ele)=>{console.log(ele)})} */}

        <div className="row">
          {this.state.articles.map((ele,i)=>{
            
            // ek key use kareinge jo ki uniques hogi i.e url of the source , jo ki return ho jaegi 
            return <div className="col-md-4" key={i}>
              {/* <NewsItemComp title = "Mytitle" description = "xyz" imageurl = "https://i.insider.com/64f217441e6afd00196a380f?width=1200&format=jpeg" newsurl = "TODO"/> */}
              <NewsItemComp title = {ele.title.slice(0,45)} description = {ele.description.slice(0,88)} imageurl = {ele.urlToImage} newsurl = {ele.url}/>

              {/* tile lamba hone ki wajah se blocks uper nicche ho rhe hain  */}
            </div>

          })}
        </div>
      </div>
    )
  }
}

export default NewsComponent
