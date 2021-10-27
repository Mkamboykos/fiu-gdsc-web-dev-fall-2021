import React from 'react'
import {Link} from 'react-router-dom'
import RecipeCard from './RecipeCard'
import {Row, Col, Container} from 'react-bootstrap'

function Home() {
    return (
      <div>
        <Link to="/Dashboard" className="link">To Dashboard</Link>
        <Container>
  <Row>
   
  </Row>
  <Row noGutters>
    <Col  noGutters lg = {3} md = {4} sm = {6} xs = {6} className = "align-items-center justify-content-center NoGutters"><RecipeCard/></Col>
    <Col lg = {3} md = {4} sm = {6} xs = {6} className = "align-items-center justify-content-center NoGutters"><RecipeCard/></Col>
    <Col lg = {3} md = {4} sm = {6} xs = {6} className = "align-items-center justify-content-center NoGutters"><RecipeCard/></Col>
    <Col lg = {3} md = {4} sm = {6} xs = {6} className = "align-items-center justify-content-center NoGutters"><RecipeCard/></Col>
  </Row>
</Container>
        
        
      </div>
    )
}

export default Home;
