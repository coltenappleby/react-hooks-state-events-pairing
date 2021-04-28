import { useState } from 'react'
import Comment from "./Comment";


function CommentContent({comments}){

    let [searchText, setSearchText] = useState("")
    let [commentIds, setValidCommentIds] = useState(comments.map((comment) => comment.id))

    function handleSearchSubmit(event){
        event.preventDefault()
        setSearchText(event.target.username.value)
    }

    let filteredComments = comments.filter(comment => comment.user.includes(searchText) && commentIds.includes(comment.id))


    function handleDeleteComment(event){
        setValidCommentIds((currentIds) => currentIds.filter(id => id !== event.target.id))
    }

    return (
        <div>

            <h1> {comments.length} Comments </h1>

            <form onSubmit={handleSearchSubmit}>
                <input type="text" name="username" placeholder="Search for user"></input>
                <input type="submit" value="Submit"></input>
            </form>

            {filteredComments.map( (comment) => { 
                return (
                    <>
                    <Comment key={comment.id} {...comment}/>
                    <button id={comment.id} onClick={handleDeleteComment}>Delete</button>
                    </>
                )
                })
            }


        </div>
    )
}


export default CommentContent;