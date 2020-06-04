const fs = require('fs');
const path = require('path');

let frameworkFilesArray = fs.readdirSync(path.join(__dirname, "../json/frameworks"));

for(let i=0; i<frameworkFilesArray.length; i++) {

  let frameworkFeaturesArray = fs.readdirSync(path.join(__dirname, `../json/frameworks/${frameworkFilesArray[i]}/features`));

  for(let j=0; j<frameworkFeaturesArray.length; j++) {

    let currentFeature = require(`../json/frameworks/${frameworkFilesArray[i]}/features/${frameworkFeaturesArray[j]}`);

    describe(`Testing ${frameworkFeaturesArray[i]}`, () => {
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
