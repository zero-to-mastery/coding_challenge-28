const html = {
    name: 'Hypertext Markup Language',
    description_short: 'HTML is a markup language, used for structuring and presenting content on the World Wide Web',
    description: 'Hypertext Markup Language is the only way to describe how to render documents in the web browser. Consists of elements and attributes, whichc makes it easy to learn, read and extense',
    paradigm: ['{{UNKNOWN}}'],
    developed_by: [
      {
        name: 'Tim Berners-Lee',
        endpoint: '/developers/tim-berners-lee',
        website: 'https://www.w3.org/People/Berners-Lee/',
        twitter: 'https://twitter.com/timberners_lee'
      }
    ],
    first_appeared: '1993',
    version: {
      current_stable: {
        version_name: 'HTML 5.2',
        code_name: '{{UNKNOWN}}',
        release_data: '2017-12-14'
      },
      upcoming_version: {
        version_name: 'HTML.next',
        code_name: '{{UNKNOWN}}',
        expected_release_date: '{{UNKNOWN}}'
      },
      all_versions: [
        {
            version_name: 'HTML 1.0',
            code_name: '{{UNKNOWN}}',
            release_date: '1993'
        },
        {
            version_name: 'HTML 2.0',
            code_name: '{{UNKNOWN}}',
            release_date: '1995-11-24'
        },
        {
            version_name: 'HTML 3.2',
            code_name: 'Wilbur',
            release_date: '1996-09-12'
        },
        {
            version_name: 'HTML 4.0',
            code_name: 'COUGUAR',
            release_date: '1997-12-18'
        },
        {
            version_name: 'HTML 4.01',
            code_name: 'COUGUAR',
            release_date: '1999-12-24'
        },
        {
            version_name: 'HTML 5.0',
            code_name: '{{UNKNOWN}}',
            release_date: '2014-10-2+'
        },
        {
            version_name: 'HTML 5.1',
            code_name: '{{UNKNOWN}}',
            release_date: '2016-11-01'
        },
        {
            version_name: 'HTML 5.2',
            code_name: '{{UNKNOWN}}',
            release_date: '2017-12-14'
        },
      ],
    },
    typing_discipline: ['{{UNKNOWN}}'],
    platform: ['{{unknown}}'],
    operating_system: ['{{unknown}}'],
    license: ['{{unknown}}'],
    example_snippets: {
      hello_world: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>This is a title</title>
        </head>
        <body>
          <p>Hello world!</p>
        </body>
      </html>`,
    },
  };
  
  module.exports = html;