import React, {useState, useEffect} from 'react'
import design from '../design/form.css';
import card from '../design/card.css'
import image from '../design/image.css'
import navbar from '../design/navbar.css'
import upload from '../design/upload.css'
import navbarpro from '../design/navbarpro.css'


const navbarr = (props) =>{

   

        return(

            <header className='navbar'>
            <div className='navbar__title navbar__item'>Welcome</div>
            <div className='navbar__item' onClick={props.addphoto}>Add Photo</div>        
          </header>

        )


}

export default navbarr;