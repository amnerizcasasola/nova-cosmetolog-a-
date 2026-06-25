import { useState, useRef, useEffect } from "react";

const EBOOK_1 = `
COSMIATRÍA vs COSMETOLOGÍA
La cosmiatría emplea protocolos de profundidad biológica para mejorar patologías, rejuvenecer y revitalizar. La cosmetología es la ciencia y arte del cuidado de la piel sana mediante cosméticos.

BIOTIPOS CUTÁNEOS
Piel Normal: equilibrio entre sebo e hidratación, poros poco visibles, aspecto luminoso.
Piel Seca (Alípica): producción insuficiente de sebo, descamación, tirantez, tendencia a arrugas.
Piel Grasa (Seborreica): exceso de sebo, brillo, poros dilatados, propensión al acné y comedones.
Piel Mixta: zona T grasa (frente, nariz, mentón) y mejillas normales o secas.
Piel Sensible: reacciona fácilmente, rojeces, picores, reactividad aumentada.
Piel Deshidratada: disminución del contenido hídrico de la capa córnea. No confundir con piel seca (falta de lípidos).

ESCALAS
Fitzpatrick - Fototipo I: Piel blanca, quema siempre. Fototipo II: Piel clara, quema fácil. Fototipo III: Piel intermedia. Fototipo IV: Piel olivácea. Fototipo V: Piel morena. Fototipo VI: Piel oscura, nunca se quema.
Glogau - Tipo I: Sin arrugas (20-30 años). Tipo II: Arrugas en movimiento. Tipo III: Arrugas en reposo. Tipo IV: Arrugas severas.

VALORACIÓN COSMÉTICA
Paso 1: Entrevista con el cliente. Paso 2: Recogida de datos/anamnesis. Paso 3: Observación visual de la piel. Paso 4: Diagnóstico facial/corporal. Paso 5: Plan de tratamiento con técnicas, productos, frecuencia y duración.

pH EN COSMETOLOGÍA
La piel tiene pH ácido entre 4.5 y 5.5 (manto ácido). Productos muy alcalinos alteran el manto ácido causando sequedad e irritación. En capilares, pH ácido sella la cutícula.

INGREDIENTES ACTIVOS
Ácido Hialurónico: hidratación profunda. Retinol: renovación celular, usar de noche. Vitamina C: antioxidante, ilumina. Niacinamida: regula sebo, minimiza poros. AHA (glicólico, láctico): exfoliación química. BHA (salicílico): piel grasa y acné. Péptidos: estimulan colágeno. Ceramidas: reparan barrera cutánea.

PATOLOGÍAS
Acné: inflamación de folículos pilosebáceos. Tipos: comedónico, pápulo-pustuloso, nódulo-quístico.
Rosácea: enrojecimiento crónico, telangiectasias. Evitar calor, picantes, alcohol.
Hiperpigmentación: manchas por exceso de melanina. Tipos: melasma, léntigos solares, manchas post-inflamatorias.
Flacidez: pérdida de firmeza por disminución de colágeno y elastina.
`;

