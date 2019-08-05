import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
      <Header />
  )
}


export default Layout
