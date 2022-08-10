import React, { cloneElement } from 'react';


export default function Famila(props) {
  return (
    <div>
      {
        props.children.map((child, index) => {
          return cloneElement(child, { ...props, key: index });
        })
      }
    </div>
  );
}
