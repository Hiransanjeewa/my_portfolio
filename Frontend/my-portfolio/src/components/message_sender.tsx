
import React from "react";
import "./message_sender.css"

interface Props {
  htmlContent: string;
}

const MessageSender: React.FC<Props> = ({ htmlContent }) => {
  return(
  <div>
    <div>
       
    <section id="contact" className="add-padding border-top-color1">
    
      <div className="container text-center">
        <div className="row">
        
          <div className="col-sm-6 col-md-12 text-right scrollimation fade-up d1" id='message_sender_details'>
          
            <h1 className="big-text">Drop Me a Message</h1>
          
            <p>Please feel free to contact me with questions, comments or collaborations.</p>

            <p>For more information, <a href="https://www.linkedin.com/in/hiran-sanjeewa-a672b4227/" target="blank">visit my Linkdin Account.</a></p>
          
          
        
        

          <form id="contact-form" className="col-sm-12 col-md-offset-1 scrollimation fade-left d3" action="contact.php" method="post" >
            
            <div className="form-group">
               
              <label className="control-label" >Name</label>
              <div className="controls">
             
              <input id="contact-name" name="contactName" placeholder="Your name" className="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name"/>
              
              </div>
            </div>
            
            <div className="form-group">
              <label className="control-label" >Email</label>
              <div className=" controls">
              <input id="contact-mail" name="email" placeholder="Your email" className="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address" />
            
              </div>
            </div>
            
            <div className="form-group">
              <label className="control-label" >Message</label>
              <div className="controls">
                <textarea id="contact-message" name="comments"  placeholder="Your message" className="form-control requiredField" data-new-placeholder="Your message" data-error-empty="Please enter your message"></textarea>
              </div>
            </div>
            
            <p><button id='message-send-button' name="submit" type="submit" className="btn btn-color3 btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent">Send Message</button></p>
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
