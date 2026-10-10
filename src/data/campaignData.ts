import { Candidate, ManifestoPillar, PollOption } from '../types/campaign';

export const BALLOT_NOTICE = {
  slogan: 'Tick dekh ke lagaye!',
  roomNotice: 'To meet the candidates, visit / contact: Room 806, APJ Hostel',
  roomShort: 'Room 806, APJ Hostel'
};

export const CANDIDATES: Candidate[] = [
  {
    id: 'kaif',
    name: 'Kaif Ahmad Khan',
    displayName: 'Kaif Ahmad Khan',
    phone: '9128914453',
    rawPhone: '9128914453',
    whatsappNumber: '919128914453',
    role: 'Candidate · Food Committee',
    serialNo: 1,
    roomContact: 'Room 806, APJ Hostel',
    agendaTitle: 'For a More Responsive Food Committee',
    agendaDescription:
      'Ensuring every resident’s voice is heard immediately. Direct accountability, transparent mess finance audits, and fast grievance redressal.',
    keyPoints: [
      '24/7 Mess Helpline & instant WhatsApp grievance resolution group',
      'Bi-weekly Open Mess Durbar for direct feedback with residents and mess warden',
      'Public monthly accounting of mess fee utilization, savings, and rebate policies',
      'Strict enforcement of rebate rules so students never pay for meals during leaves'
    ],
    colorScheme: {
      bg: 'bg-sky-50/70',
      border: 'border-sky-200',
      badgeBg: 'bg-sky-600',
      badgeText: 'text-white',
      accent: 'text-sky-600'
    }
  },
  {
    id: 'najmul',
    name: 'Najmul Hoda',
    displayName: 'Najmul Hoda',
    phone: '+91 78707 21409',
    rawPhone: '7870721409',
    whatsappNumber: '917870721409',
    role: 'Candidate · Food Committee',
    serialNo: 15,
    roomContact: 'Room 806, APJ Hostel',
    agendaTitle: 'For Cleaner Kitchen & Dining Spaces',
    agendaDescription:
      'Championing uncompromising mess hygiene, sterilized stainless steel utensils, and spotlessly maintained dining hall environments.',
    keyPoints: [
      'Daily scheduled sanitation of kitchen counters, preparation tables, and dining floors',
      'Steam-washed utensils, trays, and spoons with regular health checks for mess staff',
      'Weekly water purifier TDS checks and certified clean drinking water filters',
      'Zero-tolerance policy on kitchen pests with proactive bi-weekly pest control'
    ],
    colorScheme: {
      bg: 'bg-amber-50/70',
      border: 'border-amber-200',
      badgeBg: 'bg-amber-500',
      badgeText: 'text-white',
      accent: 'text-amber-600'
    }
  },
  {
    id: 'ayaan',
    name: 'Ayaan Alam',
    displayName: 'Ayaan Alam',
    phone: '72097 49240',
    rawPhone: '7209749240',
    whatsappNumber: '917209749240',
    role: 'Candidate · Food Committee',
    serialNo: 18,
    roomContact: 'Room 806, APJ Hostel',
    agendaTitle: 'For Better Food Quality',
    agendaDescription:
      'Committed to restoring authentic taste, high-grade ingredients, and balanced nutrition in every meal served at the APJ Hostel mess.',
    keyPoints: [
      'Strict quality checks on oil, spices, dairy, and basmati rice grain length',
      'Timely hot rotis served directly off the tawa instead of cold storage',
      'Nutritious, protein-rich breakfast choices with fresh seasonal fruits and milk',
      'Restoration of authentic biryani and special Sunday feast menus'
    ],
    colorScheme: {
      bg: 'bg-rose-50/70',
      border: 'border-rose-200',
      badgeBg: 'bg-rose-500',
      badgeText: 'text-white',
      accent: 'text-rose-600'
    }
  }
];

