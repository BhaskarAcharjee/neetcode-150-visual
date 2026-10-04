import { SOLUTIONS_DATA } from '../data/solutionsData';

export const LANGUAGES = [
  { id: 'python', name: 'Python', ext: '.py', available: true, label: 'Python 3' },
  { id: 'java', name: 'Java', ext: '.java', available: true, label: 'Java 21' },
  { id: 'cpp', name: 'C++', ext: '.cpp', available: false, label: 'C++20 (Coming Soon)' },
];

/**
 * Strips comments before the class definition in Python
 */
export function cleanPythonCode(code) {
  if (!code) return '';
  let cleaned = code;
  const classIdx = cleaned.indexOf('class Solution');
  if (classIdx !== -1) {
    const prefix = cleaned.slice(0, classIdx);
    const suffix = cleaned.slice(classIdx);
    const cleanedPrefix = prefix
      .replace(/"""[\s\S]*?"""/g, '')
      .replace(/'''[\s\S]*?'''/g, '')
      .trim();
    cleaned = (cleanedPrefix ? cleanedPrefix + '\n\n' : '') + suffix;
  } else {
    cleaned = cleaned
      .replace(/^\s*"""[\s\S]*?"""\s*/g, '')
      .replace(/^\s*'''[\s\S]*?'''\s*/g, '');
  }

  // Convert internal docstrings to # comments
  const docstringToComments = (match, indent, content) => {
    return content
      .split('\n')
      .map((line) => {
        const trimmed = line.trim();
        return trimmed ? `${indent}# ${trimmed}` : `${indent}#`;
      })
      .join('\n');
  };

  cleaned = cleaned.replace(/([ \t]*)"""([\s\S]*?)"""/g, docstringToComments);
  cleaned = cleaned.replace(/([ \t]*)'''([\s\S]*?)'''/g, docstringToComments);

  // Strip if __name__ == '__main__' test block from editorial view
  const mainIdx = cleaned.indexOf("if __name__ == '__main__':");
  if (mainIdx !== -1) {
    cleaned = cleaned.slice(0, mainIdx).trimEnd();
  }
  const mainIdxDouble = cleaned.indexOf('if __name__ == "__main__":');
  if (mainIdxDouble !== -1) {
    cleaned = cleaned.slice(0, mainIdxDouble).trimEnd();
  }

  return cleaned.trim();
}

/**
 * Cleans header comments/URLs from Java code
 */
export function cleanJavaCode(code) {
  if (!code) return '';
  let cleaned = code;
  const classIdx = cleaned.search(/(?:public\s+)?class\s+/);
  if (classIdx !== -1) {
    const prefix = cleaned.slice(0, classIdx);
    const suffix = cleaned.slice(classIdx);
    const imports = (prefix.match(/import\s+[^;]+;/g) || []).join('\n');
    cleaned = (imports ? imports + '\n\n' : '') + suffix;
  }
  return cleaned.trim();
}

/**
 * Generates initial boilerplate template for manual coding in solution.py or solution.java
 */
export function generateStarterCode(problem, language) {
  if (language === 'python') {
    const raw = problem.pythonCode || '';
    const match = raw.match(/def\s+([a-zA-Z0-9_]+)\s*\([^)]*\)[^:]*:/);
    const defLine = match ? match[0] : 'def solve(self, *args):';

    return `from typing import List, Optional, Dict, Set

class Solution:
    ${defLine}
        # Write your code here
        pass
`;
  }

  if (language === 'java') {
    const raw = problem.javaCode || '';
    const match = raw.match(/public\s+[a-zA-Z0-9_<>[\]]+\s+[a-zA-Z0-9_]+\s*\([^)]*\)\s*\{/);
    const methodLine = match
      ? match[0]
      : 'public void solve() {';

    return `import java.util.*;

class Solution {
    ${methodLine}
        // Write your code here
        return;
    }
}
`;
  }

  return '// C++20 solutions are currently in development.\n// Check back soon or select Python or Java above.';
}

/**
 * Parses all available solutions for a problem given a language
 * Returns an array of solution file objects
 */
