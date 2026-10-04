/**
 * Deterministic Step Engine for NeetCode 150 Visualizer
 * Generates structured execution traces:
 * {
 *   stepIndex: number,
 *   description: string,
 *   state: VisualizerState,
 *   codeLine: { python: number, java: number },
 *   explanation: string,
 *   variables: Record<string, any>,
 *   quiz?: { question: string, options: string[], answer: number, explanation: string }
 * }
 */

// Helper: Parse or fallback array/numbers
function parseArrayInput(input, fallback) {
  if (Array.isArray(input)) return input;
  if (typeof input === 'string') {
    try {
      const parsed = JSON.parse(input);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      const parts = input.split(/[\s,]+/).filter(Boolean).map(Number).filter(n => !isNaN(n));
      if (parts.length) return parts;
    }
  }
  return fallback;
}

// 1. Two Sum / Array & Hash Archetype Generator
export function generateArrayHashTrace(problem, customInput = {}) {
  const nums = parseArrayInput(customInput.nums, problem.initialData?.nums || [2, 7, 11, 15]);
  const target = customInput.target !== undefined ? Number(customInput.target) : (problem.initialData?.target ?? 9);
  const num = problem.num;

  const steps = [];

  // Special handling for Contains Duplicate (0217)
  if (num === '0217') {
    const seen = new Set();
    steps.push({
      stepIndex: 0,
      description: 'Initialize empty seen set',
      state: {
        elements: nums.map(v => ({ val: v, status: 'default' })),
        hashTable: {},
        hashTitle: 'Seen Set',
        condition: 'seen = set()'
      },
      codeLine: { python: 6, java: 6 },
      explanation: 'We create a hash set to track numbers we encounter. If any number is already present, we have found a duplicate in O(1) lookup time.',
      variables: { 'seen.size': 0, 'duplicateFound': false },
      quiz: {
        question: 'What is the best average-time lookup complexity of a Hash Set?',
        options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
        answer: 2,
        explanation: 'Hash set lookups operate in O(1) average time through hashing.'
      }
    });

    let dupFound = false;
    for (let i = 0; i < nums.length; i++) {
      const val = nums[i];
      const isDup = seen.has(val);
      steps.push({
        stepIndex: steps.length,
        description: `Inspect index ${i}: value ${val}`,
        state: {
          elements: nums.map((v, idx) => ({
            val: v,
            status: idx === i ? (isDup ? 'duplicate' : 'active') : (idx < i ? 'visited' : 'default')
          })),
          hashTable: Object.fromEntries(Array.from(seen).map(v => [v, 'seen'])),
          hashTitle: 'Seen Set',
          pointers: [{ index: i, label: 'num', color: isDup ? '#ef4444' : '#10b981' }],
          condition: `Is ${val} in seen? -> ${isDup ? 'YES' : 'NO'}`
        },
        codeLine: { python: isDup ? 8 : 7, java: isDup ? 8 : 7 },
        explanation: isDup
          ? `Value ${val} is already in the set! Duplicate detected, immediately return True.`
          : `Value ${val} not yet seen. Add it to our seen set and proceed to next element.`,
        variables: { currentVal: val, 'seen.size': seen.size, duplicateFound: isDup }
      });

      if (isDup) {
        dupFound = true;
        break;
      }
      seen.add(val);
    }

    if (!dupFound) {
      steps.push({
        stepIndex: steps.length,
        description: 'All elements scanned - No duplicates found',
        state: {
          elements: nums.map(v => ({ val: v, status: 'visited' })),
          hashTable: Object.fromEntries(Array.from(seen).map(v => [v, 'seen'])),
          hashTitle: 'Seen Set',
          condition: 'All elements are distinct -> return False'
        },
        codeLine: { python: 11, java: 11 },
        explanation: 'Scanned the entire array with no repeat numbers found. Return False.',
        variables: { 'seen.size': seen.size, duplicateFound: false }
      });
    }
    return steps;
  }

  // Special handling for Valid Anagram (0242)
  if (num === '0242') {
    const s = typeof customInput.s === 'string' ? customInput.s : 'anagram';
    const t = typeof customInput.t === 'string' ? customInput.t : 'nagaram';
    const sChars = s.split('');
    const count = {};

    steps.push({
      stepIndex: 0,
      description: `Compare lengths of s ("${s}") and t ("${t}")`,
      state: {
        elements: sChars.map(c => ({ val: c, status: 'default' })),
        hashTable: {},
        hashTitle: 'Character Frequency Map',
        condition: `len(s) = ${s.length}, len(t) = ${t.length}`
      },
      codeLine: { python: 3, java: 3 },
      explanation: 'If strings have different lengths, they cannot be anagrams. Otherwise, count frequencies.',
      variables: { 'len(s)': s.length, 'len(t)': t.length, valid: s.length === t.length }
    });

    sChars.forEach((ch, idx) => {
      count[ch] = (count[ch] || 0) + 1;
      steps.push({
        stepIndex: steps.length,
        description: `Count character '${ch}' from string s`,
        state: {
          elements: sChars.map((c, i) => ({ val: c, status: i === idx ? 'active' : (i < idx ? 'visited' : 'default') })),
          hashTable: { ...count },
          hashTitle: 'Character Frequency Map',
          condition: `count['${ch}'] = ${count[ch]}`
        },
        codeLine: { python: 7, java: 7 },
        explanation: `Increment count for character '${ch}'. Now seen ${count[ch]} times.`,
        variables: { char: ch, count: count[ch] }
      });
    });

    const tChars = t.split('');
    let valid = true;
    for (let j = 0; j < tChars.length; j++) {
      const ch = tChars[j];
      const hasChar = count[ch] && count[ch] > 0;
      if (hasChar) {
        count[ch]--;
      } else {
        valid = false;
      }

      steps.push({
        stepIndex: steps.length,
        description: `Decrement '${ch}' using string t [${j}]`,
        state: {
          elements: tChars.map((c, i) => ({ val: c, status: i === j ? (valid ? 'match' : 'duplicate') : (i < j ? 'visited' : 'default') })),
          hashTable: { ...count },
          hashTitle: 'Character Frequency Map',
          condition: hasChar ? `Matched '${ch}'. Remaining = ${count[ch]}` : `Mismatch on '${ch}'!`
        },
        codeLine: { python: 10, java: 10 },
        explanation: hasChar
          ? `Decremented count of '${ch}' to ${count[ch]}.`
          : `Character '${ch}' not available in frequency map. Return False.`,
        variables: { char: ch, remaining: count[ch] || 0, isMatch: valid }
      });

      if (!valid) break;
    }

    steps.push({
      stepIndex: steps.length,
      description: valid ? 'All characters matched! Valid Anagram' : 'Mismatch found! Not an Anagram',
      state: {
        elements: tChars.map(c => ({ val: c, status: valid ? 'match' : 'duplicate' })),
        hashTable: { ...count },
        hashTitle: 'Final Frequency Map',
        condition: valid ? 'Return True' : 'Return False'
      },
      codeLine: { python: valid ? 13 : 10, java: valid ? 13 : 10 },
      explanation: valid
        ? 'All counts balance to zero. Strings are valid anagrams!'
        : 'Counts do not balance. Strings are not anagrams.',
      variables: { result: valid }
    });

    return steps;
  }

  // Standard Two Sum (0001) and General Array/Hash Map Algorithm
  const map = {};
  steps.push({
    stepIndex: 0,
    description: `Target is ${target}. Initialize empty hash map.`,
    state: {
      elements: nums.map(v => ({ val: v, status: 'default' })),
      hashTable: {},
      hashTitle: 'Hash Map: value -> index',
      condition: `target = ${target}`
    },
    codeLine: { python: 5, java: 6 },
    explanation: `We scan nums once. For each num, complement = ${target} - num. If complement is in our map, we have our two indices.`,
    variables: { target, 'map.size': 0 },
    quiz: {
      question: `For target ${target} and element ${nums[0]}, what is the needed complement?`,
      options: [
        `${target + nums[0]}`,
        `${target - nums[0]}`,
        `${nums[0] - target}`,
        `${target * nums[0]}`
      ],
      answer: 1,
      explanation: `Complement = target - num = ${target} - ${nums[0]} = ${target - nums[0]}.`
    }
  });

  let matched = false;
  for (let i = 0; i < nums.length; i++) {
    const numVal = nums[i];
    const complement = target - numVal;
    const exists = complement in map;

    steps.push({
      stepIndex: steps.length,
      description: `Check nums[${i}] = ${numVal}. Complement = ${target} - ${numVal} = ${complement}.`,
      state: {
        elements: nums.map((v, idx) => ({
          val: v,
          status: idx === i ? 'active' : (exists && idx === map[complement] ? 'match' : (idx < i ? 'visited' : 'default'))
        })),
        hashTable: { ...map },
        hashTitle: 'Hash Map: value -> index',
        pointers: [{ index: i, label: `i=${i}`, color: '#38bdf8' }],
        condition: `Is ${complement} in map? -> ${exists ? `YES at index ${map[complement]}` : 'NO'}`
      },
      codeLine: { python: exists ? 10 : 8, java: exists ? 9 : 8 },
      explanation: exists
        ? `Complement ${complement} is already stored at index ${map[complement]}! We found the solution: [${map[complement]}, ${i}].`
        : `Complement ${complement} is not yet stored in our hash map. Store ${numVal} -> ${i} and continue.`,
      variables: { currentVal: numVal, complement, found: exists, 'map.size': Object.keys(map).length }
    });

    if (exists) {
      matched = true;
      const compIdx = map[complement];
      steps.push({
        stepIndex: steps.length,
        description: `Match Found! Return indices [${compIdx}, ${i}].`,
        state: {
          elements: nums.map((v, idx) => ({
            val: v,
            status: idx === compIdx || idx === i ? 'match' : 'visited'
          })),
          hashTable: { ...map },
          hashTitle: 'Hash Map: value -> index',
          pointers: [
            { index: compIdx, label: `idx ${compIdx}`, color: '#10b981' },
            { index: i, label: `idx ${i}`, color: '#10b981' }
          ],
          condition: `nums[${compIdx}] (${complement}) + nums[${i}] (${numVal}) == ${target}`
        },
        codeLine: { python: 11, java: 10 },
        explanation: `Two numbers sum to ${target}: ${nums[compIdx]} at index ${compIdx} and ${numVal} at index ${i}. Completed in O(n) time and O(n) space!`,
        variables: { result: `[${compIdx}, ${i}]`, sum: target }
      });
      break;
    }

    map[numVal] = i;
  }

  if (!matched) {
    steps.push({
      stepIndex: steps.length,
      description: 'End of array reached. No two numbers sum to target.',
      state: {
        elements: nums.map(v => ({ val: v, status: 'visited' })),
        hashTable: { ...map },
        hashTitle: 'Hash Map: value -> index',
        condition: 'No matching pair found -> return []'
      },
      codeLine: { python: 15, java: 14 },
      explanation: 'No complementary pair satisfied the target sum.',
      variables: { result: '[]' }
    });
  }

  return steps;
}

