import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';

const ContactsSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Мы находимся в самом центре города и всегда рады вам
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Адрес
                    </h3>
                    <p className="text-muted-foreground font-body">
                      г. Барнаул<br />
                      пр. Ленина, 82, 1 этаж
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Часы работы
                    </h3>
                    <div className="space-y-1 text-muted-foreground font-body">
                      <div className="flex justify-between">
                        <span>Пн-Пт:</span>
                        <span>10:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Сб-Вс:</span>
                        <span>10:00 - 20:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      Телефоны
                    </h3>
                    <div className="space-y-2">
                      <a 
                        href="tel:+74951234567" 
                        className="block text-primary hover:text-primary/80 font-body font-medium transition-colors"
                      >
                        +7 (495) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground font-body">
                        Основной номер для записи
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-lg bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-muted relative">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1190.6919087814174!2d83.77000410297052!3d53.354285564474935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dda459ddb04685%3A0x9ce0ac92181b891c!2z0KjQv9C40LvRjA!5e0!3m2!1sru!2sge!4v1755181970700!5m2!1sru!2sge"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="SPA Oasis Center на карте"
                  />
                  
                  {/* Overlay with info */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-heading font-semibold text-foreground">
                        SPA Oasis Center
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      пр. Ленина, 82
                    </p>
                  </div>

                  {/* External link button */}
                  <div className="absolute bottom-4 right-4">
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white shadow-lg"
                      size="sm"
                      onClick={() => window.open('https://maps.app.goo.gl/rw49KZUKqvVNde178', '_blank')}
                    >
                      Открыть в Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Как добраться
                </h3>
                
                <div className="space-y-3 text-muted-foreground font-body">
                 
                  <div>
                    <strong className="text-foreground">На общественном транспорте:</strong>
                    <p>Остановка "площадь Октября"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;