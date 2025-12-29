import { useState } from "react";
import { FiUpload, FiX, FiDollarSign, FiUsers, FiCalendar } from "react-icons/fi";

export default function UpdateTour() {
  const [tourName, setTourName] = useState("");
  const [tourCategory, setTourCategory] = useState("");
  const [totalDays, setTotalDays] = useState("");
  const [maxPassengers, setMaxPassengers] = useState("");
  const [tourDescription, setTourDescription] = useState("");
  const [tourPrice, setTourPrice] = useState("");
  const [tourImage, setTourImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const categories = [
    "Cultural Heritage",
    "Nature & Adventure",
    "Beach & Wildlife",
    "Wildlife Safari",
    "Comprehensive Tour",
    "Religious Tour",
    "Food & Culinary",
    "Wellness & Spa"
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setTourImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const removeImage = () => {
    setTourImage(null);
    setImageFile(null);
  };

  const handleSubmit = () => {
    // Validation
    if (!tourName || !tourCategory || !totalDays || !maxPassengers || !tourDescription || !tourPrice || !tourImage) {
      alert("Please fill in all required fields");
      return;
    }

    const formData = {
      tour_name: tourName,
      tour_category: tourCategory,
      total_days: parseInt(totalDays),
      max_passengers: parseInt(maxPassengers),
      tour_description: tourDescription,
      tour_price: parseFloat(tourPrice),
      tour_image: imageFile
    };

    console.log("Form Data:", formData);
    // Add your API call here
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-3 pb-10">
      <h1 className="text-2xl font-bold">Update Tour</h1>

      <div className="w-full space-y-6">
        {/* Basic Information Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <h2 className="text-xl font-semibold text-blue-400">Basic Information</h2>

          {/* Tour Name */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="tour_name" className="text-sm font-medium">
              Tour Name <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 30 characters)</span>
            </label>
            <input
              type="text"
              id="tour_name"
              maxLength={30}
              value={tourName}
              onChange={(e) => setTourName(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="e.g., Cultural Triangle Explorer"
            />
            <span className="text-xs text-gray-400">{tourName.length}/30</span>
          </div>

          {/* Tour Category */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="tour_category" className="text-sm font-medium">
              Tour Category <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 20 characters)</span>
            </label>
            <select
              id="tour_category"
              value={tourCategory}
              onChange={(e) => setTourCategory(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-gray-800 text-white cursor-pointer"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Tour Description */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="tour_description" className="text-sm font-medium">
              Tour Description <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 100 characters)</span>
            </label>
            <textarea
              id="tour_description"
              maxLength={100}
              value={tourDescription}
              onChange={(e) => setTourDescription(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent resize-none"
              placeholder="Brief description of the tour"
              rows={3}
            />
            <span className="text-xs text-gray-400">{tourDescription.length}/100</span>
          </div>
        </div>

        {/* Tour Details Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <h2 className="text-xl font-semibold text-green-400">Tour Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Total Days */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="total_days" className="text-sm font-medium flex items-center gap-2">
                <FiCalendar className="text-blue-400" />
                Total Days <span className="text-red-400">*</span>
                <span className="text-gray-400 text-xs">(1-50 days)</span>
              </label>
              <input
                type="number"
                id="total_days"
                min="1"
                max="50"
                value={totalDays}
                onChange={(e) => setTotalDays(e.target.value)}
                className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder="e.g., 7"
              />
            </div>

            {/* Max Passengers */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="max_passengers" className="text-sm font-medium flex items-center gap-2">
                <FiUsers className="text-green-400" />
                Max Passengers <span className="text-red-400">*</span>
                <span className="text-gray-400 text-xs">(1-50 people)</span>
              </label>
              <input
                type="number"
                id="max_passengers"
                min="1"
                max="50"
                value={maxPassengers}
                onChange={(e) => setMaxPassengers(e.target.value)}
                className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder="e.g., 15"
              />
            </div>
          </div>

          {/* Tour Price */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="tour_price" className="text-sm font-medium flex items-center gap-2">
              <FiDollarSign className="text-emerald-400" />
              Tour Price (USD) <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs">(minimum $1)</span>
            </label>
            <input
              type="number"
              id="tour_price"
              min="1"
              step="0.01"
              value={tourPrice}
              onChange={(e) => setTourPrice(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="e.g., 850.00"
            />
          </div>
        </div>

        {/* Tour Image Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <h2 className="text-xl font-semibold text-purple-400">Tour Image</h2>

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">
              Upload Tour Image <span className="text-red-400">*</span>
            </label>
            
            {!tourImage ? (
              <label
                htmlFor="tour_image"
                className="w-full h-64 flex flex-col items-center justify-center border-2 border-dashed border-white/30 rounded-[10px] cursor-pointer hover:border-white/50 hover:bg-gray-700/30 transition-all duration-300"
              >
                <FiUpload className="text-5xl text-white/60 mb-2" />
                <p className="text-white/60 text-sm">Click to upload tour image</p>
                <p className="text-white/40 text-xs mt-1">PNG, JPG up to 10MB</p>
                <input
                  type="file"
                  id="tour_image"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            ) : (
              <div className="w-full relative rounded-[10px] overflow-hidden border-2 border-white/10">
                <img
                  src={tourImage}
                  alt="Tour Preview"
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={removeImage}
                  className="absolute top-3 right-3 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors duration-300 shadow-lg"
                >
                  <FiX className="text-xl text-white" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3">
                  <p className="text-white text-sm truncate">
                    {imageFile?.name || "Tour Image"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preview Section */}
        {tourName && tourCategory && tourPrice && (
          <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
            <h2 className="text-xl font-semibold text-cyan-400">Preview</h2>
            <div className="p-4 bg-gray-900/50 rounded-lg border border-white/10">
              <div className="flex gap-4">
                {tourImage && (
                  <img
                    src={tourImage}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-md"
                  />
                )}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold">{tourName}</h3>
                  <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs">
                    {tourCategory}
                  </span>
                  {tourDescription && (
                    <p className="text-sm text-gray-300">{tourDescription}</p>
                  )}
                  <div className="flex gap-4 text-sm">
                    {totalDays && (
                      <div className="flex items-center gap-1">
                        <FiCalendar className="text-blue-400" />
                        <span>{totalDays} days</span>
                      </div>
                    )}
                    {maxPassengers && (
                      <div className="flex items-center gap-1">
                        <FiUsers className="text-green-400" />
                        <span>{maxPassengers} passengers</span>
                      </div>
                    )}
                    {tourPrice && (
                      <div className="flex items-center gap-1 font-semibold text-emerald-400">
                        <FiDollarSign />
                        <span>{tourPrice}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full p-3 cursor-pointer text-lg font-semibold rounded-[10px] border-2 border-white/10 bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          Update Tour
        </button>
      </div>
    </div>
  );
}