import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    document.title = "Movixer | Contact"
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
    return (
        <div className="min-h-screen bg-gray-900 text-white py-16 px-6 max-w-4xl mx-auto rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                    <p className="flex items-center gap-2"><FaEnvelope className="text-red-500" /> support@movixer.com</p>
                    <p className="flex items-center gap-2"><FaPhoneAlt className="text-red-500" /> +1 (234) 567-890</p>
                    <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-500" /> 123 Movie Street, Filmtown, USA</p>
                </div>
                <form className="flex-1 space-y-4" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" className="w-full p-3 bg-gray-700 rounded-md" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" className="w-full p-3 bg-gray-700 rounded-md" onChange={handleChange} required />
                    <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 bg-gray-700 rounded-md" onChange={handleChange} required></textarea>
                    <button type="submit" className="w-full p-3 bg-red-500 hover:bg-red-600 rounded-md font-semibold">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact