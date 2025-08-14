import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/spa-hero.jpg";
import BookingModal from "./BookingModal";
import { useState } from "react";

const HeroSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
            }}
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/20 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ваш оазис спокойствия в сердце города
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-body font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Профессиональные уходовые программы для тела и души
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Записаться на сеанс
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-2 border-white text-foreground hover:bg-white hover:text-foreground rounded-full transition-all duration-300 hover:scale-105"
              onClick={scrollToServices}
            >
              Узнать о программах
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
