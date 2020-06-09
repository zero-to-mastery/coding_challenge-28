const java = {
    name: 'Java',
    description_short: 'Java is a high-level object-oriented programming language developed by Sun Microsystems.',
    description: 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere, meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.',
    paradigm: ['functional', 'imperative', 'object-oriented'],
    developed_by: [
      {
        name: "James Gosling",
        endpoint: "/developers/james-gosling",
        website: "http://nighthacks.com/jag/blog/400/index.html",
        twitter: "https://twitter.com/errcraft"
      }
    ],
    first_appeared: '1995-05-23',
    version: {
      current_stable: {
        version_name: 'Java SE 14',
        code_name: '{{UNKNOWN}}',
        release_data: "March 2020"
      },
      upcoming_version: {
        version_name: "Java SE 15",
        code_name: "{{UNKNOWN}}",
        expected_release_date: "September 2020"
      },
      all_versions: [
        {
          version_name: 'JDK Beta',
          code_name: '{{UNKNOWN}}',
          release_date: '1995'
        },
        {
            version_name: 'JDK 1.0',
            code_name: '{{UNKNOWN}}',
            release_date: 'January 1996'
        },
        {
            version_name: 'JDK 1.1',
            code_name: '{{UNKNOWN}}',
            release_date: 'February 1997'
        },
        {
            version_name: 'J2SE 1.2',
            code_name: '{{UNKNOWN}}',
            release_date: 'December 1998'
        },
        {
            version_name: 'J2SE 1.3',
            code_name: '{{UNKNOWN}}',
            release_date: 'May 2000'
        },
        {
            version_name: 'J2SE 1.4',
            code_name: '{{UNKNOWN}}',
            release_date: 'February 2002'
        },
        {
            version_name: 'J2SE 5.0',
            code_name: '{{UNKNOWN}}',
            release_date: 'September 2004'
        },
        {
            version_name: 'Java SE 6',
            code_name: '{{UNKNOWN}}',
            release_date: 'SDecember 2006'
        },
        {
            version_name: 'Java SE 7',
            code_name: '{{UNKNOWN}}',
            release_date: 'July 2011'
        },
        {
            version_name: 'Java SE 8 (LTS)',
            code_name: '{{UNKNOWN}}',
            release_date: 'March 2014'
        },
        {
            version_name: 'Java SE 9',
            code_name: '{{UNKNOWN}}',
            release_date: 'September 2017'
        },
        {
            version_name: 'Java SE 10',
            code_name: '{{UNKNOWN}}',
            release_date: 'March 2018'
        },
        {
            version_name: 'Java SE 11 (LTS)',
            code_name: '{{UNKNOWN}}',
            release_date: 'September 2018'
        },
        {
            version_name: 'Java SE 12',
            code_name: '{{UNKNOWN}}',
            release_date: 'March 2019'
        },
        {
            version_name: 'Java SE 13',
            code_name: '{{UNKNOWN}}',
            release_date: 'September 2019'
        },
        {
            version_name: 'Java SE 14',
            code_name: '{{UNKNOWN}}',
            release_date: 'March 2020'
        },
      ],
    },
    typing_discipline: ['static', 'strong', 'safe', 'nominative', 'manifest'],
    platform: ['cross-platform'],
    operating_system: ['all'],
    license: ['open standard'],
    examples: {
      hello_world: 'public class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World!");\n\t}\n}',
    },
  };
  
  module.exports = java;
  