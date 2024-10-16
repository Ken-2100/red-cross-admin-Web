import {useEffect,useState} from 'react'
import CertifcateConatainer from './CertifcateConatainer';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UploadButton } from "../app/utils/uploadthing";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';
const UploadCerts = () => {
    const [usersWithNoCerts,setUserWithNoCerts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [selectedData,setSelectedData] = useState({})
    const [searchName,setSearchName] = useState('');
    const [certificateUrl,setCertificateUrl] = useState('');
    const [certificateUploadLoading,setCertificateUploadLoading] = useState(false);


    const handleDownload = (e,name) => {
        e.stopPropagation();
        const input = document.getElementById('certificate');
      
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
      
          // Create PDF with A4 size and portrait orientation
          const pdf = new jsPDF('portrait', 'pt', 'a4');
      
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
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
          // Save the PDF with the name of the user
          pdf.save(`${selectedData?.name}.pdf`);
        });
      };


      const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };


      const currentDate = new Date();
      const formattedDate = formatDate(currentDate);
      const trainingDate = new Date(selectedData?.dateStarted);
      const dateStarted = formatDate(trainingDate)

      const handleSubmit = async () => {
        setCertificateUploadLoading(true)
        try {
            const response = await axios.put(`http://localhost:3000/api/updateUserCertificate/${selectedData?.id}`,{certificateUrl:certificateUrl});
            alert(response.data.message); // No need for .json(), axios parses it for you
            setCertificateUploadLoading(false)
        } catch (error) {
            console.error('Error updating certificate:', error);
            alert('Failed to update certificate');
        }
    };
    
      

    useEffect(() => {

        const fetchSession = async () => {
            try {
              const response = await fetch('http://localhost:3000/api/getAllUserWithNoCerts');
              const data = await response.json();
              setUserWithNoCerts(data)
              setLoading(false)
            } catch (error) {
              console.error("Failed to fetch session data:", error);
              throw error; // Re-throw the error to be handled by the caller if needed
            }
          };


          fetchSession();

    },[usersWithNoCerts]);





    const handleSelectedData = (data) => {
        setSelectedData(data);
    }



    const finalData =  usersWithNoCerts.filter((val => val.name.startsWith(searchName)));


    

  return (
    <div className='w-full h-full p-5'>

            <CertifcateConatainer date={formattedDate } dateStarted={ dateStarted}  name={selectedData?.name ? selectedData.name.toUpperCase() : 'No Certificate Selected'} />

    

        <div>
            <h2 className='text-2xl font-bold'>Upload Certificates</h2>
           
        </div>
        {
            loading ? <div> <h2>loadin...</h2> </div>
             :

             <section className='w-full justify-between flex h-full items-center'>
                                    
              <div className='w-[1/2] grid grid-cols-2 gap-5 mt-10 h-full items-start justify-start'>
                    <Input
                        className='col-span-2'
                        value={searchName}
                        placeholder='Search Name...'
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                    
                    {/* Ensure that grid items stay aligned at the top */}
                    {finalData.map(val => (
                        <div className='' key={val.id}>
                            <div className='flex items-start justify-start w-full flex-col gap-2'>
                                <Label htmlFor="downloadCert">{val.name}</Label>
                                <Button>
                                    <button
                                        type='button'
                                        className='text-xl w-[100px]'
                                        onClick={(e) => handleSelectedData({...val})}
                                    >
                                        SELECT
                                    </button>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

             <div className='w-1/2 h-full flex flex-col gap-6'>

                      <div className='flex  flex-col gap-2'>
                            <h2 className='text-2xl'>{selectedData?.name ?? "Select a name"}</h2>
                      </div>
                      
                      <div className='flex flex-col gap-2'>
                            <Label htmlFor="uploadCertficate">Dowbload Certificate</Label>
                            <Button>
                                <button disabled={certificateUrl !== ''} type='button' className='text-xl px-3 py-2 ' onClick={ handleDownload} >DOWBLOAD CERTIFICATE</button>
                            </Button>
                      </div>
                          
                     
                  <div  className='flex w-full flex-col gap-2'>
                  <Label htmlFor="uploadCertficate">Upload Certificate</Label>
                    <Button  className="h-24">
                          <UploadButton
                          endpoint="pdfUploader"
                          
                          onClientUploadComplete={(res) => {
                            // Do something with the response
                            console.log("Files: ", res[0].url);

                            setCertificateUrl(res[0].url)
                            
                            alert("Upload Completed");
                          }}
                          onUploadError={(error) => {
                            // Do something with the error.
                            alert(`ERROR! ${error.message}`);
                          }}
                        />

                    </Button>
                    </div>

                    <div className='flex flex-col gap-2'>
                            <Label htmlFor="uploadCertficate">Approve Certificate</Label>
                            <Button asChild>
                                <button disabled={certificateUrl === '' } type='button' className='text-xl px-3 py-2 bg-red-500 ' onClick={ handleSubmit} >{certificateUploadLoading ? "APPROVING..." : "APPROVE"}</button>
                            </Button>
                      </div>
                          

        </div>  

              
            </section>
        }

    </div>
  )
}

export default UploadCerts