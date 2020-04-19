import React from "react";
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer className="bottom-0 fixed flex justify-between justify-center pb-6 px-4 w-full">
        <span>© {new Date().getFullYear()}</span>
        <span>Built with <a className="text-blue-500 underline" href="https://www.gatsbyjs.org">Gatsby</a> & <a className="text-blue-500 underline" href="https://tinacms.org/">TinaCMS</a></span>
      </footer>
    </div>
  )
}

export default Layout
