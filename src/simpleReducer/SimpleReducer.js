import React, { useReducer } from 'react'

const SimpleReducer = () => {


    
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREAMENT") {
      return ( state + action.payload);
    }
    if (action.type === "DECREAMENT") {
      return (state>=6?state-action.payload : state=0);
    }


  }

  const [state, dispatch] = useReducer(reducer, initialState);





  return (
      <div>
          

          
          <div className="flex  py-[100px] mt-12 justify-center items-center">
      <div className="card bg-[skyblue] w-96 bg-base-100 shadow-xl">
  <div className="card-body">
            <h2 className="card-title py-10 text-center flex justify-center"> {state}</h2>
    <div className="card-actions justify-center">
              <button onClick={() =>dispatch({ type: "INCREAMENT",payload:10}) } className="btn btn-primary px-10">Up</button>
              <button onClick={()=>dispatch({type:"DECREAMENT",payload:6})} className="btn btn-primary px-6">down</button>

    </div>
  </div>
</div>
      </div>


    </div>
  )
}

export default SimpleReducer