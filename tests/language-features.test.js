const fs = require('fs');
const path = require('path');

let langFilesArray = fs.readdirSync(path.join(__dirname, "../json/languages"));

for(let i=0; i<langFilesArray.length; i++) {

  let langFeaturesArray = fs.readdirSync(path.join(__dirname, `../json/languages/${langFilesArray[i]}/features`));

  for(let j=0; j<langFeaturesArray.length; j++) {

    let currentFeature = require(`../json/languages/${langFilesArray[i]}/features/${langFeaturesArray[j]}`);

    describe(`Testing ${langFeaturesArray[i]}`, () => {
      it('check json', () => {
        const parseJson = () => {
            const json = JSON.stringify(currentFeature);
            JSON.parse(json);
        };
        expect(parseJson).not.toThrow();
      })
  
      describe('string value test', () => {
        it('Language feature name', async () => {
          await expect(currentFeature.name.length).toBeGreaterThan(0)
        })
        it('Language feature description', async () => {
          await expect(currentFeature.description.length).toBeGreaterThan(0)
        })
      })
    })
  }

}
