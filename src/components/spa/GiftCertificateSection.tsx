import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift, Star } from 'lucide-react';
import certificateImage from '@/assets/gift-certificate.png';
import CertificateModal from './CertificateModal';
import { useState } from 'react';

const GiftCertificateSection = () => {
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  return (
    <>
      <CertificateModal 
        isOpen={isCertificateModalOpen} 
        onClose={() => setIsCertificateModalOpen(false)} 
      />
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Подарочные сертификаты
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Подарите близким незабываемые моменты релаксации и красоты
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Certificate Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={certificateImage}
                  alt="Подарочный сертификат SPA-центра"
                  className="w-full h-auto"
                  loading="lazy"
                />
                
                {/* Overlay with certificate details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-heading font-semibold mb-2">
                      Подарочный сертификат
                    </h3>
                    <p className="text-white/90 font-body">
                      SPA Oasis Center
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Gift className="w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
                  Идеальный подарок для ваших близких
                </h3>
                
                <p className="text-muted-foreground font-body leading-relaxed">
                  Наши подарочные сертификаты — это возможность подарить незабываемые 
                  моменты релаксации и заботы о себе.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="font-body">Срок действия 12 месяцев</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="font-body">Возможность выбора любой процедуры</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="font-body">Красивое оформление в подарочной упаковке</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="font-body">Персональное поздравление</span>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="w-6 h-6 text-primary" />
                  <span className="font-heading font-semibold text-primary text-lg">
                    Специальное предложение
                  </span>
                </div>
                <p className="text-foreground font-body mb-4">
                  При покупке сертификата на сумму от 10 000 ₽ — скидка 10%
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-body font-medium"
                    onClick={() => setIsCertificateModalOpen(true)}
                  >
                    Приобрести со скидкой 10%
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default GiftCertificateSection;