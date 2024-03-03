export interface MSNobject {
  Log: {
    Message: Array<MSNmessage>;
  };
}

export interface MSNmessage {
  Date: string;
  Time: string;
  Text: { "#text": string };
  From: {
    User: {
      "@_FriendlyName": string;
    };
  };
  left?: boolean;
}
