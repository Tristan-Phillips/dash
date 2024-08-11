const CONFIG = {
    commandPathDelimiter: '/',
    commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
    openLinksInNewTab: false,
    suggestionLimit: 4,
  };

  const COMMANDS = new Map([
      ['1', { name: 'PDrive', url: 'https://url.trap.lol/pdrive' }],
      ['2', { name: 'BBlaze', url: 'https://url.trap.lol/storage' }],
    [
      '0',
      {
        name: 'Home',
        url: 'https://url.trap.lol/dash',
      },
    ],
  ]);