const L = {
pt: {
menu: 'Abrir menu',
nav: [
{ label: 'História', href: '#historia' }, { label: 'Sobre mim', href: '#sobre' }, { label: 'Projetos', href: '#projetos' }, { label: 'Competências', href: '#competencias' }, { label: 'Contato', href: '#contato' }
],
hero: {
kicker: 'Coordenador de TI · Fundador da Artech · Belo Horizonte',
pre: 'Trabalho com',
words: ['infraestrutura', 'segurança da informação', 'dados e BI', 'desenvolvimento de produtos'],
sub: '12 anos transformando necessidades de negócio em sistemas que funcionam. Do cabo de rede ao aplicativo.',
cta1: 'Falar no WhatsApp', cta2: 'Ver projetos',
stackAlt: 'Quatro camadas empilhadas: infraestrutura, segurança, dados e produto',
l1: 'Infraestrutura', l2: 'Segurança', l3: 'Dados', l4: 'Produto'
},
story: {
eyebrow: 'Minha história', title: 'Quatro capítulos, uma direção: do suporte ao produto',
chapters: [
{ year: '2009', title: 'O começo', text: 'Entrei em uma área comercial e logo fui para o suporte de TI. Aprendi a atender, a resolver e a entender o que o usuário realmente precisa.', meta: 'Grupo Embrasil · 2009–2015' },
{ year: '2016', title: 'Dos processos aos dados', text: 'Análise administrativa, propostas e licitações. Foi aqui que planilhas, indicadores e dashboards viraram ferramenta de trabalho.', meta: 'ETAL e Lyon Engenharia · 2016–2022' },
{ year: '2022', title: 'Da operação à liderança', text: 'Na Mello Transportes, de analista a coordenador de TI: Microsoft 365, segurança, redes e fornecedores, com a equipe e o negócio em mente.', meta: 'Mello Transportes · 2022–2026' },
{ year: '2026', title: 'Do suporte ao produto', text: 'Fundei a Artech e passei a construir meus próprios sistemas e apps, do problema do cliente até o produto no ar.', meta: 'Artech Soluções & Tecnologia · 2026–hoje' }
]
},
about: {
eyebrow: 'Sobre mim', title: 'Eu sou o Rodrigo. Esta é a minha história.',
photo1: 'Espaço para a sua foto', photo1Alt: 'Rodrigo sorrindo, de braços cruzados, em um centro de distribuição', cap1: 'Rodrigo Alves de Oliveira',
photo2: 'Espaço para a foto da família', photo2Alt: 'Rodrigo com a esposa e os dois filhos, sorrindo em frente a um lago', cap2: 'Minha família',
faithTitle: 'Fé e serviço',
faithText: 'Sou cristão e cuido da área de tecnologia da minha igreja. Também lidero jovens ao lado da minha esposa: é ali que aprendo, todos os dias, a ouvir, orientar e servir.',
photo3: 'Foto na tecnologia da igreja', photo3Alt: 'Espaço reservado para foto na área de tecnologia da igreja', cap3: 'Tecnologia na igreja',
photo4: 'Foto com os jovens', photo4Alt: 'Espaço reservado para foto com os jovens', cap4: 'Liderança de jovens',
familyTitle: 'Minha família',
familyText: 'Sou casado e pai de dois filhos, uma filha e um filho. Minha esposa é minha parceira em tudo: na vida, na fé e na liderança dos jovens. Em casa aprendo, todos os dias, sobre paciência, diálogo e exemplo, os mesmos valores que levo para o trabalho e para a liderança de equipes. Entre o trabalho, a família e os projetos que construo, aprendi a organizar o tempo e a priorizar o que importa. Cada passo na carreira tem um propósito: ser um bom exemplo para os meus filhos e construir, ao lado da minha esposa, um futuro sólido para a nossa família.',
paras: [
{ text: 'Sou de Belo Horizonte, casado e pai de dois filhos. A família é a base de tudo o que eu faço, e é por ela que eu quero crescer e construir algo que dure.' },
{ text: 'Comecei a trabalhar em 2009 e fui aprendendo na prática: atendimento, suporte, processos, dados e liderança. Cada fase me ensinou a ouvir as pessoas antes de propor uma solução.' },
{ text: 'Gosto de entender o negócio antes de mexer na tecnologia. Por isso estudei Administração e Análise e Desenvolvimento de Sistemas: uma me ensinou a perguntar, a outra, a construir.' },
{ text: 'Gosto de problema real: um servidor que não pode parar, um processo manual que pode virar sistema, um número que ninguém enxerga até virar um dashboard.' },
{ text: 'Fora do trabalho, coloco a tecnologia a serviço da minha igreja como voluntário.' }
],
stats: [
{ n: '12+', l: 'anos de experiência em TI' },
{ n: '2', l: 'formações: tecnologia e administração' },
{ n: '10+', l: 'cursos e certificações em dados, BI e processos' },
{ n: '5', l: 'projetos próprios, no ar ou em desenvolvimento' }
]
},
projects: {
eyebrow: 'Projetos', title: 'Coisas que eu construí',
intro: 'Cada projeto parte de um problema real. Os que ainda estão em desenvolvimento aparecem sinalizados.',
items: [
{ name: 'MeuBolso', status: 'No ar', desc: 'Aplicativo web instalável (PWA) de finanças pessoais, integrado à Claude API.', tags: 'PWA · Supabase · Claude API · Netlify', hasLink: false },
{ name: 'SaaS de PDV e delivery', status: 'Em desenvolvimento', desc: 'Sistema multi-cliente para pizzarias e hamburguerias: pedidos por telefone, WhatsApp e app, pagamentos Pix e cartão, estoque e app do motoboy.', tags: 'SaaS · Apps móveis · Pix', hasLink: false },
{ name: 'CRM para elétrica e automação', status: 'Em desenvolvimento', desc: 'SaaS multiempresa com contas a pagar e receber e app offline para técnicos de campo.', tags: 'SaaS · Financeiro · Modo offline', hasLink: false },
{ name: 'igreja-connect', status: 'Em desenvolvimento', desc: 'App Flutter para gestão de igrejas, em preparação para publicação na Google Play.', tags: 'Flutter · Google Play · GitHub', hasLink: true },
{ name: 'ApuraçãoEleitoral', status: 'Campanha 2026', desc: 'Painel de monitoramento de resultados em tempo real, com coletor em VPS, Firestore e exibição em telão, desenhado para evitar bloqueio de IP.', tags: 'VPS · Firestore · Tempo real', hasLink: false },
{ name: 'Gestão de TI corporativa', status: 'Mello Transportes', desc: 'Microsoft 365 e Exchange Online, proteção de endpoints com Bitdefender GravityZone, monitoramento com Grafana e gestão de fornecedores.', tags: 'Microsoft 365 · Bitdefender · Grafana', hasLink: false }
]
},
skills: {
eyebrow: 'Competências', title: 'Quatro frentes, uma visão de negócio',
groups: [
{ name: 'Infraestrutura e cloud', items: 'Microsoft 365 · Exchange Online · Active Directory / Azure AD · Windows Server · redes e switches' },
{ name: 'Cibersegurança', items: 'Bitdefender GravityZone · patches e vulnerabilidades · resposta a incidentes' },
{ name: 'Dados e BI', items: 'Power BI · SQL Server · Python · Excel e VBA · Grafana' },
{ name: 'Desenvolvimento e IA', items: 'React · Firebase · Flutter · Supabase · Git e GitHub · Claude API' },
{ name: 'Gestão', items: 'Projetos de TI · fornecedores e contratos · orçamentos e ROI · BPM · liderança de equipes' }
]
},
journey: {
eyebrow: 'Experiência', title: 'Trajetória profissional',
items: [
{ dates: '2026 – atual', co: 'Artech Soluções & Tecnologia', role: 'Fundador e consultor de TI', note: 'Consultoria de TI, desenvolvimento web e mobile, design gráfico e tráfego pago.' },
{ dates: 'out/2022 – ago/2026', co: 'Mello Transportes', role: 'Coordenador de TI (2024–2026) · Analista de TI (2022–2024)', note: 'Liderança de equipe, infraestrutura, segurança da informação e fornecedores.' },
{ dates: 'jan/2021 – set/2022', co: 'Lyon Engenharia', role: 'Proposal Analyst', note: 'Dashboards comerciais em Excel, licitações e propostas.' },
{ dates: 'mar/2016 – jan/2021', co: 'ETAL Prestação de Serviços', role: 'Analista Administrativo', note: 'Bases de dados em Excel, propostas e negociação com fornecedores.' },
{ dates: 'abr/2009 – dez/2015', co: 'Grupo Embrasil', role: 'Suporte de TI e Assistente Comercial', note: 'Suporte de baixa a alta complexidade, dashboards e processos em BPM.' }
]
},
edu: { title: 'Formação', lines: [
{ text: 'Tecnólogo em Análise e Desenvolvimento de Sistemas, Estácio (2022–2024)' },
{ text: 'Bacharelado em Administração de Empresas, Izabela Hendrix (2012–2015)' },
{ text: 'Certificações em Power BI, SQL Server, Excel VBA, Data Science e BPM' }
] },
langs: { title: 'Idiomas', lines: [{ text: 'Português: nativo' }, { text: 'Inglês: básico' }] },
contact: { title: 'Vamos construir algo juntos?', sub: 'Aberto a oportunidades em TI. Escreva pelo canal que preferir.', footer: 'Belo Horizonte, MG · Brasil' }
},
en: {
menu: 'Open menu',
nav: [
{ label: 'Story', href: '#historia' }, { label: 'About', href: '#sobre' }, { label: 'Projects', href: '#projetos' }, { label: 'Skills', href: '#competencias' }, { label: 'Contact', href: '#contato' }
],
hero: {
kicker: 'IT Coordinator · Founder of Artech · Belo Horizonte, Brazil',
pre: 'I work with',
words: ['infrastructure', 'information security', 'data and BI', 'product development'],
sub: '12 years turning business needs into systems that work. From the network cable to the app.',
cta1: 'Message on WhatsApp', cta2: 'See projects',
stackAlt: 'Four stacked layers: infrastructure, security, data and product',
l1: 'Infrastructure', l2: 'Security', l3: 'Data', l4: 'Product'
},
story: {
eyebrow: 'My story', title: 'Four chapters, one direction: from support to product',
chapters: [
{ year: '2009', title: 'The beginning', text: 'I joined a sales department and soon moved into IT support. I learned to listen, to solve problems and to understand what users really need.', meta: 'Grupo Embrasil · 2009–2015' },
{ year: '2016', title: 'From processes to data', text: 'Administrative analysis, proposals and tenders. This is where spreadsheets, indicators and dashboards became real working tools.', meta: 'ETAL and Lyon Engenharia · 2016–2022' },
{ year: '2022', title: 'From operations to leadership', text: 'At Mello Transportes, from analyst to IT coordinator: Microsoft 365, security, networks and vendors, with the team and the business in mind.', meta: 'Mello Transportes · 2022–2026' },
{ year: '2026', title: 'From support to product', text: 'I founded Artech and started building my own systems and apps, from the customer problem to a live product.', meta: 'Artech Soluções & Tecnologia · 2026–today' }
]
},
about: {
eyebrow: 'About me', title: "I'm Rodrigo. This is my story.",
photo1: 'Space for your photo', photo1Alt: 'Rodrigo smiling with arms crossed in a distribution center', cap1: 'Rodrigo Alves de Oliveira',
photo2: 'Space for the family photo', photo2Alt: 'Rodrigo with his wife and two children, smiling in front of a lake', cap2: 'My family',
faithTitle: 'Faith and service',
faithText: 'I am a Christian and I take care of the technology area at my church. I also lead young people together with my wife, which is where I learn every day to listen, guide and serve.',
photo3: 'Photo in church technology', photo3Alt: 'Reserved space for a photo in the church technology area', cap3: 'Church technology',
photo4: 'Photo with the youth group', photo4Alt: 'Reserved space for a photo with the youth group', cap4: 'Youth leadership',
familyTitle: 'My family',
familyText: 'I am married and a father of two, a daughter and a son. My wife is my partner in everything: in life, in faith and in leading young people. At home I learn every day about patience, dialogue and setting an example, the same values I bring to my work and to leading teams. Between work, family and the projects I build, I learned to organize my time and prioritize what matters. Every step in my career has a purpose: to be a good example for my children and to build, together with my wife, a solid future for our family.',
paras: [
{ text: 'I am from Belo Horizonte, married and a father of two. Family is the foundation of everything I do, and it is for them that I want to grow and build something that lasts.' },
{ text: 'I started working in 2009 and learned on the job: customer service, support, processes, data and leadership. Each stage taught me to listen to people before proposing a solution.' },
{ text: 'I like to understand the business before touching the technology. That is why I studied Business Administration and Systems Analysis and Development: one taught me to ask, the other to build.' },
{ text: 'I like real problems: a server that cannot go down, a manual process that can become a system, a number nobody sees until it becomes a dashboard.' },
{ text: 'Outside of work, I volunteer my technology skills to serve my church.' }
],
stats: [
{ n: '12+', l: 'years of IT experience' },
{ n: '2', l: 'degrees: technology and business' },
{ n: '10+', l: 'courses and certifications in data, BI and processes' },
{ n: '5', l: 'projects of my own, live or in development' }
]
},
projects: {
eyebrow: 'Projects', title: 'Things I have built',
intro: 'Each project starts from a real problem. The ones still under development are labeled.',
items: [
{ name: 'MeuBolso', status: 'Live', desc: 'Installable web app (PWA) for personal finance, integrated with the Claude API.', tags: 'PWA · Supabase · Claude API · Netlify', hasLink: false },
{ name: 'POS and delivery SaaS', status: 'In development', desc: 'Multi-client system for pizzerias and burger shops: phone, WhatsApp and app orders, Pix and card payments, inventory and a delivery-driver app.', tags: 'SaaS · Mobile apps · Pix', hasLink: false },
{ name: 'CRM for electrical and automation companies', status: 'In development', desc: 'Multi-company SaaS with accounts payable and receivable and an offline app for field technicians.', tags: 'SaaS · Finance · Offline mode', hasLink: false },
{ name: 'igreja-connect', status: 'In development', desc: 'Flutter app for church management, being prepared for release on Google Play.', tags: 'Flutter · Google Play · GitHub', hasLink: true },
{ name: 'ApuraçãoEleitoral', status: '2026 campaign', desc: 'Real-time election results monitor, with a VPS collector, Firestore and big-screen display, designed to avoid IP blocking.', tags: 'VPS · Firestore · Real time', hasLink: false },
{ name: 'Corporate IT management', status: 'Mello Transportes', desc: 'Microsoft 365 and Exchange Online, endpoint protection with Bitdefender GravityZone, monitoring with Grafana and vendor management.', tags: 'Microsoft 365 · Bitdefender · Grafana', hasLink: false }
]
},
skills: {
eyebrow: 'Skills', title: 'Four fronts, one business view',
groups: [
{ name: 'Infrastructure and cloud', items: 'Microsoft 365 · Exchange Online · Active Directory / Azure AD · Windows Server · networks and switches' },
{ name: 'Cybersecurity', items: 'Bitdefender GravityZone · patching and vulnerabilities · incident response' },
{ name: 'Data and BI', items: 'Power BI · SQL Server · Python · Excel and VBA · Grafana' },
{ name: 'Development and AI', items: 'React · Firebase · Flutter · Supabase · Git and GitHub · Claude API' },
{ name: 'Management', items: 'IT projects · vendors and contracts · budgets and ROI · BPM · team leadership' }
]
},
journey: {
eyebrow: 'Experience', title: 'Work history',
items: [
{ dates: '2026 – present', co: 'Artech Soluções & Tecnologia', role: 'Founder and IT consultant', note: 'IT consulting, web and mobile development, graphic design and paid traffic.' },
{ dates: 'Oct 2022 – Aug 2026', co: 'Mello Transportes', role: 'IT Coordinator (2024–2026) · IT Analyst (2022–2024)', note: 'Team leadership, infrastructure, information security and vendors.' },
{ dates: 'Jan 2021 – Sep 2022', co: 'Lyon Engenharia', role: 'Proposal Analyst', note: 'Sales dashboards in Excel, tenders and proposals.' },
{ dates: 'Mar 2016 – Jan 2021', co: 'ETAL Prestação de Serviços', role: 'Administrative Analyst', note: 'Excel databases, proposals and vendor negotiation.' },
{ dates: 'Apr 2009 – Dec 2015', co: 'Grupo Embrasil', role: 'IT Support and Sales Assistant', note: 'Tier 1 to 3 support, dashboards and BPM processes.' }
]
},
edu: { title: 'Education', lines: [
{ text: 'Technologist degree in Systems Analysis and Development, Estácio (2022–2024)' },
{ text: "Bachelor's degree in Business Administration, Izabela Hendrix (2012–2015)" },
{ text: 'Certifications in Power BI, SQL Server, Excel VBA, Data Science and BPM' }
] },
langs: { title: 'Languages', lines: [{ text: 'Portuguese: native' }, { text: 'English: basic' }] },
contact: { title: "Let's build something together?", sub: 'Open to IT opportunities. Reach out through the channel you prefer.', footer: 'Belo Horizonte, MG · Brazil' }
},
fr: {
menu: 'Ouvrir le menu',
nav: [
{ label: 'Histoire', href: '#historia' }, { label: 'À propos', href: '#sobre' }, { label: 'Projets', href: '#projetos' }, { label: 'Compétences', href: '#competencias' }, { label: 'Contact', href: '#contato' }
],
hero: {
kicker: "Coordinateur TI · Fondateur d'Artech · Belo Horizonte, Brésil",
pre: 'Je travaille sur',
words: ["l'infrastructure", "la sécurité de l'information", 'les données et la BI', 'le développement de produits'],
sub: "12 ans à transformer des besoins métier en systèmes qui fonctionnent. Du câble réseau à l'application.",
cta1: 'Écrire sur WhatsApp', cta2: 'Voir les projets',
stackAlt: 'Quatre couches empilées : infrastructure, sécurité, données et produit',
l1: 'Infrastructure', l2: 'Sécurité', l3: 'Données', l4: 'Produit'
},
story: {
eyebrow: 'Mon histoire', title: 'Quatre chapitres, une direction : du support au produit',
chapters: [
{ year: '2009', title: 'Le début', text: "J'ai commencé dans un service commercial, puis au support informatique. J'y ai appris à écouter, à résoudre et à comprendre ce dont l'utilisateur a vraiment besoin.", meta: 'Grupo Embrasil · 2009–2015' },
{ year: '2016', title: 'Des processus aux données', text: "Analyse administrative, propositions et appels d'offres : c'est là que les tableurs, les indicateurs et les tableaux de bord sont devenus de vrais outils de travail.", meta: 'ETAL et Lyon Engenharia · 2016–2022' },
{ year: '2022', title: "De l'exploitation à la direction", text: "Chez Mello Transportes, d'analyste à coordinateur TI : Microsoft 365, sécurité, réseaux et fournisseurs, avec l'équipe et l'entreprise en tête.", meta: 'Mello Transportes · 2022–2026' },
{ year: '2026', title: 'Du support au produit', text: "J'ai fondé Artech et je construis désormais mes propres systèmes et applications, du problème du client jusqu'au produit en ligne.", meta: "Artech Soluções & Tecnologia · 2026–aujourd'hui" }
]
},
about: {
eyebrow: 'À propos', title: "Je suis Rodrigo. Voici mon histoire.",
photo1: 'Espace pour votre photo', photo1Alt: 'Rodrigo souriant, bras croisés, dans un centre de distribution', cap1: 'Rodrigo Alves de Oliveira',
photo2: 'Espace pour la photo de famille', photo2Alt: 'Rodrigo avec son épouse et ses deux enfants, souriant devant un lac', cap2: 'Ma famille',
faithTitle: 'Foi et service',
faithText: "Je suis chrétien et je m'occupe de la partie technologique de mon église. J'accompagne aussi des jeunes avec mon épouse : c'est là que j'apprends chaque jour à écouter, guider et servir.",
photo3: "Photo à la technologie de l'église", photo3Alt: "Espace réservé pour une photo dans la partie technologique de l'église", cap3: "Technologie à l'église",
photo4: 'Photo avec les jeunes', photo4Alt: 'Espace réservé pour une photo avec les jeunes', cap4: 'Accompagnement des jeunes',
familyTitle: 'Ma famille',
familyText: "Je suis marié et père de deux enfants, une fille et un garçon. Mon épouse est ma partenaire en tout : dans la vie, dans la foi et dans l'accompagnement des jeunes. À la maison, j'apprends chaque jour la patience, le dialogue et l'exemple, les mêmes valeurs que j'apporte à mon travail et à l'encadrement d'équipes. Entre le travail, la famille et les projets que je construis, j'ai appris à organiser mon temps et à prioriser ce qui compte. Chaque étape de ma carrière a un but : être un bon exemple pour mes enfants et construire, avec mon épouse, un avenir solide pour notre famille.",
paras: [
{ text: "Je viens de Belo Horizonte, je suis marié et père de deux enfants. La famille est la base de tout ce que je fais, et c'est pour elle que je veux progresser et construire quelque chose de durable." },
{ text: "J'ai commencé à travailler en 2009 et j'ai appris sur le terrain : accueil, support, processus, données et encadrement. Chaque étape m'a appris à écouter les gens avant de proposer une solution." },
{ text: "J'aime comprendre le métier avant de toucher à la technologie. C'est pourquoi j'ai étudié l'administration et l'analyse et le développement de systèmes : l'une m'a appris à poser les bonnes questions, l'autre à construire." },
{ text: "J'aime les problèmes réels : un serveur qui ne peut pas s'arrêter, un processus manuel qui peut devenir un système, un chiffre que personne ne voit avant qu'il devienne un tableau de bord." },
{ text: "En dehors du travail, je mets bénévolement la technologie au service de mon église." }
],
stats: [
{ n: '12+', l: "ans d'expérience en TI" },
{ n: '2', l: 'diplômes : technologie et administration' },
{ n: '10+', l: 'cours et certifications en données, BI et processus' },
{ n: '5', l: 'projets personnels, en ligne ou en développement' }
]
},
projects: {
eyebrow: 'Projets', title: "Ce que j'ai construit",
intro: "Chaque projet part d'un problème réel. Ceux qui sont encore en développement sont signalés.",
items: [
{ name: 'MeuBolso', status: 'En ligne', desc: "Application web installable (PWA) de finances personnelles, intégrée à l'API Claude.", tags: 'PWA · Supabase · API Claude · Netlify', hasLink: false },
{ name: 'SaaS de caisse et livraison', status: 'En développement', desc: "Système multi-clients pour pizzerias et burgers : commandes par téléphone, WhatsApp et application, paiements Pix et carte, stocks et application pour livreurs.", tags: 'SaaS · Applications mobiles · Pix', hasLink: false },
{ name: 'CRM pour électricité et automatisation', status: 'En développement', desc: "SaaS multi-entreprises avec comptabilité fournisseurs et clients et application hors ligne pour les techniciens de terrain.", tags: 'SaaS · Finance · Mode hors ligne', hasLink: false },
{ name: 'igreja-connect', status: 'En développement', desc: "Application Flutter de gestion d'églises, en préparation pour sa publication sur Google Play.", tags: 'Flutter · Google Play · GitHub', hasLink: true },
{ name: 'ApuraçãoEleitoral', status: 'Campagne 2026', desc: "Tableau de suivi des résultats électoraux en temps réel, avec collecteur sur VPS, Firestore et affichage sur grand écran, conçu pour éviter les blocages d'IP.", tags: 'VPS · Firestore · Temps réel', hasLink: false },
{ name: "Gestion informatique d'entreprise", status: 'Mello Transportes', desc: "Microsoft 365 et Exchange Online, protection des postes avec Bitdefender GravityZone, supervision avec Grafana et gestion des fournisseurs.", tags: 'Microsoft 365 · Bitdefender · Grafana', hasLink: false }
]
},
skills: {
eyebrow: 'Compétences', title: 'Quatre volets, une vision métier',
groups: [
{ name: 'Infrastructure et cloud', items: 'Microsoft 365 · Exchange Online · Active Directory / Azure AD · Windows Server · réseaux et commutateurs' },
{ name: 'Cybersécurité', items: 'Bitdefender GravityZone · correctifs et vulnérabilités · réponse aux incidents' },
{ name: 'Données et BI', items: 'Power BI · SQL Server · Python · Excel et VBA · Grafana' },
{ name: 'Développement et IA', items: 'React · Firebase · Flutter · Supabase · Git et GitHub · API Claude' },
{ name: 'Gestion', items: "Projets TI · fournisseurs et contrats · budgets et ROI · BPM · encadrement d'équipes" }
]
},
journey: {
eyebrow: 'Expérience', title: 'Parcours professionnel',
items: [
{ dates: "2026 – aujourd'hui", co: 'Artech Soluções & Tecnologia', role: 'Fondateur et consultant TI', note: 'Conseil en informatique, développement web et mobile, design graphique et gestion du trafic payant.' },
{ dates: 'oct. 2022 – août 2026', co: 'Mello Transportes', role: 'Coordinateur TI (2024–2026) · Analyste TI (2022–2024)', note: "Encadrement d'équipe, infrastructure, sécurité de l'information et fournisseurs." },
{ dates: 'janv. 2021 – sept. 2022', co: 'Lyon Engenharia', role: 'Analyste propositions', note: "Tableaux de bord commerciaux sous Excel, appels d'offres et propositions." },
{ dates: 'mars 2016 – janv. 2021', co: 'ETAL Prestação de Serviços', role: 'Analyste administratif', note: 'Bases de données Excel, propositions et négociation avec les fournisseurs.' },
{ dates: 'avr. 2009 – déc. 2015', co: 'Grupo Embrasil', role: 'Support TI et assistant commercial', note: 'Support de niveau 1 à 3, tableaux de bord et processus BPM.' }
]
},
edu: { title: 'Formation', lines: [
{ text: 'Diplôme de technologue en analyse et développement de systèmes, Estácio (2022–2024)' },
{ text: 'Licence en administration des entreprises, Izabela Hendrix (2012–2015)' },
{ text: 'Certifications en Power BI, SQL Server, Excel VBA, Data Science et BPM' }
] },
langs: { title: 'Langues', lines: [{ text: 'Portugais : langue maternelle' }, { text: 'Anglais : notions de base' }] },
contact: { title: 'Construisons quelque chose ensemble ?', sub: 'Ouvert aux opportunités en TI. Écrivez-moi par le canal de votre choix.', footer: 'Belo Horizonte, MG · Brésil' }
}
};

