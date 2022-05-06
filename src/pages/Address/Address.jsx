import React from "react";
import "./address.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deliveryAdress } from "../../db";
import Sidebar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

const Address = () => {
  //Since delivery adresses is an array, we initiate the array.
  const [data, setData] = useState(deliveryAdress);

  //This function handles delete on clicking taking the id as param.
  const handleDelete = (id) => {
    //We delete this particular id.
    console.log(id);
    let afterDelete = data.filter((item) => item.id !== id);

    console.log("Adress Deleted");
    //Set the array after deelte.
    setData(afterDelete);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "Name",
      headerName: "Name",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.Name}
          </div>
        );
      },
    },
    {
      field: "phoneNo",
      headerName: "Phone Number",
      width: 180,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
    {
      field: "locationName",
      headerName: "Location Name",
      width: 250,
    },
    //We basically render some icons and buttons here.
    {
      field: "action",
      headerName: "Action",
      width: 280,
      renderCell: (params) => {
        return (
          <>
            <button
              className="userListEdit"
              onClick={() => handleDelete(params.row.id)}
              style={{ backgroundColor: "rgb(235, 83, 83)" }}
            >
              DELETE from Adress where id = {params.row.id}
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="container">
      {/* Rendering the side bar having all components */}
      <TopBar />
      <Sidebar />
      <div className="adressList">
        <div className="userTitleContainer">
          <h1 className="userTitle">Delivery Adresses</h1>
          <Link to="/newAdress">
            <button className="userAddButton">INSERT into Address</button>
          </Link>
        </div>
        {/* This is the data we are gonna render using Datagrid from materail ui */}
        <DataGrid
          GridLines="None"
          rowHeight={80}
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            boxShadow: 20,
            borderBottom: "none",
            borderRadius: 7,
          }}
        />
      </div>
    </div>
  );
};

export default Address;
