/*eslint sort-keys: "warn"*/
/*eslint "@typescript-eslint/camelcase": "off"*/

import { TagID } from "../types/tags";

const en = {
  archive_title: "Blog archive",
  books: "Books",
  c: "C",
  cmake: "CMake",
  code: "Coding",
  cpp: "C++",
  create: "Create",
  csharp: "C#",
  dod: "Data-oriented design",
  elm: "Elm",
  elsewhere: "Elsewhere",
  event: "Event",
  functional: "Functional Programming",
  game: "Game",
  graphics: "Computer Graphics",
  graphql: "GraphQL",
  java: "Java",
  lang: "English",
  lastModify: "Last Modify",
  library: "Library",
  math: "Mathematics",
  opengl: "OpenGL",
  opinion: "Opinion",
  pl: "Programming Languages",
  python: "Python",
  react: "React",
  recent_posts: "Recent Posts",
  rt: "Ray tracing",
  showall: "Show all",
  stuff_I_wrote_about: (tag: TagID) => `Stuff I Wrote About ${en[tag]}`,
  tags: "Tags",
  talks: "Talks",
  test: "Testing",
  title: "Lesley Lai",
  typescript: "Typescript",
  web: "Web",
  x86: "x86"
};

export type Translations = typeof en;

const zh: Translations = {
  archive_title: "博文目录",
  books: "书籍",
  c: en.c,
  cmake: en.cmake,
  code: "编程",
  cpp: en.cpp,
  create: "创建时间",
  csharp: en.csharp,
  dod: "面向数据设计",
  elm: en.elm,
  elsewhere: "链接",
  event: "活动",
  functional: "函数式编程",
  game: "游戏",
  graphics: "图形学",
  graphql: en.graphql,
  java: en.java,
  lang: "中文",
  lastModify: "最近修改时间",
  library: "软件库",
  math: "数学",
  opengl: en.opengl,
  opinion: "观点",
  pl: "编程语言",
  python: en.python,
  react: en.react,
  recent_posts: "最新内容",
  rt: "光线追踪",
  showall: "显示所有",
  stuff_I_wrote_about: (tag: TagID) => `关于${zh[tag]}的博文`,
  tags: "标签",
  talks: "演讲",
  test: "软件测试",
  title: "赖思理的博客",
  typescript: en.typescript,
  web: en.web,
  x86: en.x86
};

export const translations = {
  en: en,
  zh: zh
};

export type Language = keyof typeof translations;

export const languages = Object.keys(translations) as Language[];