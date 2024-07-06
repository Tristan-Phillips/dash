const CONFIG = {
      commandPathDelimiter: '/',
      commandSearchDelimiter: ' ',
      defaultSearchTemplate: 'https://duckduckgo.com/?q={}',
      //defaultSearchTemplate: 'https://kagi.com/search?q={}',
      openLinksInNewTab: false,
      suggestionLimit: 4,
    };
  
    const COMMANDS = new Map([
      ['a', { name: 'Anna', url: 'https://annas-archive.gs/?' }],
      ['b', { name: 'CourseBag', url: 'https://coursesbag.com/' }],
      ['c', { name: 'DFC', url: 'https://downloadfreecourse.com/' }],
      ['d', { name: 'eHunter', url: 'https://ebook-hunter.org/' }],
      ['e', { name: 'PDFDrive', url: 'https://pdfdrive.to/' }],
      ['f', { name: 'Comics', url: 'https://getcomics.org/' }],
      ['g', { name: 'PMagazine', url: 'https://pdfmagazines.club/' }],
      ['h', { name: 'Libgen', url: 'https://libgen.is/' }],
      ['i', { name: 'DMagz', url: 'https://downmagaz.net/' }],
      ['j', { name: 'Aorg', url: 'https://archive.org/details/texts' }],
      ['k', { name: 'OPDF', url: 'https://oceanofpdf.com/' }],
      ['l', { name: 'PDFRoom', url: 'https://pdfroom.com/' }],
      ['m', { name: 'Zlib', url: 'https://singlelogin.re/' }],
      [
        '0',
        {
          name: 'Home',
          url: 'http://dash.trap.lol',
        },
      ],
    ]);