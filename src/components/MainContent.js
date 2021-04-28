import Button from './VoteButton'
import React, {useState} from 'react';
import CommentContent from './CommentContent'


function MainContent(props) {
    const {title, embedUrl, views, createdAt, downvotes, upvotes, comments} = props

    let [isCommentShown, setComment] = useState(true)

    function handleCommentClick(){
        setComment((isCommentShown) = !isCommentShown)



    }

    return (
        <div className="video">
            <iframe
            width="919"
            height="525"
            src = {embedUrl}
            frameborder="0"
            allowfullscreen
            title={title}
            />

            <h1> {title} </h1>
            <p> Views {views} | Uploaded: {createdAt} </p>

            <Button votes = {upvotes} emoji = '👍' /> 
            <Button votes = {downvotes} emoji = '👎' /> 

            <br></br>

            <button onClick={handleCommentClick}> {isCommentShown ? "Hide" : "Show"} Comments </button>

            
            {isCommentShown ? <CommentContent comments = {comments} /> : null}
            



        </div>
        );
    
}


export default MainContent;