import Link from "next/link";
import styles from "../styles/blog.module.css";

// Collect all the files from the blogdata directory
// Iterate and display them

type Blog = {
  slug: string;
  title: string;
  author: string;
  content: string;
};

async function getData() {
  let res = await fetch("http://localhost:3000/api/blogs");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}


async function Blog(){
  let blogs = await getData();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8 pt-5">
            {blogs.map((blogItem: Blog) => {
              return (
                <div className="pb-2" key={blogItem.slug}>
                  <Link
                    // href={{
                    //   // pathname: `/blogs/${blogItem.slug}`,
                    //   pathname: `/blogpost`,
                    //   query: {
                    //     slug: blogItem.slug,
                    //   },
                    // }}
                    href={`/blogs/${blogItem.slug}`}
                    className={styles.link}
                  >
                    <h5>{blogItem.title}</h5>
                  </Link>
                  <p>{blogItem.content.substring(0, 160)}...</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
