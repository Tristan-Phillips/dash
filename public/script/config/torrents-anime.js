const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'Beatrice-raw', url: 'https://url.trap.lol/beatrice-raws' }],
      ['b', { name: 'Nyaa', url: 'https://url.trap.lol/nyaa' }],
      ['c', { name: 'SubsPlz', url: 'https://url.trap.lol/subsplease' }],
      ['d', { name: 'Shana', url: 'https://url.trap.lol/shanaproject' }],
      ['e', { name: 'Tokyo', url: 'https://url.trap.lol/tokyotosho' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);