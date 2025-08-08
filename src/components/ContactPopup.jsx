import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

export default function ContactPopup(props) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from Website`);
  }, [userName, setValue]);

  const onSubmit = async (data, e) => {
    console.log(data);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          props.setShowModal(true);
          props.setIsFormOk(true);

          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-full max-w-lg mx-auto rounded-xl p-6 sm:p-8 bg-white shadow-2xl relative text-black">
        {!isSubmitSuccessful && !isSuccess && (
          <h1 className="text-lg sm:text-xl pb-6 font-bold text-center leading-snug">
            <span className="text-blue-700">Submit your details </span>
            to get an{" "}
            <span className="text-yellow-500 font-semibold">
              instant inclusive quote
            </span>{" "}
            or get a free consultation!
          </h1>
        )}

        {!isSubmitSuccessful && (
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="hidden"
              value="de7a0dda-84e5-448a-9090-0180388bc35c" // de7a0dda-84e5-448a-9090-0180388bc35c
              {...register("access_key")}
            />
            <input type="hidden" {...register("subject")} />
            <input
              type="hidden"
              value="Mission Control"
              {...register("from_name")}
            />
            <input
              type="checkbox"
              className="hidden"
              {...register("botcheck")}
            />

            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 ${
                  errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-blue-700 ring-blue-100"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-blue-600 ring-blue-100"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <input
                type="tel"
                placeholder="Phone Number"
                className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 ${
                  errors.phone
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-blue-600 ring-blue-100"
                }`}
                {...register("phone", {
                  required: "Enter your Phone Number",
                  pattern: {
                    value: /^[0-9+\-\s()]{7,20}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {errors.phone && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <textarea
                placeholder="Your Message"
                className={`w-full px-4 py-3 border-2 rounded-md outline-none h-32 focus:ring-4 ${
                  errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-blue-600 ring-blue-100"
                }`}
                {...register("message", {
                  required: "Enter your Message",
                })}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-orange-600 rounded-md hover:bg-blue-600 transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        {/* Success Message */}
        {isSubmitSuccessful && isSuccess && (
          <div className="text-center">
            <h3 className="text-xl text-green-600 font-semibold mb-2">
              Success
            </h3>
            <p className="text-gray-700">{Message}</p>
            <button
              className="mt-4 text-blue-600 underline"
              onClick={() => reset()}
            >
              Go back
            </button>
          </div>
        )}

        {/* Error Message */}
        {isSubmitSuccessful && !isSuccess && (
          <div className="text-center">
            <h3 className="text-xl text-red-600 font-semibold mb-2">
              Something went wrong
            </h3>
            <p className="text-gray-700">{Message}</p>
            <button
              className="mt-4 text-blue-600 underline"
              onClick={() => reset()}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </>
  );
}
