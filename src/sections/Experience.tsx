const experiences = [
  {
    period: 'Sep 2026 – Present',
    location: 'Bengaluru, India',
    title: 'Software Developer Intern',
    company: 'HemaKart',
    bullets: [
      'Developed responsive e-commerce interfaces using React.js, improving perceived page load performance through component modularization and memoization.',
      'Built modular backend services using Python and Flask, including REST APIs and normalized database models.',
      'Integrated REST APIs and GraphQL for efficient product data retrieval and reduced unnecessary client-side data fetching.',
      'Worked with MySQL for database design and application data management.',
    ],
  },
  {
    period: 'Jun 2024 – Feb 2025',
    location: 'Bengaluru, India',
    title: 'Full Stack Intern',
    company: 'Pentagon Space',
    bullets: [
      'Developed responsive web interfaces using React.js and Axios.',
      'Built RESTful APIs using Java, Spring Boot, and Spring MVC.',
      'Worked with Hibernate ORM and MySQL for database operations and query optimization.',
      'Performed unit testing with JUnit and participated in Agile/Scrum development.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative bg-[#0b0d10] py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#2e6f5b] bg-[#0d1b18] text-[11px] font-medium text-[#5fe2b5]">
            02
          </span>
          <h2 className="text-5xl font-semibold tracking-[-0.06em] text-[#f3f4f6] md:text-7xl">
            Experience
          </h2>
        </div>

        <div className="space-y-12 border-t border-[#1f242b] pt-10">
          {experiences.map((exp) => (
            <div
              key={`${exp.title}-${exp.company}`}
              className="grid gap-8 border-b border-[#1f242b] pb-10 md:grid-cols-[220px_1fr]"
            >
              <div className="text-[#aeb5bf]">
                <div className="mb-2 text-sm">{exp.period}</div>
                <div className="text-sm">{exp.location}</div>
              </div>

              <div>
                <h3 className="mb-2 text-4xl font-semibold tracking-[-0.04em] text-[#f3f4f6]">
                  {exp.title} <span className="text-[#5fe2b5]">@ {exp.company}</span>
                </h3>

                <ul className="mt-5 space-y-4 text-lg leading-8 text-[#dfe3e8]">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5fe2b5]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
