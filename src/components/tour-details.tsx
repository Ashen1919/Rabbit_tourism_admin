import { useState } from "react";
import { FiEdit, FiChevronDown, FiChevronUp, FiMapPin, FiCalendar, FiDollarSign, FiStar, FiCheckCircle, FiXCircle } from "react-icons/fi";

// TypeScript interfaces matching your schema
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

interface TourDetail {
  _id: string;
  tour_id: string;
  tour_name: string;
  tour_location: string;
  total_days: number;
  tour_image: string;
  tour_sub_description: string;
  tour_overview: string;
  highlights: Highlight[];
  tour_plan: TourPlan[];
  what_include: Include[];
  what_not_include: NotInclude[];
  starting_price: number;
  single_price: number;
  group_price: number;
  destination_name: string;
  createdAt: string;
  updatedAt: string;
}

// Sample data matching your schema
const tourDetails: TourDetail[] = [
  {
    _id: "1",
    tour_id: "tour001",
    tour_name: "Cultural Triangle Explorer",
    tour_location: "Central Province",
    total_days: 7,
    tour_image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    tour_sub_description: "Ancient Cities & World Heritage Sites",
    tour_overview: "Explore the magnificent ancient cities of Anuradhapura, Polonnaruwa, and the iconic Sigiriya Rock Fortress with expert guides",
    highlights: [
      { points: "Visit UNESCO World Heritage Sites including Sigiriya and Dambulla" },
      { points: "Experience traditional Sri Lankan village life" },
      { points: "Climb the famous Lion Rock at sunrise" }
    ],
    tour_plan: [
      { day: 1, description: "Arrival & Colombo City Tour", accommodation: "Colombo Hotel", mealtime: "D" },
      { day: 2, description: "Colombo to Sigiriya", accommodation: "Sigiriya Resort", mealtime: "B,L,D" },
      { day: 3, description: "Sigiriya Rock & Village Tour", accommodation: "Sigiriya Resort", mealtime: "B,L,D" }
    ],
    what_include: [
      { include_points: "All accommodation with breakfast" },
      { include_points: "Professional English-speaking guide" },
      { include_points: "Air-conditioned vehicle with driver" }
    ],
    what_not_include: [
      { not_include_points: "International flights" },
      { not_include_points: "Travel insurance" },
      { not_include_points: "Personal expenses and tips" }
    ],
    starting_price: 500,
    single_price: 850,
    group_price: 650,
    destination_name: "Sigiriya",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    _id: "2",
    tour_id: "tour002",
    tour_name: "Hill Country Tea Trail",
    tour_location: "Uva Province",
    total_days: 5,
    tour_image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400",
    tour_sub_description: "Misty Mountains & Tea Plantations",
    tour_overview: "Journey through scenic tea estates, visit Ella's famous Nine Arch Bridge, and enjoy the most beautiful train ride in the world",
    highlights: [
      { points: "Scenic train journey from Kandy to Ella" },
      { points: "Visit working tea factory and taste fresh Ceylon tea" },
      { points: "Hike to Little Adam's Peak and Ella Rock" }
    ],
    tour_plan: [
      { day: 1, description: "Kandy to Nuwara Eliya", accommodation: "Tea Estate Hotel", mealtime: "B,L,D" },
      { day: 2, description: "Tea Factory Tour", accommodation: "Tea Estate Hotel", mealtime: "B,L,D" },
      { day: 3, description: "Train to Ella", accommodation: "Ella Guesthouse", mealtime: "B,D" }
    ],
    what_include: [
      { include_points: "Train tickets (Kandy to Ella)" },
      { include_points: "Tea factory tour and tasting" },
      { include_points: "All entrance fees to attractions" }
    ],
    what_not_include: [
      { not_include_points: "Lunch on Day 3" },
      { not_include_points: "Optional activities like zip-lining" }
    ],
    starting_price: 400,
    single_price: 650,
    group_price: 550,
    destination_name: "Ella",
    createdAt: "2024-01-16T10:00:00Z",
    updatedAt: "2024-01-16T10:00:00Z"
  }
];

