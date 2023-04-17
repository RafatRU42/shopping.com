import React, { useContext } from 'react';
import { ReactNavbar } from "overlay-navbar";
import { AuthContext } from '../Authienticate/AuthProvider';
import {Link} from 'react-router-dom'



const options = {
  burgerColorHover: "#eb4034",
  burgerColor: '#00C1A2',
  // logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "Login",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/login",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  menuBurgerSize: '5vmax',
  menuBurgerHeight: '5vmax'
};

const Navbar = () => {

  const { logOutUser, user } = useContext(AuthContext)

  const handleLogout = () => {
    logOutUser()
      .then(result => () => console.log(result))
      .catch(error => () => console.log(error))
  }

  return (

    <div>
      <div className='flex justify-between mx-24'>
        <div>
          <Link  className='text-4xl text-green font-serif font-bold' to={'/'}>Shopping.com</Link>
        </div>
        <div>
          <p>profile</p>
          {user ? <button onClick={handleLogout}>logout</button>
            : <Link to='/login'>log In</Link>}
        </div>
      </div>

      <ReactNavbar {...options}></ReactNavbar>
    </div>


  )
};

export default Navbar;