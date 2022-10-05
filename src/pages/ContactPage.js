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
  };

  return (
    <>
      <PageHeader text="My Projects" />
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default contactPage;
