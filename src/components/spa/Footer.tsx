import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Send, Heart } from "lucide-react";
import BookingModal from "./BookingModal";
import CertificateModal from "./CertificateModal";
import { useState } from "react";

const Footer = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  return (
    <>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      />
      <footer className="bg-foreground text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-heading font-bold">
                SPA Oasis Center
              </h3>
              <p className="text-white/80 font-body leading-relaxed">
                Ваш оазис спокойствия в сердце города. Профессиональные
                процедуры красоты и релаксации.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-heading font-semibold">Услуги</h4>
              <ul className="space-y-2 text-white/80 font-body">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Альгинатное обертывание
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Биоревитализация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Горячий шоколадный массаж
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Детокс-обертывание
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Спа-ритуал для двоих
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-heading font-semibold">Контакты</h4>
              <div className="space-y-2 text-white/80 font-body">
                <p>г. Барнаул</p>
                <p>пр. Ленина, 82, 1 этаж</p>
                <a
                  href="tel:+74951234567"
                  className="block hover:text-white transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
                <div className="pt-2">
                  <p className="text-sm">Часы работы:</p>
                  <p className="text-sm">Пн-Пт: 10:00 - 21:00</p>
                  <p className="text-sm">Сб-Вс: 10:00 - 20:00</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-heading font-semibold">
                Запишитесь сейчас
              </h4>
              <p className="text-white/80 font-body text-sm">
                Получите консультацию и запишитесь на процедуру
              </p>
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-body"
                    onClick={() => setIsBookingModalOpen(true)}
                  >
                    Записаться на сеанс
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-primary hover:bg-white/10 font-body"
                    onClick={() => setIsCertificateModalOpen(true)}
                  >
                    Купить сертификат
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 font-body text-sm">
                © 2024 SPA Oasis Center. Все права защищены.
              </div>

              <div className="flex flex-col md:flex-row gap-4 text-white/60 font-body text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Пользовательское соглашение
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Правила предоставления услуг
                </a>
              </div>

              <div className="flex items-center gap-2 text-white/60 font-body text-sm">
                <span>Создано с</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>в Барнауле</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
