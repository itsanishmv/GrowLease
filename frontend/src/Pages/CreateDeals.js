import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Alert } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Storage, Db } from "../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

function CreateDeals() {
  const [formaData, setData] = useState();
  const [logoImage, setLogoImage] = useState();
  const [companyName, setCompanyName] = useState();
  const [Amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [graphs, setGraphs] = useState();
  const [perfHistory, setPerfHistory] = useState();
  const [preTax, setPreTax] = useState();
  const [postTax, setPostTax] = useState();
  const [tenure, setTenure] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  function handleUpload() {
    if (logoImage == null) {
      return;
    }
    const colRef = collection(Db, "Deals");
    const ImageRef = ref(Storage, `images/${logoImage.name}`);
    uploadBytes(ImageRef, logoImage).then(() => {
      getDownloadURL(ImageRef).then((url) => {
        addDoc(colRef, {
          logoImage: url,
          companyName,
          Amount: `₹${Amount}`,
          description,
          perfHistory,
          preTax,
          postTax,
          tenure,
          timestamp: serverTimestamp(),
        })
          .then(() => {
            setSuccess(true);

            navigate("/Deals");
          })
          .catch(() => {
            setError(true);
          });
      });
    });
  }
  return (
    <div className="bg-[#F5F6F8] p-10 pt-24  ">
      {success && (
        <div className="absolute w-[500px]">
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert>
        </div>
      )}
      {error && (
        <Alert severity="error">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      )}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium"> New Deal</h2>
        <div className="flex items-center space-x-4 box-border ">
          <button className="bg-[#F7685B] text-[white] h-10 w-40  box-border rounded-md text-sm font-medium w-22">
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className="bg-[#109CF1] text-[white] h-10 w-40 box-border rounded-md text-sm font-medium w-22"
          >
            Make it LIVE
          </button>
        </div>
      </div>

      <div className="flex h-[500px] mt-10 flex-col  overflow-scroll space-y-5 no-scrollbar">
        <div className="space-y-7">
          <h2 className="text-lg">Upload logo of your company</h2>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component="label"
            onChange={(e) => setLogoImage(e.target.files[0])}
          >
            Click to upload
            <input
              className="p-6"
              hidden
              accept="image/*"
              multiple
              type="file"
            />
          </Button>
        </div>

        <div className="flex justify-between gap-10 ">
          <div className=" w-[50%] h-20 space-y-2">
            <h4>company name </h4>
            <input
              onChange={(e) => setCompanyName(e.target.value)}
              className="h-12 w-[100%] bg-[#EEEFF0] rounded-md p-2"
              type="text"
            />
          </div>
          <div className=" w-[50%] h-20 space-y-2">
            <h4>Amaout to be raised</h4>
            <input
              onChange={(e) => setAmount(e.target.value)}
              className="h-12 w-[100%] bg-[#EEEFF0] rounded-md p-2"
              type="text"
            />
          </div>
        </div>
        <div className="w-[100%] space-y-2">
          <h4>Company description</h4>
          <input
            onChange={(e) => setDescription(e.target.value)}
            className="w-[100%] h-16 bg-[#EEEFF0] rounded-md p-2 "
            type="text"
          />
        </div>

        <div className="space-y-7">
          <h4>Upload graphs about performace history</h4>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component="label"
          >
            Click to upload
            <input
              className="p-6"
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => setGraphs(e.target.files[0])}
            />
          </Button>
        </div>
        <div className="space-y-2">
          <h4>Any other information about performace history</h4>
          <input
            onChange={(e) => setPerfHistory(e.target.value)}
            className="w-[100%] h-16 bg-[#EEEFF0] rounded-md p-2"
            type="text"
          />
        </div>
        <div className="flex justify-between gap-10 ">
          <div className=" w-[50%] h-20">
            <h4>Pre-tax </h4>
            <input
              onChange={(e) => setPreTax(e.target.value)}
              className="h-12 w-[100%] bg-[#EEEFF0] rounded-md p-2"
              type="text"
            />
          </div>
          <div className=" w-[50%] h-20">
            <h4>Post-tax</h4>
            <input
              onChange={(e) => setPostTax(e.target.value)}
              className="h-12 w-[100%] bg-[#EEEFF0] rounded-md p-2"
              type="text"
            />
          </div>
        </div>
        <div>
          <h4>Tenure</h4>
          <input
            onChange={(e) => setTenure(e.target.value)}
            className="h-12 w-[100%] bg-[#EEEFF0] rounded-md p-2"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateDeals;
