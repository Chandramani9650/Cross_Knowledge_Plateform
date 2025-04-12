
import React, { useState } from 'react';
import './styles/uploadData.css'; 

const UploadData = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    videoUrl: '',
    textContent: '',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prevState => ({
      ...prevState,
      images: files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (key === 'images') {
        formData.images.forEach(image => {
          data.append('images', image);
        });
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: data
      });
      
      if (response.ok) {
        alert('Data uploaded successfully!');
        setFormData({
          title: '',
          description: '',
          category: '',
          videoUrl: '',
          textContent: '',
          images: []
        });
      }
    } catch (error) {
      console.error('Error uploading data:', error);
      alert('Failed to upload data');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Data</h2>
      <form onSubmit={handleSubmit} className="upload-form">
       <div style={{display:"flex", gap:"20px", flexDirection:"row",justifyItems:"center",alignItems:"center"}}>
         
       <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

       </div>

       <div>
    
       <div className="form-group">
          <label htmlFor="videoUrl">Video URL</label>
          <input
            type="url"
            id="videoUrl"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="textContent">Text Content</label>
          <textarea
            id="textContent"
            name="textContent"
            value={formData.textContent}
            onChange={handleChange}
            required
          />
        </div>
       </div>

        <div className="form-group">
          <label htmlFor="images">Images</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageChange}
            multiple
            accept="image/*"
          />
        </div>

        <button type="submit" className="submit-btn">Upload Data</button>
      </form>
    </div>
  );
};

export default UploadData;

