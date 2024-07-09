export interface GetBlogPostsResponse {
  kind: string; // "blogger#postList"
  nextPageToken?: string; // Optional string for pagination
  etag?: string;
  items: BlogPost[];
}

export interface BlogPost {
  kind: string; // "blogger#post"
  id: string;
  blog: {
    id: string;
  };
  published: string; // Date in ISO-8601 format (e.g., "2011-08-01T19:58:00.000Z")
  updated: string; // Date in ISO-8601 format
  url: string;
  selfLink: string;
  title: string;
  content?: string; // Optional string for potentially elided content
  author: Author;
  replies: {
    totalItems: string;
    selfLink: string;
  };
  etag?: string;
}

export interface Author {
  id: string;
  displayName: string;
  url: string;
  image?: {
    url: string;
  }; // Optional image object
}

export interface Location {
  name: string;
  lat: number;
  lng: number;
  span: string;
}
