const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'FileP', url: 'https://filepursuit.com/' }],
      ['b', { name: 'Aorg', url: 'https://archive.org/' }],
      ['c', { name: 'Scnlog', url: 'https://scnlog.me/' }],
      ['d', { name: 'SA', url: 'https://softarchive.is/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);