import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', link: '' });

  const fetchVideos = async () => {
    const response = await axios.get('http://localhost:5000/api/videos');
    setVideos(response.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/videos', form);
    fetchVideos();
    setForm({ title: '', description: '', link: '' });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/videos/${id}`);
    fetchVideos();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="block mb-2 p-2 border rounded-md"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="block mb-2 p-2 border rounded-md"
        />
        <input
          type="url"
          placeholder="Video Link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          className="block mb-2 p-2 border rounded-md"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Add Video
        </button>
      </form>
      <div>
        {videos.map((video) => (
          <div key={video._id} className="mb-4 p-4 border rounded-md shadow-sm">
            <h2 className="text-lg font-bold">{video.title}</h2>
            <p>{video.description}</p>
            <a href={video.link} className="text-blue-500" target="_blank" rel="noreferrer">
              Watch
            </a>
            <button
              onClick={() => handleDelete(video._id)}
              className="ml-4 px-2 py-1 bg-red-500 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
