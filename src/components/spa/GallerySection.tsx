import { motion } from 'framer-motion';
import heroImage from '@/assets/spa-hero.jpg';
import treatmentImage from '@/assets/spa-treatment.jpg';
import facialImage from '@/assets/spa-facial.jpg';
import loungeImage from '@/assets/spa-lounge.jpg';

const galleryImages = [
  {
    src: heroImage,
    alt: 'Главный интерьер SPA-центра',
    className: 'col-span-2 row-span-2'
  },
  {
    src: treatmentImage,
    alt: 'Кабинет для процедур',
    className: 'col-span-1 row-span-1'
  },
  {
    src: facialImage,
    alt: 'Процедуры для лица',
    className: 'col-span-1 row-span-1'
  },
  {
    src: loungeImage,
    alt: 'Зона релаксации',
    className: 'col-span-1 row-span-1'
  },
  {
    src: treatmentImage,
    alt: 'Массажный кабинет',
    className: 'col-span-1 row-span-1'
  }
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Атмосфера нашего центра
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Погрузитесь в мир спокойствия и красоты
          </p>
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[600px] max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`${image.className} overflow-hidden rounded-2xl group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-body text-sm bg-black/50 px-4 py-2 rounded-full">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;