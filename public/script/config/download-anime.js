const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'ATosho', url: 'https://url.trap.lol/animetosho' }],
      ['b', { name: 'Chuathanh', url: 'https://url.trap.lol/chauthanh' }],
      ['c', { name: 'Noobsubs', url: 'https://url.trap.lol/noobsubs' }],
      ['d', { name: 'AOut', url: 'https://url.trap.lol/animeout' }],
      ['e', { name: 'Tokyo', url: 'https://url.trap.lol/tokyoinsider' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);