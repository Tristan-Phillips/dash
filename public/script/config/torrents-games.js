const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['d', { name: 'Dodi', url: 'https://dodi-repacks.site/' }],
      ['f', { name: 'FitGirl', url: 'https://fitgirl-repacks.site/' }],
      ['g', { name: 'GOG', url: 'https://freegogpcgames.com/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);