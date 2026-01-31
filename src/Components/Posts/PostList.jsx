import { useEffect, useState } from "react";
import AdPostModal from "./Modal/AdPostModal";
import EditPostModal from "./Modal/ EditPostModal";


const PostList = () => {

   const [showModal, setShowModal] = useState(false);
   const [showEdit, setShowEdit] = useState(false);

   const [postendpoint , setPost] = useState();

   const fectWordpressPost= async ()=>{
      try {
        const apiResponse= await fetch("https://dlbwebservice.com/wp-json/wp/v2/posts/",{
          "methode": "GET",
          "headers": {
            "content-type": "application/json"
          }
        
        })
        const data = await apiResponse.json();
        setPost(date)
        
      } catch (error) {
        console.log(error)
        
      }
   }

   useEffect ( ()=> {

    fectWordpressPost(); 

   },[]

   )


  

  // we creaat function by expression , onclose= {what is doing , it set to false , mean done show }
  return (
    <>
     
    {showModal && <AdPostModal onClose={() => setShowModal(false)} />}
    {showEdit && <EditPostModal onClose1={() => setShowEdit(false)} />}


    
      <div className="container mx-auto p-4">

          <div className="loader"></div> 
          <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Posts</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded"  
          onClick={() => setShowModal(true)}> Add Post
          </button>
          </div>
          <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Title</th>
                  <th class="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Featured Image</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>

                {
                  postendpoint.map(singlePost =>(

                    <tr className="text-center">
                  <td className="border px-4 py-2">{singlePost.id}</td>
                  <td className="border px-4 py-2">{singlePost.title.rendered}</td>
                  <td className="border px-4 py-2">
                    <button className="border px-4 py-2 bg-green-500 text-white">{singlePost.status}</button>
                  </td>
                  <td className="border px-4 py-2">{singlePost?.categories[0] || "no categories"}</td>
                  <td className="border px-4 py-2">
                    <img src="http://localhost/learrn/cms/wp-content/uploads/2024/10/No-Image-Placeholder.png" alt="Featured"
                     className="w-16 h-16 object-cover"/>
                  </td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 
                    rounded mr-2 "  onClick={() => setShowEdit(true)} > Edit</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold 
                    py-1 px-3 rounde d" 
                    disabled>Delete</button>
                  </td>
                </tr>



                  ))



                }

                
              </tbody>
          </table>   
          
          
      </div>
    </>
  );
};


export default PostList;
