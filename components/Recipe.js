import Markdown from "react-markdown"
import Author from "./Author"

export default function Recipe({ recipe }) {
  return (
      <section className="container max-w-5xl py-24 mx-auto">
        <header>
          <h1 className="text-4xl font-bold uppercase text-center my-6 text-red-800 dark:text-red-400">{recipe.fields.title}</h1>
          <div className="max-w-2xl mx-auto">
          <Markdown source={recipe.fields.intro} escapeHtml={true} />
          </div>
        </header>
        <section className="flex flex-wrap border-2 border-red-800 dark:border-red-400 rounded-lg shadow-lg py-2 md:py-8 lg:py-12 px-2 my-2 mx-3 md:mx-4">
          <div className="w-full md:w-1/2 justify-center my-10">
            <img
              className="rounded shadow-lg mx-auto h-96 w-96"
              src={recipe.fields.mainImage.fields.file.url}
              alt="pic"
              />
          </div>
          <div className="w-full md:w-1/2">
            <div className="my-2">
              <h2 className="text-center text-2xl font-bold uppercase my-2 md:my-4 lg:my-6">{recipe.fields.subtitle}</h2>
              <h4 className="text-sm text-right uppercase mr-2">By {recipe.fields.author.fields.name}</h4>
              <Markdown source={recipe.fields.description} escapeHtml={true} />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="my-2 md:my-46 lg:my- mx-2 md:mx-4 lg:mx-6">
              <h4 className="text-center text-2xl font-bold uppercase my-2 md:my-4 lg:my-6">Ingredients</h4>
              <p className="text-md text-left">Serves: {recipe.fields.servings}</p>
              <Markdown source={recipe.fields.ingredients} escapeHtml={true} />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="my-2 md:my-46 lg:my- mx-2 md:mx-4 lg:mx-6">
              <h4 className="text-center text-2xl font-bold uppercase my-2 md:my-4 lg:my-6">Method</h4>
              <ul className="flex flex-wrap mx-auto">
                <li className="px-2 mx-2">Prep: {recipe.fields.prepTime} mins</li>
                <li className="px-2 mx-2">Cooking: {recipe.fields.cookTime} mins</li>
                <li className="px-2 mx-2">Total: {recipe.fields.cookTime} mins</li>
              </ul>
              <Markdown source={recipe.fields.method} escapeHtml={true} />
            </div>
          </div>
          <div className="w-full border-t-2 border-red-400 py-4 mt-4 md:mt-6 lg:mt-8">
          <div className="my-2 md:my-46 lg:my- mx-2 md:mx-4 lg:mx-6">
            <h4 className="text-center text-2xl font-bold uppercase my-2 md:my-4 lg:my-6">Chef Notes</h4>
            <Markdown source={recipe.fields.tips} escapeHtml={true} />
            </div>
          </div>
        </section>
      <footer>
        <Author author={recipe.fields.author} />
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
    </section>

  )
}