import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet';


const Layout = ({children, title, description, author}) => {
  return (
    <div>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name='author' content={author}/>
        </Helmet>
        <Header/>
        <main style={{minHeight: '70vh'}}>{children}</main>
        <Footer/>
    </div>
  )
}

Layout.defaultProps = {
    title: "Codingo",
    description: "A blog website",
    author: "Mitlesh Patel",
}

export default Layout