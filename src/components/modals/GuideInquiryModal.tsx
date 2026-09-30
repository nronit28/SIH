import React, { useState } from 'react';
import { X, Check, Calendar, Users, Clock, Send, ShieldCheck } from 'lucide-react';
import { useSanskriti } from '../../context/SanskritiContext';

export const GuideInquiryModal: React.FC = () => {
  const { selectedGuide, setSelectedGuide } = useSanskriti();
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState('2026-10-02');
  const [groupSize, setGroupSize] = useState('2 adults');
  const [notes, setNotes] = useState('');

  if (!selectedGuide) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedGuide(null);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="w-full max-w-md bg-card border border-gold rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={() => setSelectedGuide(null)}
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
            <h3 className="font-serif font-bold text-2xl text-text-dark">Inquiry Sent Successfully</h3>
            <p className="text-xs text-text-secondary max-w-xs mx-auto">
              Your walking request has been forwarded to <strong>{selectedGuide.name}</strong>. In the live platform, the guide responds via WhatsApp/SMS to coordinate the rendezvous point.
            </p>
            <div className="text-[10px] text-text-muted bg-white/60 p-2 rounded-lg border border-gold/30">
              Demo Profile · No real payment or charges incurred
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-gold/40">
              <img 
                src={selectedGuide.photo} 
                alt={selectedGuide.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-gold/50"
              />
              <div>
                <span className="text-[10px] uppercase font-semibold text-olive tracking-wider block">
                  Request a Heritage Walk
                </span>
                <h3 className="font-serif font-bold text-xl text-text-dark">{selectedGuide.name}</h3>
                <span className="text-xs text-text-muted">{selectedGuide.indicativeRate}</span>
              </div>
            </div>

            <div className="text-xs text-text-secondary bg-white/70 p-3 rounded-xl border border-gold/30">
              🛡️ <strong>Direct Connection:</strong> Sanskriti connects visitors directly with local guides to support community livelihoods without agency fees.
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-medium text-text-dark block mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-gold/50 bg-white text-text-dark focus:ring-2 focus:ring-olive"
                  required
                />
              </div>

              <div>
                <label className="font-medium text-text-dark block mb-1">Group Size</label>
                <select
                  value={groupSize}
                  onChange={(e) => setGroupSize(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-gold/50 bg-white text-text-dark focus:ring-2 focus:ring-olive"
                >
                  <option>1 person (Solo Traveler)</option>
                  <option>2 adults (Couple)</option>
                  <option>3 to 5 persons (Family)</option>
                  <option>6+ persons (Large Group)</option>
                </select>
              </div>

              <div>
                <label className="font-medium text-text-dark block mb-1">Special Interests / Language Notes</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Photography pacing, Kailasa deep dive, Marathi storytelling preference..."
                  className="w-full p-2.5 rounded-xl border border-gold/50 bg-white text-text-dark focus:ring-2 focus:ring-olive"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Walk Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
