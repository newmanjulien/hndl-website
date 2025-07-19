export function CEOLetter() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers - creating stack effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform rotate-1 scale-[1.02]"></div>
          <div className="absolute inset-0 bg-white rounded-lg shadow-md transform -rotate-1 scale-[1.01]"></div>
          <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-sm transform rotate-0.5 scale-[1.005]"></div>

          {/* Main letter content */}
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12 transform rotate-0 z-10">
            {/* Letter header */}
            <div className="mb-8">
              <div className="text-lg text-gray-700 font-black">
                Introducing hndl
              </div>
            </div>

            {/* Letter content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                As a C-Suite Exec in a fast growing SaaS
                business. You are one of the busiest people in
                the world.{" "}
                <strong>
                  {" "}
                  No matter what you do there just aren't enough
                  hours in your day{" "}
                </strong>
              </p>

              <p>
                You're the best at your job. You have an amazing
                team who support you. And maybe you have a world
                class EA who makes your life so much easier. But
                the truth is that you need more support than any
                growing company can give
              </p>

              <p>
                With hndl you{" "}
                <strong>
                  get hours back in your day easily, quickly,
                  reliably and in a way that's always high
                  quality
                </strong>
              </p>

              <p>
                We handle 3 of your most important and time
                consuming tasks: triaging emails, gathering
                internal data and making spreadsheets. And we
                handle them in a way that's better than the best
                human expert
              </p>

              <p>
                You use our simple workflow creator to easily
                tell us how to handle each of the tasks in
                different situations. You tell use what
                information to ask for. You give us explicit
                instructions on how to handle each step of the
                task. And you tell us what to observe so we
                learn your preferences automatically
              </p>

              <p>
                Then we handle these{" "}
                <strong>
                  {" "}
                  3 tasks in a way that's better than even the
                  best human expert{" "}
                </strong>
              </p>

              <p>
                We get the best quality by letting our
                specialized AIs do what AI does best. And by
                letting humans handle the last mile
              </p>

              <p>
                Each of our specialized AIs are built to do 1
                specific task for C-Suite Execs in SaaS
                businesses. And our 3 AIs share what they learn
                so you don't need to teach the same thing over
                and over to different AIs
              </p>

              <p>
                But the truth is that there are things which
                current AI tech just cannot do. And that's why
                trained humans do the last mile
              </p>

              <p>
                You easily pick 1 named human for each task.
                This humans handles the parts which AI can't do
                well. And the human element is so deeply
                integrated that you don't notice that humans are
                part of the process
              </p>

              <p>
                In an age of AI slop, there's now a way for
                C-Suite Execs like you to leverage the most
                cutting edge AI in a way that actually works
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-lg text-gray-900 mb-2">
                Julien Newman
              </div>
              <div className="text-sm text-gray-500">
                CEO & Founder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}