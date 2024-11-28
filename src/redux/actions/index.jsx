//  For Add Items TO Cart 


export const addToCart = (product) => {
    return {
      type:"ADDITEM",
      payload: product
  }
  }
//   FOr DELETE ITEM FROM CART
  export const deleteFromCart = (product) => {
    return {
      type:"DELITEM",
      payload: product
  }
  }
    