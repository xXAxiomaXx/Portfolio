"use client";

import { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    // Sua chave de acesso do Web3Forms
    formData.append("access_key", "34acbd53-8a51-429b-8693-81fbde440c1e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        console.error("Erro no envio:", data);
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="w-full flex justify-center py-20">
      <div className="w-11/12 max-w-6xl bg-zinc-950 rounded-xl border border-zinc-900 p-8 md:p-16 shadow-2xl flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-12 text-white text-center">
          Contact
        </h2>

        <div className="w-full max-w-2xl flex flex-col gap-12">
          {/* Lógica de Renderização Condicional */}
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center p-12 border border-zinc-800 rounded-lg bg-zinc-900/50">
              <h3 className="text-white font-black text-3xl text-center mb-4">Thanks for your contact</h3>
              <p className="text-gray-400 text-lg text-center">I&apos;ll get in touch as soon as possible.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-black bg-slate-300 px-6 py-2 font-bold rounded-lg hover:bg-white transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-300">Your email</label>
                <input type="email" name="email" id="email" required placeholder="name@example.com"
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#7a87fb] focus:border-transparent outline-none transition-all" />
              </div>
              
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-300">Your name</label>
                <input type="text" name="name" id="name" required placeholder="Your name here..."
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#7a87fb] focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-gray-300">Your subject</label>
                <input type="text" name="subject" id="subject" required placeholder="Your subject here..."
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#7a87fb] focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-300">Your message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Leave a message..."
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#7a87fb] focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-4 py-3 px-8 self-center bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          {/* Info e Redes Sociais */}
          <div className="flex flex-col items-center pt-12 border-t border-zinc-800">
            <h3 className="text-2xl font-bold tracking-wider mb-6 text-white">Contact Info</h3>
            <p className="text-gray-400 font-semibold text-lg mb-2">
              E-mail: <span className="text-white select-all">ciremello@gmail.com</span>
            </p>
            <p className="text-gray-400 font-semibold text-lg mb-8">
              Phone: <span className="text-white select-all">+55 (22) 99750-9112</span>
            </p>
            
            <div className="flex gap-8 text-gray-400">
              <a href="https://github.com/xXAxiomaXx" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><FaGithub className="text-3xl" /></a>
              <a href="https://www.linkedin.com/in/emouradev/" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><FaLinkedin className="text-3xl" /></a>
              <a href="https://wa.me/5522997509112" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><FaWhatsapp className="text-3xl" /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}