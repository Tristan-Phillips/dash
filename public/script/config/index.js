const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
        ['1', { name: 'Torrents', url: 'https://url.trap.lol/torrents' }],
        ['2', { name: 'Social', url: 'https://url.trap.lol/socialdash' }],
        ['3', { name: 'Downloads', url: 'https://url.trap.lol/download' }],
        ['4', { name: 'Stream', url: 'https://url.trap.lol/stream' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);