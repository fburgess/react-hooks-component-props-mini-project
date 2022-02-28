import React from "react";
import Article from "./Article";
// import blogData from "../data/blog";

function ArticleList ({posts}) {
    
    const items = posts.map((post) => {
        console.log(post)
        return <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} key={post.id}/>
      });
    return (
        <main> 
            {items}
        </main>
    )
}

 export default ArticleList; 