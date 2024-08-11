const CONFIG = {
    commandPathDelimiter: '/',
    commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
    openLinksInNewTab: false,
    suggestionLimit: 4,
  };

  const COMMANDS = new Map([
      ['1', { name: 'Kagi', url: 'https://url.trap.lol/kagi' }],
      ['2', { name: 'DDG', url: 'https://url.trap.lol/ddg' }],
      ['3', { name: 'SearX', url: 'https://url.trap.lol/searx' }],
      ['4', { name: 'StartPage', url: 'https://url.trap.lol/startpage' }],
    [
      '0',
      {
        name: 'Home',
        url: 'https://url.trap.lol/dash',
      },
    ],
  ]);