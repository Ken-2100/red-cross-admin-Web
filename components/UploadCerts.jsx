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
	const [usersWithNoCerts, setUserWithNoCerts] = useState([]); // Ensure it's initialized as an array
	const [loading, setLoading] = useState(true);
	const [selectedData, setSelectedData] = useState({});
	const [certificate, setCertificate] = useState("");
	const [certificateLoading, setCertificateLoading] = useState(false);
	const [refreshData, setRefreshData] = useState(false); // Added refresh trigger

	const fetchData = async () => {
		try {
			const response = await fetch(
				"http://localhost:3000/api/getAllUserWithNoCerts"
			);
			const data = await response.json();
			console.log(data);

			// Ensure the fetched data is an array before setting the state
			if (Array.isArray(data)) {
				setUserWithNoCerts(data);
			} else {
				setUserWithNoCerts([]); // Set to empty array if data is not an array
			}
			setLoading(false);
		} catch (error) {
			console.error("Failed to fetch session data:", error);
			setUserWithNoCerts([]); // Set to empty array in case of error
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [refreshData]); // Now we trigger the effect whenever refreshData changes

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
				console.log("Certificate updated successfully:", result.data);
				setCertificateLoading(false);
				toast({
					title: "Certificate Submitted",
					description: "Certificate has been submitted to trainee",
				});

				// Trigger data refresh after successful submission
				setRefreshData((prev) => !prev); // Toggle refreshData to trigger useEffect
			} else {
				console.log("Update failed:", result.data);
			}
		} catch (error) {
			console.error("Error updating certificate:", error);
			alert("Failed to update certificate. Please try again later.");
		}
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
					<h2>Loading...</h2>
				</div>
			) : (
				<section className="w-full flex justify-between h-full items-center">
					<div className="w-[1/2]  grid grid-cols-2 gap-5 mt-10">
						{usersWithNoCerts.length === 0 ? (
							<div>
								<h2>No Data Available</h2>
							</div>
						) : (
							usersWithNoCerts.map((val) => (
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
						<h2>{selectedData?.name || "Select Name"}</h2>
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
						<h1>{selectedData?.dateStarted}</h1>
						<div className="flex w-full flex-col gap-2">
							<Label htmlFor="uploadProfile">Upload Certificate</Label>

							{/* Conditionally render the UploadButton based on selectedData.name */}
							{selectedData.name ? (
								<Button className="h-16" asChild>
									<UploadButton
										endpoint="pdfUploader"
										onClientUploadComplete={(res) => {
											console.log("Files: ", res[0].url);
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
