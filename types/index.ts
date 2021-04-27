export interface Tags {
  created: string
  updated: string
  tag: string
  desc: string
  _id: string
  [key: string]: any
}

export interface Article {
  avatar?: string
  body: string
  created: string
  image: string
  intro: string
  resource?: number
  title: string
  updated?: string
  tags?: Tags[]
  _id: string
  [key: string]: any
}

// 标签相关
export interface TagList {
  numList: number
  created: string
  updated?: string
  desc: string
  tag: string
  _id: string
  [key: string]: any
}
