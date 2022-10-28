import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * ! We are trying to use the "Secure" flag, but trying to transfer cookies over http instead of https.
 * ! Secure flag will only works on https. So if you use this flag over the http channal, these cookies will not saved.
 * ! N.B We must need to add the secure flag and moved to the https channal. 
 * @param req 
 * @param res 
 */
export default function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    return res.json({ message: `${req.method} not allowed` });
  }

  res.setHeader("Set-Cookie", [
    cookie.serialize("token", req.body.token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV !== "development",
      maxAge: req.body.tokenMaxAge,
      sameSite: "lax",
      path: "/",
    }),
    cookie.serialize("me", req.body.me, {
      // secure: process.env.NODE_ENV !== "development",
      maxAge: req.body.tokenMaxAge,
      sameSite: "lax",
      path: "/",
    }),
  ]);

  res.statusCode = 200;
  res.json({ success: true });
}