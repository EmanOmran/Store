import React from "react";
import '../style/Contact.css';
function Contact() {
  return (

<div className="contact">
    <div className="overlay">
    <pre>                 </pre>      
       <pre>                 </pre>       
       <pre>                 </pre>
       <pre>                 </pre>
       <pre>                 </pre>
            <h2>contact us</h2>
            <form action=""> 
                <div className="left">
            
      
                <input type="text" class="form-control" placeholder="User Name" aria-label="User Name" aria-describedby="button-addon2"/>
                <input type="text" class="form-control" placeholder="Phone" aria-label="Phone" aria-describedby="button-addon2"/>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2"/>
                <input type="text" class="form-control" placeholder="Subject" aria-label="Subject" aria-describedby="button-addon2"/>

            </div>
            <div className="right">
                <textarea  class="form-control" name="massage" placeholder="your message" aria-label="Your Message"></textarea>
                <input type="submit" value="send"/>
            </div>
            </form>
      
    </div>
</div>



  

  );
}

export default Contact;