import React, { useState, useEffect, useMemo } from "react";

import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { Storage, Db } from "../firebase/firebaseConfig";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function DealsList() {
  const [getData, setGetData] = useState([]);
  function fetchingData() {
    const getCol = query(collection(Db, "Deals"), orderBy("timestamp", "desc"));
    getDocs(getCol).then((snapshot) => {
      let Data = [];
      snapshot.docs.forEach((doc) => {
        Data.push({ ...doc.data(), id: doc.id });
      });

      setGetData(Data);
    });
  }
  useEffect(() => {
    fetchingData();
  }, []);

  console.log(getData);
  function handleclick(e) {
    console.log(e);
  }

  return (
    <div className="h-[500px] w-[100%] mt-10 bg-[white] whitespace-nowrap">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name of company</TableCell>
              <TableCell align="center">Company description</TableCell>
              <TableCell align="center">Amount to be raised</TableCell>
              <TableCell align="center">Performance history</TableCell>
              <TableCell align="center">Pre-tax</TableCell>
              <TableCell align="center">Post-tax</TableCell>
              <TableCell align="center">Tenure</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getData.map((row) => (
              <TableRow
                hover={true}
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div className="flex items-center space-x-2">
                    <img className="h-10 w-10" src={row.logoImage} alt="" />
                    <h4> {row.companyName}</h4>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <span className=" ">
                    {row.description.length > 10
                      ? row.description?.slice(0, 10) + "..."
                      : row.description}
                  </span>
                </TableCell>
                <TableCell align="center">{row.Amount}</TableCell>
                <TableCell align="center">{row.perfHistory}</TableCell>
                <TableCell align="center">{row.preTax}</TableCell>
                <TableCell align="center">{row.postTax}</TableCell>
                <TableCell align="center">{row.tenure}</TableCell>
                <TableCell align="center">action</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DealsList;
