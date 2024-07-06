const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
        ['d', { name: 'Discord', url: 'https://dishub.io/' }],
        ['m', { name: 'Mastodon', url: 'https://instances.social/' }],
        ['r', { name: 'Reddit', url: 'https://www.reddit.com/' }],
        ['y', { name: 'YouTube', url: 'https://youtube.com/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);