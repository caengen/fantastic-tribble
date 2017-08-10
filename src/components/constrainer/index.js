import React from 'react';
import './constrainer.css';

const Constrainer = (props) => {
  let tight = props.tighter ? 'constrainer-tighter' : '';
  return (
    <div className={`constrainer ${tight}`}>
      {props.children}
    </div>
  );
}

export default Constrainer;