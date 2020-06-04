const fs = require('fs');
const path = require('path');

let frameworkFilesArray = fs.readdirSync(path.join(__dirname, "../json/frameworks"));

for(let i=0; i<frameworkFilesArray.length; i++) {

  let currentFramework = require(`../json/frameworks/${frameworkFilesArray[i]}/${frameworkFilesArray[i]}`);

  describe(`Testing ${frameworkFilesArray[i]}`, () => {
    it('check json', () => {
      const parseJson = () => {
          const json = JSON.stringify(currentFramework);
          JSON.parse(json);
      };
      expect(parseJson).not.toThrow();
    })

    describe('string value test', () => {
    	it('Framework name', async () => {
    		await expect(currentFramework.name.length).toBeGreaterThan(0)
    	})
    	it('Framework short description', async () => {
    		await expect(currentFramework.description_short.length).toBeGreaterThan(0)
    	})
    	it('Framework description', async () => {
    		await expect(currentFramework.description.length).toBeGreaterThan(0)
    	})
    	it('Framework developer', async () => {
    		await expect(currentFramework.developed_by.length).toBeGreaterThan(0)
    	})
    })

  })
}