const TECHS = ['Microsoft 365', 'Exchange Online', 'Active Directory', 'Bitdefender', 'Grafana', 'Power BI', 'SQL Server', 'Python', 'React', 'Firebase', 'Flutter', 'Supabase', 'Claude API'];
const NAMES = { pt: 'Português', en: 'English', fr: 'Français' };
const DELAYS = ['0s', '3s', '6s', '9s'];
const HTML_LANG = { pt: 'pt-BR', en: 'en', fr: 'fr' };

let state = { lang: 'pt', flip: false };
let saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
if (saved && L[saved]) state.lang = saved;
else {
  const nav = (navigator.language || 'pt').slice(0, 2).toLowerCase();
  if (L[nav]) state.lang = nav;
}

function vals() {
  const lang = state.lang, base = L[lang];
  const t = Object.assign({}, base, {
    hero: Object.assign({}, base.hero, { words: base.hero.words.map((w, i) => ({ text: w, delay: DELAYS[i] })) }),
    projects: Object.assign({}, base.projects, { items: base.projects.items.map((it, i) => Object.assign({}, it, { a1: i === 0, a2: i === 1, a3: i === 2, a4: i === 3, a5: i === 4, a6: i === 5 })) })
  });
  const langs = ['pt', 'en', 'fr'].map((c) => {
    const on = c === lang;
    return {
      code: c.toUpperCase(), lc: c, name: NAMES[c], pressed: on ? 'true' : 'false',
      style: 'min-width: 44px; min-height: 44px; border-radius: 999px; cursor: pointer; font: 600 14px Inter, sans-serif; border: 1.5px solid #C6FF3D; ' + (on ? 'background: #C6FF3D; color: #07070D;' : 'background: transparent; color: #FFFFFF;')
    };
  });
  return { t, langs, marquee: TECHS.concat(TECHS).map((x) => ({ text: x })), fade: state.flip ? 'fadeB' : 'fadeA' };
}

