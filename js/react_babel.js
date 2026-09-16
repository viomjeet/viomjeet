const e = React.createElement;
const { useState, useEffect, useRef } = React;

const PROFILE_DATA = {
  name: "Vikas Kumar",
  title: "Lead / Senior Frontend Engineer",
  summary: "Senior Frontend Engineer with 13+ years of total software engineering experience, including 6+ years specializing in enterprise web applications using React.js, TypeScript, Next.js, and high-performance REST API integrations.",
  skills: [
    { category: "Frontend Core", items: ["React.js", "TypeScript", "Next.js", "JavaScript (ES6+)", "HTML5", "SCSS", "CSS Grid"] },
    { category: "State & Data Handling", items: ["Redux Toolkit", "Context API", "TanStack Query", "Async Pipelines", "REST APIs", "Deeply Nested JSON"] },
    { category: "Enterprise & Backend", items: ["ASP.NET Core APIs", "Node.js", "Express.js", "MongoDB Atlas", "Granular RBAC", "JWT Auth"] },
    { category: "Tooling & DevOps", items: ["GitHub Actions", "Azure DevOps", "Webpack", "Vite", "Turbopack", "Web Vitals Optimization"] }
  ],
  projects: [
    {
      title: "Enterprise Banking Management Portal",
      tag: "Flagship Full-Stack",
      desc: "Production-grade core banking ledger featuring automated 30-minute idle session timeouts, double-entry passbook drawers, inter-account transfers, and role-based staff permissions.",
      stack: ["Next.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "JWT Auth"],
      liveUrl: "#",
      githubUrl: "https://github.com/viomjeet"
    },
    {
      title: "Inn-Flow Hospitality Management Platform",
      tag: "Enterprise SaaS",
      desc: "Architected 35+ centralized React/TypeScript components, reducing cross-squad delivery cycles by 30%. Handled complex nested data binding and high-volume CRUD accounting tables.",
      stack: ["React.js", "TypeScript", "Redux Toolkit", "SCSS", "ASP.NET Core APIs"],
      liveUrl: null,
      githubUrl: "https://github.com/viomjeet"
    },
    {
      title: "Fintech Mortgage Calculators & Portals",
      tag: "High Traffic Fintech",
      desc: "Customer-facing loan lead acquisition flows and mortgage calculators with zero-latency reactive formula recalculations and cross-browser asset minification.",
      stack: ["HTML5", "SCSS", "JavaScript", "ASP.NET Web APIs", "Bootstrap"],
      liveUrl: null,
      githubUrl: "https://github.com/viomjeet"
    },
    {
      title: "xtReduxCrud & State Architectures",
      tag: "State Management Engine",
      desc: "Normalized Redux state ledger for dynamic collections, filterable queries, and optimistic CRUD updates built with responsive modular styling.",
      stack: ["React", "Redux Toolkit", "SCSS", "REST APIs"],
      liveUrl: null,
      githubUrl: "https://github.com/viomjeet"
    }
  ]
};

function Header({ theme, toggleTheme }) {
  return e("header", { className: "sticky top-0 z-40 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-6 py-3.5 flex items-center justify-between transition-colors" },
    e("div", { className: "flex items-center gap-3" },
      e("div", { className: "w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold font-mono flex items-center justify-center text-sm shadow-sm" }, "VK"),
      e("div", null,
        e("span", { className: "font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 block" }, PROFILE_DATA.name),
        e("span", { className: "text-[10px] text-zinc-500 dark:text-zinc-400 font-mono" }, PROFILE_DATA.title)
      )
    ),
    e("div", { className: "flex items-center gap-3" },
      e("button", {
        onClick: toggleTheme,
        className: "p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition shadow-sm text-xs font-mono"
      }, theme === "dark" ? "☀ Light" : "☾ Dark"),
      e("a", {
        href: "mailto:viomjeet@gmail.com",
        className: "px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition shadow-sm"
      }, "Contact")
    )
  );
}

function AIAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! I am Vikas's Profile Copilot. Inquire about his 13+ years of experience, banking systems, or availability." }
  ]);
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const handleSend = (ev) => {
    ev.preventDefault();
    if (!input.trim() || thinking) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setThinking(true);

    setTimeout(() => {
      let reply = "Vikas brings 13+ years of total software engineering experience with 6+ years specializing in React.js, TypeScript, and modern web architectures.";
      const q = userMsg.toLowerCase();
      if (q.includes("banking") || q.includes("project")) {
        reply = "He architected a full-stack Enterprise Banking Management System using Next.js (App Router), Express.js, MongoDB Atlas, and JWT authentication with automatic session timeouts.";
      } else if (q.includes("stack") || q.includes("skill")) {
        reply = "Core technical competencies: React.js, TypeScript, Next.js, Redux Toolkit, Tailwind CSS, Node.js, and integrating ASP.NET Core REST APIs.";
      } else if (q.includes("join") || q.includes("available")) {
        reply = "Vikas is an Immediate Joiner available for Lead/Senior Frontend Engineer roles across Delhi NCR, Hybrid, or Remote setups.";
      }

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setThinking(false);
    }, 500);
  };

  return e("div", { className: "rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4 sm:p-5 flex flex-col h-96 transition-colors" },
    e("div", { className: "flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800" },
      e("span", { className: "text-xs font-mono font-medium text-zinc-900 dark:text-zinc-200" }, "AI Profile Copilot (Interactive)"),
      e("span", { className: "text-[10px] font-mono text-zinc-400 dark:text-zinc-500" }, "Ready")
    ),
    e("div", { className: "flex-1 overflow-y-auto py-3 space-y-3 pr-1 text-xs" },
      messages.map((m, idx) => e("div", { key: idx, className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}` },
        e("div", {
          className: `max-w-[85%] rounded-lg px-3 py-2 ${
            m.role === "user"
              ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-medium"
              : "bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-200 shadow-sm"
          }`
        }, m.text)
      )),
      thinking && e("div", { className: "flex justify-start" },
        e("div", { className: "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 rounded-lg px-3 py-1.5 text-[11px] animate-pulse" }, "Querying candidate schema...")
      ),
      e("div", { ref: bottomRef })
    ),
    e("form", { onSubmit: handleSend, className: "pt-2 border-t border-zinc-200 dark:border-zinc-800 flex gap-2" },
      e("input", {
        type: "text",
        placeholder: "Ask about projects, technical stack, or availability...",
        value: input,
        onChange: (e) => setInput(e.target.value),
        className: "flex-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none"
      }),
      e("button", {
        type: "submit",
        className: "px-3 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition"
      }, "Ask")
    )
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("app_theme") || "dark";
    setTheme(saved);
    if (saved === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("app_theme", next);
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return e("div", { className: "min-h-screen flex flex-col justify-between" },
    e(Header, { theme, toggleTheme }),
    e("main", { className: "max-w-5xl mx-auto w-full px-6 py-12 space-y-16" },
      e("section", { className: "space-y-4" },
        e("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400" },
          "13+ Years Experience • React.js & Next.js Core • Delhi NCR / Remote"
        ),
        e("h1", { className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight" },
          "Architecting Resilient ",
          e("span", { className: "text-zinc-500 dark:text-zinc-400" }, "Enterprise Web Platforms.")
        ),
        e("p", { className: "text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed" }, PROFILE_DATA.summary)
      ),
      e("section", { className: "space-y-6" },
        e("div", { className: "flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3" },
          e("h2", { className: "text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400" }, "// Production & Flagship Work")
        ),
        e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
          PROFILE_DATA.projects.map((proj, idx) => e("div", {
            key: idx,
            className: "p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition flex flex-col justify-between space-y-4 shadow-sm"
          },
            e("div", { className: "space-y-2" },
              e("div", { className: "flex items-center justify-between" },
                e("span", { className: "text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300" }, proj.tag),
                e("a", { href: proj.githubUrl, target: "_blank", className: "text-xs font-mono text-zinc-500 hover:underline" }, "GitHub ↗")
              ),
              e("h3", { className: "font-semibold text-sm text-zinc-900 dark:text-zinc-100" }, proj.title),
              e("p", { className: "text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed" }, proj.desc)
            ),
            e("div", { className: "flex flex-wrap gap-1.5 pt-2" },
              proj.stack.map((s, sIdx) => e("span", { key: sIdx, className: "text-[10px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded" }, s))
            )
          ))
        )
      ),
      e("section", { className: "space-y-6" },
        e("div", { className: "flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3" },
          e("h2", { className: "text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400" }, "// Core Architectural Competencies")
        ),
        e("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" },
          PROFILE_DATA.skills.map((grp, idx) => e("div", {
            key: idx,
            className: "p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 space-y-3 shadow-sm"
          },
            e("h3", { className: "text-xs font-bold text-zinc-900 dark:text-zinc-200 tracking-tight" }, grp.category),
            e("ul", { className: "space-y-1.5" },
              grp.items.map((item, itemIdx) => e("li", { key: itemIdx, className: "text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2" },
                e("span", { className: "w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" }),
                item
              ))
            )
          ))
        )
      ),
      e("section", { className: "space-y-4" },
        e("div", { className: "flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3" },
          e("h2", { className: "text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400" }, "// Interactive Candidate Intelligence")
        ),
        e(AIAssistant)
      )
    ),
    e("footer", { className: "border-t border-zinc-200 dark:border-zinc-800 px-6 py-6 text-center text-xs text-zinc-500 font-mono transition-colors" },
      "© " + new Date().getFullYear() + " Vikas Kumar. Built with modern React & Tailwind."
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));