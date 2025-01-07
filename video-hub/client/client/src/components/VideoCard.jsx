import React from 'react';

const VideoCard = ({ title, description, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        Watch Video
      </a>
    </div>
  );
};

export default VideoCard;
