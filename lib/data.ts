export const school = {
  name: "Crestwood International School", short: "Crestwood", slogan: "Learning with Excellence, Leading with Character",
  address: "12 Academy Road, Garden City", phone: "+000 000 000 000", email: "info@crestwood.edu", whatsapp: "000000000000",
  currency: "$",
  social: { facebook: "https://facebook.com", instagram: "https://instagram.com", x: "https://x.com", youtube: "https://youtube.com" },
};
export const nav = [
  ["Home", "/"], ["About Us", "/about"], ["Academics", "/academics"], ["Admissions", "/admissions"],
  ["Facilities", "/facilities"], ["Gallery", "/gallery"], ["News & Events", "/news"], ["Contact Us", "/contact"],
] as const;
export const stats = [["1,200+", "Students"], ["85", "Teachers"], ["4,500+", "Graduates"], ["25", "Years of Excellence"]];
export const programmes = [
  { title: "Nursery & Early Childhood", ages: "Ages 2–5", text: "Play-based learning that builds curiosity, language and social confidence." },
  { title: "Primary Education", ages: "Ages 6–11", text: "Strong foundations in literacy, numeracy, science and the arts." },
  { title: "Secondary Education", ages: "Ages 12–17", text: "Rigorous, exam-ready teaching with career guidance and leadership training." },
];
export const reasons = [
  ["Qualified Teachers", "Experienced, certified educators who know every child by name."],
  ["Safe Environment", "Secure campus, trained staff and clear child-protection policies."],
  ["Modern Facilities", "Science and computer labs, a library and full sports grounds."],
  ["Character First", "Discipline, integrity and service are taught alongside academics."],
];
export const testimonials = [
  { q: "My daughter has grown in confidence and her grades have improved every term.", n: "Mrs. A. Johnson", r: "Parent" },
  { q: "The teachers push you to do your best and the clubs made school exciting.", n: "David O.", r: "Student, Year 11" },
  { q: "Crestwood gave me the discipline and foundation I still rely on at university.", n: "Grace M.", r: "Alumna, Class of 2019" },
];
export const events = [
  { d: "Nov 20", t: "Open Day for Prospective Parents", loc: "Main Hall" },
  { d: "Dec 05", t: "Inter-House Sports Competition", loc: "Sports Field" },
  { d: "Dec 12", t: "Carol Service & Prize Giving", loc: "School Chapel" },
];
export const news = [
  { slug: "science-fair-winners", image: "/images/news/science-fair-winners.jpg", title: "Year 9 Team Wins Regional Science Fair", cat: "Achievements", date: "2026-10-28", excerpt: "Our students took first place with a solar water-purification prototype.",
    body: ["A team of four Year 9 students won first place at the regional Science Fair with a low-cost solar water-purification prototype.", "The judges praised the team's testing method and clear presentation. They will now represent the school at the national round next term.", "Congratulations to the students and to their teacher, who supported the project from idea to final demonstration."] },
  { slug: "admissions-2027", image: "/images/news/admissions-2027.jpg", title: "Admissions Open for the 2027 Academic Year", cat: "Announcements", date: "2026-10-15", excerpt: "Applications are now open for nursery, primary and secondary entry.",
    body: ["Applications for the 2027 academic year are now open across all sections.", "Parents can apply online, then book an assessment and a campus tour. Places are offered in order of completed applications.", "Visit the Admissions page for requirements, fees and the full process."] },
  { slug: "cultural-day", image: "/images/news/cultural-day.jpg", title: "Cultural Day Celebrates Our Diversity", cat: "Activities", date: "2026-10-02", excerpt: "Music, food and dance filled the campus as every class showcased a culture.",
    body: ["Students dressed in traditional attire and presented music, dance, food and stories from many cultures.", "Parents joined the celebration, which ended with a parade across the sports field."] },
  { slug: "football-cup", image: "/images/news/football-cup.jpg", title: "Senior Boys Reach Inter-School Cup Final", cat: "Sports", date: "2026-09-20", excerpt: "A last-minute goal sent the senior boys' football team to the final.",
    body: ["The senior boys' football team booked a place in the final after a thrilling 2–1 semi-final win.", "The final takes place on December 5 at the school sports field. Everyone is welcome to cheer them on."] },
];
export const faqs = [
  ["What ages do you admit?", "We admit children from age 2 into nursery, with entry points into primary and secondary."],
  ["Is there an entrance assessment?", "Yes. Primary and secondary applicants take a short assessment in English and mathematics, followed by an interview."],
  ["Can fees be paid in instalments?", "Yes. Fees can be paid termly or in agreed instalments. Contact the bursar for details."],
  ["Do you offer school transport?", "Yes. Supervised buses cover major routes. Ask the admissions office for current routes."],
  ["Can I tour the school first?", "Yes. Book a campus tour through the enquiry form or attend our next Open Day."],
];
export const gallery = [
  { id: "g1", cat: "School Activities", src: "/images/gallery/school-activities-1.jpg", caption: "Morning assembly on the school lawn" },
  { id: "g2", cat: "School Activities", src: "/images/gallery/school-activities-2.jpg", caption: "Students gathered for a welcome assembly" },
  { id: "g3", cat: "School Activities", src: "/images/gallery/school-activities-3.jpg", caption: "Art class with students painting at easels" },
  { id: "g4", cat: "School Activities", src: "/images/gallery/school-activities-4.jpg", caption: "Creative art studio session" },
  { id: "g5", cat: "School Activities", src: "/images/gallery/school-activities-5.jpg", caption: "School choir rehearsing on stage" },
  { id: "g6", cat: "School Activities", src: "/images/gallery/school-activities-6.jpg", caption: "Music class and choir practice" },
  { id: "g7", cat: "School Activities", src: "/images/gallery/school-activities-7.jpg", caption: "Outdoor learning in the school garden" },
  { id: "g8", cat: "School Activities", src: "/images/gallery/school-activities-8.jpg", caption: "Chess club after school" },
  { id: "g9", cat: "Classroom", src: "/images/gallery/classroom-1.jpg", caption: "Mathematics lesson in progress" },
  { id: "g10", cat: "Classroom", src: "/images/gallery/classroom-2.jpg", caption: "English lesson with the class" },
  { id: "g11", cat: "Classroom", src: "/images/gallery/classroom-3.jpg", caption: "Science lesson on atoms and water" },
  { id: "g12", cat: "Classroom", src: "/images/gallery/classroom-4.jpg", caption: "Students experimenting in the science lab" },
  { id: "g13", cat: "Classroom", src: "/images/gallery/classroom-5.jpg", caption: "Coding lesson in the computer lab" },
  { id: "g14", cat: "Classroom", src: "/images/gallery/classroom-6.jpg", caption: "Quiet reading time in the library" },
  { id: "g15", cat: "Sports", src: "/images/gallery/sports-1.jpg", caption: "Inter-house football match" },
  { id: "g16", cat: "Sports", src: "/images/gallery/sports-2.jpg", caption: "Football training on the school pitch" },
  { id: "g17", cat: "Sports", src: "/images/gallery/sports-3.jpg", caption: "Athletics track event" },
  { id: "g18", cat: "Sports", src: "/images/gallery/sports-4.jpg", caption: "Relay race on sports day" },
  { id: "g19", cat: "Sports", src: "/images/gallery/sports-5.jpg", caption: "Basketball game in the sports hall" },
  { id: "g20", cat: "Sports", src: "/images/gallery/sports-6.jpg", caption: "Basketball practice" },
  { id: "g21", cat: "Cultural Events", src: "/images/gallery/cultural-events-1.jpg", caption: "Cultural day dance" },
  { id: "g22", cat: "Cultural Events", src: "/images/gallery/cultural-events-2.jpg", caption: "Students in colourful traditional attire" },
  { id: "g23", cat: "Cultural Events", src: "/images/gallery/cultural-events-3.jpg", caption: "Cultural performance with drumming" },
  { id: "g24", cat: "Cultural Events", src: "/images/gallery/cultural-events-4.jpg", caption: "Festival celebration" },
  { id: "g25", cat: "Cultural Events", src: "/images/gallery/cultural-events-5.jpg", caption: "Dance troupe on stage" },
  { id: "g26", cat: "Cultural Events", src: "/images/gallery/cultural-events-6.jpg", caption: "Cultural day finale" },
  { id: "g27", cat: "Graduation", src: "/images/gallery/graduation-1.jpg", caption: "Graduates throwing their caps" },
  { id: "g28", cat: "Graduation", src: "/images/gallery/graduation-2.jpg", caption: "Class photo moment after graduation" },
  { id: "g29", cat: "Graduation", src: "/images/gallery/graduation-3.jpg", caption: "Certificate presentation on stage" },
  { id: "g30", cat: "Graduation", src: "/images/gallery/graduation-4.jpg", caption: "Graduation ceremony" },
];
export const facilities = [
  ["Modern Classrooms", "Bright, air-conditioned rooms with smart boards and small class sizes.", "/images/facilities/classrooms.jpg"],
  ["Science Laboratories", "Separate physics, chemistry and biology labs with safety-first practical teaching.", "/images/facilities/science-labs.jpg"],
  ["Computer Laboratories", "Up-to-date computers, coding classes and safe internet access.", "/images/facilities/computer-labs.jpg"],
  ["School Library", "Thousands of titles, quiet study areas and a reading programme for every age.", "/images/facilities/library.jpg"],
  ["Sports Facilities", "Football pitch, basketball and volleyball courts and a swimming pool.", "/images/facilities/sports.jpg"],
  ["Playground", "Safe, shaded play areas designed for early years and primary children.", "/images/facilities/playground.jpg"],
  ["School Transportation", "Supervised, GPS-tracked buses with trained drivers and attendants.", "/images/facilities/transport.jpg"],
];
