import { useRouter } from 'next/router'
import React from 'react'

function CommentDetails() {
    const router = useRouter();
    const {blogid, commentid} = router.query;
    console.log("blogid :", blogid, "commentid :", commentid);
  return (
    <div><h1>comment details page</h1></div>
  )
}

export default CommentDetails