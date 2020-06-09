const csharp = {
  name: 'C# or Csharp',
  description_short: 'C# (pronounced see sharp, like the musical note C♯, but written with the number sign) is a general-purpose programming discipline',
  description: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.[17] It was developed around 2000 by Microsoft as part of its .NET initiative and later approved as an international standard by Ecma (ECMA-334) in 2002 and ISO (ISO/IEC 23270) in 2003. Mono is the name of the free and open-source project to develop a compiler and runtime for the language. C# is one of the programming languages designed for the Common Language Infrastructure (CLI)',
  paradigm: ['Structured', 'imperative', 'object-oriented', 'event-driven', 'task-driven', 'functional', 'generic', 'reflective', 'concurrent'],
  developed_by: [
    {
      name: 'Anders Hejlsberg',
      endpoint: '/developers/anders-hejlsberg',
      website: '',
      twitter: 'https://twitter.com/ahejlsberg'
    }
  ],
  first_appeared: '2000',
  version: {
    current_stable: {
      version_name: 'C# 8',
      code_name: '',
      release_data: 'september 2019'
    },
    upcoming_version: {
      version_name: 'C# 9',
      code_name: '',
      expected_release_date: ''
    },
    all_versions: [
      {
        version_name: 'C# 1',
        code_name: '',
        release_date: ''
      },
    ],
  },
  typing_discipline: ['Static', 'dynamic', 'strong', 'safe', 'nominative', 'partially inferred'
  ],
  platform: ['Common Language Infrastructure'],
  operating_system: ['all'],
  license: ['MIT/X11', 'GPLv3'],
  example_snippets: {
    hello_world: 'Console.WriteLine("Hello World!");',
  },
};

module.exports = csharp;