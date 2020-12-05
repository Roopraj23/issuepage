import React, {useEffect} from "react";

function Posts({posts, loading}) {
    if(loading) {
        return <h2> Loading...</h2>;
    }
    
  return(
     <ul className="list-group mb-4">
         {posts.map(post => (
             <li key={post.id} className="list-group-item">
                <div className="title">{post.issue}</div> 
                 {/* <div className="pid">#{post.id}</div> */}
             </li>
             
         ))}
     </ul>
  );
};

export default Posts
