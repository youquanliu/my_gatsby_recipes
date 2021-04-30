import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/contact">Contact Page</Link>
        </li>
        <li>
          <Link to="/tags">Tags Page</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes Page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
