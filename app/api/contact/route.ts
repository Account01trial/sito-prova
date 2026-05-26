import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, message } = await req.json();

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      // For development/preview purpose, when the user hasn't set the API key, we simulate the sending
      console.warn('RESEND_API_KEY environment variable is not set. Simulating email sending.');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, simulated: true });
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: 'Studio Vitiello <website@studiovitiellospa.com>', // Da aggiornare se verifichi un dominio o un indirizzo diverso
      to: ['amministrazione@studiovitiellospa.com'],
      subject: `Nuova richiesta di contatto da ${name}`,
      text: `Nuovo messaggio ricevuto dal modulo di contatto del sito web:\n\nNome: ${name}\nAzienda: ${company || 'N/A'}\nEmail: ${email}\nTelefono: ${phone}\n\nMessaggio:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred while sending the email' },
      { status: 500 }
    );
  }
}
