import { useState } from "react";

const Bodypop = (props) => {

   const [title, setTitle] = useState("")
   const [body, setBody] = useState("")
   const [author, setAuthor] = useState("")

   const handleSubmit =(e)=> {
      e.preventDefault()
      const blog = {title, body, author}
   }

    return ( 
       <div>
          <div  className="bodypop">
           <h2>Add a new Blog </h2>
           <form onSubmit={handleSubmit}>
            <label>Blog Title</label>
            <input 
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value) }
            required>
            </input>
            <label>Blog Body</label>
            <textarea
            value={body}
            onChange={(e)=>setBody(e.target.value) }
            required>
            </textarea>
            <label>Blog Body</label>
            <select
            value={author}
            onChange={(e)=>setAuthor(e.target.value) } >
            <option value="Written by mario">Mario</option>
            <option value="Written by yoshi">Yoshi</option>
            <option value="Written by ninja">Ninja</option>
            </select>
            <button>Add Blog</button>
           </form>
        </div> 
        <div className="newBlog">
         <h2> {title}</h2>
         <p> {body}</p>
         <h5> {author}</h5>
        </div>
       </div>
       
     );
}
 
export default Bodypop;