const EBOOK_2 = `
PROTOCOLOS FACIALES PROFESIONALES
La limpieza facial profesional prepara la piel para tratamientos avanzados. Adaptarse a: tipo de piel, estado actual y factores externos.

PREPARACIÓN EN CABINA
Higiene de manos con solución antiséptica. Limpiar y desinfectar utensilios. Guantes y cubrebocas. Anamnesis breve: historial, alergias. Consentimiento informado.

PROTOCOLO BASE DE LIMPIEZA FACIAL (8 pasos)
Paso 1: Higienización - limpiador suave, movimientos circulares 2-3 min, retirar con esponjas tibias.
Paso 2: Exfoliación enzimática o mecánica según piel.
Paso 3: Vaporización/Ozono 5-10 min. EVITAR en piel sensible o rosácea activa.
Paso 4: Extracción manual o con instrumental esterilizado, presión suave, desinfectar tras extracción.
Paso 5: Tonificación con tónico calmante o equilibrante.
Paso 6: Mascarilla elegida según diagnóstico.
Paso 7: Masaje opcional, movimientos ascendentes y drenantes.
Paso 8: Finalización - sérum + crema hidratante + SPF50.

FACIAL HIDRATANTE-NUTRITIVA
Objetivo: Restaurar hidratación, confort, elasticidad. Para: piel seca, deshidratada.
Activos: Ácido hialurónico, Pantenol (B5), Ceramidas, Aloe vera, Aceite de jojoba o argán, Extracto de avena.
Exfoliación: enzimática suave (papaya, bromelina). Mascarilla: hidratante con ácido hialurónico o aloe. Masaje: con aceite de jojoba. Finalización: sérum hialurónico, crema rica, SPF 50+.

FACIAL ANTIEDAD / ANTIOXIDANTE
Objetivo: Neutralizar radicales libres, reparar daño oxidativo, mejorar luminosidad.
Activos: Vitamina C, Vitamina E, Ácido ferúlico, Té verde, Coenzima Q10, Resveratrol.
Exfoliación: enzimática o AHA suave. Mascarilla: antioxidante con vitamina C, té verde, CoQ10. Masaje: maniobras ascendentes. Finalización: sérum antioxidante, crema hidratante, SPF 50+.

FACIAL EFECTO LIFTING / REAFIRMANTE
Objetivo: Reafirmar, redefinir contornos, estimular colágeno y elastina.
Activos: Péptidos, Colágeno hidrolizado, Elastina, DMAE, Centella asiática.
Masaje: maniobras lifting ascendentes y drenantes (técnica Kobido adaptada). Mascarilla: reafirmante con colágeno o péptidos. Finalización: sérum con péptidos o vitamina C, crema antiedad rica, SPF 50+.

FACIAL ACLARANTE-ANTIMANCHAS
Objetivo: Unificar tono, reducir hiperpigmentaciones.
Activos: Ácido kójico, Niacinamida, Vitamina C estabilizada, Arbutina, Ácido láctico o mandélico, Extracto de regaliz.
Exfoliación: AHA suave (mandélico, láctico). Mascarilla: iluminadora con vitamina C o ácido kójico. Finalización: sérum despigmentante, crema ligera, SPF 50+.
Contraindicación: evitar en pieles con lesiones activas o sensibilidad extrema.

FACIAL ANTIACNÉ
Objetivo: Control de sebo, reducir inflamación, prevenir lesiones.
Activos: Ácido salicílico, Niacinamida, Arcillas, Tea Tree, Zinc PCA, Ácido mandélico.
Limpieza: gel con ácido salicílico máx. 2%. Mascarilla: arcilla, zinc, niacinamida. Masaje: EVITAR en brotes activos. Finalización: sérum seborregulador, hidratante oil-free, SPF 50+ no comedogénico.

FACIAL PARA PIEL SENSIBLE O ROSÁCEA
Objetivo: Reducir enrojecimiento, calmar, reforzar barrera cutánea.
Activos: Ácido hialurónico, Pantenol, Alantoína, Extracto de avena, Extracto de caléndula, Niacinamida.
Vaporización: CONTRAINDICADA en rosácea activa. Extracción: mínima o nula. Mascarilla: calmante con aloe y avena coloidal. Finalización: sérum calmante con niacinamida, crema barrera, SPF 50 mineral.
`;

