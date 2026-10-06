const projects = [
  {
    id: 'project_01',
    title: 'HegmaKart',
    subtitle: 'E-Commerce Platform',
    description:
      'A production e-commerce platform focused on dental products and clinic solutions.',
    bullets: [
      'Developed responsive product catalog and checkout interfaces using React.js.',
      'Built modular backend services using Python and Flask, and REST APIs.',
      'Integrated GraphQL and REST APIs for efficient product data retrieval.',
      'Worked with MySQL for product and application data management.',
      'Improved frontend performance through component modularization and memoization.',
    ],
    tech: ['React.js', 'Python', 'Flask', 'GraphQL', 'MySQL', 'REST API'],
  },
  {
    id: 'project_02',
    title: 'Task Management System',
    subtitle: 'Task Management System',
    description:
      'A full-stack task management application for creating, organizing, tracking, and managing tasks.',
    bullets: [
      'Built a responsive React.js interface for task creation and management.',
      'Developed REST API using Python and Flask.',
      'Implemented MySQL database integration for persistent task data.',
      'Added task status and workflow management.',
    ],
    tech: ['React.js', 'Python', 'Flask', 'MySQL', 'REST API'],
  },
  {
    id: 'project_03',
    title: 'Event Management System',
    subtitle: 'Event Management System',
    description:
      'A full-stack event management platform for user registrations, attendee schedule management, and dynamic ticketing.',
    bullets: [
      'Built event registration and attendee management functionality.',
      'Implemented transactional database operations using Spring Boot and Hibernate.',
      'Developed interactive dashboards and client-side form validation.',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'JavaScript'],
  },
  {
    id: 'project_04',
    title: 'Inventory & Order Processing',
    subtitle: 'Inventory & Order Processing Engine',
    description:
      'An e-commerce backend system designed to manage inventory, orders, and product availability.',
    bullets: [
      'Implemented real-time inventory and order-state management.',
      'Designed optimized MySQL schemas with composite indexing.',
      'Developed REST API for shopping cart and checkout operations.',
      'Added transactional rollback mechanisms to prevent inventory inconsistencies.',
    ],
    tech: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Hibernate'],
  },
  {
    id: 'project_05',
    title: 'Efficient Data Security in Medical',
    subtitle: 'Efficient Data Security in Medical Reports',
    description:
      'A secure healthcare document management system focused on protecting medical records and maintaining tamper-proof audit trails.',
    bullets: [
      'Built Flask REST APIs for medical document management.',
      'Integrated blockchain-based audit trails.',
      'Implemented SHA-256 verification and role-based access control.',
      'Added automated audit logging and encrypted record exports.',
    ],
    tech: ['Python', 'Flask', 'Blockchain', 'MySQL', 'Cybersecurity', 'SHA-256'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0b0d10] py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="min-h-[420px] border border-[#1f242b] bg-[#11161c] p-5 md:p-6"
            >
              <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#5fe2b5]">
                {project.id}
              </div>

              <h3 className="mb-4 text-[2rem] font-semibold leading-tight tracking-[-0.06em] text-[#f3f4f6]">
                {project.title}
              </h3>

              <p className="mb-5 text-[0.96rem] leading-7 text-[#c5c9cf]">
                {project.description}
              </p>

              <ul className="space-y-3 text-[0.96rem] leading-7 text-[#d7dbe0]">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5fe2b5]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#2a3138] bg-[#0d1116] px-2.5 py-1.5 text-[0.72rem] text-[#dfe7ef]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
