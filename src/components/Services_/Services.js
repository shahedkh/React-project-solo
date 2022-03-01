import React, { useState } from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
function Services(props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arrayOfImage, setArrayOfImage] = useState([
    "https://rubiktheme.com/demo/at_junior_demo/themes/at_junior/assets/img/modules/leoslideshow/home5-slide1.jpg",
    "https://rubiktheme.com/demo/at_junior_demo/themes/at_junior/assets/img/modules/leoslideshow/home5-slide2.jpg",
    "https://rubiktheme.com/demo/at_junior_demo/themes/at_junior/assets/img/modules/leoslideshow/home4-slide2.jpg",
  ]);
  //date min____________________________________________________________
  let today = new Date();
  let day = today.getDate() + 1;
  let month = today.getMonth() + 1; //January is 0!
  let year = today.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  today = year + "-" + month + "-" + day;
  const [minDate, setMinDate] = useState(today);

  //______________________________________________________________________

  const nextImage = () => {
    setTimeout(() => {
      let index = (currentIndex + 1) % arrayOfImage.length;
      setCurrentIndex(index);
    }, 3000);
  };
  nextImage();

  const handleInputChange = (e, attr) => {
    setForm({ ...form, [attr]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (props.loggedin != null) {
      localStorage.setItem(
        "Service",
        JSON.stringify({
          name: form.username,
          email: form.email,
          phone: form.phone,
          date: form.date,
          time: form.time,
        })
      );
      alert("Thank you ,we will contact you soon");
    } else {
      navigate("/Registration");
    }
  };

  return (
    <div className="Services-container">
      <div
        className="Slider"
        style={{ backgroundImage: `url(${arrayOfImage[currentIndex]})` }}
      ></div>

      <div className="Serivices-text">
        <h2>You can plan it all yourself but you don't have to</h2>
        Experienced planners and interior designers can help you to translate
        your home improvement dreams into practical reality. For projects large
        or small and for home or for business, services include: Kitchen
        planning Kitchen measuring Wardrobe planning Home furnishing
        consultancy.
      </div>
      <div className="Services-form">
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => handleInputChange(e, "username")}
            placeholder="Username"
            type="text"
            name="username"
            id="username"
          />
          <input
            placeholder="Phone number"
            onChange={(e) => handleInputChange(e, "phone")}
            type="tel"
            name="phone"
            id="phone"
          />
          <input
            placeholder="Email"
            onChange={(e) => handleInputChange(e, "email")}
            type="email"
            name="email"
            id="email"
          />
          <input
            onChange={(e) => handleInputChange(e, "date")}
            type="date"
            name="start"
            min={minDate}
          />
          <input
            type="time"
            name="hours"
            onChange={(e) => handleInputChange(e, "time")}
          />
          <div className="submit">
            <input type="submit" value="Book Now " />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Services;
