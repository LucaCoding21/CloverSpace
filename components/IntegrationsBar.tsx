'use client'

import { motion } from 'framer-motion'

const integrations = [
  { name: 'ServiceTitan', logo: '/images/logos/ServiceTitan_idmNemhejq_0.png' },
  { name: 'Housecall Pro', logo: '/images/logos/Housecall Pro_idEj-7jcmo_0.png' },
  { name: 'Jobber', logo: '/images/logos/Jobber_idJrnICjfA_0.png' },
  { name: 'FieldRoutes', logo: '/images/logos/FieldRoutes_idjDQFa3pV_0.png' },
  { name: 'GorillaDesk', logo: '/images/logos/gorilla.png' },
]

export default function IntegrationsBar() {
  return (
    <section className="bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <span className="text-gray-600 text-[10px] font-medium uppercase tracking-[0.15em] whitespace-nowrap">
            Integrates with
          </span>

          <div className="hidden sm:block w-px h-6 bg-gray-800" />

          <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 lg:gap-10">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 + index * 0.05 }}
                className="h-8 flex items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="h-6 sm:h-8 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity brightness-0 invert"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
