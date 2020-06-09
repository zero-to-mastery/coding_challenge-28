const go = {
  name: "GO",
  description_short:
    "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
  description:
    "Go is a statically typed, compiled programming language designed at Google. Combines the ease of programming of an interpreted, dynamically typed language with the efficiency and safety of a statically typed and compiled one. It also aims to be modern, with support for networked and multicore computing.",
  paradigm: [
    "classless",
    "object oriented",
    "cli tools environment",
    "structured",
    "imperative",
  ],
  developed_by: [
    {
      name: "Robert Griesemer",
      endpoint: "-developers-robert-griesemer",
      website: "https:-github.com-griesemer",
      twitter: "{{UNKNOWN}}",
    },
    {
      name: "Rob Pike",
      endpoint: "-developers-rob-pike",
      website: "http:-herpolhode.com-rob-",
      twitter: "https:-twitter.com-rob_pike",
    },
    {
      name: "Ken Thompson",
      endpoint: "-developers-ken-thompson",
      website: "http:-cs.bell-labs.co-who-ken-",
      twitter: "{{UNKNOWN}}",
    },
  ],
  first_appeared: "2012-03-28",
  version: {
    current_stable: {
      version_name: "1.14",
      code_name: "{{UNKNOWN}}",
      release_data: "2020-02",
    },
    upcoming_version: {
      version_name: "1.15",
      code_name: "{{UNKNOWN}}",
      expected_release_date: "2020-07",
    },
    all_versions: [
      {
        version_name: "1.0",
        code_name: "{{UNKNOWN}}",
        release_date: "2012-03-28",
      },
      {
        version_name: "1.1",
        code_name: "{{UNKNOWN}}",
        release_date: "2013-05-13",
      },
      {
        version_name: "1.2",
        code_name: "{{UNKNOWN}}",
        release_date: "2013-12-01",
      },
      {
        version_name: "1.3",
        code_name: "{{UNKNOWN}}",
        release_date: "2014-06-18",
      },
      {
        version_name: "1.4",
        code_name: "{{UNKNOWN}}",
        release_date: "2014-12-10",
      },
      {
        version_name: "1.5",
        code_name: "{{UNKNOWN}}",
        release_date: "2015-08-19",
      },
      {
        version_name: "1.6",
        code_name: "{{UNKNOWN}}",
        release_date: "2016-02-17",
      },
      {
        version_name: "1.7",
        code_name: "{{UNKNOWN}}",
        release_date: "2016-08-15",
      },
      {
        version_name: "1.8",
        code_name: "{{UNKNOWN}}",
        release_date: "2017-02-16",
      },
      {
        version_name: "1.9",
        code_name: "{{UNKNOWN}}",
        release_date: "2017-08-24",
      },
      {
        version_name: "1.10",
        code_name: "{{UNKNOWN}}",
        release_date: "2018-02-16",
      },
      {
        version_name: "1.11",
        code_name: "{{UNKNOWN}}",
        release_date: "2018-08-24",
      },
      {
        version_name: "1.12",
        code_name: "{{UNKNOWN}}",
        release_date: "2019-02-25",
      },
      {
        version_name: "1.13",
        code_name: "{{UNKNOWN}}",
        release_date: "2019-09-03",
      },
      {
        version_name: "1.14",
        code_name: "{{UNKNOWN}}",
        release_date: "2020-02-25",
      },
    ],
  },
  typing_discipline: ["static", "typed"],
  platform: ["ALL"],
  operating_system: ["ALL"],
  license: ["BSD"],
  example_snippets: {
    hello_world: `package main

      import "fmt"
      
      func main() {
          fmt.Println("Hello, world!")
      }`,
  },
};

module.exports = go;
