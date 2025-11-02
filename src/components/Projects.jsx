import { motion } from 'framer-motion';

const items = [
  {
    title: 'Secure Web Portal',
    desc: 'Authentication, RBAC, and audit logging for a mission-critical platform.',
  },
  {
    title: 'Threat Monitoring Dashboard',
    desc: 'Real-time telemetry, anomaly detection, and visual insights.',
  },
  {
    title: 'Green Hosting Optimizer',
    desc: 'Tools to reduce energy usage with smart caching and efficient builds.',
  },
  {
    title: 'Privacy-first Analytics',
    desc: 'Lightweight analytics respecting user privacy and compliance.',
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Projects</h2>
          <p className="mt-4 text-slate-600">
            Selected work focused on secure, sustainable digital solutions. Each project emphasizes clarity, performance,
            and defense-in-depth practices.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-700" />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-4 text-sm text-slate-500">Image/preview placeholder</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
