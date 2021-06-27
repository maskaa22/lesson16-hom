
import './App.css';
import {useEffect, useState} from "react";
import Posts from "./components/posts/Posts";
import {getPost, getPosts} from "./servises/API";
import PostDetails from "./components/postDetails/PostDetails";

function App() {
  let [posts, setPosts] = useState([]);
    useEffect(()=> {
        getPosts().then(respons => {
            setPosts(respons.data);

        })
    } ,[]);

    let [postDetails, setPostDetails] = useState(null);

    function selectPost(id){
        console.log(id);
        getPost(id).then(({data}) => {
            setPostDetails(data)
        });
    }

    return (
    <div>
        <Posts items={posts} selectPost={selectPost}/>
        <hr/>
        {
            postDetails && <PostDetails item={postDetails}/>
        }
    </div>
  );
}

export default App;
