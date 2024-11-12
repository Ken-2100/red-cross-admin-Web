import { useEffect, useState } from "react";
import CertifcateConatainer from "./CertifcateConatainer";
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
  // const CertificatePreview = ({ selectedData }) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const toggleModal = () => {
  //     setIsModalOpen(!isModalOpen);
  //   };

  //   return (
  //     <div className="flex flex-col items-center justify-center">
  //       {/* Button to Open Modal */}
  //       <button
  //         onClick={toggleModal}
  //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
  //       >
  //         Preview Certificate
  //       </button>

  //       {/* Modal */}
  //       {isModalOpen && (
  //         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
  //           <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-5 lg:w-2/3 xl:w-1/2">
  //             {/* Modal Header */}
  //             <div className="flex justify-between items-center border-b pb-3">
  //               <h2 className="text-xl font-bold">Certificate Preview</h2>
  //               <button
  //                 onClick={toggleModal}
  //                 className="text-gray-500 hover:text-gray-700"
  //               >
  //                 &times;
  //               </button>
  //             </div>

  //             {/* Modal Content */}
  //             <div className="mt-5 flex justify-center items-center overflow-auto max-h-[80vh]">
  //               <div className="w-full max-w-[95%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
  //                 <CertifcateConatainer
  //                   name={
  //                     selectedData?.name
  //                       ? selectedData.name.toUpperCase()
  //                       : "No Certificate Selected"
  //                   }
  //                 />
  //               </div>
  //             </div>

  //             {/* Modal Footer */}
  //             <div className="flex justify-end mt-5">
  //               <button
  //                 onClick={toggleModal}
  //                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
  //               >
  //                 Close
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

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

  return (
    <div className="w-full h-full p-5">
      <CertifcateConatainer
        name={
          selectedData?.name
            ? selectedData.name.toUpperCase()
            : "No Certificate Selected"
        }
      />

      <div>
        <h2 className="text-2xl font-bold">Upload Certificates</h2>
        {/* <CertificatePreview selectedData={selectedData} /> */}
      </div>
      {loading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <section className="w-full flex justify-between h-full items-center">
          <div className="w-[1/2] grid grid-cols-2 gap-5 mt-10">
            <div className="col-span-6 w-full mb-4">
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
              filteredUsers.map((val) => (
                <div className="flex items-center" key={val.id}>
                  <div className="flex w-full flex-col gap-2">
                    <Label htmlFor="downloadCert">{val.name}</Label>
                    <Button>
                      <button
                        type="button"
                        className="text-xl w-[100px]"
                        onClick={(e) => handleSelectedData({ ...val })}
                      >
                        SELECT
                      </button>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="w-1/2 h-full flex flex-col gap-10">
            <h2 className="flex flex-col">
              <strong>Name</strong>
              {selectedData?.name || "Select Name"}
            </h2>
            <div>
              {selectedData.name ? (
                <Button>
                  <button
                    type="button"
                    className="text-xl px-3 py-2"
                    onClick={handleDownload}
                  >
                    DOWNLOAD CERTIFICATE
                  </button>
                </Button>
              ) : (
                <Button>
                  <button type="button" className="text-xl px-3 py-2">
                    PLEASE SELECT NAME
                  </button>
                </Button>
              )}
            </div>
            {/* <h1>{selectedData?.dateStarted}</h1> */}
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
          </div>
        </section>
      )}
    </div>
  );
};

export default UploadCerts;
