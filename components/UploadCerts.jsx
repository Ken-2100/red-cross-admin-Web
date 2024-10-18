import { useEffect, useState } from "react";
import CertifcateConatainer from "./CertifcateConatainer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MdCloudDownload } from "react-icons/md";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const UploadCerts = () => {
  const [usersWithNoCerts, setUserWithNoCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState({});

  const handleDownload = (e, name) => {
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
      pdf.save(`${selectedData?.name}.pdf`);
    });
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/getAllUserWithNoCerts"
        );
        const data = await response.json();
        setUserWithNoCerts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch session data:", error);
        throw error; // Re-throw the error to be handled by the caller if needed
      }
    };

    fetchSession();
  }, [usersWithNoCerts]);

  const handleSelectedData = (data) => {
    setSelectedData(data);
  };

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
      </div>
      {loading ? (
        <div>
          {" "}
          <h2>loadin...</h2>{" "}
        </div>
      ) : (
        <section className="w-full flex justify-between h-full items-center">
          <div className="w-[1/2]  grid grid-cols-2 gap-5 mt-10">
            {usersWithNoCerts.map((val) => (
              <div className=" flex items-center " key={val.id}>
                <div className="flex w-full flex-col gap-2">
                  <Label htmlFor="downloadCert">{val.name}</Label>
                  <Button>
                    <button
                      type="button"
                      className="text-xl w-[100px] "
                      onClick={(e) => handleSelectedData({ ...val })}
                    >
                      SELECT
                    </button>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-1/2 h-full">
            <Button>
              <button
                type="button"
                className="text-xl px-3 py-2 "
                onClick={handleDownload}
              >
                DOWNLOAD CERTIFICATE
              </button>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
};

export default UploadCerts;
