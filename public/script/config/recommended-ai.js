const CONFIG = {
    commandPathDelimiter: '/',
    commandSearchDelimiter: ' ',
    //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
    defaultSearchTemplate: 'https://kagi.com/search?q={}',
    openLinksInNewTab: false,
    suggestionLimit: 4,
  };

  const COMMANDS = new Map([
      ['1', { name: 'ChatBox', url: 'https://url.trap.lol/chatbox' }],
    [
      '0',
      {
        name: 'Home',
        url: 'https://url.trap.lol/dash',
      },
    ],
  ]);