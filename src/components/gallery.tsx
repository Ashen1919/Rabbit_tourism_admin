import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit, FiTrash2, FiChevronDown, FiChevronUp, FiImage } from "react-icons/fi";
import { Link } from "react-router-dom";

// TypeScript interfaces matching your schema
interface Image {
  image_urls: string;
}

interface GalleryItem {
  _id: string;
  destination_name: string;
  images: Image[];
  createdAt: string;
  updatedAt: string;
}

// Sample data matching your schema
const galleryItems: GalleryItem[] = [
  {
    _id: "1",
    destination_name: "Sigiriya",
    images: [
      { image_urls: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1571205026096-edfaa42f5ed8?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1588497859490-85d1c17db96d?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400" }
    ],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    _id: "2",
    destination_name: "Ella",
    images: [
      { image_urls: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=400" }
    ],
    createdAt: "2024-01-16T10:00:00Z",
    updatedAt: "2024-01-16T10:00:00Z"
  },
  {
    _id: "3",
    destination_name: "Galle Fort",
    images: [
      { image_urls: "https://images.unsplash.com/photo-1580452632485-ff8fc8e3c2b9?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1585159812596-fac104f2f069?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400" }
    ],
    createdAt: "2024-01-17T10:00:00Z",
    updatedAt: "2024-01-17T10:00:00Z"
  },
  {
    _id: "4",
    destination_name: "Mirissa Beach",
    images: [
      { image_urls: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400" }
    ],
    createdAt: "2024-01-18T10:00:00Z",
    updatedAt: "2024-01-18T10:00:00Z"
  },
  {
    _id: "5",
    destination_name: "Kandy",
    images: [
      { image_urls: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=400" },
      { image_urls: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400" }
    ],
    createdAt: "2024-01-19T10:00:00Z",
    updatedAt: "2024-01-19T10:00:00Z"
  }
];

export default function Gallery() {
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
    console.log("Edit gallery item:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete gallery item:", id);
  };

  return (
    <div className="w-full h-auto flex flex-col space-y-3">
      <div className="w-full flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <Link to={"/admin/add-gallery"}>
          <div className="w-auto h-auto p-2 border-2 items-center border-white/10 bg-gray-700/40 flex gap-2 rounded-[10px] duration-300 hover:bg-transparent">
            <FaPlus />
            <h1>Add Gallery Item</h1>
          </div>
        </Link>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800/60 border-b-2 border-white/10">
              <th className="p-3 text-left text-sm font-semibold w-12"></th>
              <th className="p-3 text-left text-sm font-semibold">#</th>
              <th className="p-3 text-left text-sm font-semibold">Destination Name</th>
              <th className="p-3 text-left text-sm font-semibold">Preview Images</th>
              <th className="p-3 text-center text-sm font-semibold">Total Images</th>
              <th className="p-3 text-center text-sm font-semibold">Created</th>
              <th className="p-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleryItems.map((item, index) => (
              <>
                {/* Main Row */}
                <tr
                  key={item._id}
                  className="border-b border-white/10 hover:bg-gray-800/30 transition-colors duration-200"
                >
                  {/* Expand Button */}
                  <td className="p-3">
                    <button
                      onClick={() => toggleRow(item._id)}
                      className="p-1 hover:bg-gray-700 rounded transition-colors"
                    >
                      {expandedRows.has(item._id) ? (
                        <FiChevronUp className="text-xl" />
                      ) : (
                        <FiChevronDown className="text-xl" />
                      )}
                    </button>
                  </td>

                  {/* Row Counter */}
                  <td className="p-3 text-sm">{index + 1}</td>

                  {/* Destination Name */}
                  <td className="p-3 text-sm font-medium">
                    {item.destination_name}
                  </td>

                  {/* Preview Images (First 3) */}
                  <td className="p-3">
                    <div className="flex gap-2">
                      {item.images.slice(0, 3).map((img, idx) => (
                        <img
                          key={idx}
                          src={img.image_urls}
                          alt={`${item.destination_name} ${idx + 1}`}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      ))}
                      {item.images.length > 3 && (
                        <div className="w-16 h-16 bg-gray-700/50 rounded-md flex items-center justify-center border-2 border-white/10">
                          <span className="text-xs text-gray-400">+{item.images.length - 3}</span>
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Total Images */}
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <FiImage className="text-purple-400" />
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md text-xs font-medium">
                        {item.images.length} images
                      </span>
                    </div>
                  </td>

                  {/* Created Date */}
                  <td className="p-3 text-center text-sm text-gray-400">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(item._id)}
                        className="p-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 rounded-md transition-colors duration-200"
                        title="Edit"
                      >
                        <FiEdit className="text-lg" />
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors duration-200"
                        title="Delete"
                      >
                        <FiTrash2 className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Expanded Gallery View */}
                {expandedRows.has(item._id) && (
                  <tr className="bg-gray-800/20">
                    <td colSpan={7} className="p-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-purple-400 flex items-center gap-2">
                          <FiImage /> All Images ({item.images.length})
                        </h3>
                        
                        {/* Gallery Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                          {item.images.map((img, idx) => (
                            <div
                              key={idx}
                              className="relative group aspect-square rounded-lg overflow-hidden border-2 border-white/10 hover:border-purple-400/50 transition-all duration-300"
                            >
                              <img
                                src={img.image_urls}
                                alt={`${item.destination_name} ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              
                              {/* Overlay on hover */}
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-sm font-medium">
                                  Image {idx + 1}
                                </span>
                              </div>
                            </div>
                          ))}
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
        {galleryItems.length === 0 && (
          <div className="w-full p-10 text-center text-gray-400">
            <FiImage className="text-5xl mx-auto mb-3 opacity-50" />
            <p>No gallery items found. Create your first gallery!</p>
          </div>
        )}
      </div>
    </div>
  );
}