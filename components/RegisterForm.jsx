"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { UploadButton } from "../app/utils/uploadthing";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MdCloudDownload } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import CameraCapture from "./CameraCapture";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import DatePicker from "./DatePicker";

const RegisterForm = ({
  loading,
  setLoading,
  update,
  setUpdate,
  navigationDataChange,
}) => {
  const [userData, setUserData] = useState({
    name: "",
    orNumber: "",
    email: "",
    password: "",
    address: "",
    contact: "",
    category: "",
    dateStarted: "",
    certificateUrl: "",
    gender: "",
  });

  const [date, setDate] = useState("");

  const convertedDate = new Date(date);

  // Extract the month, day, and year
  const month = String(convertedDate.getMonth() + 1).padStart(2, "0");
  const day = String(convertedDate.getDate()).padStart(2, "0");
  const year = String(convertedDate.getFullYear()).slice(-2);

  // Format the date as MM-DD-YY
  const formattedDate = `${month}-${day}-${year}`;

  const handleAddressChange = (value) => {
    setUserData({ ...userData, address: value });
  };

  const handleGenderChange = (value) => {
    setUserData({ ...userData, gender: value });
  };

  const handleCategoryChange = (value) => {
    setUserData({ ...userData, category: value });
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    const input = document.getElementById("certificate");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create PDF with A4 size and portrait orientation
      const pdf = new jsPDF("portrait", "pt", "a4");

      // A4 size dimensions in points
      const pdfWidth = 595.28;
      const pdfHeight = 1123;

      // Canvas width and height
      const canvasWidth = 794;
      const canvasHeight = canvas.height;

      // Calculate the ratio of the canvas to A4 size
      const ratio = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);

      // Calculate image dimensions for PDF
      const imgWidth = canvasWidth * ratio;
      const imgHeight = canvasHeight * ratio;

      // Add image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // Save the PDF with the name of the user
      pdf.save(`${userData.name}.pdf`);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/register", { ...userData, dateStarted: formattedDate })
      .then(() => {
        toast("Trainee Has Been Added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setLoading(false);
        setUserData({
          name: "",
          email: "",
          password: "",
          address: "",
          contact: "",
        });

        navigationDataChange("list");
      })
      .catch((error) => {
        alert(error.message);
        setUserData({
          name: "",
          email: "",
          password: "",
          address: "",
          contact: "",
        });

        setLoading(false);
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" h-full w-full rounded p-5 grid grid-cols-2  gap-6 "
        action=""
      >
        <h2 className="text-[#100f0f] text-2xl col-span-2">Enroll Trainee</h2>

        <div className="flex flex-col gap-2">
          <Label htmlFor="orNumber">Or Number</Label>

          <Input
            value={userData.orNumber}
            onChange={(e) =>
              setUserData({ ...userData, orNumber: e.target.value })
            }
            placeholder="Enter Or Number"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            placeholder="Enter Fullname"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder="Enter Email"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="password">Password</Label>

            {!update && (
              <Input
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                placeholder="Enter Password"
                type="password"
              />
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="location">Location</Label>

            <Select onValueChange={handleAddressChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALFONSO">ALFONSO</SelectItem>
                <SelectItem value="AMADEO">AMADEO</SelectItem>
                <SelectItem value="BACOOR CITY">BACOOR CITY</SelectItem>
                <SelectItem value="CARMONA">CARMONA</SelectItem>
                <SelectItem value="CAVITE CITY">CAVITE CITY</SelectItem>
                <SelectItem value="CITY OF DASMARIÑAS">
                  CITY OF DASMARIÑAS
                </SelectItem>
                <SelectItem value="GEN. MARIANO ALVAREZ">
                  GEN. MARIANO ALVAREZ
                </SelectItem>
                <SelectItem value="GENERAL EMILIO AGUINALDO">
                  GENERAL EMILIO AGUINALDO
                </SelectItem>
                <SelectItem value="GENERAL TRIAS">GENERAL TRIAS</SelectItem>
                <SelectItem value="IMUS CITY">IMUS CITY</SelectItem>
                <SelectItem value="INDANG">INDANG</SelectItem>
                <SelectItem value="KAWIT">KAWIT</SelectItem>
                <SelectItem value="MAGALLANES">MAGALLANES</SelectItem>
                <SelectItem value="MARAGONDON">MARAGONDON</SelectItem>
                <SelectItem value="MENDEZ (MENDEZ-NUÑEZ)">
                  MENDEZ (MENDEZ-NUÑEZ)
                </SelectItem>
                <SelectItem value="NAIC ">NAIC</SelectItem>
                <SelectItem value="NOVELETA">NOVELETA</SelectItem>
                <SelectItem value="ROSARIO ">ROSARIO </SelectItem>
                <SelectItem value="SILANG">SILANG</SelectItem>
                <SelectItem value="TAGAYTAY CITY">TAGAYTAY CITY</SelectItem>
                <SelectItem value="TANZA ">TANZA </SelectItem>
                <SelectItem value="TERNATE">TERNATE</SelectItem>
                <SelectItem value="TRECE MARTIRES CITY (CAPITAL)">
                  TRECE MARTIRES CITY (CAPITAL)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="dateStarted">Date Started</Label>
            <DatePicker date={date} setDate={setDate} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input
              value={userData.contact}
              onChange={(e) =>
                setUserData({ ...userData, contact: e.target.value })
              }
              placeholder="Enter Contact Number"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="gender">Gender</Label>
            <Select onValueChange={handleGenderChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="category">Category</Label>

            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="occupational">Occupational</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2 w-full ">
            <Label htmlFor="picture">Picture</Label>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Take A Picture</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <CameraCapture name={userData?.name} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="uploadProfile">Upload Profile Picture</Label>
          <Button
            className="border hover:bg-red-600 flex items-center justify-center h-24 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            asChild
          >
            <UploadButton
              endpoint="imageUploader"
              appearance={{
                button: {
                  padding: "8px",
                  color: "black",
                },
              }}
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res[0].url);
                setUserData({
                  ...userData,
                  profilePictureUrl: res[0].url,
                });
                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </Button>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <Button asChild>
            <button
              disabled={
                !userData.orNumber ||
                !userData.name ||
                !userData.email ||
                !userData.password ||
                !userData.address ||
                !userData.contact ||
                !userData.category
              }
              onClick={() => setLoading(true)}
              className="w-full cursor-pointer col-span-2 py-3 h-16  px-3 rounded bg-red-600 hover:bg-red-800 text-white"
            >
              {update
                ? "update"
                : loading
                ? "Adding Trainee..."
                : "Add Trainee"}
            </button>
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
