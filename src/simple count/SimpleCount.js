import React, { useState } from 'react'

const SimpleCount = () => {
    const [count, setCount] = useState(0);



  return (
     
    <div className="flex  py-[100px] mt-12 justify-center items-center">
    <div className="card bg-[skyblue] w-96 bg-base-100 shadow-xl">
<div className="card-body">
          <h2 className="card-title py-10 text-center flex justify-center"> {count}</h2>
  <div className="card-actions justify-center">
            <button onClick={()=>{setCount(count+1)}} className="btn btn-primary px-10">Up</button>
            <button onClick={()=>{setCount(count>=1?count-1 : count=0)}} className="btn btn-primary px-6">down</button>

  </div>
</div>
</div>
    </div>


  )
}

export default SimpleCount