import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import feedback from '@/assets/feedback.jpg';
import feedback2 from '@/assets/feedback2.jpg';
const testimonials = [
  {
    name: 'Елена М.',
    avatar: feedback,
    rating: 5,
    text: 'Потрясающий центр! Атмосфера полного релакса, профессиональные мастера. Альгинатное обертывание превзошло все ожидания. Кожа стала невероятно мягкой и увлажненной.',
    service: 'Альгинатное обертывание'
  },
  {
    name: 'Мария К.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
    rating: 5,
    text: 'Спа-ритуал для двоих стал идеальным подарком для нашей годовщины. Романтическая обстановка, внимательный персонал, качественная косметика. Обязательно вернемся!',
    service: 'Спа-ритуал для двоих'
  },
  {
    name: 'Анна В.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face',
    rating: 5,
    text: 'Горячий шоколадный массаж — это нечто невероятное! Еще никогда не чувствовала себя так расслабленно. Мастер учла все мои пожелания. Результат превосходный!',
    service: 'Горячий шоколадный массаж'
  },
  {
    name: 'Ольга С.',
    avatar: feedback2,
    rating: 5,
    text: 'Детокс-обертывание помогло улучшить состояние кожи и общее самочувствие. Интерьер центра создает ощущение премиальности. Отдельное спасибо за бесплатную парковку!',
    service: 'Детокс-обертывание'
  },
  {
    name: 'Виктория Л.',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=64&h=64&fit=crop&crop=face',
    rating: 5,
    text: 'Биоревитализация у вас — лучшая в городе! Результат виден уже после первой процедуры. Кожа стала более упругой и сияющей. Специалист очень профессиональный.',
    service: 'Биоревитализация'
  }
];

const TestimonialsSection = () => {
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
            Отзывы наших гостей
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-lg font-heading font-semibold text-foreground ml-2">
              4.9/5
            </span>
          </div>
          
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Более 500 довольных клиентов доверяют нам свою красоту и здоровье
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 h-full"
                  >
                    <Card className="h-full bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6 space-y-4 h-full flex flex-col">
                        {/* Rating */}
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        {/* Testimonial text */}
                        <blockquote className="text-muted-foreground font-body leading-relaxed flex-grow">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Service */}
                        <div className="text-sm text-primary font-body font-medium">
                          {testimonial.service}
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-3 pt-4 border-t">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                            loading="lazy"
                          />
                          <div>
                            <h4 className="font-heading font-semibold text-foreground">
                              {testimonial.name}
                            </h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;