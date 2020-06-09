const python = {
  name: 'Python',
  description_short: 'Python is an interpreted, high-level programming language',
  description: 'Python is an interpreted, high-level, general-purpose programming language. Python is often described as a "batteries included" language due to its comprehensive standard library',
  paradigm: ['imperative', 'functional', 'procedural', 'object-oriented'],
  developed_by: [
    {
      name: 'Guido van Rossum',
      endpoint: '/developers/Guido-van-Rossum',
      website: 'https://gvanrossum.github.io/',
      twitter: 'https://twitter.com/gvanrossum'
    }
  ],
  first_appeared: '1990',
  version: {
    current_stable: {
      version_name: 'Python 3.8.3',
      code_name: '{{UNKNOWN}}',
      release_data: '13 May 2020'
    },
    upcoming_version: {
      version_name: 'Python 4.0',
      code_name: '{{UNKNOWN}}',
      expected_release_date: '{{UNKNOWN}}'
    },
    all_versions: [
      {
        version_name: 'Python 1.4',
        code_name: '{{UNKNOWN}}',
        release_date: '25 October 1996'
      },
      {
        version_name: 'Python 1.5',
        code_name: '{{UNKNOWN}}',
        release_date: '17 February 1998'
      },
      {
        version_name: 'Python 1.5.1',
        code_name: '{{UNKNOWN}}',
        release_date: '14 April 1998'
      },
      {
        version_name: 'Python 1.5.1p1',
        code_name: '{{UNKNOWN}}',
        release_date: '6 August 1998'
      }
    ]
  },
  typing_discipline: ['duck', 'dynamic', 'gradual'],
  platform: ['Web', 'Desktop'],
  operating_system: ['{{unknown}}'],
  license: ['PSFL'],
  example_snippets: {
    hello_world: 'print("hello world!")'
  }
}

module.exports = python
