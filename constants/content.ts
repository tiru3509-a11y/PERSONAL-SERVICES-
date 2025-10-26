
import React from 'react';
import { Icons } from './icons';
import type { Language } from '../types';
import { employeeContent } from './employeeContent';

// FIX: Replaced JSX with React.createElement to be valid in a .ts file.
const listify = (items: string[]) => (
  React.createElement('ul', { className: "list-disc list-inside space-y-2 text-slate-300" },
    items.map((item, index) => React.createElement('li', { key: index }, item))
  )
);

// FIX: Replaced JSX with React.createElement to be valid in a .ts file.
const valueList = (items: { value: string, label: string }[]) => (
    React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4" },
        items.map((item, index) => (
            React.createElement('div', { key: index, className: "bg-slate-800 p-4 rounded-lg text-center" },
                React.createElement('p', { className: "text-3xl font-bold text-cyan-400" }, item.value),
                React.createElement('p', { className: "text-slate-400 mt-1" }, item.label)
            )
        ))
    )
);


const rapidoComparisonData = {
  headers: ['Rapido (Travel)', 'One Day Job (Work)'],
  rows: [
    ['Book a ride', 'Book a worker'],
    ['Rider profile', 'Worker profile'],
    ['Pickup & drop', 'Job location'],
    ['Fare estimate', 'Wage estimate'],
    ['Live tracking', 'Job status tracker'],
    ['Ratings & reviews', 'Ratings & reviews'],
  ],
};

const employerFlowSteps = [
    'Post a job: title, location, pay, duration',
    'View nearby workers with ratings',
    'Book instantly or schedule',
    'Track job status',
    'Pay and review',
];

const employeeFlowSteps = [
    'Create profile: skills, availability',
    'Get job alerts',
    'Accept and complete job',
    'Get paid instantly',
    'Build reputation',
];

const interfacePreviewContent = {
  en: {
    tagline: 'Hire a worker as easily as booking a ride.',
    screens: {
      home: 'Home',
      postJob: 'Post Job',
      findWorkers: 'Find Workers',
    },
    homeScreen: {
      title: 'Dashboard',
      postJob: 'Post a Job',
      myJobs: 'My Jobs',
      messages: 'Messages',
      stats: {
        active: 'Active Jobs',
        completed: 'Completed',
        pending: 'Pending',
      },
      tips: {
        title: 'Quick Tips',
        tip1: 'Post clear job descriptions to attract the right talent.',
      }
    },
    postJobScreen: {
      title: 'Create a New Job',
      step1: 'Step 1: Job Details',
      jobTitle: 'Job Title (e.g., "House Cleaning")',
      location: 'Location (e.g., "Hyderabad")',
      pay: 'Pay Offered (₹ per hour or fixed)',
      step2: 'Step 2: Select Job Type',
      postButton: 'Preview & Post Job',
      jobTypes: {
        cleaning: 'Cleaning',
        delivery: 'Delivery',
        repairs: 'Repairs',
        cooking: 'Cooking',
        event: 'Event Help',
        tutor: 'Tutoring',
        packing: 'Packing',
        data: 'Data Entry',
      },
    },
    findWorkersScreen: {
        title: 'Find Available Workers',
        filters: {
            jobType: 'Job Type',
            rating: 'Rating (4★+)',
            availability: 'Today',
            location: 'Location Radius',
        },
        bookNow: 'Book Now',
        chatFirst: 'Chat First',
        workers: [
            { name: 'Anjali Rao', skills: 'Cleaning, Cooking', rate: '₹250/hr', rating: 4.8 },
            { name: 'Ravi Kumar', skills: 'Delivery, Packing', rate: '₹200/hr', rating: 4.5 },
            { name: 'Priya Sharma', skills: 'Data Entry, Tutoring', rate: '₹300/hr', rating: 4.9 },
        ]
    }
  },
  te: {
    tagline: 'రైడ్ బుక్ చేసుకున్నంత సులభంగా కార్మికుడిని నియమించుకోండి.',
    screens: {
      home: 'హోమ్',
      postJob: 'ఉద్యోగం పోస్ట్',
      findWorkers: 'కార్మికులు',
    },
    homeScreen: {
      title: 'డాష్‌బోర్డ్',
      postJob: 'ఉద్యోగాన్ని పోస్ట్ చేయండి',
      myJobs: 'నా ఉద్యోగాలు',
      messages: 'సందేశాలు',
      stats: {
        active: 'క్రియాశీల ఉద్యోగాలు',
        completed: 'పూర్తయింది',
        pending: 'పెండింగ్‌లో ఉంది',
      },
      tips: {
        title: 'శీఘ్ర చిట్కాలు',
        tip1: 'సరైన ప్రతిభను ఆకర్షించడానికి స్పష్టమైన ఉద్యోగ వివరణలను పోస్ట్ చేయండి.',
      }
    },
    postJobScreen: {
      title: 'కొత్త ఉద్యోగాన్ని సృష్టించండి',
      step1: 'దశ 1: ఉద్యోగ వివరాలు',
      jobTitle: 'ఉద్యోగ శీర్షిక (ఉదా., "హౌస్ క్లీనింగ్")',
      location: 'స్థానం (ఉదా., "హైదరాబాద్")',
      pay: 'చెల్లించే మొత్తం (గంటకు ₹ లేదా స్థిరంగా)',
      step2: 'దశ 2: ఉద్యోగ రకాన్ని ఎంచుకోండి',
      postButton: 'ప్రివ్యూ & ఉద్యోగాన్ని పోస్ట్ చేయండి',
      jobTypes: {
        cleaning: 'శుభ్రపరచడం',
        delivery: 'డెలివరీ',
        repairs: 'మరమ్మతులు',
        cooking: 'వంట',
        event: 'ఈవెంట్ సహాయం',
        tutor: 'ట్యూటరింగ్',
        packing: 'ప్యాకింగ్',
        data: 'డేటా ఎంట్రీ',
      },
    },
    findWorkersScreen: {
        title: 'అందుబాటులో ఉన్న కార్మికులను కనుగొనండి',
        filters: {
            jobType: 'ఉద్యోగ రకం',
            rating: 'రేటింగ్ (4★+)',
            availability: 'ఈ రోజు',
            location: 'స్థాన వ్యాసార్థం',
        },
        bookNow: 'ఇప్పుడే బుక్ చేయండి',
        chatFirst: 'మొదట చాట్ చేయండి',
        workers: [
            { name: 'అంజలి రావు', skills: 'శుభ్రపరచడం, వంట', rate: '₹250/గం', rating: 4.8 },
            { name: 'రవి కుమార్', skills: 'డెలివరీ, ప్యాకింగ్', rate: '₹200/గం', rating: 4.5 },
            { name: 'ప్రియా శర్మ', skills: 'డేటా ఎంట్రీ, ట్యూటరింగ్', rate: '₹300/గం', rating: 4.9 },
        ]
    }
  }
};


