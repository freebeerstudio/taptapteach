export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8">
              <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                Your Partner Since 2010
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              TapTapTeach
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              We helped you integrate classroom Macs, the internet, Google, mobile devices, and social media into teaching and learning.
            </p>
            <p className="mt-4 text-2xl font-semibold leading-8">
              Now it's time to bring the power of AI and automation to your school.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#resources"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore AI Resources
              </a>
              <a href="#journey" className="text-sm font-semibold leading-6 text-white">
                Our Journey <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Journey</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              15 Years of Innovation in Education
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {[
                {
                  era: '2010-2012',
                  title: 'Classroom Macs',
                  description: 'Helped schools integrate Apple technology into classrooms, making computers accessible and engaging for K-12 students.',
                },
                {
                  era: '2012-2015',
                  title: 'Mobile Revolution',
                  description: 'Guided schools through the iPad revolution, bringing mobile learning and 1:1 device programs to thousands of students.',
                },
                {
                  era: '2015-2020',
                  title: 'Google & Social',
                  description: 'Integrated Google Workspace, social media, and collaborative tools to transform how students learn and teachers teach.',
                },
                {
                  era: '2020-2025',
                  title: 'AI & Automation',
                  description: 'Now helping educators harness AI tools like ChatGPT, MagicSchool, and custom automation to enhance teaching and learning.',
                },
              ].map((milestone) => (
                <div key={milestone.era} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <span className="text-blue-600">{milestone.era}</span> — {milestone.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{milestone.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="resources" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">AI-Powered Education</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resources & Tools for Modern Educators
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Curated AI tools and resources designed specifically for K-12 teachers and administrators.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Lesson Planning',
                  description: 'AI-powered tools to create engaging lesson plans, differentiated instruction, and assessment materials in minutes.',
                  tools: 'MagicSchool.ai, ChatGPT, Anthropic Claude',
                },
                {
                  name: 'Student Support',
                  description: 'Personalized tutoring, homework help, and adaptive learning platforms that meet students where they are.',
                  tools: 'Khanmigo, Tutor.ai, Quizlet AI',
                },
                {
                  name: 'Administrative Tasks',
                  description: 'Automate grading, feedback, IEP writing, parent communications, and report generation.',
                  tools: 'Gradescope, Otter.ai, NotebookLM',
                },
              ].map((category) => (
                <div key={category.name} className="flex flex-col rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {category.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{category.description}</p>
                    <p className="mt-4 text-sm text-blue-600 font-medium">{category.tools}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Decision Support for Educators
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              We're building a comprehensive decision support tool to help teachers choose the right AI tools, create effective prompts, and integrate AI into their curriculum responsibly.
            </p>
            <div className="mt-10">
              <span className="inline-block rounded-md bg-white/20 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm">
                Coming 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Embrace AI in Your Classroom?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            We've been your technology partner for 15 years. Let's navigate the AI revolution together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:hello@taptapteach.com"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get in Touch
            </a>
            <a href="#resources" className="text-sm font-semibold leading-6 text-white">
              Browse Resources <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