const EBOOK_3 = `
PROTOCOLOS CORPORALES PROFESIONALES

BASES CIENTÍFICAS
El adipocito almacena triglicéridos y responde a señales lipolíticas como cafeína, carnitina, ampelopsina y masaje profundo. 
Celulitis - Causas: fibrosis de septos dérmicos, retención de líquidos, microinflamación crónica, cambios hormonales, disminución de circulación. Grados: 1=solo visible al pellizcar, 2=visible de pie, 3=visible de pie y acostada, 4=con dolor o inflamación evidente.
Flacidez - Dérmica (falta de colágeno): responde a radiofrecuencia, DMAE, colágeno marino. Muscular: responde a electroestimulación, ondas rusas, HI-EMS.
Estrías - Son rupturas de fibras colágenas y elásticas. Fase roja (activa): responde bien a regeneradores. Fase blanca: requiere estimulación profunda, peeling controlado o aparatología.

PROTOCOLO DETOX / PREPARACIÓN (antes de cualquier tratamiento corporal)
Objetivo: eliminar toxinas superficiales, activar circulación, preparar la piel para activos.
1. Higiene con dermolimpiador syndet.
2. Exfoliación física (microgránulos) o enzimática (papaina, bromelina), 5-7 min.
3. Aplicación de fango o algas (laminaria o fucus, ricas en yodo).
4. Oclusión con film osmótico 15-20 min, manta térmica opcional.
5. Retiro con toallas tibias.
6. Masaje activador: bombeo linfático + amasamiento suave.

PROTOCOLO REDUCTIVO (abdomen, cintura, muslos, brazos)
Objetivo: favorecer lipólisis, mejorar circulación, movilizar grasa localizada.
Activos: Cafeína (lipolítico por excelencia), L-carnitina, Extracto de fucus/laminaria, Ampelopsina.
Aparatología: Ultrasonido cavitacional, Radiofrecuencia, Termoterapia, Vacuum/Lipomasaje/ventosas.
Paso a paso:
1. Preparación detox (opcional pero ideal).
2. Gel conductor lipolítico con masaje profundo.
3. Cavitación: 10-20 min por zona.
4. Vacuum: 10 min (evitar en flacidez severa).
5. Radiofrecuencia: 10-15 min. Temperatura en piel: 40-45°C.
6. Termoterapia/manta térmica: 15-20 min.
7. Crema reductiva final con masaje modelante.
Frecuencia: 1-2 veces por semana, 8-12 sesiones.

PROTOCOLO ANTICELULITIS (grados 1 a 3)
Activos: Centella asiática, Ruscus, Hiedra, Cafeína, Ginkgo biloba, Rutina, Meliloto, Alcachofa.
Aparatología: Drenaje presoterapéutico, Radiofrecuencia, Lipomasaje/ventosas.
Paso a paso:
1. Preparación detox.
2. Masaje de drenaje linfático 10 min.
3. Lipomasaje o ventosas de silicón: 10-15 min.
4. Radiofrecuencia: 40-45°C, 12-15 min por zona.
5. Presoterapia: 20-30 min.
6. Crema anticelulitis con masaje firme pero no doloroso.
Frecuencia: 2 veces por semana, 10-15 sesiones.
Cuidado en casa: cepillado en seco diariamente, crema anticelulitis 2 veces/día, masaje tipo bombeo, baños tibios-fríos, evitar ropa ajustada.

PROTOCOLO ANTIFLACIDEZ (dérmica y muscular)
Activos: DMAE, Colágeno marino hidrolizado, Elastina, Ácido hialurónico, Silicio orgánico.
Aparatología: Radiofrecuencia, Ondas rusas/EMS, HIFEM, Láser frío.
Paso a paso:
1. Higiene con dermolimpiador syndet y exfoliación suave.
2. Aplicación de DMAE o silicio orgánico con masaje tonificante.
3. Radiofrecuencia: 12-18 min, temperatura 40-45°C.
4. Electroestimulación: 20-30 min.
5. Crema reafirmante final.
Frecuencia: 2-3 veces por semana, 12 sesiones.

PROTOCOLO ANTIESTRÍAS
Activos: Retinol en baja concentración, Ácido glicólico (solo estrías blancas), Centella asiática, Niacinamida, Rosa mosqueta, Silicio orgánico.
Aparatología: Radiofrecuencia, Microdermoabrasión, Dermapen/Micropuntura (si está permitido), Plasma Pen/Fibroblast.
Estrías Rojas (fase activa):
1. Higiene con dermolimpiador syndet.
2. Exfoliación enzimática (papaina o bromelina).
3. Radiofrecuencia con activos en gel conductor: 8-10 min.
4. Dermapen o Micropuntura si está permitido: profundidad 0.5-1.0 mm.
5. Activos regeneradores con radiofrecuencia o microagujas.
6. Crema de centella o rosa mosqueta (esperar 48 h si se hizo micropuntura).
Estrías Blancas: exfoliación química suave (glicólico 10%), microdermoabrasión suave, radiofrecuencia 8-10 min, activos reparadores.
Frecuencia: 1 vez por semana, 6-10 sesiones.

CONTRAINDICACIONES GENERALES CORPORALES
Embarazo y lactancia (según técnica). Várices severas (vacuum, radiofrecuencia). Enfermedades circulatorias. Cardiopatías. Dispositivos electrónicos implantados (para EMS). Piel irritada, heridas o infecciones.
`;

