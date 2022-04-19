import React from "react";
import "../../components/Modal/modal.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    city: "",
    age: "",
    password: "",
    confirmPassword: "",
    matches: [],
  });

  const handleChange = e => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log("value" + value, "name" + name);

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="profileBackground">
      <div className="signUpContainer editProfileModal">
        <Link to="/profile">
          <div className="closeIcon text-white">ⓧ</div>
        </Link>
        <h2 className="text-white">Edit Profile</h2>
        <div className="formWrapper">
          <form className="signUpForm">
            <div className="block">
              <label>
                First Name
                <input
                  className="rounded-input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required={true}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Last Name
                <input
                  className="rounded-input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required={true}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
              <label>
                {" "}
                E-Mail
                <input
                  className="rounded-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  required={true}
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                City
                <input
                  className="rounded-input"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  required={true}
                  value={formData.city}
                  onChange={handleChange}
                />
              </label>
              <label>
                Age
                <input
                  className="rounded-input"
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Age"
                  required={true}
                  value={formData.age}
                  onChange={handleChange}
                />
              </label>
              <label className="radio-inline">
                Gender
                <label>
                  <input
                    className="rounded-input"
                    type="radio"
                    id="male"
                    name="gender"
                    placeholder="Male"
                  />
                  Male
                </label>
                <label>
                  <input
                    className="rounded-input"
                    type="radio"
                    id="female"
                    name="gender"
                    placeholder="Female"
                  />
                  Female
                </label>
                <label>
                  <input
                    className="rounded-input"
                    type="radio"
                    id="other"
                    name="gender"
                    placeholder="Other"
                  />
                  Other
                </label>
              </label>
              <textarea
                className="fullWidth rounded-input"
                type="textarea"
                id="description"
                name="description"
                placeholder="Tell us about yourself!"
                required={true}
                value={formData.description}
                onChange={handleChange}
              />
              <label>
                Upload a Photo
                <input
                  className="rounded-input"
                  type="url"
                  name="url"
                  id="url"
                  onChange={handleChange}
                  value={formData.url}
                  required={true}
                />
                <div className="photo-container">
                  <img src={formData.url} alt="profile pic" />
                </div>
              </label>
            </div>
          </form>
        </div>
        <Link to="/Profile">
          <button className="secondary-btn">SAVE</button>
        </Link>
      </div>
    </div>
  );
};

export default EditProfile;