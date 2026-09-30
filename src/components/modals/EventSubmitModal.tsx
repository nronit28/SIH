import React, { useState } from 'react';
import { X, Check, Calendar, MapPin, Upload, Clock, Send, ShieldAlert } from 'lucide-react';
import { useSanskriti } from '../../context/SanskritiContext';

export const EventSubmitModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { submitCommunityEvent } = useSanskriti();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    marathiTitle: '',
    category: 'Festival' as any,
    dateLabel: 'Upcoming Cultural Date',
    month: 10,
    day: 20,
    location: '',
    timings: '6:00 PM – 9:30 PM',
    history: '',
    meaning: 'Community heritage celebration',
    organiser: '',
    contactInfo: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitCommunityEvent({
      title: formData.title,
      marathiTitle: formData.marathiTitle || formData.title,
      category: formData.category,
      dateLabel: formData.dateLabel,
      month: formData.month,
      day: formData.day,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      history: formData.history,
      meaning: formData.meaning,
      traditions: ['Local cultural celebration and traditional gathering'],
      keyActivities: ['Folk performances and community food'],
      location: formData.location,
      timings: formData.timings,
      whatVisitorsExpect: 'A grassroots cultural and traditional experience.',
      traditionalFood: ['Traditional local feast'],
      craftConnections: ['Regional handloom & craft artisans'],
      visitorAdvice: ['Open to respectful public visitors'],
      coordinates: { lat: 19.88, lng: 75.32 },
      organiser: formData.organiser
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div 
        className="w-full max-w-lg bg-card border border-gold rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-text-dark hover:bg-gold/20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-olive text-white mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-text-dark">
              Submitted for Verification
            </h3>
            <p className="text-xs text-text-secondary max-w-xs mx-auto">
              Your cultural event has been received with status: <strong className="text-olive">Pending Review</strong>. Sanskriti verifies all submissions before public publishing to ensure accuracy and respect for local traditions.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-semibold text-olive tracking-wider block">
                Community Heritage Calendar
              </span>
              <h3 className="font-serif font-bold text-xl text-text-dark">
                Submit an Event or Cultural Gathering
              </h3>
              <p className="text-xs text-text-secondary mt-0.5">
                For folk performers, artisan guilds, temple committees, and local cultural trusts.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-medium text-text-dark block mb-1">Event Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Khuldabad Sufi Music Evening, Handloom Weavers Fair"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-gold/50 bg-white text-text-dark focus:ring-2 focus:ring-olive"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-medium text-text-dark block mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full p-2.5 rounded-xl border border-gold/50 bg-white text-text-dark focus:ring-2 focus:ring-olive"
                  >
                    <option value="Festival">Festival</option>
                    <option value="Fair">Fair / Jatra</option>
                    <option value="Religious">Religious / Spiritual</option>
                    <option value="Performance">Folk / Classical Performance</option>
                    <option value="Craft Market">Artisan / Craft Market</option>
                    <option value="Food Tradition">Food Tradition</option>
                  </select>
                </div>
                <div>
                  <label className="font-medium text-text-dark block mb-1">Date</label>
                  <input
                    type="date"
                    required
                    onChange={(e) => {
                      const d = new Date(e.target.value);
                      setFormData({ 
                        ...formData, 
                        month: d.getMonth() + 1, 
                        day: d.getDate(),
                        dateLabel: d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
                      });
                    }}
                    className="w-full p-2.5 rounded-xl border border-gold/50 bg-white text-text-dark focus:ring-2 focus:ring-olive"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium text-text-dark block mb-1">Venue / Location *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Soneri Mahal Amphitheatre or Verul Temple Grounds"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-gold/50 bg-white text-text-dark focus:ring-2 focus:ring-olive"
                />
              </div>

              <div>
                <label className="font-medium text-text-dark block mb-1">Description & Traditions *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Explain the cultural significance, who is performing, and what visitors can expect..."
                  value={formData.history}
                  onChange={(e) => setFormData({ ...formData, history: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-gold/50 bg-white text-text-dark focus:ring-2 focus:ring-olive"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-medium text-text-dark block mb-1">Organiser Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marathwada Folk Academy"
                    value={formData.organiser}
                    onChange={(e) => setFormData({ ...formData, organiser: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-gold/50 bg-white text-text-dark focus:ring-2 focus:ring-olive"
                  />
                </div>
                <div>
                  <label className="font-medium text-text-dark block mb-1">Contact Email / Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="For verification"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-gold/50 bg-white text-text-dark focus:ring-2 focus:ring-olive"
                  />
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-gold/15 border border-gold/30 text-[11px] text-text-secondary">
              ⚠️ <strong>Verification Notice:</strong> Submissions undergo manual verification before publishing to keep Sanskriti trusted and reliable.
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit for Verification</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
