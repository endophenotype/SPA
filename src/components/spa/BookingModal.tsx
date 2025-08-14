import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Clock, Phone, User, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

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

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || '',
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
    onClose();
    
    // Сброс формы
    setFormData({
      name: '',
      phone: '',
      service: selectedService || '',
      date: '',
      time: '',
      newsletter: false
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-semibold text-foreground">
            Запись на процедуру
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="modal-name" className="text-foreground font-body">
              Ваше имя *
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="modal-name"
                placeholder="Введите ваше имя"
                className="pl-10 h-12"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-phone" className="text-foreground font-body">
              Телефон *
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="modal-phone"
                placeholder="+7 (999) 123-45-67"
                className="pl-10 h-12"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground font-body">
              Выберите услугу *
            </Label>
            <Select 
              value={formData.service} 
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              required
            >
              <SelectTrigger className="h-12">
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
                Дата *
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="date"
                  className="pl-10 h-12"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground font-body">
                Время *
              </Label>
              <Select 
                value={formData.time} 
                onValueChange={(value) => setFormData({ ...formData, time: value })}
                required
              >
                <SelectTrigger className="h-12">
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
              id="modal-newsletter" 
              checked={formData.newsletter}
              onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
            />
            <Label 
              htmlFor="modal-newsletter" 
              className="text-sm font-body text-muted-foreground cursor-pointer"
            >
              Хочу получить чек-лист по уходу за кожей
            </Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Отмена
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                'Записаться'
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground font-body text-center">
            Нажимая кнопку, вы соглашаетесь с 
            <a href="#" className="text-primary hover:underline"> политикой конфиденциальности</a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;