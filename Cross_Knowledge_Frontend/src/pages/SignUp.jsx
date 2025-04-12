import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "learner", // Default role is "learner"
    bio: "",
    skills: "",
    profilePic: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Sign Up submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md ">
      <h2  className="text-xl mb-4 text-start">SIGN <span className='text-gray-700 text-xl mb-4 font-semibold'>UP</span></h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Role selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="learner">Learner</option>
            <option value="mentor">Mentor</option>
          </select>
        </div>

        {/* Mentor-specific fields */}
        {formData.role === "mentor" && (
          <>
            {/* Bio */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Tell us about yourself"
              />
            </div>

            {/* Skills */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Skills (comma separated)</label>
              <input
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g., JavaScript, React, CSS"
              />
            </div>

            {/* Profile Picture URL */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Profile Picture URL</label>
              <input
                name="profilePic"
                value={formData.profilePic}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Provide a URL to your profile picture"
              />
            </div>
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-sm  text-white py-2 rounded-md "
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
