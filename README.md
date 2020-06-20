# React Interview Task

[Click here to view webpage](http://localhost:3000)

- Holdings and Blockets (search results) data are stored in json files to replicate API data, each in a separate file (for seperate API endpoints) 
    - blockets.json and holdings.json.
- I have used Google's popular Open Source Material UI component library for some of the input fields (installed via npm).
- Some styles adopted from Material UI and others are completely custom (e.g. log out button) to match the specfication's font and pallet.
- I have created simple drag and drop functionality for holdings display but design can be changed when the specifics of where to place them and how the display is known (will these items have unique ids to use as keys - ordering etc.).
- Options/Filters underneath search bar - can change to options in hamburger menu button 
    - Also, the maturity filter slider is set to go up in increments of 10 - this can be changed.

### Changes or Improvements
- Create proper drop area for holdings when requirements for it are known and stop items from disappearing when dragged off.
- Replace sell out and top up console logs with functionality to highlight items (or create modals).
- Change avatars to company logos or icons (e.g. Apple and Vodaphone) if wanted - are there logos for these bonds? 
    - can store these in a folder and add urls to the json data
- Could use Typescript if preferred & time frame of project permits or include proptypes & tests (test framework - e.g. Jest).