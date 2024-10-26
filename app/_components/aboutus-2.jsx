export default function TwoColumnSection2() {
    return (
      <div className="flex flex-col lg:flex-row items-center mt-8 p-8">
       
  
        {/* Right Column - Text */}
        <div className="lg:w-1/2 mb-4 lg:mb-0 relative w-full h-150">
          <h2 className="text-4xl font-bold mb-4">Our Amazing Product</h2>
          <p className="text-lg text-gray-700 mb-4">
            This is an amazing product that provides exceptional value and quality. 
            It is designed to meet the needs of our customers and enhance their experience.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            This is an amazing product that provides exceptional value and quality. 
            It is designed to meet the needs of our customers and enhance their experience.
            This is an amazing product that provides exceptional value and quality. 
            It is designed to meet the needs of our customers and enhance their experience.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            This is an amazing product that provides exceptional value and quality. 
            It is designed to meet the needs of our customers and enhance their experience.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700 transition duration-300">
            Learn More
          </button>
        </div>
         {/* Left Column - Image */}
         <div className="lg:w-1/2 lg:pl-8">
          <img
            src="/images/about-2.jpeg" // Replace with your image source
            alt="Large representation"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  }
  