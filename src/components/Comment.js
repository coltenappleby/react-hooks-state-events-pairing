import Button from './VoteButton'

function Comment({comment, user}){


  return(
    <div> 
        <h2> {user} </h2>
        <p> {comment} </p>
        <Button votes = {0} emoji = '👍' /> 
        <Button votes = {0} emoji = '👎' /> 
        <br/>
    </div>
        
    )
}

export default Comment 