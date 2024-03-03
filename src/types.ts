export interface MSNobject {
  Log: {
    Message: Array<MSNmessage>;
  };
}

export interface MSNmessage {
  Date: string;
  Time: string;
  Text: {
    $t: string;
  };
  From: {
    User: {
      FriendlyName: string;
    };
  };
  left?: boolean;
}
