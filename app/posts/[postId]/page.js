export default async function PostDetailsPage({ params }) {
  const postId = params.postId;
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <>
      <h1 style={{ marginTop: "15px" }}>Products Details</h1>
      <div
        style={{
          width: "100%",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          color: "black",
          marginTop: "20px",
        }}
      >
        <h1 style={{ marginTop: "15px" }}>ID : {post.id}</h1> <hr />
        <h1 style={{ marginTop: "15px" }}>Title : {post.title}</h1> <hr />
        <p style={{ marginTop: "15px", width: "70%", lineHeight: "30px" }}>
          Body : {post.body}
        </p>
      </div>
    </>
  );
}
