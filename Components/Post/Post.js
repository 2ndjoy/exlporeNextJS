import Link from "next/link";

const Post = ({ post }) => {
    return (
        <div>

            <div className="overflow-x-auto">
                {/* <p>titile</p> */}
                <div className="flex ml-5">
                    <p>{post.title}</p>
                    <p>

                        <Link href={`posts/${post?.id}`}> <button className="btn btn-secondary ml-5">See details</button></Link>
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Post;