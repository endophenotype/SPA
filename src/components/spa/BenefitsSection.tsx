import { motion } from 'framer-motion';
import { Award, Sparkles, Heart, Gift, Car, Leaf } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Натуральная косметика',
    description: 'Aveda, L\'Occitane',
    color: 'text-green-600'
  },
  {
    icon: Award,
    title: 'Сертифицированные специалисты',
    description: 'Профессиональный опыт',
    color: 'text-primary'
  },
  {
    icon: Sparkles,
    title: 'Авторские методики',
    description: 'Уникальные программы',
    color: 'text-amber-600'
  },
  {
    icon: Heart,
    title: 'VIP-атмосфера',
    description: 'Индивидуальный подход',
    color: 'text-rose-500'
  },
  {
    icon: Gift,
    title: 'Подарочные сертификаты',
    description: 'Идеальный подарок',
    color: 'text-purple-600'
  },
  {
    icon: Car,
    title: 'Бесплатная парковка',
    description: 'Удобство для гостей',
    color: 'text-blue-600'
  }
];

const BenefitsSection = () => {
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
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Мы создаем уникальный опыт релаксации и восстановления
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 ${benefit.color}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <benefit.icon className="w-8 h-8" />
              </motion.div>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground font-body">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;