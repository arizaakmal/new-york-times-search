export interface Article {
  _id: string;
  web_url: string;
  abstract: string;
  headline: {
    main: string;
  };
  byline: {
    original?: string;
  };
  pub_date: string;
}

export interface NYTSearchResponse {
  response: {
    docs: Article[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}
