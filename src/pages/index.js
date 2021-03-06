import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import testprop1 from '../components/testprop1'




const IndexPage = () => (
  <Layout>
    <h1>This is my react playground for a couple of small experiments</h1>
    <p>1. Reddit API integration</p>
    
    <p className="tagline"><span>{this.props.tagline}</span></p>


    <p>2. Random user API integration.</p>
    <Link to="/page-2/">Page with user data</Link>
  </Layout>
)

export default IndexPage
