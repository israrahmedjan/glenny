import React from 'react'
import Header from '../_components/header'
import Footer from '../_components/footer'

export default function page() {
  return (
    <>
    <Header />

    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <img
              src="/images/about-2.jpeg" // Replace with your image path
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Text */}
          <div className="lg:w-1/2 lg:pl-8">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-4">
              At [Your Company Name], we are dedicated to providing exceptional products and services that enhance our customers' lives. Our mission is to create innovative solutions that not only meet but exceed expectations.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Customer Satisfaction</li>
              <li>Sustainability</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">Join Us</h3>
            <p className="text-lg text-gray-700">
              We believe in the power of community and invite you to join us on this journey. Follow us on our social media channels or subscribe to our newsletter to stay updated with our latest news and offerings!
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}
