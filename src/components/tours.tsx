import { FiEdit, FiTrash2, FiUsers, FiCalendar, FiDollarSign } from "react-icons/fi";

// TypeScript interface matching your schema
interface Tour {
  _id: string;
  tour_name: string;
  tour_category: string;
  total_days: number;
  max_passengers: number;
  tour_description: string;
  tour_price: number;
  tour_image: string;
  createdAt: string;
  updatedAt: string;
}

// Sample data matching your schema
const tours: Tour[] = [
  {
    _id: "1",
    tour_name: "Cultural Triangle Explorer",
    tour_category: "Cultural Heritage",
    total_days: 7,
    max_passengers: 15,
    tour_description: "Explore ancient cities of Anuradhapura, Polonnaruwa, and Sigiriya with expert guides",
    tour_price: 850,
    tour_image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    _id: "2",
    tour_name: "Hill Country Tea Trail",
    tour_category: "Nature & Adventure",
    total_days: 5,
    max_passengers: 12,
    tour_description: "Journey through misty tea plantations, waterfalls, and scenic train rides in Ella and Nuwara Eliya",
    tour_price: 650,
    tour_image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400",
    createdAt: "2024-01-16T10:00:00Z",
    updatedAt: "2024-01-16T10:00:00Z"
  },
  {
    _id: "3",
    tour_name: "Southern Coast Beach Safari",
    tour_category: "Beach & Wildlife",
    total_days: 4,
    max_passengers: 20,
    tour_description: "Relax on pristine beaches, enjoy whale watching in Mirissa, and explore Galle Fort",
    tour_price: 550,
    tour_image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
    createdAt: "2024-01-17T10:00:00Z",
    updatedAt: "2024-01-17T10:00:00Z"
  },
  {
    _id: "4",
    tour_name: "Wildlife & National Parks",
    tour_category: "Wildlife Safari",
    total_days: 6,
    max_passengers: 10,
    tour_description: "Safari adventures in Yala, Udawalawe, and Minneriya National Parks to spot leopards and elephants",
    tour_price: 920,
    tour_image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400",
    createdAt: "2024-01-18T10:00:00Z",
    updatedAt: "2024-01-18T10:00:00Z"
  },
  {
    _id: "5",
    tour_name: "Complete Island Adventure",
    tour_category: "Comprehensive Tour",
    total_days: 14,
    max_passengers: 8,
    tour_description: "Experience all of Sri Lanka - culture, nature, wildlife, beaches, and hill country in one epic journey",
    tour_price: 1850,
    tour_image: "https://images.unsplash.com/photo-1580452632485-ff8fc8e3c2b9?w=400",
    createdAt: "2024-01-19T10:00:00Z",
    updatedAt: "2024-01-19T10:00:00Z"
  }
];

export default function Tours() {
  const handleEdit = (id: string) => {
    console.log("Edit tour:", id);
    // Add your edit logic here
  };

  const handleDelete = (id: string) => {
    console.log("Delete tour:", id);
    // Add your delete logic here
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Cultural Heritage": "bg-amber-500/20 text-amber-400",
      "Nature & Adventure": "bg-green-500/20 text-green-400",
      "Beach & Wildlife": "bg-blue-500/20 text-blue-400",
      "Wildlife Safari": "bg-orange-500/20 text-orange-400",
      "Comprehensive Tour": "bg-purple-500/20 text-purple-400"
    };
    return colors[category] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-3">
      <h1 className="text-2xl font-bold">Tours</h1>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800/60 border-b-2 border-white/10">
              <th className="p-3 text-left text-sm font-semibold">#</th>
              <th className="p-3 text-left text-sm font-semibold">Image</th>
              <th className="p-3 text-left text-sm font-semibold">Tour Name</th>
              <th className="p-3 text-left text-sm font-semibold">Category</th>
              <th className="p-3 text-center text-sm font-semibold">Duration</th>
              <th className="p-3 text-center text-sm font-semibold">Max Passengers</th>
              <th className="p-3 text-left text-sm font-semibold">Description</th>
              <th className="p-3 text-center text-sm font-semibold">Price (USD)</th>
              <th className="p-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <tr
                key={tour._id}
                className="border-b border-white/10 hover:bg-gray-800/30 transition-colors duration-200"
              >
                {/* Row Counter */}
                <td className="p-3 text-sm">{index + 1}</td>

                {/* Tour Image */}
                <td className="p-3">
                  <img
                    src={tour.tour_image}
                    alt={tour.tour_name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </td>

                {/* Tour Name */}
                <td className="p-3 text-sm font-medium max-w-xs">
                  {tour.tour_name}
                </td>

                {/* Category */}
                <td className="p-3 text-sm">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(tour.tour_category)}`}>
                    {tour.tour_category}
                  </span>
                </td>

                {/* Total Days */}
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-sm">
                    <FiCalendar className="text-blue-400" />
                    <span className="font-medium">{tour.total_days} days</span>
                  </div>
                </td>

                {/* Max Passengers */}
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-sm">
                    <FiUsers className="text-green-400" />
                    <span className="font-medium">{tour.max_passengers}</span>
                  </div>
                </td>

                {/* Description */}
                <td className="p-3 text-sm text-gray-300 max-w-sm">
                  <p className="line-clamp-2">{tour.tour_description}</p>
                </td>

                {/* Price */}
                <td className="p-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-sm font-semibold text-emerald-400">
                    <FiDollarSign />
                    <span>{tour.tour_price}</span>
                  </div>
                </td>

                {/* Actions */}
                <td className="p-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(tour._id)}
                      className="p-2 bg-blue-500/20 cursor-pointer hover:bg-blue-500/40 text-blue-400 rounded-md transition-colors duration-200"
                      title="Edit"
                    >
                      <FiEdit className="text-lg" />
                    </button>
                    <button
                      onClick={() => handleDelete(tour._id)}
                      className="p-2 bg-red-500/20 cursor-pointer hover:bg-red-500/40 text-red-400 rounded-md transition-colors duration-200"
                      title="Delete"
                    >
                      <FiTrash2 className="text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {tours.length === 0 && (
          <div className="w-full p-10 text-center text-gray-400">
            <p>No tours found. Create your first tour!</p>
          </div>
        )}
      </div>
    </div>
  );
}