// 2. Two Pointers Archetype Generator
export function generateTwoPointersTrace(problem, customInput = {}) {
  const heights = parseArrayInput(customInput.nums, problem.initialData?.nums || [1, 8, 6, 2, 5, 4, 8, 3, 7]);
  const isSorted = problem.num === '0167' || problem.num === '0015';
  const target = customInput.target !== undefined ? Number(customInput.target) : (problem.initialData?.target ?? 9);

  const steps = [];
  let l = 0;
  let r = heights.length - 1;

  if (problem.num === '0011') {
    // Container With Most Water
    let maxArea = 0;
    let bestL = 0;
    let bestR = r;

    steps.push({
      stepIndex: 0,
      description: `Initialize Left pointer at index 0 (h=${heights[0]}), Right at ${r} (h=${heights[r]}).`,
      state: {
        elements: heights.map(h => ({ val: h, height: h })),
        left: l,
        right: r,
        conditionBadge: `width = ${r - l}, min(hL, hR) = ${Math.min(heights[l], heights[r])}`,
        currentMetric: { label: 'Current Area', value: 0 },
        bestMetric: { label: 'Max Water', value: 0 },
        highlightRange: [l, r]
      },
      codeLine: { python: 5, java: 6 },
      explanation: 'We place pointers at both ends to maximize initial container width. In each step, we calculate area and move the shorter bar inward to seek taller boundaries.',
      variables: { l, r, maxArea: 0, width: r - l },
      quiz: {
        question: 'Why do we move the shorter pointer inward rather than the taller one?',
        options: [
          'Because the shorter pointer is always faster to calculate',
          'Because keeping the shorter bar can never yield a larger area as width decreases',
          'Because the problem requires left-to-right processing',
          'Because taller bars have higher memory overhead'
        ],
        answer: 1,
        explanation: 'Area is bottlenecked by min(hL, hR). With width decreasing by 1, only increasing the shorter height gives any chance of finding a greater area.'
      }
    });

    while (l < r) {
      const hL = heights[l];
      const hR = heights[r];
      const width = r - l;
      const minH = Math.min(hL, hR);
      const area = minH * width;
      const isNewMax = area > maxArea;
      if (isNewMax) {
        maxArea = area;
        bestL = l;
        bestR = r;
      }

      steps.push({
        stepIndex: steps.length,
        description: `Evaluate window [${l}, ${r}]: Area = min(${hL}, ${hR}) * ${width} = ${area}. ${isNewMax ? 'New maximum!' : ''}`,
        state: {
          elements: heights.map(h => ({ val: h, height: h })),
          left: l,
          right: r,
          conditionBadge: isNewMax ? `🎉 New Record: ${area} units!` : `Area: ${area} (Best: ${maxArea})`,
          currentMetric: { label: 'Area', value: area },
          bestMetric: { label: 'Max Water', value: maxArea },
          highlightRange: [l, r]
        },
        codeLine: { python: isNewMax ? 8 : 7, java: isNewMax ? 8 : 7 },
        explanation: `With Left bar ${hL} and Right bar ${hR}, the water height is limited to ${minH}. Multiplying by distance ${width} gives ${area}.`,
        variables: { l, r, 'h[l]': hL, 'h[r]': hR, width, currentArea: area, maxArea }
      });

      if (hL < hR) {
        l++;
      } else {
        r--;
      }
    }

    steps.push({
      stepIndex: steps.length,
      description: `Pointers met at index ${l}. Maximum water trapped = ${maxArea} units.`,
      state: {
        elements: heights.map(h => ({ val: h, height: h })),
        left: bestL,
        right: bestR,
        conditionBadge: `Optimal Container: ${maxArea} units`,
        currentMetric: { label: 'Final Result', value: maxArea },
        bestMetric: { label: 'Max Water', value: maxArea },
        highlightRange: [bestL, bestR]
      },
      codeLine: { python: 13, java: 12 },
      explanation: `Finished exploring all potential maximal containers in O(n) time and O(1) space. The optimal container spans indices [${bestL}, ${bestR}].`,
      variables: { result: maxArea, optimalL: bestL, optimalR: bestR }
    });

    return steps;
  }

  // Two Sum II (0167) or general two pointers
  steps.push({
    stepIndex: 0,
    description: `Target is ${target}. Initialize Left at 0 (${heights[0]}), Right at ${r} (${heights[r]}).`,
    state: {
      elements: heights.map(v => ({ val: v })),
      left: l,
      right: r,
      conditionBadge: `nums[${l}] + nums[${r}] = ${heights[l] + heights[r]}`,
      currentMetric: { label: 'Sum', value: heights[l] + heights[r] },
      bestMetric: { label: 'Target', value: target },
      highlightRange: [l, r]
    },
    codeLine: { python: 4, java: 5 },
    explanation: 'Since the array is sorted, if current sum < target, we move Left rightward to increase sum. If sum > target, we move Right leftward.',
    variables: { l, r, currentSum: heights[l] + heights[r], target }
  });

  while (l < r) {
    const sum = heights[l] + heights[r];
    const isMatch = sum === target;

    steps.push({
      stepIndex: steps.length,
      description: `Check Left=${l} (${heights[l]}), Right=${r} (${heights[r]}): Sum = ${sum}. Target = ${target}.`,
      state: {
        elements: heights.map(v => ({ val: v })),
        left: l,
        right: r,
        conditionBadge: isMatch ? `🎯 Target Matched: ${sum} == ${target}` : (sum < target ? `${sum} < ${target} (Shift Left)` : `${sum} > ${target} (Shift Right)`),
        currentMetric: { label: 'Current Sum', value: sum },
        bestMetric: { label: 'Target', value: target },
        highlightRange: [l, r]
      },
      codeLine: { python: isMatch ? 8 : (sum < target ? 10 : 12), java: isMatch ? 7 : (sum < target ? 9 : 11) },
      explanation: isMatch
        ? `Found 1-indexed pair: [${l + 1}, ${r + 1}]!`
        : (sum < target
            ? `Sum ${sum} is too small. Increment Left pointer to find larger numbers.`
            : `Sum ${sum} is too big. Decrement Right pointer to find smaller numbers.`),
      variables: { l, r, sum, target, match: isMatch }
    });

    if (isMatch) break;
    if (sum < target) {
      l++;
    } else {
      r--;
    }
  }

  return steps;
}

