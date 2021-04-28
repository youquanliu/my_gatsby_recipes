import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1> Hello Home Page~!</h1>
        <p className={text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          minus, debitis praesentium explicabo nesciunt amet eveniet minima
          itaque officiis totam non ipsa magnam esse adipisci nisi alias rerum
          assumenda eligendi?
        </p>
      </div>
    </Layout>
  )
}
