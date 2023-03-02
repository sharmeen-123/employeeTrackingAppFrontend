import React from 'react'
import "./form.css"

function addUserform() {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {

  }
  return (
    <div>
      <div className='image-div'
      onClick={handleClick}>
      <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.38196 2.42218L7.83606 4.05987H3.91504C2.06213 4.05987 0.555664 5.56634 0.555664 7.41925V20.8567C0.555664 22.7096 2.06213 24.2161 3.91504 24.2161H24.0713C25.9242 24.2161 27.4307 22.7096 27.4307 20.8567V7.41925C27.4307 5.56634 25.9242 4.05987 24.0713 4.05987H20.1503L19.6044 2.42218C19.2632 1.39337 18.3026 0.7005 17.2161 0.7005H10.7703C9.68372 0.7005 8.72314 1.39337 8.38196 2.42218ZM13.9932 9.09894C15.3296 9.09894 16.6113 9.62984 17.5563 10.5748C18.5013 11.5198 19.0322 12.8016 19.0322 14.138C19.0322 15.4744 18.5013 16.7561 17.5563 17.7012C16.6113 18.6462 15.3296 19.1771 13.9932 19.1771C12.6567 19.1771 11.375 18.6462 10.43 17.7012C9.485 16.7561 8.9541 15.4744 8.9541 14.138C8.9541 12.8016 9.485 11.5198 10.43 10.5748C11.375 9.62984 12.6567 9.09894 13.9932 9.09894Z" fill="black"/>
        </svg>

      <p>Add profile picture</p>
        <input 
        type={"file"}
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
        />
        
      </div>
      <form>
        <div className='form'>
        <div className='form-side'>
        <label>Full name</label>
        <input 
          type={"text"}
          placeholder="enter name"/>
          <label>Email</label>
        <input 
          type={"email"}
          placeholder="enter email"/>
          <label>Address</label>
        <input 
          type={"text"}
          placeholder="enter address"/>
          <div className={"form"}>
          <button className='cancel'>Cancel</button>
          <button className='create'>Create</button>
          </div>
          
      </div>

      <div className='form-side'>
        <label>Contact</label>
        <input 
          type={"phone"}
          placeholder="enter contact"/>
          <label>Designation</label>
       
        <input 
          type={"text"}
          placeholder="enter address"/>
      </div>

      
        </div>
      

      </form>
      
    </div>
  )
}

export default addUserform
