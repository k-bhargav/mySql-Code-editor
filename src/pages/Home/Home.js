import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import "./home.css";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { deliveryAdress } from "../../db";

const Home = () => {
  //Since delivery adresses is an array, we initiate the array.
  const [data, setData] = useState(deliveryAdress);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 1,
    },
    {
      field: "Name",
      headerName: "Name",
      width: 125,
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
      width: 125,
    },
    {
      field: "address",
      headerName: "Address",
      width: 125,
    },
    {
      field: "locationName",
      headerName: "Location Name",
      width: 125,
    },
  ];

  return (
    <div className="container">
      <TopBar />
      <SideBar />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Write your query here</h1>
          <h1 className="output">Output</h1>
        </div>
        <div className="userContainer">
          <textarea className="userShow" rows="10" cols="30">
            SELECT Address Table from all_tables
          </textarea>
          <div className="userUpdate">
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
        <div className="userUpdateRight">
          <button className="userUpdateButton">Execute query</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
