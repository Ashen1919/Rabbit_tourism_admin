import { FaPlus } from "react-icons/fa6";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

// Sample data - replace with your actual data
const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    label: "Historical Site",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    description:
      "Ancient rock fortress and palace ruins surrounded by gardens, ponds and other structures",
  },
  {
    id: 2,
    name: "Ella",
    label: "Mountain Town",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400",
    description:
      "Picturesque hill town known for tea plantations, hiking trails and scenic train rides",
  },
  {
    id: 3,
    name: "Galle Fort",
    label: "Colonial Heritage",
    image: "https://images.unsplash.com/photo-1580452632485-ff8fc8e3c2b9?w=400",
    description:
      "Historic 17th century Dutch fort with cobblestone streets and colonial architecture",
  },
  {
    id: 4,
    name: "Mirissa Beach",
    label: "Beach Resort",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
    description:
      "Beautiful crescent-shaped beach perfect for whale watching and surfing",
  },
];

export default function Destinations() {
  const handleEdit = (id: number) => {
    console.log("Edit destination:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete destination:", id);
    // Add your delete logic here
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-3">
      <div className="w-full flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Destinations</h1>
        <Link to={"/admin/add-destinations"}>
          <div className="w-auto h-auto p-2 border-2 items-center border-white/10 bg-gray-700/40 flex gap-2 rounded-[10px] duration-300 hover:bg-transparent">
            <FaPlus />
            <h1>Add Destination</h1>
          </div>
        </Link>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800/60 border-b-2 border-white/10">
              <th className="p-3 text-left text-sm font-semibold">#</th>
              <th className="p-3 text-left text-sm font-semibold">
                Destination Name
              </th>
              <th className="p-3 text-left text-sm font-semibold">Label</th>
              <th className="p-3 text-left text-sm font-semibold">Image</th>
              <th className="p-3 text-left text-sm font-semibold">
                Description
              </th>
              <th className="p-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((destination, index) => (
              <tr
                key={destination.id}
                className="border-b border-white/10 hover:bg-gray-800/30 transition-colors duration-200"
              >
                {/* Row Counter */}
                <td className="p-3 text-sm">{index + 1}</td>

                {/* Destination Name */}
                <td className="p-3 text-sm font-medium">{destination.name}</td>

                {/* Label */}
                <td className="p-3 text-sm">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs">
                    {destination.label}
                  </span>
                </td>

                {/* Image */}
                <td className="p-3">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>

                {/* Description */}
                <td className="p-3 text-sm text-gray-300 max-w-xs">
                  <p className="line-clamp-2">{destination.description}</p>
                </td>

                {/* Actions */}
                <td className="p-3">
                  <div className="flex justify-center gap-2">
                    <Link to={"/admin/add-destination-details"}>
                      <button
                        className="p-2 bg-green-500/20 cursor-pointer hover:bg-green-500/40 text-green-400 rounded-md transition-colors duration-200"
                        title="Add Destination Details"
                      >
                        <FaPlus className="text-lg" />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleEdit(destination.id)}
                      className="p-2 bg-blue-500/20 cursor-pointer hover:bg-blue-500/40 text-blue-400 rounded-md transition-colors duration-200"
                      title="Edit"
                    >
                      <FiEdit className="text-lg" />
                    </button>
                    <button
                      onClick={() => handleDelete(destination.id)}
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
        {destinations.length === 0 && (
          <div className="w-full p-10 text-center text-gray-400">
            <p>No destinations found. Create your first destination!</p>
          </div>
        )}
      </div>
    </div>
  );
}
