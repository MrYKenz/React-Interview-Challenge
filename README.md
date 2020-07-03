# Trading Tool in React :chart_with_upwards_trend::chart_with_downwards_trend:

:rocket: [CLICK HERE FOR DEMO](https://trading-tool.netlify.app/)

This was a React interview challenge with a specific list of requirements, which were the following:
- Drag and Drop information display (input)
    - Display given holdings information and functionality to highlight those as either ‘top up’ or ‘sell out’
- Search function (Search)
    - Filter with four filters given
- Matches/Notifications (Output)
    - Results of search and functionality to engage or dismiss

- Pallet: Black, Blue, White and Grey.

### Features implemented
- Holdings and Matches data are stored in json files to replicate API data, each in a separate file (for seperate API endpoints) 
    - matches.json and holdings.json.
- I have used Google's popular Open Source Material UI component library for some of the input fields (installed via npm).
- Edited CSS of Material UI and custom components to match the specfication's font and pallet.
- Display section for holdings information mapped from holdings.json using map with drag and drop functionality.
- Matches filter with onchange event in search bar.
- Maturity slider is set to go up in increments of 10 but this can be changed.

### Changes or Improvements
- Search options/filters to change matches table by including industry, rating, maturity etc. in json.
- Replace sell out and top up alerts with functionality to highlight items (or create modals).
- Change avatars to company logos or icons (e.g. Apple and Vodaphone).
    - can store these in a folder and add urls to the json data
- Could use Typescript if preferred & time frame of project permits or include proptypes & tests (test framework - e.g. Jest).
- Implement routing and authentication with React.
- Pagination options after knowing whether done on frontend or backend.
- Loading if fetching data from API.