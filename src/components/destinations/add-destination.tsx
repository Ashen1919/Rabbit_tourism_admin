import { useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";

export default function AddDestinations() {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const getImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  const removeImage = () => {
    setImage(null);
    setFileName("");
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-3">
      <h1 className="text-2xl font-bold">Add Destinations</h1>

      {/* form section */}
      <div className="flex w-full h-auto justify-center items-center">
        <div className="w-1/3 h-auto flex flex-col p-5 border-2 space-y-3 rounded-[10px] bg-gray-800/40 border-white/10">
          <h1 className="text-2xl font-bold text-center">Create Destination</h1>

          {/* name input */}
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="name">Destination Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="new-name"
              className="p-1.5 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="Enter destination name"
            />
          </div>

          {/* label input */}
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="label">Label:</label>
            <input
              type="text"
              name="label"
              id="label"
              autoComplete="new-label"
              className="p-1.5 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="Enter destination label"
            />
          </div>

          {/* image upload component */}
          <div className="w-full flex flex-col space-y-1">
            <label>Image:</label>
            
            {!image ? (
              <label
                htmlFor="image"
                className="w-full h-36 flex flex-col items-center justify-center border-2 border-dashed border-white/30 rounded-[10px] cursor-pointer hover:border-white/50 hover:bg-gray-700/30 transition-all duration-300"
              >
                <FiUpload className="text-5xl text-white/60 mb-2" />
                <p className="text-white/60 text-sm">Click to upload image</p>
                <p className="text-white/40 text-xs mt-1">PNG, JPG up to 10MB</p>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="hidden"
                  accept="image/*"
                  onChange={getImage}
                />
              </label>
            ) : (
              <div className="w-full relative rounded-[10px] overflow-hidden border-2 border-white/10">
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-36 object-cover"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors duration-300"
                >
                  <FiX className="text-xl text-white" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                  <p className="text-white text-sm truncate">{fileName}</p>
                </div>
              </div>
            )}
          </div>

          {/* description input */}
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="description">Description:</label>
            <textarea className="border-2 border-white/10 rounded-[10px] p-1.5 h-36" placeholder="Enter Description" />
          </div>

          {/* create button */}
          <button className="p-1.5 mt-3 cursor-pointer text-lg w-full rounded-[10px] border-2 border-white/10 bg-gray-700 duration-300 hover:bg-transparent">
            Create Destination
          </button>
        </div>
      </div>
    </div>
  );
}