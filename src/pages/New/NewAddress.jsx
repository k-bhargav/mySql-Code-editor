import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import "./new.css";
import { deliveryAdress } from "../../db";
const NewAddress = () => {
  //We have different useStates for different areas.
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [locationName, setlocationName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [userName, setuserName] = useState("");
  const id = deliveryAdress.length + 1;

  let error = [];
  //Updating the state as he enters the data
  const getName = (event) => {
    setName(event.target.value);
  };
  const getUserName = (event) => {
    setuserName(event.target.value);
  };
  const getlocationName = (event) => {
    setlocationName(event.target.value);
  };
  const getPinCode = (event) => {
    setPincode(event.target.value);
  };
  const getphoneNo = (event) => {
    //Dont let user enter numbers.
    setPhoneNo(event.target.value);
    !isNaN(event.target.value) && !isNaN(parseFloat(event.target.value))
      ? console.log("Correct number")
      : setPhoneNo("") && console.log("Please enter only numbers");
  };
  const getAdress = (event) => {
    setAddress(event.target.value);
  };
  //Checking validation for different fields.
  const checkValidation = () => {
    if (Name.length <= 6) {
      console.log("FullName should be more than 6 characters.");
      error.push("Fullname error");
    }
    if (userName.length <= 4) {
      console.log("UserName should be more than 4 characters.");
      error.push("Username error");
    }
    if (locationName.length === 0) {
      console.log("FullName should be more than 4 characters.");
      error.push("Username error");
    }
    if (phoneNo.length !== 10) {
      console.log("Mobile number should be of length 10");
      error.push("MobileNumber error");
    }
    if (address.length === 0) {
      console.log("Adress cannot be empty");
      error.push("Adress error");
    }
  };

  const handleSubmit = () => {
    checkValidation();
    if (error.length === 0) {
      const data = {
        id: id,
        avatar: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        Name: Name,
        locationName: locationName,
        phoneNo: phoneNo,
        address: address,
      };
      console.log(data);
      try {
        deliveryAdress.push(data);
        console.log("Successfully ADDED", data);
        console.log("Address Added");
      } catch {
        console.log("error");
      }
      // .then((data) => {
      setName("");
      setlocationName("");
      setPhoneNo("");
      setAddress("");
      setPincode("");
      setuserName("");
      navigate("/address");
    } else {
      console.log("Form submission failed");
      console.log("failed" + error);
      setName("");
      setlocationName("");
      setPhoneNo("");
      setAddress("");
      setPincode("");
      setuserName("");
    }

    error = [];
  };

  return (
    <div className="container">
      <TopBar />
      <Sidebar />
      <div className="new">
        <h1 className="newUserTitle">New Adress</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username (More than 4 characters)</label>
            <input
              type="text"
              placeholder="john"
              onChange={getUserName}
              value={userName}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Full Name* (More than 6 characters)</label>
            <input
              type="text"
              placeholder="John Smith"
              onChange={getName}
              value={Name}
              required
            />
          </div>
          <div className="newUserItem">
            <label>PinCode (Any valid PinCode)</label>
            <input
              type="text"
              placeholder="533003"
              onChange={getPinCode}
              value={pincode}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Title of Adress* (Should not be empty)</label>
            <input
              type="text"
              placeholder="My Home"
              onChange={getlocationName}
              value={locationName}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Phone* (10 numbers without country code)</label>
            <input
              type="text"
              placeholder="8688275981"
              onChange={getphoneNo}
              value={phoneNo}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Address* (Should not be null)</label>
            <input
              type="text"
              placeholder="New York | USA"
              onChange={getAdress}
              value={address}
              required
            />
          </div>

          <button
            className="newUserButton"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Add Adress
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewAddress;
