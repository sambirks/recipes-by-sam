import Link from "next/link"

export default function PostList({ posts = [] }) {
  return (
    <section className="max-w-3xl mx-auto">
      {posts.map((post) => (
        <article key={post.sys.id} className="my-8 mx-4">
          <header>
            <h1 className="text-3xl text-center text-red-800 dark:text-red-400 my-3 mx-4 hover:opacity-75">
              <Link href={`/post/${post.fields.slug}`}>
                <a className="font-bold">{post.fields.title}</a>
              </Link>
            </h1>
            <div className="w-full border-b-2 mt-2 mb-8 py-4">
              <div className="text-lg text-red-700 dark:text-red-400 text-center uppercase my-2 md:my-4">
                <span>By Sam Birks</span> | <span>12/02/21</span>
              </div>
            </div>
          </header>
          <img
          className="rounded shadow-xl h-96 w- mx-auto"
              src={post.fields.blogImage.fields.file.url}
              alt="pic"
            />
          <p>{post.fields.description}</p>
          <div className="bg-red-800 dark:bg-red-400 text-center rounded-lg w-full md:w-1/3 p-4 mx-auto shadow-md hover:opacity-75">
            <Link href={`/blog/${post.fields.slug}`}>
              <a className="text-2xl text-white">Keep reading ...</a>
            </Link>
          </div>
        </article>
      ))}
      <style jsx>{`
        h1 {
          margin: 0 0 0.75rem;
          font-size: 2.5rem;
          font-weight: 400;
        }
        h1 a {
          text-decoration: none;
        }
        p {
          line-height: 1.75rem;
        }
        article {
          margin: 2rem 0;
        }
      `}</style>
    </section>
  )
}