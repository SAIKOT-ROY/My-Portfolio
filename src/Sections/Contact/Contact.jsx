import emailjs from "@emailjs/browser";
import { useRef } from "react";
import mail from "../../lottie/71647-mail.json";
import Lottie from "react-lottie";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zo75mxh",
        "template_ntp01ic",
        form.current,
        "Muk43wXQa4JsMLq-y"
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

  const LottieMail = {
    loop: true,
    autoplay: true,
    animationData: mail,
  };

  return (
    <div className="md:flex mb-96 justify-between items-center">
      <div className="md:w-1/2">
        <Lottie options={LottieMail} />
      </div>
      <div
        className="border md:w-2/5 flex justify-center items-center py-7 rounded-lg bg-blue-200"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/qMSwL1V/minimalist-business-card-copy-space.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: "0.9",
          backgroundBlendMode: "multiply",
        }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <p className="font-bold">Name</p>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              name="from_name"
              placeholder="Your Name"
            />
          </div>
          <div>
          <p className="font-bold">Email</p>
            <input
              className="input input-bordered w-full max-w-xs"
              type="email"
              name="user_email"
              placeholder="Your Email"
            />
          </div>
          <div>
          <p className="font-bold">Message</p>
            <textarea
              className="textarea textarea-bordered mb-3 textarea-lg w-full max-w-xs"
              name="message"
              placeholder="Your Message"
            />
          </div>
          <div>
            <input
              className="btn bg-blue-600 btn-md w-1/2 border-blue-300 flex mx-auto text-white"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
