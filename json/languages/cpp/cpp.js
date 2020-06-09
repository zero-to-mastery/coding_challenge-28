const cpp = {
  name: "C-plus-plus",
  description_short: "C++ is a general-purpose programming language",
  description:
    'C++ is a general-purpose programming language or also called as "C with classes". It is almost always implemented as a compiled language designed towards system programming with performance efficiency.',
  paradigm: ["generic", "functional", "procedural", "object-oriented"],
  developed_by: [
    {
      name: "Bjarne Stroustrup",
      endpoint: "/developers/bjarne-stroustrup",
      website: "http://stroustrup.com/",
      twitter: "https://twitter.com/stroustrup",
    },
  ],
  first_appeared: "1985",
  version: {
    current_stable: {
      version_name: "C++17, C++1z",
      code_name: "ISO/IEC 14882:2017",
      release_data: "01 December 2017",
    },
    upcoming_version: {
      version_name: "C++20",
      code_name: "{{UNKNOWN}}",
      expected_release_date: "{{UNKNOWN}}",
    },
    all_versions: [
      {
        version_name: "C++98",
        code_name: "ISO/IEC 14882:1998",
        release_date: "October 1998",
      },
      {
        version_name: "C++03",
        code_name: "ISO/IEC 14882:2003",
        release_date: "February 2003",
      },
      {
        version_name: "C++11, C++0x",
        code_name: "ISO/IEC 14882:2011",
        release_date: "August 2011",
      },
      {
        version_name: "C++14, C++1y",
        code_name: "ISO/IEC 14882:2014",
        release_date: "August 2014",
      },
    ],
  },
  typing_discipline: ["Static", "Nominative", "Partially inferred"],
  platform: ["Desktop", "Unreal Engine"],
  operating_system: ["Linux", "Windows", "Mac OS X", "Free BSD"],
  license: ["{{UNKNOWN}}"],
  example_snippets: {
    hello_world: `#include<iostream>
  using namespace std;
  int main() { 
  cout<<"Hello World";
  return 0;
  }`,
  },
};

module.exports = cpp;
