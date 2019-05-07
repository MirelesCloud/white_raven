import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const CrumbButton = styled.span`
  color: #cccccc;
  :hover {
    color: green;
  }
`
const BreadCrumbBar = () => (
  <nav className="breadcrumb has-dot-separator is-centered has-text-white" aria-label="breadcrumbs">
    <br/>
    <ul className="is-uppercase">
      <li><Link to="/murals"><CrumbButton >Murals</CrumbButton></Link></li>
      <li><Link to="/wood_art"><CrumbButton>Wood Art</CrumbButton></Link></li>
      <li><Link to="/leis"><CrumbButton>Leis</CrumbButton></Link></li>
      <li><Link to="/commissions"><CrumbButton>Commissions</CrumbButton></Link></li>
    </ul>
  </nav>
)

export default BreadCrumbBar
