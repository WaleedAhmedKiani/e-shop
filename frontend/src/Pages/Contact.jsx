import React, { useState } from 'react'
import Title from '../Components/Title'
import Newsletter from '../Components/Newsletter';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <> <div className='text-center text-2xl pt-20 border-t'>
    <Title text1={'Contact'} text2={'Us'}/>
  </div>

  <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-[-120px]">
        {/* <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2> */}
        <p className="text-center text-gray-600 mb-6">
          Have any questions? Feel free to reach out!
        </p>

        {submitted ? (
          <div className="text-center text-green-600 font-semibold">
            ✅ Thank you! Your message has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

    
    </div>
    <Newsletter/>
  
  </>
   

    
  )
}

export default Contact