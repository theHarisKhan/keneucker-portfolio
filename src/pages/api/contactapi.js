import sendEmail from "../../../utils/sendEmail";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  try {
    await sendEmail({
      email: email,
      name: name,
      message,
    });

    return res.status(200).json({
      message: "Email is Sent",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: new Error(error).message,
      success: false,
    });
  }
}
