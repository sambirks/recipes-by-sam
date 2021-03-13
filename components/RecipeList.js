import Link from "next/link"
import Image from "next/image"

export default function RecipeList({ recipes = [] }) {
  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold uppercase text-center my-3">Recipes</h2>
      <div className="flex flex-wrap overflow-hidden">
      {recipes.map((recipe) => (
        <article key={recipe.sys.id} class="w-full overflow-hidden md:w-1/2 lg:w-1/3 my-4">
          <Link href={`/recipe/${recipe.fields.slug}`}>
            <a>
            <header>
              <img
              className="rounded shadow h-64 w-64 mx-auto"
              src={recipe.fields.mainImage.fields.file.url}
              alt="pic"
            />
          </header>
          <h4 className="text-xl font-bold uppercase text-center my-2 text-red-800 dark:text-red-400">{recipe.fields.title}</h4>
          <h4 className="text-md uppercase text-center my-2">By {recipe.fields.author.fields.name}</h4>
          </a>
          </Link>
        </article>          
      ))}
      </div>
    </section>
  )
}