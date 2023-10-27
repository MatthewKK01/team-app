import sgMail from "@sendgrid/mail";

const { SENDGRID_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { email } = req.body;
  const msg = {
    message: "Thank you for testing my application, Have a nice day",
    name: "MatthewKK01",
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: "Thanks for subscribing",
    html: `
<p><strong>Name:</strong>${name}</p>
<p><strong>Email:</strong>${email}</p>
<p><strong>Message:</strong>${this.message}</p>

`,
  };
  await sgMail.send(msg);
  req.json({ success: true });
}
