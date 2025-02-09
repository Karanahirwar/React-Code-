import React from 'react'

const ChildComponents = React.memo((props) => {
    console.log('ChildComponents got re-rendered');
    return (
        <div>
            <button onClick={props.handleClick}>
                {/* {props.buttonName} */}
      </button>
        </div>
    );
});

// condition 1
// React.memo -> wrap -> components -> component 
// re-render tabhi hoga jab props change honge nhi to 
// re-render nhi hoga 

// condition 2
// jb me hm probs ke ander function 
// bhejte h to React.memo hook
// can not handle 
// because function render ho rha h
// aur React.memo soch rha h ki 
// bar - bar new function render ho rha h 
// jbki function ka refence update ho rha h 



export default ChildComponents
