const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['b', { name: 'BlueRoms', url: 'https://www.blueroms.ws/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);