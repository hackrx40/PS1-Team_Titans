import React, { useState } from "react";

const buttonStyle = {
  backgroundColor: "#4caf50",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "0 10px",
};
const buttonStyle1 = {
  backgroundColor: "#FF0000",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "0 10px",
};

const UploadPage = () => {
  const [selectedImage, setSelectedImage] =  useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [diagnosis, setDiagnosis] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // Create a preview URL for displaying the selected image
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit=async(e:any)=>{
    e.preventDefault();
    let formData=new FormData();
    formData.append("file", selectedImage);
    const response = await fetch("http://localhost:8000/uploadimage", {
      method: "POST",
      body: formData,
    });
    const responseWithBody = await response.json();
    if (response) setDiagnosis(responseWithBody);
   
  }
  console.log(diagnosis);

  const handleReUpload = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Upload an X-Ray Report</h1>
      {!selectedImage ? (
        <div style={{ marginBottom: "20px" }}>
          <input type="file" name="file" accept="image/*" onChange={handleImageChange} />
        </div>
      ) : (
        <div>
          <img src={imagePreview} alt="Selected" style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }} />
          <div>
            <button style={buttonStyle1} onClick={handleReUpload}>Re-Upload</button>
            <button style={buttonStyle} onClick={handleSubmit}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPage;

// width: "50%",
// margin: "auto",
// height: "100vh",
// position: "relative",
// display: "flex",
// }}
// >
// <div style={{
//   flex: "50%",
// }}>
//   {messages.length != 0 ? (
//   <div
//       className="inner_cont"
//           style={{
//           height: "88%",
//           overflowY: "scroll",
//           }}
//       >
//           <Messages show={loading} messages={messages} />
//   </div>
//   ) : (
//       <Hero />
//   )}

//   <Input
//       chatLoading={chatLoading}
//       handlelogout={handlelogout}
//       img={auth?.avatar}
//       apiKey={auth?.apiKey}
//       toggleLoading={toggleLoading}
//       addMessage={addMessage}
//   />
// </div>
// <div style={{
//   flex: "50%",
// }}>
//   {!diagnosis
//   ?
//   <form
//       onSubmit={handleSubmit}
//       style={{display:"grid", gridRowGap:"20px"}}
//   >
//       <input type="file" name="file" onChange={handleFileChange}></input>
//       <button type="submit">Upload</button>
//   </form>
//   :
//   <div>
//       {diagnosis.content}
//   </div>
//   }
  

// </div>
// </div>