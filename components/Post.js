import Markdown from "react-markdown"
import Author from "./Author"

export default function Post({ post }) {
  return (
    <article className="max-w-3xl pt-12 mx-auto">
      <header className="my-4">
        <h1 className="text-3xl font-bold text-center text-red-800 dark:text-red-400 my-3 mx-4 hover:opacity-75">{post.fields.title}</h1>
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
      <section>
        <Markdown source={post.fields.body} escapeHtml={true} />
      </section>
      <footer>
        <Author author={post.fields.author} />
      </footer>
      <style jsx>{`
        /*
        The section :global() selector is necessary to target the content
        that will be rendered by the Markdown component.
        */
        section :global(h1) {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        section :global(h2) {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        section :global(p) {
          line-height: 1.75rem;
          margin: 2rem 0;
        }
        section :global(img) {
          max-width: 100%;
        }
        section :global(blockquote) {
          border-left: 0.5rem solid #949499;
          margin-left: 0;
          padding: 0 2rem;
          color: #646469;
        }
        section :global(li) {
          margin: 1rem 0;
          line-height: 1.5rem;
        }
        section :global(hr) {
          border: none;
          background: #949499;
          height: 1px;
        }
      `}</style>
    </article>
  )
}