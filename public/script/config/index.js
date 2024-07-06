const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
        ['1', { name: 'Torrents', url: 'https://dash.trap.lol/hub/torrents/' }],
        ['2', { name: 'Social', url: 'https://dash.trap.lol/hub/social/' }],
        ['3', { name: 'Downloads', url: 'https://dash.trap.lol/hub/download/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);