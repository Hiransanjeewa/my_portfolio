import React from 'react'
import "./message_sender.css"

export default function MessageSender() {
  return (
    <div>
       
    <section id="contact" class="add-padding border-top-color1">
    
      <div class="container text-center">
        <div class="row">
        
          <div class="col-sm-6 col-md-12 text-right scrollimation fade-up d1" id='message_sender_details'>
          
            <h1 class="big-text">Drop Me a Message</h1>
          
            <p>Please feel free to contact me with questions, comments or collaborations.</p>

            <p>For more information, <a href="https://www.linkedin.com/in/hiran-sanjeewa-a672b4227/" target="blank">visit my Linkdin Account.</a></p>
          
          
        
        

          <form id="contact-form" class="col-sm-12 col-md-offset-1 scrollimation fade-left d3" action="contact.php" method="post" novalidate>
            
            <div class="form-group">
               
              <label class="control-label" for="contact-name">Name</label>
              <div class="controls">
             
              <input id="contact-name" name="contactName" placeholder="Your name" class="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name"/>
              
              </div>
            </div>
            
            <div class="form-group">
              <label class="control-label" for="contact-mail">Email</label>
              <div class=" controls">
              <input id="contact-mail" name="email" placeholder="Your email" class="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address" />
            
              </div>
            </div>
            
            <div class="form-group">
              <label class="control-label" for="contact-message">Message</label>
              <div class="controls">
                <textarea id="contact-message" name="comments"  placeholder="Your message" class="form-control requiredField" data-new-placeholder="Your message" rows="2" data-error-empty="Please enter your message"></textarea>
              </div>
            </div>
            
            <p><button id='message-send-button' name="submit" type="submit" class="btn btn-color3 btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent">Send Message</button></p>
            <input type="hidden" name="submitted" id="submitted" value="true" />
            
          </form>
          </div>
          
        </div>
        
      </div>
    
    </section>

    </div>
  )
}
