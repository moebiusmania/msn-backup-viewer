export interface MSNobject {
  Log: {
    Message: Array<MSNmessage>
  }
};

export interface MSNmessage {
  _attributes: {
    Date: string,
    Time: string
  },
  Text: {
    _text: string
  },
  From: {
    User: {
      _attributes: {
        FriendlyName: string
      }
    }
  },
  left ?: boolean
};