import {useState} from 'react';
import BlogLists from './BlogLists';


const Home = () => {
    
    
    const [blogs, setBlogs] = useState([
        {title:'My new webiste blog', body: 'I will be reaching out to each founder personally to extend every information and provide them with the necessary details for the calls. If you require any additional information or assistance in coordinating these interviews, please do not hesitate to reach out to me.', author: 'Maria', id:1 },
        {title:'My latest blog Content', body: 'I will be reaching out to each founder personally to extend every information and provide them with the necessary details for the calls. If you require any additional information or assistance in coordinating these interviews, please do not hesitate to reach out to me.', author: 'Jane', id:2 },
        {title:'My Shinny webiste is here', body: 'I will be reaching out to each founder personally to extend every information and provide them with the necessary details for the calls. If you require any additional information or assistance in coordinating these interviews, please do not hesitate to reach out to me.', author: 'Luke', id:3 },
        {title:'My Only one blog Content', body: 'I will be reaching out to each founder personally to extend every information and provide them with the necessary details for the calls. If you require any additional information or assistance in coordinating these interviews, please do not hesitate to reach out to me.', author: 'Maria', id:4 }
    ])               
    return (
        <div className="home">
            <BlogLists blogsP={blogs} titleP="All Blogs!" />
            <BlogLists blogsP={blogs.filter((blog)=>blog.author==='Maria') } titleP="Maria's Blogs!" />
        </div>
     );
}

export default Home;