'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloatingButton() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '31630798400';
  const url = `https://wa.me/${phone}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </Link>
  );
}
