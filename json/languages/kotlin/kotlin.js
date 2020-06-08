const kotlin = {
  name: "Kotlin",
  description_short:
    "Kotlin is a modern, cross-platform, multi-purpose programming language",
  description:
    "Kotlin is a cross-platform, multi-purpose modern programming language. Knownfor its concise syntax and pragmatic design, Kotlin provides ample opportunitiesfor code-sharing and code-reuse between multiple projects on multiple platforms,for productive concurrent programming.",
  paradigm: ["functional", "object-oriented"],
  developed_by: [
    {
      name: "JetBrains",
      endpoint: "https://www.jetbrains.com/",
      website: "https://kotlinlang.org/",
      twitter: "https://twitter.com/kotlin",
    },
  ],
  first_appeared: "2011",
  version: {
    current_stable: {
      version_name: "Kotlin 1.3.72",
      code_name: "{{UNKNOWN}}",
      release_data: "April 15, 2020",
    },
    upcoming_version: {
      version_name: "Kotlin 1.4-M2",
      code_name: "{{UNKNOWN}}",
      expected_release_date: "June 4, 2020",
    },
    all_versions: [
      {
        version_name: "{{UNKNOWN}}",
        code_name: "{{UNKNOWN}}",
        release_date: "{{UNKNOWN}}",
      },
    ],
  },
  typing_discipline: ["inferred", "static", "strong"],
  platform: ["JVM", "JavaScript", "LLVM"],
  operating_system: ["Cross-platform"],
  license: ["Apache License 2.0"],
  example_snippets: {
    hello_world: 'fun main(args: Array<String>) { println("Hello World!") }',
  },
};

module.exports = kotlin;
