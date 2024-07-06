const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'Academic', url: 'https://academictorrents.com/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);