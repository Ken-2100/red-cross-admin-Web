import React from "react";
import Image from "next/image";

const CertificateContainer = ({
  name,
  dateEvaluation,
  dateValidity,
  dateStarted,
  category,
  instructors = [],
}) => {
  return (
    <div
      id="certificate"
      style={{
        width: "794px", // A4 width in pixels at 96 DPI
        height: "1123px", // A4 height in pixels at 96 DPI
        margin: "0 auto",
        padding: "20px",
        border: "10px solid #ddd",
        backgroundColor: "white",
        fontFamily: "serif",

        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "calc(100% - 50px)", // Adjusted height to accommodate footer
          border: "5px solid #aaa",
          padding: "30px",

          boxSizing: "border-box",
        }}
      >
        {/* Logo and Header */}
        <div
          className="flex items-center justify-center gap-6"
          style={{ marginBottom: "40px" }}
        >
          <div className="relative w-28 h-28">
            <Image
              src="/assets/white logo.png"
              alt="logo"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1
              style={{ fontSize: "20px", textAlign: "center" }}
              className="text-blue-900"
            >
              PHILIPPINE RED CROSS
            </h1>
            <h2
              style={{ fontSize: "20px", textAlign: "center" }}
              className="text-blue-900"
            >
              CAVITE CHAPTER
            </h2>
            <h2
              style={{ fontSize: "18px", textAlign: "center" }}
              className="text-rose-600"
            >
              DASMARIÑAS CITY BRANCH
            </h2>
            <div className="flex flex-col items-center">
              <p
                className="text-blue-800"
                style={{ fontSize: "16px", textAlign: "center" }}
              >
                Ground Floor, Units 2 & 3, Amada Building
              </p>
              <p
                className="text-blue-800"
                style={{ fontSize: "16px", textAlign: "center" }}
              >
                Emilio Aguinaldo Highway, Barangay Zone IV, Dasmariñas Cavite
                City
              </p>
              <p
                className="text-blue-800"
                style={{ fontSize: "16px", textAlign: "center" }}
              >
                Tel No. (046) 4026267
              </p>
              <p
                className="text-blue-800"
                style={{ fontSize: "16px", textAlign: "center" }}
              >
                <u>cavitedasmariñas@redcross.org.ph</u>
              </p>
            </div>
          </div>
        </div>

        {/* Certification Section */}
        <div style={{ marginTop: "20px" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "0px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            CERTIFICATION
          </h2>
          <div style={{ textAlign: "justify" }}>
            <h2
              style={{
                textAlign: "left",
                marginBottom: "18px",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              TO WHOM MAY IT CONCERN:
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 2,
                marginTop: "10px",
                textIndent: "100px",
              }}
            >
              This is to certify that <strong>{name || "Sample Name"}</strong>{" "}
              graduated in{" "}
              <strong>
                {(category || "Sample Category").toUpperCase()} FIRST AID AND
                BLS CPR / AED TRAINING
              </strong>{" "}
              conducted on {dateStarted || "Date Not Provided"} -{" "}
              {dateEvaluation} at Philippine Red Cross Dasmariñas City Branch,
              G/F Units 2 & 3 Amada Building, Emilio Aguinaldo Highway, Barangay
              Zone IV, Dasmariñas Cavite City, and <strong>PASSED</strong> the
              evaluating examination given on {dateEvaluation}. The training was
              conducted under the supervision of{" "}
              {instructors.length > 0
                ? instructors.map((instructor, index) => (
                    <span key={index}>
                      {index > 0 && ", "}
                      {instructor}
                    </span>
                  ))
                : "select instructors"}
            </p>
            <p
              style={{
                marginTop: "20px",
                fontSize: "16px",
                textIndent: "100px",
              }}
            >
              This certification is being issued for <strong>reference</strong>{" "}
              purposes and shall be valid up to {dateValidity} only.
            </p>
          </div>
        </div>

        {/* Signature Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <div>
            <p style={{ fontSize: "16px", fontWeight: "900" }}>
              <strong>GARY C. SANTOS, AEMT</strong>
            </p>
            <p style={{ fontSize: "16px" }}>BRANCH HEAD</p>
            <p style={{ fontSize: "16px" }}>Philippine Red Cross</p>
            <p style={{ fontSize: "16px" }}>Cavite Chapter - Dasmariñas City</p>
          </div>
          <div>
            <p style={{ fontSize: "16px", fontWeight: "900" }}>
              <strong>ADELINA B. CASTILLO, RN</strong>
            </p>
            <p style={{ fontSize: "16px" }}>CHAPTER ADMINISTRATOR</p>
            <p style={{ fontSize: "16px" }}>Philippine Red Cross</p>
            <p style={{ fontSize: "16px" }}>Cavite Chapter</p>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      {/* <div
        style={{
          width: "100%",
          height: "75px",
          padding: "10px",
          backgroundColor: "#dc2626",
          bottom: "250px",
          left: "0",
          display: "flex",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <p style={{ color: "white", fontSize: "16px", fontStyle: "italic" }}>
          Always First, Always Ready, Always There!
        </p>
      </div> */}
    </div>
  );
};

export default CertificateContainer;
