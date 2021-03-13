import Head from "next/head"
import Layout from "../components/Layout"
import PostList from "../components/PostList"

export default function Blog({ posts }) {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  // Fetch all entries of content_type `blogPost`
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)

  return {
    props: {
      posts,
    },
  }
}