"use client";

import Image from "next/image";
import { useState } from "react";
import GalleryLightbox from "./GalleryLightbox";

export default function Home() {
  const galleryImages = [
    {
      src: "/Aluminium%20Profile%20Trolley%20design%20and%20development1.png",
      alt: "Aluminum Profile Table/Trolley design and development 1",
    },
    {
      src: "/Aluminium%20Profile%20Trolley%20design%20and%20development2.png",
      alt: "Aluminum Profile Table/Trolley design and development 2",
    },
    { src: "/Flat%20Belt%20conveyor.jpg", alt: "Flat Belt conveyor" },
    {
      src: "/Flex%20link%20Belt%20Conveyor.png",
      alt: "Flex link Belt Conveyor",
    },
    {
      src: "/Electrical%20and%20Electronics%20design%2C%20development%20and%20repair2.jpg",
      alt: "Electrical and Electronics design, development and repair 2",
    },
    {
      src: "/Electrical%20and%20Electronics%20design%20development%20and%20repair1.png",
      alt: "Electrical and Electronics design development and repair 1",
    },
    {
      src: "/Indexing%20Assembly%20Machine%20design%20and%20development.png",
      alt: "Indexing Assembly Machine design and development",
    },
    {
      src: "/Indexing%20Assembly%20Machine%20design%20and%20development_.png",
      alt: "Indexing Assembly Machine design and development 2",
    },
  ];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-10 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
          Neha Enterprises
        </h1>
        <p className="text-xl md:text-2xl font-medium">
          Automation Solutions for a Smarter Tomorrow
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-6 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-2">
          Neha Enterprises is a leading provider of automation solutions,
          dedicated to delivering innovative, reliable, and cost-effective services
          to a wide range of industries. With a focus on quality and customer
          satisfaction, we help businesses achieve operational excellence and
          digital transformation.
        </p>
      </section>

      {/* Vision & Mission Section */}
      <section className="max-w-4xl mx-auto py-8 px-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Vision</h3>
          <p className="text-gray-700">
            To be the most trusted partner in automation, empowering industries to
            achieve new heights of efficiency and innovation.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Mission</h3>
          <p className="text-gray-700">
            To deliver world-class automation solutions through technical
            excellence, customer focus, and continuous improvement.
          </p>
        </div>
      </section>

      {/* Expertise Section - two columns, left and right aligned */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>PLC, SCADA, and HMI Programming</li>
            <li>Industrial Automation & Process Control</li>
            <li>Turnkey Project Execution</li>
          </ul>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 md:text-right md:pl-0 md:pr-6">
            <li>Control Panel Design & Manufacturing</li>
            <li>System Integration & Commissioning</li>
          </ul>
        </div>
      </section>

      {/* Products & Services Section */}
      <section className="max-w-5xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
          Products & Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Products</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Custom Control Panels</li>
              <li>Automation Components</li>
              <li>Process Monitoring Systems</li>
              <li>Remote Monitoring Solutions</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Services</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Industrial Automation Solutions</li>
              <li>PLC, SCADA, and HMI Programming</li>
              <li>Control Panel Design & Manufacturing</li>
              <li>Process Automation & Integration</li>
              <li>Turnkey Project Execution</li>
              <li>Maintenance & Support Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap gap-4 text-lg text-gray-700">
          <span className="bg-blue-100 px-4 py-2 rounded-full">Automotive</span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">
            Pharmaceutical
          </span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">
            Food & Beverage
          </span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">Textile</span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">Packaging</span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">Chemical</span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">
            Other Manufacturing
          </span>
        </div>
      </section>

      {/* Gallery Section - categorized by file names */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Project Gallery
        </h2>
        {/* Aluminum Profile Table/Trolley design and development */}
        <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-8">
          Aluminum Profile Table/Trolley design and development
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          <div>
            <Image
              src="/Aluminium%20Profile%20Trolley%20design%20and%20development1.png"
              alt="Aluminum Profile Table/Trolley design and development 1"
              width={400}
              height={400}
              className="rounded-xl shadow object-contain bg-white w-full h-56 sm:h-72 md:h-80 cursor-pointer"
              onClick={() => {
                setLightboxIndex(0);
                setLightboxOpen(true);
              }}
            />
          </div>
          <div>
            <Image
              src="/Aluminium%20Profile%20Trolley%20design%20and%20development2.png"
              alt="Aluminum Profile Table/Trolley design and development 2"
              width={400}
              height={400}
              className="rounded-xl shadow object-contain bg-white w-full h-56 sm:h-72 md:h-80 cursor-pointer"
              onClick={() => {
                setLightboxIndex(1);
                setLightboxOpen(true);
              }}
            />
          </div>
        </div>
        {/* Conveyor Belt/Roller design and development */}
        <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-8">
          Conveyor Belt/Roller design and development
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          <div>
            <Image
              src="/Flat%20Belt%20conveyor.jpg"
              alt="Flat Belt conveyor"
              width={400}
              height={400}
              className="rounded-xl shadow object-contain bg-white w-full h-56 sm:h-72 md:h-80 cursor-pointer"
              onClick={() => {
                setLightboxIndex(2);
                setLightboxOpen(true);
              }}
            />
          </div>
          <div>
            <Image
              src="/Flex%20link%20Belt%20Conveyor.png"
              alt="Flex link Belt Conveyor"
              width={400}
              height={400}
              className="rounded-xl shadow object-contain bg-white w-full h-56 sm:h-72 md:h-80 cursor-pointer"
              onClick={() => {
                setLightboxIndex(3);
                setLightboxOpen(true);
              }}
            />
          </div>
        </div>
        {/* Electrical and Electronics Design, Development and Repair */}
        <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-8">
          Electrical and Electronics Design, Development and Repair
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          <div>
            <Image
              src="/Electrical%20and%20Electronics%20design%2C%20development%20and%20repair2.jpg"
              alt="Electrical and Electronics design, development and repair 2"
              width={400}
              height={400}
              className="rounded-xl shadow object-contain bg-white w-full h-56 sm:h-72 md:h-80 cursor-pointer"
              onClick={() => {
                setLightboxIndex(4);
                setLightboxOpen(true);
              }}
            />
          </div>
          <div>
            <Image
              src="/Electrical%20and%20Electronics%20design%20development%20and%20repair1.png"
              alt="Electrical and Electronics design development and repair 1"
              width={400}
              height={400}
              className="rounded-xl shadow object-contain bg-white w-full h-56 sm:h-72 md:h-80 cursor-pointer"
              onClick={() => {
                setLightboxIndex(5);
                setLightboxOpen(true);
              }}
            />
          </div>
        </div>
        {/* Indexing Assembly Machine Design and Development */}
        <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-8">
          Indexing Assembly Machine Design and Development
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          <div>
            <Image
              src="/Indexing%20Assembly%20Machine%20design%20and%20development.png"
              alt="Indexing Assembly Machine design and development"
              width={400}
              height={400}
              className="rounded-xl shadow object-contain bg-white w-full h-56 sm:h-72 md:h-80 cursor-pointer"
              onClick={() => {
                setLightboxIndex(6);
                setLightboxOpen(true);
              }}
            />
          </div>
          <div>
            <Image
              src="/Indexing%20Assembly%20Machine%20design%20and%20development_.png"
              alt="Indexing Assembly Machine design and development 2"
              width={400}
              height={400}
              className="rounded-xl shadow object-contain bg-white w-full h-56 sm:h-72 md:h-80 cursor-pointer"
              onClick={() => {
                setLightboxIndex(7);
                setLightboxOpen(true);
              }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section (if available) */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            What Our Clients Say
          </h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-blue-700 pl-4 italic text-gray-800">
              &quot;Neha Enterprises delivered our automation project on time and
              exceeded our expectations. Highly recommended!&quot;
              <div className="mt-2 text-blue-900 font-semibold">
                - Manufacturing Client
              </div>
            </blockquote>
            <blockquote className="border-l-4 border-blue-700 pl-4 italic text-gray-800">
              &quot;Professional team with deep technical expertise. Our
              production efficiency improved significantly.&quot;
              <div className="mt-2 text-blue-900 font-semibold">
                - Food &amp; Beverage Industry
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-2xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
        <form className="bg-blue-50 p-8 rounded-xl shadow space-y-6">
          <div>
            <label className="block text-blue-900 font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-blue-900 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 rounded border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-blue-900 font-semibold mb-1">
              Message
            </label>
            <textarea
              className="w-full p-2 rounded border border-gray-300"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center mt-auto">
        <div className="mb-2">
          &copy; {new Date().getFullYear()} Neha Enterprises. All rights
          reserved.
        </div>
        <div className="mb-2">
          Contact:{" "}
          <span className="font-semibold">DC Choudhari</span> |
          <span className="font-semibold"> (91) 982 2791 544</span> |
          <span className="font-semibold"> nehaenterprises157@gmail.com</span>
          <br />
          <span className="font-semibold">
            Plot No. B14/10/09, Near New Cosmo Films, Colgate Chowk, MIDC Waluj,
            Ch. Sambhajinagar, (M.S) 431136, India
          </span>
        </div>
        <a
          href="/Neha%20Enterprises%20Company%20Profile%20OK.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-200"
        >
          Download Company Profile (PDF)
        </a>
      </footer>

      {/* Gallery Lightbox */}
      {lightboxOpen && (
        <GalleryLightbox
          open={lightboxOpen}
          index={lightboxIndex}
          images={galleryImages}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
