import React, { useState } from "react";

const Counter = () => {
  let val;
  const [count, setcount] = useState(1);

  const updateVal = (e) => {
    val = e.target.value;
    setcount(val);
  };

  const increament = () => {
    setcount(count + 1);
  };
  const decreameant = () => {
    setcount(count - 1);
  };


  return (
    <>
      <div
        className="shadow rounded-3 d-flex align-items-center justify-content-center "
        style={{ height: "400px" }}
      >
        <div>
        <div className="input-group">
       

            <button className="btn btn-primary" onClick={decreameant}>
               -
            </button>
          <input
            type="text"
            onChange={updateVal}
            value={count}
            className="form-control"
          />
        
          <button className="btn btn-primary" onClick={increament}>
              +
            </button>
       
          </div>
          {
            count > 10000 ? <small style={{ fontsize: "2px" }} className="text-danger d-block">
              Count Allow Only 10k
            </small>
           : false
          } 
          {
            count < 0 ? <small style={{ fontsize: "2px" }} className="text-danger d-block">
              ohh no allow value off -
            </small>
           : false
          } 
        </div>
      </div>
    </>
  );
};

export default Counter;
