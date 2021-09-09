import React, { useState } from "react";
import Comments from "./Comment";
import Replies from "./Replies";

const Post = () =>{



    return(
        <div className="p-2">
        {/* post container */}
        <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

            {/* ส่วนของเจ้าของ post */}
            <div className="space-y-2">

            {/* image and name */}
            <div className="flex space-x-2 items-center">
                <img className="w-12 h-12 rounded-full" src="/profileImages/cat.jpg"></img>
                <span className='font-semibold text-lg'>Natkamonlak Intaramanon 630610728</span>
            </div>

            {/* status message */}
            <p>Yayyyyyy</p>

            {/* like section */}
            <div className='flex items-center'>
                <img  className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>100 คน</p>
            </div>

        </div>
        

        <Comments/>

        </div>
        </div>
    )
}

export default Post