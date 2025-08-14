import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Clock, Phone, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

const services = [
  'Альгинатное обертывание',
  'Биоревитализация',
  'Горячий шоколадный массаж',
  'Детокс-обертывание',
  'Спа-ритуал для двоих'
];

const timeSlots = [
  '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00'
];

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Запись успешно оформлена!",
      description: `Мы свяжемся с вами в ближайшее время для подтверждения записи на ${formData.service}`,
    });

    setIsSubmitting(false);
    
    // Сброс формы
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      newsletter: false
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Запись на процедуры
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Выберите удобное время для вашего визита в наш центр красоты
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-semibold text-foreground">
                  Форма записи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-body">
                      Ваше имя
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Введите ваше имя"
                        className="pl-10 h-12 border-border focus:ring-primary"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-body">
                      Телефон
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        placeholder="+7 (999) 123-45-67"
                        className="pl-10 h-12 border-border focus:ring-primary"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-foreground font-body">
                      Выберите услугу
                    </Label>
                    <Select 
                      value={formData.service} 
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <SelectTrigger className="h-12 border-border">
                        <SelectValue placeholder="Выберите процедуру" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-foreground font-body">
                        Дата
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="date"
                          className="pl-10 h-12 border-border focus:ring-primary"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-foreground font-body">
                        Время
                      </Label>
                      <Select 
                        value={formData.time} 
                        onValueChange={(value) => setFormData({ ...formData, time: value })}
                        required
                      >
                        <SelectTrigger className="h-12 border-border">
                          <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                          <SelectValue placeholder="Время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="newsletter" 
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                    />
                    <Label 
                      htmlFor="newsletter" 
                      className="text-sm font-body text-muted-foreground cursor-pointer"
                    >
                      Хочу получить чек-лист по уходу за кожей
                    </Label>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit"
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-body font-medium text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        'Записаться на процедуру'
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-muted-foreground font-body text-center">
                    Нажимая кнопку, вы соглашаетесь с 
                    <a href="#" className="text-primary hover:underline"> политикой конфиденциальности</a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="border-0 shadow-xl bg-primary/5">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Подготовка к визиту
                </h3>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Приходите за 15 минут до процедуры</li>
                  <li>• Не употребляйте алкоголь за 24 часа</li>
                  <li>• Снимите украшения и контактные линзы</li>
                  <li>• Сообщите о аллергиях и противопоказаниях</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Часы работы
                </h3>
                <div className="space-y-2 text-muted-foreground font-body">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span>10:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота - Воскресенье</span>
                    <span>10:00 - 20:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-secondary/20">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Экстренная запись
                </h3>
                <p className="text-muted-foreground font-body">
                  Для срочной записи или консультации звоните:
                </p>
                <a 
                  href="tel:+74951234567" 
                  className="text-2xl font-heading font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
                <p className="text-sm text-muted-foreground font-body">
                  Или напишите на почту example@mail.ru
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;