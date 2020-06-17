const Basics = {
  name: "Structure of a program",
  description:
    "C++ programs start with a header containing directives, beginning with a hashtag, an int main() function and the body of the program inside curly braces.",
  example:
    '// this is my first program in C++ \n#include <iostream>\nint main()\n{\nstd::cout << "Hello World!";\n}',
  methods: [
    {
      name: "comments",
      description: "Comments are preceded by two slash.",
      example: "// this is my first program in C++",
    },
    {
      name: "directives",
      description:
        "Read and interpreted by the preprocessor, before compilation. In the following example, the directive is to include part of the C++ library which will bring the input output operators available to the program.",
      example: "#include <iostream>",
    },
    {
      name: "declaration",
      description:
        "The main function is declared, which is the body of the program. The syntax follows a type/name/parentheses with optional parameters.",
      example: "int main()",
    },
    {
      name: "curly braces",
      description:
        "The { marks the beginning of the function and the } marks the end of it. The instructions in between will be run when the program starts.",
      example: '{\nstd::cout << "Hello World!";\n}',
    },
  ],
};

module.exports = Basics;
