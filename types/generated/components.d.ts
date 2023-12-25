import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogDetilBlogDetil extends Schema.Component {
  collectionName: 'components_blog_detil_blog_detils';
  info: {
    displayName: 'Blog detil';
  };
  attributes: {
    author: Attribute.String;
    createAt: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-detil.blog-detil': BlogDetilBlogDetil;
    }
  }
}
