# watchy

A desktop app for monitoring events in Real-time

### Dependencies

- Node.js
- NW.js (0.12.3)

You'll also need to create a Twitter app via Twitter's developer API. For more information, see here: https://dev.twitter.com


### Installation

    git clone 
    cd watchy
    npm install
    
Next, create a copy of the config.example.js file, and put it at config.js:
  
    cp config.example.js config.js
    
After that, fill in the details of the config.js file with the OAuth credentials for your Twitter application

Once that is done, run the application:

    nw
