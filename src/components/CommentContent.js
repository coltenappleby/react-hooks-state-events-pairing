function CommentContent({comments}){


    return (
        <div>

            <h1> {comments.length} Comments </h1>
            {comments.map( (comment) => { 
                return(
                    <div key = {comment.id}>
                    <h2> {comment.user} </h2>
                    <p> {comment.comment} </p>

                    </div>
                        
                    )
                })
            }


        </div>
    )
}


export default CommentContent;