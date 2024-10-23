import React from 'react';

function Update_info_progres() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Update Info Progress Penelitian dan PKM</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="judul" className="block mb-2">Judul Penelitian/PKM</label>
          <input type="text" id="judul" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="progress" className="block mb-2">Progress</label>
          <textarea id="progress" className="w-full p-2 border rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default Update_info_progres;