const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'ATosho', url: 'https://animetosho.org/' }],
      ['b', { name: 'Chuathanh', url: 'https://chauthanh.info/' }],
      ['c', { name: 'Noobsubs', url: 'https://www.noobsubs.com/' }],
      ['d', { name: 'AOut', url: 'https://www.animeout.xyz/' }],
      ['e', { name: 'Tokyo', url: 'https://www.tokyoinsider.com/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);