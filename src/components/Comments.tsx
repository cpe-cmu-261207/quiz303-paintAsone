import React from "react";
import Replies from "./Replies";

type CommentType = {
    username: string;
    userImagePath: string;
    commentText: string;
    likeNum: number;
    replies: CommentType[]
}

const Comments_2 = ({username,userImagePath,commentText,likeNum,replies} : CommentType) =>{


    return(
        <div className="">

            <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
                <div className="bg-gray-200 rounded-lg p-2">
                <p className="font-semibold">{username}</p>
                <p>{commentText}</p>
                {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                <div style={(likeNum>0)? {visibility:"visible"}:{visibility:"hidden"}} className='flex items-center'>
                    <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                    <p className='text-gray-500'>{likeNum} คน</p>
                </div>
                </div>
                
            </div>
            {replies.map(x => <Replies username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} likeNum={x.likeNum} replies={x.replies}/>)}

        </div>
    )
}

export default Comments_2