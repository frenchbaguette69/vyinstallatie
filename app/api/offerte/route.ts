// /app/api/offerte/route.ts (Next.js 13+ App Router)

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const mailOptions = {
  from: process.env.SMTP_USER, // afzender
  to: process.env.MAIL_TO,     // ontvanger (jijzelf)
  subject: `Nieuwe offerteaanvraag van ${data.voornaam} ${data.achternaam}`,
  text: `
Voornaam: ${data.voornaam}
Achternaam: ${data.achternaam}
Email: ${data.email}
Telefoon: ${data.telefoon}
Dienst: ${data.dienst}
Bericht:
${data.bericht}
  `,
};


  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
