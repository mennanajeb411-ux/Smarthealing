import { motion } from 'motion/react';
import { ArrowLeft, Zap, Shield, TrendingUp, Droplet, Sparkles, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface TreatmentLibraryProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'ar';
}

export default function TreatmentLibrary({ onNavigate, language }: TreatmentLibraryProps) {
  const content = {
    en: {
      title: "Treatment Library",
      subtitle: "Advanced Wound Care Solutions",
      patches: [
        {
          name: "Collagen Patch",
          image: "https://images.unsplash.com/photo-1527456272-623855a33ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-pink-500/80 to-rose-500/80",
          icon: Shield,
          benefits: ["Promotes natural tissue regeneration", "Accelerates wound closure", "Reduces scarring"],
          bestFor: "Chronic wounds, surgical incisions",
          healingSpeed: "30-40% faster healing"
        },
        {
          name: "Stem Cell Patch",
          image: "https://images.unsplash.com/photo-1643660527074-0ddcec3bda96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-purple-500/80 to-indigo-500/80",
          icon: Sparkles,
          benefits: ["Advanced cellular healing", "Tissue regeneration", "Anti-inflammatory properties"],
          bestFor: "Diabetic ulcers, severe burns",
          healingSpeed: "50% faster recovery"
        },
        {
          name: "Growth Factor Patch",
          image: "https://images.unsplash.com/photo-1561328165-f0b762a9508e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-green-500/80 to-emerald-500/80",
          icon: TrendingUp,
          benefits: ["Stimulates cell growth", "Improves blood flow", "Enhances healing process"],
          bestFor: "Slow-healing wounds, pressure ulcers",
          healingSpeed: "40% improvement"
        },
        {
          name: "Antimicrobial Patch",
          image: "https://images.unsplash.com/photo-1688565631957-0306970fdd74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-yellow-500/80 to-orange-500/80",
          icon: Shield,
          benefits: ["Prevents infection", "Kills bacteria", "Reduces inflammation"],
          bestFor: "Infected wounds, post-surgery",
          healingSpeed: "35% infection reduction"
        },
        {
          name: "Burn Patch",
          image: "https://images.unsplash.com/photo-1643386106349-e2c48b90d1ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-red-500/80 to-orange-500/80",
          icon: Zap,
          benefits: ["Cooling relief", "Pain reduction", "Prevents scarring"],
          bestFor: "1st & 2nd degree burns",
          healingSpeed: "45% faster recovery"
        },
        {
          name: "Smart Hydrogel Patch",
          image: "https://images.unsplash.com/photo-1752842350805-cc481da22935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-cyan-500/80 to-blue-500/80",
          icon: Droplet,
          benefits: ["Moisture balance", "Temperature regulation", "Real-time monitoring"],
          bestFor: "All wound types, dry wounds",
          healingSpeed: "Smart adaptive healing"
        }
      ]
    },
    ar: {
      title: "مكتبة العلاجات",
      subtitle: "حلول متقدمة للعناية بالجروح",
      patches: [
        {
          name: "لاصق كولاجين",
          image: "https://images.unsplash.com/photo-1527456272-623855a33ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-pink-500/80 to-rose-500/80",
          icon: Shield,
          benefits: ["يعزز تجديد الأنسجة الطبيعي", "يسرع إغلاق الجرح", "يقلل الندوب"],
          bestFor: "الجروح المزمنة، الشقوق الجراحية",
          healingSpeed: "شفاء أسرع بنسبة 30-40%"
        },
        {
          name: "لاصق خلايا جذعية",
          image: "https://images.unsplash.com/photo-1643660527074-0ddcec3bda96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-purple-500/80 to-indigo-500/80",
          icon: Sparkles,
          benefits: ["شفاء خلوي متقدم", "تجديد الأنسجة", "خصائص مضادة للالتهابات"],
          bestFor: "قرح السكري، الحروق الشديدة",
          healingSpeed: "تعافي أسرع بنسبة 50%"
        },
        {
          name: "لاصق عامل النمو",
          image: "https://images.unsplash.com/photo-1561328165-f0b762a9508e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-green-500/80 to-emerald-500/80",
          icon: TrendingUp,
          benefits: ["يحفز نمو الخلايا", "يحسن تدفق الدم", "يعزز عملية الشفاء"],
          bestFor: "الجروح بطيئة الالتئام، قرح الفراش",
          healingSpeed: "تحسن بنسبة 40%"
        },
        {
          name: "لاصق مضاد للميكروبات",
          image: "https://images.unsplash.com/photo-1688565631957-0306970fdd74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-yellow-500/80 to-orange-500/80",
          icon: Shield,
          benefits: ["يمنع العدوى", "يقتل البكتيريا", "يقلل الالتهاب"],
          bestFor: "الجروح المصابة، بعد الجراحة",
          healingSpeed: "تقليل العدوى بنسبة 35%"
        },
        {
          name: "لاصق الحروق",
          image: "https://images.unsplash.com/photo-1643386106349-e2c48b90d1ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-red-500/80 to-orange-500/80",
          icon: Zap,
          benefits: ["راحة تبريدية", "تقليل الألم", "منع التندب"],
          bestFor: "حروق الدرجة الأولى والثانية",
          healingSpeed: "تعافي أسرع بنسبة 45%"
        },
        {
          name: "لاصق هيدروجيل ذكي",
          image: "https://images.unsplash.com/photo-1752842350805-cc481da22935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          gradient: "from-cyan-500/80 to-blue-500/80",
          icon: Droplet,
          benefits: ["توازن الرطوبة", "تنظيم درجة الحرارة", "مراقبة فورية"],
          bestFor: "جميع أنواع الجروح، الجروح الجافة",
          healingSpeed: "شفاء تكيفي ذكي"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen px-6 py-8"
    >
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => onNavigate('landing')}
          className="text-white/60 hover:text-white mb-6"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.patches.map((patch, i) => {
            const Icon = patch.icon;
            return (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="glass-card-strong overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={patch.image}
                      alt={patch.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${patch.gradient} mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{patch.name}</h3>

                    <div className="mb-4">
                      <p className="text-white/60 text-sm mb-2">
                        {language === 'en' ? 'Benefits:' : 'الفوائد:'}
                      </p>
                      <ul className="space-y-1">
                        {patch.benefits.map((benefit, j) => (
                          <li key={j} className="text-white/80 text-sm flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="text-white/60 text-sm mb-1">
                        {language === 'en' ? 'Best for:' : 'الأنسب لـ:'}
                      </p>
                      <p className="text-white/90">{patch.bestFor}</p>
                    </div>

                    <div className="glass-card rounded-lg p-3 bg-cyan-500/10">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-cyan-400" />
                        <p className="text-cyan-300 font-semibold text-sm">{patch.healingSpeed}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
