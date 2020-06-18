const Compilers = {
  name: "Compilers.",
  description:
    "A compiler will translate the code to a set of intructions in machine language. There are a lot of C++ compilers. For a complete list, refer to: https://en.wikipedia.org/wiki/List_of_compilers#C++_compilers.",
  example:
    "A single instruction to a computer could look like: \n00000 10011110",
  compilers: [
    {
      name: "GCC",
      description:
        "Stands fro the GNU Compiler Collection and consists of a compiler system produced by the GNU Project supporting various programming languages.",
      example: "g++ -std=c++0x helloworld.cpp -o helloworld_program",
    },
    {
      name: "Clang",
      description:
        "Compiler front end for the C, C++, Objective-C and Objective-C++ programming languages, as well as for some others. It uses the LLVM compiler infrastructure as its back end.",
      example:
        "clang++ -std=c++11 -stdlib=libc++ helloworld.cpp -o helloworld_program",
    },
    {
      name: "Visual C++",
      description:
        "The Visual C++ compiler is still known as Microsoft C/C++ and is part of the integrated development environment (IDE) product from Microsoft for the C, C++, and C++/CLI programming languages.",
      example:
        "To build a C++ project in Vsual Studio, choose Build Solution from the Build menu.",
    },
  ],
};

module.exports = Compilers;