export default function Tour_Details() {
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
    console.log("Edit tour detail:", id);
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-3">
      <h1 className="text-2xl font-bold">Tour Details</h1>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800/60 border-b-2 border-white/10">
              <th className="p-3 text-left text-sm font-semibold w-12"></th>
              <th className="p-3 text-left text-sm font-semibold">#</th>
              <th className="p-3 text-left text-sm font-semibold">Image</th>
              <th className="p-3 text-left text-sm font-semibold">Tour Name</th>
              <th className="p-3 text-left text-sm font-semibold">Location</th>
              <th className="p-3 text-left text-sm font-semibold">Destination</th>
              <th className="p-3 text-center text-sm font-semibold">Duration</th>
              <th className="p-3 text-left text-sm font-semibold">Sub Description</th>
              <th className="p-3 text-center text-sm font-semibold">Highlights</th>
              <th className="p-3 text-center text-sm font-semibold">Days</th>
              <th className="p-3 text-center text-sm font-semibold">Prices</th>
              <th className="p-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tourDetails.map((detail, index) => (
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

                  {/* Tour Image */}
                  <td className="p-3">
                    <img
                      src={detail.tour_image}
                      alt={detail.tour_name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </td>

                  {/* Tour Name */}
                  <td className="p-3 text-sm font-medium max-w-xs">
                    {detail.tour_name}
                  </td>

                  {/* Location */}
                  <td className="p-3 text-sm">
                    <div className="flex items-center gap-1 text-green-400">
                      <FiMapPin />
                      <span>{detail.tour_location}</span>
                    </div>
                  </td>

                  {/* Destination */}
                  <td className="p-3 text-sm text-gray-300">
                    {detail.destination_name}
                  </td>

                  {/* Total Days */}
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center gap-1 text-sm">
                      <FiCalendar className="text-blue-400" />
                      <span className="font-medium">{detail.total_days} days</span>
                    </div>
                  </td>

                  {/* Sub Description */}
                  <td className="p-3 text-sm text-gray-300 max-w-xs">
                    <p className="line-clamp-2">{detail.tour_sub_description}</p>
                  </td>

                  {/* Highlights Count */}
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-xs">
                      {detail.highlights.length} points
                    </span>
                  </td>

                  {/* Tour Plan Days Count */}
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md text-xs">
                      {detail.tour_plan.length} days
                    </span>
                  </td>

                  {/* Prices */}
                  <td className="p-3 text-center">
                    <div className="flex flex-col gap-1 text-xs">
                      <span className="text-emerald-400 font-medium">${detail.starting_price}</span>
                      <span className="text-gray-400">Start</span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(detail._id)}
                        className="p-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 rounded-md transition-colors duration-200"
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
                    <td colSpan={12} className="p-4">
                      <div className="space-y-4">
                        {/* Overview */}
                        <div className="p-3 bg-gray-800/40 rounded-md border border-white/10">
                          <h3 className="font-semibold text-blue-400 mb-2">Tour Overview</h3>
                          <p className="text-sm text-gray-300">{detail.tour_overview}</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {/* Highlights */}
                          <div className="p-3 bg-gray-800/40 rounded-md border border-white/10">
                            <h3 className="font-semibold flex items-center gap-2 text-yellow-400 mb-2">
                              <FiStar /> Highlights ({detail.highlights.length})
                            </h3>
                            <ul className="space-y-1">
                              {detail.highlights.map((highlight, idx) => (
                                <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                  <span className="text-yellow-400 mt-1">★</span>
                                  <span>{highlight.points}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Pricing Breakdown */}
                          <div className="p-3 bg-gray-800/40 rounded-md border border-white/10">
                            <h3 className="font-semibold flex items-center gap-2 text-emerald-400 mb-2">
                              <FiDollarSign /> Pricing Details
                            </h3>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">Starting Price:</span>
                                <span className="font-semibold text-emerald-400">${detail.starting_price}</span>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">Single Price:</span>
                                <span className="font-semibold text-blue-400">${detail.single_price}</span>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">Group Price:</span>
                                <span className="font-semibold text-purple-400">${detail.group_price}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Tour Plan */}
                        <div className="p-3 bg-gray-800/40 rounded-md border border-white/10">
                          <h3 className="font-semibold flex items-center gap-2 text-green-400 mb-3">
                            <FiCalendar /> Day-by-Day Itinerary
                          </h3>
                          <div className="space-y-2">
                            {detail.tour_plan.map((plan) => (
                              <div
                                key={plan.day}
                                className="p-3 bg-gray-900/50 rounded border border-white/5"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="shrink-0 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-green-400 font-bold">Day {plan.day}</span>
                                  </div>
                                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <div>
                                      <p className="text-xs text-gray-400">Activity</p>
                                      <p className="text-sm text-white">{plan.description}</p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-gray-400">Accommodation</p>
                                      <p className="text-sm text-white">{plan.accommodation}</p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-gray-400">Meals</p>
                                      <p className="text-sm text-white">{plan.mealtime}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {/* What's Included */}
                          <div className="p-3 bg-gray-800/40 rounded-md border border-white/10">
                            <h3 className="font-semibold flex items-center gap-2 text-emerald-400 mb-2">
                              <FiCheckCircle /> What's Included
                            </h3>
                            <ul className="space-y-1">
                              {detail.what_include.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                  <FiCheckCircle className="text-emerald-400 mt-0.5 shrink-0" />
                                  <span>{item.include_points}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* What's Not Included */}
                          <div className="p-3 bg-gray-800/40 rounded-md border border-white/10">
                            <h3 className="font-semibold flex items-center gap-2 text-red-400 mb-2">
                              <FiXCircle /> What's Not Included
                            </h3>
                            <ul className="space-y-1">
                              {detail.what_not_include.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                  <FiXCircle className="text-red-400 mt-0.5 shrink-0" />
                                  <span>{item.not_include_points}</span>
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
        {tourDetails.length === 0 && (
          <div className="w-full p-10 text-center text-gray-400">
            <p>No tour details found.</p>
          </div>
        )}
      </div>
    </div>
  );
}