import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import "./new.css";
import { upi } from "../../db";
const NewUPI = () => {
  const navigate = useNavigate();
  let error = [];
  const id = upi.length + 1;
  const [Name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [type, setType] = useState("");
  const [bank, setBank] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };
  const getCardNo = (event) => {
    setCardNo(event.target.value);
  };
  const getphoneNo = (event) => {
    setPhoneNo(event.target.value);
    !isNaN(event.target.value) && !isNaN(parseFloat(event.target.value))
      ? console.log("Correct number")
      : setPhoneNo("");
  };
  const getType = (event) => {
    setType(event.target.value);
  };
  const getBank = (event) => {
    setBank(event.target.value);
  };

  const checkValidation = () => {
    if (Name.length <= 6) {
      console.log("FullName should be more than 6 characters.");
      error.push("Fullname error");
    }
    if (type.length === 0) {
      console.log("Type should not be null");
      error.push("bank type error");
    }
    if (phoneNo.length !== 10) {
      console.log("Mobile number should be of length 10");
      error.push("MobileNumber error");
    }
    if (bank.length === 0) {
      console.log("Bank cannot be null");
      error.push("bank error");
    }
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(cardNo)
    ) {
      console.log("Enter valid UPI Id");
      error.push("UPI Id error");
    }
  };
  const handleSubmit = () => {
    checkValidation();
    if (error.length === 0) {
      const data = {
        id: id,
        avatar:
          "https://play-lh.googleusercontent.com/k7yz57K2OxhNrPNKF2U18Zcv9rodOu7CfWh47U15FFUN8-_B0hQfXsM-BaLG0gOtvw=s180-rw",
        name: Name,
        type: type,
        phoneNo: phoneNo,
        cardNo: cardNo,
      };
      console.log(data);
      try {
        console.log("Successfully ADDED", data);
        console.log("Address Added");
      } catch {
        console.log("error");
      }
      setName("");
      setCardNo("");
      setPhoneNo("");
      setType("");
      setBank("");
      navigate("/upi");
    } else {
      console.log("Form submission failed");
      console.log("failed" + error);
      setName("");
      setCardNo("");
      setPhoneNo("");
      setType("");
      setBank("");
    }

    error = [];
  };

  return (
    <div className="container">
      <Sidebar />
      <TopBar />
      <div className="new">
        <h1 className="newUserTitle">New UPI</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>UPI Type* (Not empty)</label>
            <input
              type="text"
              placeholder="PayTm"
              onChange={getType}
              value={type}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Name on the UPI* (More than 6 characters)</label>
            <input
              type="text"
              placeholder="John Smith"
              onChange={getName}
              value={Name}
              required
            />
          </div>
          <div className="newUserItem">
            <label>UPI ID* (Valid email)</label>
            <input
              type="email"
              placeholder="georgey75@paytm"
              onChange={getCardNo}
              value={cardNo}
              required
            />
          </div>

          <div className="newUserItem">
            <label>Bank linked (Not empty)</label>
            <input
              type="text"
              placeholder="HDFC"
              onChange={getBank}
              value={bank}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Phone Number* (10 digits without country code)</label>
            <input
              type="text"
              placeholder="8688275981"
              onChange={getphoneNo}
              value={phoneNo}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <button
            className="newUserButton"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUPI;
