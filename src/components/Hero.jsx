import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-300 mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Dhirendra Singh Dhami
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl">
            Building secure digital experiences at the intersection of cybersecurity, web development, and sustainable technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-md font-medium hover:bg-slate-100 transition">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-md font-medium hover:bg-white/10 transition">
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}

export default Hero;
