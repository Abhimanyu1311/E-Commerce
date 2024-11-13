import React from 'react'

const Btn = ({
  buttonName
})=>{
  return(
    <button type="submit" className={`w-24 flex border-2  bg-cyan-800 text-white rounded-lg justify-center cursor-pointer 
                      items-center mt-4  text-xl`}>
      {buttonName}
    </button>
  );
}



export default Btn;