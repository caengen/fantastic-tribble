import React from 'react';
import './page.css';

const Page = (props) => (
  <div className="page-container">
    {props.children}
  </div>
)

export default Page;