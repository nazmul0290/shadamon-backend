export const sendToken = (user, statusCode,res) => {
    const token = user.getJsonToken();
    console.log(token);
   // const options = {
     //        sameSite: "none",
       //      secure: true,
         // }

    res.status(statusCode).cookie("token", token).json({
        success: true,
        user,
       token
    })
} 