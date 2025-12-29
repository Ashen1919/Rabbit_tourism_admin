import { useState } from "react";
import { FiPlus, FiTrash2, FiUpload, FiX } from "react-icons/fi";

interface Location {
  location_name: string;
  location_image: string | null;
  location_description: string;
  imageFile?: File;
}

interface Tip {
  tips_details: string;
}

export default function UpdateDestinationDetails() {
  const [destinationName, setDestinationName] = useState("");
  const [subDescription, setSubDescription] = useState("");
  const [description, setDescription] = useState("");
  const [timeToVisit, setTimeToVisit] = useState("");
  const [climateDescription, setClimateDescription] = useState("");
  const [locations, setLocations] = useState<Location[]>([
    { location_name: "", location_image: null, location_description: "" }
  ]);
  const [tips, setTips] = useState<Tip[]>([{ tips_details: "" }]);

  const addLocation = () => {
    setLocations([...locations, { location_name: "", location_image: null, location_description: "" }]);
  };

  const removeLocation = (index: number) => {
    if (locations.length > 1) {
      setLocations(locations.filter((_, i) => i !== index));
    }
  };

  const updateLocation = (index: number, field: keyof Location, value: string) => {
    const updated = [...locations];
    updated[index] = { ...updated[index], [field]: value };
    setLocations(updated);
  };

  const handleLocationImage = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const updated = [...locations];
      updated[index] = {
        ...updated[index],
        location_image: URL.createObjectURL(file),
        imageFile: file
      };
      setLocations(updated);
    }
  };

  const removeLocationImage = (index: number) => {
    const updated = [...locations];
    updated[index] = { ...updated[index], location_image: null, imageFile: undefined };
    setLocations(updated);
  };

  const addTip = () => {
    setTips([...tips, { tips_details: "" }]);
  };

  const removeTip = (index: number) => {
    if (tips.length > 1) {
      setTips(tips.filter((_, i) => i !== index));
    }
  };

  const updateTip = (index: number, value: string) => {
    const updated = [...tips];
    updated[index] = { tips_details: value };
    setTips(updated);
  };

  const handleSubmit = () => {
    const formData = {
      destination_name: destinationName,
      sub_description: subDescription,
      description: description,
      locations: locations,
      time_to_visit: timeToVisit,
      climate_description: climateDescription,
      tips: tips
    };

    console.log("Form Data:", formData);
    // Add your API call here
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-3 pb-10">
      <h1 className="text-2xl font-bold">Update Destination Details</h1>

      <div className="w-full space-y-6">
        {/* Basic Information Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <h2 className="text-xl font-semibold text-blue-400">Basic Information</h2>

          <div className="flex flex-col space-y-1">
            <label htmlFor="destination_name" className="text-sm font-medium">
              Destination Name <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 15 characters)</span>
            </label>
            <input
              type="text"
              id="destination_name"
              maxLength={15}
              value={destinationName}
              onChange={(e) => setDestinationName(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="e.g., Sigiriya"
            />
            <span className="text-xs text-gray-400">{destinationName.length}/15</span>
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="sub_description" className="text-sm font-medium">
              Sub Description <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 25 characters)</span>
            </label>
            <input
              type="text"
              id="sub_description"
              maxLength={25}
              value={subDescription}
              onChange={(e) => setSubDescription(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="e.g., Ancient Rock Fortress"
            />
            <span className="text-xs text-gray-400">{subDescription.length}/25</span>
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="description" className="text-sm font-medium">
              Description <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 40 characters)</span>
            </label>
            <input
              type="text"
              id="description"
              maxLength={40}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="Brief description"
            />
            <span className="text-xs text-gray-400">{description.length}/40</span>
          </div>
        </div>

        {/* Locations Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-green-400">Locations</h2>
            <button
              onClick={addLocation}
              className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 hover:bg-green-500/40 text-green-400 rounded-md transition-colors"
            >
              <FiPlus /> Add Location
            </button>
          </div>

          {locations.map((location, index) => (
            <div
              key={index}
              className="p-4 border border-white/10 rounded-lg bg-gray-900/30 space-y-3"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-300">Location {index + 1}</h3>
                {locations.length > 1 && (
                  <button
                    onClick={() => removeLocation(index)}
                    className="p-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors"
                  >
                    <FiTrash2 />
                  </button>
                )}
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm">Location Name <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  value={location.location_name}
                  onChange={(e) => updateLocation(index, "location_name", e.target.value)}
                  className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                  placeholder="e.g., Lion Rock"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm">Location Image <span className="text-red-400">*</span></label>
                {!location.location_image ? (
                  <label
                    htmlFor={`location-image-${index}`}
                    className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-white/30 rounded-[10px] cursor-pointer hover:border-white/50 hover:bg-gray-700/30 transition-all"
                  >
                    <FiUpload className="text-3xl text-white/60 mb-1" />
                    <p className="text-white/60 text-xs">Click to upload</p>
                    <input
                      type="file"
                      id={`location-image-${index}`}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleLocationImage(index, e)}
                    />
                  </label>
                ) : (
                  <div className="relative w-full h-32 rounded-[10px] overflow-hidden border-2 border-white/10">
                    <img
                      src={location.location_image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removeLocationImage(index)}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
                    >
                      <FiX className="text-white" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm">Location Description <span className="text-red-400">*</span></label>
                <textarea
                  value={location.location_description}
                  onChange={(e) => updateLocation(index, "location_description", e.target.value)}
                  className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent resize-none"
                  placeholder="Describe this location"
                  rows={2}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Climate & Time Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <h2 className="text-xl font-semibold text-cyan-400">Climate & Best Time</h2>

          <div className="flex flex-col space-y-1">
            <label htmlFor="time_to_visit" className="text-sm font-medium">
              Best Time to Visit <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 30 characters)</span>
            </label>
            <input
              type="text"
              id="time_to_visit"
              maxLength={30}
              value={timeToVisit}
              onChange={(e) => setTimeToVisit(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="e.g., December to April"
            />
            <span className="text-xs text-gray-400">{timeToVisit.length}/30</span>
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="climate_description" className="text-sm font-medium">
              Climate Description <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 30 characters)</span>
            </label>
            <input
              type="text"
              id="climate_description"
              maxLength={30}
              value={climateDescription}
              onChange={(e) => setClimateDescription(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="e.g., Tropical, hot and humid"
            />
            <span className="text-xs text-gray-400">{climateDescription.length}/30</span>
          </div>
        </div>

        {/* Tips Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-purple-400">Travel Tips</h2>
            <button
              onClick={addTip}
              className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/40 text-purple-400 rounded-md transition-colors"
            >
              <FiPlus /> Add Tip
            </button>
          </div>

          {tips.map((tip, index) => (
            <div key={index} className="flex gap-2 items-start">
              <input
                type="text"
                value={tip.tips_details}
                onChange={(e) => updateTip(index, e.target.value)}
                className="flex-1 p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder={`Tip ${index + 1}`}
              />
              {tips.length > 1 && (
                <button
                  onClick={() => removeTip(index)}
                  className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors"
                >
                  <FiTrash2 />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full p-3 cursor-pointer text-lg font-semibold rounded-[10px] border-2 border-white/10 bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          Update Destination Details
        </button>
      </div>
    </div>
  );
}