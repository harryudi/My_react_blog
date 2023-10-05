const BlogLists = ({blogsP, titleP}) => {

    // const blogs =props.blogs;
    // const title=props.title
    return (
        <div className="watchu">
            <h1>{titleP}</h1>
            {blogsP.map((blogOutput) => (
            <div className="blog-preview" key={blogOutput.id}>
                <h2>{blogOutput.title}</h2>
                <p>Written by {blogOutput.author}</p>
            </div>
            

        ))}
        </div>
        
    );
}
 
export default BlogLists;