import React, {useState, useEffect} from 'react'
import design from '../design/form.css';
import card from '../design/card.css'
import image from '../design/image.css'
import navbar from '../design/navbar.css'
import upload from '../design/upload.css'
import navbarpro from '../design/navbarpro.css'
const home = (props) =>{

    const {api, delete_image} = {...props}

        return(

            <React.Fragment>
 
            <div class="cards">

              {api.data.map((result) => {
              return(

            <div class="card" key={result._id}>
                <div class="card-title">
                  <a href="#" class="toggle-info btn">
                  <img  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1200px-Flat_cross_icon.svg.png'} onClick={() => delete_image(result._id)} width="40" height="40"  alt="wave" />
                  </a>
                  <h2>
                      {result.title}
                  </h2>
                </div>
                  <div class="card__image-holder">
                    <img class="card__image" src={result.imageUrl} alt="wave" />
                  </div>
              </div>                   
              )
              })}
          </div>  

       </React.Fragment>

        ) 

}

export default home;