// 3. Sliding Window Archetype Generator
export function generateSlidingWindowTrace(problem, customInput = {}) {
  const nums = parseArrayInput(customInput.nums, problem.initialData?.nums || [7, 1, 5, 3, 6, 4]);
  const steps = [];

  if (problem.num === '0121') {
    // Best Time to Buy and Sell Stock
    let l = 0;
    let maxProfit = 0;
    let bestBuy = 0;
    let bestSell = 0;

    steps.push({
      stepIndex: 0,
      description: `Initialize Buy pointer at Day 0 ($${nums[0]}), Sell pointer at Day 1 ($${nums[1] || nums[0]}).`,
      state: {
        elements: nums.map(p => ({ val: `$${p}` })),
        left: 0,
        right: 1,
        windowState: 'valid',
        currentMetric: { label: 'Profit', value: '$0' },
        bestMetric: { label: 'Max Profit', value: '$0' },
        conditionBadge: 'Window initialized'
      },
      codeLine: { python: 4, java: 5 },
      explanation: 'Left pointer tracks lowest buy day seen so far. Right pointer scans forward testing potential sell days.',
      variables: { buyDay: 0, sellDay: 1, maxProfit: 0 },
      quiz: {
        question: 'If prices[right] < prices[left], what should happen to the left pointer?',
        options: [
          'Keep left where it is',
          'Move left to right because a new cheaper buy price was found',
          'Move left to the end of array',
          'Reset left to index 0'
        ],
        answer: 1,
        explanation: 'When price drops below our buy price, shifting left = right gives us a better foundation for higher subsequent profits.'
      }
    });

    for (let r = 1; r < nums.length; r++) {
      const buyPrice = nums[l];
      const sellPrice = nums[r];
      const profit = sellPrice - buyPrice;

      if (buyPrice < sellPrice) {
        const isNew = profit > maxProfit;
        if (isNew) {
          maxProfit = profit;
          bestBuy = l;
          bestSell = r;
        }

        steps.push({
          stepIndex: steps.length,
          description: `Day ${r}: Sell for $${sellPrice} (Bought Day ${l} at $${buyPrice}) -> Profit: +$${profit}. ${isNew ? 'New Max!' : ''}`,
          state: {
            elements: nums.map(p => ({ val: `$${p}` })),
            left: l,
            right: r,
            windowState: isNew ? 'optimal' : 'valid',
            currentMetric: { label: 'Current Profit', value: `+$${profit}` },
            bestMetric: { label: 'Max Profit', value: `$${maxProfit}` },
            conditionBadge: `Profit = $${sellPrice} - $${buyPrice} = +$${profit}`
          },
          codeLine: { python: isNew ? 7 : 6, java: isNew ? 7 : 6 },
          explanation: `Selling at $${sellPrice} yields $${profit} profit. ${isNew ? `This beats our previous best of $${maxProfit - profit + maxProfit}!` : ''}`,
          variables: { l, r, buyPrice, sellPrice, profit, maxProfit }
        });
      } else {
        steps.push({
          stepIndex: steps.length,
          description: `Day ${r}: Price $${sellPrice} is lower than Buy $${buyPrice}. Shift Buy day to Day ${r}!`,
          state: {
            elements: nums.map(p => ({ val: `$${p}` })),
            left: r,
            right: r,
            windowState: 'shrinking',
            currentMetric: { label: 'Current Profit', value: '$0' },
            bestMetric: { label: 'Max Profit', value: `$${maxProfit}` },
            conditionBadge: `Shift Buy: $${sellPrice} < $${buyPrice}`
          },
          codeLine: { python: 9, java: 9 },
          explanation: `Found cheaper buy opportunity at Day ${r} ($${sellPrice}). Update Left pointer to Day ${r}.`,
          variables: { l: r, r, newBuyPrice: sellPrice, maxProfit }
        });
        l = r;
      }
    }

    steps.push({
      stepIndex: steps.length,
      description: `Analysis Complete: Optimal profit is $${maxProfit} (Buy Day ${bestBuy}, Sell Day ${bestSell}).`,
      state: {
        elements: nums.map(p => ({ val: `$${p}` })),
        left: bestBuy,
        right: bestSell,
        windowState: 'optimal',
        currentMetric: { label: 'Final Result', value: `$${maxProfit}` },
        bestMetric: { label: 'Max Profit', value: `$${maxProfit}` },
        conditionBadge: `Optimal Trade: +$${maxProfit}`
      },
      codeLine: { python: 11, java: 11 },
      explanation: `Successfully calculated single-pass max profit in O(n) time and O(1) space.`,
      variables: { maxProfit, buyDay: bestBuy, sellDay: bestSell }
    });

    return steps;
  }

  // Longest Substring Without Repeating (0003) or general window
  const s = typeof customInput.s === 'string' ? customInput.s : 'abcabcbb';
  const chars = s.split('');
  const seenChars = new Map();
  let l = 0;
  let maxLen = 0;

  steps.push({
    stepIndex: 0,
    description: `String "${s}". Initialize sliding window [0, 0].`,
    state: {
      elements: chars.map(c => ({ val: c })),
      left: 0,
      right: 0,
      windowState: 'valid',
      currentMetric: { label: 'Length', value: 0 },
      bestMetric: { label: 'Max Length', value: 0 },
      conditionBadge: 'Window start'
    },
    codeLine: { python: 4, java: 5 },
    explanation: 'Window expands rightward until duplicate character is encountered, then left boundary shrinks.',
    variables: { l: 0, r: 0, maxLen: 0 }
  });

  for (let r = 0; r < chars.length; r++) {
    const c = chars[r];
    if (seenChars.has(c) && seenChars.get(c) >= l) {
      l = seenChars.get(c) + 1;
      steps.push({
        stepIndex: steps.length,
        description: `Duplicate '${c}' found at index ${seenChars.get(c)}. Shrink Left to ${l}.`,
        state: {
          elements: chars.map((ch, idx) => ({ val: ch, status: idx >= l && idx <= r ? 'active' : 'default' })),
          left: l,
          right: r,
          windowState: 'shrinking',
          currentMetric: { label: 'Current Window', value: `"${s.slice(l, r + 1)}"` },
          bestMetric: { label: 'Max Length', value: maxLen },
          conditionBadge: `Shrunk Left to ${l}`
        },
        codeLine: { python: 7, java: 7 },
        explanation: `Duplicate character '${c}' detected. Move left pointer past its previous index to restore uniqueness.`,
        variables: { l, r, duplicate: c, maxLen }
      });
    }

    seenChars.set(c, r);
    const winLen = r - l + 1;
    const isNew = winLen > maxLen;
    if (isNew) maxLen = winLen;

    steps.push({
      stepIndex: steps.length,
      description: `Expand window to [${l}, ${r}]: "${s.slice(l, r + 1)}" (Length: ${winLen}). ${isNew ? 'New Max!' : ''}`,
      state: {
        elements: chars.map((ch, idx) => ({ val: ch, status: idx >= l && idx <= r ? 'active' : 'default' })),
        left: l,
        right: r,
        windowState: isNew ? 'optimal' : 'valid',
        currentMetric: { label: 'Current Length', value: winLen },
        bestMetric: { label: 'Max Length', value: maxLen },
        conditionBadge: `Window: "${s.slice(l, r + 1)}"`
      },
      codeLine: { python: 9, java: 9 },
      explanation: `Valid unique substring of length ${winLen}. Max length is now ${maxLen}.`,
      variables: { l, r, substring: s.slice(l, r + 1), length: winLen, maxLen }
    });
  }

  return steps;
}

