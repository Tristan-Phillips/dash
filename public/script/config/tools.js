const CONFIG = {
    commandPathDelimiter: '/',
    commandSearchDelimiter: ' ',
    //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
    defaultSearchTemplate: 'https://kagi.com/search?q={}',
    openLinksInNewTab: false,
    suggestionLimit: 4,
  };

  const COMMANDS = new Map([
    ['c', { name: 'Cyberchef', url: 'https://url.trap.lol/cyberchef' }],
    ['e', { name: 'Exdraw', url: 'https://url.trap.lol/exdraw' }],
    ['i', { name: 'It-Tools', url: 'https://url.trap.lol/it-tools' }],
    ['p', { name: 'PDF', url: 'https://url.trap.lol/pdf' }],
    ['r', { name: 'Readme', url: 'https://url.trap.lol/readme' }],
    [
      '0',
      {
        name: 'Home',
        url: 'https://url.trap.lol/dash',
      },
    ],
  ]);