"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { toast } from "react-toastify";
import { HyperText } from "@/components/magicui/hyper-text";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const email = "nifauzi45@gmail.com";
  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      label: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/hnfzii/",
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/6281384878500",
    },
    {
      label: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/hanfauzi",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/muhammad-hanif-fauzi-10223a207/",
    },
  ];

  return (
    <div
      id="contacts"
      className="min-h-screen bg-[#181c1c] text-white px-4 py-12 md:px-6 md:py-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Socials */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:col-span-1">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between border border-[#313838] hover:border-white rounded-2xl p-4 md:p-6 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="h-10 w-10 rounded-full border border-[#313838] flex items-center justify-center hover:border-white text-white text-lg">
                  {item.icon}
                </div>
                <BsArrowUpRight className="text-white text-sm" />
              </div>
              <HyperText className="mt-8 md:mt-12 text-sm font-mono text-white">
                {item.label}
              </HyperText>
            </a>
          ))}
        </div>

        {/* Form */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().min(3).required("Name is required"),
            email: Yup.string()
              .min(5)
              .email("Invalid email")
              .required("Email is required"),
            subject: Yup.string().min(5).required("Subject is required"),
            message: Yup.string().required("Message is required"),
          })}
          onSubmit={async (values, { resetForm }) => {
            try {
              setIsSubmitting(true);
              const res = await fetch("/api/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });

              if (res.ok) {
                toast.success("Message sent successfully!");
                resetForm();
              } else {
                toast.error("Failed to send message.");
              }
            } catch (err) {
              console.error("Submit error:", err);
              toast.error("Something went wrong!");
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          {() => (
            <Form className="border border-[#313838] rounded-2xl p-4 md:p-8 space-y-6 md:col-span-2">
              <h3 className="text-base font-semibold">Drop me a message:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-transparent border border-[#313838] text-sm p-2 rounded-xl text-white placeholder:text-white focus:outline-none w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent border border-[#313838] text-sm p-2 rounded-xl text-white placeholder:text-white focus:outline-none w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
              </div>

              <div>
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-transparent border border-[#313838] text-sm p-2 rounded-xl text-white placeholder:text-white focus:outline-none"
                />
                <ErrorMessage
                  name="subject"
                  component="p"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your message.."
                  rows={4}
                  className="w-full bg-transparent border border-[#313838] text-sm p-2 rounded-xl text-white placeholder:text-white focus:outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#395b64] w-full py-2 rounded-xl text-white text-sm font-medium hover:bg-[#a5c8ca] hover:text-[#0d0f0f] transition-all mt-2 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

              <div className="text-sm text-white mt-4">
                or email me at:
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`mt-2 w-full border border-[#313838] p-2 rounded-xl flex items-center gap-2 text-sm transition-all duration-300 
                ${
                  copied
                    ? "bg-[#a5c8ca] text-[#0d0f0f]"
                    : "hover:bg-[#a5c8ca] hover:text-[#0d0f0f]"
                }`}
                >
                  <FaEnvelope className="text-sm" />
                  <span>{copied ? "Copied!" : email}</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
