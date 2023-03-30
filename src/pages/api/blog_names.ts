// http://localhost:3000/api/blog_names
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type Error = {
  error: string;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<String[] | Error>
) {
  let data = await fs.promises.readdir("./blogPostData/");
  res.status(200).json(data);
}
