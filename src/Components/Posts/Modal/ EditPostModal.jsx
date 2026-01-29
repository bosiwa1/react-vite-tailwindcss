

// we just call here onClose1 function that created in PostList  to pass as parameter 
// use onClose1 function in cnacel buttom when you  onclick cancel it will call this onClose1 function 

const  EditPostModal = ({onClose1}) =>{

  return(

   <>
    <div className="modal" id="editPostModal">
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 relative">
              <div className="loader"></div> 
                <h2 className="text-2xl mb-4">Edit Post</h2>
                <form>
                <div className="mb-4 flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded w-full p-2"
                      value="Sample Post Title"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      className="border border-gray-300 rounded w-full p-2"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="1">Category 1</option> 
                      <option value="2">Category 2</option> 
                     
                    </select>
                  </div>
                </div>
        
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <textarea className="border border-gray-300 rounded w-full p-2" rows="6" required>Sample post content goes here
                  </textarea>
                </div>
        
                <div className="mb-4 flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Featured Image</label>
                    <input
                      type="file"
                    />
                    <br /> <br />
                    <img src="http://localhost/wp/wp-tuts/wp-content/uploads/2024/10/default-featured-
                    image.jpg" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Status</label>
                    <select className="border border-gray-300 rounded w-full p-2"
                      required >
                      <option value="publish">Publish</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>
        
                <div className="flex justify-end">
                  <button type="button" onClick={onClose1}
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"   >
                    Cancel
                  </button>
                  <button
                    type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" >
                    Update
                  </button>
                </div>
                </form>
            </div>
        </div>
    </div>



    
  </>


  ); 




};
export default  EditPostModal 