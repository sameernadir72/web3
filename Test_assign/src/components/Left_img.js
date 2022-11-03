import React from 'react'

const Left_img = (props) => {
  return (
    <>
        <div  className="shadow rounded-3 d-flex align-items-center justify-content-center "
        style={{ height: "400px" }}>
            <img src={props.img} />
        </div>
    </>
  )
}

export default Left_img
