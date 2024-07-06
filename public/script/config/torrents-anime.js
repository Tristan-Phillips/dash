const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'Beatrice-raw', url: 'https://beatrice-raws.org/' }],
      ['b', { name: 'Nyaa', url: 'https://nyaa.si/' }],
      ['c', { name: 'SubsPlz', url: 'https://subsplease.org/' }],
      ['d', { name: 'Shana', url: 'https://www.shanaproject.com/' }],
      ['e', { name: 'Tokyo', url: 'https://www.tokyotosho.info/?cat=1' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);