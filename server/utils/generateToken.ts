import jwt, { Secret } from "jsonwebtoken";
import sanitizedConfig from "../config";

const generateToken = (id: any) => {
  return jwt.sign({ id }, sanitizedConfig.JWT_SECRET as Secret, {
    expiresIn: "30d",
  });
};

export default generateToken;