// 4. Binary Search Archetype Generator
export function generateBinarySearchTrace(problem, customInput = {}) {
  const nums = parseArrayInput(customInput.nums, problem.initialData?.nums || [-1, 0, 3, 5, 9, 12]);
  const target = customInput.target !== undefined ? Number(customInput.target) : (problem.initialData?.target ?? 9);

  const steps = [];
  let low = 0;
  let high = nums.length - 1;

  steps.push({
    stepIndex: 0,
    description: `Target is ${target}. Initialize Low = 0 (${nums[0]}), High = ${high} (${nums[high]}).`,
    state: {
      elements: nums.map(v => ({ val: v })),
      low,
      mid: Math.floor((low + high) / 2),
      high,
      target,
      conditionBadge: `Search space: [${low}, ${high}]`
    },
    codeLine: { python: 4, java: 5 },
    explanation: 'Binary Search halves the search space at every step by checking the middle element.',
    variables: { low, high, target },
    quiz: {
      question: `What is the middle index formula that avoids 32-bit integer overflow in languages like Java/C++?`,
      options: [
        'mid = (low + high) / 2',
        'mid = low + (high - low) / 2',
        'mid = (low * high) / 2',
        'mid = high - low'
      ],
      answer: 1,
      explanation: 'low + (high - low) / 2 avoids exceeding Integer.MAX_VALUE when low + high overflows.'
    }
  });

  let found = -1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const midVal = nums[mid];

    steps.push({
      stepIndex: steps.length,
      description: `Mid = ${mid} (nums[${mid}] = ${midVal}). Compare with Target ${target}.`,
      state: {
        elements: nums.map((v, idx) => ({ val: v, status: idx === mid ? 'active' : (idx >= low && idx <= high ? 'default' : 'visited') })),
        low,
        mid,
        high,
        target,
        conditionBadge: midVal === target ? `🎯 ${midVal} == ${target}` : (midVal < target ? `${midVal} < ${target} (Shift Right)` : `${midVal} > ${target} (Shift Left)`),
        foundIndex: midVal === target ? mid : undefined
      },
      codeLine: { python: midVal === target ? 8 : (midVal < target ? 10 : 12), java: midVal === target ? 7 : (midVal < target ? 9 : 11) },
      explanation: midVal === target
        ? `Found target ${target} at index ${mid}!`
        : (midVal < target
            ? `nums[${mid}] = ${midVal} < ${target}. Target must be in the right half. Low becomes ${mid + 1}.`
            : `nums[${mid}] = ${midVal} > ${target}. Target must be in the left half. High becomes ${mid - 1}.`),
      variables: { low, mid, high, midVal, target }
    });

    if (midVal === target) {
      found = mid;
      break;
    }
    if (midVal < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (found === -1) {
    steps.push({
      stepIndex: steps.length,
      description: `Low (${low}) > High (${high}). Target ${target} is not in the array. Return -1.`,
      state: {
        elements: nums.map(v => ({ val: v, status: 'visited' })),
        low,
        mid: -1,
        high,
        target,
        conditionBadge: 'Not Found -> Return -1'
      },
      codeLine: { python: 14, java: 13 },
      explanation: 'Search space exhausted. Target does not exist in array.',
      variables: { result: -1 }
    });
  }

  return steps;
}

// 5. Stack Archetype Generator
export function generateStackTrace(problem, customInput = {}) {
  const s = typeof customInput.s === 'string' ? customInput.s : '()[]{}';
  const chars = s.split('');
  const steps = [];
  const stack = [];
  const bracketMap = { ')': '(', ']': '[', '}': '{' };

  steps.push({
    stepIndex: 0,
    description: `Evaluate string "${s}". Initialize empty stack.`,
    state: {
      stack: [],
      inputRemaining: [...chars],
      currentInputItem: null,
      action: 'idle',
      conditionBadge: 'Stack is empty'
    },
    codeLine: { python: 5, java: 6 },
    explanation: 'Push opening brackets onto stack. For closing brackets, check if top of stack has matching opening bracket.',
    variables: { 'stack.size': 0, 'remaining': s.length },
    quiz: {
      question: 'What is the LIFO principle followed by a stack?',
      options: ['Last In, First Out', 'Last In, Fast Out', 'Least In, First Out', 'Linear Input, Fixed Output'],
      answer: 0,
      explanation: 'LIFO stands for Last In, First Out — the most recently added item is the first to be removed.'
    }
  });

  let valid = true;
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const isClosing = ch in bracketMap;

    if (!isClosing) {
      stack.push({ val: ch, id: `${ch}-${i}` });
      steps.push({
        stepIndex: steps.length,
        description: `Character '${ch}' is an open bracket. Push onto stack.`,
        state: {
          stack: [...stack],
          inputRemaining: chars.slice(i + 1),
          currentInputItem: ch,
          action: 'push',
          conditionBadge: `Pushed '${ch}' onto stack`
        },
        codeLine: { python: 12, java: 13 },
        explanation: `Open bracket '${ch}' added to stack. Stack size is now ${stack.length}.`,
        variables: { current: ch, 'stack.size': stack.length, top: ch }
      });
    } else {
      const top = stack.length > 0 ? stack[stack.length - 1].val : null;
      const expected = bracketMap[ch];
      const matches = top === expected;

      if (matches) {
        stack.pop();
        steps.push({
          stepIndex: steps.length,
          description: `Closing '${ch}' matches top '${top}'. Pop from stack!`,
          state: {
            stack: [...stack],
            inputRemaining: chars.slice(i + 1),
            currentInputItem: ch,
            action: 'match',
            matchedPair: [expected, ch],
            conditionBadge: `Matched: '${expected}' with '${ch}'`
          },
          codeLine: { python: 9, java: 10 },
          explanation: `Bracket '${ch}' closed correctly by matching '${top}'. Stack popped.`,
          variables: { current: ch, popped: top, 'stack.size': stack.length }
        });
      } else {
        valid = false;
        steps.push({
          stepIndex: steps.length,
          description: `Mismatch: '${ch}' expected '${expected}', but top was ${top ? `'${top}'` : 'EMPTY'}. Invalid!`,
          state: {
            stack: [...stack],
            inputRemaining: chars.slice(i + 1),
            currentInputItem: ch,
            action: 'mismatch',
            conditionBadge: `Mismatch on '${ch}'`
          },
          codeLine: { python: 10, java: 11 },
          explanation: `Incorrect bracket nesting or empty stack. Immediately return False.`,
          variables: { current: ch, expected, actual: top, valid: false }
        });
        break;
      }
    }
  }

  if (valid) {
    const isComplete = stack.length === 0;
    steps.push({
      stepIndex: steps.length,
      description: isComplete ? 'Stack is empty! String has valid parentheses.' : 'Unclosed brackets remain in stack! Invalid string.',
      state: {
        stack: [...stack],
        inputRemaining: [],
        action: isComplete ? 'match' : 'mismatch',
        conditionBadge: isComplete ? '✅ Valid Parentheses (True)' : '❌ Unclosed Brackets (False)'
      },
      codeLine: { python: 14, java: 15 },
      explanation: isComplete
        ? 'All open brackets were perfectly closed in correct order. Return True.'
        : 'Leftover brackets on stack indicate unclosed pairs. Return False.',
      variables: { valid: isComplete, 'finalStack.size': stack.length }
    });
  }

  return steps;
}

