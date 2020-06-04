/*
 *  Instructions to add new language/framework:
 1. create a new directory in /json/language or /json/language.
 2. create a new js file with the same name as the directory created above.
 Ex. if the directory was "python", then the file should be "python.js"
 3. copy/paste the content below this comment in this newly created file and change stuff accordingly.
 
 *  The file structure should look like this:
    |-> json
          |-> languages
                |-> {language_name}
                        |-> {language_name}.js

 */

// make sure the variable holding the language object("schema__language" in this case) is same as the file name
const schema__language = {
  name: 'name of language',
  description_short: 'a short desc',
  description: 'description',
  paradigm: ['paradigm names'],
  developed_by: 'name of developer(s)',
  first_appeared: 'type: date',
  version: {
    current_stable: {
      version_name: 'v1.0',
      code_name: '',
    },
    all_versions: [
      {
        version_name: 'v1.0',
        code_name: '',
      },
    ],
  },
  typing_descipline: ['static', 'strong', 'affine'],
  platform: [],
  operating_system: [],
  license: ['MIT'],
  examples: {
    hello_world: 'brave enough to put some code here? xD',
  },
};

module.exports = schema__language;