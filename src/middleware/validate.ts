import { NextApiRequest, NextApiResponse } from "next";
import { Validator } from "node-input-validator";

export default function validate(rules: any) {
  return async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    const v = new Validator(req.body, rules);

    const matched = await v.check();
    if (!matched) {
      return res.status(422).send(v.errors);
    }

    next();
  };
}
