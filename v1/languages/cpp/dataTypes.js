const dataTypes = {
  name: "Data-Types",
  desription:
    "A data type specifies the type of data that a variable can store such as integer, floating, character etc.",
  types: [
    {
      name: "Basic data-types",
      example: ["int", "float", "char", "double"],
    },
    {
      name: "Derived data-types",
      example: ["array", "pointer", "function", "references"],
    },
    {
      name: "Enumeration data-types",
      example: ["enum"],
    },
    {
      name: "User defined data-type",
      example: ["class", "structure"],
    },
  ],
  example: `int x = 45; double y = 100.00;`,
};

module.exports = dataTypes;