export const MANIFESTO_PILLARS: ManifestoPillar[] = [
  {
    id: 'food-quality',
    number: '01',
    title: 'Superior Food Quality & Taste',
    subtitle: 'No more substandard ingredients or insipid meals',
    description:
      'We will audit mess procurement weekly to ensure only top-grade lentils, fresh vegetables from verified mandis, unadulterated cooking mediums, and quality dairy are supplied.',
    highlights: [
      'Hot tawa rotis on demand with wholesome flour',
      'Fresh paneer dishes cooked with rich gravy',
      'Proper curd/dahi and seasonal salad with every lunch',
      'Seasonal sweet dish and desserts twice every week'
    ],
    icon: 'Utensils'
  },
  {
    id: 'chicken-menu',
    number: '02',
    title: '5-Day Chicken Menu Return',
    subtitle: 'Fulfilling the #1 demand of APJ hostel residents',
    description:
      'Restoring the popular 5-day chicken dinner schedule that residents enjoyed in previous sessions, prepared with 100% certified halal fresh chicken and wholesome marination.',
    highlights: [
      'Guaranteed generous portions per plate with rich flavorful gravy',
      'Weekly rotating variations: Butter Chicken, Korma, Kadai, and Biryani',
      'Equal high-quality vegetarian substitutes (Paneer/Mushroom/Kofta) for veg residents',
      'Zero compromise on fresh slaughter procurement and hygienic preparation'
    ],
    icon: 'Drumstick'
  },
  {
    id: 'hygiene-dining',
    number: '03',
    title: 'Sanitized Kitchen & Clean Dining Spaces',
    subtitle: 'Health and hygiene is non-negotiable',
    description:
      'We will mandate commercial-grade deep cleaning of mess kitchens, storage rooms, exhaust hoods, and dining tables, ensuring students eat in a clean and dignified atmosphere.',
    highlights: [
      'Stainless steel trays washed with hot water and anti-bacterial rinse',
      'RO water purification plant maintenance logbook posted publicly',
      'Mandatory hairnets, aprons, and sanitized gloves for all cooking staff',
      'Immediate replacement of dented or scratched dinnerware'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'responsive-action',
    number: '04',
    title: 'Real-Time Student Feedback & Action',
    subtitle: 'Your mess committee, always accessible 24/7',
    description:
      'No student should have to struggle alone with mess issues. We will establish a digital ticket system and instant WhatsApp channel where complaints are acted upon in under 3 hours.',
    highlights: [
      'Dedicated helpline numbers directly connected to Kaif, Najmul, and Ayaan',
      'Weekly mess menu committee review with random wing resident representatives',
      'Instant rebate processing for approved university holidays and examinations',
      'Surprise food audits conducted unannounced alongside hostel monitors'
    ],
    icon: 'MessageSquareText'
  }
];

export const INITIAL_POLL_OPTIONS: PollOption[] = [
  { id: 'opt-chicken', title: '5-Day Chicken Dinner Menu return', category: 'Diet', votes: 412 },
  { id: 'opt-breakfast', title: 'Hot rotis & extended breakfast timings till 9:45 AM', category: 'Timings', votes: 289 },
  { id: 'opt-hygiene', title: 'Deep steam-cleaning of mess trays & RO purifier check', category: 'Hygiene', votes: 341 },
  { id: 'opt-snacks', title: 'Late-night tea & library exam snacks counter', category: 'Facilities', votes: 264 },
  { id: 'opt-rebate', title: 'Transparent automated leave rebate on mess bills', category: 'Billing', votes: 310 }
];

export const BROADCAST_TEMPLATES = [
  {
    id: 'short-en',
    title: 'Quick Support Message (English)',
    text: `📢 *VOTE FOR APJ HOSTEL FOOD COMMITTEE!* 🍛✨
*DR. A.P.J. ABDUL KALAM HOSTEL · JAMIA MILLIA ISLAMIA*

🗳️ *TICK DEKH KE LAGAYE!* 🗳️
Mark your vote for the united 3-member panel on the ballot paper:

☑️ *SERIAL NO. 1*: *Kaif Ahmad Khan* (📞 9128914453)
☑️ *SERIAL NO. 15*: *Najmul Hoda* (📞 +91 78707 21409)
☑️ *SERIAL NO. 18*: *Ayaan Alam* (📞 72097 49240)

📍 *To meet the candidates, visit / contact:* *Room 806, APJ Hostel*

Key Agenda:
🍗 *5-Day Chicken Menu Return*
🍲 *High-Quality Food & Hot Tawa Rotis*
✨ *Sterilized Kitchen & Clean Dining*
📞 *24/7 Student Grievance Redressal*

"Better Food · Better Hostel"
Check out the campaign & pledge your vote: `
  },
  {
    id: 'hinglish',
    title: 'Hostel Wing Broadcast (Hinglish)',
    text: `Salam Bhaiyo! ✊🏻🍛
APJ Abdul Kalam Hostel ke Food Committee Election me sahi candidate choose karein!

🗳️ *"TICK DEKH KE LAGAYE!"* 🗳️
Ballot paper me candidate list dekh kar inhi teen numbers par tick lagayein:

☑️ *SERIAL NO. 1*: *Kaif Ahmad Khan* (📞 9128914453)
☑️ *SERIAL NO. 15*: *Najmul Hoda* (📞 +91 78707 21409)
☑️ *SERIAL NO. 18*: *Ayaan Alam* (📞 72097 49240)

🏢 *Candidates se milne ya discussion ke liye contact karein:*
👉 *Room 806, APJ Hostel*

Hamare Wade:
🍗 *5-Day Chicken Menu Wapas Layenge!*
🍲 *Khane ki Quality & Taste me No Compromise!*
✨ *Kitchen & Dining Hall ki Rozana Safai!*
🤝 *Har Shikayat par Instant Action!*

"Better Food, Better Hostel — For All JMI APJ Residents!"
Vote dekar apna support darj karein! 🗳️`
  },
  {
    id: 'room-campaign',
    title: 'Room-to-Room Reminder (Detailed)',
    text: `🗳️ *REMINDER: APJ HOSTEL FOOD COMMITTEE ELECTION* 🗳️

Dear Roommates & Wingmates,
Every meal we eat shapes our health and studies at Jamia. Don't compromise on mess standards!

Please remember ballot numbers carefully — *"TICK DEKH KE LAGAYE!"*:
☑️ *Serial No. 1* — *Kaif Ahmad Khan* (9128914453)
☑️ *Serial No. 15* — *Najmul Hoda* (+91 78707 21409)
☑️ *Serial No. 18* — *Ayaan Alam* (72097 49240)

🏢 *Room for Meeting / Discussion:* Room 806, APJ Hostel
Please carry your Jamia Student ID on voting day!
For any queries or suggestions, call the candidates or visit Room 806 anytime.`
  }
];
