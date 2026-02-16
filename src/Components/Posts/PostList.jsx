import { useEffect, useState } from "react";
import AdPostModal from "./Modal/AdPostModal";
// keep the same import path used elsewhere in this repo: the file currently includes a leading-space in its filename
import EditPostModal from "./Modal/ EditPostModal";

const PostList = () => {
  // show/hide state for add modal
  const [showModal, setShowModal] = useState(false);
  // show/hide state for edit modal
  const [showEdit, setShowEdit] = useState(false);

  // posts array (initialize to empty array to avoid map on undefined)
  const [postendpoint, setPost] = useState([]);

  // fetch posts from WordPress REST API
  const fetchWordpressPost = async () => {
    try {
      const apiResponse = await fetch("https://dlbwebservice.com/wp-json/wp/v2/posts/", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await apiResponse.json();
      setPost(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  // run fetch once on mount
  useEffect(() => {
    fetchWordpressPost();
  }, []);

  return (
    <>
      {/* Add / Edit modals */}
      {showModal && <AdPostModal onClose={() => setShowModal(false)} />}
      {showEdit && <EditPostModal onClose1={() => setShowEdit(false)} />}

      <div className="container mx-auto p-4">
        <div className="loader" />

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Posts</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setShowModal(true)}>
            Add Post
          </button>
        </div>

        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Featured Image</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {postendpoint?.length === 0 && (
              <tr>
                <td className="border px-4 py-2 text-center" colSpan={6}>
                  No posts found
                </td>
              </tr>
            )}

            {postendpoint?.map((singlePost) => (
              <tr className="text-center" key={singlePost.id}>
                <td className="border px-4 py-2">{singlePost.id}</td>
                <td className="border px-4 py-2">{singlePost.title?.rendered}</td>
                <td className="border px-4 py-2">
                  <button className="border px-4 py-2 bg-green-500 text-white">{singlePost.status}</button>
                </td>
                <td className="border px-4 py-2">{singlePost?.categories?.[0] ?? "no categories"}</td>
                <td className="border px-4 py-2">
                  <img
                    src={
                      singlePost?.featured_media_url ||
                      "http://localhost/learrn/cms/wp-content/uploads/2024/10/No-Image-Placeholder.png"
                    }
                    alt="Featured"
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2"
                    onClick={() => setShowEdit(true)}
                  >
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded" disabled>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PostList;
