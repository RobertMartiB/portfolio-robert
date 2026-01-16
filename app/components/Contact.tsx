import Section from './Section';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
    return (
        <Section id="contact" className="pb-40">
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-12">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{portfolioData.contact.heading}</h3>
                    <p className="text-zinc-400 mb-10 leading-relaxed text-pretty">
                        {portfolioData.contact.description}
                    </p>

                </div>

                <form
                    method="post"
                    action="https://simpleforms.lenorix.com/api/01kf3jvqfrvvcqqrz47516hzp1"
                    className="flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-medium text-zinc-400 uppercase tracking-wider ml-1">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Tu nombre"
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-medium text-zinc-400 uppercase tracking-wider ml-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="tu@email.com"
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xs font-medium text-zinc-400 uppercase tracking-wider ml-1">Mensaje</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Cuéntame sobre tu proyecto..."
                            required
                            rows={4}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </Section>
    );
}