// 6. Linked List Archetype Generator
export function generateLinkedListTrace(problem, customInput = {}) {
  const vals = parseArrayInput(customInput.nums, problem.initialData?.nums || [1, 2, 3, 4, 5]);
  const steps = [];

  const nodes = vals.map((val, idx) => ({
    id: idx + 1,
    val,
    nextId: idx + 1 < vals.length ? idx + 2 : null
  }));

  steps.push({
    stepIndex: 0,
    description: `Linked list: [${vals.join(' -> ')}]. Initialize prev = None, curr = head (Node ${vals[0]}).`,
    state: {
      nodes: JSON.parse(JSON.stringify(nodes)),
      pointers: { prev: null, curr: 1, next: vals.length > 1 ? 2 : null },
      conditionBadge: 'prev = None, curr = head'
    },
    codeLine: { python: 6, java: 7 },
    explanation: 'We iterate through the list. For each node, we save next, flip its arrow to point backward to prev, then advance both pointers.',
    variables: { prev: 'None', curr: vals[0], next: vals[1] || 'None' },
    quiz: {
      question: 'Why do we need a temporary pointer `temp = curr.next` before reversing the arrow?',
      options: [
        'To allocate extra memory on heap',
        'Because overwriting curr.next = prev loses access to the remainder of the list',
        'To check for cycle conditions',
        'Because Python requires two assignments per loop'
      ],
      answer: 1,
      explanation: 'Once curr.next is pointed backward to prev, the forward link is severed. Storing next preserves the rest of the list.'
    }
  });

  const workingNodes = JSON.parse(JSON.stringify(nodes));
  for (let i = 0; i < vals.length; i++) {
    const currId = i + 1;
    const prevId = i > 0 ? i : null;
    const nextId = i + 1 < vals.length ? i + 2 : null;

    // Flip edge
    workingNodes[i].nextId = prevId;

    steps.push({
      stepIndex: steps.length,
      description: `Reverse Node ${vals[i]}: point next -> ${prevId ? `Node ${vals[prevId - 1]}` : 'None'}. Advance pointers.`,
      state: {
        nodes: JSON.parse(JSON.stringify(workingNodes)),
        pointers: { prev: currId, curr: nextId, next: nextId && nextId < vals.length ? nextId + 1 : null },
        conditionBadge: `Node ${vals[i]}.next -> ${prevId ? vals[prevId - 1] : 'None'}`
      },
      codeLine: { python: 10, java: 11 },
      explanation: `Arrow flipped backward! prev advances to Node ${vals[i]}, curr advances to ${nextId ? `Node ${vals[nextId - 1]}` : 'None'}.`,
      variables: { prev: vals[i], curr: nextId ? vals[nextId - 1] : 'None' }
    });
  }

  steps.push({
    stepIndex: steps.length,
    description: `curr reaches None. Return prev (Node ${vals[vals.length - 1]}) as the new reversed head!`,
    state: {
      nodes: JSON.parse(JSON.stringify(workingNodes)),
      pointers: { prev: vals.length, curr: null, newHead: vals.length },
      conditionBadge: `Reversed Head: Node ${vals[vals.length - 1]}`
    },
    codeLine: { python: 12, java: 13 },
    explanation: 'The linked list reversal is complete! Iterated in O(n) time with O(1) extra space.',
    variables: { newHead: vals[vals.length - 1] }
  });

  return steps;
}

