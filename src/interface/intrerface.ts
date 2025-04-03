export interface IMetatags {
  heading?: string;
  subheading: string;
  description?: string;
  ogImage?: string;
  type?: string;
  keywords?: string;
}

export interface IButton {
  buttonName: string;
  navigateTo: string;
  htmlType?:string;
}

export interface INewsBlog {
  slug: string;
  title: string;
  description: string;
  image_link: string;
  published_date: string;
}

export interface IStudentLife {
  image: string;
  title: string;
  slug: string;
  description: string;
}

export interface ICompanyProfile{
  facebook:string;
  instagram:string;
  twitter:string;
  youtube:string;
}
