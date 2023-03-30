// http://localhost:3000/api/blogs
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type Error = {
  error: string;
};

type Blog = {
  slug: string;
  title: string;
  author: string;
  content: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog[] | Error>
) {
  let data = await fs.promises.readdir("./blogPostData/");
  let allBlogs: Blog[] = [];
  for (let i = 0; i < data.length; i++) {
    const fileName = data[i];
    let blog = await fs.promises.readFile(`blogPostData/${fileName}`, "utf-8");
    allBlogs.push(JSON.parse(blog));
  }
  res.status(200).json(allBlogs);
}
