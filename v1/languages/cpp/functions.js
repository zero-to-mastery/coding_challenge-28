const functions = {
  name: "Functions",
  description:
    "In c++ functions have a return type (it's a keyword), function name and arguments to be passed with their data_type. Their lifecycle consists of funciton calling and function definition. Fucntion declaration just tells the compiler about the return type, name of function and types of arguments to be accepted. In C++ we can pass multiple argumetns to a function. Function call have actual arguments whereas function definition have formal arguments. They maintain modularity in our code and decreases the code length.",
  syntax: {
    declaration:
      "return_type function_name(data_type_of_arg1,data_type_of_arg2);",
    call: "function_name(arg1,arg2);",
    definition:
      "return_type function_name(data_type_of_arg1 arg1,data_type_of_arg2 arg2) {  //your code goes here//  return (value_to_be_returned);  }",
  },
  example: {
    declaration: "float fun(float,int);",
    call: "float val = fun(5.5 , 10);",
    definition: "float fun(float x,int y) { float ans=x+y;  return ans;} //ans=15.5 is returned",
  },
  methods: [
    {
      name: "Pass by value",
      description:
        "Value of actual arguments does not change with change in the value of formal arguments.",
      example: {
        declaration: "void fun(float,int);",
        call: "fun(a , b); //let's say a=5.5 and b=10",
        definition:
          "void fun(float x,int y) { x+=1; y+=1; } //value of a=5.5, b=10, x=6.5, y=11",
      }
    },
    {
      name: "Pass by reference",
      description:
        "Value of actual arguments changes with change in the value of formal arguments.",
      example: {
        declaration: "void fun(float,int);",
        call: "fun(a , b); //let's say a=5.5 and b=10",
        definition:
          "void fun(float &x,int &y) { x+=1; y+=1; } //value of a=6.5, b=11, x=6.5, y=11",
      }
    }
  ],
  notes: [
    {
      note_1:
        "Function call and declaration includes a semicolon but definition does not.",
    },
    {
      note_2:
        "Function declaration can be avoided if function definition is present before the calling function. // calling function is the function that calls fun()",
    },
    {
      note_3:
        "All the variables declared inside function definition are destroyed if they don't belong to 'static' storage class.",
    }
  ],
};

module.exports = functions;