export function getProblemSolutions(problem, language) {
  const num = problem.num;
  const dataFromDb = SOLUTIONS_DATA[num] || {};

  if (language === 'cpp') {
    return [
      {
        id: 'cpp_unavailable',
        filename: 'solution.cpp',
        label: 'solution.cpp',
        tag: 'Coming Soon',
        isManual: false,
        unavailable: true,
        code: `// C++20 Solutions & Runtime (Coming Soon)\n// NeetCode 150 problem #${problem.num}: ${problem.name}\n\n#include <vector>\n#include <string>\n#include <unordered_map>\n\nclass Solution {\npublic:\n    // C++ implementations are actively being prepared!\n};\n`,
      },
    ];
  }

  if (language === 'python') {
    const rawPy = dataFromDb.python || problem.pythonCode || '';
    const fullPy = cleanPythonCode(rawPy);

    // Extract individual methods if multiple exist
    const methodRegex = /def\s+([a-zA-Z0-9_]+)\s*\([^)]*\)[^:]*:(?:[\s\S]*?)(?=(?:\n    def\s+[a-zA-Z0-9_]+|\nif\s+__name__|$))/g;
    const methods = [];
    let match;
    while ((match = methodRegex.exec(fullPy)) !== null) {
      methods.push({ name: match[1], body: match[0] });
    }

    const files = [];

    // 1. Manual User Solution
    const storedManualKey = `neetcode_code_${num}_python`;
    let userCode = localStorage.getItem(storedManualKey);
    if (!userCode) {
      userCode = generateStarterCode(problem, 'python');
    }

    files.push({
      id: 'manual',
      filename: 'solution.py',
      label: 'solution.py',
      tag: 'Manual Editor',
      isManual: true,
      code: userCode,
      starterCode: generateStarterCode(problem, 'python'),
    });

    // 2. Primary / Optimal Reference Solution (solution1.py)
    let sol1Code = fullPy;
    if (methods.length > 1) {
      sol1Code = `from typing import List, Optional, Dict, Set\n\nclass Solution:\n    ${methods[0].body.trim()}\n`;
    }
    files.push({
      id: 'solution1',
      filename: 'solution1.py',
      label: 'solution1.py',
      tag: 'Optimal Approach',
      isManual: false,
      code: sol1Code,
    });

    // 3. Alternative Reference Solutions (solution2.py, solution3.py)
    if (methods.length > 1) {
      for (let i = 1; i < Math.min(methods.length, 3); i++) {
        const altCode = `from typing import List, Optional, Dict, Set\n\nclass Solution:\n    ${methods[i].body.trim()}\n`;
        const readableName = methods[i].name
          .replace(/^[a-zA-Z0-9_]+_/, '')
          .replace(/_/g, ' ');

        files.push({
          id: `solution${i + 1}`,
          filename: `solution${i + 1}.py`,
          label: `solution${i + 1}.py`,
          tag: readableName ? `Alternative (${readableName})` : 'Alternative Approach',
          isManual: false,
          code: altCode,
        });
      }
    } else {
      // If only 1 method in db, provide standard clean full solution
      // For problems like Two Sum 0001, we can provide alternative 2-pointer / brute-force
      if (num === '0001') {
        files.push({
          id: 'solution2',
          filename: 'solution2.py',
          label: 'solution2.py',
          tag: 'Two-Pass Hash Map',
          isManual: false,
          code: `from typing import List\n\nclass Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # Two-pass Hash Map approach\n        indices = {}\n        for i, num in enumerate(nums):\n            indices[num] = i\n            \n        for i, num in enumerate(nums):\n            diff = target - num\n            if diff in indices and indices[diff] != i:\n                return [i, indices[diff]]\n                \n        return []\n`,
        });
      }
    }

    return files;
  }

  if (language === 'java') {
    const rawJava = dataFromDb.java || problem.javaCode || '';
    const fullJava = cleanJavaCode(rawJava);

    const files = [];

    // 1. Manual User Solution
    const storedManualKey = `neetcode_code_${num}_java`;
    let userCode = localStorage.getItem(storedManualKey);
    if (!userCode) {
      userCode = generateStarterCode(problem, 'java');
    }

    files.push({
      id: 'manual',
      filename: 'solution.java',
      label: 'solution.java',
      tag: 'Manual Editor',
      isManual: true,
      code: userCode,
      starterCode: generateStarterCode(problem, 'java'),
    });

    // 2. Reference solution1.java
    files.push({
      id: 'solution1',
      filename: 'solution1.java',
      label: 'solution1.java',
      tag: 'Optimal Approach',
      isManual: false,
      code: fullJava,
    });

    // 3. If Two Sum, add solution2.java
    if (num === '0001') {
      files.push({
        id: 'solution2',
        filename: 'solution2.java',
        label: 'solution2.java',
        tag: 'Two-Pass Hash Map',
        isManual: false,
        code: `import java.util.HashMap;\nimport java.util.Map;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            map.put(nums[i], i);\n        }\n        \n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement) && map.get(complement) != i) {\n                return new int[] { i, map.get(complement) };\n            }\n        }\n        \n        return new int[0];\n    }\n}\n`,
      });
    }

    return files;
  }

  return [];
}
