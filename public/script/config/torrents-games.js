const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'Dodi', url: 'https://dodi-repacks.site/' }],
      ['b', { name: 'FitGirl', url: 'https://fitgirl-repacks.site/' }],
      ['c', { name: 'GOG', url: 'https://freegogpcgames.com/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);