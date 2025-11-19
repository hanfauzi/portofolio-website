"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
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

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const email = "nifauzi45@gmail.com";

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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too short").required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .min(5, "Too short")
      .required("Email is required"),
    subject: Yup.string()
      .min(5, "Too short")
      .required("Subject is required"),
    message: Yup.string().min(10, "Too short").required("Message is required"),
  });

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast.success("Message sent successfully! 🚀");
        resetForm();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<section
  id="contacts"
  className="min-h-screen text-black px-4 py-16 md:px-6 md:py-24 border-t border-white/40"
>

      <div className="text-center mb-16 space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Contact Me
        </h2>
        <p className="text-xs md:text-sm text-gray-500">
          Feel free to reach out for collaborations, questions, or
          opportunities.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-4 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="h-10 w-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-black text-lg group-hover:border-black">
                  {item.icon}
                </div>
                <BsArrowUpRight className="text-black text-sm" />
              </div>
              <HyperText className="mt-8 md:mt-12 text-sm font-mono text-black">
                {item.label}
              </HyperText>
            </a>
          ))}
        </div>

        <Formik<ContactFormValues>
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="md:col-span-2 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm p-6 md:p-8 space-y-6 shadow-sm">
              <h3 className="text-base font-semibold">Send me a message:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-transparent border border-gray-300 text-sm p-2.5 rounded-xl text-black placeholder:text-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border border-gray-300 text-sm p-2.5 rounded-xl text-black placeholder:text-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
              </div>

              <div>
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-transparent border border-gray-300 text-sm p-2.5 rounded-xl text-black placeholder:text-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                />
                <ErrorMessage
                  name="subject"
                  component="p"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  className="w-full bg-transparent border border-gray-300 text-sm p-2.5 rounded-xl text-black placeholder:text-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition resize-none"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black w-full py-2.5 rounded-xl text-white text-sm font-medium hover:bg-blue-300 hover:text-black transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <div className="text-sm text-black mt-4">
                or email me directly:
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`mt-2 w-full border border-gray-800 p-2 rounded-xl flex items-center gap-2 text-sm transition-all duration-300 ${
                    copied
                      ? "bg-black text-white"
                      : "hover:bg-blue-300 hover:text-black"
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
    </section>
  );
}