// 7. Binary Tree Archetype Generator
export function generateTreeTrace(problem, customInput = {}) {
  const vals = parseArrayInput(customInput.nums, problem.initialData?.nums || [4, 2, 7, 1, 3, 6, 9]);
  const steps = [];

  // Build binary tree representation
  const tree = {
    id: 1, val: vals[0] ?? 4,
    left: {
      id: 2, val: vals[1] ?? 2,
      left: { id: 4, val: vals[3] ?? 1, left: null, right: null },
      right: { id: 5, val: vals[4] ?? 3, left: null, right: null }
    },
    right: {
      id: 3, val: vals[2] ?? 7,
      left: { id: 6, val: vals[5] ?? 6, left: null, right: null },
      right: { id: 7, val: vals[6] ?? 9, left: null, right: null }
    }
  };

  steps.push({
    stepIndex: 0,
    description: `Root node is ${tree.val}. Start recursive DFS traversal.`,
    state: {
      tree: JSON.parse(JSON.stringify(tree)),
      activeNodeId: 1,
      visitedNodeIds: [],
      callStack: [{ fn: 'invert(4)', nodeVal: 4, depth: 1 }],
      conditionBadge: `Visiting Root: ${tree.val}`
    },
    codeLine: { python: 4, java: 5 },
    explanation: 'Invert Binary Tree recursively visits left and right subtrees and swaps them.',
    variables: { activeNode: tree.val, 'stack.depth': 1 },
    quiz: {
      question: 'What is the base case of recursive tree traversal?',
      options: ['if node.val == 0', 'if not root: return None', 'if root.left == root.right', 'while root is not None'],
      answer: 1,
      explanation: 'When node is null/None, return to terminate recursion branch.'
    }
  });

  // Step 2: Visit left child
  steps.push({
    stepIndex: 1,
    description: `Recurse into Left Child: Node ${tree.left.val}.`,
    state: {
      tree: JSON.parse(JSON.stringify(tree)),
      activeNodeId: 2,
      visitedNodeIds: [1],
      callStack: [
        { fn: 'invert(4)', nodeVal: 4, depth: 1 },
        { fn: 'invert(2)', nodeVal: 2, depth: 2 }
      ],
      conditionBadge: `Visiting Left: ${tree.left.val}`
    },
    codeLine: { python: 6, java: 7 },
    explanation: `Recursively process subtree rooted at Node ${tree.left.val}.`,
    variables: { activeNode: tree.left.val, 'stack.depth': 2 }
  });

  // Step 3: Swap subtrees of Node 2
  const treeStep3 = JSON.parse(JSON.stringify(tree));
  const tmp2 = treeStep3.left.left;
  treeStep3.left.left = treeStep3.left.right;
  treeStep3.left.right = tmp2;

  steps.push({
    stepIndex: 2,
    description: `Swap children of Node 2: ${tree.left.left.val} ↔ ${tree.left.right.val}.`,
    state: {
      tree: treeStep3,
      activeNodeId: 2,
      visitedNodeIds: [1, 2, 4, 5],
      swappedNodeIds: [2],
      callStack: [
        { fn: 'invert(4)', nodeVal: 4, depth: 1 },
        { fn: 'invert(2)', nodeVal: 2, depth: 2 }
      ],
      conditionBadge: `Swapped children of Node 2`
    },
    codeLine: { python: 8, java: 9 },
    explanation: `Node 2 now has left child ${treeStep3.left.left.val} and right child ${treeStep3.left.right.val}.`,
    variables: { swappedNode: 2, left: treeStep3.left.left.val, right: treeStep3.left.right.val }
  });

  // Step 4: Visit right subtree of root
  steps.push({
    stepIndex: 3,
    description: `Recurse into Right Child: Node ${tree.right.val}.`,
    state: {
      tree: treeStep3,
      activeNodeId: 3,
      visitedNodeIds: [1, 2, 4, 5],
      callStack: [
        { fn: 'invert(4)', nodeVal: 4, depth: 1 },
        { fn: 'invert(7)', nodeVal: 7, depth: 2 }
      ],
      conditionBadge: `Visiting Right: ${tree.right.val}`
    },
    codeLine: { python: 7, java: 8 },
    explanation: `Recursively process subtree rooted at Node ${tree.right.val}.`,
    variables: { activeNode: tree.right.val, 'stack.depth': 2 }
  });

  // Step 5: Swap subtrees of Node 7
  const treeStep5 = JSON.parse(JSON.stringify(treeStep3));
  const tmp3 = treeStep5.right.left;
  treeStep5.right.left = treeStep5.right.right;
  treeStep5.right.right = tmp3;

  steps.push({
    stepIndex: 4,
    description: `Swap children of Node 7: ${tree.right.left.val} ↔ ${tree.right.right.val}.`,
    state: {
      tree: treeStep5,
      activeNodeId: 3,
      visitedNodeIds: [1, 2, 4, 5, 3, 6, 7],
      swappedNodeIds: [2, 3],
      callStack: [
        { fn: 'invert(4)', nodeVal: 4, depth: 1 },
        { fn: 'invert(7)', nodeVal: 7, depth: 2 }
      ],
      conditionBadge: `Swapped children of Node 7`
    },
    codeLine: { python: 8, java: 9 },
    explanation: `Node 7 now has left child ${treeStep5.right.left.val} and right child ${treeStep5.right.right.val}.`,
    variables: { swappedNode: 7, left: treeStep5.right.left.val, right: treeStep5.right.right.val }
  });

  // Step 6: Swap children of root
  const treeFinal = JSON.parse(JSON.stringify(treeStep5));
  const tmpRoot = treeFinal.left;
  treeFinal.left = treeFinal.right;
  treeFinal.right = tmpRoot;

  steps.push({
    stepIndex: 5,
    description: `Swap main branches of Root Node 4: Left branch ↔ Right branch!`,
    state: {
      tree: treeFinal,
      activeNodeId: 1,
      visitedNodeIds: [1, 2, 3, 4, 5, 6, 7],
      swappedNodeIds: [1, 2, 3],
      callStack: [{ fn: 'invert(4)', nodeVal: 4, depth: 1 }],
      conditionBadge: 'Root swap complete'
    },
    codeLine: { python: 8, java: 9 },
    explanation: 'The entire tree has been inverted! Both subtrees are swapped and returned.',
    variables: { complete: true, rootLeft: treeFinal.left.val, rootRight: treeFinal.right.val }
  });

  return steps;
}

