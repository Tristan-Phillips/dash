const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
        ['d', { name: 'Discord', url: 'https://url.trap.lol/dishub' }],
        ['m', { name: 'Mastodon', url: 'https://url.trap.lol/instances' }],
        ['r', { name: 'Reddit', url: 'https://url.trap.lol/redditgeneral' }],
        ['y', { name: 'YouTube', url: 'https://url.trap.lol/youtubegeneral' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);