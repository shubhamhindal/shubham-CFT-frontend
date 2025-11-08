import { useState } from "react";
import Sidebar from "../components/Sidebar"; // adjust the path based on your folder structure

const Feedback = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    email: "",
    code: "+91",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email)) newErrors.email = "Please enter a valid email";

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phonePattern.test(formData.phone)) newErrors.phone = "Please enter a valid number";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      console.log("✅ Feedback submitted:", formData);
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        country: "",
        email: "",
        code: "+91",
        phone: "",
      });
      setErrors({});
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f1f7fc]">
      <Sidebar />
      <div className="flex-1 flex justify-center items-start px-8 py-12 overflow-auto">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Submit Your Feedback
          </h1>

          {submitted && (
            <p className="text-green-600 text-center mb-4 font-medium">
              ✅ Thank you! Your feedback has been submitted.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Shubh"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Hindal"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full address"
                rows="3"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400"
              ></textarea>
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="India"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400"
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@sample.com"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="w-20 mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="1234567890"
                  className="flex-1 mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-semibold py-2 rounded-lg transition-all duration-200 shadow-md"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
