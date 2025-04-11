import React, { useState } from 'react';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    id: 2,
    name: "Raghunath Prasad",
    email: "raghunath.pottery@artic.in",
    role: "mentor", // Change to "learner" to test the learner case
    bio: "Traditional potter from Khurja known for his intricate clay work and eco-friendly pottery methods, keeping alive the soil-based art of his ancestors.",
    skills: ["Terracotta Craft", "Wheel Pottery", "Clay Sculpting"],
    profilePic: "https://randomuser.me/api/portraits/men/60.jpg"
  });

  const [isEdit, setIsEdit] = useState(false);

  // Handle change for both basic and extra fields
  const handleChange = (e, field, nestedField) => {
    if (nestedField) {
      setUserData(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          [nestedField]: e.target.value,
        },
      }));
    } else {
      setUserData(prev => ({ ...prev, [field]: e.target.value }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-8">
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 text-sm">

        {/* Profile Picture + Name */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={userData.profilePic}
            alt="profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-primary"
          />
          {isEdit ? (
            <input
              className="text-center text-xl font-semibold bg-gray-50 rounded p-1 border border-gray-300 w-full max-w-[300px]"
              type="text"
              onChange={(e) => handleChange(e, 'name')}
              value={userData.name}
            />
          ) : (
            <p className="text-2xl font-semibold text-gray-800">{userData.name}</p>
          )}
        </div>

        <hr className="my-2 border-gray-300" />

        {/* Contact Info */}
        <div>
          <p className="text-neutral-500 font-semibold mb-2 underline">Contact Information</p>

          <div className="grid grid-cols-[100px_1fr] gap-y-3 items-center">
            <p>Email:</p>
            {isEdit ? (
              <input
                className="bg-gray-50 border p-2 rounded"
                type="email"
                onChange={(e) => handleChange(e, 'email')}
                value={userData.email}
              />
            ) : (
              <p>{userData.email}</p>
            )}
          </div>
        </div>

        <hr className="my-2 border-gray-300" />

        {/* Show Additional Fields for Mentor Only */}
        {userData.role === "mentor" && (
          <>
            <div>
              <p className="text-neutral-500 font-semibold mb-2 underline">More Details</p>
              <div className="grid grid-cols-[100px_1fr] gap-y-3 items-center">
                <p>Bio:</p>
                {isEdit ? (
                  <textarea
                    className="bg-gray-50 border p-2 rounded"
                    onChange={(e) => handleChange(e, 'bio')}
                    value={userData.bio}
                  />
                ) : (
                  <p>{userData.bio}</p>
                )}

                <p>Skills:</p>
                {isEdit ? (
                  <input
                    className="bg-gray-50 border p-2 rounded"
                    onChange={(e) => handleChange(e, 'skills')}
                    value={userData.skills.join(", ")} // Display skills as a comma-separated list
                  />
                ) : (
                  <p>{userData.skills.join(", ")}</p>
                )}
              </div>
            </div>
          </>
        )}

        {/* Edit / Save Button */}
        <div className="mt-4 flex justify-end">
          <button
            className="bg-indigo-600 text-white py-2 px-6 rounded"
            onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? "Save Information" : "Edit"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
