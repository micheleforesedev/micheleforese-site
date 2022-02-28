import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../components/Layout';

function DocLayout({ data }) {

  const { slug, body, frontmatter: { title } } = data.mdx;

  return (
    <Layout>

      <div className='container mx-auto prose lg:prose-xl prose-h1:text-lg prose-h1:font-bold'>Ciao: {slug}
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  )
}


export const query = graphql`
  query DocPages($slug: String) {
    mdx( slug: { eq: $slug } ) {
      id
      slug
      body
      frontmatter {
        title
        path
      }
    }
  }
`

export default DocLayout