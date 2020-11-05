import React from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RegistrationScreen() {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_vp99unh",
        "template_rk4zbdr",
        e.target,
        "user_chTNQLZd6Lh6tqOntq0aY"
      )
      .then(
        (result) => {
          console.log("result", result);
          // window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <Navbar />
      <div>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <br></br>
          <input type="text" name="from_name" />
          <label>Email</label>
          <br></br>
          <input type="email" name="from_email" />
          <label>Subject</label>
          <br></br>
          <input type="text" name="subject" />
          <label>Message</label>
          <textarea name="html_message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      <Footer />
    </>
  );
}

// Version 2============================

// const client = new SMTPClient({
//     user: 'gmhoang.developer@gmail.com',
//     password: 'Hoang@12',
//     host: 'smtp.gmail.com',
//     ssl: true,
// });

// // send the message and get a callback with an error or details of the message that was sent
// client.send(
//     {
//         text: 'i hope this works',
//         from: 'Giang Minh Hoàng <gmhoang.developer@gmail.com>',
//         to: 'giangminhhoang999@gmail.com',
//         // cc: 'else <else@your-email.com>',
//         subject: 'testing emailjs',
//     },
//     (err, message) => {
//         console.log(err || message);
//     }
// );

// import React from "react";
// import { SMTPClient } from "emailjs";
// import { Button } from "@material-ui/core";

// function RegistrationScreen(props) {
//   const hoang = () => {
//     const client = new SMTPClient({
//       user: "gmhoang.developer@gmail.com",
//       password: "Hoang@12",
//       host: "smtp.gmail.com",
//       ssl: true,
//     });

//     // send the message and get a callback with an error or details of the message that was sent
//     client.send(
//       {
//         text: "i hope this works",
//         from: "Giang Minh Hoàng <gmhoang.developer@gmail.com>",
//         to: "giangminhhoang999@gmail.com",
//         // cc: 'else <else@your-email.com>',
//         subject: "testing emailjs",
//       },
//       (err, message) => {
//         console.log(err || message);
//       }
//     );
//   };
//   return (
//     <div>
//       <Button onClick={hoang}> Hoang</Button>
//     </div>
//   );
// }

// export default RegistrationScreen;
