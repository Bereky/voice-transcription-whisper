
// AudioList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Calls = () => {
  const [audios, setAudios] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch('/api/calls')
      .then(res => res.json())
      .then(data => setAudios(data));
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('audio', file);

    await fetch('/api/upload', { method: 'POST', body: formData });
    window.location.reload();
  };

  return (
    <div>
        <Layout >

        <h2 className="text-lg font-bold mb-4">Upload Audio</h2>
      <form onSubmit={handleUpload}>
        <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files[0])} className="block mb-4" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
      </form>

      <h3 className="text-lg font-bold mb-4">Uploaded Audios</h3>
      <table className="w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Filename</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Play</th>
            <th className="px-4 py-2">Analytics</th>
          </tr>
        </thead>
        <tbody>
          {audios.map(audio => (
            <tr key={audio._id} className="border-b border-gray-200">
              <td className="px-4 py-2">{audio.filename}</td>
              <td className="px-4 py-2">{audio.duration}s</td>
              <td className="px-4 py-2">
                <audio controls src={audio.url} />
              </td>
              <td className="px-4 py-2">
                <Link to={`/analytics/${audio._id}`} className="text-blue-600 hover:text-blue-800">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </Layout>

    </div>
  );
}

export default Calls