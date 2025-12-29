import { useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FiEdit, FiChevronDown, FiChevronUp, FiMapPin, FiClock, FiCloud } from "react-icons/fi";

// TypeScript interfaces matching your schema
interface Location {
  location_name: string;
  location_image: string;
  location_description: string;
}

interface TipsDetails {
  tips_details: string;
}

interface DestinationDetail {
  _id: string;
  destination_id: string;
  destination_name: string;
  sub_description: string;
  description: string;
  locations: Location[];
  time_to_visit: string;
  climate_description: string;
  tips: TipsDetails[];
  createdAt: string;
  updatedAt: string;
}

// Sample data matching your schema
const destinationDetails: DestinationDetail[] = [
  {
    _id: "1",
    destination_id: "dest001",
    destination_name: "Sigiriya",
    sub_description: "Ancient Rock Fortress",
    description: "UNESCO World Heritage site with ruins",
    locations: [
      {
        location_name: "Lion Rock",
        location_image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
        location_description: "Main fortress area with palace ruins"
      },
      {
        location_name: "Water Gardens",
        location_image: "https://images.unsplash.com/photo-1571205026096-edfaa42f5ed8?w=400",
        location_description: "Ancient hydraulic garden system"
      }
    ],
    time_to_visit: "December to April (dry season)",
    climate_description: "Tropical, hot and humid year-round",
    tips: [
      { tips_details: "Start climbing early morning to avoid heat" },
      { tips_details: "Wear comfortable shoes for climbing" },
      { tips_details: "Bring water and sun protection" }
    ],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    _id: "2",
    destination_id: "dest002",
    destination_name: "Ella",
    sub_description: "Mountain Paradise",
    description: "Scenic hill town with tea plantations",
    locations: [
      {
        location_name: "Nine Arch Bridge",
        location_image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400",
        location_description: "Iconic railway bridge in the jungle"
      }
    ],
    time_to_visit: "January to March (best weather)",
    climate_description: "Cool mountain climate, misty",
    tips: [
      { tips_details: "Try the famous train ride from Kandy" },
      { tips_details: "Hike Little Adam's Peak at sunrise" }
    ],
    createdAt: "2024-01-16T10:00:00Z",
    updatedAt: "2024-01-16T10:00:00Z"
  }
];

export default function Destination_Details() {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const handleEdit = (id: string) => {
    console.log("Edit destination detail:", id);
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-3">
      <h1 className="text-2xl font-bold mb-3">Destination Details</h1>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800/60 border-b-2 border-white/10">
              <th className="p-3 text-left text-sm font-semibold w-12"></th>
              <th className="p-3 text-left text-sm font-semibold">#</th>
              <th className="p-3 text-left text-sm font-semibold">Destination Name</th>
              <th className="p-3 text-left text-sm font-semibold">Sub Description</th>
              <th className="p-3 text-left text-sm font-semibold">Description</th>
              <th className="p-3 text-center text-sm font-semibold">Locations</th>
              <th className="p-3 text-center text-sm font-semibold">Tips</th>
              <th className="p-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinationDetails.map((detail, index) => (
              <>
                {/* Main Row */}
                <tr
                  key={detail._id}
                  className="border-b border-white/10 hover:bg-gray-800/30 transition-colors duration-200"
                >
                  {/* Expand Button */}
                  <td className="p-3">
                    <button
                      onClick={() => toggleRow(detail._id)}
                      className="p-1 hover:bg-gray-700 rounded transition-colors"
                    >
                      {expandedRows.has(detail._id) ? (
                        <FiChevronUp className="text-xl" />
                      ) : (
                        <FiChevronDown className="text-xl" />
                      )}
                    </button>
                  </td>

                  {/* Row Counter */}
                  <td className="p-3 text-sm">{index + 1}</td>

                  {/* Destination Name */}
                  <td className="p-3 text-sm font-medium">{detail.destination_name}</td>

                  {/* Sub Description */}
                  <td className="p-3 text-sm text-gray-300">{detail.sub_description}</td>

                  {/* Description */}
                  <td className="p-3 text-sm text-gray-300 max-w-xs">
                    <p className="line-clamp-2">{detail.description}</p>
                  </td>

                  {/* Locations Count */}
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-xs">
                      {detail.locations.length} locations
                    </span>
                  </td>

                  {/* Tips Count */}
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md text-xs">
                      {detail.tips.length} tips
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(detail._id)}
                        className="p-2 bg-blue-500/20 cursor-pointer hover:bg-blue-500/40 text-blue-400 rounded-md transition-colors duration-200"
                        title="Edit"
                      >
                        <FiEdit className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Expanded Details Row */}
                {expandedRows.has(detail._id) && (
                  <tr className="bg-gray-800/20">
                    <td colSpan={8} className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Locations Section */}
                        <div className="space-y-2">
                          <h3 className="font-semibold flex items-center gap-2 text-green-400">
                            <FiMapPin /> Locations ({detail.locations.length})
                          </h3>
                          <div className="space-y-2">
                            {detail.locations.map((location, idx) => (
                              <div
                                key={idx}
                                className="p-3 bg-gray-800/40 rounded-md border border-white/10 flex gap-3"
                              >
                                <img
                                  src={location.location_image}
                                  alt={location.location_name}
                                  className="w-16 h-16 object-cover rounded-md"
                                />
                                <div className="flex-1">
                                  <h4 className="font-medium text-sm">{location.location_name}</h4>
                                  <p className="text-xs text-gray-400">{location.location_description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Column: Time, Climate, Tips */}
                        <div className="space-y-3">
                          {/* Time to Visit */}
                          <div className="p-3 bg-gray-800/40 rounded-md border border-white/10">
                            <h3 className="font-semibold flex items-center gap-2 text-blue-400 mb-1">
                              <FiClock /> Best Time to Visit
                            </h3>
                            <p className="text-sm text-gray-300">{detail.time_to_visit}</p>
                          </div>

                          {/* Climate */}
                          <div className="p-3 bg-gray-800/40 rounded-md border border-white/10">
                            <h3 className="font-semibold flex items-center gap-2 text-cyan-400 mb-1">
                              <FiCloud /> Climate
                            </h3>
                            <p className="text-sm text-gray-300">{detail.climate_description}</p>
                          </div>

                          {/* Tips */}
                          <div className="p-3 bg-gray-800/40 rounded-md border border-white/10">
                            <h3 className="font-semibold flex items-center gap-2 text-purple-400 mb-2">
                              <FaRegLightbulb/> Travel Tips ({detail.tips.length})
                            </h3>
                            <ul className="space-y-1">
                              {detail.tips.map((tip, idx) => (
                                <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                  <span className="text-purple-400 mt-1">•</span>
                                  <span>{tip.tips_details}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {destinationDetails.length === 0 && (
          <div className="w-full p-10 text-center text-gray-400">
            <p>No destination details found.</p>
          </div>
        )}
      </div>
    </div>
  );
}