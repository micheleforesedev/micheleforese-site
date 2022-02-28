import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";

function DocsIndexPage({ data }) {


  const docs = data.allMdx.nodes

  return (
    <Layout>
      <div className="container mx-auto">
        <h1>Docs Landing Page</h1>
        <div>
          <ol className="flex flex-col space-y-3 list-none">
            {docs.map((doc) =>
              <li className="p-4 rounded-xl list-item odd:bg-slate-50 even:bg-slate-100 hover:scale-105 hover:ring-1">
                <h1>
                  {doc.frontmatter.title}
                </h1>
                <Link to={`/docs/${doc.slug}`}>
                  /docks/{doc.slug}
                </Link>
              </li>
            )}
          </ol>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        slug
        frontmatter {
          title
          path
          # date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

export default DocsIndexPage;
