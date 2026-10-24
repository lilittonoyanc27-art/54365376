import { ExamBlueprint } from './types.ts';

export const examBlueprints: ExamBlueprint[] = [
  {
    id: 'exam-tema-1',
    title: {
      es: 'Examen de Unidad: Literatura Popular y Literatura Culta',
      hy: 'Թեմատիկ քննություն. Ժողովրդական և հեղինակային գրականություն',
    },
    description: {
      es: 'Evaluación oficial sobre oralidad, cancioneros, anonimia y características de las obras cultas.',
      hy: 'Պաշտոնական ստուգարք բանավորության, երգարանների, անանունության և հեղինակային գործերի հատկանիշների վերաբերյալ։',
    },
    questionCount: 15,
    timeLimitMinutes: 20,
    topicFilter: 'tema-1',
    questions: [
      {
        id: 'eq1-1',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Cuál es el rasgo definitorio principal de la literatura popular tradicional?',
          hy: 'Ո՞րն է ավանդական ժողովրդական գրականության գլխավոր բնորոշ հատկանիշը։',
        },
        options: [
          { id: 'A', text: { es: 'La autoría anónima y su transmisión oral de generación en generación.', hy: 'Անանուն հեղինակությունը և սերնդեսերունդ բանավոր փոխանցումը։' } },
          { id: 'B', text: { es: 'La publicación obligatoria en diarios digitales de tirada nacional.', hy: 'Համազգային թվային թերթերում պարտադիր հրապարակումը։' } },
          { id: 'C', text: { es: 'Estar firmada siempre por un caballero templario medieval.', hy: 'Միշտ միջնադարյան տաճարական ասպետի կողմից ստորագրված լինելը։' } },
          { id: 'D', text: { es: 'Tener una única versión inmutable que nadie puede alterar jamás.', hy: 'Միակ անփոփոխ տարբերակ ունենալը, որը ոչ ոք չի կարող փոխել։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'La literatura popular nace del pueblo, no tiene un autor individual individualizado y vive en la memoria viva oral.',
          hy: 'Ժողովրդական գրականությունը ծնվում է ժողովրդի մեջ, չունի անհատականացված հեղինակ և ապրում է կենդանի բանավոր հիշողության մեջ։',
        },
      },
      {
        id: 'eq1-2',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Cómo se denominan las colecciones de poemas y canciones populares que se pusieron por escrito en los siglos XV y XVI?',
          hy: 'Ինչպե՞ս են կոչվում 15-րդ և 16-րդ դարերում գրի առնված ժողովրդական երգերի և բանաստեղծությունների ժողովածուները։',
        },
        options: [
          { id: 'A', text: { es: 'Cancioneros y Romanceros.', hy: 'Երգարաններ (Cancioneros) և Ռոմանսերոներ (Romanceros)։' } },
          { id: 'B', text: { es: 'Diccionarios enciclopédicos modernos.', hy: 'Ժամանակակից հանրագիտարանային բառարաններ։' } },
          { id: 'C', text: { es: 'Periódicos y gacetas matinales.', hy: 'Առավոտյան թերթեր և տեղեկագրեր։' } },
          { id: 'D', text: { es: 'Códigos civiles de la corte de Castilla.', hy: 'Կաստիլիայի արքունիքի քաղաքացիական օրենսգրքեր։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'Los cancioneros (canciones líricas) y romanceros (romances narrativos) salvaron del olvido la tradición oral.',
          hy: 'Cancioneros-ները (քնարական երգեր) և Romanceros-ները (պատմողական ռոմանսներ) մոռացությունից փրկեցին բանավոր ավանդույթը։',
        },
      },
      {
        id: 'eq1-3',
        originTopic: 'Literatura popular y culta',
        question: {
          es: 'En la literatura culta, ¿qué ocurre con el texto de la obra?',
          hy: 'Հեղինակային (գիտուն) գրականության մեջ ի՞նչ է տեղի ունենում ստեղծագործության տեքստի հետ։',
        },
        options: [
          { id: 'A', text: { es: 'Permanece fijo, definitivo y firmado por su autor con intención artística personal.', hy: 'Մնում է հաստատուն, վերջնական և հեղինակի կողմից ստորագրված՝ անձնական գեղարվեստական մտահղացմամբ։' } },
          { id: 'B', text: { es: 'Cualquier lector puede reescribir la mitad del libro y publicarlo con su propio nombre.', hy: 'Ցանկացած ընթերցող կարող է վերաշարադրել գրքի կեսը և հրատարակել իր անունով։' } },
          { id: 'C', text: { es: 'Se destruye tras la primera lectura para que no queden copias.', hy: 'Ոչնչացվում է առաջին ընթերցումից հետո, որպեսզի օրինակներ չմնան։' } },
          { id: 'D', text: { es: 'Solo se transmite mediante señales de humo entre castillos.', hy: 'Փոխանցվում է միայն ծխային ազդանշաններով ամրոցների միջև։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'La literatura culta se plasma por escrito, protegiendo la autoría y la integridad inmutable del texto.',
          hy: 'Հեղինակային գրականությունը ամրագրվում է գրավոր՝ պաշտպանելով հեղինակությունը և տեքստի անփոփոխությունը։',
        },
      },
      {
        id: 'eq1-4',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Por qué se utilizan estribillos y repeticiones frecuentes en las canciones populares tradicionales?',
          hy: 'Ինչո՞ւ են ավանդական ժողովրդական երգերում հաճախ օգտագործվում կրկներգեր և կրկնություններ։',
        },
        options: [
          { id: 'A', text: { es: 'Para facilitar la memorización auditiva y permitir al pueblo cantar a coro.', hy: 'Լսողական հիշողությունը հեշտացնելու և ժողովրդին միասին երգելու հնարավորություն տալու համար։' } },
          { id: 'B', text: { es: 'Porque a los poetas se les acababan las palabras del diccionario.', hy: 'Քանի որ բանաստեղծների բառարանի բառերն ավարտվում էին։' } },
          { id: 'C', text: { es: 'Para gastar más tinta en los monasterios medievales.', hy: 'Միջնադարյան վանքերում ավելի շատ թանաք ծախսելու համար։' } },
          { id: 'D', text: { es: 'Para que los versos parezcan más difíciles de comprender.', hy: 'Որպեսզի տողերը ավելի դժվար հասկանալի թվան։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'Los estribillos son recursos mnemotécnicos fundamentales de la poesía oral colectiva.',
          hy: 'Կրկներգերը հավաքական բանավոր պոեզիայի հիմնարար հիշողական (մնեմոնիկ) միջոցներն են։',
        },
      },
    ],
  },
  {
    id: 'exam-figuras',
    title: {
      es: 'Gran Examen Monográfico: Las 11 Figuras Literarias',
      hy: 'Մեծ թեմատիկ քննություն. 11 Գեղարվեստական արտահայտչամիջոցները',
    },
    description: {
      es: 'Evaluación exhaustiva de nivel fónico, morfosintáctico y semántico con análisis de metáforas A y B.',
      hy: 'Համապարփակ ստուգարք հնչյունային, ձևաբանական-շարահյուսական և իմաստային մակարդակների վերաբերյալ՝ A և B փոխաբերությունների վերլուծությամբ։',
    },
    questionCount: 40,
    timeLimitMinutes: 45,
    questions: [
      {
        id: 'ef-1',
        originTopic: 'Figuras literarias',
        question: {
          es: 'En el verso «Susana susurra suavemente», ¿qué figura literaria predomina?',
          hy: '«Susana susurra suavemente» տողում ո՞ր գեղարվեստական միջոցն է գերակշռում։',
        },
        options: [
          { id: 'A', text: { es: 'Metáfora', hy: 'Փոխաբերություն' } },
          { id: 'B', text: { es: 'Aliteración (repetición del fonema /s/)', hy: 'Ալիտերացիա (/s/ հնչյունի կրկնությամբ)' } },
          { id: 'C', text: { es: 'Hipérbaton', hy: 'Շրջադասություն' } },
          { id: 'D', text: { es: 'Pleonasmo', hy: 'Ավելորդաբանություն' } },
        ],
        correctOption: 'B',
        explanation: {
          es: 'La reiteración del sonido suave /s/ es una aliteración que evoca acústicamente el murmullo.',
          hy: '/s/ մեղմ հնչյունի կրկնությունը ալիտերացիա է, որը ձայնային առումով վերարտադրում է շշուկը։',
        },
      },
      {
        id: 'ef-2',
        originTopic: 'Figuras literarias',
        question: {
          es: '¿Cuál es la diferencia fundamental entre METÁFORA y SÍMIL en los exámenes de Lengua?',
          hy: 'Ո՞րն է ՓՈԽԱԲԵՐՈՒԹՅԱՆ և ՀԱՄԵՄԱՏՈՒԹՅԱՆ հիմնարար տարբերությունը լեզվի քննություններում։',
        },
        options: [
          { id: 'A', text: { es: 'El símil usa nexos comparativos como «como» o «parece»; la metáfora identifica directamente sin nexo.', hy: 'Համեմատությունը (símil) օգտագործում է համեմատական կապեր («como», «parece»), իսկ փոխաբերությունը նույնացնում է ուղղակիորեն՝ առանց կապի։' } },
          { id: 'B', text: { es: 'La metáfora solo existe en inglés y el símil solo en español.', hy: 'Փոխաբերությունը գոյություն ունի միայն անգլերենում, իսկ համեմատությունը՝ միայն իսպաներենում։' } },
          { id: 'C', text: { es: 'El símil siempre rima en asonante y la metáfora en consonante.', hy: 'Համեմատությունը միշտ ասոնանս է հանգավորվում, իսկ փոխաբերությունը՝ կոնսոնանտ։' } },
          { id: 'D', text: { es: 'Son exactamente idénticas y se usan como sinónimos sin diferencia.', hy: 'Դրանք բացարձակապես նույնական են և օգտագործվում են առանց տարբերության։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: '«Tus ojos son como estrellas» = símil. «Tus ojos son estrellas» o «los luceros de tu cara» = metáfora.',
          hy: '«Աչքերդ աստղերի պես են» = համեմատություն։ «Աչքերդ աստղեր են» = փոխաբերություն։',
        },
      },
      {
        id: 'ef-3',
        originTopic: 'Figuras literarias',
        question: {
          es: 'En la metáfora «El oro de su cabello brillaba al viento», ¿qué elemento es el término figurado B?',
          hy: '«El oro de su cabello brillaba al viento» փոխաբերության մեջ ո՞ր տարրն է պատկերավոր B տարրը։',
        },
        options: [
          { id: 'A', text: { es: '«El oro» (el elemento imaginario y valioso).', hy: '«El oro» (ոսկին՝ երևակայական և թանկարժեք տարրը)։' } },
          { id: 'B', text: { es: '«Su cabello» (el elemento real humano).', hy: '«Su cabello» (մազերը՝ մարդկային իրական տարրը)։' } },
          { id: 'C', text: { es: '«El viento» (el clima de la tarde).', hy: '«El viento» (քամին)։' } },
          { id: 'D', text: { es: '«Brillaba» (el verbo de acción).', hy: '«Brillaba» (բայը)։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'Estructura «B de A»: el término figurado B es el oro (evoca color rubio y resplandor), mientras que A es el cabello real.',
          hy: '«B de A» կառուցվածք. պատկերավոր B տարրը ոսկին է, իսկ իրական A տարրը՝ մազերը։',
        },
      },
      {
        id: 'ef-4',
        originTopic: 'Figuras literarias',
        question: {
          es: '¿Qué figura retórica encontramos en «Verde que te quiero verde»?',
          hy: 'Ի՞նչ գեղարվեստական միջոց է «Verde que te quiero verde» տողում։',
        },
        options: [
          { id: 'A', text: { es: 'Epanadiplosis (empieza y termina con la palabra «verde»).', hy: 'Էպանադիպլոզիս (սկսվում և ավարտվում է «verde» բառով)։' } },
          { id: 'B', text: { es: 'Onomatopeya de un instrumento de cuerda.', hy: 'Լարային գործիքի ձայնանմանություն։' } },
          { id: 'C', text: { es: 'Asíndeton sin conjunción.', hy: 'Անշաղկապություն։' } },
          { id: 'D', text: { es: 'Hipérbaton con tres sujetos invertidos.', hy: 'Շրջադասություն։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'La epanadiplosis encuadra el verso repitiendo el mismo término en los dos extremos.',
          hy: 'Էպանադիպլոզիսը շրջանակում է տողը՝ նույն բառը կրկնելով երկու ծայրերում։',
        },
      },
      {
        id: 'ef-5',
        originTopic: 'Figuras literarias',
        question: {
          es: '«Rendí, rompí, derribé, rajé, deshice, prendí». ¿Qué figura sintáctica acelera este verso?',
          hy: '«Rendí, rompí, derribé, rajé, deshice, prendí»: Ի՞նչ շարահյուսական միջոց է արագացնում այս տողը։',
        },
        options: [
          { id: 'A', text: { es: 'Asíndeton (omisión total de conjunciones).', hy: 'Անշաղկապություն (շաղկապների իսպառ բացակայություն)։' } },
          { id: 'B', text: { es: 'Polisíndeton con repetición de enlaces «y».', hy: 'Բազմաշաղկապություն «y» կապերով։' } },
          { id: 'C', text: { es: 'Paronomasia con palabras idénticas.', hy: 'Հարանունություն։' } },
          { id: 'D', text: { es: 'Metáfora pura sin término real.', hy: 'Մաքուր փոխաբերություն։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'El asíndeton elimina las conjunciones coordinantes, produciendo vértigo y rapidez.',
          hy: 'Անշաղկապությունը հեռացնում է համադասական շաղկապները՝ առաջացնելով արագություն և շարժում։',
        },
      },
    ],
  },
  {
    id: 'exam-final',
    title: {
      es: 'Examen Final Global de Lengua Castellana y Literatura — 1.º ESO',
      hy: 'Ընդհանուր ամփոփիչ քննություն. Իսպաներեն լեզու և գրականություն — 1-ին ESO',
    },
    description: {
      es: 'Simulacro oficial de 60 preguntas que abarca teoría, géneros narrativos, métrica y figuras retóricas.',
      hy: '60 հարցից բաղկացած պաշտոնական ամփոփիչ քննություն՝ ընդգրկելով տեսությունը, պատմողական ժանրերը, մետրիկան և գեղարվեստական միջոցները։',
    },
    questionCount: 60,
    timeLimitMinutes: 60,
    questions: [
      {
        id: 'fin-1',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Por qué un romance tradicional recogido en un pueblo de Granada puede tener versos distintos al mismo romance en Asturias?',
          hy: 'Ինչո՞ւ Գրանադայի գյուղում գրի առնված ավանդական ռոմանսը կարող է ունենալ այլ տողեր, քան Աստուրիայում գրված նույն ռոմանսը։',
        },
        options: [
          { id: 'A', text: { es: 'Porque la transmisión oral durante siglos generó múltiples variantes y versiones locales.', hy: 'Քանի որ դարեր շարունակ բանավոր փոխանցումը առաջացրել է բազմաթիվ տեղական տարբերակներ։' } },
          { id: 'B', text: { es: 'Porque la imprenta moderna cometió un error tipográfico en 2010.', hy: 'Որովհետև ժամանակակից տպարանը տպագրական սխալ է թույլ տվել։' } },
          { id: 'C', text: { es: 'Porque estaba prohibido cantar la misma canción en dos regiones de España.', hy: 'Որովհետև արգելված էր նույն երգը երգել Իսպանիայի երկու տարբեր շրջաններում։' } },
          { id: 'D', text: { es: 'Porque uno de ellos fue traducido del chino mandarín.', hy: 'Որովհետև դրանցից մեկը չինարենից էր թարգմանվել։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'La memoria colectiva de los cantores populares introduce cambios espontáneos en cada comarca.',
          hy: 'Ժողովրդական երգիչների հավաքական հիշողությունը յուրաքանչյուր գավառում ինքնաբուխ փոփոխություններ է մտցնում։',
        },
      },
      {
        id: 'fin-2',
        originTopic: 'La prosa y el verso',
        question: {
          es: '¿Cómo se llama la coincidencia de vocales y consonantes a partir de la última vocal tónica en dos versos?',
          hy: 'Ինչպե՞ս է կոչվում երկու տողերի վերջին շեշտված ձայնավորից սկսած և՛ ձայնավորների, և՛ բաղաձայնների համընկնումը։',
        },
        options: [
          { id: 'A', text: { es: 'Rima consonante.', hy: 'Համակազմ (կոնսոնանտ) հանգ (Rima consonante)։' } },
          { id: 'B', text: { es: 'Rima asonante.', hy: 'Ձայնավորական (ասոնանս) հանգ (Rima asonante)։' } },
          { id: 'C', text: { es: 'Verso libre o blanco.', hy: 'Ազատ կամ սպիտակ տող։' } },
          { id: 'D', text: { es: 'Asíndeton estrófico.', hy: 'Տնային անշաղկապություն։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'Si coinciden vocales y consonantes es consonante (ejemplo: cantero / sendero). Si solo coinciden vocales es asonante (casa / playa).',
          hy: 'Եթե համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները, ապա կոնսոնանտ է (cantero / sendero)։ Եթե միայն ձայնավորները՝ ասոնանս (casa / playa)։',
        },
      },
      {
        id: 'fin-3',
        originTopic: 'Géneros narrativos',
        question: {
          es: 'Un relato tradicional protagonizado por la diosa Atenea que explica cómo nació el árbol del olivo en Atenas es:',
          hy: 'Աթենաս աստվածուհու մասին ավանդական պատմությունը, որը բացատրում է, թե ինչպես առաջացավ ձիթենին Աթենքում, հետևյալն է՝',
        },
        options: [
          { id: 'A', text: { es: 'Un mito.', hy: 'Առասպել (Mito)։' } },
          { id: 'B', text: { es: 'Una noticia científica.', hy: 'Գիտական լուր։' } },
          { id: 'C', text: { es: 'Un romance bélico.', hy: 'Ռազմական ռոմանս։' } },
          { id: 'D', text: { es: 'Una novela de ciencia ficción espacial.', hy: 'Տիեզերական գիտաֆանտաստիկ վեպ։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'Trata de dioses inmortales y explica el origen primordial de un elemento del mundo: es un mito inequívoco.',
          hy: 'Պատմում է անմահ աստվածների մասին և բացատրում աշխարհի տարրի նախնական ծագումը. անկասկած առասպել է։',
        },
      },
      {
        id: 'fin-4',
        originTopic: 'Figuras literarias',
        question: {
          es: 'En el verso «De los sus ojos tan fuertemente llorando», ¿qué figura expresiva observamos?',
          hy: '«De los sus ojos tan fuertemente llorando» տողում ի՞նչ գեղարվեստական արտահայտչամիջոց ենք տեսնում։',
        },
        options: [
          { id: 'A', text: { es: 'Pleonasmo (redundancia voluntaria que conmueve y añade intensidad).', hy: 'Ավելորդաբանություն (պլեոնազմ՝ գիտակցված ավելորդություն, որը հուզում և ուժ է հաղորդում)։' } },
          { id: 'B', text: { es: 'Aliteración de la letra z.', hy: 'Z տառի ալիտերացիա։' } },
          { id: 'C', text: { es: 'Metáfora pura con sustitución de ojos por estrellas.', hy: 'Մաքուր փոխաբերություն։' } },
          { id: 'D', text: { es: 'Onomatopeya de un llanto infantil.', hy: 'Մանկական լացի ձայնանմանություն։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: '«Llorar de los ojos» es un pleonasmo emotivo magistral del Cantar de mio Cid.',
          hy: '«Աչքերից արցունք թափելը» «Իմ Սիդի երգը» դյուցազնավեպի հուզական վարպետ պլեոնազմն է։',
        },
      },
      {
        id: 'fin-5',
        originTopic: 'Figuras literarias',
        question: {
          es: '¿Qué figura retórica se encuentra en la frase: «Presa del pánico, avanzaba con excesiva prisa»?',
          hy: 'Ի՞նչ գեղարվեստական միջոց է «Presa del pánico, avanzaba con excesiva prisa» նախադասության մեջ։',
        },
        options: [
          { id: 'A', text: { es: 'Paronomasia (entre las palabras acústicamente parecidas presa / prisa).', hy: 'Հարանունություն (պարոնոմազիա՝ հնչյունապես նման «presa» և «prisa» բառերի միջև)։' } },
          { id: 'B', text: { es: 'Polisíndeton con repetición de nexos.', hy: 'Բազմաշաղկապություն։' } },
          { id: 'C', text: { es: 'Asíndeton sin verbos.', hy: 'Անշաղկապություն։' } },
          { id: 'D', text: { es: 'Mito griego cosmogónico.', hy: 'Հունական տիեզերածնական առասպել։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'Paronomasia: dos términos casi idénticos en su sonido (presa / prisa) que provocan un efecto estético ingenioso.',
          hy: 'Հարանունություն. արտասանությամբ գրեթե նույնական երկու բառեր (presa / prisa), որոնք ստեղծում են սրամիտ գեղագիտական տպավորություն։',
        },
      },
    ],
  },
];
