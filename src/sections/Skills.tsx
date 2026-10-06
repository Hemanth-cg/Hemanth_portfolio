const skills = [
  {
    title: 'FRONTEND DEVELOPMENT',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Web Design'],
  },
  {
    title: 'BACKEND DEVELOPMENT',
    items: ['Java', 'Spring Boot', 'Spring MVC', 'Python', 'Flask', 'REST APIs', 'GraphQL', 'Microservices', 'Hibernate ORM'],
  },
  {
    title: 'DATABASE',
    items: ['MySQL', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'AI / DATA',
    items: ['Generative AI', 'AI/ML Fundamentals', 'Python', 'Data Processing'],
  },
  {
    title: 'TOOLS & DEVOPS',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'GitHub Actions', 'CI/CD', 'AWS'],
  },
  {
    title: 'ENGINEERING & OTHER',
    items: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Agile/Scrum', 'API Development'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-28 bg-[#0b0d10] text-white">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#2e6f5b] bg-[#0d1b18] text-[11px] font-medium text-[#5fe2b5]">
            01
          </span>
          <h2 className="text-5xl font-semibold tracking-[-0.06em] text-[#f3f4f6] md:text-7xl">
            Skills
          </h2>
        </div>

        <div className="grid gap-0 border border-[#1f242b] bg-[#0d1014] md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="min-h-[220px] border border-[#1f242b] p-6 md:p-8"
            >
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.12em] text-[#5fe2b5]">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#2a3138] bg-[#10141a] px-3 py-2 text-sm text-[#e5e7eb]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
