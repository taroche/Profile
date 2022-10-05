import { React, createRef } from "react";
import emailjs from "@emailjs/browser";
import { PageHeader } from "../components/PageHeader";

const contactPage = () => {
  const form = createRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q84yunw",
        "template_bb721mn",
        form.current,
        "6tPR3AHWAw706f2X1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <PageHeader text="Please Contact Me" />
      <form ref={form} onSubmit={sendEmail} className="text-center">
        <label>Name</label>
        <br></br>
        <input type="text" name="user_name" />
        <br></br>
        <label>Email</label>
        <br></br>
        <input type="email" name="user_email" />
        <br></br>
        <label>Message</label>
        <br></br>
        <textarea name="message" rows="4" cols="50" />
        <br></br>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default contactPage;
