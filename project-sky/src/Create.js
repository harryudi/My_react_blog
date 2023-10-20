import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Luiji');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit =(e)=> {
        e.preventDefault();
        const blog = {title, body, author}

        setIsPending(true);

        fetch('http://localhost:8000/Blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('New blog post added');
            setIsPending(false);
            history.push('./')
        })
    
    }
    return (
        <div className="create">
            <h2>Create a new post</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog Title:</label>
                <input type="text" required value= {title} onChange={(e)=> {setTitle(e.target.value)}}/>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=> {setBody(e.target.value)}}></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e)=> {setAuthor(e.target.value)}}>
                    <option value="Mario">Mario</option>
                    <option value="Luiji">Luiji</option>
                </select>
                {!isPending && <button>Add Blog!</button>}
                {isPending && <button disabled>Adding Blog.....</button>}

                <div>Written by {title}</div>
                <div>Read more here {body}</div>
                
            </form>
        </div>
    );
}
 
export default Create;