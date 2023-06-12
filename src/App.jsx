import { useState } from "react";
import "./App.css";
import bank from "./assets/bank.png";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    dob: "",
    photo: "",
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="Login reg">
      <form className="left" data-aos="fade-left" onSubmit={handleCreate}>
        <div className="info">Create A New Bank Account!</div>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="input input-misc"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter name"
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="input input-misc"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter email"
          />
        </div>
        <div className="input-container">
          <label htmlFor="phno">Phone Number</label>
          <input
            id="phno"
            className="input input-misc"
            type="number"
            value={formData.phno}
            onChange={(e) => setFormData({ ...formData, phno: e.target.value })}
            placeholder="Enter phone number"
          />
        </div>
        <div className="input-container">
          <label htmlFor="Date of Birth">Date of Birth</label>
          <input
            id="Date of Birth"
            className="input input-misc"
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            placeholder="Enter Date of Birth"
          />
          <label htmlFor="photo">Upload Photo</label>
          <input
            type="file"
            name="photo"
            id="photo"
            onChange={(e) =>
              setFormData({ ...formData, photo: e.target.value })
            }
          />
        </div>
        <div className="button-container">
          <button className="signup" type="submit">
            Create
          </button>
        </div>
      </form>
      <div className="right" data-aos="zoom-in" data-aos-duration="600">
        <div className="container">
          <img src={bank} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
