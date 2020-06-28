const StatementsAndFlowControl = {
  name: "Statements and flow control",
  description:
    "C++ statements represent individual instructions of a program. There are selection statements, iteration statements and jump statements.",
  example: "If and else statements, loops, switch statements.",
  methods: [
    {
      name: "if and else selection statement",
      description:
        "The instructions after an if statement will only be executed if a certain condition is fulfilled.",
      example:
        'if (x < 5) {\n  cout << "you entered: " << x; \n cout << "and it is smaller than 5";',
    },
    {
      name: "switch selection statement",
      description:
        "When you have multiple if else selection statements, it is sometimes a better idea to use a switch statement that will check the content of a certain value and compare it to a list of selection statements and perform the instructions once the criteria is met.",
      example:
        '\nswitch (value) {\n  case 25:\n    cout << "value is 25";\n    break;\n  case 50:\n    cout << "value is 50";\n    break;\n  default:\n    cout << "value is undefined";}',
    },
    {
      name: "Loops iteration statements",
      description:
        "A loop will repeat a single or a block of statements a number of times or until a pre-defined condition is met. There are do, while and for statements.",
      example: [
        '// count to 10 using while\n#include <iostream>\nusing namespace std;\n\nint main ()\n{\n  int n = 1;\n\n  while (n <= 10) {\n    cout << n << ", ";\n    ++n;\n  }\n}',
        '// count to 10 using do while\n#include <iostream>\nusing namespace std;\n\nint main ()\n{\n  int n = 1;\n\n  do {\n    cout << n << ", ";\n    ++n;\n  } while (n <=10)\n}',
        '// count to 10 using for\n#include <iostream>\nusing namespace std;\n\nint main ()\n{\n  for (int n=1; n<=10; n++) {\n	cout << n << ", ";\n  }\n}',
      ],
    },
    {
      name: "break and continue jump statements",
      description:
        "A jump statement allows the programmer to alter the natural flow of the program and got to a particular section in the code to execute a certain instruction if a certain condition is met.",
      example:
        '// count to 10 interrupted\n#include <iostream>\nusing namespace std;\n\nint main () {\nint n = 1;\n\n\n  while (n <= 10) {\n    cout << n << ", ";\n	++n;\n	if (n==2) {\n	  cout << "stopped!";\n	}\n  }\n}',
    },
  ],
};

module.exports = StatementsAndFlowControl;
