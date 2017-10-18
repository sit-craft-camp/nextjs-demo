import React from 'react'
import Head from 'next/head'

import Header from '../components/Head'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'


const Button = props => (
  <button className="btn btn-primary" >{props.poon}</button>
)

const Index = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"/>
    </Head>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <Body boolean={false} list={[1,2,3,4,5,6,7,8,9]}/>
        </div>
      </div>
    </div>
  </div>
)

export default Index
