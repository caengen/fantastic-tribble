import React from 'react';
import './page.css';

const Page = (props) => {
  let classes = props.className || '';
  return (
    <div className={`page-container ${classes}`}>
      {props.children}
    </div>
  )
}

export default Page;