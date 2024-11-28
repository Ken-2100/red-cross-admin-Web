import { useEffect, useState } from "react";
import CertificateContainer from "./CertifcateConatainer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UploadButton } from "../app/utils/uploadthing";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import { useToast } from "@/components/hooks/use-toast";

const UploadCerts = () => {
  const { toast } = useToast();
  const [usersWithNoCerts, setUserWithNoCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState({});
  const [certificate, setCertificate] = useState("");
  const [certificateLoading, setCertificateLoading] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [instructors, setIntstructors] = useState([]);
  const [newInstructor, setNewInstructor] = useState({
    prefix: "Mr.",
    name: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/getAllUserWithNoCerts"
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        setUserWithNoCerts(data);
      } else {
        setUserWithNoCerts([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch session data:", error);
      setUserWithNoCerts([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshData]);

  const handleSelectedData = (data) => {
    setSelectedData(data);
  };

  const handleDownload = (e, name) => {
    e.stopPropagation();
    const input = document.getElementById("certificate");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "pt", "a4");
      const pdfWidth = 595.28;
      const pdfHeight = 1123;
      const canvasWidth = 794;
      const canvasHeight = canvas.height;
      const ratio = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);
      const imgWidth = canvasWidth * ratio;
      const imgHeight = canvasHeight * ratio;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${selectedData?.name}.pdf`);
    });
  };

  const handleSubmit = async () => {
    setCertificateLoading(true);
    try {
      const result = await axios.put(
        `http://localhost:3000/api/updateUserCertificate/${selectedData?.id}`,
        { certificateUrl: certificate }
      );

      if (result.status === 200) {
        setCertificateLoading(false);
        toast({
          title: "Certificate Submitted",
          description: "Certificate has been submitted to trainee",
        });
        setRefreshData((prev) => !prev);
      } else {
        // console.log("Update failed:", result.data); ken
      }
    } catch (error) {
      console.error("Error updating certificate:", error);
      alert("Failed to update certificate. Please try again later.");
    }
  };

  // Filtered users based on the search query
  const filteredUsers = usersWithNoCerts.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddInstructor = () => {
    if (newInstructor.name.trim() !== "") {
      setIntstructors((prev) => [
        ...prev,
        `${newInstructor.prefix} ${newInstructor.name.trim()}`,
      ]);
      setNewInstructor({ prefix: "Mr.", name: "" }); // Reset the input fields
    } else {
      alert("Please enter a valid instructor name.");
    }
  };

  const handleRemoveInstructor = (index) => {
    setIntstructors((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div className="w-full h-full p-5">
      <CertificateContainer
        name={selectedData?.name?.toUpperCase() || "No Certificate Selected"}
        dateStarted={selectedData?.dateStarted || "No Date Selected"}
        category={selectedData?.category || "No Category Selected"}
        date={selectedData?.date || "No Date"}
        instructors={instructors}
      />

      <div className="mt-5">
        <h2 className="text-2xl font-bold">Upload Certificates</h2>
      </div>
      {loading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <section className="w-full grid grid-cols-2 md:gap-8">
          <div className="w-[500px] mt-2">
            <div className="col-span-2">
              <Label>Search Name</Label>
              <input
                type="text"
                placeholder="Search by name..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {filteredUsers.length === 0 ? (
              <div>
                <h2>No Data Available</h2>
              </div>
            ) : (
              <div className="w-[500px] row-span-2 mt-0 h-80 overflow-y-auto border border-gray-300 rounded-md inline-block">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan="2" className="text-center py-4">
                          No Data Available
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map((val) => (
                        <tr key={val.id} className="text-center border-b">
                          <td className="px-4 py-2 border">{val.name}</td>
                          <td className="px-4 py-2 border">
                            <Button
                              type="button"
                              className=" w-[100px] bg-red-600"
                              onClick={(e) => handleSelectedData({ ...val })}
                            >
                              SELECT
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="w-full h-full grid grid-rows-3 grid-flow-col items-center">
            <div className="grid grid-cols-6 ">
              <h2 className="flex flex-col">
                <strong>Name</strong>
                {selectedData?.name || "Select Name"}
              </h2>

              <div className="relative inline-block group">
                <div>
                  {selectedData.name ? (
                    <Button>
                      <button
                        type="button"
                        className="text-xl px-3 py-1.5"
                        onClick={handleDownload}
                      >
                        DOWNLOAD CERTIFICATE
                      </button>
                    </Button>
                  ) : (
                    <Button>
                      <button type="button" className="text-xl px-3 py-2">
                        SELECT NAME
                      </button>
                    </Button>
                  )}
                </div>
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-lg bg-red-700 py-1.5 px-3 font-sans text-sm font-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
                  <p>Will download the certificate of selected name</p>
                </div>
              </div>
            </div>

            <div>
              <h2>
                <strong>Add Instructor</strong>
              </h2>
              <div className="flex gap-5">
                <select
                  value={newInstructor.prefix}
                  onChange={(e) =>
                    setNewInstructor((prev) => ({
                      ...prev,
                      prefix: e.target.value,
                    }))
                  }
                  className="col-span-2 border px-2 py-1 rounded-md"
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                </select>
                <input
                  type="text"
                  value={newInstructor.name}
                  onChange={(e) =>
                    setNewInstructor((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="Enter Instructor's name"
                  className="col-span-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  onClick={handleAddInstructor}
                  className="col-span-2 bg-blue-500 text-white"
                >
                  Add
                </Button>
              </div>
            </div>

            <ul className="mt-2">
              {instructors.map((instructor, index) => (
                <li
                  key={index}
                  className="flex jsutify-between mt-2 items-center"
                >
                  <span>{instructor}</span>
                  <Button
                    onClick={() => handleRemoveInstructor(index)}
                    className="text-white bg-red-600 ms-2"
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1>
              <strong>Date Started</strong>
            </h1>
            <div>
              <span>{selectedData?.dateStarted}</span>
            </div>
          </div>
          <div className="relative inline-block group">
            <div className="flex w-full flex-col gap-2">
              <Label htmlFor="uploadProfile">Upload Certificate</Label>
              {selectedData.name ? (
                <Button className="h-16" asChild>
                  <UploadButton
                    endpoint="pdfUploader"
                    onClientUploadComplete={(res) => {
                      setCertificate(res[0].url);
                      toast({
                        title: "Certificate Uploaded",
                        description: "Certificate is successfully uploaded",
                      });
                    }}
                    onUploadError={(error) => {
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                </Button>
              ) : (
                <Button disabled className="h-16">
                  Upload Button Disabled (Select a Name)
                </Button>
              )}
            </div>

            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-lg bg-red-700 py-1.5 px-3 font-sans text-sm font-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
              <p>Download certificate first before uploading</p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="uploadProfile">Submit Certificate</Label>
            <Button asChild>
              <button
                disabled={certificate === ""}
                onClick={handleSubmit}
                className="w-full bg-red-500 h-16 hover:bg-red-600"
              >
                {certificateLoading ? "LOADING..." : "SUBMIT"}
              </button>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
};

export default UploadCerts;
