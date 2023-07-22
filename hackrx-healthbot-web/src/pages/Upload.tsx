import React, { useState } from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/xray_land.jpg";

const buttonStyle = {
  backgroundColor: "#4caf50",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "10px",
};

const buttonStyle1 = {
  backgroundColor: "#FF0000",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "10px",
};

const UploadPage = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [diagnosis, setDiagnosis] = useState<any>(null);
  const [analyzing, setAnalyzing] = useState<boolean>(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setSelectedImage(file);

      // Create a preview URL for displaying the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select an image with size less than or equal to 5MB.");
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedImage) {
      setAnalyzing(true);
      let formData = new FormData();
      formData.append("file", selectedImage);
      const response = await fetch("http://localhost:8002/uploadimage", {
        method: "POST",
        body: formData,
      });
      const responseWithBody = await response.json();
      setAnalyzing(false);
      setDiagnosis(responseWithBody);
      // setImagePreview(null); // Clear image preview after analysis
    }
  };

  const handleReUpload = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setDiagnosis(null);
  };

  const DiagnosisContent = () => {
    if (!diagnosis || !diagnosis.content) return null;

    // Split the diagnosis content into an array of lines based on "\n"
    const lines = diagnosis.content.split("\n");

    return (
     <div
        style={{
    marginTop:"20px",
    marginBottom: "20px",
    marginLeft: "100px",
    border: "2px solid #ddd",
    padding: "30px",
    width: "80%",
    textAlign: "left",
    lineHeight: "30px",
    fontSize:"16px"
  }}
>
  {lines.map((line, index) => (
    <p key={index}>
      {/* {index % 2 === 0 && <span style={{ marginRight: "10px" }}>{index/2 + 1}.</span>} */}
      {line}
    </p>
))}

</div>

    );
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ marginTop: "18vh", marginBottom: "5vh" }}>Hello, I am BAYMAX, your AI-powered Healthcare Companion!</h1>
        <h2 style={{ marginBottom: "5vh" }}>Let's embark on a journey of proactive well-being together!</h2>

        {!selectedImage ? (
          <div style={{ marginBottom: "20px", border: "2px solid #ddd", padding: "40px", width: "80%", textAlign: "center", fontSize:"20px" }}>
            <p>Please upload an X-Ray report image (max 5MB):</p>
            <input type="file" name="file" accept="image/*" onChange={handleImageChange} />
          </div>
        ) : analyzing ? (
          <div style={{ marginBottom: "20px", border: "2px solid #ddd", padding: "10px", width: "80%", textAlign: "center" }}>
            <h2>Analyzing...</h2>
          </div>
        ) : (
          <div style={{ width: "80%", textAlign: "center" }}>
            <img src={imagePreview} alt="Selected" style={{ maxWidth: "100%", maxHeight: "500px", marginBottom: "20px" }} />
            {DiagnosisContent()}
            {diagnosis ? (
              <div>
                <button style={buttonStyle1} onClick={handleReUpload}>Re-Upload</button>
              </div>
            ) : (
              <div>
                <button style={buttonStyle1} onClick={handleReUpload}>Re-Upload</button>
                <button style={buttonStyle} onClick={handleSubmit}>Confirm</button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UploadPage;
