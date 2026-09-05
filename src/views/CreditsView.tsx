import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User } from '../types';
import { 
  Award, 
  Users, 
  School, 
  MapPin, 
  Code2, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Trees, 
  Leaf, 
  Info, 
  ArrowLeft,
  Cpu,
  Palette,
  Music,
  Bot,
  GraduationCap,
  Crown,
  Search,
  Camera,
  Globe,
  Sparkle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { sound } from '../utils/sound';
import { AerisLogo } from '../components/AerisLogo';
import { GuidedTour, TourStep } from '../components/GuidedTour';

interface CreditsViewProps {
  user: User;
  onBack?: () => void;
}

export const CreditsView: React.FC<CreditsViewProps> = ({ user, onBack }) => {
  const currentLang = user.language || 'es';

  const [isPoemExpanded, setIsPoemExpanded] = useState(false);

  const [showTour, setShowTour] = useState(() => {
    try {
      return localStorage.getItem('caucasia_eco_tour_credits_tour') !== 'true';
    } catch {
      return false;
    }
  });

  const tourSteps: TourStep[] = [
    {
      id: 'step_credits_header',
      targetId: 'credits-tour-header',
      title: currentLang === 'es' ? 'Créditos del Proyecto' : 'Project Credits',
      description: currentLang === 'es' 
        ? 'Conoce al equipo liceista, roles, la institución y las tecnologías de AERIS.' 
        : 'Meet the student team, roles, institution, and technologies behind AERIS.',
      icon: <Award className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'step_credits_team',
      targetId: 'credits-tour-team',
      title: currentLang === 'es' ? 'Equipo de Trabajo' : 'Work Team',
      description: currentLang === 'es' 
        ? 'Organización detallada por roles: Líder, Desarrollador, Investigación, Diseño, Fotografía y Traducción.' 
        : 'Detailed organization by roles: Leader, Developer, Research, Design, Photography, and Translation.',
      icon: <Users className="w-5 h-5 text-cyan-400" />
    }
  ];

  const teamRoles = [
    {
      role: currentLang === 'es' ? 'Líder del Proyecto & Desarrollador' : 'Project Leader & Developer',
      names: ['Elias'],
      description: currentLang === 'es' 
        ? 'Dirección general, arquitectura del sistema, desarrollo del simulador interactivo y lógica de juego.' 
        : 'General direction, system architecture, interactive simulator development, and game logic.',
      badge: 'Líder & Dev',
      icon: Crown,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/30'
    },
    {
      role: currentLang === 'es' ? 'Investigación' : 'Researcher',
      names: ['Danna'],
      description: currentLang === 'es' 
        ? 'Investigación ecológica, clasificación de residuos sólidos y contenidos de concienciación.' 
        : 'Ecological research, solid waste classification, and awareness content.',
      badge: 'Investigación',
      icon: Search,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/30'
    },
    {
      role: currentLang === 'es' ? 'Diseño & Arte Visual' : 'Design & Visual Art',
      names: ['Maria', 'Juan David'],
      description: currentLang === 'es' 
        ? 'Diseño de interfaz de usuario (UI/UX), paleta cromática, assets visuales e ilustraciones.' 
        : 'User interface design (UI/UX), color palette, visual assets, and illustrations.',
      badge: 'Diseño',
      icon: Palette,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/30'
    },
    {
      role: currentLang === 'es' ? 'Fotografía & Registro' : 'Photographers',
      names: ['Dulce', 'Sofi'],
      description: currentLang === 'es' 
        ? 'Documentación fotográfica, registro audiovisual y material multimedia del entorno liceista.' 
        : 'Photographic documentation, audiovisual recording, and project media.',
      badge: 'Fotografía',
      icon: Camera,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/30'
    },
    {
      role: currentLang === 'es' ? 'Traducción & Idiomas' : 'Translator',
      names: ['Mariangel'],
      description: currentLang === 'es' 
        ? 'Traducción al inglés, localización de diálogos y soporte bilingüe del simulador.' 
        : 'English translation, dialogue localization, and bilingual support.',
      badge: 'Traducción',
      icon: Globe,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/30'
    },
    {
      role: currentLang === 'es' ? 'Institución Educativa' : 'Educational Institution',
      names: ['I.E. Liceo Caucasia'],
      description: currentLang === 'es' 
        ? 'Comunidad educativa, docentes de Ciencias Naturales y Educación Ambiental de Caucasia.' 
        : 'Educational community, Natural Sciences and Environmental teachers of Caucasia.',
      badge: 'Institución',
      icon: School,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/30'
    }
  ];

  const technologies = [
    { name: 'React 18 & TypeScript', desc: 'Lógica reactiva y tipado seguro', icon: Cpu },
    { name: 'Vite & Tailwind CSS', desc: 'Compilación veloz y diseño responsivo adaptativo', icon: Palette },
    { name: 'Motion React', desc: 'Animaciones fluidas y transiciones interactivas', icon: Sparkles },
    { name: 'Web Audio API Synth', desc: 'Síntesis de sonido en tiempo real sin archivos pesados', icon: Music },
    { name: 'Google Gemini AI', desc: 'Asistente ambiental conversacional adaptativo', icon: Bot },
    { name: 'PWA & Offline Mode', desc: 'Funcionalidad completa sin conexión para estudiantes', icon: ShieldCheck },
  ];

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 select-none bg-theme-primary text-theme-primary relative">
      <div className="max-w-4xl mx-auto space-y-6 pb-24 md:pb-8">
        
        {/* Top Header Bar */}
        <div id="credits-tour-header" className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={() => {
                  sound.playClick();
                  onBack();
                }}
                className="p-2.5 rounded-xl border border-theme bg-theme-surface hover:bg-theme-secondary transition-all cursor-pointer shadow-sm text-theme-primary"
                title={currentLang === 'es' ? 'Volver' : 'Back'}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2 text-theme-primary">
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
                <span>{currentLang === 'es' ? 'Créditos del Proyecto' : 'Project Credits'}</span>
              </h1>
              <p className="text-xs text-theme-muted font-semibold mt-0.5">
                AERIS Eco-Sim v2.5 • I.E. Liceo Caucasia
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              setShowTour(true);
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-theme-accent text-xs font-bold transition-all cursor-pointer hover:opacity-85 glass-panel bg-theme-surface text-theme-accent shadow-sm"
          >
            <Info className="w-4 h-4" />
            <span className="hidden sm:inline">{currentLang === 'es' ? 'Guía' : 'Guide'}</span>
          </button>
        </div>

        {/* Banner Principal / Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card border border-theme-accent rounded-3xl p-6 sm:p-8 relative overflow-hidden bg-theme-surface shadow-xl"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
            {/* Monogram emblem - Fixed to prevent text overflow */}
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl border border-cyan-500/30 bg-slate-900/60 flex items-center justify-center shrink-0 shadow-lg p-2">
              <AerisLogo mode="monogram" size="lg" glow={true} />
            </div>

            <div className="text-center sm:text-left space-y-2 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{currentLang === 'es' ? 'Proyecto Educativo Ambiental' : 'Environmental Educational Project'}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-theme-primary">
                AERIS - Eco Liceista
              </h2>

              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed max-w-2xl font-normal">
                {currentLang === 'es' 
                  ? 'Simulador ecológico interactivo creado por estudiantes del Liceo Caucasia para fomentar el reciclaje, la adecuada gestión de residuos y el amor por la naturaleza en Antioquia.'
                  : 'Interactive eco-simulator created by Liceo Caucasia students to promote recycling, waste management, and love for nature in Antioquia.'}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs font-semibold text-theme-muted">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <MapPin className="w-3.5 h-3.5" /> Caucasia, Antioquia 🇨🇴
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Trees className="w-3.5 h-3.5" /> Bajo Cauca
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Collapsible Poem & Creation Story Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-pink-500/30 bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-purple-950/40 relative overflow-hidden shadow-2xl transition-all"
        >
          {/* Ambient Background Glows */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-pink-500/15 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/15 blur-3xl pointer-events-none rounded-full" />

          {/* Header Bar & Toggle Button */}
          <div 
            onClick={() => {
              sound.playClick();
              setIsPoemExpanded(!isPoemExpanded);
            }}
            className="p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 cursor-pointer hover:bg-pink-500/5 transition-all select-none"
          >
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30 shrink-0">
                <Sparkle className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black uppercase tracking-widest text-pink-300">
                  {currentLang === 'es' ? 'Historia de Creación • El Alma del Proyecto' : 'Creation Story • Project Soul'}
                </h3>
                <p className="text-xs text-pink-200/70 font-semibold font-['Caveat',cursive] text-lg sm:text-xl mt-0.5">
                  "Puse mi empeño, mi tiempo, mis ideas y una parte de mí en este pequeño ser..."
                </p>
              </div>
            </div>

            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 text-pink-300 font-extrabold text-xs flex items-center gap-2 transition-all shrink-0 cursor-pointer shadow-md"
            >
              <span>
                {isPoemExpanded 
                  ? (currentLang === 'es' ? 'Ocultar Poema' : 'Collapse Story') 
                  : (currentLang === 'es' ? 'Leer Poema Completo' : 'Expand Story')}
              </span>
              {isPoemExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Collapsible Content */}
          <AnimatePresence>
            {isPoemExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden border-t border-pink-500/20"
              >
                <div className="p-6 sm:p-10 space-y-6 relative z-10">
                  {/* Poem Body in Beautiful Cursive Typography */}
                  <div className="space-y-4 font-['Caveat',cursive] text-lg sm:text-2xl leading-relaxed text-slate-200 tracking-wide max-w-3xl mx-auto text-center sm:text-left">
                    <p className="text-pink-300 font-bold text-xl sm:text-3xl">
                      Puse mi empeño, mi tiempo, mis ideas y una parte de mí en este pequeño ser.
                    </p>

                    <p className="text-slate-300">
                      Hubo días en los que pensé en dejarlo todo.<br />
                      Días en los que mirábamos el proyecto y parecía que nada avanzaba,<br />
                      como si todo nuestro esfuerzo se perdiera lentamente en la oscuridad.
                    </p>

                    <p className="text-cyan-300 font-bold text-xl sm:text-2xl">
                      Pero no lo dejamos morir.
                    </p>

                    <p className="text-slate-300">
                      Detuvimos la procrastinación, nos obligamos a continuar<br />
                      y volvimos a construir, pieza por pieza,<br />
                      incluso cuando las ganas ya no eran las mismas.
                    </p>

                    <p className="text-slate-300">
                      A veces estuvimos todos. A veces faltó uno.<br />
                      Y otras veces solo quedábamos dos,<br />
                      intentando que aquello que habíamos imaginado no se quedara solamente en una idea.
                    </p>

                    <p className="text-amber-300 italic">
                      Y quizá eso sea lo que más recuerdo.
                    </p>

                    <p className="text-slate-300">
                      No fueron solamente las reuniones, ni las horas frente a la pantalla,<br />
                      ni los errores que tuvimos que corregir.<br />
                      Fueron las veces que pudimos rendirnos y aun así decidimos quedarnos.
                    </p>

                    <p className="text-slate-300">
                      Porque nuestra mascota no nació perfecta.<br />
                      Nació entre errores, cansancio, dudas y pequeños momentos de esperanza.
                    </p>

                    <p className="text-emerald-300 font-bold text-xl sm:text-2xl">
                      Pero creció con nosotros.
                    </p>

                    <p className="text-slate-300">
                      Cada detalle suyo guarda una parte de este camino.<br />
                      Cada animación, cada objeto, cada pequeño movimiento lleva detrás horas que nadie verá,<br />
                      sacrificios que quizá nadie conozca y momentos que solamente nosotros recordaremos.
                    </p>

                    <p className="text-slate-300">
                      Por eso, cuando la miro, no veo solamente una mascota.<br />
                      Veo todo lo que tuvimos que atravesar para darle vida.
                    </p>

                    <p className="text-slate-300">
                      Y quizá algún día olvidemos cuánto nos costó hacerla,<br />
                      pero ella permanecerá como una pequeña prueba de que estuvimos ahí,<br />
                      de que lo intentamos, de que caímos, y de que, aun así, seguimos.
                    </p>

                    <div className="p-4 sm:p-6 rounded-2xl bg-pink-950/40 border border-pink-500/40 shadow-inner my-4 text-center">
                      <p className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-extrabold text-pink-300 leading-snug">
                        "Porque al final no solo creamos una mascota.<br />
                        Dejamos una parte de nosotros viviendo dentro de ella."
                      </p>
                    </div>
                  </div>

                  {/* Special Thanks Footer */}
                  <div className="pt-4 border-t border-pink-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block">
                        {currentLang === 'es' ? 'Agradecimientos Especiales' : 'Special Thanks'}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-pink-200">
                        Maria Caldera, Danna, Juan David y Dulce
                      </p>
                    </div>

                    <div className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 font-['Dancing_Script',cursive] text-xl font-bold flex items-center gap-1.5 shadow-lg">
                      <span>i love me</span>
                      <Heart className="w-4 h-4 fill-pink-400 text-pink-400 inline" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Roles & Team Division Section */}
        <div id="credits-tour-team" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-wider flex items-center gap-2 text-theme-primary">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>{currentLang === 'es' ? 'Equipo de Trabajo por Roles' : 'Work Team by Roles'}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamRoles.map((item, idx) => {
              const RoleIcon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-5 rounded-2xl border border-theme bg-theme-surface space-y-3 relative group hover:border-theme-accent transition-all shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl border ${item.bg} ${item.color}`}>
                        <RoleIcon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${item.bg} ${item.color}`}>
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-theme-muted block">
                        {item.role}
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        {item.names.map((name, nIdx) => (
                          <span 
                            key={nIdx} 
                            className="text-base font-extrabold text-theme-primary px-2 py-0.5 rounded-lg bg-theme-primary border border-theme shadow-sm"
                          >
                            {name}{nIdx < item.names.length - 1 ? ',' : ''}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-theme-muted leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Virtual Companions Card */}
        <div className="p-5 rounded-2xl border border-theme bg-theme-surface space-y-3 shadow-md">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-black uppercase tracking-wider">
            <Heart className="w-4 h-4 fill-rose-400/20" />
            <span>{currentLang === 'es' ? 'Mascotas Virtuales & Guardianes' : 'Virtual Pets & Guardians'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-theme-primary border border-theme flex items-center gap-3">
              <span className="text-2xl">🐱</span>
              <div>
                <h4 className="text-xs font-bold text-theme-primary">Aeris</h4>
                <p className="text-[11px] text-theme-muted">Gato Guardián Eco</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-theme-primary border border-theme flex items-center gap-3">
              <span className="text-2xl">🐶</span>
              <div>
                <h4 className="text-xs font-bold text-theme-primary">Rocco</h4>
                <p className="text-[11px] text-theme-muted">Perro Protector</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-theme-primary border border-theme flex items-center gap-3">
              <span className="text-2xl">🐰</span>
              <div>
                <h4 className="text-xs font-bold text-theme-primary">Copito</h4>
                <p className="text-[11px] text-theme-muted">Conejo Reciclador</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase tracking-wider flex items-center gap-2 text-theme-primary">
            <Code2 className="w-4 h-4 text-amber-400" />
            <span>{currentLang === 'es' ? 'Tecnologías del Simulador' : 'Simulator Technologies'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {technologies.map((tech, i) => {
              const TechIcon = tech.icon;
              return (
                <div 
                  key={i} 
                  className="p-3.5 rounded-xl border border-theme bg-theme-surface flex items-start gap-3 hover:border-theme-accent transition-all"
                >
                  <div className="p-2 rounded-lg bg-theme-primary border border-theme text-amber-400 shrink-0">
                    <TechIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-theme-primary">{tech.name}</h4>
                    <p className="text-[11px] text-theme-muted mt-0.5 leading-snug">{tech.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ecological Commitment Footer */}
        <div className="p-6 rounded-3xl border border-theme bg-theme-surface space-y-4 text-center sm:text-left relative overflow-hidden shadow-lg">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-400">
            <Leaf className="w-4 h-4" />
            <span>{currentLang === 'es' ? 'Compromiso Ecológico Liceista' : 'Liceo Ecological Commitment'}</span>
          </div>

          <p className="text-xs text-theme-primary leading-relaxed font-normal">
            {currentLang === 'es'
              ? 'Agradecimiento a la comunidad estudiantil del Liceo Caucasia por sumarse al proyecto ambiental. Cada residuo correctamente clasificado contribuye a la preservación del ecosistema del río Cauca.'
              : 'Thanks to the student community of Liceo Caucasia for joining the environmental project. Every correctly sorted waste item contributes to preserving the Cauca River ecosystem.'}
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-[11px] text-theme-muted font-bold border-t border-theme">
            <span>© 2026 AERIS Eco-Sim • Liceo Caucasia</span>
            <span className="flex items-center gap-1 text-rose-400">
              Hecho con <Heart className="w-3.5 h-3.5 fill-rose-400 inline" /> para Caucasia
            </span>
          </div>
        </div>

      </div>

      <GuidedTour
        tourId="credits_tour"
        isOpen={showTour}
        onClose={() => setShowTour(false)}
        steps={tourSteps}
        badgeText={currentLang === 'es' ? 'Créditos' : 'Credits'}
        finishButtonText={currentLang === 'es' ? '¡Entendido!' : 'Got it!'}
        language={currentLang as 'es' | 'en'}
      />
    </div>
  );
};