export const contentData: Record<Language, any> = {
  en: {
    header: {
      title: 'One Day Job',
      languageToggle: { en: 'English', te: 'తెలుగు' },
    },
    sections: [
      {
        id: 'vision',
        icon: React.createElement(Icons.Rocket),
        title: 'Vision Statement',
        content: React.createElement('blockquote', { className: "text-xl italic border-l-4 border-cyan-500 pl-4 text-slate-300" },
            '“One Day Job” is a bilingual (Telugu-English) digital platform that empowers employers to instantly book skilled workers for one-day, part-time tasks — just like booking a ride on Rapido, but for labor. ',
            React.createElement('br'),
            React.createElement('br'),
            React.createElement('span', { className: "font-semibold text-slate-100" }, 'We simplify short-term hiring with speed, trust, and accessibility.')
        ),
      },
      {
        id: 'problem',
        icon: React.createElement(Icons.Target),
        title: 'Problem We Solve',
        content: listify([
          'Unorganized short-term labor market: No reliable way to find verified workers for one-day jobs.',
          'Time-consuming hiring: Employers struggle to find help for urgent or small tasks.',
          'Lack of visibility for workers: Skilled individuals miss opportunities due to poor discoverability.',
        ]),
      },
      {
        id: 'solution',
        icon: React.createElement(Icons.Lightbulb),
        title: 'Our Solution',
        content: React.createElement('p', { className: "text-slate-300" },
            'A mobile-first, location-aware platform where: ',
            React.createElement('br'),
            listify(['Employers can post jobs, view worker profiles, and book instantly.','Employees can browse jobs, apply, and get paid — all in one app.', 'Bilingual interface ensures accessibility for Telugu-speaking users.'])
        ),
      },
      {
        id: 'howItWorks',
        icon: React.createElement(Icons.Workflow),
        title: 'How It Works (Inspired by Rapido)',
        content: rapidoComparisonData,
      },
      {
        id: 'employerFlow',
        icon: React.createElement(Icons.Briefcase),
        title: 'Employer Flow',
        content: employerFlowSteps,
      },
      {
        id: 'interfacePreview',
        icon: React.createElement(Icons.AppWindow),
        title: 'Employer Interface Preview',
        content: interfacePreviewContent.en,
      },
       {
        id: 'employeeFlow',
        icon: React.createElement(Icons.UserCheck),
        title: 'Employee Flow',
        content: employeeFlowSteps,
      },
      {
        id: 'employeeInterfacePreview',
        icon: React.createElement(Icons.AppWindow),
        title: 'Employee Interface Preview',
        content: employeeContent.en,
      },
      {
        id: 'features',
        icon: React.createElement(Icons.Smartphone),
        title: 'Key Features',
        content: listify([
            'Bilingual UI (Telugu-English)',
            'Skill-based matching algorithm',
            'In-app chat and notifications',
            'Calendar and earnings tracker',
            'Safety tools and emergency contact',
            'Ratings and feedback system',
        ]),
      },
      {
        id: 'techStack',
        icon: React.createElement(Icons.Code),
        title: 'Tech Stack',
        content: listify([
            'Frontend: React or Vue with Tailwind CSS',
            'Backend: Firebase/Supabase for real-time data',
            'Localization: i18n for Telugu-English support',
            'Design Tools: Uizard, FigJam AI, Relume for rapid prototyping',
        ]),
      },
      {
        id: 'marketOpportunity',
        icon: React.createElement(Icons.BarChart),
        title: 'Market Opportunity',
        content: listify([
            'India’s gig economy is projected to reach $455 billion by 2027',
            'Over 80 million informal workers in India — many seeking flexible, short-term jobs',
            'High smartphone penetration in Tier 2 & Tier 3 cities',
        ]),
      },
      {
        id: 'monetization',
        icon: React.createElement(Icons.DollarSign),
        title: 'Monetization Strategy',
        content: listify([
            'Commission per booking (e.g., 5–10%)',
            'Premium employer accounts for bulk hiring',
            'Featured worker listings',
            'Local business partnerships',
        ]),
      },
      {
        id: 'growthPlan',
        icon: React.createElement(Icons.TrendingUp),
        title: 'Growth Plan',
        content: listify([
            'Phase 1: Launch in Telangana (Hyderabad, Warangal, Nizamabad)',
            'Phase 2: Expand to Andhra Pradesh and Karnataka',
            'Phase 3: Add industry-specific modules (e.g., delivery, cleaning, event staffing)',
        ]),
      },
       {
        id: 'team',
        icon: React.createElement(Icons.Users),
        title: 'Team & Values',
        content: listify([
            'Led by Tirupathi — educator, developer, and accessibility advocate',
            'Focused on clarity, inclusion, and empowerment',
            'Building tools that serve both urban and rural communities',
        ]),
      },
      {
        id: 'ask',
        icon: React.createElement(Icons.Handshake),
        title: 'Ask for Investors',
        content: React.createElement('div', null,
            React.createElement('p', { className: "text-lg text-slate-300 mb-4" },
                React.createElement('span', { className: "font-bold text-slate-100" }, 'Funding goal:'),
                ' ₹25–50 lakhs for MVP development, marketing, and hiring.'
            ),
            React.createElement('p', { className: "text-lg font-bold text-slate-100 mb-2" }, 'Use of funds:'),
            valueList([
                { value: '40%', label: 'Product Development' },
                { value: '30%', label: 'Marketing & Outreach' },
                { value: '20%', label: 'Operations' },
                { value: '10%', label: 'Legal & Compliance' },
            ])
        ),
      },
    ],
  },
  te: {
    header: {
      title: 'ఒక రోజు ఉద్యోగం',
      languageToggle: { en: 'English', te: 'తెలుగు' },
    },
    sections: [
      {
        id: 'vision',
        icon: React.createElement(Icons.Rocket),
        title: 'విజన్ స్టేట్‌మెంట్',
        content: React.createElement('blockquote', { className: "text-xl italic border-l-4 border-cyan-500 pl-4 text-slate-300" },
            '"ఒక రోజు ఉద్యోగం" అనేది ద్విభాషా (తెలుగు-ఇంగ్లీష్) డిజిటల్ ప్లాట్‌ఫారమ్, ఇది యజమానులను ఒక-రోజు, పార్ట్-టైమ్ పనుల కోసం నైపుణ్యం కలిగిన కార్మికులను తక్షణమే బుక్ చేసుకోవడానికి అధికారం ఇస్తుంది — రాపిడోలో రైడ్ బుక్ చేసినట్లే, కానీ శ్రమ కోసం. ',
            React.createElement('br'),
            React.createElement('br'),
            React.createElement('span', { className: "font-semibold text-slate-100" }, 'మేము వేగం, విశ్వాసం మరియు ప్రాప్యతతో స్వల్పకాలిక నియామకాలను సులభతరం చేస్తాము.')
        ),
      },
      {
        id: 'problem',
        icon: React.createElement(Icons.Target),
        title: 'మేము పరిష్కరించే సమస్య',
        content: listify([
          'అసంఘటిత స్వల్పకాలిక కార్మిక మార్కెట్: ఒక రోజు ఉద్యోగాల కోసం ధృవీకరించబడిన కార్మికులను కనుగొనడానికి నమ్మకమైన మార్గం లేదు.',
          'సమయం తీసుకునే నియామకం: అత్యవసర లేదా చిన్న పనుల కోసం సహాయం కోసం యజమానులు కష్టపడతారు.',
          'కార్మికులకు దృశ్యమానత లేకపోవడం: పేలవమైన ఆవిష్కరణ కారణంగా నైపుణ్యం కలిగిన వ్యక్తులు అవకాశాలను కోల్పోతారు.',
        ]),
      },
      {
        id: 'solution',
        icon: React.createElement(Icons.Lightbulb),
        title: 'మా పరిష్కారం',
        content: React.createElement('p', { className: "text-slate-300" },
            'మొబైల్-ఫస్ట్, లొకేషన్-అవేర్ ప్లాట్‌ఫారమ్ ఇక్కడ: ',
            React.createElement('br'),
            listify(['యజమానులు ఉద్యోగాలను పోస్ట్ చేయవచ్చు, కార్మికుల ప్రొఫైల్‌లను వీక్షించవచ్చు మరియు తక్షణమే బుక్ చేసుకోవచ్చు.','ఉద్యోగులు ఉద్యోగాలను బ్రౌజ్ చేయవచ్చు, దరఖాస్తు చేసుకోవచ్చు మరియు చెల్లింపు పొందవచ్చు - అన్నీ ఒకే యాప్‌లో.', 'ద్విభాషా ఇంటర్‌ఫేస్ తెలుగు మాట్లాడే వినియోగదారులకు ప్రాప్యతను నిర్ధారిస్తుంది.'])
        ),
      },
      {
        id: 'howItWorks',
        icon: React.createElement(Icons.Workflow),
        title: 'ఇది ఎలా పని చేస్తుంది (రాపిడో నుండి ప్రేరణ పొందింది)',
        content: { ...rapidoComparisonData, headers: ['రాపిడో (ప్రయాణం)', 'ఒక రోజు ఉద్యోగం (పని)'] },
      },
      {
        id: 'employerFlow',
        icon: React.createElement(Icons.Briefcase),
        title: 'యజమాని ప్రవాహం',
        content: [
            'ఉద్యోగాన్ని పోస్ట్ చేయండి: శీర్షిక, స్థానం, చెల్లింపు, వ్యవధి',
            'రేటింగ్‌లతో సమీపంలోని కార్మికులను వీక్షించండి',
            'తక్షణమే బుక్ చేయండి లేదా షెడ్యూల్ చేయండి',
            'ఉద్యోగ స్థితిని ట్రాక్ చేయండి',
            'చెల్లించి సమీక్షించండి',
        ],
      },
      {
        id: 'interfacePreview',
        icon: React.createElement(Icons.AppWindow),
        title: 'యజమాని ఇంటర్‌ఫేస్ ప్రివ్యూ',
        content: interfacePreviewContent.te,
      },
      {
        id: 'employeeFlow',
        icon: React.createElement(Icons.UserCheck),
        title: 'ఉద్యోగి ప్రవాహం',
        content: [
            'ప్రొఫైల్‌ని సృష్టించండి: నైపుణ్యాలు, లభ్యత',
            'ఉద్యోగ హెచ్చరికలను పొందండి',
            'ఉద్యోగాన్ని అంగీకరించి పూర్తి చేయండి',
            'తక్షణమే చెల్లింపు పొందండి',
            'ఖ్యాతిని పెంచుకోండి',
        ],
      },
      {
        id: 'employeeInterfacePreview',
        icon: React.createElement(Icons.AppWindow),
        title: 'ఉద్యోగి ఇంటర్‌ఫేస్ ప్రివ్యూ',
        content: employeeContent.te,
      },
      {
        id: 'features',
        icon: React.createElement(Icons.Smartphone),
        title: 'ముఖ్య లక్షణాలు',
        content: listify([
            'ద్విభాషా UI (తెలుగు-ఇంగ్లీష్)',
            'నైపుణ్యం ఆధారిత మ్యాచింగ్ అల్గోరిథం',
            'యాప్‌లో చాట్ మరియు నోటిఫికేషన్‌లు',
            'క్యాలండర్ మరియు ఆదాయాల ట్రాకర్',
            'భద్రతా సాధనాలు మరియు అత్యవసర పరిచయం',
            'రేటింగ్‌లు మరియు ఫీడ్‌బ్యాక్ సిస్టమ్',
        ]),
      },
      {
        id: 'techStack',
        icon: React.createElement(Icons.Code),
        title: 'టెక్ స్టాక్',
        content: listify([
            'ఫ్రంటెండ్: రియాక్ట్ లేదా Vue తో Tailwind CSS',
            'బ్యాకెండ్: నిజ-సమయ డేటా కోసం Firebase/Supabase',
            'స్థానికీకరణ: తెలుగు-ఇంగ్లీష్ మద్దతు కోసం i18n',
            'డిజైన్ సాధనాలు: వేగవంతమైన నమూనా కోసం Uizard, FigJam AI, Relume',
        ]),
      },
      {
        id: 'marketOpportunity',
        icon: React.createElement(Icons.BarChart),
        title: 'మార్కెట్ అవకాశం',
        content: listify([
            'భారతదేశ గిగ్ ఎకానమీ 2027 నాటికి $455 బిలియన్లకు చేరుకుంటుందని అంచనా',
            'భారతదేశంలో 80 మిలియన్లకు పైగా అనధికారిక కార్మికులు - చాలా మంది సౌకర్యవంతమైన, స్వల్పకాలిక ఉద్యోగాల కోసం చూస్తున్నారు',
            'టైర్ 2 & టైర్ 3 నగరాల్లో అధిక స్మార్ట్‌ఫోన్ వ్యాప్తి',
        ]),
      },
      {
        id: 'monetization',
        icon: React.createElement(Icons.DollarSign),
        title: 'మానిటైజేషన్ వ్యూహం',
        content: listify([
            'ప్రతి బుకింగ్‌కు కమిషన్ (ఉదా., 5–10%)',
            'బల్క్ హైరింగ్ కోసం ప్రీమియం యజమాని ఖాతాలు',
            'ఫీచర్ చేయబడిన కార్మికుల జాబితాలు',
            'స్థానిక వ్యాపార భాగస్వామ్యాలు',
        ]),
      },
      {
        id: 'growthPlan',
        icon: React.createElement(Icons.TrendingUp),
        title: 'వృద్ధి ప్రణాళిక',
        content: listify([
            'దశ 1: తెలంగాణలో ప్రారంభం (హైదరాబాద్, వరంగల్, నిజామాబాద్)',
            'దశ 2: ఆంధ్రప్రదేశ్ మరియు కర్ణాటకకు విస్తరించండి',
            'దశ 3: పరిశ్రమ-నిర్దిష్ట మాడ్యూళ్ళను జోడించండి (ఉదా., డెలివరీ, శుభ్రపరచడం, ఈవెంట్ స్టాఫింగ్)',
        ]),
      },
       {
        id: 'team',
        icon: React.createElement(Icons.Users),
        title: 'జట్టు & విలువలు',
        content: listify([
            'తిరుపతి నేతృత్వంలో — విద్యావేత్త, డెవలపర్, మరియు ప్రాప్యత న్యాయవాది',
            'స్పష్టత, చేరిక మరియు సాధికారతపై దృష్టి సారించింది',
            'పట్టణ మరియు గ్రామీణ వర్గాలకు సేవలందించే సాధనాలను నిర్మించడం',
        ]),
      },
      {
        id: 'ask',
        icon: React.createElement(Icons.Handshake),
        title: 'పెట్టుబడిదారుల కోసం అడగండి',
        content: React.createElement('div', null,
            React.createElement('p', { className: "text-lg text-slate-300 mb-4" },
                React.createElement('span', { className: "font-bold text-slate-100" }, 'నిధుల లక్ష్యం:'),
                ' MVP అభివృద్ధి, మార్కెటింగ్, మరియు నియామకం కోసం ₹25–50 లక్షలు.'
            ),
            React.createElement('p', { className: "text-lg font-bold text-slate-100 mb-2" }, 'నిధుల వినియోగం:'),
            valueList([
                { value: '40%', label: 'ఉత్పత్తి అభివృద్ధి' },
                { value: '30%', label: 'మార్కెటింగ్ & ప్రచారం' },
                { value: '20%', label: 'కార్యకలాపాలు' },
                { value: '10%', label: 'చట్టపరమైన & వర్తింపు' },
            ])
        ),
      },
    ],
  },
};
