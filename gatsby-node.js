const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Docs {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: "/docs/" + node.slug,
      component: path.resolve("./src/templates/doc.tsx"),
      context: { slug: node.slug },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
