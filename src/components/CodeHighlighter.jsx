import React from 'react';

/**
 * Lightweight syntax highlighter for Python and Java code with sleek Monaco dark tokens
 */
export default function CodeHighlighter({ code = '', language = 'python' }) {
  const lines = code.trim().split('\n');

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
    // Python keywords
    const pythonKeywords = /\b(def|class|return|if|elif|else|for|while|in|import|from|as|and|or|not|is|None|True|False|break|continue|try|except|finally|with|pass|raise|lambda)\b/g;
    // Java keywords
    const javaKeywords = /\b(public|private|protected|class|interface|void|int|boolean|char|double|float|long|return|if|else|for|while|new|null|true|false|this|static|final|import|package|break|continue|try|catch|finally|throw|throws)\b/g;
    
    const types = /\b(List|Dict|Set|Tuple|Optional|int|str|float|bool|Map|HashMap|HashSet|ArrayList|String|Integer|Character|Double|ListNode|TreeNode)\b/g;
    const functions = /\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/g;
    const strings = /(".*?"|'.*?'|`.*?`)/g;
    const numbers = /\b(\d+)\b/g;

    // Simple parser: split into words and symbols
    // For rich display, let's process with safe regex replacement or token stream
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
      {lines.map((line, idx) => (
        <div key={idx} className="table-row group hover:bg-white/[0.03] transition-colors">
          <span className="table-cell select-none text-right pr-4 pl-2 text-neutral-400 text-xs font-mono group-hover:text-neutral-400">
            {idx + 1}
          </span>
          <span className="table-cell whitespace-pre">
            {highlightLine(line)}
          </span>
        </div>
      ))}
    </pre>
  );
}
