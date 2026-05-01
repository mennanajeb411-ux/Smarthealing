import { motion } from 'motion/react';
import { Hospital, Home, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface UserChoiceProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'ar';
}

export default function UserChoice({ onNavigate, language }: UserChoiceProps) {
  const content = {
    en: {
      title: "Who are you?",
      subtitle: "Choose your experience",
      hospital: {
        title: "Hospital / Clinic / Doctor",
        desc: "Professional medical grade analysis with detailed clinical parameters"
      },
      home: {
        title: "Home User / Family Use",
        desc: "Simple, beginner-friendly wound care guidance for personal use"
      }
    },
    ar: {
      title: "من أنت؟",
      subtitle: "اختر تجربتك",
      hospital: {
        title: "مستشفى / عيادة / طبيب",
        desc: "تحليل احترافي طبي مع معايير سريرية تفصيلية"
      },
      home: {
        title: "مستخدم منزلي / استخدام عائلي",
        desc: "إرشادات بسيطة وسهلة للعناية بالجروح للاستخدام الشخصي"
      }
    }
  };

  const t = content[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full">
        <Button
          variant="ghost"
          onClick={() => onNavigate('landing')}
          className="text-white/60 hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'en' ? 'Back' : 'رجوع'}
        </Button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-xl text-white/70">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Professional Option */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -10 }}
            onClick={() => onNavigate('professional')}
            className="glass-card-strong rounded-3xl p-8 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Hospital className="w-10 h-10 text-blue-400" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                {t.hospital.title}
              </h2>

              <p className="text-white/70 text-center leading-relaxed">
                {t.hospital.desc}
              </p>

              <div className="mt-6 flex justify-center">
                <div className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                  {language === 'en' ? 'Professional Mode' : 'الوضع الاحترافي'}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Home User Option */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03, y: -10 }}
            onClick={() => onNavigate('home')}
            className="glass-card-strong rounded-3xl p-8 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Home className="w-10 h-10 text-cyan-400" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                {t.home.title}
              </h2>

              <p className="text-white/70 text-center leading-relaxed">
                {t.home.desc}
              </p>

              <div className="mt-6 flex justify-center">
                <div className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                  {language === 'en' ? 'Simple Mode' : 'الوضع البسيط'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
