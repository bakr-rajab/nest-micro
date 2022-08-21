// import {emailTemplates} from "./emailTemplates";
// import UsersModel from "../database/models/Users";
// import { mail } from "./mail";

// export const createAndSendConfirmationCodeMail = async (email,rndInt, type) => {

//    console.log("rndInt",rndInt)
//     const user = await UsersModel.query().findOne('email', email);
//     await mail({
//         from: `Sata < ${ process.env.MAIL_SENDER_EMAIL_ADDRESS} >`,
//         to: email,
//         html:
//             type === "register-confirmation"
//                 ? emailTemplates(email, rndInt)
//                 : emailTemplates(email, rndInt),
//         subject:
//             type === "register-confirmation"
//     });
// };



export function generateCode() :number{
    const code: number= Math.floor(1000 + Math.random() * 9000);
    return code;
}

//
// const confirmAccount = async (req, res) => {
//     const { email, token } = req.query;
//
//     //user found by email
//     const account = await UsersModel.query().findOne({
//         email,
//         token,
//         type: "register-confirmation",
//     });
//
//
//     // check if is more than 1 hour
//     if (account) {
//         // check if is more than 1 hour
//         //const created_at_time = new Date(account.createdAt).getTime();
//
//         //const now_time = new Date().getTime();
//         //console.log((now_time - created_at_time) / (1000 * 60 * 60));
//         // if ((now_time - created_at_time) / (1000 * 60 * 60) > 1) {
//         //     return res.status(400).json({ msg: "code expired" });
//         // }
//
//         // activate user account
//         const user = await UsersModel.query().findOne('email', email);
//        // user.status = "active";
//        // user.save();
//
//         // delete token after activation
//
//         return res.status(200).json({ msg: "account activated successfully" });
//     }
//
//     return res.status(404).json({ msg: "not found" });
// };




