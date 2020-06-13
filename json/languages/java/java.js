const Java = {
  name: 'Java',
  description_short:
    'Java is a class-based, object-oriented programming language, intended to let application developers write once, run anywhere.',
  description:
    'Java is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, big data processing, embedded systems, and so on. According to Oracle, the company that owns Java, Java runs on 3 billion devices worldwide, which makes Java one of the most popular programming languages.',
  paradigm: ['object-oriented', 'functional', 'imperative', 'declarative'],
  developed_by: [
    {
      name: 'James Gosling',
      endpoint: '/developers/james-gosling',
      website: 'https://en.wikipedia.org/wiki/James_Gosling',
      twitter: 'https://twitter.com/errcraft',
    },
  ],
  first_appeared: '1995-05-23',
  version: {
    current_stable: {
      version_name: 'Java SE 14',
      code_name: '{{UNKNOWN}}',
      release_data: 'March 2020',
    },
    upcoming_version: {
      version_name: 'Java SE 15',
      code_name: '{{UNKNOWN}}',
      expected_release_date: 'September 2020',
    },
    all_versions: [],
  },
  typing_descipline: ['static', 'strong', 'safe', 'nomative', 'manifest'],
  platform: ['Web', 'Mobile', 'Embedded'],
  operating_system: ['Windows', 'Solaris Os', 'Linux', 'MacOS'],
  license: ['BCL', 'GNU', 'OTN'],
  example_snippets: {
    hello_world: `
      public class HelloWorld{
        public static void main(String args[]){
          System.out.println("Hello World");
        }
      }
    `,
  },
};

module.exports = Java;
