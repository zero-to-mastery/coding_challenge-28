const Constants = {
  name: "Constants",
  description: "Constants are expressions that have a fixed value.",
  example: "const double pi = 3.1415926",
  methods: [
    {
      name: "Literals",
      description:
        "The most obvious kind of constants. There can be integer, floating-point, characters, strings, Boolean, pointers, and user-defined literals.",
      example: '1776, 3.14159, "Hello world"',
    },
    {
      name: "Typed constant expressions",
      description:
        "When you want to give a name to a constant value, you prefix it with the const reserved word. You can then use the named constant later on in your program.",
      example: "const double pi = 3.1415926;",
    },
    {
      name: "Preprocessor definitions (#define)",
      description:
        'You can use a preprocessor definition, at the top of your program, above the main() function, by using the reserved keyword "define" preceded with a hastag. You then name the constant, capitalized by convention, and assign it a value, without the equal sign.',
      example: "#define PI 3.141559",
    },
  ],
};

module.exports = Constants;
