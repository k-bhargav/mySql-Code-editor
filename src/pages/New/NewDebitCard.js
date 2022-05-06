import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import "./new.css";
import { debitCards } from "../../db";

const NewDebitCard = () => {
  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [cardNo, setcardNo] = useState("");
  const [expiry, setExpiry] = useState("");
  const [type, setType] = useState("");
  const [cvv, setCvv] = useState("");
  let error = [];
  const id = debitCards.length + 1;

  const getName = (event) => {
    setName(event.target.value);
  };
  const getcardNo = (event) => {
    setcardNo(event.target.value);
    !isNaN(event.target.value) && !isNaN(parseFloat(event.target.value))
      ? console.log("Correct number")
      : setcardNo("");
  };
  const getExpiry = (event) => {
    setExpiry(event.target.value);
  };
  const getCvv = (event) => {
    setCvv(event.target.value);
  };
  const getType = (event) => {
    setType(event.target.value);
  };
  //Chekhing validation
  const checkValidation = () => {
    if (Name.length <= 6) {
      console.log("FullName should be more than 6 characters.");
      error.push("Fullname error");
    }
    if (type.length === 0) {
      console.log("Type should not be null");
      error.push("bank type error");
    }
    if (cardNo.length !== 10) {
      console.log("Card number should be of length 10");
      error.push("Card Number error");
    }
    if (cvv.length !== 3) {
      console.log("Cvv should be 3 numbers");
      error.push("Cvv error");
    }
  };
  const handleSubmit = () => {
    checkValidation();
    if (error.length === 0) {
      const data = {
        id: id,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-tVpgHO9nYzyW8JaPyBvdbfIJGElM-9f-A&usqp=CAU",
        name: Name,
        expiry: expiry,
        cardNo: cardNo,
        type: type,
      };
      console.log(data);
      try {
        console.log("Successfully ADDED", data);
        console.log("Address Added");
      } catch (error) {
        console.log(error);
      }
      setName("");
      setcardNo("");
      setExpiry("");
      setType("");
      setCvv("");
      navigate("/debitCard");
    } else {
      console.log("Form submission failed");
      console.log("failed" + error);
      setName("");
      setcardNo("");
      setExpiry("");
      setType("");
      setCvv("");
    }

    error = [];
  };

  return (
    <div className="container">
      <Sidebar />
      <TopBar />
      <div className="new">
        <h1 className="newUserTitle">New Card</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Card Type* (Not empty)</label>
            <input
              type="text"
              placeholder="Axis Bank"
              onChange={getType}
              value={type}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Name on the Card* (More than 6 characters)</label>
            <input
              type="text"
              placeholder="John Smith"
              onChange={getName}
              value={Name}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Expiry Date*</label>
            <input
              type="month"
              placeholder="10/2022"
              onChange={getExpiry}
              value={expiry}
              required
            />
          </div>

          <div className="newUserItem">
            <label>CVV (Must be 3 numbers)</label>
            <input
              type="number"
              placeholder="498 "
              onChange={getCvv}
              value={cvv}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Card Number* (10 Numbers)</label>
            <input
              type="text"
              placeholder="1234567890"
              onChange={getcardNo}
              value={cardNo}
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

export default NewDebitCard;
