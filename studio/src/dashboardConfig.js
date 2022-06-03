export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "629a632182a4530a49617458",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8hmsjrb6",
                  apiId: "72dd489a-e7e7-459e-b75b-51cf38799c7b",
                },
                {
                  buildHookId: "629a63217877e30c64b005f8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-rn2iksii",
                  apiId: "9efd278a-af34-463d-8adf-86d2fe7b79b4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/juliacodez/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-rn2iksii.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
