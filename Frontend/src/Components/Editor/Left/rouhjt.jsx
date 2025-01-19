// import React, { useState, useEffect } from 'react';
// import GetLayout from './getLayout';

// export default function Main() {
//   const [value, setValue] = useState('');
//   const [Loader, SetLoader] = useState(false);

//   // States for editable content
//   const [logoUrl, setLogoUrl] = useState('https://cdn.templates.unlayer.com/assets/1597218426091-xx.png');
//   const [mainImageUrl, setMainImageUrl] = useState('https://t3.ftcdn.net/jpg/05/40/62/46/360_F_540624608_gGfUf4SuPCzzBPA3GPoH6nHphsSEMDeA.jpg');
//   const [heading, setHeading] = useState('Email has never been easier');
//   const [description, setDescription] = useState('Create beautiful and sophisticated emails in minutes. No coding required, and minimal setup. The way email should be.');
//   const [buttonLink, setButtonLink] = useState('#');

//   useEffect(() => {
//     GetLayout(SetLoader, setValue);
//   }, []);

//   if (Loader) {
//     return <div>Loading...</div>;
//   }

//   // Replace placeholders with dynamic values
//   const updatedLayout = value
//     .replace('{{logoUrl}}', logoUrl)
//     .replace('{{mainImageUrl}}', mainImageUrl)
//     .replace('{{heading}}', heading)
//     .replace('{{description}}', description)
//     .replace('{{buttonLink}}', buttonLink);

//   return (
//     <div className="container">
//       {/* Editable fields */}
//       <div className="my-3">
//         <label>Logo URL</label>
//         <input
//           type="text"
//           className="form-control"
//           value={logoUrl}
//           onChange={(e) => setLogoUrl(e.target.value)}
//         />
//       </div>

//       <div className="my-3">
//         <label>Main Image URL</label>
//         <input
//           type="text"
//           className="form-control"
//           value={mainImageUrl}
//           onChange={(e) => setMainImageUrl(e.target.value)}
//         />
//       </div>

//       <div className="my-3">
//         <label>Heading</label>
//         <input
//           type="text"
//           className="form-control"
//           value={heading}
//           onChange={(e) => setHeading(e.target.value)}
//         />
//       </div>

//       <div className="my-3">
//         <label>Description</label>
//         <textarea
//           className="form-control"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>

//       <div className="my-3">
//         <label>Button Link</label>
//         <input
//           type="text"
//           className="form-control"
//           value={buttonLink}
//           onChange={(e) => setButtonLink(e.target.value)}
//         />
//       </div>

//       {/* Render email layout */}
//       <div
//         className="email-container bg-white rounded p-3 w-100"
//         dangerouslySetInnerHTML={{ __html: updatedLayout }} // Render the updated HTML
//       />
//     </div>
//   );
// }







// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import Quill styles
// import { SketchPicker } from "react-color"; // For color picking

// const EmailEditor = () => {
//   const [title, setTitle] = useState("Welcome to Our Newsletter!");
//   const [content, setContent] = useState("This is sample email content.");
//   const [footer, setFooter] = useState("© 2025 Your Company.");
//   const [bgColor, setBgColor] = useState("#ffffff");
//   const [logo, setLogo] = useState(null);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setLogo(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* Left Panel */}
//       <div
//         style={{
//           width: "30%",
//           borderRight: "1px solid #ddd",
//           padding: "20px",
//           overflowY: "auto",
//         }}
//       >
//         <h3>Settings Panel</h3>
//         <div style={{ marginBottom: "20px" }}>
//           <label>Logo:</label>
//           <input type="file" accept="image/*" onChange={handleImageUpload} />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             style={{ width: "100%", padding: "8px", marginTop: "5px" }}
//           />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label>Content:</label>
//           <ReactQuill value={content} onChange={setContent} />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label>Footer:</label>
//           <input
//             type="text"
//             value={footer}
//             onChange={(e) => setFooter(e.target.value)}
//             style={{ width: "100%", padding: "8px", marginTop: "5px" }}
//           />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label>Background Color:</label>
//           <SketchPicker
//             color={bgColor}
//             onChangeComplete={(color) => setBgColor(color.hex)}
//           />
//         </div>
//       </div>

//       {/* Right Panel */}
//       <div
//         style={{
//           width: "70%",
//           backgroundColor: bgColor,
//           padding: "20px",
//           overflowY: "auto",
//         }}
//       >
//         <h3>Email Preview</h3>
//         {logo && (
//           <img
//             src={logo}
//             alt="Logo"
//             style={{
//               maxWidth: "150px",
//               display: "block",
//               marginBottom: "20px",
//             }}
//           />
//         )}
//         <h2>{title}</h2>
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//         <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
//           {footer}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default EmailEditor;
