const css = {
  name: "Cascading Style Sheets",
  description_short:
    "is a style sheet language used for describing the presentation of a document",
  description:
    "is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts",
  paradigm: ["Declarative", "Domain Specific"],
  developed_by: [
    {
      names: "'Håkon Wium Lie', 'Bert Bos'",
      endpoint: "/developers/hakon-bert",
      website: [
        "https://www.wiumlie.no/en.html",
        "https://www.w3.org/People/Bos/",
      ],
    },
  ],
  first_appeared: "1996",
  version: {
    current_stable: {
      version_name: "CSS3",
      code_name: "Level 3",
    },
    all_versions: [
      {
        version_name: "CSS1",
        code_name: "Level 1",
      },
      {
        version_name: "CSS2",
        code_name: "Level 2",
      },
      {
        version_name: "CSS2.1",
        code_name: "Level 2 Revision 1",
      },
    ],
  },
  typing_discipline: ["Style Sheet language"],
  platform: ["Web"],
  operating_system: ["Linux", "Windows", "Mac OS X"],
  license: ["W3C"],
  example_snippets: {
    hello_world:
      '<div style="font-size:30px; text-align: center">Hello World</div>',
  },
};

module.exports = css;
