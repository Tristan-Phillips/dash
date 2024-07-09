const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['c', { name: 'Cyberchef', url: 'https://url.trap.lol/cyberchef' }],
      ['d', { name: 'Database', url: 'https://url.trap.lol/db' }],
      ['e', { name: 'ScreenShare', url: 'https://url.trap.lol/screenshare' }],
      ['f', { name: 'RSS Feed', url: 'https://url.trap.lol/rss' }],
      ['i', { name: 'IT-Tools', url: 'https://url.trap.lol/it-tools' }],
      ['m', { name: 'Memos', url: 'https://url.trap.lol/memo' }],
      ['p', { name: 'PDF Tools', url: 'https://url.trap.lol/pdf' }],
      ['r', { name: 'Recipes', url: 'https://url.trap.lol/recipe' }],
      ['s', { name: 'PW Share', url: 'https://url.trap.lol/pwpush' }],
      ['t', { name: 'SpeedT', url: 'https://url.trap.lol/speedtest' }],
      ['w', { name: 'Web Check', url: 'https://url.trap.lol/webcheck' }],
      ['y', { name: 'YT Download', url: 'https://url.trap.lol/ytdlp' }],
      ['z', { name: 'WhiteBoard', url: 'https://url.trap.lol/wbo' }],
      [
        '0',
        {
          name: 'Index',
          url: 'https://url.trap.lol/dash-index',
        },
      ],
    ]);