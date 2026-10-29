'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [rsvpList, setRsvpList] = useState([
    { name: 'Sarah & Partner', status: 'Hadir', message: 'Selamat menempuh hidup baru! Semoga bahagia selalu.' },
    { name: 'Dimas Anggara', status: 'Hadir', message: 'Lancar sampai hari H bro!' }
  ]);
  const [guestName, setGuestName] = useState('');
  const [guestAttendance, setGuestAttendance] = useState('Hadir');
  const [guestMessage, setGuestMessage] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const targetDate = new Date('2026-11-25T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setRsvpList([{ name: guestName, status: guestAttendance, message: guestMessage }, ...rsvpList]);
    setGuestName('');
    setGuestMessage('');
    alert('Konfirmasi kehadiran berhasil dikirim. Terima kasih!');
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-sans selection:bg-[#D4AF37] selection:text-white relative overflow-x-hidden">
      <audio ref={audioRef} src="/audio/Beautiful In White (Saxophone Cover by Dori Wirawan) [JmIUdR_fob0].mp3" loop />

      {/* Floating & Rotating Ornaments: Butterflies, Leaves, Sparkles, Floral */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <motion.div
          animate={{ rotate: [0, 15, -15, 0], y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-8 text-[#D4AF37]/30 text-3xl md:text-5xl"
        >
          🦋
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -20, 20, 0], y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-12 text-[#D4AF37]/30 text-3xl md:text-5xl"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ rotate: 360, y: [0, 20, 0] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-1/2 left-6 text-[#D4AF37]/25 text-4xl md:text-6xl"
        >
          🍃
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 25, -25, 0], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-10 text-[#D4AF37]/30 text-3xl md:text-5xl"
        >
          🦋
        </motion.div>
        <motion.div
          animate={{ rotate: -360, y: [0, -25, 0] }}
          transition={{ rotate: { duration: 22, repeat: Infinity, ease: "linear" }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute bottom-20 left-12 text-[#D4AF37]/25 text-4xl md:text-6xl"
        >
          ✨
        </motion.div>
      </div>

      {/* Splash Cover Overlay */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)', transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-50 bg-neutral-900 text-white flex flex-col items-center justify-center p-6 text-center bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black backdrop-blur-xs"
            ></motion.div>

            {/* Corner floating ornaments on cover */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-8 left-8 text-[#E5C158]/50 text-3xl"
            >
              🦋
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-8 right-8 text-[#E5C158]/50 text-3xl"
            >
              ✨
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative z-10 max-w-xl mx-auto space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xs uppercase tracking-[0.3em] text-[#E5C158] font-medium block"
              >
                The Wedding Of
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-5xl md:text-7xl font-serif tracking-wide text-white"
              >
                Aiden & Clara
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-sm md:text-base text-neutral-300 font-light max-w-md mx-auto"
              >
                Kepada Bapak/Ibu/Saudara/i, kami mengundang Anda untuk merayakan hari istimewa kami.
              </motion.p>
              <div className="pt-4">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenInvitation}
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C59B27] text-white font-medium px-8 py-3 rounded-full shadow-lg transition-colors cursor-pointer"
                >
                  <i className="bi bi-envelope-open-fill"></i> Buka Undangan
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Audio Control Button */}
      {isOpen && (
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleAudio}
          className="fixed bottom-6 right-6 z-40 bg-white/95 backdrop-blur-md border border-neutral-200 text-[#D4AF37] p-3.5 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
          aria-label="Toggle Audio"
        >
          <i className={`bi ${isPlaying ? 'bi-volume-up-fill animate-bounce' : 'bi-volume-mute-fill'} text-2xl`}></i>
        </motion.button>
      )}

      {/* Navigation */}
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-neutral-100 shadow-xs"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-serif text-2xl font-bold tracking-wider text-[#2C2C2C] hover:text-[#D4AF37] transition">
            A & C
          </a>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-600">
            {['Beranda', 'Mempelai', 'Acara', 'Cerita', 'Galeri', 'RSVP', 'Kado'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.05, color: '#D4AF37' }}
                href={`#${item === 'Beranda' ? 'home' : item === 'Mempelai' ? 'couple' : item === 'Acara' ? 'event' : item === 'Cerita' ? 'story' : item === 'Galeri' ? 'gallery' : item === 'RSVP' ? 'rsvp' : 'gifts'}`}
                className="transition"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center text-center px-6 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#FDFBF7]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto py-20 text-white space-y-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-sm uppercase tracking-[0.25em] text-[#E5C158] font-medium block"
          >
            The Wedding Celebration
          </motion.span>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif tracking-wide drop-shadow-md"
          >
            Aiden & Clara
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-light tracking-wide text-neutral-200"
          >
            25 November 2026 — The Ritz-Carlton, Jakarta
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-4 gap-3 max-w-md mx-auto pt-6"
          >
            {[
              { label: 'Hari', val: timeLeft.days },
              { label: 'Jam', val: timeLeft.hours },
              { label: 'Menit', val: timeLeft.minutes },
              { label: 'Detik', val: timeLeft.seconds },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.08 }}
                className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 transition-colors"
              >
                <span className="block text-2xl md:text-3xl font-bold">{item.val}</span>
                <span className="text-xs uppercase tracking-wider text-neutral-300">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Couple Section */}
      <section id="couple" className="py-24 px-6 max-w-5xl mx-auto overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">Bahagia Bersama</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">Pengantin</h2>
          <p className="text-neutral-500 max-w-lg mx-auto text-sm md:text-base">
            Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="text-center space-y-4 bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 transition-all"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-md border-4 border-[#FDFBF7]"
            >
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
                alt="Aiden Vance"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />
            </motion.div>
            <h3 className="text-3xl font-serif text-[#2C2C2C]">Aiden Vance, B.Eng</h3>
            <p className="text-sm text-[#D4AF37] font-medium">Putra Kedua dari Bpk. Arthur Vance & Ibu Elizabeth Vance</p>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm mx-auto">
              Seorang arsitek berdedikasi yang selalu melihat keindahan dalam struktur dan kesederhanaan hidup.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="text-center space-y-4 bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 transition-all"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-md border-4 border-[#FDFBF7]"
            >
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="Clara Montgomery"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />
            </motion.div>
            <h3 className="text-3xl font-serif text-[#2C2C2C]">Clara Montgomery, M.Sc</h3>
            <p className="text-sm text-[#D4AF37] font-medium">Putri Pertama dari Bpk. Charles Montgomery & Ibu Diana Montgomery</p>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm mx-auto">
              Seorang kurator seni yang mencintai dunia estetika, literatur, dan petualangan alam bebas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="event" className="py-24 bg-neutral-900 text-white px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-16"
        >
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#E5C158] font-semibold">Waktu & Tempat</span>
            <h2 className="text-4xl md:text-5xl font-serif">Rangkaian Acara</h2>
            <p className="text-neutral-400 text-sm md:text-base">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-800/90 backdrop-blur-md p-8 rounded-3xl border border-neutral-700/60 shadow-xl space-y-4 text-left"
            >
              <div className="text-[#E5C158] text-3xl"><i className="bi bi-heart"></i></div>
              <h3 className="text-2xl font-serif text-white">Akad Nikah</h3>
              <p className="text-sm text-neutral-300">Rabu, 25 November 2026</p>
              <p className="text-sm text-neutral-300">Pukul 08.00 - 10.00 WIB</p>
              <p className="text-xs text-neutral-400 pt-2 border-t border-neutral-700">The Ritz-Carlton Jakarta, Pacific Place</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-800/90 backdrop-blur-md p-8 rounded-3xl border border-neutral-700/60 shadow-xl space-y-4 text-left"
            >
              <div className="text-[#E5C158] text-3xl"><i className="bi bi-glass-champagne"></i></div>
              <h3 className="text-2xl font-serif text-white">Resepsi Pernikahan</h3>
              <p className="text-sm text-neutral-300">Rabu, 25 November 2026</p>
              <p className="text-sm text-neutral-300">Pukul 11.00 - 14.00 WIB</p>
              <p className="text-xs text-neutral-400 pt-2 border-t border-neutral-700">The Ritz-Carlton Jakarta, Grand Ballroom</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Love Story */}
      <section id="story" className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">Perjalanan Cinta</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">Kisah Kami</h2>
        </motion.div>

        <div className="space-y-12 border-l-2 border-[#D4AF37]/30 pl-6 ml-2 md:ml-32">
          {[
            { date: '12 Oktober 2020', title: 'Pertemuan Pertama', desc: 'Kami pertama kali berjumpa di sebuah galeri seni di kawasan Menteng. Percakapan singkat tentang lukisan Impresionis berlanjut menjadi obrolan panjang yang tak berkesudahan.' },
            { date: '15 Agustus 2023', title: 'Komitmen Bersama', desc: 'Setelah melewati berbagai lika-liku studi dan karier di kota berbeda, kami memutuskan untuk melangkah bersama dalam satu visi dan tujuan hidup.' },
            { date: '14 Februari 2026', title: 'Lamaran Resmi', desc: 'Disaksikan oleh keluarga tercinta di Bali, Aiden mengutarakan niat suci untuk meminang Clara. Dan jawaban \'ya\' menjadi awal babak baru hidup kami.' }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ x: 6 }}
              className="relative space-y-2 bg-white/60 backdrop-blur-xs p-6 rounded-2xl border border-neutral-100 shadow-xs transition-all"
            >
              <span className="absolute -left-[39px] top-6 w-4 h-4 rounded-full bg-[#D4AF37] ring-4 ring-[#FDFBF7]"></span>
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">{item.date}</span>
              <h3 className="text-xl font-serif text-[#2C2C2C]">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">Momen Indah</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">Galeri Foto</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80"
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer"
              >
                <Image src={src} alt={`Gallery ${i+1}`} fill className="object-cover hover:scale-110 transition duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-24 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">Konfirmasi Kehadiran</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">RSVP & Ucapan</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleRsvpSubmit}
          className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 space-y-6"
        >
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">Nama Lengkap</label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              required
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#D4AF37] text-sm transition"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">Konfirmasi Kehadiran</label>
            <select
              value={guestAttendance}
              onChange={(e) => setGuestAttendance(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#D4AF37] text-sm bg-white transition"
            >
              <option value="Hadir">Ya, Saya akan hadir</option>
              <option value="Tidak Hadir">Maaf, tidak dapat hadir</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">Ucapan / Doa</label>
            <textarea
              value={guestMessage}
              onChange={(e) => setGuestMessage(e.target.value)}
              rows={4}
              placeholder="Tuliskan ucapan atau doa untuk kedua mempelai"
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#D4AF37] text-sm transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#D4AF37] hover:bg-[#C59B27] text-white font-medium py-3 rounded-xl shadow-md transition-colors cursor-pointer"
          >
            Kirim Konfirmasi
          </motion.button>
        </motion.form>

        <div className="mt-12 space-y-4">
          <h3 className="text-xl font-serif text-[#2C2C2C] mb-6">Ucapan & Doa</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {rsvpList.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#2C2C2C]">{item.name}</span>
                  <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full ${item.status === 'Hadir' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-neutral-600">{item.message}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">Tanda Kasih</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">Kado Pernikahan</h2>
            <p className="text-neutral-500 text-sm md:text-base max-w-md mx-auto">
              Doa restu Anda merupakan karunia terindah bagi kami. Namun jika ingin memberikan tanda kasih, dapat melalui:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FDFBF7] p-6 rounded-2xl border border-neutral-200/60 shadow-md space-y-3"
            >
              <span className="font-bold text-lg tracking-wide text-[#2C2C2C]">BCA</span>
              <p className="text-sm text-neutral-600 font-mono">1234 5678 90</p>
              <p className="text-xs text-neutral-500">Aiden Vance</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FDFBF7] p-6 rounded-2xl border border-neutral-200/60 shadow-md space-y-3"
            >
              <span className="font-bold text-lg tracking-wide text-[#2C2C2C]">Mandiri</span>
              <p className="text-sm text-neutral-600 font-mono">0987 6543 21</p>
              <p className="text-xs text-neutral-500">Clara Montgomery</p>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-neutral-900 text-neutral-400 text-center text-xs space-y-3">
        <p className="font-serif text-lg text-white">Aiden & Clara</p>
        <p>Terima kasih atas doa dan kehadiran Anda.</p>
        <p className="text-neutral-600 pt-4">© 2026 Aiden & Clara Wedding. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
