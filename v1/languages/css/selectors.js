const { example, description } = require("../cpp/arrays");

const selectors = {
  name: "CSS Selectors",
  description:
    "In CSS, selectors are patterns used to select the element(s) you want to style.",

  syntax: "selectorName { css_property: value;}",

  selectors: [
    {
      name: ".class",
      example: ".highlight",
      description:
        "Selects all the elements in the page with class='highlight'",
    },

    {
      name: ".class1.class2",
      example: ".name1 .name2",
      description:
        "Selects all the elements in the page with class='name1' and class='name2'",
      note: "No spaces between the class selectors",
    },

    {
      name: ".class1 .class2",
      example: ".highlight1 .highlight2",
      description:
        "Selects all the elements in the page with class='highlight2' that is descendant of the class='highlight1'",
    },

    {
      name: "#id",
      example: "#highlight",
      description: "Select the element in the page with id='highlight'",
    },

    {
      name: "*",
      example: "*",
      description: "Selects all the elements in the page",
    },

    {
      name: "element",
      example: "p",
      description: "Selects all the <p> element in the page",
    },

    {
      name: ".class",
      example: ".highlight",
      description:
        "Selects all the elements in the page with class='highlight'",
    },
    {
      name: "element.class",
      example: "p.highlight",
      description:
        "Selects all the <p> element in the page with class='highlight'",
    },

    {
      name: "element,element",
      example: "div,p",
      description: "Selects all the <div> elements and the <p> in the page",
    },

    {
      name: "element element",
      example: "div p",
      description:
        "Selects all the <p> elements in the page which are inside the <div> elements",
    },

    {
      name: "element>element",
      example: "div>p",
      description:
        "Selects all <p> elements where the parent is a <div> element",
    },

    {
      name: "element+element",
      example: "div+p",
      description:
        "Selects all <p> elements which is placed immediatly after the <div> element",
    },

    {
      name: "element~element",
      example: "div~p",
      description:
        "Selects every <p> element that are preceded by a <div> element",
    },

    {
      name: "[attribute]",
      example: "[type]",
      description: "Selects all elements with a type attribute",
    },

    {
      name: "[attribute=value]",
      example: "[type='text']",
      description:
        "Selects all elements with a type attribute and it's value must be text",
    },

    {
      name: "[attribute~=value]",
      example: "[title~=flower]",
      description:
        "Selects all elements with a title attribute containing the word 'flower'",
    },
    {
      name: ":active",
      example: "a:active",
      description: "Selects the active link",
    },

    {
      name: "::after",
      example: "div::after",
      description: "Insert something after the content of each <div> element",
    },

    {
      name: "::before",
      example: "div::before",
      description: "Insert something before the content of each <div> element",
    },

    {
      name: ":checked",
      example: "input:checked",
      description: "select every input element after they are checked",
    },

    {
      name: ":disabled",
      example: "button:disabled",
      description: "select every button element if they are disabled",
    },

    {
      name: ":enabled",
      example: "button:enabled",
      description: "select every button element if they are enabled",
    },

    {
      name: ":first-child",
      example: "p:first-child",
      description:
        "Selects every <p> element that is the first child of its parent",
    },

    {
      name: ":focus",
      example: "input:focus",
      description: "Selects the input element which has focus",
    },

    {
      name: ":visited",
      example: "a:visited",
      description: "Selects link when it is visted or clicked",
    },

    {
      name: ":last-child",
      example: "p:last-child",
      description:
        "Selects the <p> element which is the last element of it's parent",
    },

    {
      name: ":nth-child(n)",
      example: "p:nth-child(3)",
      description:
        "Selects the <p> element which is the 3rd child of it's parent",
    },

    {
      name: ":nth-last-child(n)",
      example: "p:nth-last-child(3)",
      description:
        "Selects every <p> element that is the second child of its parent, counting from the last child",
    },
  ],
};
