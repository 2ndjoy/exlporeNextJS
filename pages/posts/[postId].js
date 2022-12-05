import { useRouter } from 'next/router';
import React from 'react';

const postDetails = ({ post }) => {
    const router = useRouter();
    const handleBack = () => {
        router.push("/posts")
    }
    return (
        <div>
            <h2>post {post?.id}</h2>
            <h2>post {post?.title}</h2>
            <button onClick={handleBack} className='btn btn-secondary'>Back to post</button>
        </div>
    );
};


export default postDetails;


export const getStaticProps = async (context) => {

    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();
    // console.log(data)
    return {
        props: {
            post: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
