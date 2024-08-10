const CONFIG = {
    commandPathDelimiter: '/',
    commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
    openLinksInNewTab: false,
    suggestionLimit: 4,
  };

  const COMMANDS = new Map([
      ['1', { name: 'Mullvad', url: 'https://url.trap.lol/vpn' }],
      ['2', { name: 'ProtonVPN', url: 'https://url.trap.lol/pvpn' }],
    [
      '0',
      {
        name: 'Home',
        url: 'https://url.trap.lol/dash',
      },
    ],
  ]);