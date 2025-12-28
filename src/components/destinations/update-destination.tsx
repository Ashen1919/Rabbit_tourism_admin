import { useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";

export default function UpdateDestinations() {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [destinationName, setDestinationName] = useState("");
  const [label, setlabel] = useState("");
  const [description, setDescription] = useState("");

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
        <div className="w-full h-auto flex flex-col p-5 border-2 space-y-3 rounded-[10px] bg-gray-800/40 border-white/10">
          <h1 className="text-2xl font-bold text-center">Create Destination</h1>

          {/* name input */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="destination_name" className="text-sm font-medium">
              Destination Name <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">
                (max 30 characters)
              </span>
            </label>
            <input
              type="text"
              id="destination_name"
              maxLength={30}
              value={destinationName}
              onChange={(e) => setDestinationName(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="e.g., Sigiriya"
            />
            <span className="text-xs text-gray-400">
              {destinationName.length}/30
            </span>
          </div>

          {/* label input */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="destination_label" className="text-sm font-medium">
              Destination Label <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 15 characters)</span>
            </label>
            <input
              type="text"
              id="destination_label"
              maxLength={15}
              value={label}
              onChange={(e) => setlabel(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="e.g., Historical"
            />
            <span className="text-xs text-gray-400">{label.length}/15</span>
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
                <p className="text-white/40 text-xs mt-1">
                  PNG, JPG up to 10MB
                </p>
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
          <div className="flex flex-col space-y-1">
            <label htmlFor="description" className="text-sm font-medium">
              Description <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 60 characters)</span>
            </label>
            <input
              type="text"
              id="description"
              maxLength={60}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="Brief description"
            />
            <span className="text-xs text-gray-400">{description.length}/60</span>
          </div>

          {/* create button */}
          <button className="w-full p-3 cursor-pointer text-lg font-semibold rounded-[10px] border-2 border-white/10 bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            Create Destination
          </button>
        </div>
      </div>
    </div>
  );
}
