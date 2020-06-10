const arrays = {
  name: "Arrays",
  description:
    "Like other programming languages, array in C++ is a group of similar types of elements that have contiguous memory location.In C++ std::array is a container that encapsulates fixed size arrays. In C++, array index starts from 0. We can store only fixed set of elements in C++ array.",
  syntax: "type variable_name[size_of_array]",
  example: "int arr[5]; int arr[3] = {1, 2, 3};",
  notes: [
    {
      note_1:
        "Arrays have 0 as the first index not 1. for example, arr[0] is the first element.",
    },
    {
      note_2:
        "If the size of an array is 'n', to access the last element, (n-1) index is used. for example, arr[n-1] is the last element.",
    },
    {
      note_3:
        "Suppose the starting address of arr[0] is 2120d. Then, the next address, arr[1], will be 2124d, address of arr[2] will be 2128d and so on. It's because the size of int is 4 bytes.",
    },
  ],
};

module.exports = arrays;
