import { Shield, Code, Cpu, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  const services = [
    { icon: Shield, title: 'Cybersecurity', desc: 'Risk assessments, secure architecture, and best practices to protect systems and data.' },
    { icon: Code, title: 'Web Development', desc: 'Modern, responsive web apps built with performance, accessibility, and scalability in mind.' },
    { icon: Cpu, title: 'Digital Solutions', desc: 'End-to-end solutions that connect business goals with robust, maintainable tech.' },
    { icon: Leaf, title: 'Sustainable Tech', desc: 'Energy-aware design and efficient systems that minimize environmental impact.' },
  ];

  return (
    <section id="about" className="bg-white text-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            I’m a security-focused developer passionate about building reliable, human-centered products. My work blends
            cybersecurity principles with modern web engineering to deliver secure, elegant, and sustainable digital experiences.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-slate-50"
            >
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
