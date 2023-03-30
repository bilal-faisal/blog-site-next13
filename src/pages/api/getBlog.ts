// http://localhost:3000/api/getBlog?slug=how-to-learn-javascript
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fs.readFile(`blogPostData/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "No such blog found" });
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
}
