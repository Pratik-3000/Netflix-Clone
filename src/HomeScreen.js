import React from 'react'
import "./HomeScreen.css"
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './Request'

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav></Nav>
      <Banner></Banner>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} ></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} ></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} ></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} ></Row>
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} ></Row>
    </div>
  )
}

export default HomeScreen
