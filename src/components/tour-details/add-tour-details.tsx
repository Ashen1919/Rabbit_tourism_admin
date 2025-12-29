import { useState } from "react";
import { FiPlus, FiTrash2, FiUpload, FiX, FiDollarSign, FiCalendar, FiMapPin } from "react-icons/fi";

interface Highlight {
  points: string;
}

interface TourPlan {
  day: number;
  description: string;
  accommodation: string;
  mealtime: string;
}

interface Include {
  include_points: string;
}

interface NotInclude {
  not_include_points: string;
}

export default function AddTourDetails() {
  const [tourName, setTourName] = useState("");
  const [tourLocation, setTourLocation] = useState("");
  const [totalDays, setTotalDays] = useState("");
  const [tourImage, setTourImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tourSubDescription, setTourSubDescription] = useState("");
  const [tourOverview, setTourOverview] = useState("");
  const [destinationName, setDestinationName] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [singlePrice, setSinglePrice] = useState("");
  const [groupPrice, setGroupPrice] = useState("");

  const [highlights, setHighlights] = useState<Highlight[]>([{ points: "" }]);
  const [tourPlan, setTourPlan] = useState<TourPlan[]>([
    { day: 1, description: "", accommodation: "", mealtime: "" }
  ]);
  const [includes, setIncludes] = useState<Include[]>([{ include_points: "" }]);
  const [notIncludes, setNotIncludes] = useState<NotInclude[]>([{ not_include_points: "" }]);

  // Image handlers
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

  // Highlights handlers
  const addHighlight = () => {
    setHighlights([...highlights, { points: "" }]);
  };

  const removeHighlight = (index: number) => {
    if (highlights.length > 1) {
      setHighlights(highlights.filter((_, i) => i !== index));
    }
  };

  const updateHighlight = (index: number, value: string) => {
    const updated = [...highlights];
    updated[index] = { points: value };
    setHighlights(updated);
  };

  // Tour Plan handlers
  const addTourPlan = () => {
    const nextDay = tourPlan.length + 1;
    if (nextDay <= 15) {
      setTourPlan([...tourPlan, { day: nextDay, description: "", accommodation: "", mealtime: "" }]);
    }
  };

  const removeTourPlan = (index: number) => {
    if (tourPlan.length > 1) {
      const updated = tourPlan.filter((_, i) => i !== index);
      // Recalculate day numbers
      const recalculated = updated.map((plan, idx) => ({ ...plan, day: idx + 1 }));
      setTourPlan(recalculated);
    }
  };

  const updateTourPlan = (index: number, field: keyof TourPlan, value: string | number) => {
    const updated = [...tourPlan];
    updated[index] = { ...updated[index], [field]: value };
    setTourPlan(updated);
  };

  // Includes handlers
  const addInclude = () => {
    setIncludes([...includes, { include_points: "" }]);
  };

  const removeInclude = (index: number) => {
    if (includes.length > 1) {
      setIncludes(includes.filter((_, i) => i !== index));
    }
  };

  const updateInclude = (index: number, value: string) => {
    const updated = [...includes];
    updated[index] = { include_points: value };
    setIncludes(updated);
  };

  // Not Includes handlers
  const addNotInclude = () => {
    setNotIncludes([...notIncludes, { not_include_points: "" }]);
  };

  const removeNotInclude = (index: number) => {
    if (notIncludes.length > 1) {
      setNotIncludes(notIncludes.filter((_, i) => i !== index));
    }
  };

  const updateNotInclude = (index: number, value: string) => {
    const updated = [...notIncludes];
    updated[index] = { not_include_points: value };
    setNotIncludes(updated);
  };

  const handleSubmit = () => {
    const formData = {
      tour_name: tourName,
      tour_location: tourLocation,
      total_days: parseInt(totalDays),
      tour_image: imageFile,
      tour_sub_description: tourSubDescription,
      tour_overview: tourOverview,
      highlights: highlights,
      tour_plan: tourPlan,
      what_include: includes,
      what_not_include: notIncludes,
      starting_price: parseFloat(startingPrice),
      single_price: parseFloat(singlePrice),
      group_price: parseFloat(groupPrice),
      destination_name: destinationName
    };

    console.log("Form Data:", formData);
    // Add your API call here
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-3 pb-10">
      <h1 className="text-2xl font-bold">Add Tour Details</h1>

      <div className="w-full space-y-6">
        {/* Basic Information Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <h2 className="text-xl font-semibold text-blue-400">Basic Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tour Name */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">
                Tour Name <span className="text-red-400">*</span>
                <span className="text-gray-400 text-xs ml-2">(max 30 characters)</span>
              </label>
              <input
                type="text"
                maxLength={30}
                value={tourName}
                onChange={(e) => setTourName(e.target.value)}
                className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder="e.g., Cultural Triangle Explorer"
              />
              <span className="text-xs text-gray-400">{tourName.length}/30</span>
            </div>

            {/* Tour Location */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium flex items-center gap-2">
                <FiMapPin className="text-green-400" />
                Tour Location <span className="text-red-400">*</span>
                <span className="text-gray-400 text-xs">(max 20 characters)</span>
              </label>
              <input
                type="text"
                maxLength={20}
                value={tourLocation}
                onChange={(e) => setTourLocation(e.target.value)}
                className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder="e.g., Central Province"
              />
              <span className="text-xs text-gray-400">{tourLocation.length}/20</span>
            </div>

            {/* Total Days */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium flex items-center gap-2">
                <FiCalendar className="text-blue-400" />
                Total Days <span className="text-red-400">*</span>
                <span className="text-gray-400 text-xs">(1-50 days)</span>
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={totalDays}
                onChange={(e) => setTotalDays(e.target.value)}
                className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder="e.g., 7"
              />
            </div>

            {/* Destination Name */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">
                Destination Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={destinationName}
                onChange={(e) => setDestinationName(e.target.value)}
                className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder="e.g., Sigiriya"
              />
            </div>
          </div>

          {/* Tour Sub Description */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">
              Tour Sub Description <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 40 characters)</span>
            </label>
            <input
              type="text"
              maxLength={40}
              value={tourSubDescription}
              onChange={(e) => setTourSubDescription(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
              placeholder="Brief subtitle for the tour"
            />
            <span className="text-xs text-gray-400">{tourSubDescription.length}/40</span>
          </div>

          {/* Tour Overview */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">
              Tour Overview <span className="text-red-400">*</span>
              <span className="text-gray-400 text-xs ml-2">(max 150 characters)</span>
            </label>
            <textarea
              maxLength={150}
              value={tourOverview}
              onChange={(e) => setTourOverview(e.target.value)}
              className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent resize-none"
              placeholder="Detailed overview of the tour"
              rows={3}
            />
            <span className="text-xs text-gray-400">{tourOverview.length}/150</span>
          </div>
        </div>

        {/* Tour Image Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <h2 className="text-xl font-semibold text-purple-400">Tour Image</h2>

          {!tourImage ? (
            <label
              htmlFor="tour_image"
              className="w-full h-48 flex flex-col items-center justify-center border-2 border-dashed border-white/30 rounded-[10px] cursor-pointer hover:border-white/50 hover:bg-gray-700/30 transition-all"
            >
              <FiUpload className="text-4xl text-white/60 mb-2" />
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
            <div className="relative w-full h-48 rounded-[10px] overflow-hidden border-2 border-white/10">
              <img src={tourImage} alt="Preview" className="w-full h-full object-cover" />
              <button
                onClick={removeImage}
                className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
              >
                <FiX className="text-white" />
              </button>
            </div>
          )}
        </div>

        {/* Highlights Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-yellow-400">Tour Highlights</h2>
            <button
              onClick={addHighlight}
              className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/20 hover:bg-yellow-500/40 text-yellow-400 rounded-md transition-colors"
            >
              <FiPlus /> Add Highlight
            </button>
          </div>

          {highlights.map((highlight, index) => (
            <div key={index} className="flex gap-2 items-start">
              <input
                type="text"
                maxLength={70}
                value={highlight.points}
                onChange={(e) => updateHighlight(index, e.target.value)}
                className="flex-1 p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder={`Highlight ${index + 1} (max 70 chars)`}
              />
              {highlights.length > 1 && (
                <button
                  onClick={() => removeHighlight(index)}
                  className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors"
                >
                  <FiTrash2 />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Tour Plan Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-green-400">Tour Plan (Day by Day)</h2>
            <button
              onClick={addTourPlan}
              disabled={tourPlan.length >= 15}
              className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 hover:bg-green-500/40 text-green-400 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiPlus /> Add Day
            </button>
          </div>

          {tourPlan.map((plan, index) => (
            <div
              key={index}
              className="p-4 border border-white/10 rounded-lg bg-gray-900/30 space-y-3"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-300">Day {plan.day}</h3>
                {tourPlan.length > 1 && (
                  <button
                    onClick={() => removeTourPlan(index)}
                    className="p-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors"
                  >
                    <FiTrash2 />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Description */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs">
                    Description <span className="text-red-400">*</span>
                    <span className="text-gray-400"> (max 30 chars)</span>
                  </label>
                  <input
                    type="text"
                    maxLength={30}
                    value={plan.description}
                    onChange={(e) => updateTourPlan(index, "description", e.target.value)}
                    className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent text-sm"
                    placeholder="Day's activity"
                  />
                </div>

                {/* Accommodation */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs">
                    Accommodation <span className="text-red-400">*</span>
                    <span className="text-gray-400"> (max 20 chars)</span>
                  </label>
                  <input
                    type="text"
                    maxLength={20}
                    value={plan.accommodation}
                    onChange={(e) => updateTourPlan(index, "accommodation", e.target.value)}
                    className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent text-sm"
                    placeholder="Hotel/Camp name"
                  />
                </div>

                {/* Mealtime */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs">
                    Mealtime <span className="text-red-400">*</span>
                    <span className="text-gray-400"> (max 10 chars)</span>
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    value={plan.mealtime}
                    onChange={(e) => updateTourPlan(index, "mealtime", e.target.value)}
                    className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent text-sm"
                    placeholder="e.g., B,L,D"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-emerald-400">What's Included</h2>
            <button
              onClick={addInclude}
              className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 rounded-md transition-colors"
            >
              <FiPlus /> Add Item
            </button>
          </div>

          {includes.map((item, index) => (
            <div key={index} className="flex gap-2 items-start">
              <input
                type="text"
                maxLength={100}
                value={item.include_points}
                onChange={(e) => updateInclude(index, e.target.value)}
                className="flex-1 p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder={`Included item ${index + 1} (max 100 chars)`}
              />
              {includes.length > 1 && (
                <button
                  onClick={() => removeInclude(index)}
                  className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors"
                >
                  <FiTrash2 />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* What's Not Included Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-red-400">What's Not Included</h2>
            <button
              onClick={addNotInclude}
              className="flex items-center gap-2 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors"
            >
              <FiPlus /> Add Item
            </button>
          </div>

          {notIncludes.map((item, index) => (
            <div key={index} className="flex gap-2 items-start">
              <input
                type="text"
                maxLength={100}
                value={item.not_include_points}
                onChange={(e) => updateNotInclude(index, e.target.value)}
                className="flex-1 p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder={`Not included item ${index + 1} (max 100 chars)`}
              />
              {notIncludes.length > 1 && (
                <button
                  onClick={() => removeNotInclude(index)}
                  className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors"
                >
                  <FiTrash2 />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="p-5 border-2 space-y-4 rounded-[10px] bg-gray-800/40 border-white/10">
          <h2 className="text-xl font-semibold text-cyan-400">Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Starting Price */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium flex items-center gap-2">
                <FiDollarSign className="text-emerald-400" />
                Starting Price <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                min="1"
                step="0.01"
                value={startingPrice}
                onChange={(e) => setStartingPrice(e.target.value)}
                className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder="e.g., 500"
              />
            </div>

            {/* Single Price */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium flex items-center gap-2">
                <FiDollarSign className="text-blue-400" />
                Single Price <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                min="1"
                step="0.01"
                value={singlePrice}
                onChange={(e) => setSinglePrice(e.target.value)}
                className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder="e.g., 850"
              />
            </div>

            {/* Group Price */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium flex items-center gap-2">
                <FiDollarSign className="text-purple-400" />
                Group Price <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                min="1"
                step="0.01"
                value={groupPrice}
                onChange={(e) => setGroupPrice(e.target.value)}
                className="p-2 border-2 border-white/10 rounded-[10px] bg-transparent"
                placeholder="e.g., 650"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full p-3 cursor-pointer text-lg font-semibold rounded-[10px] border-2 border-white/10 bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          Create Tour Details
        </button>
      </div>
    </div>
  );
}