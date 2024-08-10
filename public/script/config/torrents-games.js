const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'Dodi', url: 'https://url.trap.lol/dodi-repacks' }],
      ['b', { name: 'FitGirl', url: 'https://url.trap.lol/fitgirl-repacks' }],
      ['c', { name: 'GOG', url: 'https://url.trap.lol/freegogpcgames' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);