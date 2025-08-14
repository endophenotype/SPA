import { motion } from 'framer-motion';
import directorImage from '@/assets/spa-director.png';

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              О нашем центре
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p className="text-lg">
                Наш SPA-центр был создан с мечтой подарить каждому гостю уникальный опыт релаксации 
                и восстановления в самом сердце города.
              </p>
              
              <p>
                Мы объединили лучшие европейские традиции ухода с современными технологиями и 
                натуральными компонентами премиум-класса.
              </p>
              
              <p>
                Каждая процедура — это путешествие к гармонии души и тела, разработанное нашими 
                сертифицированными специалистами с многолетним опытом.
              </p>
              
              <p>
                Доверьтесь профессионалам и откройте для себя мир истинного наслаждения и красоты.
              </p>
            </div>

            <motion.div 
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    Анна К.
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Основатель центра с 15-летним опытом в индустрии красоты
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={directorImage}
                alt="Анна К., основатель SPA-центра"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Decorative element */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;