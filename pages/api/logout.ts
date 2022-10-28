import cookie from "cookie";

/**
 * ! We are trying to use the "Secure" flag, but trying to transfer cookies over http instead of https.
 * ! Secure flag will only work on https. So if you use this flag over the http channel, these cookies will not saved.
 * ! N.B We must need to add the secure flag and moved to the https channel.
 * @param req
 * @param res
 */
export default function logout(req: any, res: any) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    return res.json({ message: `${req.method} not allowed` });
  }

  res.setHeader("Set-Cookie", [
    cookie.serialize("token", "", {
      httpOnly: true,
      // secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      sameSite: "lax",
      path: "/",
    }),
    cookie.serialize("me", "", {
      httpOnly: true,
      // secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      sameSite: "lax",
      path: "/",
    }),
  ]);

  res.statusCode = 200;
  res.json({ success: true });
}
