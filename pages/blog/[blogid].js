import { useRouter } from "next/router"

function BlogDetails() {
    const router = useRouter();
    const blogId = router.query.blogid;
  return (
    <div>
        <h1>my blog no is : {blogId}</h1> 
    </div>
  )
}

export default BlogDetails
