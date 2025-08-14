import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BookingModal from './BookingModal';
import { useState } from 'react';

const services = [
  {
    category: 'Уход за лицом',
    services: [
      {
        name: 'Альгинатное обертывание',
        description: 'Глубокое увлажнение и питание кожи с морскими минералами',
        price: 'от 4 500 ₽',
        duration: '60 мин'
      },
      {
        name: 'Биоревитализация',
        description: 'Омоложение и восстановление естественного сияния кожи',
        price: 'от 12 000 ₽',
        duration: '90 мин'
      },
      {
        name: 'Массаж лица',
        description: 'Способствует активизации кровообращения, улучшению обмена веществ и уменьшению отеков',
        price: 'от 4 000 ₽',
        duration: '60 мин'
      }
    ]
  },
  {
    category: 'Программы для тела',
    services: [
      {
        name: 'Горячий шоколадный массаж',
        description: 'Расслабляющий массаж с натуральным какао и маслами',
        price: 'от 6 000 ₽',
        duration: '80 мин'
      },
      {
        name: 'Детокс-обертывание',
        description: 'Очищение и обновление кожи с антицеллюлитным эффектом',
        price: 'от 5 500 ₽',
        duration: '70 мин'
      },
      {
        name: 'Балийский массаж',
        description: 'Массаж с использованием натуральных масел, ароматерапии, точечного массажа, особых техник растяжения тела и скручивания',
        price: 'от 7 500 ₽',
        duration: '100 мин'
      }
    ]
  },
  {
    category: 'Эксклюзив',
    services: [
      {
        name: 'Спа-ритуал для двоих',
        description: 'Романтическая программа с массажем и релаксацией',
        price: 'от 18 000 ₽',
        duration: '120 мин'
      }
    ]
  }
];

const ServicesSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleBookingClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={selectedService}
      />
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Откройте для себя мир релаксации и красоты
          </p>
        </motion.div>

        <div className="space-y-12">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-8 text-center">
                {category.category}
              </h3>

              <div className="flex flex-wrap justify-center gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
                  >
                    <Card className="h-full group overflow-hidden border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="space-y-2 flex-grow">
                          <h4 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-muted-foreground font-body leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex justify-between items-center text-sm text-muted-foreground mt-4">
                          <span className="font-medium">{service.duration}</span>
                          <span className="text-lg font-heading font-semibold text-primary">
                            {service.price}
                          </span>
                        </div>

                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 group-hover:scale-105 mt-4"
                          size="sm"
                          onClick={() => handleBookingClick(service.name)}
                        >
                          Записаться
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesSection;