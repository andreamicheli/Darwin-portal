import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Github } from "lucide-react";

const Bluesky = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 568 501"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M123.121 33.664C188.241 82.553 258.281 181.681 284 235.257C309.719 181.681 379.759 82.553 444.879 33.664C491.866 -1.611 568 -28.906 568 57.946C568 117.599 515.957 204.622 435.561 255.363C386.165 286.54 328.236 295.747 284 295.747C239.764 295.747 181.835 286.54 132.439 255.363C52.043 204.622 0 117.599 0 57.946C0 -28.906 76.134 -1.611 123.121 33.664ZM284 446.176C301.051 446.176 369.369 456.624 406.971 420.73C453.968 375.875 414.741 255.533 568 255.533C568 385.293 523.948 500.624 435.561 500.624C364.821 500.624 323.423 453.018 284 453.018C244.577 453.018 203.179 500.624 132.439 500.624C44.052 500.624 0 385.293 0 255.533C153.259 255.533 114.032 375.875 161.029 420.73C198.631 456.624 266.949 446.176 284 446.176Z" />
  </svg>
);

const CodeBlock = ({
  code,
  language = "typescript",
}: {
  code: string;
  language?: string;
}) => (
  <div className="my-6 rounded-lg overflow-hidden text-sm border border-neutral-800">
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{ margin: 0, padding: "1.5rem", background: "#0a0a0a" }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
);

const Section = ({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-24 scroll-mt-32"
  >
    <h2 className="text-3xl font-bold mb-8 tracking-tight">{title}</h2>
    <div className="text-neutral-400 leading-relaxed space-y-6">{children}</div>
  </motion.section>
);

const Docs = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
      {/* Sidebar Navigation */}
      <aside className="md:w-64 flex-shrink-0 hidden md:block">
        <div className="sticky top-32 space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">
            Contents
          </p>
          {[
            "Installation",
            "Quick Start",
            "Core Concepts",
            "API Reference",
          ].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(item.toLowerCase().replace(" ", "-"))
              }
              className="block text-sm text-neutral-400 hover:text-white transition-colors text-left"
            >
              {item}
            </button>
          ))}

          <div className="pt-12">
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">
              About
            </p>
            <div className="text-xs text-neutral-500 space-y-4 leading-relaxed">
              <p>
                In development by Andrea Micheli. Co-Maintainers are endorsed.
              </p>
              <p>
                The project builds on DeepMind's foundational article{" "}
                <a
                  href="https://generativeui.github.io/static/pdfs/paper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-neutral-300"
                >
                  LLMs are Effective UI Generators
                </a>{" "}
                (Y. Leviathan et al.), not to substitute User Research and
                Experience Design, but to explore an approach that moves beyond
                the static limitations of traditional interfaces by placing the
                user even more at the center—listening to their behaviors,
                challenges, and recurring interaction patterns.
              </p>
              <p>
                The entire project is fully privacy-focused and open source. All
                processing happens locally on the user’s device: behavior data
                is stored in the device’s internal memory, and the analysis is
                performed by an on-device AI model. No data ever leaves the
                user’s device.
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://bsky.app/profile/frogwatcher00.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  <Bluesky className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/andreamicheli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Documentation
          </h1>
          <p className="text-xl text-neutral-400 font-light">
            Everything you need to integrate Darwin into your React application.
          </p>
        </div>

        <Section id="installation" title="Installation">
          <p>
            Install the package and its peer dependencies using your preferred
            package manager.
          </p>
          <CodeBlock
            code="npm install darwin-ui @xenova/transformers"
            language="bash"
          />
        </Section>

        <Section id="quick-start" title="Quick Start">
          <p>
            Wrap your application (or the part you want to be adaptive) with the{" "}
            <code className="text-white">DarwinProvider</code>.
          </p>
          <CodeBlock
            code={`import { DarwinProvider } from 'darwin-ui';

function App() {
  return (
    <DarwinProvider>
      <YourApp />
    </DarwinProvider>
  );
}`}
          />
          <p>
            Then, use the <code className="text-white">DarwinItem</code>{" "}
            component to wrap elements you want to be reordered based on usage.
          </p>
          <CodeBlock
            code={`import { DarwinItem } from 'darwin-ui';

const Toolbar = () => {
  return (
    <div className="flex gap-4">
      <DarwinItem id="tool-pen" category="toolbar">
        <button>Pen Tool</button>
      </DarwinItem>
      
      <DarwinItem id="tool-brush" category="toolbar">
        <button>Brush Tool</button>
      </DarwinItem>
      
      <DarwinItem id="tool-eraser" category="toolbar">
        <button>Eraser</button>
      </DarwinItem>
    </div>
  );
};`}
          />
        </Section>

        <Section id="core-concepts" title="Core Concepts">
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Categories</h3>
          <p>
            Items are grouped by <code className="text-white">category</code>.
            Darwin only reorders items within the same category. This allows you
            to have multiple independent adaptive sections in your app (e.g., a
            sidebar and a toolbar).
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Semantic Scoring
          </h3>
          <p>
            Darwin uses a local AI model to understand the semantic relationship
            between user actions and UI elements. It assigns scores to items
            based on frequency, recency, and context.
          </p>
        </Section>

        <Section id="api-reference" title="API Reference">
          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            DarwinProvider
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="text-white">workerPath</code> (optional): Path to
              the custom worker script if you need to override the default.
            </li>
            <li>
              <code className="text-white">storageKey</code> (optional): Key
              used for local storage persistence. Default: 'darwin-state'.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">DarwinItem</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="text-white">id</code> (required): Unique
              identifier for the item.
            </li>
            <li>
              <code className="text-white">category</code> (required): Group
              identifier for reordering.
            </li>
            <li>
              <code className="text-white">children</code> (required): The React
              node to render.
            </li>
            <li>
              <code className="text-white">className</code> (optional): CSS
              classes to apply to the wrapper.
            </li>
          </ul>
        </Section>
      </main>
    </div>
  );
};

export default Docs;
