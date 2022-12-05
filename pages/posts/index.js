import { useRouter } from "next/router";
import Post from "../../Components/Post/Post";

const Posts = ({ post }) => {
    // console.log(post);
    const router = useRouter();
    const handleBack = () => {
        router.push("/")
    }
    return (
        <div>
            <h2 className="text-2xl">Number of posts :{post.length}</h2>
            {
                post.map(pst => <Post key={pst.id} post={pst}></Post>)
            }
            <button onClick={handleBack} className='btn btn-secondary'>Back to Home</button>
        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await res.json();
    // console.log(data)
    return {
        props: {
            post: data
        }
    }
}