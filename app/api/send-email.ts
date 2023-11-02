import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const msg = {
      to: email,
      from: 'mateyavelashvili@gmail.com', // Your email address
      subject: 'Thank you for your subscription!',
      text: 'Thank you for subscribing to our service.',
      html: '<p>Thank you for subscribing to our service.</p>',
    };

    try {
      await sgMail.send(msg);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).send('Error sending the email');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
