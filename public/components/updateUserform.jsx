import React from 'react'
import "./form.css"

function updateUserform() {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {

  }
  return (
    <div>
      <div className='update-img'
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
        <div className='update-form'>
        <div className='input'>
        <input 
          type={"text"}
          placeholder="John Smith"/>
          <div className='svg'>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8923 0.76982L12.905 2.75698L18.2428 8.09441L20.2301 6.10724C21.2566 5.08082 21.2566 3.418 20.2301 2.39158L18.6123 0.76982C17.5858 -0.256607 15.9229 -0.256607 14.8964 0.76982H14.8923ZM11.977 3.68487L2.40585 13.2594C1.97882 13.6864 1.66676 14.216 1.49431 14.7949L0.0407757 19.7341C-0.061875 20.0831 0.0325637 20.4567 0.287137 20.7113C0.541711 20.9658 0.91536 21.0602 1.26027 20.9617L6.19982 19.5083C6.77877 19.3358 7.30845 19.0238 7.73547 18.5968L17.3148 9.0223L11.977 3.68487Z" fill="#454545"/>
            </svg>
          </div>
        </div>
        <div className='input'>
        <input 
          type={"email"}
          placeholder="JohnSmith@yahoo.com"/>
          <div className='svg'>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8923 0.76982L12.905 2.75698L18.2428 8.09441L20.2301 6.10724C21.2566 5.08082 21.2566 3.418 20.2301 2.39158L18.6123 0.76982C17.5858 -0.256607 15.9229 -0.256607 14.8964 0.76982H14.8923ZM11.977 3.68487L2.40585 13.2594C1.97882 13.6864 1.66676 14.216 1.49431 14.7949L0.0407757 19.7341C-0.061875 20.0831 0.0325637 20.4567 0.287137 20.7113C0.541711 20.9658 0.91536 21.0602 1.26027 20.9617L6.19982 19.5083C6.77877 19.3358 7.30845 19.0238 7.73547 18.5968L17.3148 9.0223L11.977 3.68487Z" fill="#454545"/>
            </svg>
          </div>
        </div>
        <div className='input'>
        <input 
          type={"phone"}
          placeholder="+XXXXX XXXXXXXX"/>
          <div className='svg'>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8923 0.76982L12.905 2.75698L18.2428 8.09441L20.2301 6.10724C21.2566 5.08082 21.2566 3.418 20.2301 2.39158L18.6123 0.76982C17.5858 -0.256607 15.9229 -0.256607 14.8964 0.76982H14.8923ZM11.977 3.68487L2.40585 13.2594C1.97882 13.6864 1.66676 14.216 1.49431 14.7949L0.0407757 19.7341C-0.061875 20.0831 0.0325637 20.4567 0.287137 20.7113C0.541711 20.9658 0.91536 21.0602 1.26027 20.9617L6.19982 19.5083C6.77877 19.3358 7.30845 19.0238 7.73547 18.5968L17.3148 9.0223L11.977 3.68487Z" fill="#454545"/>
            </svg>
          </div>
        </div>
        
          
      </div>

      <div className='update-form'>
        <div className='input'>
        <input 
          type={"text"}
          placeholder="2716-Bay Street, Toronto..."/>
          <div className='svg'>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8923 0.76982L12.905 2.75698L18.2428 8.09441L20.2301 6.10724C21.2566 5.08082 21.2566 3.418 20.2301 2.39158L18.6123 0.76982C17.5858 -0.256607 15.9229 -0.256607 14.8964 0.76982H14.8923ZM11.977 3.68487L2.40585 13.2594C1.97882 13.6864 1.66676 14.216 1.49431 14.7949L0.0407757 19.7341C-0.061875 20.0831 0.0325637 20.4567 0.287137 20.7113C0.541711 20.9658 0.91536 21.0602 1.26027 20.9617L6.19982 19.5083C6.77877 19.3358 7.30845 19.0238 7.73547 18.5968L17.3148 9.0223L11.977 3.68487Z" fill="#454545"/>
            </svg>
          </div>
        </div>
        <div className='input'>
        <input 
          type={"text"}
          placeholder="Site worker"/>
          <div className='svg'>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8923 0.76982L12.905 2.75698L18.2428 8.09441L20.2301 6.10724C21.2566 5.08082 21.2566 3.418 20.2301 2.39158L18.6123 0.76982C17.5858 -0.256607 15.9229 -0.256607 14.8964 0.76982H14.8923ZM11.977 3.68487L2.40585 13.2594C1.97882 13.6864 1.66676 14.216 1.49431 14.7949L0.0407757 19.7341C-0.061875 20.0831 0.0325637 20.4567 0.287137 20.7113C0.541711 20.9658 0.91536 21.0602 1.26027 20.9617L6.19982 19.5083C6.77877 19.3358 7.30845 19.0238 7.73547 18.5968L17.3148 9.0223L11.977 3.68487Z" fill="#454545"/>
            </svg>
          </div>
        </div>
          <div className={"form"}>
          <button className='create'>Update</button>
          </div>
          
      </div>

      
        </div>
      

      </form>
      
    </div>
  )
}

export default updateUserform
