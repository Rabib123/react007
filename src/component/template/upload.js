import React, {useState, useEffect} from 'react'
import design from '../design/form.css';
import card from '../design/card.css'
import image from '../design/image.css'
import navbar from '../design/navbar.css'
import upload from '../design/upload.css'
import navbarpro from '../design/navbarpro.css'


const upload_image =(props) =>{

    const {storedTitle, storedImage,inputbox,postrequest} = {...props}

       return (


                 <div class="form">
                    <div class="form-toggle"></div>
                      <div class="form-panel one">
                            <div class="form-header">
                                <h1>Upload Image</h1>
                            </div>
                       <div class="form-content">
                            <form>
                            <div class="form-group">
                                <label for="username">Title</label>
                                <input id="username" type="text" name="username" onChange={storedTitle} required="required"/>
                            </div>
                            <div class="form-group">
                                <label for="password">Image Url</label>
                                <input id="username" type="text" name="Image Url" onChange={storedImage}  required="required"/>
                            </div>
                            <img src={inputbox.url} class='image'  width="300" height="300" alt="Psychopomp" />  
                            <div class="form-group">
                                <button type="submit" onClick={postrequest}>Upload Now</button>
                            </div>
                            </form>

                       </div>

                    </div>
                                
                </div>

       )


}

export default upload_image;