const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'Bit Search', url: 'https://url.trap.lol/bitsearch' }],
      ['b', { name: 'BTDIG', url: 'https://url.trap.lol/btdig' }],
      ['c', { name: 'EXT', url: 'https://url.trap.lol/ext' }],
      ['d', { name: 'BT4G', url: 'https://url.trap.lol/bt4gprx' }],
      ['e', { name: 'LimeTorrents', url: 'https://url.trap.lol/limetorrents' }],
      ['f', { name: 'BitMet', url: 'https://url.trap.lol/btmet' }],
      ['g', { name: 'TPro', url: 'https://url.trap.lol/torrentdownloads' }],
      ['h', { name: '1337x', url: 'https://url.trap.lol/1337x' }],
      ['i', { name: 'TGalaxy', url: 'https://url.trap.lol/torrentgalaxy' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);