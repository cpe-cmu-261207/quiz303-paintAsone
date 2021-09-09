import React from "react";
import Comments_2 from "./Comments";
import Replies from "./Replies";

type CommentType = {
    username: string;
    userImagePath: string;
    commentText: string;
    likeNum: number;
    replies: CommentType[]
}


const Comments = () =>{

    const comments: CommentType[] = [
        {
          username: 'Lisa',
          userImagePath: '/profileImages/lisa.jpg',
          commentText: 'จริงค่า',
          likeNum: 999,
          replies: [
            {
              username: 'หมาน้อย',
              userImagePath: '/profileImages/puppy.jpg',
              commentText: 'จริงค้าบบบบบบบบ',
              likeNum: 0,
              replies: []
            },
            {
              username: 'แมวตัวหนึ่ง',
              userImagePath: '/profileImages/popcat.png',
              commentText: 'ลิซ่าาาาาาา',
              likeNum: 2,
              replies: []
            }
          ]
        },
        {
          username: 'Charlie Brown',
          userImagePath: '/profileImages/charliebrown.jpg',
          commentText: 'บ้าไปแล้ว',
          likeNum: 207,
          replies: []
        }
    ]

    return(
        <div className="">
            {comments.map(x => <Comments_2 
            username={x.username} 
            userImagePath={x.userImagePath} 
            commentText={x.commentText}  
            likeNum={x.likeNum} 
            replies={x.replies}
            />)}
            
        </div>
    )
}

export default Comments