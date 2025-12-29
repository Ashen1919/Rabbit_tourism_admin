import { useState } from "react";
import { FiUpload, FiX, FiImage, FiTrash2 } from "react-icons/fi";

interface ImageItem {
  image_urls: string | null;
  imageFile?: File;
}

const dest_names = [
    "Cultural Heritage",
    "Nature & Adventure",
    "Beach & Wildlife",
    "Wildlife Safari",
    "Comprehensive Tour",
    "Religious Tour",
    "Food & Culinary",
    "Wellness & Spa"
  ];

export default function UpdateGalleryItem() {
  const [destinationName, setDestinationName] = useState("");
  const [images, setImages] = useState<ImageItem[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: ImageItem[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        newImages.push({
          image_urls: URL.createObjectURL(file),
          imageFile: file,
        });
      }

      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!destinationName) {
      alert("Please enter a destination name");
      return;
    }

    if (images.length === 0) {
      alert("Please upload at least one image");
      return;
    }

    const formData = {
      destination_name: destinationName,
      images: images.map((img) => img.imageFile),
    };

    console.log("Form Data:", formData);
    // Add your API call here
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-3 pb-10">
      <h1 className="text-2xl font-bold">Update Gallery Item</h1>

      <div className="w-full space-y-6">
        {/* Destination Name Section */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="destination_name" className="text-sm font-medium">
            Destination Name<span className="text-red-400">*</span>
            <span className="text-gray-400 text-xs ml-2">
              (max 20 characters)
            </span>
          </label>
          <select
            id="destination_name"
            value={destinationName}
            onChange={(e) => setDestinationName(e.target.value)}
            className="p-2 border-2 border-white/10 rounded-[10px] bg-gray-800 text-white cursor-pointer"
          >
            <option value="">Select a Name</option>
            {dest_names.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Images Upload Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
              <FiImage /> Gallery Images
            </h2>
            <span className="text-sm text-gray-400">
              {images.length} {images.length === 1 ? "image" : "images"}{" "}
              uploaded
            </span>
          </div>

          {/* Upload Area */}
          <label
            htmlFor="gallery_images"
            className="w-full h-48 flex flex-col items-center justify-center border-2 border-dashed border-white/30 rounded-[10px] cursor-pointer hover:border-purple-400/50 hover:bg-gray-700/30 transition-all duration-300"
          >
            <FiUpload className="text-5xl text-white/60 mb-2" />
            <p className="text-white/60 text-sm font-medium">
              Click to upload images
            </p>
            <p className="text-white/40 text-xs mt-1">
              PNG, JPG up to 10MB each
            </p>
            <p className="text-purple-400 text-xs mt-2">
              You can select multiple images at once
            </p>
            <input
              type="file"
              id="gallery_images"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
          </label>

          {/* Preview Grid */}
          {images.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-300">
                Uploaded Images Preview
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="relative group aspect-square rounded-lg overflow-hidden border-2 border-white/10 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <img
                      src={img.image_urls!}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Image Number Overlay */}
                    <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white font-medium">
                      #{index + 1}
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <FiX className="text-white text-sm" />
                    </button>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => removeImage(index)}
                        className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md flex items-center gap-2"
                      >
                        <FiTrash2 /> Remove
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add More Button */}
                <label
                  htmlFor="gallery_images_more"
                  className="aspect-square rounded-lg border-2 border-dashed border-white/30 hover:border-purple-400/50 cursor-pointer flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-700/30"
                >
                  <FiUpload className="text-3xl text-white/60" />
                  <span className="text-xs text-white/60">Add More</span>
                  <input
                    type="file"
                    id="gallery_images_more"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Preview Section */}
        {destinationName && images.length > 0 && (
          <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
            <h2 className="text-xl font-semibold text-cyan-400">
              Gallery Preview
            </h2>

            <div className="p-4 bg-gray-900/50 rounded-lg border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{destinationName}</h3>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-md text-sm font-medium flex items-center gap-2">
                  <FiImage />
                  {images.length} {images.length === 1 ? "Image" : "Images"}
                </span>
              </div>

              {/* Preview Grid - First 6 images */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {images.slice(0, 6).map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-md overflow-hidden border border-white/10"
                  >
                    <img
                      src={img.image_urls!}
                      alt={`Preview ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {images.length > 6 && (
                  <div className="aspect-square rounded-md bg-gray-800/50 border border-white/10 flex items-center justify-center">
                    <span className="text-sm text-gray-400">
                      +{images.length - 6} more
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!destinationName || images.length === 0}
          className="w-full p-3 cursor-pointer text-lg font-semibold rounded-[10px] border-2 border-white/10 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {images.length === 0
            ? "Upload Images to Continue"
            : `Update Gallery with ${images.length} ${
                images.length === 1 ? "Image" : "Images"
              }`}
        </button>
      </div>
    </div>
  );
}
