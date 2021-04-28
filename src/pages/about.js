import React from "react"
import Layout from "../components/Layout"
import * as aboutStyle from '../examples/about.module.css'

const about = () => {
  return (
    <Layout>
      <div className={aboutStyle.page}>
        <h1> About page </h1>
        <p className={aboutStyle.text}>zljlf ksjfdkj</p>
      </div>
    </Layout>
  )
}

export default about
