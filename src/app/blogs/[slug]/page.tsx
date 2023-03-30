// Find the file corresponsing to slug
// Polulate that inside the page

type Blog = {
  slug?: string;
  title?: string;
  author?: string;
  content?: string;
  message?: string;
};

// export async function generateStaticParams() {
//   const ids: string[] = [
//     "how-to-learn-flask",
//     "how-to-learn-java",
//     "how-to-learn-javascript",
//     "how-to-learn-typescript",
//   ];
//   return ids.map((id) => ({ slug: id }));
// }

async function getData(slug: string) {
  let res = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data" + slug);
  }
  return res.json();
}

const Slug = async ({ params }: { params: { slug: string } }) => {
  let slug = params.slug;
  const blog = await getData(slug);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-10 pt-5">
            <div className="pb-2">
              <h3 className="text-center mb-4">
                {blog && blog.title ? "Title: " : ""}
                {blog && (blog.title || blog.message)}
              </h3>
              <p>{blog && blog.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slug;
