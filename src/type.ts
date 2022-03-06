export interface MSNobject {
  Log: {
    Message: Array<MSNmessage>;
  };
}

export interface MSNmessage {
  "@attributes": {
    Date: string;
    Time: string;
  };
  Text: string;
  From: {
    User: {
      "@attributes": {
        FriendlyName: string;
      };
    };
  };
  left?: boolean;
}
