import React, { useEffect, useRef } from 'react';

/**
 * Lightweight syntax highlighter for Python and Java code with active line tracking
 */
export default function CodeHighlighter({ code = '', language = 'python', activeLine = null }) {
  const lines = code.trim().split('\n');
  const activeLineRef = useRef(null);

  // Auto-scroll active line into view smoothly
  useEffect(() => {
    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeLine]);

  // Tokenize each line
  const highlightLine = (line) => {
    // If empty line
    if (!line) return <span className="inline-block h-4"></span>;

    // Check for comments
    const trimmed = line.trim();
    if (language === 'python' && (trimmed.startsWith('#') || trimmed.startsWith('"""') || trimmed.startsWith("'''"))) {
      return <span className="text-neutral-500 italic">{line}</span>;
    }
    if (language === 'java' && (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith('*/'))) {
      return <span className="text-neutral-500 italic">{line}</span>;
    }

    // Token regular expressions
    const pythonKeywords = /\b(def|class|return|if|elif|else|for|while|in|import|from|as|and|or|not|is|None|True|False|break|continue|try|except|finally|with|pass|raise|lambda)\b/g;
    const javaKeywords = /\b(public|private|protected|class|interface|void|int|boolean|char|double|float|long|return|if|else|for|while|new|null|true|false|this|static|final|import|package|break|continue|try|catch|finally|throw|throws)\b/g;
    const types = /\b(List|Dict|Set|Tuple|Optional|int|str|float|bool|Map|HashMap|HashSet|ArrayList|String|Integer|Character|Double|ListNode|TreeNode)\b/g;

    const tokens = line.split(/(\s+|[()[\]{},.:;=+\-*/<>!&|]+)/);

    return tokens.map((token, idx) => {
      // Check for keywords
      if (language === 'python' && pythonKeywords.test(token)) {
        return <span key={idx} className="text-purple-400 font-semibold">{token}</span>;
      }
      if (language === 'java' && javaKeywords.test(token)) {
        return <span key={idx} className="text-purple-400 font-semibold">{token}</span>;
      }

      // Check for types
      if (types.test(token)) {
        return <span key={idx} className="text-yellow-300">{token}</span>;
      }

      // Check for strings
      if (token.startsWith('"') || token.startsWith("'")) {
        return <span key={idx} className="text-emerald-300">{token}</span>;
      }

      // Check for numbers
      if (/^\d+$/.test(token)) {
        return <span key={idx} className="text-amber-400">{token}</span>;
      }

      // Check for operators
      if (/^[=+\-*/<>!&|]+$/.test(token)) {
        return <span key={idx} className="text-cyan-400">{token}</span>;
      }

      // Default identifier / punctuation
      return <span key={idx} className="text-neutral-200">{token}</span>;
    });
  };

  return (
    <pre className="font-mono text-[13px] leading-relaxed select-text font-normal">
      {lines.map((line, idx) => {
        const lineNum = idx + 1;
        const isActive = activeLine === lineNum;

        return (
          <div
            key={idx}
            ref={isActive ? activeLineRef : null}
            className={`table-row group transition-colors duration-150 ${
              isActive
                ? 'bg-brand-500/20 text-brand-300 font-medium'
                : 'hover:bg-white/[0.03]'
            }`}
          >
            <span
              className={`table-cell select-none text-right pr-4 pl-2 text-xs font-mono transition-colors ${
                isActive
                  ? 'text-brand-400 font-bold border-l-2 border-brand-400 bg-brand-500/30'
                  : 'text-neutral-500 group-hover:text-neutral-400'
              }`}
            >
              {lineNum}
            </span>
            <span className={`table-cell whitespace-pre ${isActive ? 'pl-2' : ''}`}>
              {highlightLine(line)}
            </span>
          </div>
        );
      })}
    </pre>
  );
}
