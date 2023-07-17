
import React, {  useState } from "react";
import "./message_sender.css"

import { useCookies } from 'react-cookie'
import axios from "axios";

 
  

     



interface Props {
  htmlContent: string;
}

const MessageSender: React.FC<Props> = ({ htmlContent }) => {

  const [cookies, setCookie] = useCookies(['message_day'])

 
  class Email {
    email:string;
    message:string;
    name:string;
    date:number;

    constructor(email: string,message:string,username:string,date:number) {
      this.email = email;
      this.message=message;
      this.name=username;
      this.date=date;
    }
  }
   
   

  //const [cookies, setCookie] = useCookies(['user']);
  const [email,setEmail]=useState(' ');
  const [userName,setUserName]=useState(' ');
  const [message,setMessage]=useState(' ');
  



  const messagesender=htmlContent;
  if (messagesender==='no_message_sender') {
   // document.getElementById('contact-form').innerHTML='<div/>';
  }


  function RemoveError() {


    (document.getElementById('button') as HTMLImageElement).innerHTML = "<button id='message-send-button' name='submit' type='submit' className='btn btn-color3 btn-block'   onClick={sendEmail}>Send Message</button>";
  
    (document.getElementById('message-send-button') as HTMLImageElement).onclick = function () {
      sendEmail()
     }
  
  }
  //console.log(cookies.message_day)
  function sendEmail() {
   console.log(email)
   console.log(userName);
 
   
   const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
   const result: boolean = expression.test(email);

    setEmail((document.getElementById('contact-mail') as HTMLDataElement).value)
   
   if (userName===' ') {
    
    (document.getElementById('button') as HTMLImageElement).innerHTML = "<p id='error_message'>Please Enter your name</P>"
  
  }
    else if (email===' ') {
      (document.getElementById('button') as HTMLImageElement).innerHTML = "<p id='error_message'>Please Enter your email address</P>"
    
    }else if (!result) {
      (document.getElementById('button') as HTMLImageElement).innerHTML = "<p id='error_message'>Please Enter a valid email address</P>"
    }
    else if (message===' ') {
      (document.getElementById('button') as HTMLImageElement).innerHTML = "<p id='error_message'>Please Enter a message to send</P>"
    
    }
    else{
      var today = new Date()
      console.log(typeof( cookies.message_day))
      console.log(typeof( today.getDate().toString()))
      if (cookies.message_day===today.getDate().toString()) {
        (document.getElementById('button') as HTMLImageElement).innerHTML = "<p id='error_message'>Sorry only one message per day</P>"
       }else{

        let emailObject=new Email(email,message,userName,today.getDate());
        console.log(emailObject);

          axios
            .post('http://172.17.0.4:8080/sendEmail',{
              "email" : email,
              "name" : userName,
              "message" : message
            })
            .then(response => {
              console.log(response.data)
            });
         

        

        (document.getElementById('button') as HTMLImageElement).innerHTML = "<p id='error_message'>Message Sent</P>"
        setCookie('message_day', today.getDate(), { path: '/'})
       }
       //console.log(cookies.message_day)
       (document.getElementById('contact-name') as HTMLDataElement).value = "";
       (document.getElementById('contact-mail') as HTMLDataElement).value ="";
       (document.getElementById('contact-message') as HTMLDataElement).value = ""


    }
  }



  return(
   
  <div>
    <div>
       
    <section id="contact" className="add-padding border-top-color1">
    
      <div className="container text-center">
        <div className="row">
        
          <div className="col-sm-6 col-md-12 text-right scrollimation fade-up d1" id='message_sender_details'>
          
            <h1 className="big-text">Drop Me a Message</h1>
          
            <p >Please feel free to contact me with questions, comments or collaborations.</p>

            <p>For more information, <a href="https://www.linkedin.com/in/hiran-sanjeewa-a672b4227/" target="blank">visit my Linkdin Account.</a></p>
          
          
      
          <form id="contact-form" className="col-sm-12 col-md-offset-1 scrollimation fade-left d3" >
            
            <div className="form-group">
               
              <label className="control-label" >Name</label>
              <div className="controls" >
             
              <input id="contact-name" name="contactName" placeholder="Your name" className="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name"   onChange={(e)=>setUserName(e.target.value)} onSelect={(event)=>RemoveError()}/>
              
              </div>
            </div>
            
            <div className="form-group">
              <label className="control-label" >Email</label>
              <div className=" controls" >
              <input id="contact-mail" name="email" placeholder="Your email" className="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email"  onChange={(e)=>setEmail(e.target.value)} onSelect={(event)=>RemoveError()}/>
              </div>
            </div>
            
            <div className="form-group">
              <label className="control-label" >Message</label>
              <div className="controls" >
                <textarea id="contact-message" name="comments"  placeholder="Your message" className="form-control requiredField" data-new-placeholder="Your message" data-error-empty="Please enter your message"  onChange={(e)=>setMessage(e.target.value)} onSelect={(event)=>RemoveError()}></textarea>
              </div>
            </div>
            
            <p id="button"><button id='message-send-button'  name="submit" type="submit" className="btn btn-color3 btn-block"   onClick={sendEmail} >Send Message</button></p>
            <input type="hidden" name="submitted" id="submitted" value="true" />
            
          </form>
          </div>
          
        </div>
        
      </div>
    
    </section>

    </div>


  </div>) ;
};

export default MessageSender;
