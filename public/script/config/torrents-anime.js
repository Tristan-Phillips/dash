const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['b', { name: 'Beatrice-raw', url: 'https://beatrice-raws.org/' }],
      ['n', { name: 'Nyaa', url: 'https://nyaa.si/' }],
      ['p', { name: 'SubsPlz', url: 'https://subsplease.org/' }],
      ['s', { name: 'Shana', url: 'https://www.shanaproject.com/' }],
      ['t', { name: 'Tokyo', url: 'https://www.tokyotosho.info/?cat=1' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);