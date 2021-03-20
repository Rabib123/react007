import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios';


import Home from './component/template/home';
import Navbar from './component/template/navbar';
import Uploadimage from './component/template/upload';


var regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/g;

function Hookcounter() {
      const [toggle, setToggle]= useState(true);
      const [value, setValue] = useState(false);

      const [inputbox, setInput] = useState({
        title :'',
        url :'https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=6&m=922962354&s=612x612&w=0&h=_KKNzEwxMkutv-DtQ4f54yA5nc39Ojb_KPvoV__aHyU=',
        Trigger:false
      }); 


  

      const [api, setApi] = useState({
         data: [],
         tab: true
      });

      
    
      

   useEffect(() =>{

        if(api.tab==true){

              axios.get("http://localhost:5000/project")
              .then((res) => {
              const data = res.data;       
              setApi({
                data: data,
                tab: false
              });
              
              
              })
              .catch(error =>{
                  
              console.log(error);
          })
    
         }
      })

   const postrequest = () =>{
    
         if(inputbox.Trigger){
           
        
         axios.post('http://localhost:5000/project', inputbox)

         .then(res =>{
             setValue(false);
             
         })
         .catch(error =>
            console.log(error)
         )
         }else {
          setValue(true);
         }
   }

   const addphoto= () =>{
         setValue(true)
     }

      

      const delete_image = (id) => {
          

              axios.delete("http://localhost:5000/project/"+id)
              .then(res=> {console.log("Delete Done");
              restartproject(); }) 
              .catch(error=> console.log(error));
              
        }

        const restartproject = () =>{

              axios.get("http://localhost:5000/project")
              .then((res) => {
              const data = res.data;       
              setApi({
                data: data,
                tab: false
              });
              
              
              })
              .catch(error =>{
              console.log(error);
              })

        }
      
        const storedTitle = (e) =>{
              
            const Title = e.target.value;
            setInput({
              title: Title,
              url:inputbox.url,
              Trigger: inputbox.Trigger
            })
  
        }

      const storedImage = (e) =>{
          const URL = e.target.value;
          
              if(regex.test(URL)){
                setInput({
                  title: inputbox.title,
                  url:URL,
                  Trigger:true  
                })
               
              }else{
                setInput({
                  title: inputbox.title,
                  url:'https://simonhwalkerdotcom.files.wordpress.com/2019/05/73927540-invalid-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean-cri.jpg',
                  Trigger:false
                 
                })
              }
           
       }

   

       let render;  
       if(value ==true){

            render = ( 
                       
              <Uploadimage
              storedTitle={storedTitle}
              storedImage={storedImage}
              inputbox={inputbox}
              postrequest={postrequest}
            />
          
            )

        } else if(value==false){
               
               render = (  
                 <Fragment>
                     

                     <Navbar 
                     addphoto={addphoto}
                     />

                     <Home 
                      api={api}
                      delete_image={delete_image}
                     />  

                 </Fragment>                  
               )
       }
      return render;
}

export default Hookcounter