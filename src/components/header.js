import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#f1f1f1',
      marginBottom: '1.8rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#a1a1a1',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
  </div>
)

export default Header
