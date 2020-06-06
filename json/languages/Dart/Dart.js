const Dart = {
    name: 'Dart',
    description_short: 'Dart is a client-optimized programming language for apps on multiple platforms',
    description: 'Dart is an open-source, general-purpose, object-oriented programming language with C-style syntax developed by Google in 2011. The purpose of Dart programming is to create a frontend user interfaces for the web and mobile apps. It is under active development, compiled to native machine code for building mobile apps, inspired by other programming languages such as Java, JavaScript, C#, and is Strongly Typed. Since Dart is a compiled language so you cannot execute your code directly; instead, the compiler parses it and transfer it into machine code.It supports most of the common concepts of programming languages like classes, interfaces, functions, unlike other programming languages. Dart language does not support arrays directly. It supports collection, which is used to replicate the data structure such as arrays, generics, and optional typing.',
    paradigm: ['object-oriented', 'class-based', 'garbage-collected'],
    developed_by: [
      {
        name: 'Google',
        endpoint: '{{UNKNOWN}}',
        website: 'https://dart.dev/',
        twitter: 'https://twitter.com/dart_lang'
      }
    ],
    first_appeared: '2011-10-10',
    version: {
      current_stable: {
        version_name: 'Dart SDK',
        code_name: '2.8.4',
        release_data: '2020-06-03'
      },
      upcoming_version: {
        version_name: 'Dart SDK 2.9',
        code_name: '2.9.0-8.2',
        expected_release_date: '{{UNKNOWN}}'
      },
      all_versions: [
        {
          version_name: '{{UNKNOWN}}',
          code_name: '{{UNKNOWN}}',
          release_date: '{{UNKNOWN}}'
        },
      ],
    },
    typing_discipline: ['{{UNKNOWN}}'],
    platform: ['{{unknown}}'],
    operating_system: ['Cross Platform'],
    license: ['BSD 3-Clause'],
    example_snippets: {
      hello_world: 'main(){ print(\'Hello world\');}'
    },
};
  
  module.exports = Dart;
