export interface GetUserBlogsResponse {
  kind: string; // "blogger#blogList"
  items: Blog[];
}

export interface Blog {
  kind: string; // "blogger#blog"
  id: string;
  status: string; // "LIVE"
  name: string;
  description: string;
  published: string; // Date string in ISO 8601 format
  updated: string; // Date string in ISO 8601 format
  url: string;
  selfLink: string;
  posts: PostInfo;
  pages: PostInfo;
  locale: Locale;
}

export interface PostInfo {
  totalItems: number;
  selfLink: string;
}

export interface Locale {
  language: string;
  country: string;
  variant: string;
}
