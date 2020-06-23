const BasicInputsAndOutputs = {
  name: "Basic Inputs and Outputs",
  description:
    'C++ uses streams for inputs and outputs, which is an abstraction allowing to insert characters or extract characters from it. The insertion operator "<<" is used for the output and the extraction operator ">>" is used for the input.',
  example: 'cout << "Hello World; cin >> inputVariable',
  methods: [
    {
      name: "cout",
      description: "Standard output stream",
      example: 'cout << "Hello World"; // prints Hello World on screen',
    },
    {
      name: "cin",
      description: "Standard input stream",
      example:
        '// i/o example\n#include <iostream>\nusing namespace std;\nint main ()\n{\nint i;\ncout << "Please enter an integer value: ";\ncin >> i;\ncout << "The value you entered is " << i;\n//Will ask the user to enter integer value and then it will print it out on the screen.',
    },
  ],
};

module.exports = BasicInputsAndOutputs;
