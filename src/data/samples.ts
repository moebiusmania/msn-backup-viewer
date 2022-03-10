const xml: string = `<?xml version="1.0"?><?xml-stylesheet type='text/xsl' href='MessageLog.xsl'?>`;

export const placeholder: string = `${xml}<Log></Log>`;

export const example: string = `${xml}
<Log>
  <Message Date="14/09/2007" Time="18.32.07" DateTime="2007-09-14T16:32:07.883Z" >
    <From>
      <User FriendlyName="John Doe"/>
    </From>
    <Text>ahhh good old MSN messenger!</Text>
  </Message>
  <Message Date="14/09/2007" Time="18.34.07" DateTime="2007-09-14T16:34:07.883Z" >
    <From>
      <User FriendlyName="Mr Smith"/>
    </From>
    <Text>it never gets old</Text>
  </Message>
  <Message Date="14/09/2007" Time="18.35.07" DateTime="2007-09-14T16:35:07.883Z" >
    <From>
      <User FriendlyName="John Doe"/>
    </From>
    <Text>so true!</Text>
  </Message>
  <Message Date="14/09/2007" Time="18.36.07" DateTime="2007-09-14T16:36:07.883Z" >
    <From>
      <User FriendlyName="Mr Smith"/>
    </From>
    <Text>see you later mate...</Text>
  </Message>
</Log>
`;
