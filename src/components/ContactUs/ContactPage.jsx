'use client';
import React from "react";
import { Phone, Email, LocationOn, AccessTime } from "@mui/icons-material";
import CustomButton from "@/commons/CustomButton";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row p-6 md:p-12 gap-8 font-sans">
      <div className="flex-1 bg-white p-6 md:p-8 rounded-md shadow">
        <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
        <p className="text-sm text-gray-600 mb-6">
          We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c1a78e]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address*</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c1a78e]"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c1a78e]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c1a78e]"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Message*</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#c1a78e]"
              required
            ></textarea>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" required />
            <label className="text-sm text-gray-700">
              I agree to the Privacy Policy and consent to having my data processed.
            </label>
          </div>
          <CustomButton text="Send Message" type="submit" />
        </form>
      </div>

      {/* Right Side - Contact Info */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-md shadow">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="flex items-start gap-3 mb-3">
            <Phone className="text-[#c1a78e]" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-gray-600">(607) 729-2531</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <Email className="text-[#c1a78e]" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-600">inquiry@madeonscratch.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <AccessTime className="text-[#c1a78e]" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-sm text-gray-600">Monday - Friday: 9am - 6pm</p>
              <p className="text-sm text-gray-600">Saturday: 10am - 4pm</p>
              <p className="text-sm text-gray-600">Sunday: Closed</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <LocationOn className="text-[#c1a78e]" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-gray-600">42 Mapleway Street<br />Boston, MA 02136</p>
            </div>
          </div>
        </div>
        <div className="rounded-md overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.1372970140237!2d-71.13079408454261!3d42.258402179193245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e38125072b7513%3A0x8b1af388bd6c9c37!2s42%20Maple%20St%2C%20Boston%2C%20MA%2002136%2C%20USA!5e0!3m2!1sen!2s!4v1620934626321!5m2!1sen!2s"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
