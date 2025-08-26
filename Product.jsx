import React from "react";
function Product({Title,Description,oldprice,newprice}){
  let styles={
    border:"2px solid black",
    width:"120px",
    textAlign:"center",
    display: "inline-block",
   
    


  }
  return (

    <div style={styles} >
      <h3>{Title}</h3>
      <h4>{Description}</h4>
    <h5>
  <span style={{ textDecoration: "line-through", color: "gray", marginRight: "8px" }}>
    ₹{oldprice}
  </span>
  <span style={{ color: "green", fontWeight: "bold" }}>
    ₹{newprice}
  </span>
</h5>

  
    
      <button>order now</button>
      </div>
 
  
  )
}
export default Product;
