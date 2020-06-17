const Variable = {
  name: "Variables",
  description:
    "A variable is a name of memory location. It is used to store data. Its value can be changed and it can be reused many times.It is a way to represent memory location through symbol so that it can be easily identified.",

  syntax: "type variable_names",
  example: "int x; float y, z; char z = 'A';",
  rulesToFollow: [
    {
      rule_1: "A variable can have alphabets, digits and underscore.",
    },
    {
      rule_2:
        "A variable name can start with alphabet and underscore only. It can not start with a digit.",
    },
    {
      rule_3: "No white space is allowed within variable name.",
    },
    {
      rule_4:
        "A variable name must not be any reserved word or keyword e.g. char, float etc.",
    },
  ],
};

module.exports = Variable;
