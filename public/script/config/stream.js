const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'Anime', url: 'https://url.trap.lol/anix' }],
      ['b', { name: 'TV && Movies', url: 'https://url.trap.lol/flixtorz' }],
      ['c', { name: 'AudioBooks', url: 'https://url.trap.lol/audiobooks' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);