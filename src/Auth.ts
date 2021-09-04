import jwt from 'jsonwebtoken';
require('dotenv').config()
export default (request: any) => {
    const header = request.req.header.authorization;
    if (!header) {
        return { isAuth: false };
    }
    const token : any = header.split(" ")
    if (!token) {
        return {isAuth: false };
    }
    let decodeToken: any;

    try {
        decodeToken = jwt.verify(token[1],`${process.env.SECRET_KEY}`);
    } catch (e) {
        return { isAuth: false };
    }
    if (!!!decodeToken) {
        return { isAuth: false };
    }
    return { isAuth: true, userId: decodeToken.userId }
}