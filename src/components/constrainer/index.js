import React from 'react';
import './constrainer.css';

const Constrainer = (props) => (
  <div className={`constrainer ${props.tighter && 'constrainer-tighter'}`}>
    {props.children}
  </div>
)

export default Constrainer;