# React Interview Task

[Click here to view webpage](http://localhost:3000)

### Features implemented
- Holdings and Blockets (search results) data are stored in json files to replicate API data, each in a separate file (for seperate API endpoints) 
    - blokets.json and holdings.json.
- I have used Google's popular Open Source Material UI component library for some of the input fields (installed via npm).
- Edited CSS of Material UI and custom components to match the specfication's font and pallet.
- Display section for holdings information mapped from holdings.json using map with drag and drop functionality.
    - Design can be changed when the specifics of where and how to display them is known 
    - Will these items have unique ids to use as keys and how will they be ordered?
- Search for blokets (notifications) by filtering with onchange event in searchbar.
- Options/Filters underneath search bar but can add them to hamburger menu button:
    - Maturity slider is set to go up in increments of 10 but this can be changed.
- If certainty of execution is greater than 3 change font to blue and add Hot next to number or Not if less than.

### Changes or Improvements
- Create proper drop area for holdings when requirements for it are known and stop items from disappearing when dragged off.
- Search options/filters to change matches table.
- Replace sell out and top up console logs with functionality to highlight items (or create modals).
- Change avatars to company logos or icons (e.g. Apple and Vodaphone) if wanted - are there logos for these bonds? 
    - can store these in a folder and add urls to the json data
- Could use Typescript if preferred & time frame of project permits or include proptypes & tests (test framework - e.g. Jest).
- Implement routing and authentication with React?
- Pagination options after knowing whether done on frontend or backend.
- Loading if fetching data from API.