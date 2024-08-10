const CONFIG = {
    commandPathDelimiter: '/',
    commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
    openLinksInNewTab: false,
    suggestionLimit: 4,
  };

  const COMMANDS = new Map([
      ['1', { name: 'ProtonPass', url: 'https://url.trap.lol/passwordmanager' }],
      ['2', { name: '1Password', url: 'https://url.trap.lol/onepass' }],
      ['3', { name: 'Bitwarden', url: 'https://url.trap.lol/bitwarden' }],
    [
      '0',
      {
        name: 'Home',
        url: 'https://url.trap.lol/dash',
      },
    ],
  ]);