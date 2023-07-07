
import React, { useState } from "react";
import "./message_sender.css"
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
// cookies.set('message_time', 'time', { path: '/' });
// console.log(cookies.get('myCat')); 


interface Props {
  htmlContent: string;
}

const MessageSender: React.FC<Props> = ({ htmlContent }) => {

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
  
  function sendEmail() {
   console.log(email)
   
   const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
   const result: boolean = expression.test(email);
   console.log(userName);
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
      (document.getElementById('button') as HTMLImageElement).innerHTML = "<p id='error_message'>Message Sent</P>"

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
              <div className=" controls" onClick={(event)=>RemoveError()}>
              <input id="contact-mail" name="email" placeholder="Your email" className="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address"  onChange={(e)=>setEmail(e.target.value)} onKeyDown={(event)=>RemoveError()}/>
              </div>
            </div>
            
            <div className="form-group">
              <label className="control-label" >Message</label>
              <div className="controls" onClick={(event)=>RemoveError()}>
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
