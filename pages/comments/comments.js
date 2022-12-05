const Comments = ({ comments }) => {
    console.log(comments)
    return (
        <div>
            {
                comments.map(cmnt => <h1 className="my-10 mx-5 text-slate-300 bg-slate-800" key={cmnt.id}><b className="text-slate-200 underline">Comment body:</b> {cmnt.body}</h1>)
            }
        </div>
    );
};

export default Comments;

export const getServerSideProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`);
    const data = await res.json();
    return {
        props: {
            comments: data
        }
    }

}