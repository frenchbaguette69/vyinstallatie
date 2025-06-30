'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function OfferteForm() {
  const [formData, setFormData] = useState({
    voornaam: '',
    achternaam: '',
    email: '',
    telefoon: '',
    dienst: '',
    bericht: '',
  });

  const isMobile = typeof window !== 'undefined' && /Mobi|Android|iPhone/i.test(navigator.userAgent);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { voornaam, achternaam, email, telefoon, dienst, bericht } = formData;

    const fullMessage = `Offerteaanvraag van ${voornaam} ${achternaam}\n📧 ${email}\n📞 ${telefoon}\n🛠️ Dienst: ${dienst}\n📝 Bericht: ${bericht}`;

    if (isMobile) {
      const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '31630798400';
      const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;
      window.open(whatsappURL, '_blank');
      toast.success('WhatsApp wordt geopend…');
      return;
    }

    // Desktop: verzenden via API
    try {
      const res = await fetch('/api/offerte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Je aanvraag is succesvol verzonden!');
        setFormData({
          voornaam: '',
          achternaam: '',
          email: '',
          telefoon: '',
          dienst: '',
          bericht: '',
        });
      } else {
        toast.error('Er ging iets mis bij het verzenden.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Verbinding mislukt. Probeer het later opnieuw.');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 text-gray-900">
      <h3 className="text-2xl font-bold mb-6">Vraag Een Offerte Aan</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Voornaam</label>
            <Input
              name="voornaam"
              placeholder="Uw voornaam"
              value={formData.voornaam}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Achternaam</label>
            <Input
              name="achternaam"
              placeholder="Uw achternaam"
              value={formData.achternaam}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="uw.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Telefoon</label>
          <Input
            type="tel"
            name="telefoon"
            placeholder="06-12345678"
            value={formData.telefoon}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Type Dienst</label>
          <select
            name="dienst"
            value={formData.dienst}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          >
            <option value="">Selecteer een dienst</option>
            <option>CV Installatie</option>
            <option>Onderhoud</option>
            <option>Reparatie</option>
            <option>Spoeddienst</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Bericht</label>
          <Textarea
            name="bericht"
            placeholder="Beschrijf uw situatie of vraag..."
            rows={4}
            value={formData.bericht}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
          {isMobile ? 'Verstuur via WhatsApp' : 'Verstuur Aanvraag'}
        </Button>
      </form>
    </div>
  );
}
