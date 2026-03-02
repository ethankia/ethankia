import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  {
    lang: "HTML",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>EK Dev</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="hero">
    <h1>Welcome</h1>
  </header>
</body>
</html>`,
  },
  {
    lang: "CSS",
    code: `.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(
    135deg, #0a0e1a, #1a1f36
  );
  color: #ffffff;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
}`,
  },
  {
    lang: "JavaScript",
    code: `const app = {
  init() {
    this.loadComponents();
    this.bindEvents();
    console.log("App ready ✓");
  },

  async loadComponents() {
    const modules = await import(
      "./components"
    );
    modules.render("#app");
  },

  bindEvents() {
    document.addEventListener(
      "click", this.handleClick
    );
  }
};

app.init();`,
  },
];

const AnimatedCodeWindow = () => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const currentSnippet = codeSnippets[snippetIndex];

  useEffect(() => {
    if (charIndex < currentSnippet.code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + currentSnippet.code[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 18);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        setDisplayedCode("");
        setCharIndex(0);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentSnippet, snippetIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Glow behind */}
      <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl" />

      {/* Window */}
      <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-medium">
            {currentSnippet.lang}
          </span>
        </div>

        {/* Code area */}
        <div className="p-4 min-h-[280px] font-mono text-xs leading-relaxed">
          <pre className="text-foreground/90 whitespace-pre-wrap">
            {displayedCode}
            <span className="border-r-2 animate-typing-cursor">&nbsp;</span>
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCodeWindow;
