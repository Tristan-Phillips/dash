const CONFIG = {
    commandPathDelimiter: '/',
    commandSearchDelimiter: ' ',
    //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
    defaultSearchTemplate: 'https://kagi.com/search?q={}',
    openLinksInNewTab: false,
    suggestionLimit: 4,
  };

  const COMMANDS = new Map([
      ['1', { name: 'Signal', url: 'https://url.trap.lol/message' }],
      ['2', { name: 'Matrix', url: 'https://url.trap.lol/matrix' }],
      ['3', { name: 'Telegram', url: 'https://url.trap.lol/telegram' }],
      ['4', { name: 'Whatsapp', url: 'https://url.trap.lol/whatsapp' }],
    [
      '0',
      {
        name: 'Home',
        url: 'https://url.trap.lol/dash',
      },
    ],
  ]);