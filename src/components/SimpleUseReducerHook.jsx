import React, { useReducer, useEffect } from 'react';

const SimpleUseReducerHook = () => {

    const reducer = (state, action) => {

        // console.log(action);
        // console.log(state);

        if (action.type === "Increment") {
            return state + 1;
        }

        if (action.type === "Decrement" && state > 0) {
            return state - 1;
        }

        return state;

    }

    const [state, dispatch] = useReducer(reducer, 0);

    console.log(state);

    useEffect(() => {
      if (state === 0) {
        alert("Value reaches to zero & cannot be negative...");
        console.log("reached");
      }
    })
    

    

    return (
        <div className='bg-dark' style={{ height: "100vh" }}>
            <div className="conatiner">
                <h1 className="display-6 text-center text-light">
                    SimpleUseReducerHook
                </h1>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <button className="btn btn-light btn-lg d-inline-block mx-2" onClick={() => dispatch({ type: "Increment" })}>+</button>
                    <h5 className='lead text-light d-inline-block mx-2'>{state}</h5>
                    <button className="btn btn-light btn-lg d-inline-block mx-2" onClick={() => dispatch({ type: "Decrement" })}>-</button>
                </div>
            </div>
        </div>
    )
}

export default SimpleUseReducerHook