const EBOOK_4 = `
HIPERPIGMENTACIÓN - Mini guía de protocolos cosmetológicos

TIPOS DE HIPERPIGMENTACIÓN
Melasma: manchas simétricas en rostro por influencia hormonal y solar. Requiere manejo muy delicado sin inflamación.
Hiperpigmentación Post-Acné (HPI/PIH): manchas oscuras tras lesiones de acné. Renovar suavemente y evitar nuevos brotes.
Léntigos Solares y Seniles: manchas localizadas por daño solar acumulado en piel fotoenvejecida.
Hiperpigmentación en Axilas y Entrepierna: por fricción, depilación, resistencia insulínica.

PROTOCOLO 1: MELASMA
Objetivo: Despigmentar progresivamente sin generar inflamación, regulando la melanogénesis.
Limpieza: gel suave sin sulfatos, evitar fricción, agua muy caliente o cepillos.
Exfoliación: peeling suave con ácido mandélico (10-15%) o láctico (10-15%). Alternativa: ácido tranexámico o fítico. Si piel sensible: enzimático.
Mascarilla calmante: con niacinamida, aloe vera, ácido hialurónico, 15-20 min.
Aparatología opcional: Microneedling (0.25-0.5 mm) con activos despigmentantes (tranexámico, vitamina C, niacinamida). LED luz roja/ámbar/verde.
Finalización: sérum despigmentante con kójico, arbutina, niacinamida o vitamina C. Crema calmante + fotoprotector SPF50+.
Consideraciones: sesiones cada 15-30 días. Evitar peelings fuertes. SIEMPRE fotoprotector diario.

PROTOCOLO 2: HIPERPIGMENTACIÓN POST-ACNÉ (HPI)
Objetivo: Renovar la piel suavemente, reducir manchas postinflamatorias y evitar nuevos brotes.
Limpieza: gel seborregulador suave (niacinamida o ácido salicílico bajo).
Exfoliación: peeling con ácido salicílico (10-15%) o mandélico (15%). Efecto antibacteriano y despigmentante.
Mascarilla: arcilla blanca o verde + niacinamida y zinc. Acción purificante y calmante.
Aparatología: microdermoabrasión suave (si no hay brotes activos). LED azul (antibacteriano) y roja (regenerante).
Finalización: sérum con niacinamida, ácido azelaico o retinoide suave. Crema oil-free y fotoprotector no comedogénico SPF50+.
Consideraciones: evitar manipular lesiones activas. Sesiones cada 3-4 semanas.

PROTOCOLO 3: LÉNTIGOS SOLARES Y SENILES
Objetivo: Aclarar manchas localizadas y mejorar la textura de la piel fotoenvejecida.
Limpieza: limpiador antioxidante con vitamina C o té verde.
Exfoliación: ácido glicólico (10-15%) o Jessner modificado. Alternativa: peeling combinado con kójico, fítico, mandélico.
Mascarilla: hidratante con vitamina C, ácido hialurónico y aloe vera.
Aparatología: IPL (en manos capacitadas). Microneedling con cóctel despigmentante. LED roja/ámbar para regeneración.
Finalización: sérum con vitamina C o arbutina. Crema ligera + fotoprotector SPF50+.
Consideraciones: adaptar concentración a fototipo. Evitar inflamación o sobreexfoliación. Reforzar fotoprotección.

PROTOCOLO 4: AXILAS Y ENTREPIERNA
Objetivo: Aclarar hiperpigmentación posinflamatoria en zonas sensibles sin irritar.
Diagnóstico: identificar causa (fricción, depilación, resistencia insulínica). No trabajar si hay lesiones activas.
Limpieza: gel dermolimpiador sin sulfatos ni fragancia.
Exfoliación química: ácido mandélico (10%) o láctico (10%), despigmentante y suave. Tiempo corto 3-5 min.
Mascarilla calmante: niacinamida, aloe vera, ácido hialurónico.
Activos tópicos: gel con ácido kójico, arbutina, niacinamida o ácido tranexámico.
Aparatología opcional: LED roja o ámbar. Microneedling superficial (0.25 mm) solo en piel sana, cada 30 días.
Recomendaciones en casa: evitar fricción y rasurado agresivo, usar cremas despigmentantes suaves, evitar desodorantes irritantes, fotoprotección.
Consideraciones: sesiones cada 15-30 días. Derivar a médico en casos de acantosis nigricans o hiperpigmentación metabólica.

RECOMENDACIONES GENERALES PARA HIPERPIGMENTACIÓN
1. Evalúa siempre antes de actuar: ficha clínica completa, identifica tipo de hiperpigmentación y fototipo.
2. Empieza de forma progresiva: menos es más. Concentraciones suaves y aumentar según tolerancia.
3. Evita la inflamación: toda irritación puede generar más pigmento.
4. Educa a tu cliente: importancia del protector solar diario. Resultados son graduales.
5. Cuida la combinación de activos: no todos los despigmentantes se pueden usar juntos.
6. Registra cada sesión con control fotográfico.
7. No prometas resultados rápidos: la pigmentación es multifactorial.
8. Trabaja éticamente: deriva a dermatología en casos sospechosos.
`;

