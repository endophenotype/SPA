import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Gift, User, Phone, Mail, CreditCard } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const certificateAmounts = [
  { value: '5000', label: '5 000 ₽' },
  { value: '10000', label: '10 000 ₽ (скидка 10%)' },
  { value: '15000', label: '15 000 ₽ (скидка 10%)' },
  { value: '20000', label: '20 000 ₽ (скидка 10%)' },
  { value: 'custom', label: 'Другая сумма' }
];

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    recipientName: '',
    buyerName: '',
    phone: '',
    email: '',
    amount: '',
    customAmount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000));

    const amount = formData.amount === 'custom' ? formData.customAmount : formData.amount;
    const discount = parseInt(amount) >= 10000 ? ' со скидкой 10%' : '';

    toast({
      title: "Заказ сертификата оформлен!",
      description: `Мы свяжемся с вами для оформления покупки сертификата на ${amount} ₽${discount}`,
    });

    setIsSubmitting(false);
    onClose();
    
    // Сброс формы
    setFormData({
      recipientName: '',
      buyerName: '',
      phone: '',
      email: '',
      amount: '',
      customAmount: '',
      message: ''
    });
  };

  const calculateFinalAmount = () => {
    const amount = formData.amount === 'custom' ? parseInt(formData.customAmount) : parseInt(formData.amount);
    if (amount >= 10000) {
      return Math.floor(amount * 0.9);
    }
    return amount;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-semibold text-foreground flex items-center gap-2">
            <Gift className="w-6 h-6 text-primary" />
            Заказ подарочного сертификата
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="recipient-name" className="text-foreground font-body">
                Имя получателя *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="recipient-name"
                  placeholder="Кому подарок"
                  className="pl-10 h-12"
                  value={formData.recipientName}
                  onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="buyer-name" className="text-foreground font-body">
                Ваше имя *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="buyer-name"
                  placeholder="Покупатель"
                  className="pl-10 h-12"
                  value={formData.buyerName}
                  onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cert-phone" className="text-foreground font-body">
                Телефон *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="cert-phone"
                  placeholder="+7 (999) 123-45-67"
                  className="pl-10 h-12"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cert-email" className="text-foreground font-body">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="cert-email"
                  type="email"
                  placeholder="email@example.com"
                  className="pl-10 h-12"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground font-body">
              Сумма сертификата *
            </Label>
            <Select 
              value={formData.amount} 
              onValueChange={(value) => setFormData({ ...formData, amount: value })}
              required
            >
              <SelectTrigger className="h-12">
                <CreditCard className="h-4 w-4 text-muted-foreground mr-2" />
                <SelectValue placeholder="Выберите сумму" />
              </SelectTrigger>
              <SelectContent>
                {certificateAmounts.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {formData.amount === 'custom' && (
            <div className="space-y-2">
              <Label htmlFor="custom-amount" className="text-foreground font-body">
                Укажите сумму (₽) *
              </Label>
              <Input
                id="custom-amount"
                type="number"
                min="1000"
                placeholder="Минимум 1 000 ₽"
                className="h-12"
                value={formData.customAmount}
                onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                required={formData.amount === 'custom'}
              />
            </div>
          )}

          {/* Расчет итоговой суммы */}
          {(formData.amount && formData.amount !== 'custom') || (formData.amount === 'custom' && formData.customAmount) ? (
            <div className="bg-primary/10 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-body text-foreground">Итоговая сумма:</span>
                <span className="text-xl font-heading font-semibold text-primary">
                  {calculateFinalAmount().toLocaleString()} ₽
                </span>
              </div>
              {calculateFinalAmount() !== (formData.amount === 'custom' ? parseInt(formData.customAmount) : parseInt(formData.amount)) && (
                <p className="text-sm text-green-600 font-body mt-1">
                  Применена скидка 10%
                </p>
              )}
            </div>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-body">
              Персональное поздравление
            </Label>
            <Textarea
              id="message"
              placeholder="Добавьте персональное поздравление (необязательно)"
              className="min-h-[100px]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
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
                'Оформить заказ'
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground font-body text-center">
            После оформления заказа с вами свяжется наш менеджер для подтверждения и оплаты
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateModal;