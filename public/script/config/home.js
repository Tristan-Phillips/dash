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
      ['e', { name: 'ScreenShare', url: 'https://url.trap.lol/screenshare' }],
      ['i', { name: 'IT-Tools', url: 'https://url.trap.lol/it-tools' }],
      ['p', { name: 'PDF Tools', url: 'https://url.trap.lol/pdf' }],
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