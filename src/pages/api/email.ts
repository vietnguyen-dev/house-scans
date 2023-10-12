// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

type Data = {
  message: string
}

type tReqData = {
    name: string;
    email: string;
    phone: string;
    message: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    if (req.method === 'POST') {
        try {

            const data : tReqData = req.body 
            const transporter = nodemailer.createTransport({
                // service: 'Gmail',
                host: process.env.AWS_SES_ENDPOINT,
                port: parseInt(process.env.AWS_SES_PORT!),
                auth: {
                    user: process.env.AWS_SMTP_USERNAME, // Replace with your Gmail email address
                    pass: process.env.AWS_SMTP_PASSWORD, // Replace with your Gmail password
                },
            });
            const mailOptions = {
                from: `"${data.name}" <${process.env.NODE_EMAIL}>`,
                to: `${process.env.NODE_EMAIL}`,
                subject: `Property scan for ${data.name}?`,
                text: `Hello David`,
                html: 
                `<p>Hello Team at 360 Property Scanners,</p>
                <p>${data.message}</p>
                <br/>
                <br/>
                <p>Email: ${data.email}</p>
                <p>Phone Number: ${data.phone}</p>
                <p>Much Thanks, </p>
                <p>${data.name}</p></p>
                `,
            }
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email Sent' })
        }
        catch(err) {
            console.log(err)
            res.status(500).json({ message: 'Email Failed to Send' })
        }
    }
}

export default handler