const Operators = {
  name: "operators",
  desription:
    "An operator in C++ is a special symbol that tells the compiler to perform a specific mathematical or logical operation.",
  example:
    "{int  a= 20; int  b= 20; int c; c = a + b; cout << c  // prints 40}",
  methods: [
    {
      name: "Assignment operators",
      description: "Used to assign a value to a variable.",
      example: ["+=", "-=", "*=", "/=", "%=", "=a=b"],
    },
    {
      name: "Arithmetic Operators",
      description: "Used to perform arithmetic operations.",
      example: ["+", "-", "*", "/", "%"],
    },
    {
      name: "Relational Operators",
      description: "Used to verify a condition and returns true or false.",
      example: ["<", "<=", ">", ">=", "==", "!="],
    },
    {
      name: "Logical Operator",
      description:
        "Used to return the result of a comparison between more than one conditions.",
      example: ["&&", "||", "!"],
    },
  ],
};

module.exports = Operators;
