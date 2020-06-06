const javascript = {
  name: 'Javascript',
  description_short: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
  description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
  paradigm: ['event-driven', 'functional', 'imperative'],
  developed_by: [
    {
      name: "Brendan Eich",
      endpoint: "/developers/brendan-eich",
      website: "https://brendaneich.com/",
      twitter: "https://twitter.com/BrendanEich"
    }
  ],
  first_appeared: '1995-12-04',
  version: {
    current_stable: {
      version_name: 'ECMASCRIPT 2019',
      code_name: 'ES19',
      release_data: "June 2019"
    },
    upcoming_version: {
      version_name: "ECMASCRIPT 2020",
      code_name: "ES20",
      expected_release_date: "TBC"
    },
    all_versions: [
      {
        version_name: 'v1.0',
        code_name: '',
        release_date: ''
      },
    ],
  },
  typing_descipline: ['dynamic', 'duck'],
  platform: ['cross-platform'],
  operating_system: ['all'],
  license: ['open standard'],
  examples: {
    hello_world: 'alert("Hello World")',
  },
};

module.exports = javascript;