// 8. 2D Matrix Archetype Generator (e.g. Number of Islands 0200)
export function generateMatrixTrace(problem, customInput = {}) {
  const grid = customInput.grid || [
    ['1', '1', '0', '0'],
    ['1', '0', '0', '1'],
    ['0', '0', '1', '1']
  ];

  const steps = [];
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let islandCount = 0;

  steps.push({
    stepIndex: 0,
    description: `Matrix Grid ${rows}x${cols}. Scan cells row by row for unvisited land ('1').`,
    state: {
      grid: grid.map(r => [...r]),
      activeCell: null,
      visitedCells: [],
      islandCount: 0,
      conditionBadge: 'Starting grid scan'
    },
    codeLine: { python: 5, java: 6 },
    explanation: 'Whenever we encounter an unvisited land cell, increment island count and run flood fill (DFS/BFS) to mark all connected land.',
    variables: { rows, cols, islandCount: 0 },
    quiz: {
      question: 'Why do we mark visited land cells as water or visited during BFS/DFS?',
      options: [
        'To speed up rendering',
        'To prevent infinite loops and double-counting the same island',
        'To compress matrix size',
        'Because grid edges are walls'
      ],
      answer: 1,
      explanation: 'Marking visited ensures each connected component (island) is counted exactly once and avoids infinite recursion.'
    }
  });

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = `${r},${c}`;
      if (grid[r][c] === '1' && !visited.has(key)) {
        islandCount++;
        // Flood fill simulation
        const flood = [];
        const q = [[r, c]];
        visited.add(key);

        while (q.length > 0) {
          const [cr, cc] = q.shift();
          flood.push([cr, cc]);

          const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
          for (const [dr, dc] of dirs) {
            const nr = cr + dr;
            const nc = cc + dc;
            const nkey = `${nr},${nc}`;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === '1' && !visited.has(nkey)) {
              visited.add(nkey);
              q.push([nr, nc]);
            }
          }
        }

        steps.push({
          stepIndex: steps.length,
          description: `Discovered Island #${islandCount} at cell [${r}, ${c}]! Flood-filling connected land.`,
          state: {
            grid: grid.map(row => [...row]),
            activeCell: [r, c],
            visitedCells: Array.from(visited).map(k => k.split(',').map(Number)),
            islandCount,
            conditionBadge: `Island #${islandCount} found!`
          },
          codeLine: { python: 9, java: 10 },
          explanation: `Found land at [${r}, ${c}]. Flood-filled ${flood.length} connected cell(s) via DFS. Island count = ${islandCount}.`,
          variables: { 'cell': `[${r}, ${c}]`, islandCount, visitedCount: visited.size }
        });
      }
    }
  }

  steps.push({
    stepIndex: steps.length,
    description: `Full scan complete. Total islands found = ${islandCount}.`,
    state: {
      grid: grid.map(row => [...row]),
      activeCell: null,
      visitedCells: Array.from(visited).map(k => k.split(',').map(Number)),
      islandCount,
      conditionBadge: `Final Island Count: ${islandCount}`
    },
    codeLine: { python: 14, java: 15 },
    explanation: `All cells examined in O(m * n) time. Result = ${islandCount}.`,
    variables: { result: islandCount }
  });

  return steps;
}

// 9. Dynamic Programming Archetype Generator (e.g. Climbing Stairs 0070)
export function generateDpTrace(problem, customInput = {}) {
  const n = customInput.n !== undefined ? Number(customInput.n) : (problem.initialData?.n || 5);
  const steps = [];
  const dp = [1, 2];

  steps.push({
    stepIndex: 0,
    description: `Climbing ${n} stairs. Base cases: dp[1] = 1 way, dp[2] = 2 ways.`,
    state: {
      table: [
        { index: '1', val: 1, status: 'computed' },
        { index: '2', val: 2, status: 'computed' },
        ...Array.from({ length: Math.max(0, n - 2) }, (_, i) => ({ index: `${i + 3}`, val: '?', status: 'uncomputed' }))
      ],
      formula: 'dp[i] = dp[i-1] + dp[i-2]',
      dependencies: [],
      currentIndex: '2',
      conditionBadge: 'Base cases defined'
    },
    codeLine: { python: 4, java: 5 },
    explanation: 'From stair i, you can take a 1-step jump (from i-1) or a 2-step jump (from i-2). Therefore dp[i] = dp[i-1] + dp[i-2].',
    variables: { n, 'dp[1]': 1, 'dp[2]': 2 },
    quiz: {
      question: 'Why does Climbing Stairs follow the Fibonacci recurrence relation?',
      options: [
        'Because stairs are ordered linearly',
        'Because to reach stair n, you must arrive from either stair n-1 (1 step) or n-2 (2 steps)',
        'Because dynamic programming always creates Fibonacci sequences',
        'Because of memoization cache keys'
      ],
      answer: 1,
      explanation: 'Any valid path to step n ends in either a 1-step move from n-1 or a 2-step move from n-2, which are mutually exclusive.'
    }
  });

  for (let i = 3; i <= n; i++) {
    const nextVal = dp[dp.length - 1] + dp[dp.length - 2];
    dp.push(nextVal);

    steps.push({
      stepIndex: steps.length,
      description: `Compute stair ${i}: dp[${i}] = dp[${i - 1}] (${dp[i - 2]}) + dp[${i - 2}] (${dp[i - 3]}) = ${nextVal}.`,
      state: {
        table: [
          ...dp.map((v, idx) => ({
            index: `${idx + 1}`,
            val: v,
            status: idx + 1 === i ? 'current' : (idx + 1 === i - 1 || idx + 1 === i - 2 ? 'dependent' : 'computed')
          })),
          ...Array.from({ length: Math.max(0, n - i) }, (_, k) => ({ index: `${i + k + 1}`, val: '?', status: 'uncomputed' }))
        ],
        formula: `dp[${i}] = ${dp[i - 2]} + ${dp[i - 3]} = ${nextVal}`,
        dependencies: [i - 1, i - 2],
        currentIndex: `${i}`,
        conditionBadge: `dp[${i}] = ${nextVal} ways`
      },
      codeLine: { python: 6, java: 7 },
      explanation: `Calculated ways for step ${i} using memoized subproblems. Transitions in O(1) per step.`,
      variables: { i, 'dp[i]': nextVal }
    });
  }

  steps.push({
    stepIndex: steps.length,
    description: `Optimal solution for ${n} stairs = ${dp[dp.length - 1]} distinct ways!`,
    state: {
      table: dp.map((v, idx) => ({ index: `${idx + 1}`, val: v, status: idx + 1 === n ? 'current' : 'computed' })),
      formula: `Final: ${dp[dp.length - 1]} ways`,
      dependencies: [],
      currentIndex: `${n}`,
      conditionBadge: `Result: ${dp[dp.length - 1]} ways`
    },
    codeLine: { python: 8, java: 9 },
    explanation: `Calculated in O(n) time and O(1) optimized space.`,
    variables: { result: dp[dp.length - 1] }
  });

  return steps;
}

