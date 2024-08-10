const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      //defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'Anna', url: 'https://url.trap.lol/annas-archive' }],
      ['b', { name: 'CourseBag', url: 'https://url.trap.lol/coursesbag' }],
      ['c', { name: 'DFC', url: 'https://url.trap.lol/downloadfreecourse' }],
      ['d', { name: 'eHunter', url: 'https://url.trap.lol/ebook-hunter' }],
      ['e', { name: 'PDFDrive', url: 'https://url.trap.lol/pdfdrive' }],
      ['f', { name: 'Comics', url: 'https://url.trap.lol/getcomics' }],
      ['g', { name: 'PMagazine', url: 'https://url.trap.lol/pdfmagazines' }],
      ['h', { name: 'Libgen', url: 'https://url.trap.lol/libgen' }],
      ['i', { name: 'DMagz', url: 'https://url.trap.lol/downmagaz' }],
      ['j', { name: 'Aorg', url: 'https://url.trap.lol/archive-texts' }],
      ['k', { name: 'OPDF', url: 'https://url.trap.lol/oceanofpdf' }],
      ['l', { name: 'PDFRoom', url: 'https://url.trap.lol/pdfroom' }],
      ['m', { name: 'Zlib', url: 'https://url.trap.lol/singlelogin' }],
      [
        '0',
        {
          name: 'Home',
          url: 'https://url.trap.lol/dash',
        },
      ],
    ]);