const ALL_KNOWLEDGE = EBOOK_1 + "\n\n" + EBOOK_2 + "\n\n" + EBOOK_3 + "\n\n" + EBOOK_4;

const FREE_QUESTIONS = 5;

const EBOOKS = [
  { icon: "📘", label: "Mis Apuntes de Cosmetología" },
  { icon: "📗", label: "Protocolos Faciales" },
  { icon: "📙", label: "Protocolos Corporales" },
  { icon: "📕", label: "Hiperpigmentación" },
];

const SUGGESTED = [
  "Protocolo anticelulitis paso a paso",
  "¿Cómo tratar el melasma en cabina?",
  "Protocolo reductivo: activos y aparatología",
  "¿Cuál es la diferencia entre estrías rojas y blancas?",
  "Protocolo facial antiacné completo",
  "¿Qué contraindicaciones tiene la radiofrecuencia?",
];

export default function CosmoApp() {
  const [screen, setScreen] = useState("landing");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [questionsUsed, setQuestionsUsed] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const bottomRef = useRef(null);

  const remainingFree = FREE_QUESTIONS - questionsUsed;
  const canAsk = isPremium || remainingFree > 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text) {
    if (!text.trim() || loading || !canAsk) return;
    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setQuestionsUsed((q) => q + 1);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      const reply = data.content?.map((b) => b.text || "").join("") || "No pude procesar tu consulta.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Error de conexión. Intenta nuevamente." }]);
    }
    setLoading(false);
  }

  // ── LANDING ──────────────────────────────────────────────────────
  if (screen === "landing") {
    return (
      <div style={S.page}>
        <div style={S.hero}>
          <div style={S.badge}>✦ Asistente IA · 4 ebooks integrados</div>
          <h1 style={S.heroTitle}><span style={S.accent}>NOVA</span><br />Tu Asesora de<br />Cosmetología</h1>
          <p style={S.heroSub}>Consultas instantáneas basadas en tus ebooks profesionales de cosmetología y estética.</p>

          <div style={S.ebookGrid}>
            {EBOOKS.map((e) => (
              <div key={e.label} style={S.ebookPill}>
                <span style={{ fontSize: 16 }}>{e.icon}</span>
                <span style={{ fontSize: 11, lineHeight: 1.3 }}>{e.label}</span>
              </div>
            ))}
          </div>

          <div style={S.featureGrid}>
            {["💆‍♀️ Biotipos & diagnóstico", "🧴 Ingredientes activos", "📋 Protocolos faciales", "🏋️ Protocolos corporales", "☀️ Hiperpigmentación", "⚗️ Estrías & celulitis"].map((f) => (
              <div key={f} style={S.featurePill}>{f}</div>
            ))}
          </div>

          <button style={S.ctaBtn} onClick={() => setScreen("app")}>Comenzar consulta gratuita →</button>
          <p style={S.freeNote}>{FREE_QUESTIONS} consultas gratis · Sin registro</p>
        </div>
      </div>
    );
  }

  // ── PREMIUM ──────────────────────────────────────────────────────
  if (screen === "premium") {
    return (
      <div style={S.page}>
        <div style={S.premiumCard}>
          <div style={{ fontSize: 32, color: ROSE, marginBottom: 12 }}>✦</div>
          <h2 style={{ fontSize: 26, color: CHARCOAL, margin: "0 0 8px" }}>Acceso Premium</h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: "0 0 24px" }}>
            Consultas ilimitadas con NOVA, acceso a todos los ebooks y nuevos materiales.
          </p>
          <div style={S.planGrid}>
            <div style={S.plan}>
              <div style={S.planLabel}>Mensual</div>
              <div style={S.planPrice}>$9.99<span style={{ fontSize: 13, fontWeight: 400, color: MUTED }}>/mes</span></div>
              <div style={{ fontSize: 12, color: MUTED, marginBottom: 3 }}>✓ Consultas ilimitadas</div>
              <div style={{ fontSize: 12, color: MUTED }}>✓ 4 ebooks activos</div>
            </div>
            <div style={{ ...S.plan, border: `2px solid ${ROSE}`, background: "#FEF0F3", position: "relative" }}>
              <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: ROSE, color: "white", fontSize: 10, padding: "2px 10px", borderRadius: 10, whiteSpace: "nowrap" }}>Más popular</div>
              <div style={S.planLabel}>Anual</div>
              <div style={S.planPrice}>$79<span style={{ fontSize: 13, fontWeight: 400, color: MUTED }}>/año</span></div>
              <div style={{ fontSize: 12, color: MUTED, marginBottom: 3 }}>✓ Todo lo mensual</div>
              <div style={{ fontSize: 12, color: MUTED, marginBottom: 3 }}>✓ Nuevos ebooks</div>
              <div style={{ fontSize: 12, color: MUTED }}>✓ Ahorra 34%</div>
            </div>
          </div>
          <button style={S.ctaBtn} onClick={() => { setIsPremium(true); setQuestionsUsed(0); setScreen("app"); }}>Activar Premium (demo)</button>
          <button style={{ background: "none", border: "none", color: MUTED, fontSize: 14, cursor: "pointer", marginTop: 8, fontFamily: "inherit" }} onClick={() => setScreen("app")}>← Volver</button>
        </div>
      </div>
    );
  }

  // ── CHAT ─────────────────────────────────────────────────────────
  return (
    <div style={S.appShell}>
      <div style={S.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={S.avatar}>N</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: CHARCOAL, letterSpacing: 1 }}>NOVA</div>
            <div style={{ fontSize: 11, color: MUTED }}>4 ebooks · Cosmetología</div>
          </div>
        </div>
        {isPremium
          ? <div style={{ background: ROSE, color: "white", fontSize: 11, padding: "4px 10px", borderRadius: 10, fontWeight: 600 }}>✦ Premium</div>
          : <button style={{ background: "none", border: `1px solid ${ROSE}`, color: ROSE, fontSize: 11, padding: "5px 10px", borderRadius: 10, cursor: "pointer", fontFamily: "inherit" }} onClick={() => setScreen("premium")}>{remainingFree} restantes · Premium</button>
        }
      </div>

      <div style={S.messages}>
        {messages.length === 0 && (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{ fontSize: 38, marginBottom: 10 }}>💆‍♀️</div>
            <p style={{ fontSize: 17, fontWeight: 700, color: CHARCOAL, margin: "0 0 6px" }}>¡Hola, profesional!</p>
            <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: "0 0 18px" }}>Pregúntame sobre protocolos faciales, corporales, hiperpigmentación, ingredientes activos o cualquier tema de cosmetología.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {SUGGESTED.map((s) => (
                <button key={s} style={{ background: "white", border: "1px solid #E8D8D2", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: CHARCOAL, cursor: "pointer", textAlign: "left", fontFamily: "inherit", lineHeight: 1.4 }} onClick={() => sendMessage(s)}>{s}</button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} style={m.role === "user" ? { display: "flex", justifyContent: "flex-end" } : { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
            {m.role === "assistant" && <div style={{ fontSize: 10, fontWeight: 700, color: ROSE, letterSpacing: 1.5, paddingLeft: 2 }}>NOVA</div>}
            <div style={m.role === "user"
              ? { background: ROSE, color: "white", padding: "10px 14px", borderRadius: "16px 16px 4px 16px", fontSize: 14, lineHeight: 1.5, maxWidth: "80%" }
              : { background: "white", color: CHARCOAL, padding: "12px 14px", borderRadius: "4px 16px 16px 16px", fontSize: 14, lineHeight: 1.6, maxWidth: "88%", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              {m.content.split("\n").map((line, j) => <span key={j}>{line}{j < m.content.split("\n").length - 1 && <br />}</span>)}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: ROSE, letterSpacing: 1.5, paddingLeft: 2 }}>NOVA</div>
            <div style={{ background: "white", padding: "12px 16px", borderRadius: "4px 16px 16px 16px", display: "flex", gap: 5, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              {[0, 0.2, 0.4].map((d, i) => <span key={i} style={{ color: ROSE, fontSize: 10, animation: `pulse 1.2s ${d}s infinite` }}>●</span>)}
            </div>
          </div>
        )}

        {!canAsk && !isPremium && (
          <div style={{ background: "#FEF0F3", border: `1px solid ${ROSE}`, borderRadius: 12, padding: 16, textAlign: "center", fontSize: 14, color: CHARCOAL }}>
            <p style={{ margin: "0 0 10px", fontWeight: 600 }}>Has usado tus {FREE_QUESTIONS} consultas gratuitas</p>
            <button style={{ background: ROSE, color: "white", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }} onClick={() => setScreen("premium")}>Obtener acceso ilimitado →</button>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div style={{ display: "flex", gap: 8, padding: "12px 16px", background: "white", borderTop: "1px solid #F0E8E4", alignItems: "center" }}>
        <input
          style={{ flex: 1, border: "1px solid #E8D8D2", borderRadius: 24, padding: "10px 16px", fontSize: 14, fontFamily: "inherit", background: "#FDF8F5", color: CHARCOAL, outline: "none" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder={canAsk ? "Escribe tu consulta..." : "Activa Premium para continuar"}
          disabled={!canAsk || loading}
        />
        <button
          style={{ width: 42, height: 42, borderRadius: "50%", background: ROSE, color: "white", border: "none", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, opacity: (!canAsk || loading || !input.trim()) ? 0.4 : 1 }}
          onClick={() => sendMessage(input)}
          disabled={!canAsk || loading || !input.trim()}
        >→</button>
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:.3} 50%{opacity:1} }`}</style>
    </div>
  );
}

const ROSE = "#C4758A", CREAM = "#FDF8F5", CHARCOAL = "#2C2C2C", MUTED = "#8A7A75";
const S = {
  page: { minHeight: "100vh", background: `linear-gradient(160deg, ${CREAM} 0%, #F5EBE8 100%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Georgia', serif", padding: 24 },
  hero: { maxWidth: 440, textAlign: "center" },
  badge: { display: "inline-block", background: ROSE, color: "white", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 20, marginBottom: 20 },
  heroTitle: { fontSize: 40, fontWeight: 700, color: CHARCOAL, lineHeight: 1.1, margin: "0 0 14px" },
  accent: { color: ROSE },
  heroSub: { fontSize: 15, color: MUTED, lineHeight: 1.6, margin: "0 0 20px" },
  ebookGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 18 },
  ebookPill: { background: "white", border: "1px solid #E8D8D2", borderRadius: 12, padding: "8px 12px", fontSize: 12, color: CHARCOAL, display: "flex", alignItems: "center", gap: 6, textAlign: "left" },
  featureGrid: { display: "flex", flexWrap: "wrap", gap: 7, justifyContent: "center", marginBottom: 28 },
  featurePill: { background: "white", border: "1px solid #E8D8D2", borderRadius: 20, padding: "6px 12px", fontSize: 12, color: CHARCOAL },
  ctaBtn: { background: ROSE, color: "white", border: "none", borderRadius: 12, padding: "15px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer", width: "100%", marginBottom: 10, fontFamily: "inherit" },
  freeNote: { fontSize: 12, color: MUTED, margin: 0 },
  premiumCard: { maxWidth: 400, textAlign: "center", background: "white", borderRadius: 20, padding: "40px 32px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" },
  planGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 },
  plan: { background: CREAM, borderRadius: 12, padding: "16px 12px", border: "2px solid #E8D8D2" },
  planLabel: { fontSize: 12, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 },
  planPrice: { fontSize: 24, fontWeight: 700, color: CHARCOAL, marginBottom: 8 },
  appShell: { display: "flex", flexDirection: "column", height: "100vh", background: CREAM, fontFamily: "'Georgia', serif", maxWidth: 480, margin: "0 auto" },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "white", borderBottom: "1px solid #F0E8E4" },
  avatar: { width: 38, height: 38, borderRadius: "50%", background: ROSE, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16 },
  messages: { flex: 1, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12 },
};