// 10. Bit Manipulation Archetype Generator (e.g. Number of 1 Bits 0191)
export function generateBitTrace(problem, customInput = {}) {
  const n = customInput.n !== undefined ? Number(customInput.n) : (problem.initialData?.n || 11);
  const steps = [];

  let current = n;
  let count = 0;
  const toBits = (val) => (val >>> 0).toString(2).padStart(32, '0');

  steps.push({
    stepIndex: 0,
    description: `Number ${n} in binary: ${toBits(n)}. Initialize 1-bit count = 0.`,
    state: {
      registerBits: toBits(n),
      count: 0,
      operation: 'INIT',
      conditionBadge: `Binary: ${toBits(n).slice(-8)}`
    },
    codeLine: { python: 4, java: 5 },
    explanation: 'We count 1-bits using Brian Kernighan algorithm: n = n & (n - 1) clears the lowest set bit in each step.',
    variables: { n, count: 0 },
    quiz: {
      question: 'What does the bitwise operation `n & (n - 1)` do?',
      options: [
        'Divides n by 2',
        'Clears the lowest set bit (rightmost 1)',
        'Inverts all bits',
        'Checks if n is odd'
      ],
      answer: 1,
      explanation: 'Subtracting 1 flips all bits after the lowest 1 (and the lowest 1 itself). ANDing with original clears that single 1.'
    }
  });

  while (current > 0) {
    const prev = current;
    current = current & (current - 1);
    count++;

    steps.push({
      stepIndex: steps.length,
      description: `Step ${count}: Clear lowest set bit. n = n & (n - 1). Count = ${count}.`,
      state: {
        registerBits: toBits(current),
        count,
        operation: 'n & (n - 1)',
        conditionBadge: `Cleared lowest 1. Count = ${count}`
      },
      codeLine: { python: 6, java: 7 },
      explanation: `Cleared lowest set bit of ${prev} to get ${current}. Count incremented to ${count}.`,
      variables: { prev, current, count }
    });
  }

  steps.push({
    stepIndex: steps.length,
    description: `Register is now 0. Total Hamming Weight (Number of 1 Bits) = ${count}.`,
    state: {
      registerBits: toBits(0),
      count,
      operation: 'COMPLETE',
      conditionBadge: `Result: ${count} set bits`
    },
    codeLine: { python: 8, java: 9 },
    explanation: `Counted all set bits in O(k) time where k is number of 1-bits!`,
    variables: { result: count }
  });

  return steps;
}

// Archetype Classifier
export function getProblemArchetype(problem) {
  const cat = problem?.categoryId;
  const num = problem?.num;
  const tags = problem?.tags || [];

  if (cat === 'trees' || tags.includes('Tree') || tags.includes('Binary Tree') || tags.includes('BST')) {
    return 'trees';
  }
  if (cat === 'linked-list' || tags.includes('Linked List')) {
    return 'linked-list';
  }
  if (cat === 'stack' || tags.includes('Stack')) {
    return 'stack';
  }
  if (cat === 'heap' || tags.includes('Heap') || tags.includes('Priority Queue')) {
    return 'heap';
  }
  if (cat === 'sliding-window') {
    return 'sliding-window';
  }
  if (cat === 'two-pointers') {
    return 'two-pointers';
  }
  if (cat === 'binary-search') {
    return 'binary-search';
  }
  if (cat === 'graphs') {
    if (['0200', '0130', '0417', '0994', '0289'].includes(num) || tags.includes('Matrix')) {
      return 'matrix';
    }
    return 'graphs';
  }
  if (cat === 'dp') {
    return 'dp';
  }
  if (cat === 'intervals') {
    return 'intervals';
  }
  if (cat === 'math') {
    if (['0191', '0338', '0190', '0136', '0268', '0371'].includes(num) || tags.includes('Bit Manipulation')) {
      return 'bit-manipulation';
    }
    return 'math';
  }
  if (cat === 'backtracking') {
    if (['0079', '0051', '0052', '0036'].includes(num) || tags.includes('Matrix')) {
      return 'matrix';
    }
    return 'dp';
  }
  if (['0036', '0074', '0048', '0054', '0073'].includes(num)) {
    return 'matrix';
  }
  return 'arrays';
}

// Master Trace Generator
export function generateExecutionTrace(problem, customInput = {}) {
  const archetype = getProblemArchetype(problem);

  switch (archetype) {
    case 'two-pointers':
      return { archetype, steps: generateTwoPointersTrace(problem, customInput) };
    case 'sliding-window':
      return { archetype, steps: generateSlidingWindowTrace(problem, customInput) };
    case 'binary-search':
      return { archetype, steps: generateBinarySearchTrace(problem, customInput) };
    case 'stack':
      return { archetype, steps: generateStackTrace(problem, customInput) };
    case 'linked-list':
      return { archetype, steps: generateLinkedListTrace(problem, customInput) };
    case 'trees':
      return { archetype, steps: generateTreeTrace(problem, customInput) };
    case 'matrix':
      return { archetype, steps: generateMatrixTrace(problem, customInput) };
    case 'dp':
      return { archetype, steps: generateDpTrace(problem, customInput) };
    case 'bit-manipulation':
      return { archetype, steps: generateBitTrace(problem, customInput) };
    case 'arrays':
    default:
      return { archetype: 'arrays', steps: generateArrayHashTrace(problem, customInput) };
  }
}
