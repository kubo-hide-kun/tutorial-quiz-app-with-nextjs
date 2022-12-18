import { NextApiRequest, NextApiResponse } from "next";
import { getResults, SAMPLE_QUESTION } from "../../../domains/question";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { answers } = JSON.parse(req.body) as { answers: string[][] };
      const results = getResults(SAMPLE_QUESTION, answers)
      res.status(200).json({ results });
    }
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
