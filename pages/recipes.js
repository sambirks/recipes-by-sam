import Head from "next/head"
import Layout from "../components/Layout"
import RecipeList from "../components/RecipeList"

export default function Recipes({ recipes }) {
  return (
    <Layout>
      <RecipeList recipes={recipes} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  // Fetch all entries of content_type `recipe`
  const recipes = await client
    .getEntries({ content_type: "recipe" })
    .then((response) => response.items)

  return {
    props: {
      recipes,
    },
  }
}