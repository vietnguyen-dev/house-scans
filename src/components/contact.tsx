import { useState } from "react";
import axios from "axios";

interface iErrors {
  name: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}

interface iEmail {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<iErrors>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const [messageSent, setMessageSent] = useState<boolean | "error">(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const sanitized = inputValue.replace(/[^a-zA-Z ]/g, "");
    setName(sanitized);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const formatPhoneNumber = (input: string) => {
    const phoneString = input.replace(/\D/g, "");
    const areaCode = phoneString.slice(0, 3) || "";
    const firstPart = phoneString.slice(3, 6) || "";
    const secondPart = phoneString.slice(6, 10) || "";
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Determine if a character was removed (backspace pressed)
    if (inputValue.length < phone.length) {
      // If a character was removed, update the phone number without formatting
      setPhone(inputValue);
    } else {
      // If a character was added or the input was changed, format the input
      setPhone(formatPhoneNumber(inputValue));
    }
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const findErrors = (data: iEmail) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    const nameError = data.name.length > 0;
    const emailError = data.email.length > 0 && emailPattern.test(data.email);
    const phoneError = data.phone.length > 0 && phonePattern.test(data.phone);
    const messageError = data.message.length > 20;
    if (nameError && emailError && phoneError && messageError) {
      return true;
    } else {
      console.log(nameError, emailError, phoneError, messageError);
      setErrors({
        name: !nameError,
        email: !emailError,
        phone: !phoneError,
        message: !messageError,
      });
    }
  };

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    const errors = findErrors(data);
    if (errors) {
      const sent = await axios.post("/api/email", data);
      if (sent.status === 200) {
        setMessageSent(true);
      } else {
        setMessageSent("error");
      }
    }
  };

  const submitDisabled =
    name.length > 0 &&
    email.length > 0 &&
    phone.length > 0 &&
    message.length > 0;

  const cardBody = messageSent === true || messageSent === "error";

  return (
    <div className="flex justify-center my-10" id="contact">
      <div className={`card w-96 bg-base-100 shadow-xl`}>
        <div className="card-body">
          <h3 className="text-center text-3xl font-bold">Contact Us</h3>
          {messageSent === true && (
            <p
              className={`text-center ${
                cardBody &&
                `h-56 flex justify-center items-center
            `
              }`}
            >
              Thanks for Contacting us! We will respond in the next 24 hours.
            </p>
          )}
          {messageSent === false && (
            <>
              <p className="text-center">
                Send us a message if you have any questions!
              </p>
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Name Here..."
                  className="input input-bordered w-full max-w-xs mt-3"
                  value={name}
                  onChange={handleNameChange}
                />
                {errors.name && (
                  <label className="label">
                    <span className="label-text-alt text-error ml-auto">
                      Invalid Name
                    </span>
                  </label>
                )}
                <input
                  type="email"
                  placeholder="Email Here..."
                  className="input input-bordered w-full max-w-xs mt-3"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error ml-auto">
                      Invalid Email
                    </span>
                  </label>
                )}
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Phone Number Here... (xxx) xxx-xxxx"
                  className="input input-bordered w-full max-w-xs mt-3"
                />
                {errors.phone && (
                  <label className="label">
                    <span className="label-text-alt text-error ml-auto">
                      Invalid Phone
                    </span>
                  </label>
                )}
                <textarea
                  className="textarea textarea-bordered w-full max-w-xs h-32 mt-3"
                  placeholder="Message Here..."
                  value={message}
                  onChange={handleMessageChange}
                />
                {errors.message && (
                  <label className="label">
                    <span className="label-text-alt text-error ml-auto">
                      Invalid Message
                    </span>
                  </label>
                )}
                <div className="card-actions justify-end mt-3">
                  <button
                    className="btn btn-success w-full"
                    type="submit"
                    disabled={!submitDisabled}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          )}
          {messageSent === "error" && (
            <p
              className={`text-center ${
                cardBody &&
                `h-56 flex justify-center items-center
          `
              }`}
            >
              There was an error trying to send you a message. Please reload and
              try again or wait a few minutes and try again
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