/* Mini template engine: {{path}}, <sc-for list as>, <sc-if value> */
function get(scope, path) {
  path = path.trim();
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), scope);
}
function fill(str, scope) {
  return str.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (m, p) => { const v = get(scope, p); return v == null ? '' : v; });
}
function holeValue(attr, scope) {
  const m = /^\{\{\s*([^}]+?)\s*\}\}$/.exec(attr || '');
  return m ? get(scope, m[1]) : undefined;
}
function render(node, scope, parent) {
  if (node.nodeType === 3) { parent.appendChild(document.createTextNode(fill(node.nodeValue, scope))); return; }
  if (node.nodeType !== 1) return;
  const tag = node.tagName.toLowerCase();
  if (tag === 'sc-for') {
    const list = holeValue(node.getAttribute('list'), scope) || [];
    const as = node.getAttribute('as');
    list.forEach((item) => { const s = Object.assign({}, scope, { [as]: item }); node.childNodes.forEach((c) => render(c, s, parent)); });
    return;
  }
  if (tag === 'sc-if') {
    if (holeValue(node.getAttribute('value'), scope)) node.childNodes.forEach((c) => render(c, scope, parent));
    return;
  }
  const isSvg = node.namespaceURI === 'http://www.w3.org/2000/svg';
  const el = isSvg ? document.createElementNS(node.namespaceURI, node.tagName) : document.createElement(node.tagName);
  for (const a of node.attributes) el.setAttribute(a.name, fill(a.value, scope));
  node.childNodes.forEach((c) => render(c, scope, el));
  parent.appendChild(el);
}

const tplEl = document.getElementById('tpl');
const app = document.getElementById('app');
function paint() {
  document.documentElement.lang = HTML_LANG[state.lang];
  const v = vals();
  const frag = document.createDocumentFragment();
  tplEl.content.childNodes.forEach((c) => render(c, v, frag));
  app.replaceChildren(frag);
}
function setMenu(open) {
  const hdr = document.querySelector('.hdr');
  if (!hdr) return;
  hdr.classList.toggle('open', open);
  hdr.querySelector('.menu-btn').setAttribute('aria-expanded', open ? 'true' : 'false');
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
document.addEventListener('click', (e) => {
  if (e.target.closest('.menu-btn')) { setMenu(!document.querySelector('.hdr').classList.contains('open')); return; }
  if (e.target.closest('.menu a') || !e.target.closest('.hdr')) setMenu(false);
  const b = e.target.closest('button[data-lang]');
  if (!b) return;
  state.lang = b.getAttribute('data-lang');
  state.flip = !state.flip;
  try { localStorage.setItem('lang', state.lang); } catch (e2) {}
  paint();
});
paint();
