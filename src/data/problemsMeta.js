// Auto-generated problem metadata mapped from visual HTML and Python solution docstrings

export const PROBLEMS_META = {
  "0001": {
    "shortDescription": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Use a hash map for O(n) solution.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Think of it like finding two puzzle pieces that fit together. Instead of checking every pair, we use a <strong>hash map</strong> as our \"memory\".</p>\n            <ul>\n                <li><strong>For each number:</strong> Calculate what partner we need (target - current)</li>\n                <li><strong>Check memory:</strong> Have we seen this partner before?</li>\n                <li><strong>Found it?</strong> Return both indices immediately</li>\n                <li><strong>Not found?</strong> Remember current number and continue</li>\n            </ul>",
    "fullProblemStatement": "1. Two Sum\nhttps://leetcode.com/problems/two-sum/\n\nGiven an array of integers nums and an integer target, return indices of the \ntwo numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may \nnot use the same element twice.\n\nTime Complexity: O(n)\nSpace Complexity: O(n)",
    "tags": [
      "\ud83d\udcca Array",
      "\ud83d\uddc2\ufe0f Hash Map"
    ]
  },
  "0036": {
    "shortDescription": "Determine if a 9x9 Sudoku board is valid. Only filled cells need to be validated according to the rules: each row, column, and 3x3 sub-box must contain digits 1-9 without repetition.",
    "timeComplexity": "O(n\u00b2)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Checking a Sudoku board with <strong>hash sets</strong>:</p>\n            <ul>\n                <li><strong>Rows:</strong> One set of seen digits per row</li>\n                <li><strong>Columns:</strong> One set of seen digits per column</li>\n                <li><strong>Boxes:</strong> One set per 3x3 box</li>\n                <li><strong>Invalid:</strong> A digit already in any of its three sets</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Valid Sudoku\n\nProblem from LeetCode: https://leetcode.com/problems/valid-sudoku/\n\nDescription:\nDetermine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:\n1. Each row must contain the digits 1-9 without repetition.\n2. Each column must contain the digits 1-9 without repetition.\n3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.\n\nNote:\n- A Sudoku board (partially filled) could be valid but is not necessarily solvable.\n- Only the filled cells need to be validated according to the mentioned rules.\n\nExample 1:\nInput: board = \n[[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"]\n,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"]\n,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"]\n,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"]\n,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"]\n,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"]\n,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"]\n,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"]\n,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]\nOutput: true\n\nExample 2:\nInput: board = \n[[\"8\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"]\n,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"]\n,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"]\n,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"]\n,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"]\n,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"]\n,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"]\n,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"]\n,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]\nOutput: false\nExplanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.",
    "tags": [
      "\ud83d\uddc2\ufe0f Hash Set",
      "\ud83d\udd32 Matrix"
    ]
  },
  "0049": {
    "shortDescription": "Given an array of strings, group the anagrams together. An anagram is a word formed by rearranging the letters of another word using all original letters exactly once.",
    "timeComplexity": "O(n\u00b7k log k)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine you have a bunch of word tiles. Words like \"eat\", \"tea\", and \"ate\" all use the same letters: e, a, and t. The trick is to <strong>sort the letters</strong> of each word alphabetically. When sorted, all anagrams become the same string!</p>\n            <ul>\n                <li><strong>eat \u2192 aet</strong> (sorted)</li>\n                <li><strong>tea \u2192 aet</strong> (sorted) - Same key!</li>\n                <li><strong>ate \u2192 aet</strong> (sorted) - Same key!</li>\n                <li><strong>bat \u2192 abt</strong> (sorted) - Different key</li>\n            </ul>\n            <p>We use the sorted string as a \"bucket label\" and group all words with the same label together.</p>",
    "fullProblemStatement": "LeetCode Group Anagrams\n\nProblem from LeetCode: https://leetcode.com/problems/group-anagrams/\n\nDescription:\nGiven an array of strings strs, group the anagrams together. You can return the answer in any order.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.\n\nExample 1:\nInput: strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\nOutput: [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]\n\nExample 2:\nInput: strs = [\"\"]\nOutput: [[\"\"]]\n\nExample 3:\nInput: strs = [\"a\"]\nOutput: [[\"a\"]]",
    "tags": [
      "\ud83d\udcc1 Array",
      "\ud83d\udd24 Hash Map",
      "\ud83d\udcca Sorting"
    ]
  },
  "0088": {
    "shortDescription": "Given two integer arrays nums1 and nums2, sorted in non-decreasing order, merge nums2 into nums1 as one sorted array. The number of elements initialized in nums1 is m, and in nums2 is n. nums1 has enough space to hold m + n elements.",
    "timeComplexity": "O(m + n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Merging two sorted arrays <strong>from the back</strong>:</p>\n            <ul>\n                <li><strong>Three pointers:</strong> One at the end of each array's data, one at the last slot of nums1</li>\n                <li><strong>Pick the larger:</strong> Write the bigger tail value into the last free slot</li>\n                <li><strong>Move left:</strong> Shift the pointers that were used</li>\n                <li><strong>No overwrite:</strong> Writing from the back never destroys unread values</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Merge Sorted Array\n\nProblem from LeetCode: https://leetcode.com/problems/merge-sorted-array/\n\nDescription:\nYou are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.\nMerge nums1 and nums2 into a single array sorted in non-decreasing order.\nThe final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.\n\nExample 1:\nInput: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\nOutput: [1,2,2,3,5,6]\nExplanation: The arrays we are merging are [1,2,3] and [2,5,6].\nThe result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.\n\nExample 2:\nInput: nums1 = [1], m = 1, nums2 = [], n = 0\nOutput: [1]\nExplanation: The arrays we are merging are [1] and [].\nThe result of the merge is [1].\n\nExample 3:\nInput: nums1 = [0], m = 0, nums2 = [1], n = 1\nOutput: [1]\nExplanation: The arrays we are merging are [] and [1].\nThe result of the merge is [1].\nNote that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.",
    "tags": [
      "\ud83d\udcca Array",
      "\ud83d\udc49 Two Pointers"
    ]
  },
  "0118": {
    "shortDescription": "Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it.",
    "timeComplexity": "O(n\u00b2)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Each row starts and ends with 1, and every inner number is the sum of the two numbers above it.</p>\n            <ul>\n                <li><strong>First row:</strong> Start with <code>[1]</code></li>\n                <li><strong>New row:</strong> Begin with 1, add <code>prev[j - 1] + prev[j]</code> for each inner spot, end with 1</li>\n                <li><strong>Repeat:</strong> Continue until there are <code>numRows</code> rows</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 118. Pascal's Triangle\n\nProblem from LeetCode: https://leetcode.com/problems/pascals-triangle/\n\nDescription:\nGiven an integer numRows, return the first numRows of Pascal's triangle.\n\nIn Pascal's triangle, each number is the sum of the two numbers directly above it.\n\nExample 1:\nInput: numRows = 5\nOutput: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]\n\nExample 2:\nInput: numRows = 1\nOutput: [[1]]\n\nConstraints:\n- 1 <= numRows <= 30",
    "tags": [
      "\ud83d\udcdd Algorithm"
    ]
  },
  "0128": {
    "shortDescription": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. Must run in O(n) time.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine you have scattered puzzle pieces numbered 1, 2, 3, 4, 100, 200. You want to find the longest chain of consecutive numbers.</p>\n            <ul>\n                <li><strong>Step 1:</strong> Put all numbers in a set for fast lookup</li>\n                <li><strong>Step 2:</strong> For each number, check if it's the START of a sequence (no number before it)</li>\n                <li><strong>Step 3:</strong> If it's a start, count how far the sequence goes (1\u21922\u21923\u21924...)</li>\n                <li><strong>Step 4:</strong> Track the longest chain found</li>\n            </ul>\n            <p>The key insight: Only start counting from sequence starts (where n-1 doesn't exist). This ensures O(n) time!</p>",
    "fullProblemStatement": "LeetCode Longest Consecutive Sequence\n\nProblem from LeetCode: https://leetcode.com/problems/longest-consecutive-sequence/\n\nDescription:\nGiven an unsorted array of integers nums, return the length of the longest consecutive elements sequence.\nYou must write an algorithm that runs in O(n) time.\n\nExample 1:\nInput: nums = [100,4,200,1,3,2]\nOutput: 4\nExplanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.\n\nExample 2:\nInput: nums = [0,3,7,2,5,8,4,6,0,1]\nOutput: 9",
    "tags": [
      "\ud83d\udcc1 Array",
      "\ud83d\udd24 Hash Set"
    ]
  },
  "0217": {
    "shortDescription": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Think of it like checking names at a party entrance:</p>\n            <ul>\n                <li>You have a guest list (empty set at first)</li>\n                <li>As each person arrives, you check: \"Have I seen this person before?\"</li>\n                <li>If <strong>YES</strong> \u2192 Duplicate found! Return true</li>\n                <li>If <strong>NO</strong> \u2192 Add their name to the list and continue</li>\n                <li>If everyone enters without a repeat \u2192 No duplicates, return false</li>\n            </ul>\n            <p>The <strong>set</strong> provides O(1) lookup, making this very efficient!</p>",
    "fullProblemStatement": "LeetCode 217: Contains Duplicate\n\nProblem from LeetCode: https://leetcode.com/problems/contains-duplicate/\n\nGiven an integer array nums, return true if any value appears at least twice in the array, \nand return false if every element is distinct.\n\nExample 1:\nInput: nums = [1,2,3,1]\nOutput: true\n\nExample 2:\nInput: nums = [1,2,3,4]\nOutput: false\n\nExample 3:\nInput: nums = [1,1,1,3,3,4,3,2,4,2]\nOutput: true\n\nConstraints:\n- 1 <= nums.length <= 10^5\n- -10^9 <= nums[i] <= 10^9",
    "tags": [
      "\ud83d\udcc1 Array",
      "\ud83d\udd24 Hash Set"
    ]
  },
  "0238": {
    "shortDescription": "Problem: Given an integer array nums, return an array where each element is the product of all elements except itself. No division allowed!",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>For each position, multiply everything on its left by everything on its right, without using division.</p>\n            <ul>\n                <li><strong>Left pass:</strong> Store the running product of the elements before each index</li>\n                <li><strong>Right pass:</strong> Multiply in the running product of the elements after each index</li>\n                <li><strong>Result:</strong> Each slot holds the product of all other numbers</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 238. Product of Array Except Self\n\nProblem from LeetCode: https://leetcode.com/problems/product-of-array-except-self/\n\nDescription:\nGiven an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].\n\nThe product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.\n\nYou must write an algorithm running in O(n) time and without using the division operation.\n\nExample 1:\nInput: nums = [1,2,3,4]\nOutput: [24,12,8,6]\n\nExample 2:\nInput: nums = [-1,1,0,-3,3]\nOutput: [0,0,9,0,0]\n\nConstraints:\n- 2 <= nums.length <= 10^5\n- -30 <= nums[i] <= 30\n- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.\n\nFollow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)",
    "tags": [
      "\ud83d\udcca Array"
    ]
  },
  "0242": {
    "shortDescription": "Problem: Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram uses all the original letters exactly once.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Comparing letters with <strong>character counts</strong>:</p>\n            <ul>\n                <li><strong>Length:</strong> Different lengths can never be anagrams</li>\n                <li><strong>Count:</strong> Add one for each letter of s, subtract one for each letter of t</li>\n                <li><strong>Check:</strong> All counts must end at zero</li>\n                <li><strong>Cost:</strong> One pass over each string</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 242. Valid Anagram\n\nProblem from LeetCode: https://leetcode.com/problems/valid-anagram/\n\nDescription:\nGiven two strings s and t, return true if t is an anagram of s, and false otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.\n\nExample 1:\nInput: s = \"anagram\", t = \"nagaram\"\nOutput: true\n\nExample 2:\nInput: s = \"rat\", t = \"car\"\nOutput: false\n\nConstraints:\n- 1 <= s.length, t.length <= 5 * 10^4\n- s and t consist of lowercase English letters.\n\nFollow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83d\uddc2\ufe0f Hash Map"
    ]
  },
  "0271": {
    "shortDescription": "Design an algorithm to encode a list of strings to a single string, then decode it back. The trick is handling strings that may contain any character, including delimiters!",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Problem:</strong> How do you combine multiple strings into one, then split them back? You can't just use a comma\u2014what if a string contains a comma?</li>\n                <li><strong>Solution:</strong> Before each string, write its length followed by #. Like \"5#Hello5#World\"</li>\n                <li><strong>Encoding:</strong> For each string, prepend \"[length]#\" so we know exactly how many characters to read</li>\n                <li><strong>Decoding:</strong> Read until #, get the length, read that many characters, repeat</li>\n                <li><strong>Why it works:</strong> Even if a string contains \"#\" or numbers, we always know exactly how many characters belong to each string</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 271. Encode and Decode Strings\n\nProblem from LeetCode: https://leetcode.com/problems/encode-and-decode-strings/\n\nDescription:\nDesign an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.\n\nMachine 1 (sender) has the function:\nstring encode(vector<string> strs) {\n  // ... your code\n  return encoded_string;\n}\n\nMachine 2 (receiver) has the function:\nvector<string> decode(string s) {\n  //... your code\n  return strs;\n}\n\nSo Machine 1 does:\nstring encoded_string = encode(strs);\n\nand Machine 2 does:\nvector<string> strs2 = decode(encoded_string);\n\nstrs2 in Machine 2 should be the same as strs in Machine 1.\n\nImplement the encode and decode methods.\n\nYou are not allowed to solve the problem using any serialize methods (such as eval).\n\nExample 1:\nInput: dummy_input = [\"Hello\",\"World\"]\nOutput: [\"Hello\",\"World\"]\nExplanation:\nMachine 1:\nCodec encoder = new Codec();\nString msg = encoder.encode(strs);\nMachine 1 ---msg---> Machine 2\n\nMachine 2:\nCodec decoder = new Codec();\nString[] strs = decoder.decode(msg);\n\nExample 2:\nInput: dummy_input = [\"\"]\nOutput: [\"\"]",
    "tags": [
      "\ud83d\udcc1 Array & Hashing",
      "\ud83d\udd24 String Encoding"
    ]
  },
  "0347": {
    "shortDescription": "Problem: Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    "timeComplexity": "O(n log k)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A heap is like a <strong>priority queue</strong> - always access the best element:</p>\n            <ul>\n                <li><strong>Min heap:</strong> Smallest element always on top</li>\n                <li><strong>Max heap:</strong> Largest element always on top</li>\n                <li><strong>Insert/Remove:</strong> O(log n) to maintain order</li>\n                <li><strong>Use case:</strong> Great for \"top K\" problems</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Top K Frequent Elements\n\nProblem from LeetCode: https://leetcode.com/problems/top-k-frequent-elements/\n\nDescription:\nGiven an integer array nums and an integer k, return the k most frequent elements. \nYou may return the answer in any order.\n\nExample 1:\nInput: nums = [1,1,1,2,2,3], k = 2\nOutput: [1,2]\n\nExample 2:\nInput: nums = [1], k = 1\nOutput: [1]\n\nConstraints:\n1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\nk is in the range [1, the number of unique elements in the array].\nIt is guaranteed that the answer is unique.\n\nFollow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.",
    "tags": [
      "\u26f0\ufe0f Heap"
    ]
  },
  "0953": {
    "shortDescription": "In an alien language, the alphabet order is different. Given a list of words and the alien alphabet order, check if the words are sorted lexicographically in this alien language.",
    "timeComplexity": "O(n \u00d7 m)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Alien Alphabet:</strong> Instead of a-b-c-d..., aliens might use h-l-a-b... as their order</li>\n                <li><strong>Lexicographic Order:</strong> Like dictionary order, but using the alien alphabet</li>\n                <li><strong>Comparison:</strong> Compare adjacent words character by character</li>\n                <li><strong>Rule 1:</strong> If first different character in word1 comes AFTER word2's in alien order \u2192 NOT sorted</li>\n                <li><strong>Rule 2:</strong> If word1 is longer but word2 is a prefix of word1 (like \"apple\" vs \"app\") \u2192 NOT sorted</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Verifying An Alien Dictionary\n\nProblem from LeetCode: https://leetcode.com/problems/verifying-an-alien-dictionary/\n\nIn an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. \nThe order of the alphabet is some permutation of lowercase letters.\n\nGiven a sequence of words written in the alien language, and the order of the alphabet, \nreturn true if and only if the given words are sorted lexicographically in this alien language.\n\nExample 1:\nInput: words = [\"hello\",\"leetcode\"], order = \"hlabcdefgijkmnopqrstuvwxyz\"\nOutput: true\nExplanation: As 'h' comes before 'l' in this language, then the sequence is sorted.\n\nExample 2:\nInput: words = [\"word\",\"world\",\"row\"], order = \"worldabcefghijkmnpqstuvxyz\"\nOutput: false\nExplanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.\n\nExample 3:\nInput: words = [\"apple\",\"app\"], order = \"abcdefghijklmnopqrstuvwxyz\"\nOutput: false\nExplanation: The first three characters \"app\" match, and the second string is shorter (in size.) \nAccording to lexicographical rules \"apple\" > \"app\", because 'l' > '\u2205', where '\u2205' is defined as the blank character \nwhich is less than any other character.\n\nConstraints:\n- 1 <= words.length <= 100\n- 1 <= words[i].length <= 20\n- order.length == 26\n- All characters in words[i] and order are English lowercase letters.",
    "tags": [
      "\ud83d\udcc1 Array & Hashing",
      "\ud83d\udd24 String"
    ]
  },
  "0011": {
    "shortDescription": "Given n vertical lines, find two lines that together with the x-axis form a container that holds the most water.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine vertical walls of different heights. You want to find two walls that can hold the most water between them.</p>\n            <ul>\n                <li><strong>Start with widest:</strong> Begin with pointers at both ends (maximum width)</li>\n                <li><strong>Calculate area:</strong> Area = width \u00d7 min(left height, right height)</li>\n                <li><strong>Move the shorter one:</strong> The shorter wall limits the water level, so move that pointer inward</li>\n                <li><strong>Why?</strong> Moving the taller wall can only decrease area (width shrinks, height stays same or less)</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Container With Most Water\n\nProblem from LeetCode: https://leetcode.com/problems/container-with-most-water/\n\nDescription:\nYou are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\nReturn the maximum amount of water a container can store.\nNotice that you may not slant the container.\n\nExample 1:\nInput: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49\nExplanation: The vertical lines are represented by array [1,8,6,2,5,4,8,3,7].\nIn this case, the max area of water (blue section) the container can contain is 49.\n\nExample 2:\nInput: height = [1,1]\nOutput: 1",
    "tags": [
      "\ud83d\udcc1 Array",
      "\ud83d\udc49\ud83d\udc48 Two Pointers"
    ]
  },
  "0015": {
    "shortDescription": "Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] where i \u2260 j \u2260 k and nums[i] + nums[j] + nums[k] == 0.",
    "timeComplexity": "O(n\u00b2)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>We want to find three numbers that add up to zero. The trick is:</p>\n            <ul>\n                <li><strong>Sort first:</strong> This lets us use two pointers efficiently</li>\n                <li><strong>Fix one number:</strong> For each number, find two others that complete the sum</li>\n                <li><strong>Two pointers:</strong> After fixing one number, use left/right pointers on the rest</li>\n                <li><strong>Adjust pointers:</strong> If sum too small \u2192 move left up. If too big \u2192 move right down</li>\n                <li><strong>Skip duplicates:</strong> To avoid duplicate triplets</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 3Sum\n\nProblem from LeetCode: https://leetcode.com/problems/3sum/\n\nDescription:\nGiven an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\nNotice that the solution set must not contain duplicate triplets.\n\nExample 1:\nInput: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]\nExplanation: \nnums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.\nnums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\nnums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\nThe distinct triplets are [-1,0,1] and [-1,-1,2].\nNotice that the order of the output and the order of the triplets does not matter.\n\nExample 2:\nInput: nums = [0,1,1]\nOutput: []\nExplanation: The only possible triplet does not sum up to 0.\n\nExample 3:\nInput: nums = [0,0,0]\nOutput: [[0,0,0]]\nExplanation: The only possible triplet sums up to 0.",
    "tags": [
      "\ud83d\udcc1 Array",
      "\ud83d\udc49\ud83d\udc48 Two Pointers",
      "\ud83d\udcca Sorting"
    ]
  },
  "0042": {
    "shortDescription": "Given n non-negative integers representing an elevation map where width of each bar is 1, compute how much water it can trap after raining.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine the elevation map as valleys between mountains. Water fills in the valleys.</p>\n            <ul>\n                <li><strong>Key insight:</strong> Water at any position = min(max_left, max_right) - current_height</li>\n                <li><strong>Two pointers:</strong> Start from both ends, track max heights seen from each side</li>\n                <li><strong>Move the smaller side:</strong> If left_max < right_max, water level at left is limited by left_max</li>\n                <li><strong>Calculate trapped:</strong> At each position, water = max_on_this_side - height</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Trapping Rain Water\n\nProblem from LeetCode: https://leetcode.com/problems/trapping-rain-water/\n\nDescription:\nGiven n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\nExample 1:\nInput: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6\nExplanation: The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are trapped.\n\nExample 2:\nInput: height = [4,2,0,3,2,5]\nOutput: 9",
    "tags": [
      "\ud83d\udcc1 Array",
      "\ud83d\udc49\ud83d\udc48 Two Pointers"
    ]
  },
  "0125": {
    "shortDescription": "A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A palindrome reads the same forwards and backwards (like \"racecar\" or \"A man, a plan, a canal: Panama\").</p>\n            <ul>\n                <li><strong>Two pointers:</strong> Start at both ends of the string</li>\n                <li><strong>Skip junk:</strong> Ignore spaces, punctuation, etc. (only compare letters and numbers)</li>\n                <li><strong>Compare:</strong> Check if characters match (ignoring case)</li>\n                <li><strong>If mismatch:</strong> Not a palindrome \u2192 return False</li>\n                <li><strong>If pointers meet:</strong> It's a palindrome \u2192 return True</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Valid Palindrome\n\nProblem from LeetCode: https://leetcode.com/problems/valid-palindrome/\n\nDescription:\nA phrase is a palindrome if, after converting all uppercase letters into lowercase letters \nand removing all non-alphanumeric characters, it reads the same forward and backward. \nAlphanumeric characters include letters and numbers.\n\nGiven a string s, return true if it is a palindrome, or false otherwise.\n\nExample 1:\nInput: s = \"A man, a plan, a canal: Panama\"\nOutput: true\nExplanation: \"amanaplanacanalpanama\" is a palindrome.\n\nExample 2:\nInput: s = \"race a car\"\nOutput: false\nExplanation: \"raceacar\" is not a palindrome.\n\nExample 3:\nInput: s = \" \"\nOutput: true\nExplanation: s is an empty string \"\" after removing non-alphanumeric characters.\nSince an empty string reads the same forward and backward, it is a palindrome.",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83d\udc49\ud83d\udc48 Two Pointers"
    ]
  },
  "0167": {
    "shortDescription": "Given a sorted array and a target, find two numbers that add up to the target. Return their 1-indexed positions. The two-pointer technique makes this elegant!",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Key Insight:</strong> The array is SORTED! This changes everything.</li>\n                <li><strong>Two Pointers:</strong> Start with one pointer at the beginning (smallest) and one at the end (largest)</li>\n                <li><strong>Sum too big?</strong> Move the right pointer left to get a smaller number</li>\n                <li><strong>Sum too small?</strong> Move the left pointer right to get a bigger number</li>\n                <li><strong>Why it works:</strong> Because it's sorted, moving left makes sum smaller, moving right makes it bigger</li>\n                <li><strong>Result:</strong> 1-indexed positions (add 1 to 0-indexed positions)</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Two Sum II - Input Array Is Sorted\n\nProblem from LeetCode: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/\n\nDescription:\nGiven a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.\nReturn the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.\nThe tests are generated such that there is exactly one solution. You may not use the same element twice.\nYour solution must use only constant extra space.\n\nExample 1:\nInput: numbers = [2,7,11,15], target = 9\nOutput: [1,2]\nExplanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].\n\nExample 2:\nInput: numbers = [2,3,4], target = 6\nOutput: [1,3]\nExplanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].\n\nExample 3:\nInput: numbers = [-1,0], target = -1\nOutput: [1,2]\nExplanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].",
    "tags": [
      "\ud83d\udc49\ud83d\udc49 Two Pointers",
      "\ud83d\udcca Sorted Array"
    ]
  },
  "0003": {
    "shortDescription": "Given a string s, find the length of the longest substring without repeating characters.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(min(n, m))",
    "laymanHtml": "<p>Imagine a <strong>sliding window</strong> that expands and contracts:</p>\n            <ul>\n                <li><strong>Right pointer (r):</strong> Always moves forward, adding characters</li>\n                <li><strong>Left pointer (l):</strong> Moves forward when we find a duplicate</li>\n                <li><strong>Set (char_set):</strong> Tracks characters currently in our window</li>\n                <li><strong>Duplicate found?</strong> Shrink window from left until the duplicate is gone</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Longest Substring Without Repeating Characters\n\nProblem from LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/\n\nDescription:\nGiven a string s, find the length of the longest substring without repeating characters.\n\nExample 1:\nInput: s = \"abcabcbb\"\nOutput: 3\nExplanation: The answer is \"abc\", with the length of 3.\n\nExample 2:\nInput: s = \"bbbbb\"\nOutput: 1\nExplanation: The answer is \"b\", with the length of 1.\n\nExample 3:\nInput: s = \"pwwkew\"\nOutput: 3\nExplanation: The answer is \"wke\", with the length of 3.\nNotice that the answer must be a substring, \"pwke\" is a subsequence and not a substring.\n\nConstraints:\n- 0 <= s.length <= 5 * 10^4\n- s consists of English letters, digits, symbols and spaces.",
    "tags": [
      "\ud83e\ude9f Sliding Window",
      "\ud83d\udd24 String"
    ]
  },
  "0076": {
    "shortDescription": "Given strings s and t, find the minimum window substring in s that contains all characters of t (including duplicates).",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(m)",
    "laymanHtml": "<p>A classic <strong>sliding window</strong> problem with two phases:</p>\n            <ul>\n                <li><strong>Expand (right pointer):</strong> Keep adding characters until we have all of t</li>\n                <li><strong>Contract (left pointer):</strong> Once valid, shrink from left to find minimum</li>\n                <li><strong>Track \"formed\":</strong> How many unique characters have met their required count</li>\n                <li><strong>Update answer:</strong> Every time we have a valid window, check if it's smallest</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Minimum Window Substring\n\nProblem from LeetCode: https://leetcode.com/problems/minimum-window-substring/\n\nDescription:\nGiven two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".\n\nThe testcases will be generated such that the answer is unique.\n\nExample 1:\nInput: s = \"ADOBECODEBANC\", t = \"ABC\"\nOutput: \"BANC\"\nExplanation: The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t.\n\nExample 2:\nInput: s = \"a\", t = \"a\"\nOutput: \"a\"\nExplanation: The entire string s is the minimum window.\n\nExample 3:\nInput: s = \"a\", t = \"aa\"\nOutput: \"\"\nExplanation: Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string.",
    "tags": [
      "\ud83e\ude9f Sliding Window",
      "\ud83d\udcda HashMap"
    ]
  },
  "0121": {
    "shortDescription": "Given an array prices where prices[i] is the price of a stock on day i, find the maximum profit from one transaction (buy then sell).",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine you're traveling through time, seeing stock prices each day:</p>\n            <ul>\n                <li><strong>Track minimum:</strong> Always remember the lowest price you've seen so far</li>\n                <li><strong>Calculate profit:</strong> At each day, calculate: \"If I bought at the lowest and sold today, what's my profit?\"</li>\n                <li><strong>Track maximum profit:</strong> Keep updating the best profit you could have made</li>\n                <li><strong>Why it works:</strong> For any selling day, the best buying day is always the minimum price before it</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Best Time to Buy and Sell Stock\n\nProblem from LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/\n\nDescription:\nYou are given an array prices where prices[i] is the price of a given stock on the ith day.\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.\n\nExample 1:\nInput: prices = [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.\nNote that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.\n\nExample 2:\nInput: prices = [7,6,4,3,1]\nOutput: 0\nExplanation: In this case, no transactions are done and the max profit = 0.",
    "tags": [
      "\ud83d\udcc1 Array",
      "\ud83e\ude9f Sliding Window"
    ]
  },
  "0239": {
    "shortDescription": "Given an array and a window size k, slide a window across the array and return the maximum value in each window position. Uses a monotonic deque for O(n) efficiency!",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Problem:</strong> Find the maximum in every window of size k as it slides across</li>\n                <li><strong>Naive approach:</strong> Check all k elements for each window \u2192 O(n\u00d7k)</li>\n                <li><strong>Smart approach:</strong> Use a \"monotonic deque\" \u2192 O(n)</li>\n                <li><strong>Monotonic Deque:</strong> Keeps elements in decreasing order. Front is always the max!</li>\n                <li><strong>Key insight:</strong> If a new element is bigger than previous ones, those smaller ones can never be the max (they'll leave the window before the new element)</li>\n                <li><strong>Remove from back:</strong> Pop smaller elements from deque back</li>\n                <li><strong>Remove from front:</strong> Pop elements outside the current window</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 239: Sliding Window Maximum\n\nProblem from LeetCode: https://leetcode.com/problems/sliding-window-maximum/\n\nYou are given an array of integers nums, there is a sliding window of size k which \nis moving from the very left of the array to the very right. You can only see the \nk numbers in the window. Each time the sliding window moves right by one position.\n\nReturn the max sliding window.\n\nExample 1:\nInput: nums = [1,3,-1,-3,5,3,6,7], k = 3\nOutput: [3,3,5,5,6,7]\nExplanation: \nWindow position                Max\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n 1 [3  -1  -3] 5  3  6  7       3\n 1  3 [-1  -3  5] 3  6  7       5\n 1  3  -1 [-3  5  3] 6  7       5\n 1  3  -1  -3 [5  3  6] 7       6\n 1  3  -1  -3  5 [3  6  7]      7\n\nExample 2:\nInput: nums = [1], k = 1\nOutput: [1]\n\nConstraints:\n- 1 <= nums.length <= 10^5\n- -10^4 <= nums[i] <= 10^4\n- 1 <= k <= nums.length",
    "tags": [
      "\ud83e\ude9f Sliding Window",
      "\ud83d\udcda Monotonic Deque"
    ]
  },
  "0424": {
    "shortDescription": "Given a string and k replacements allowed, find the longest substring with all same characters. The trick: keep track of the most frequent character in the window!",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Goal:</strong> Find the longest substring where all characters are the same, using at most k replacements</li>\n                <li><strong>Key insight:</strong> In any valid window, we keep the most frequent character and replace the others</li>\n                <li><strong>Formula:</strong> replacements_needed = window_size - max_frequency</li>\n                <li><strong>Valid window:</strong> When replacements_needed \u2264 k</li>\n                <li><strong>Expand:</strong> Move right pointer, add character to window</li>\n                <li><strong>Shrink:</strong> When we need more than k replacements, move left pointer</li>\n                <li><strong>Track max:</strong> Keep track of the maximum valid window size we've seen</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Longest Repeating Character Replacement\n\nProblem from LeetCode: https://leetcode.com/problems/longest-repeating-character-replacement/\n\nYou are given a string s and an integer k. You can choose any character of the string and \nchange it to any other uppercase English character. You can perform this operation at most k times.\n\nReturn the length of the longest substring containing the same letter you can get after \nperforming the above operations.\n\nExample 1:\n    Input: s = \"ABAB\", k = 2\n    Output: 4\n    Explanation: Replace the two 'A's with two 'B's or vice versa.\n\nExample 2:\n    Input: s = \"AABABBA\", k = 1\n    Output: 4\n    Explanation: Replace the one 'A' in the middle with 'B' and form \"AABBBBA\".\n    The substring \"BBBB\" has the longest repeating letters, which is 4.\n\nConstraints:\n    1 <= s.length <= 10^5\n    s consists of only uppercase English letters.\n    0 <= k <= s.length",
    "tags": [
      "\ud83e\ude9f Sliding Window",
      "\ud83d\udd24 String"
    ]
  },
  "0567": {
    "shortDescription": "Check if s2 contains any permutation of s1 as a substring. Use a sliding window with character frequency matching!",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Permutation:</strong> Same characters in any order (e.g., \"ab\" and \"ba\" are permutations)</li>\n                <li><strong>Key insight:</strong> Two strings are permutations if they have the same character frequencies</li>\n                <li><strong>Window size:</strong> Always equals len(s1) - a permutation must have the same length</li>\n                <li><strong>Slide window:</strong> Move window one character at a time, updating frequencies</li>\n                <li><strong>Match found:</strong> When window's char frequencies equal s1's frequencies</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Permutation In String\n\nProblem from LeetCode: https://leetcode.com/problems/permutation-in-string/\n\nGiven two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.\n\nIn other words, return true if one of s1's permutations is the substring of s2.\n\nExample 1:\n    Input: s1 = \"ab\", s2 = \"eidbaooo\"\n    Output: true\n    Explanation: s2 contains one permutation of s1 (\"ba\").\n\nExample 2:\n    Input: s1 = \"ab\", s2 = \"eidboaoo\"\n    Output: false\n\nConstraints:\n    1 <= s1.length, s2.length <= 10^4\n    s1 and s2 consist of lowercase English letters.",
    "tags": [
      "\ud83e\ude9f Sliding Window",
      "\ud83d\udd24 String"
    ]
  },
  "0020": {
    "shortDescription": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Think of stacking plates (LIFO - Last In, First Out):</p>\n            <ul>\n                <li><strong>Opening bracket:</strong> Push it onto the stack (like adding a plate)</li>\n                <li><strong>Closing bracket:</strong> Pop the top plate and check if it matches</li>\n                <li><strong>Mismatch:</strong> Wrong plate on top \u2192 Invalid!</li>\n                <li><strong>Empty stack when closing:</strong> Nothing to match \u2192 Invalid!</li>\n                <li><strong>Non-empty stack at end:</strong> Unclosed brackets \u2192 Invalid!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Valid Parentheses\n\nProblem from LeetCode: https://leetcode.com/problems/valid-parentheses/\n\nDescription:\nGiven a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.\n\nExample 1:\nInput: s = \"()\"\nOutput: true\n\nExample 2:\nInput: s = \"()[]{}\"\nOutput: true\n\nExample 3:\nInput: s = \"(]\"\nOutput: false\n\nExample 4:\nInput: s = \"([)]\"\nOutput: false\n\nExample 5:\nInput: s = \"{[]}\"\nOutput: true",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83d\udcda Stack"
    ]
  },
  "0022": {
    "shortDescription": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    "timeComplexity": "O(4^n / \u221an)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Backtracking builds strings by making choices at each step:</p>\n            <ul>\n                <li><strong>Two rules:</strong> (1) Can add '(' if we have pairs left, (2) Can add ')' only if there's an unmatched '('</li>\n                <li><strong>Tree exploration:</strong> Each node makes choices, invalid paths are pruned automatically</li>\n                <li><strong>Base case:</strong> When string length = 2n, we have a valid combination</li>\n                <li><strong>Key insight:</strong> close_count < open_count ensures we never have more ')' than '('</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Generate Parentheses\n\nProblem from LeetCode: https://leetcode.com/problems/generate-parentheses/\n\nDescription:\nGiven n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\n\nExample 1:\nInput: n = 3\nOutput: [\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]\n\nExample 2:\nInput: n = 1\nOutput: [\"()\"]\n\nConstraints:\n1 <= n <= 8",
    "tags": [
      "\ud83d\udd04 Backtracking",
      "\ud83d\udd24 String"
    ]
  },
  "0084": {
    "shortDescription": "Given an array of heights representing histogram bars (width = 1 each), find the area of the largest rectangle that can be formed in the histogram.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>The key insight: For each bar, find how far left and right it can extend at that height.</p>\n            <ul>\n                <li><strong>Monotonic Stack:</strong> Keep a stack of indices with increasing heights</li>\n                <li><strong>When we find a shorter bar:</strong> Pop taller bars and calculate their max area</li>\n                <li><strong>Width calculation:</strong> From the popped bar's position to the current position (or previous stack element)</li>\n                <li><strong>At the end:</strong> Process remaining bars in stack (they extend to the right edge)</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Largest Rectangle in Histogram\n\nProblem from LeetCode: https://leetcode.com/problems/largest-rectangle-in-histogram/\n\nDescription:\nGiven an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.\n\nExample 1:\nInput: heights = [2,1,5,6,2,3]\nOutput: 10\nExplanation: The above is a histogram where width of each bar is 1.\nThe largest rectangle is shown in the red area, which has an area = 10 units.\n\nExample 2:\nInput: heights = [2,4]\nOutput: 4",
    "tags": [
      "\ud83d\udcda Stack",
      "\ud83d\udd04 Monotonic Stack"
    ]
  },
  "0150": {
    "shortDescription": "Evaluate the value of an arithmetic expression in Reverse Polish Notation (postfix notation). Valid operators are +, -, *, and /.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>RPN (Reverse Polish Notation) puts operators AFTER operands. Here's how to evaluate it:</p>\n            <ul>\n                <li><strong>See a number?</strong> Push it onto the stack</li>\n                <li><strong>See an operator?</strong> Pop two numbers, apply the operator, push the result</li>\n                <li><strong>Important:</strong> The SECOND popped value is the LEFT operand (a op b, not b op a)</li>\n                <li><strong>At the end:</strong> Stack has exactly one element - the answer!</li>\n            </ul>\n            <p><strong>Example:</strong> \"2 1 +\" means 2 + 1 = 3. \"3 4 *\" means 3 * 4 = 12.</p>",
    "fullProblemStatement": "LeetCode Evaluate Reverse Polish Notation\n\nProblem from LeetCode: https://leetcode.com/problems/evaluate-reverse-polish-notation/\n\nDescription:\nEvaluate the value of an arithmetic expression in Reverse Polish Notation.\n\nValid operators are +, -, *, and /. Each operand may be an integer or another expression.\n\nNote that division between two integers should truncate toward zero.\n\nIt is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.\n\nExample 1:\nInput: tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]\nOutput: 9\nExplanation: ((2 + 1) * 3) = 9\n\nExample 2:\nInput: tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]\nOutput: 6\nExplanation: (4 + (13 / 5)) = 6\n\nExample 3:\nInput: tokens = [\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]\nOutput: 22\nExplanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n= ((10 * (6 / -132)) + 17) + 5\n= ((10 * 0) + 17) + 5\n= (0 + 17) + 5\n= 17 + 5\n= 22",
    "tags": [
      "\ud83d\udcda Stack",
      "\ud83d\udd22 Math"
    ]
  },
  "0155": {
    "shortDescription": "Design a stack that supports push, pop, top, and retrieving the minimum element in O(1) time.",
    "timeComplexity": "O(1) all ops",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>The trick: <strong>store the minimum value with each node</strong>!</p>\n            <ul>\n                <li><strong>Each node stores:</strong> its value AND the minimum of all values below it</li>\n                <li><strong>On push:</strong> new min = min(new value, previous min)</li>\n                <li><strong>On pop:</strong> min automatically updates (stored in next node)</li>\n                <li><strong>getMin:</strong> Just read the min from the top node - O(1)!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 155. Min Stack\n\nProblem from LeetCode: https://leetcode.com/problems/min-stack/\n\nDescription:\nDesign a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nImplement the MinStack class:\n- MinStack() initializes the stack object.\n- void push(int val) pushes the element val onto the stack.\n- void pop() removes the element on the top of the stack.\n- int top() gets the top element of the stack.\n- int getMin() retrieves the minimum element in the stack.\n\nYou must implement a solution with O(1) time complexity for each function.\n\nExample 1:\nInput\n[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]\n\nOutput\n[null,null,null,null,-3,null,0,-2]\n\nExplanation\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin(); // return -3\nminStack.pop();\nminStack.top();    // return 0\nminStack.getMin(); // return -2\n\nConstraints:\n- -2^31 <= val <= 2^31 - 1\n- Methods pop, top and getMin operations will always be called on non-empty stacks.\n- At most 3 * 10^4 calls will be made to push, pop, top, and getMin.",
    "tags": [
      "\ud83d\udcda Stack",
      "\ud83c\udfa8 Design"
    ]
  },
  "0716": {
    "shortDescription": "Design a max stack that supports push, pop, top, peekMax, and popMax operations in O(log n) time.",
    "timeComplexity": "O(log n) ops",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Use a <strong>Doubly Linked List + Max Heap + Set</strong>:</p>\n            <ul>\n                <li><strong>Linked List:</strong> Stack order (push/pop from tail)</li>\n                <li><strong>Max Heap:</strong> Track maximum values with node IDs</li>\n                <li><strong>Removed Set:</strong> Mark lazy-deleted items</li>\n                <li><strong>Lazy deletion:</strong> Clean up heap when accessing max</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Max Stack\n\nProblem from LeetCode: https://leetcode.com/problems/max-stack/\n\nDescription:\nDesign a max stack data structure that supports the stack operations and supports finding the stack's maximum element.\n\nImplement the MaxStack class:\n- MaxStack() Initializes the stack object.\n- void push(int x) Pushes element x onto the stack.\n- int pop() Removes the element on top of the stack and returns it.\n- int top() Gets the element on the top of the stack without removing it.\n- int peekMax() Retrieves the maximum element in the stack without removing it.\n- int popMax() Retrieves the maximum element in the stack and removes it. If there are multiple instances of the maximum, only remove the top-most one.\n\nExample 1:\nInput:\n[\"MaxStack\", \"push\", \"push\", \"push\", \"top\", \"popMax\", \"top\", \"peekMax\", \"pop\", \"top\"]\n[[], [5], [1], [5], [], [], [], [], [], []]\nOutput:\n[null, null, null, null, 5, 5, 1, 5, 1, 5]\n\nExplanation:\nMaxStack stk = new MaxStack();\nstk.push(5);   // [5] the top of the stack and the maximum number is 5.\nstk.push(1);   // [5, 1] the top of the stack is 1, but the maximum is 5.\nstk.push(5);   // [5, 1, 5] the top of the stack is 5, which is also the maximum.\nstk.top();     // return 5, [5, 1, 5] the stack did not change.\nstk.popMax();  // return 5, [5, 1] the stack decreased, and the top is now the element 1.\nstk.top();     // return 1, [5, 1] the stack did not change.\nstk.peekMax(); // return 5, [5, 1] the stack did not change.\nstk.pop();     // return 1, [5] the top of the stack is now 5.\nstk.top();     // return 5, [5] the stack did not change.",
    "tags": [
      "\ud83d\udce6 Stack",
      "\ud83c\udf33 Heap"
    ]
  },
  "0739": {
    "shortDescription": "Given an array of daily temperatures, return an array where answer[i] is the number of days you have to wait after day i to get a warmer temperature. If no future day is warmer, answer[i] = 0.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Think of it like people waiting in line for a warm day:</p>\n            <ul>\n                <li><strong>Monotonic Stack:</strong> We keep a stack of days \"waiting\" for a warmer day</li>\n                <li><strong>When we find a warmer day:</strong> Pop all cooler days and calculate how long they waited</li>\n                <li><strong>Stack stores:</strong> (temperature, day index) pairs</li>\n                <li><strong>Days left in stack:</strong> Never found a warmer day \u2192 answer stays 0</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Daily Temperatures\n\nProblem from LeetCode: https://leetcode.com/problems/daily-temperatures/\n\nDescription:\nGiven an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.\n\nExample 1:\nInput: temperatures = [73,74,75,71,69,72,76,73]\nOutput: [1,1,4,2,1,1,0,0]\n\nExample 2:\nInput: temperatures = [30,40,50,60]\nOutput: [1,1,1,0]\n\nExample 3:\nInput: temperatures = [30,60,90]\nOutput: [1,1,0]\n\nConstraints:\n1 <= temperatures.length <= 10^5\n30 <= temperatures[i] <= 100",
    "tags": [
      "\ud83d\udcda Stack",
      "\ud83d\udd04 Monotonic Stack"
    ]
  },
  "0853": {
    "shortDescription": "Cars on a road heading to a target. Faster cars can't pass slower ones, they form \"fleets.\" Count how many fleets reach the destination!",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Problem:</strong> Cars can't pass each other on a single-lane road. Faster cars behind slow down to match slower cars ahead.</li>\n                <li><strong>Fleet:</strong> Cars that catch up and travel together at the same speed.</li>\n                <li><strong>Key insight:</strong> Process cars from closest to target first. A car forms a new fleet if it takes longer to reach target than any car ahead.</li>\n                <li><strong>Time to target:</strong> (target - position) / speed</li>\n                <li><strong>Logic:</strong> If a car takes MORE time than the max time seen so far, it can't catch up \u2192 new fleet!</li>\n                <li><strong>If LESS time:</strong> It would catch up and merge with the fleet ahead.</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Car Fleet\n\nProblem from LeetCode: https://leetcode.com/problems/car-fleet/\n\nDescription:\nThere are n cars going to the same destination along a one-lane road. The destination is target miles away.\n\nYou are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).\n\nA car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).\n\nA car fleet is some non-empty set of cars driving at the same speed. Note that a single car is also a car fleet.\n\nIf a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.\n\nReturn the number of car fleets that will arrive at the destination.\n\nExample 1:\nInput: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]\nOutput: 3\nExplanation:\nThe cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting at 12.\nThe car starting at 0 does not catch up to any other car, so it is a fleet by itself.\nThe cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting at 6. The fleet moves at speed 1 until it reaches target.\nNote that no other cars meet these fleets before the destination, so the answer is 3.\n\nExample 2:\nInput: target = 10, position = [3], speed = [3]\nOutput: 1\nExplanation: There is only one car, hence there is only one fleet.\n\nExample 3:\nInput: target = 100, position = [0,2,4], speed = [4,2,1]\nOutput: 1\nExplanation:\nThe cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting at 4. The fleet moves at speed 2.\nThen, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting at 6. The fleet moves at speed 1 until it reaches target.\n\nConstraints:\nn == position.length == speed.length\n1 <= n <= 10^5\n0 <= position[i] < target\nAll the values of position are unique.\n0 < speed[i] <= 10^6\n1 <= target <= 10^6",
    "tags": [
      "\ud83d\udcda Stack",
      "\ud83d\udd22 Sorting"
    ]
  },
  "1249": {
    "shortDescription": "Remove the minimum number of parentheses to make the string valid. Use a stack to track unmatched parentheses!",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Valid parentheses:</strong> Every '(' has a matching ')' that comes after it</li>\n                <li><strong>Phase 1 - Scan:</strong> Go through string, use stack to track unmatched '('</li>\n                <li><strong>When we see '(':</strong> Push its index to stack (might need to be removed)</li>\n                <li><strong>When we see ')':</strong> If stack has a '(', pop it (they match!). Otherwise, mark ')' for removal.</li>\n                <li><strong>After scan:</strong> Any remaining indices in stack are unmatched '(' - mark for removal</li>\n                <li><strong>Phase 2 - Build:</strong> Skip characters at removal indices, keep everything else</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Minimum Remove To Make Valid Parentheses\n\nProblem from LeetCode: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/\n\nGiven a string s of '(' , ')' and lowercase English characters.\n\nYour task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) \nso that the resulting parentheses string is valid and return any valid string.\n\nFormally, a parentheses string is valid if and only if:\n- It is the empty string, contains only lowercase characters, or\n- It can be written as AB (A concatenated with B), where A and B are valid strings, or\n- It can be written as (A), where A is a valid string.\n\nExample 1:\n    Input: s = \"lee(t(c)o)de)\"\n    Output: \"lee(t(c)o)de\"\n    Explanation: \"lee(t(co)de)\" , \"lee(t(c)ode)\" would also be accepted.\n\nExample 2:\n    Input: s = \"a)b(c)d\"\n    Output: \"ab(c)d\"\n\nExample 3:\n    Input: s = \"))((\"\n    Output: \"\"\n    Explanation: An empty string is also valid.\n\nConstraints:\n    1 <= s.length <= 10^5\n    s[i] is either'(' , ')', or lowercase English letter.",
    "tags": [
      "\ud83d\udcda Stack",
      "\ud83d\udd24 String"
    ]
  },
  "0004": {
    "shortDescription": "Find the median of two sorted arrays. The binary search partition approach achieves O(log(min(m,n))) time complexity!",
    "timeComplexity": "O(log(min(m,n)))",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Median:</strong> The middle value when both arrays are merged and sorted</li>\n                <li><strong>Key idea:</strong> Instead of merging, find the \"partition\" that divides both arrays into two halves</li>\n                <li><strong>Left half:</strong> All elements that would be on the left of median in merged array</li>\n                <li><strong>Right half:</strong> All elements on the right of median</li>\n                <li><strong>Valid partition:</strong> max(left elements) \u2264 min(right elements)</li>\n                <li><strong>Binary search:</strong> Adjust partition position on the smaller array until we find valid partition</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Median of Two Sorted Arrays\n\nProblem from LeetCode: https://leetcode.com/problems/median-of-two-sorted-arrays/\n\nDescription:\nGiven two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.\nThe overall run time complexity should be O(log (m+n)).\n\nExample 1:\nInput: nums1 = [1,3], nums2 = [2]\nOutput: 2.00000\nExplanation: merged array = [1,2,3] and median is 2.\n\nExample 2:\nInput: nums1 = [1,2], nums2 = [3,4]\nOutput: 2.50000\nExplanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
    "tags": [
      "\ud83d\udd0d Binary Search",
      "\ud83d\udd22 Array",
      "\ud83d\udd34 Hard"
    ]
  },
  "0033": {
    "shortDescription": "Given a rotated sorted array (like [4,5,6,7,0,1,2]) and a target, return the index of the target or -1 if not found. Must be O(log n).",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A rotated sorted array has TWO sorted halves. The trick is to figure out which half to search:</p>\n            <ul>\n                <li><strong>Key insight:</strong> At least one half is always properly sorted</li>\n                <li><strong>Check if left half sorted:</strong> nums[left] \u2264 nums[mid]</li>\n                <li><strong>Then ask:</strong> Is target in the sorted range? If yes, search there. Otherwise, search the other half.</li>\n                <li><strong>Each step:</strong> We eliminate half the array - O(log n)!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Search in Rotated Sorted Array\n\nProblem from LeetCode: https://leetcode.com/problems/search-in-rotated-sorted-array/\n\nDescription:\nThere is an integer array nums sorted in ascending order (with distinct values).\n\nPrior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].\n\nGiven the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.\n\nYou must write an algorithm with O(log n) runtime complexity.\n\nExample 1:\nInput: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4\n\nExample 2:\nInput: nums = [4,5,6,7,0,1,2], target = 3\nOutput: -1\n\nExample 3:\nInput: nums = [1], target = 0\nOutput: -1",
    "tags": [
      "\ud83d\udd0d Binary Search",
      "\ud83d\udcca Array"
    ]
  },
  "0034": {
    "shortDescription": "Given a sorted array and a target value, find the starting and ending position of target. Return [-1, -1] if not found. Use two binary searches: one for the leftmost and one for the rightmost occurrence.",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Run a binary search twice: once to find the <strong>leftmost</strong> match and once to find the <strong>rightmost</strong>.</p>\n            <ul>\n                <li><strong>Leftmost:</strong> On a match, remember the index and keep searching the left half</li>\n                <li><strong>Not found:</strong> If no left match exists, return <code>[-1, -1]</code></li>\n                <li><strong>Rightmost:</strong> On a match, remember the index and keep searching the right half</li>\n                <li><strong>Answer:</strong> Return both indices</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Find First and Last Position of Element in Sorted Array\n\nProblem from LeetCode: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/\n\nDescription:\nGiven an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.\nIf target is not found in the array, return [-1, -1].\nYou must write an algorithm with O(log n) runtime complexity.\n\nExample 1:\nInput: nums = [5,7,7,8,8,10], target = 8\nOutput: [3,4]\n\nExample 2:\nInput: nums = [5,7,7,8,8,10], target = 6\nOutput: [-1,-1]\n\nExample 3:\nInput: nums = [], target = 0\nOutput: [-1,-1]",
    "tags": [
      "\ud83d\udd0d Binary Search"
    ]
  },
  "0074": {
    "shortDescription": "Search for a target in a sorted 2D matrix. Treat the matrix as a flattened 1D array and use binary search!",
    "timeComplexity": "O(log(m\u00d7n))",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Key insight:</strong> The matrix is essentially a sorted 1D array arranged in rows</li>\n                <li><strong>Flattening:</strong> We can treat it as a 1D array of size m\u00d7n</li>\n                <li><strong>Index conversion:</strong> 1D index \u2192 row = index / cols, col = index % cols</li>\n                <li><strong>Binary search:</strong> Standard binary search on the \"virtual\" 1D array</li>\n                <li><strong>Why it works:</strong> Each row continues where the previous ended, so the whole matrix is sorted</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Search a 2D Matrix\n\nProblem from LeetCode: https://leetcode.com/problems/search-a-2d-matrix/\n\nDescription:\nWrite an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:\n- Integers in each row are sorted from left to right.\n- The first integer of each row is greater than the last integer of the previous row.\n\nExample 1:\nInput: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3\nOutput: true\n\nExample 2:\nInput: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13\nOutput: false",
    "tags": [
      "\ud83d\udd0d Binary Search",
      "\ud83d\udcca Matrix"
    ]
  },
  "0153": {
    "shortDescription": "Find the minimum element in a rotated sorted array. Use binary search to find the \"pivot\" point where the rotation occurred!",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Rotated array:</strong> A sorted array that's been \"rotated\" - part of the end moved to the beginning</li>\n                <li><strong>Example:</strong> [1,2,3,4,5] rotated 3 times \u2192 [3,4,5,1,2]</li>\n                <li><strong>Key insight:</strong> The array has two sorted portions. The minimum is at the \"pivot\" point.</li>\n                <li><strong>If nums[left] < nums[right]:</strong> The current range is fully sorted, min is at left</li>\n                <li><strong>If nums[left] <= nums[mid]:</strong> Left half is sorted, so min must be in right half</li>\n                <li><strong>Otherwise:</strong> Right half is sorted, so min must be in left half</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 153. Find Minimum in Rotated Sorted Array\n\nProblem from LeetCode: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/\n\nDescription:\nSuppose an array of length n sorted in ascending order is rotated between 1 and n times. \nFor example, the array nums = [0,1,2,4,5,6,7] might become:\n- [4,5,6,7,0,1,2] if it was rotated 4 times.\n- [0,1,2,4,5,6,7] if it was rotated 7 times.\n\nNotice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results \nin the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].\n\nGiven the sorted rotated array nums of unique elements, return the minimum element of this array.\n\nYou must write an algorithm that runs in O(log n) time.\n\nExample 1:\nInput: nums = [3,4,5,1,2]\nOutput: 1\nExplanation: The original array was [1,2,3,4,5] rotated 3 times.\n\nExample 2:\nInput: nums = [4,5,6,7,0,1,2]\nOutput: 0\nExplanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.\n\nExample 3:\nInput: nums = [11,13,15,17]\nOutput: 11\nExplanation: The original array was [11,13,15,17] and it was rotated 4 times.\n\nConstraints:\n- n == nums.length\n- 1 <= n <= 5000\n- -5000 <= nums[i] <= 5000\n- All the integers of nums are unique.\n- nums is sorted and rotated between 1 and n times.",
    "tags": [
      "\ud83d\udd0d Binary Search",
      "\ud83d\udd22 Array"
    ]
  },
  "0704": {
    "shortDescription": "Given a sorted array of integers and a target, return the index of the target if found, otherwise return -1. Must run in O(log n) time.",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine looking for a word in a dictionary - you don't start from page 1:</p>\n            <ul>\n                <li><strong>Open to middle:</strong> Check if target is before or after the middle</li>\n                <li><strong>Too small:</strong> Target is in the right half \u2192 ignore left half</li>\n                <li><strong>Too big:</strong> Target is in the left half \u2192 ignore right half</li>\n                <li><strong>Found:</strong> Middle equals target \u2192 return index</li>\n                <li><strong>Each step halves the search space \u2192 O(log n)!</strong></li>\n            </ul>",
    "fullProblemStatement": "LeetCode Binary Search\n\nProblem from LeetCode: https://leetcode.com/problems/binary-search/\n\nDescription:\nGiven an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.\n\nYou must write an algorithm with O(log n) runtime complexity.\n\nExample 1:\nInput: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4\nExplanation: 9 exists in nums and its index is 4\n\nExample 2:\nInput: nums = [-1,0,3,5,9,12], target = 2\nOutput: -1\nExplanation: 2 does not exist in nums so return -1\n\nConstraints:\n1 <= nums.length <= 10^4\n-10^4 <= nums[i], target <= 10^4\nAll the integers in nums are unique.\nnums is sorted in ascending order.",
    "tags": [
      "\ud83d\udcc1 Array",
      "\ud83d\udd0d Binary Search"
    ]
  },
  "0875": {
    "shortDescription": "Koko wants to eat all bananas before guards return. Find the minimum eating speed. Binary search on the answer!",
    "timeComplexity": "O(n log m)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<ul>\n                <li><strong>Problem:</strong> Koko needs to eat all bananas before guards return in h hours</li>\n                <li><strong>Each hour:</strong> She picks one pile and eats k bananas (or all if less than k)</li>\n                <li><strong>Goal:</strong> Find minimum speed k that lets her finish in time</li>\n                <li><strong>Binary search on speed:</strong> Speed can be 1 to max(piles)</li>\n                <li><strong>For each pile:</strong> Hours = ceil(pile / speed)</li>\n                <li><strong>If total hours \u2264 h:</strong> Speed is fast enough, try slower</li>\n                <li><strong>If total hours > h:</strong> Too slow, need faster speed</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Koko Eating Bananas\n\nProblem from LeetCode: https://leetcode.com/problems/koko-eating-bananas/\n\nDescription:\nKoko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.\n\nKoko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.\n\nKoko likes to eat slowly but still wants to finish eating all the bananas before the guards return.\n\nReturn the minimum integer k such that she can eat all the bananas within h hours.\n\nExample 1:\nInput: piles = [3,6,7,11], h = 8\nOutput: 4\n\nExample 2:\nInput: piles = [30,11,23,4,20], h = 5\nOutput: 30\n\nExample 3:\nInput: piles = [30,11,23,4,20], h = 6\nOutput: 23\n\nConstraints:\n1 <= piles.length <= 10^4\npiles.length <= h <= 10^9\n1 <= piles[i] <= 10^9",
    "tags": [
      "\ud83d\udd0d Binary Search",
      "\ud83d\udd22 Array"
    ]
  },
  "0981": {
    "shortDescription": "Design a time-based key-value data structure that can store multiple values for the same key at different timestamps and retrieve the value at a certain timestamp. Use binary search to find the largest timestamp \u2264 given timestamp.",
    "timeComplexity": "O(log n) per get",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Each key keeps its values in time order, so <strong>binary search</strong> can find the latest value at or before a timestamp.</p>\n            <ul>\n                <li><strong>Set:</strong> Append <code>(timestamp, value)</code> to the key's list</li>\n                <li><strong>Get:</strong> Binary search for the last timestamp that is not larger than the query</li>\n                <li><strong>Missing:</strong> Return an empty string if there is none</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Time Based Key Value Store\n\nProblem from LeetCode: https://leetcode.com/problems/time-based-key-value-store/\n\nDesign a time-based key-value data structure that can store multiple values for the same \nkey at different time stamps and retrieve the key's value at a certain timestamp.\n\nImplement the TimeMap class:\n- TimeMap() Initializes the object of the data structure.\n- void set(String key, String value, int timestamp) Stores the key key with the value value\n  at the given time timestamp.\n- String get(String key, int timestamp) Returns a value such that set was called previously,\n  with timestamp_prev <= timestamp. If there are multiple such values, it returns the value \n  associated with the largest timestamp_prev. If there are no values, it returns \"\".\n\nExample 1:\n    Input:\n    [\"TimeMap\", \"set\", \"get\", \"get\", \"set\", \"get\", \"get\"]\n    [[], [\"foo\", \"bar\", 1], [\"foo\", 1], [\"foo\", 3], [\"foo\", \"bar2\", 4], [\"foo\", 4], [\"foo\", 5]]\n    Output:\n    [null, null, \"bar\", \"bar\", null, \"bar2\", \"bar2\"]\n    \n    Explanation:\n    TimeMap timeMap = new TimeMap();\n    timeMap.set(\"foo\", \"bar\", 1);  // store the key \"foo\" and value \"bar\" along with timestamp = 1.\n    timeMap.get(\"foo\", 1);         // return \"bar\"\n    timeMap.get(\"foo\", 3);         // return \"bar\", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is \"bar\".\n    timeMap.set(\"foo\", \"bar2\", 4); // store the key \"foo\" and value \"bar2\" along with timestamp = 4.\n    timeMap.get(\"foo\", 4);         // return \"bar2\"\n    timeMap.get(\"foo\", 5);         // return \"bar2\"\n\nConstraints:\n    1 <= key.length, value.length <= 100\n    key and value consist of lowercase English letters and digits.\n    1 <= timestamp <= 10^7\n    All the timestamps timestamp of set are strictly increasing.\n    At most 2 * 10^5 calls will be made to set and get.",
    "tags": [
      "\ud83d\udcdd Algorithm"
    ]
  },
  "0002": {
    "shortDescription": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Like adding two long numbers on paper, one column at a time, starting from the ones digit. A <strong>carry</strong> is passed to the next column.</p>\n            <ul>\n                <li><strong>Add a column:</strong> Sum the two digits (a missing digit counts as 0) plus the carry</li>\n                <li><strong>Write the digit:</strong> Append <code>total % 10</code> to the result list</li>\n                <li><strong>Carry over:</strong> Pass <code>total // 10</code> to the next column</li>\n                <li><strong>Finish:</strong> Stop when both lists and the carry are used up</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Add Two Numbers\n\nProblem from LeetCode: https://leetcode.com/problems/add-two-numbers/\n\nDescription:\nYou are given two non-empty linked lists representing two non-negative integers.\nThe digits are stored in reverse order, and each of their nodes contains a single digit.\nAdd the two numbers and return the sum as a linked list.\n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.\n\nExample:\nInput: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807.\n\nExample 2:\nInput: l1 = [0], l2 = [0]\nOutput: [0]\n\nExample 3:\nInput: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\nOutput: [8,9,9,9,0,0,0,1]\n\nConstraints:\n- The number of nodes in each linked list is in the range [1, 100].\n- 0 <= Node.val <= 9\n- It is guaranteed that the list represents a number that does not have leading zeros.",
    "tags": [
      "\ud83d\udd17 Linked List"
    ]
  },
  "0019": {
    "shortDescription": "Given the head of a linked list, remove the nth node from the end of the list and return its head. Uses a two-pointer technique with a gap of n+1 nodes.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A linked list is like a <strong>chain of train cars</strong>:</p>\n            <ul>\n                <li><strong>Each node:</strong> Contains data and points to next node</li>\n                <li><strong>Traversal:</strong> Follow the chain one node at a time</li>\n                <li><strong>Modification:</strong> Redirect links to rearrange</li>\n                <li><strong>Two pointers:</strong> Often use slow/fast pointers</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Remove Nth Node From End of List\n\nProblem from LeetCode: https://leetcode.com/problems/remove-nth-node-from-end-of-list/\n\nDescription:\nGiven the head of a linked list, remove the nth node from the end of the list and return its head.\n\nExample 1:\nInput: head = [1,2,3,4,5], n = 2\nOutput: [1,2,3,5]\nExplanation: After removing the second node from the end, the linked list becomes [1,2,3,5].\n\nExample 2:\nInput: head = [1], n = 1\nOutput: []\nExplanation: After removing the first node from the end, the linked list becomes empty.\n\nExample 3:\nInput: head = [1,2], n = 1\nOutput: [1]\nExplanation: After removing the first node from the end, the linked list becomes [1].",
    "tags": [
      "\ud83d\udd17 Linked List"
    ]
  },
  "0021": {
    "shortDescription": "Merge two sorted linked lists into one sorted list by splicing together their nodes.",
    "timeComplexity": "O(n + m)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Like merging two sorted piles of cards:</p>\n            <ul>\n                <li><strong>Compare tops:</strong> Look at the top card of each pile</li>\n                <li><strong>Take smaller:</strong> Pick the smaller one and add to merged pile</li>\n                <li><strong>Repeat:</strong> Continue until one pile is empty</li>\n                <li><strong>Finish:</strong> Add remaining cards from the non-empty pile</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Merge Two Sorted Lists\n\nProblem from LeetCode: https://leetcode.com/problems/merge-two-sorted-lists/\n\nDescription:\nYou are given the heads of two sorted linked lists list1 and list2.\nMerge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.\nReturn the head of the merged linked list.\n\nExample 1:\nInput: list1 = [1,2,4], list2 = [1,3,4]\nOutput: [1,1,2,3,4,4]\n\nExample 2:\nInput: list1 = [], list2 = []\nOutput: []\n\nExample 3:\nInput: list1 = [], list2 = [0]\nOutput: [0]",
    "tags": [
      "\ud83d\udd17 Linked List",
      "\ud83d\udd04 Two Pointers"
    ]
  },
  "0023": {
    "shortDescription": "Given an array of k sorted linked lists, merge them into one sorted linked list. Uses a min-heap to efficiently select the smallest element.",
    "timeComplexity": "O(N log k)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A linked list is like a <strong>chain of train cars</strong>:</p>\n            <ul>\n                <li><strong>Each node:</strong> Contains data and points to next node</li>\n                <li><strong>Traversal:</strong> Follow the chain one node at a time</li>\n                <li><strong>Modification:</strong> Redirect links to rearrange</li>\n                <li><strong>Two pointers:</strong> Often use slow/fast pointers</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Merge k Sorted Lists\n\nProblem from LeetCode: https://leetcode.com/problems/merge-k-sorted-lists/\n\nDescription:\nYou are given an array of k linked-lists lists, each linked-list is sorted in ascending order.\nMerge all the linked-lists into one sorted linked-list and return it.\n\nExample 1:\nInput: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]\nExplanation: The linked-lists are:\n[\n  1->4->5,\n  1->3->4,\n  2->6\n]\nmerging them into one sorted list:\n1->1->2->3->4->4->5->6\n\nExample 2:\nInput: lists = []\nOutput: []\n\nExample 3:\nInput: lists = [[]]\nOutput: []",
    "tags": [
      "\ud83d\udd17 Linked List",
      "\ud83d\udcca Sorting"
    ]
  },
  "0025": {
    "shortDescription": "Reverse nodes in k-group in a linked list. If remaining nodes < k, keep them as-is. Uses iterative reversal of each group and reconnects them.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A linked list is like a <strong>chain of train cars</strong>:</p>\n            <ul>\n                <li><strong>Each node:</strong> Contains data and points to next node</li>\n                <li><strong>Traversal:</strong> Follow the chain one node at a time</li>\n                <li><strong>Modification:</strong> Redirect links to rearrange</li>\n                <li><strong>Two pointers:</strong> Often use slow/fast pointers</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Reverse Nodes in k-Group\n\nProblem from LeetCode: https://leetcode.com/problems/reverse-nodes-in-k-group/\n\nDescription:\nGiven the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.\nk is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.\nYou may not alter the values in the list's nodes, only nodes themselves may be changed.\n\nExample 1:\nInput: head = [1,2,3,4,5], k = 2\nOutput: [2,1,4,3,5]\n\nExample 2:\nInput: head = [1,2,3,4,5], k = 3\nOutput: [3,2,1,4,5]\n\nExample 3:\nInput: head = [1,2,3,4,5], k = 1\nOutput: [1,2,3,4,5]\n\nExample 4:\nInput: head = [1], k = 1\nOutput: [1]",
    "tags": [
      "\ud83d\udd17 Linked List"
    ]
  },
  "0138": {
    "shortDescription": "Deep copy a linked list where each node has an additional random pointer. Uses a hash map to map original nodes to their copies.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Build a copy by keeping a <strong>dictionary</strong> from every original node to its copy.</p>\n            <ul>\n                <li><strong>Pass 1:</strong> Create a copy of every node and store it in the dictionary</li>\n                <li><strong>Pass 2:</strong> Wire each copy's <code>next</code> and <code>random</code> using the dictionary</li>\n                <li><strong>Return:</strong> The copy of the head</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Copy List with Random Pointer\n\nProblem from LeetCode: https://leetcode.com/problems/copy-list-with-random-pointer/\n\nDescription:\nA linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.\n\nConstruct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.\n\nFor example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.\n\nReturn the head of the copied linked list.\n\nThe linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:\n- val: an integer representing Node.val\n- random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.\n\nYour code will only be given the head of the original linked list.\n\nExample 1:\nInput: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\nOutput: [[7,null],[13,0],[11,4],[10,2],[1,0]]\n\nExample 2:\nInput: head = [[1,1],[2,1]]\nOutput: [[1,1],[2,1]]\n\nExample 3:\nInput: head = [[3,null],[3,0],[3,null]]\nOutput: [[3,null],[3,0],[3,null]]",
    "tags": [
      "\ud83d\udcdd Algorithm"
    ]
  },
  "0141": {
    "shortDescription": "Given the head of a linked list, determine if there is a cycle in it. A cycle exists if some node can be reached again by following the next pointers.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine two runners on a circular track - one slow (\ud83d\udc22 tortoise) and one fast (\ud83d\udc07 hare):</p>\n            <ul>\n                <li><strong>Slow pointer:</strong> Moves 1 step at a time</li>\n                <li><strong>Fast pointer:</strong> Moves 2 steps at a time</li>\n                <li><strong>If there's a cycle:</strong> Fast will eventually catch up and meet slow</li>\n                <li><strong>If no cycle:</strong> Fast will reach the end (null)</li>\n                <li><strong>Why it works:</strong> In a cycle, fast gains 1 step per iteration, so they must meet!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Linked List Cycle\n\nProblem from LeetCode: https://leetcode.com/problems/linked-list-cycle/\n\nDescription:\nGiven head, the head of a linked list, determine if the linked list has a cycle in it.\n\nThere is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.\n\nReturn true if there is a cycle in the linked list. Otherwise, return false.\n\nExample 1:\nInput: head = [3,2,0,-4], pos = 1\nOutput: true\nExplanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).\n\nExample 2:\nInput: head = [1,2], pos = 0\nOutput: true\nExplanation: There is a cycle in the linked list, where the tail connects to the 0th node.\n\nExample 3:\nInput: head = [1], pos = -1\nOutput: false\nExplanation: There is no cycle in the linked list.",
    "tags": [
      "\ud83d\udd17 Linked List",
      "\ud83d\udc22\ud83d\udc07 Floyd's Algorithm"
    ]
  },
  "0143": {
    "shortDescription": "Given the head of a singly linked list L0 \u2192 L1 \u2192 \u2026 \u2192 Ln-1 \u2192 Ln, reorder it to: L0 \u2192 Ln \u2192 L1 \u2192 Ln-1 \u2192 L2 \u2192 Ln-2 \u2192 \u2026",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Interleave the first half with the reversed second half, like shuffling two halves of a deck.</p>\n            <ul>\n                <li><strong>Find middle:</strong> Slow and fast pointers locate the middle</li>\n                <li><strong>Reverse:</strong> Reverse the second half</li>\n                <li><strong>Merge:</strong> Alternate nodes from the first half and the reversed second half</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Reorder List\n\nProblem from LeetCode: https://leetcode.com/problems/reorder-list/\n\nDescription:\nYou are given the head of a singly linked list. The list can be represented as:\nL0 \u2192 L1 \u2192 \u2026 \u2192 Ln - 1 \u2192 Ln\n\nReorder the list to be on the following form:\nL0 \u2192 Ln \u2192 L1 \u2192 Ln - 1 \u2192 L2 \u2192 Ln - 2 \u2192 \u2026\n\nYou may not modify the values in the list's nodes. Only nodes themselves may be changed.\n\nExample 1:\nInput: head = [1,2,3,4]\nOutput: [1,4,2,3]\n\nExample 2:\nInput: head = [1,2,3,4,5]\nOutput: [1,5,2,4,3]",
    "tags": [
      "\ud83d\udcdd Algorithm"
    ]
  },
  "0146": {
    "shortDescription": "Design a data structure that follows Least Recently Used (LRU) cache constraints. Implement get and put operations in O(1) time.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>LRU Cache combines a <strong>HashMap + Doubly Linked List</strong>:</p>\n            <ul>\n                <li><strong>HashMap:</strong> O(1) lookup by key \u2192 node</li>\n                <li><strong>Doubly Linked List:</strong> O(1) remove/insert for ordering</li>\n                <li><strong>Head = Most Recent:</strong> Recently accessed items go to the front</li>\n                <li><strong>Tail = Least Recent:</strong> When cache is full, evict from the back</li>\n            </ul>",
    "fullProblemStatement": "LeetCode LRU Cache\n\nProblem from LeetCode: https://leetcode.com/problems/lru-cache/\n\nDescription:\nDesign a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the LRUCache class:\n- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.\n- int get(int key) Return the value of the key if the key exists, otherwise return -1.\n- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.\n\nThe functions get and put must each run in O(1) average time complexity.\n\nExample:\nInput:\n[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\nOutput:\n[null, null, null, 1, null, -1, null, -1, 3, 4]\n\nExplanation:\nLRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // cache is {1=1}\nlRUCache.put(2, 2); // cache is {1=1, 2=2}\nlRUCache.get(1);    // return 1\nlRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}\nlRUCache.get(2);    // returns -1 (not found)\nlRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}\nlRUCache.get(1);    // return -1 (not found)\nlRUCache.get(3);    // return 3\nlRUCache.get(4);    // return 4",
    "tags": [
      "\ud83c\udfa8 Design",
      "\ud83d\udd17 Linked List",
      "\ud83d\udcda HashMap"
    ]
  },
  "0148": {
    "shortDescription": "Problem from LeetCode: https://leetcode.com/problems/sort-list/ Description:",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p><strong>Merge sort</strong> for a linked list: split in half, sort each half, then merge the two sorted halves.</p>\n            <ul>\n                <li><strong>Split:</strong> Slow and fast pointers find the middle and cut the list there</li>\n                <li><strong>Sort halves:</strong> Recursively sort the left and right parts</li>\n                <li><strong>Merge:</strong> Repeatedly take the smaller head of the two lists</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Sort List\n\nProblem from LeetCode: https://leetcode.com/problems/sort-list/\n\nDescription:\nGiven the head of a linked list, return the list after sorting it in ascending order.\n\nExample 1:\nInput: head = [4,2,1,3]\nOutput: [1,2,3,4]\n\nExample 2:\nInput: head = [-1,5,3,4,0]\nOutput: [-1,0,3,4,5]\n\nExample 3:\nInput: head = []\nOutput: []",
    "tags": [
      "Medium",
      "Linked List",
      "Sorting",
      "Divide and Conquer"
    ]
  },
  "0206": {
    "shortDescription": "Given the head of a singly linked list, reverse the list and return the reversed list.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine a chain of train cars pointing one direction. We want to reverse them:</p>\n            <ul>\n                <li><strong>prev:</strong> The car we've already processed (starts as None)</li>\n                <li><strong>curr:</strong> The car we're currently working on</li>\n                <li><strong>temp:</strong> Temporary save of next car before we change the link</li>\n                <li><strong>Process:</strong> Disconnect current from next, point it backwards to prev</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 206. Reverse Linked List\n\nProblem from LeetCode: https://leetcode.com/problems/reverse-linked-list/\n\nDescription:\nGiven the head of a singly linked list, reverse the list, and return the reversed list.\n\nExample 1:\nInput: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]\n\nExample 2:\nInput: head = [1,2]\nOutput: [2,1]\n\nExample 3:\nInput: head = []\nOutput: []\n\nConstraints:\n- The number of nodes in the list is the range [0, 5000].\n- -5000 <= Node.val <= 5000\n\nFollow up: A linked list can be reversed either iteratively or recursively. Could you implement both?",
    "tags": [
      "\ud83d\udd17 Linked List"
    ]
  },
  "0234": {
    "shortDescription": "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>To check if a linked list is a palindrome in O(1) space:</p>\n            <ul>\n                <li><strong>Step 1:</strong> Find the middle using slow/fast pointers</li>\n                <li><strong>Step 2:</strong> Reverse the second half of the list</li>\n                <li><strong>Step 3:</strong> Compare first half with reversed second half</li>\n                <li><strong>Result:</strong> If all nodes match, it's a palindrome!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 234. Palindrome Linked List\n\nProblem from LeetCode: https://leetcode.com/problems/palindrome-linked-list/\n\nDescription:\nGiven the head of a singly linked list, return true if it is a palindrome or false otherwise.\n\nExample 1:\nInput: head = [1,2,2,1]\nOutput: true\nExplanation: The list 1->2->2->1 is a palindrome.\n\nExample 2:\nInput: head = [1,2]\nOutput: false\nExplanation: The list 1->2 is not a palindrome.\n\nConstraints:\n- The number of nodes in the list is in the range [1, 10^5].\n- 0 <= Node.val <= 9\n\nFollow up: Could you do it in O(n) time and O(1) space?",
    "tags": [
      "\ud83d\udd17 Linked List",
      "\ud83d\udc49\ud83d\udc48 Two Pointers"
    ]
  },
  "0287": {
    "shortDescription": "Given an array containing n+1 integers where each integer is between 1 and n, find the duplicate using Floyd's Cycle Detection (Tortoise and Hare) algorithm in O(1) space without modifying the array.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Treat the array as a linked list where each value points to an index; a duplicate creates a <strong>cycle</strong>. Floyd's tortoise and hare finds its entrance.</p>\n            <ul>\n                <li><strong>Meet:</strong> Move a slow pointer one step and a fast pointer two steps until they meet</li>\n                <li><strong>Reset:</strong> Put one pointer back at the start</li>\n                <li><strong>Walk together:</strong> Advance both one step at a time; where they meet is the duplicate</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 287: Find the Duplicate Number\n\nProblem from LeetCode: https://leetcode.com/problems/find-the-duplicate-number/\n\nGiven an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.\n\nThere is only one repeated number in nums, return this repeated number.\n\nYou must solve the problem without modifying the array nums and uses only constant extra space.\n\nExample 1:\nInput: nums = [1,3,4,2,2]\nOutput: 2\n\nExample 2:\nInput: nums = [3,1,3,4,2]\nOutput: 3\n\nConstraints:\n- 1 <= n <= 10^5\n- nums.length == n + 1\n- 1 <= nums[i] <= n\n- All the integers in nums appear only once except for precisely one integer which appears two or more times.\n\nFollow up:\n- How can we prove that at least one duplicate number must exist in nums?\n- Can you solve the problem in linear runtime complexity?",
    "tags": [
      "\ud83d\udcca Array"
    ]
  },
  "0876": {
    "shortDescription": "Given the head of a singly linked list, return the middle node. If two middle nodes, return the second one.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine two runners on a track. One runs twice as fast:</p>\n            <ul>\n                <li><strong>Slow pointer:</strong> Moves 1 step at a time \ud83d\udc22</li>\n                <li><strong>Fast pointer:</strong> Moves 2 steps at a time \ud83d\udc07</li>\n                <li><strong>When fast reaches end:</strong> Slow is at the middle!</li>\n                <li><strong>Why?</strong> Fast travels 2x distance, so slow is at halfway</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Middle of the Linked List\n\nProblem from LeetCode: https://leetcode.com/problems/middle-of-the-linked-list/\n\nDescription:\nGiven the head of a singly linked list, return the middle node of the linked list.\nIf there are two middle nodes, return the second middle node.\n\nExample 1:\nInput: head = [1,2,3,4,5]\nOutput: [3,4,5]\nExplanation: The middle node of the list is node 3.\n\nExample 2:\nInput: head = [1,2,3,4,5,6]\nOutput: [4,5,6]\nExplanation: Since the list has two middle nodes with values 3 and 4, we return the second one.",
    "tags": [
      "\ud83d\udd17 Linked List",
      "\ud83d\udc49\ud83d\udc49 Two Pointers"
    ]
  },
  "0098": {
    "shortDescription": "Problem: Given a binary tree, determine if it is a valid BST (left subtree values < node < right subtree values).",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Binary search is like finding a word in a dictionary - <strong>eliminate half</strong> each time:</p>\n            <ul>\n                <li><strong>Check middle:</strong> Look at the middle element</li>\n                <li><strong>Compare:</strong> Is target less or greater?</li>\n                <li><strong>Eliminate:</strong> Discard half that can't contain the answer</li>\n                <li><strong>Repeat:</strong> Continue until found</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Validate Binary Search Tree\n\nProblem from LeetCode: https://leetcode.com/problems/validate-binary-search-tree/\n\nDescription:\nGiven the root of a binary tree, determine if it is a valid binary search tree (BST).\n\nA valid BST is defined as follows:\n- The left subtree of a node contains only nodes with keys less than the node's key.\n- The right subtree of a node contains only nodes with keys greater than the node's key.\n- Both the left and right subtrees must also be binary search trees.\n\nExample 1:\nInput: root = [2,1,3]\nOutput: true\n\nExample 2:\nInput: root = [5,1,4,null,null,3,6]\nOutput: false\nExplanation: The root node's value is 5 but its right child's value is 4.",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83d\udcda Stack",
      "\ud83d\udd0d Binary Search"
    ]
  },
  "0100": {
    "shortDescription": "Problem: Given the roots of two binary trees, check if they are the same or not. Two trees are the same if they are structurally identical and have the same node values.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Same Tree\n\nProblem from LeetCode: https://leetcode.com/problems/same-tree/\n\nDescription:\nGiven the roots of two binary trees p and q, write a function to check if they are the same or not.\nTwo binary trees are considered the same if they are structurally identical, and the nodes have the same value.\n\nExample 1:\nInput: p = [1,2,3], q = [1,2,3]\nOutput: true\n\nExample 2:\nInput: p = [1,2], q = [1,null,2]\nOutput: false\n\nExample 3:\nInput: p = [1,2,1], q = [1,1,2]\nOutput: false",
    "tags": [
      "\ud83c\udf33 Tree"
    ]
  },
  "0102": {
    "shortDescription": "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Binary Tree Level Order Traversal\n\nProblem from LeetCode: https://leetcode.com/problems/binary-tree-level-order-traversal/\n\nDescription:\nGiven the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).\n\nExample 1:\nInput: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]\n\nExample 2:\nInput: root = [1]\nOutput: [[1]]\n\nExample 3:\nInput: root = []\nOutput: []",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83d\udce5 Queue"
    ]
  },
  "0104": {
    "shortDescription": "Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root to a leaf.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Maximum Depth of Binary Tree\n\nProblem from LeetCode: https://leetcode.com/problems/maximum-depth-of-binary-tree/\n\nDescription:\nGiven the root of a binary tree, return its maximum depth.\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n\nExample 1:\nInput: root = [3,9,20,null,null,15,7]\nOutput: 3\n\nExample 2:\nInput: root = [1,null,2]\nOutput: 2",
    "tags": [
      "\ud83c\udf33 Tree"
    ]
  },
  "0105": {
    "shortDescription": "Given preorder and inorder traversal arrays, construct the binary tree. Preorder's first element is root. Find root in inorder to split left/right subtrees.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Construct Binary Tree from Preorder and Inorder Traversal\n\nProblem from LeetCode: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/\n\nDescription:\nGiven two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.\n\nExample 1:\nInput: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\nOutput: [3,9,20,null,null,15,7]\n\nExample 2:\nInput: preorder = [-1], inorder = [-1]\nOutput: [-1]",
    "tags": [
      "\ud83c\udf33 Tree"
    ]
  },
  "0108": {
    "shortDescription": "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(log n)",
    "laymanHtml": "<p>Think of it like building a balanced tree from a sorted phone book:</p>\n            <ul>\n                <li><strong>Middle element:</strong> Becomes the root (ensures balance)</li>\n                <li><strong>Left half:</strong> Recursively build left subtree</li>\n                <li><strong>Right half:</strong> Recursively build right subtree</li>\n                <li><strong>Result:</strong> A perfectly balanced BST!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Convert Sorted Array to Binary Search Tree\n\nProblem from LeetCode: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/\n\nDescription:\nGiven an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.\nA height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.\n\nExample 1:\nInput: nums = [-10,-3,0,5,9]\nOutput: [0,-3,9,-10,null,5]\nExplanation: [0,-10,5,null,-3,null,9] is also accepted.\n\nExample 2:\nInput: nums = [1,3]\nOutput: [3,1]\nExplanation: [1,null,3] and [3,1] are both height-balanced BSTs.",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83d\udd04 Recursion"
    ]
  },
  "0110": {
    "shortDescription": "Problem: Determine if a binary tree is height-balanced. A height-balanced tree has subtrees that differ in height by at most 1.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Balanced Binary Tree\n\nProblem from LeetCode: https://leetcode.com/problems/balanced-binary-tree/\n\nDescription:\nGiven a binary tree, determine if it is height-balanced.\nA height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differs by more than one.\n\nExample 1:\nInput: root = [3,9,20,null,null,15,7]\nOutput: true\n\nExample 2:\nInput: root = [1,2,2,3,3,null,null,4,4]\nOutput: false\n\nExample 3:\nInput: root = []\nOutput: true",
    "tags": [
      "\ud83c\udf33 Tree"
    ]
  },
  "0111": {
    "shortDescription": "Given a binary tree, find its minimum depth \u2014 the number of nodes along the shortest path from root to the nearest leaf.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Use <strong>BFS (level-order traversal)</strong> to find the first leaf node:</p>\n            <ul>\n                <li><strong>Level by Level:</strong> Process nodes layer by layer</li>\n                <li><strong>Leaf Check:</strong> First node with no children = answer!</li>\n                <li><strong>Why BFS?</strong> Guarantees we find shortest path first</li>\n                <li><strong>DFS Alternative:</strong> Must explore all paths to find minimum</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Minimum Depth of Binary Tree\n\nProblem from LeetCode: https://leetcode.com/problems/minimum-depth-of-binary-tree/\n\nDescription:\nGiven a binary tree, find its minimum depth.\nThe minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.\nNote: A leaf is a node with no children.\n\nExample 1:\nInput: root = [3,9,20,null,null,15,7]\nOutput: 2\n\nExample 2:\nInput: root = [2,null,3,null,4,null,5,null,6]\nOutput: 5",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83d\udd0d BFS"
    ]
  },
  "0112": {
    "shortDescription": "Given a binary tree and a target sum, determine if there is a root-to-leaf path where node values sum to target.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "laymanHtml": "<p>Use <strong>DFS</strong> to explore all root-to-leaf paths:</p>\n            <ul>\n                <li><strong>Subtract:</strong> At each node, subtract its value from remaining sum</li>\n                <li><strong>Leaf Check:</strong> At a leaf, check if remaining sum = 0</li>\n                <li><strong>Backtrack:</strong> If path doesn't work, try another</li>\n                <li><strong>Early Exit:</strong> Return true as soon as we find a valid path</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Path Sum\n\nProblem from LeetCode: https://leetcode.com/problems/path-sum/\n\nDescription:\nGiven the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.\nA leaf is a node with no children.\n\nExample 1:\nInput: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22\nOutput: true\nExplanation: The root-to-leaf path with the target sum is 5 -> 4 -> 11 -> 2.\n\nExample 2:\nInput: root = [1,2,3], targetSum = 5\nOutput: false\nExplanation: There two root-to-leaf paths in the tree:\n(1 -> 2): The sum is 3.\n(1 -> 3): The sum is 4.\nThere is no root-to-leaf path with sum = 5.\n\nExample 3:\nInput: root = [], targetSum = 0\nOutput: false\nExplanation: Since the tree is empty, there are no root-to-leaf paths.",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83d\udd04 DFS"
    ]
  },
  "0113": {
    "shortDescription": "Given a binary tree and a target sum, find ALL root-to-leaf paths where node values sum to target.",
    "timeComplexity": "O(n\u00b2)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Use <strong>DFS with Backtracking</strong> to find all valid paths:</p>\n            <ul>\n                <li><strong>Explore:</strong> Add current node to path, subtract from target</li>\n                <li><strong>Collect:</strong> If at leaf and sum matches, save path copy</li>\n                <li><strong>Backtrack:</strong> Remove node from path, try other branches</li>\n                <li><strong>Continue:</strong> Don't stop early, find ALL paths</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Path Sum II\n\nProblem from LeetCode: https://leetcode.com/problems/path-sum-ii/\n\nDescription:\nGiven the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum.\nEach path should be returned as a list of the node values, not node references.\nA root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.\n\nExample 1:\nInput: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22\nOutput: [[5,4,11,2],[5,8,4,5]]\nExplanation: There are two paths whose sum equals targetSum:\n5 + 4 + 11 + 2 = 22\n5 + 8 + 4 + 5 = 22\n\nExample 2:\nInput: root = [1,2,3], targetSum = 5\nOutput: []\n\nExample 3:\nInput: root = [1,2], targetSum = 0\nOutput: []",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83d\udd04 Backtracking"
    ]
  },
  "0114": {
    "shortDescription": "Flatten a binary tree to a linked list in-place. The \"linked list\" should use the right child pointer, following pre-order traversal.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1) Morris",
    "laymanHtml": "<ul>\n                <li><strong>Key Insight:</strong> Move right subtree to rightmost node of left subtree</li>\n                <li><strong>Then:</strong> Move left subtree to right, set left to null</li>\n                <li><strong>Repeat:</strong> Move to right child, continue process</li>\n                <li><strong>O(1) Space:</strong> No recursion stack needed!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Flatten Binary Tree To Linked List\n\nProblem from LeetCode: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/\n\nProblem Statement:\nGiven the root of a binary tree, flatten the tree into a \"linked list\":\n- The \"linked list\" should use the same TreeNode class where the right child pointer \n  points to the next node in the list and the left child pointer is always null.\n- The \"linked list\" should be in the same order as a pre-order traversal of the binary tree.\n\nExample:\nInput: root = [1,2,5,3,4,null,6]\nOutput: [1,null,2,null,3,null,4,null,5,null,6]",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83d\udd17 Linked List"
    ]
  },
  "0124": {
    "shortDescription": "Find the maximum path sum in a binary tree. Path doesn't need to pass through root. Uses DFS, tracking max gain from each subtree and updating global maximum.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Binary Tree Maximum Path Sum\n\nProblem from LeetCode: https://leetcode.com/problems/binary-tree-maximum-path-sum/\n\nDescription:\nA path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. \nA node can only appear in the sequence at most once. Note that the path does not need to pass through the root.\n\nThe path sum of a path is the sum of the node's values in the path.\n\nGiven the root of a binary tree, return the maximum path sum of any non-empty path.\n\nExample 1:\nInput: root = [1,2,3]\nOutput: 6\nExplanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.\n\nExample 2:\nInput: root = [-10,9,20,null,null,15,7]\nOutput: 42\nExplanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83d\udcca Array"
    ]
  },
  "0199": {
    "shortDescription": "Given the root of a binary tree, imagine yourself standing on the right side of it. Return the values of the nodes you can see ordered from top to bottom.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Binary Tree Right Side View\n\nProblem from LeetCode: https://leetcode.com/problems/binary-tree-right-side-view/\n\nDescription:\nGiven the root of a binary tree, imagine yourself standing on the right side of it, \nreturn the values of the nodes you can see ordered from top to bottom.\n\nExample 1:\nInput: root = [1,2,3,null,5,null,4]\nOutput: [1,3,4]\nExplanation: The right side view of the tree is [1,3,4].\n\nExample 2:\nInput: root = [1,null,3]\nOutput: [1,3]\n\nExample 3:\nInput: root = []\nOutput: []",
    "tags": [
      "\ud83c\udf33 Tree"
    ]
  },
  "0208": {
    "shortDescription": "Implement a Trie (prefix tree) with insert, search, and startsWith methods. A Trie efficiently stores and retrieves strings for autocomplete and spell-checking.",
    "timeComplexity": "O(L) per op",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 208. Implement Trie (Prefix Tree)\n\nProblem from LeetCode: https://leetcode.com/problems/implement-trie-prefix-tree/\n\nDescription:\nA trie (pronounced as \"try\") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.\n\nImplement the Trie class:\n- Trie() Initializes the trie object.\n- void insert(String word) Inserts the string word into the trie.\n- boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.\n- boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.\n\nExample 1:\nInput\n[\"Trie\", \"insert\", \"search\", \"search\", \"startsWith\", \"insert\", \"search\"]\n[[], [\"apple\"], [\"apple\"], [\"app\"], [\"app\"], [\"app\"], [\"app\"]]\nOutput\n[null, null, true, false, true, null, true]\n\nExplanation\nTrie trie = new Trie();\ntrie.insert(\"apple\");\ntrie.search(\"apple\");   // return True\ntrie.search(\"app\");     // return False\ntrie.startsWith(\"app\"); // return True\ntrie.insert(\"app\");\ntrie.search(\"app\");     // return True\n\nConstraints:\n- 1 <= word.length, prefix.length <= 2000\n- word and prefix consist only of lowercase English letters.\n- At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83c\udf32 Trie",
      "\ud83c\udfd7\ufe0f Design"
    ]
  },
  "0211": {
    "shortDescription": "Design a data structure supporting addWord and search with wildcard '.'. Uses Trie with DFS for wildcard matching.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A Trie is a <strong>prefix tree</strong> for efficient word lookup:</p>\n            <ul>\n                <li><strong>Nodes:</strong> Each node represents a character</li>\n                <li><strong>Paths:</strong> Words are formed by paths from root</li>\n                <li><strong>Prefix search:</strong> Find all words with a prefix</li>\n                <li><strong>Efficiency:</strong> O(word length) for operations</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 211: Design Add and Search Words Data Structure\n\nProblem from LeetCode: https://leetcode.com/problems/design-add-and-search-words-data-structure/\n\nDesign a data structure that supports adding new words and finding if a string matches any previously added string.\n\nImplement the WordDictionary class:\n- WordDictionary() Initializes the object.\n- void addWord(word) Adds word to the data structure, it can be matched later.\n- bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. \n  word may contain dots '.' where dots can be matched with any letter.\n\nExample:\nInput:\n[\"WordDictionary\",\"addWord\",\"addWord\",\"addWord\",\"search\",\"search\",\"search\",\"search\"]\n[[],[\"bad\"],[\"dad\"],[\"mad\"],[\"pad\"],[\"bad\"],[\".ad\"],[\"b..\"]]\nOutput:\n[null,null,null,null,false,true,true,true]\n\nExplanation:\nWordDictionary wordDictionary = new WordDictionary();\nwordDictionary.addWord(\"bad\");\nwordDictionary.addWord(\"dad\");\nwordDictionary.addWord(\"mad\");\nwordDictionary.search(\"pad\"); // return False\nwordDictionary.search(\"bad\"); // return True\nwordDictionary.search(\".ad\"); // return True\nwordDictionary.search(\"b..\"); // return True\n\nConstraints:\n- 1 <= word.length <= 25\n- word in addWord consists of lowercase English letters.\n- word in search consist of '.' or lowercase English letters.\n- There will be at most 3 dots in word for search queries.\n- At most 10^4 calls will be made to addWord and search.",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83c\udfd7\ufe0f Design"
    ]
  },
  "0212": {
    "shortDescription": "Given an m x n board of characters and a list of words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.",
    "timeComplexity": "O(m \u00d7 n \u00d7 4^L)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Backtracking <strong>explores all possibilities</strong> like solving a maze:</p>\n            <ul>\n                <li><strong>Choose:</strong> Make a decision</li>\n                <li><strong>Explore:</strong> Recursively continue</li>\n                <li><strong>Validate:</strong> Check if path is valid</li>\n                <li><strong>Backtrack:</strong> Undo choice if stuck, try another</li>\n            </ul>\n        </div>\n\n        </section>",
    "fullProblemStatement": "LeetCode 212. Word Search II\n\nProblem from LeetCode: https://leetcode.com/problems/word-search-ii/\n\nDescription:\nGiven an m x n board of characters and a list of strings words, return all words on the board.\n\nEach word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.\n\nExample 1:\nInput: board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]\nOutput: [\"eat\",\"oath\"]\n\nExample 2:\nInput: board = [[\"a\",\"b\"],[\"c\",\"d\"]], words = [\"abcb\"]\nOutput: []\n\nConstraints:\n- m == board.length\n- n == board[i].length\n- 1 <= m, n <= 12\n- board[i][j] is a lowercase English letter.\n- 1 <= words.length <= 3 * 10^4\n- 1 <= words[i].length <= 10\n- words[i] consists of lowercase English letters.\n- All the strings of words are unique.",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83c\udf32 Trie",
      "\ud83d\udd04 Backtracking"
    ]
  },
  "0226": {
    "shortDescription": "Given the root of a binary tree, invert the tree (swap left and right children at every node), and return its root.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h) stack",
    "laymanHtml": "<p>Think of it like looking at a tree in a mirror:</p>\n            <ul>\n                <li><strong>At each node:</strong> Swap the left and right children</li>\n                <li><strong>Recursively:</strong> Do this for every node in the tree</li>\n                <li><strong>Order:</strong> We go deep first (post-order), then swap on the way back up</li>\n                <li><strong>Result:</strong> The entire tree is mirrored!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 226. Invert Binary Tree\n\nProblem from LeetCode: https://leetcode.com/problems/invert-binary-tree/\n\nDescription:\nGiven the root of a binary tree, invert the tree, and return its root.\n\nExample 1:\nInput: root = [4,2,7,1,3,6,9]\nOutput: [4,7,2,9,6,3,1]\n\nExample 2:\nInput: root = [2,1,3]\nOutput: [2,3,1]\n\nExample 3:\nInput: root = []\nOutput: []\n\nConstraints:\n- The number of nodes in the tree is in the range [0, 100].\n- -100 <= Node.val <= 100",
    "tags": [
      "\ud83c\udf33 Binary Tree",
      "\ud83d\udd04 Recursion"
    ]
  },
  "0230": {
    "shortDescription": "Problem: Find the kth smallest element in a binary search tree.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "230. Kth Smallest Element in a BST\nhttps://leetcode.com/problems/kth-smallest-element-in-a-bst/\n\nGiven the root of a binary search tree, and an integer k, return the kth \nsmallest value (1-indexed) of all the values of the nodes in the tree.\n\nTime Complexity: O(H + k) where H is the height of the tree\nSpace Complexity: O(H) for the stack",
    "tags": [
      "\ud83c\udf33 Tree"
    ]
  },
  "0235": {
    "shortDescription": "Find the lowest common ancestor (LCA) of two nodes in a BST. Use BST property: if both nodes are smaller, go left; if both larger, go right; else current is LCA.",
    "timeComplexity": "O(h)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 235: Lowest Common Ancestor of a Binary Search Tree\n\nProblem from LeetCode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/\n\nGiven a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.\n\nAccording to the definition of LCA on Wikipedia: \"The lowest common ancestor is defined between two nodes p and q \nas the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).\"\n\nExample 1:\nInput: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\nOutput: 6\nExplanation: The LCA of nodes 2 and 8 is 6.\n\nExample 2:\nInput: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\nOutput: 2\nExplanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.\n\nExample 3:\nInput: root = [2,1], p = 2, q = 1\nOutput: 2\n\nConstraints:\n- The number of nodes in the tree is in the range [2, 10^5].\n- -10^9 <= Node.val <= 10^9\n- All Node.val are unique.\n- p != q\n- p and q will exist in the BST.",
    "tags": [
      "\ud83c\udf33 Tree"
    ]
  },
  "0297": {
    "shortDescription": "Design an algorithm to serialize a binary tree to a string, and deserialize that string back to the original tree structure. Uses preorder traversal.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 297: Serialize and Deserialize Binary Tree\n\nProblem from LeetCode: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/\n\nSerialization is the process of converting a data structure or object into a sequence of bits so that \nit can be stored in a file or memory buffer, or transmitted across a network connection link to be \nreconstructed later in the same or another computer environment.\n\nDesign an algorithm to serialize and deserialize a binary tree. There is no restriction on how your \nserialization/deserialization algorithm should work. You just need to ensure that a binary tree can \nbe serialized to a string and this string can be deserialized to the original tree structure.\n\nClarification: The input/output format is the same as how LeetCode serializes a binary tree. You do \nnot necessarily need to follow this format, so please be creative and come up with different approaches yourself.\n\nExample 1:\nInput: root = [1,2,3,null,null,4,5]\nOutput: [1,2,3,null,null,4,5]\n\nExample 2:\nInput: root = []\nOutput: []\n\nConstraints:\n- The number of nodes in the tree is in the range [0, 10^4]\n- -1000 <= Node.val <= 1000",
    "tags": [
      "\ud83c\udf33 Tree"
    ]
  },
  "0366": {
    "shortDescription": "Collect and remove leaves repeatedly until tree is empty. Return leaves at each step grouped together.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Calculate <strong>height from bottom</strong> for each node:</p>\n            <ul>\n                <li><strong>Leaf nodes:</strong> Height = 0 (collected first)</li>\n                <li><strong>Internal nodes:</strong> Height = 1 + max(left, right)</li>\n                <li><strong>Group by height:</strong> Same height = same collection round</li>\n                <li><strong>Result:</strong> Nodes grouped by their \"distance from leaves\"</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Find Leaves of Binary Tree\n\nProblem from LeetCode: https://leetcode.com/problems/find-leaves-of-binary-tree/\n\nDescription:\nGiven the root of a binary tree, collect a tree's nodes as if you were doing this:\n1. Collect all the leaf nodes.\n2. Remove all the leaf nodes.\n3. Repeat until the tree is empty.\n\nExample 1:\nInput: root = [1,2,3,4,5]\n    1\n   / \\\n  2   3\n / \\\n4   5\nOutput: [[4,5,3],[2],[1]]\nExplanation:\n[[4,5,3]] represents the leaves in the first round.\n[[2]] represents the leaves in the second round.\n[[1]] represents the leaves in the third round.\n\nExample 2:\nInput: root = [1]\nOutput: [[1]]\n\nConstraints:\nThe number of nodes in the tree is in the range [1, 100].\n-100 <= Node.val <= 100",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83d\udd04 DFS"
    ]
  },
  "0543": {
    "shortDescription": "Problem: Find the diameter (longest path between any two nodes) of a binary tree. The path may or may not pass through the root.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Diameter Of Binary Tree\n\nProblem from LeetCode: https://leetcode.com/problems/diameter-of-binary-tree/\n\nGiven the root of a binary tree, return the length of the diameter of the tree.\n\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree. \nThis path may or may not pass through the root.\n\nThe length of a path between two nodes is represented by the number of edges between them.\n\nExample 1:\n    Input: root = [1,2,3,4,5]\n    Output: 3\n    Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].\n\nExample 2:\n    Input: root = [1,2]\n    Output: 1\n\nConstraints:\n    The number of nodes in the tree is in the range [1, 10^4].\n    -100 <= Node.val <= 100",
    "tags": [
      "\ud83c\udf33 Tree"
    ]
  },
  "0572": {
    "shortDescription": "Problem: Check if a tree is a subtree of another tree. A subtree includes the node and all its descendants.",
    "timeComplexity": "O(m \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Subtree of Another Tree\n\nProblem from LeetCode: https://leetcode.com/problems/subtree-of-another-tree/\n\nDescription:\nGiven the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values as subRoot and false otherwise.\nA subtree of a binary tree is a tree that consists of a node in the original tree and all of this node's descendants.\n\nExample 1:\nInput: root = [3,4,5,1,2], subRoot = [4,1,2]\nOutput: true\n\nExample 2:\nInput: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]\nOutput: false",
    "tags": [
      "\ud83c\udf33 Tree"
    ]
  },
  "1448": {
    "shortDescription": "A node X is \"good\" if there are no nodes with value greater than X on the path from root to X. Count all good nodes.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "laymanHtml": "<p>Track <strong>maximum value seen</strong> on path from root:</p>\n            <ul>\n                <li><strong>Good Node:</strong> Current value \u2265 max value on path</li>\n                <li><strong>DFS:</strong> Pass max value to children</li>\n                <li><strong>Update:</strong> New max = max(current max, current value)</li>\n                <li><strong>Root:</strong> Always good (no ancestors)</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Count Good Nodes In Binary Tree\n\nProblem from LeetCode: https://leetcode.com/problems/count-good-nodes-in-binary-tree/\n\nGiven a binary tree root, a node X in the tree is named good if in the path from root \nto X there are no nodes with a value greater than X.\n\nReturn the number of good nodes in the binary tree.\n\nExample 1:\n                3\n               / \\\n              1   4\n             /   / \\\n            3   1   5\n    Input: root = [3,1,4,3,null,1,5]\n    Output: 4\n    Explanation: Nodes in blue are good.\n    Root Node (3) is always a good node.\n    Node 4 -> (3,4) is the maximum value in the path starting from the root.\n    Node 5 -> (3,4,5) is the maximum value in the path\n    Node 3 -> (3,1,3) is the maximum value in the path.\n\nExample 2:\n                3\n               / \n              3   \n             / \\  \n            4   2 \n    Input: root = [3,3,null,4,2]\n    Output: 3\n    Explanation: Node 2 -> (3, 3, 2) is not good, because \"3\" is higher than it.\n\nExample 3:\n    Input: root = [1]\n    Output: 1\n    Explanation: Root is considered as good.\n\nConstraints:\n    The number of nodes in the binary tree is in the range [1, 10^5].\n    Each node's value is between [-10^4, 10^4].",
    "tags": [
      "\ud83c\udf33 Tree",
      "\ud83d\udd04 DFS"
    ]
  },
  "0215": {
    "shortDescription": "Given an integer array nums and an integer k, return the kth largest element in the array.",
    "timeComplexity": "O(n log k)",
    "spaceComplexity": "O(k)",
    "laymanHtml": "<p>We use a <strong>min-heap of size k</strong> to track the k largest elements:</p>\n            <ul>\n                <li><strong>Min-heap:</strong> Always gives us the smallest element in O(1)</li>\n                <li><strong>Trick:</strong> If we keep only k elements, the smallest of those k IS the kth largest overall!</li>\n                <li><strong>Process:</strong> Add each number, but if heap grows past k, remove the smallest</li>\n                <li><strong>Result:</strong> The heap's minimum (top) is our answer</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 215: Kth Largest Element in an Array\n\nProblem from LeetCode: https://leetcode.com/problems/kth-largest-element-in-an-array/\n\nGiven an integer array nums and an integer k, return the kth largest element in the array.\n\nNote that it is the kth largest element in the sorted order, not the kth distinct element.\n\nCan you solve it without sorting?\n\nExample 1:\nInput: nums = [3,2,1,5,6,4], k = 2\nOutput: 5\n\nExample 2:\nInput: nums = [3,2,3,1,2,4,5,5,6], k = 4\nOutput: 4\n\nConstraints:\n- 1 <= k <= nums.length <= 10^5\n- -10^4 <= nums[i] <= 10^4",
    "tags": [
      "\ud83d\udcca Heap",
      "\ud83d\udd22 Array"
    ]
  },
  "0295": {
    "shortDescription": "Design a data structure that supports adding integers from a data stream and finding the median of all elements added so far. The median is the middle value in an ordered list. If the list size is even, the median is the mean of the two middle values.",
    "timeComplexity": "O(log n) add",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A heap is like a <strong>priority queue</strong> - always access the best element:</p>\n            <ul>\n                <li><strong>Min heap:</strong> Smallest element always on top</li>\n                <li><strong>Max heap:</strong> Largest element always on top</li>\n                <li><strong>Insert/Remove:</strong> O(log n) to maintain order</li>\n                <li><strong>Use case:</strong> Great for \"top K\" problems</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 295: Find Median from Data Stream\n\nProblem from LeetCode: https://leetcode.com/problems/find-median-from-data-stream/\n\nThe median is the middle value in an ordered integer list. If the size of the list is even, \nthere is no middle value, and the median is the mean of the two middle values.\n\n- For example, for arr = [2,3,4], the median is 3.\n- For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.\n\nImplement the MedianFinder class:\n- MedianFinder() initializes the MedianFinder object.\n- void addNum(int num) adds the integer num from the data stream to the data structure.\n- double findMedian() returns the median of all elements so far. Answers within 10^-5 of the actual answer will be accepted.\n\nExample 1:\nInput:\n[\"MedianFinder\", \"addNum\", \"addNum\", \"findMedian\", \"addNum\", \"findMedian\"]\n[[], [1], [2], [], [3], []]\nOutput:\n[null, null, null, 1.5, null, 2.0]\n\nExplanation:\nMedianFinder medianFinder = new MedianFinder();\nmedianFinder.addNum(1);    // arr = [1]\nmedianFinder.addNum(2);    // arr = [1, 2]\nmedianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)\nmedianFinder.addNum(3);    // arr = [1, 2, 3]\nmedianFinder.findMedian(); // return 2.0\n\nConstraints:\n- -10^5 <= num <= 10^5\n- There will be at least one element in the data structure before calling findMedian.\n- At most 5 * 10^4 calls will be made to addNum and findMedian.\n\nFollow up:\n- If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?\n- If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?",
    "tags": [
      "\u26f0\ufe0f Heap"
    ]
  },
  "0355": {
    "shortDescription": "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in their news feed using a min-heap for k-way merge.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Design problems require building <strong>efficient data structures</strong>:</p>\n            <ul>\n                <li><strong>Interface:</strong> Define what operations are needed</li>\n                <li><strong>Data structure:</strong> Choose the right internal representation</li>\n                <li><strong>Trade-offs:</strong> Balance time and space complexity</li>\n                <li><strong>Edge cases:</strong> Handle empty, full, duplicate scenarios</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Design Twitter\n\nProblem from LeetCode: https://leetcode.com/problems/design-twitter/\n\nDescription:\nDesign a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in the user's news feed.\n\nImplement the Twitter class:\n- Twitter() Initializes your twitter object.\n- void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.\n- List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themselves. Tweets must be ordered from most recent to least recent.\n- void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.\n- void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.\n\nExample:\nInput\n[\"Twitter\", \"postTweet\", \"getNewsFeed\", \"follow\", \"postTweet\", \"getNewsFeed\", \"unfollow\", \"getNewsFeed\"]\n[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]\nOutput\n[null, null, [5], null, null, [6, 5], null, [5]]\n\nExplanation:\nTwitter twitter = new Twitter();\ntwitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).\ntwitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]\ntwitter.follow(1, 2);    // User 1 follows user 2.\ntwitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).\ntwitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.\ntwitter.unfollow(1, 2);  // User 1 unfollows user 2.\ntwitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.",
    "tags": [
      "\ud83c\udfd7\ufe0f Design"
    ]
  },
  "0621": {
    "shortDescription": "Given an array of tasks and a cooldown period n, find the minimum time needed to complete all tasks. The same task must have at least n time units between executions.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Always run the task with the most work left, and use idle slots only if nothing else is available inside the cooldown window.</p>\n            <ul>\n                <li><strong>Counts:</strong> Put every task count in a max-heap</li>\n                <li><strong>Round:</strong> Pick up to <code>n + 1</code> different tasks, reducing each count by one</li>\n                <li><strong>Time:</strong> A full round costs <code>n + 1</code>; the last one costs only the tasks run</li>\n                <li><strong>Repeat:</strong> Push the remaining tasks back and continue</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Task Scheduler\n\nProblem from LeetCode: https://leetcode.com/problems/task-scheduler/\n\nGiven a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. \nTasks could be done in any order. Each task is done in one unit of time. \nFor each unit of time, the CPU could complete either one task or just be idle.\n\nHowever, there is a non-negative integer n that represents the cooldown period between two same tasks \n(the same letter in the array), that is that there must be at least n units of time between any two same tasks.\n\nReturn the least number of units of time that the CPU will take to finish all the given tasks.\n\nExample 1:\nInput: tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2\nOutput: 8\nExplanation: \nA -> B -> idle -> A -> B -> idle -> A -> B\nThere is at least 2 units of time between any two same tasks.\n\nExample 2:\nInput: tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 0\nOutput: 6\nExplanation: On this case any permutation of size 6 would work since n = 0.\n[\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"]\n[\"A\",\"B\",\"A\",\"B\",\"A\",\"B\"]\n[\"B\",\"B\",\"B\",\"A\",\"A\",\"A\"]\n...\nAnd so on.\n\nExample 3:\nInput: tasks = [\"A\",\"A\",\"A\",\"A\",\"A\",\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\"], n = 2\nOutput: 16\nExplanation: \nOne possible solution is\nA -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A\n\nConstraints:\n- 1 <= task.length <= 10^4\n- tasks[i] is upper-case English letter.\n- The integer n is in the range [0, 100].",
    "tags": [
      "\ud83d\udcdd Algorithm"
    ]
  },
  "0703": {
    "shortDescription": "Design a class to find the kth largest element in a stream. Initialize with k and an array, then add elements and return kth largest.",
    "timeComplexity": "O(log k) per add",
    "spaceComplexity": "O(k)",
    "laymanHtml": "<p>Keep a <strong>min-heap of exactly k elements</strong>:</p>\n            <ul>\n                <li><strong>Heap stores:</strong> The k largest elements seen so far</li>\n                <li><strong>Root (min):</strong> The kth largest (smallest of the k largest)</li>\n                <li><strong>On add:</strong> If new element > root, replace root</li>\n                <li><strong>Return:</strong> Root is always the answer!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Kth Largest Element In A Stream\n\nProblem from LeetCode: https://leetcode.com/problems/kth-largest-element-in-a-stream/\n\nDescription:\nDesign a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.\n\nImplement KthLargest class:\n- KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.\n- int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.\n\nExample 1:\nInput:\n[\"KthLargest\", \"add\", \"add\", \"add\", \"add\", \"add\"]\n[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]\nOutput:\n[null, 4, 5, 5, 8, 8]\n\nExplanation:\nKthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);\nkthLargest.add(3);   // return 4\nkthLargest.add(5);   // return 5\nkthLargest.add(10);  // return 5\nkthLargest.add(9);   // return 8\nkthLargest.add(4);   // return 8\n\nConstraints:\n1 <= k <= 10^4\n0 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4\n-10^4 <= val <= 10^4\nAt most 10^4 calls will be made to add.\nIt is guaranteed that there will be at least k elements in the array when you search for the kth element.",
    "tags": [
      "\ud83d\udcca Heap",
      "\ud83d\udd04 Design"
    ]
  },
  "0973": {
    "shortDescription": "Given an array of points and an integer k, return the k closest points to the origin (0, 0). Use a max-heap of size k to efficiently find the k smallest distances.",
    "timeComplexity": "O(n log k)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Keep a <strong>max-heap</strong> of the k closest points so far; the farthest of them sits on top and is dropped when something closer arrives.</p>\n            <ul>\n                <li><strong>Distance:</strong> Use squared distance, no square root needed</li>\n                <li><strong>Push:</strong> Add each point to the heap</li>\n                <li><strong>Trim:</strong> If the heap has more than k points, remove the farthest</li>\n                <li><strong>Result:</strong> The points left in the heap</li>\n            </ul>",
    "fullProblemStatement": "LeetCode K Closest Points To Origin\n\nProblem from LeetCode: https://leetcode.com/problems/k-closest-points-to-origin/\n\nGiven an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, \nreturn the k closest points to the origin (0, 0).\n\nThe distance between two points on the X-Y plane is the Euclidean distance (i.e., \u221a(x1 - x2)\u00b2 + (y1 - y2)\u00b2).\n\nYou may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).\n\nExample 1:\nInput: points = [[1,3],[-2,2]], k = 1\nOutput: [[-2,2]]\nExplanation:\nThe distance between (1, 3) and the origin is sqrt(10).\nThe distance between (-2, 2) and the origin is sqrt(8).\nSince sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.\nWe only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].\n\nExample 2:\nInput: points = [[3,3],[5,-1],[-2,4]], k = 2\nOutput: [[3,3],[-2,4]]\nExplanation: The answer [[-2,4],[3,3]] would also be accepted.\n\nConstraints:\n- 1 <= k <= points.length <= 10^4\n- -10^4 <= xi, yi <= 10^4",
    "tags": [
      "\u26f0\ufe0f Heap"
    ]
  },
  "1046": {
    "shortDescription": "Problem: Smash the two heaviest stones together. If unequal, the lighter is destroyed and the heavier loses that weight. Return last stone weight (or 0).",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Repeatedly smash the two heaviest stones. A <strong>max-heap</strong> gives them instantly.</p>\n            <ul>\n                <li><strong>Pick:</strong> Pop the two largest stones y &ge; x</li>\n                <li><strong>Smash:</strong> If they differ, push back <code>y - x</code></li>\n                <li><strong>Finish:</strong> Return the last stone, or 0 if none is left</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Last Stone Weight\n\nProblem from LeetCode: https://leetcode.com/problems/last-stone-weight/\n\nYou are given an array of integers stones where stones[i] is the weight of the ith stone.\n\nWe are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. \nSuppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:\n- If x == y, both stones are destroyed, and\n- If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.\n\nAt the end of the game, there is at most one stone left.\n\nReturn the weight of the last remaining stone. If there are no stones left, return 0.\n\nExample 1:\nInput: stones = [2,7,4,1,8,1]\nOutput: 1\nExplanation: \nWe combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,\nwe combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,\nwe combine 2 and 1 to get 1 so the array converts to [1,1,1] then,\nwe combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.\n\nExample 2:\nInput: stones = [1]\nOutput: 1\n\nConstraints:\n- 1 <= stones.length <= 30\n- 1 <= stones[i] <= 1000",
    "tags": [
      "\ud83d\udcdd Algorithm"
    ]
  },
  "1086": {
    "shortDescription": "Given a list of student scores (id, score), return the top 5 average for each student sorted by id.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Group scores by student, keep top 5 for each:</p>\n            <ul>\n                <li><strong>Group:</strong> Use a dictionary to collect scores per student</li>\n                <li><strong>Sort/Heap:</strong> Keep only top 5 scores for each student</li>\n                <li><strong>Average:</strong> Calculate average of top 5 (integer division)</li>\n                <li><strong>Result:</strong> Return [[id, average]] sorted by id</li>\n            </ul>",
    "fullProblemStatement": "LeetCode High Five\n\nProblem from LeetCode: https://leetcode.com/problems/high-five/\n\nGiven a list of the scores of different students, items, where items[i] = [IDi, scorei] represents one score from a student with IDi, \ncalculate each student's top five average.\n\nReturn the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej] represents the student with IDj \nand their top five average. Sort the array by IDj in ascending order.\n\nA student's top five average is calculated by taking the sum of their top five scores and dividing it by 5 using integer division.\n\nExample 1:\nInput: items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]\nOutput: [[1,87],[2,88]]\nExplanation: \nThe student with ID = 1 got scores 91, 92, 60, 65, 87, and 100. Their top five average is (100 + 92 + 91 + 87 + 65) / 5 = 87.\nThe student with ID = 2 got scores 93, 97, 77, 100, and 76. Their top five average is (100 + 97 + 93 + 77 + 76) / 5 = 88.6, \nwhich rounds down to 88.\n\nExample 2:\nInput: items = [[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100]]\nOutput: [[1,100],[7,100]]\n\nConstraints:\n- 1 <= items.length <= 1000\n- items[i].length == 2\n- 1 <= IDi <= 1000\n- 0 <= scorei <= 100\n- For each IDi, there will be at least five scores.",
    "tags": [
      "\ud83d\udd3a Heap",
      "\ud83d\udcca Sorting"
    ]
  },
  "1851": {
    "shortDescription": "For each query, find the smallest interval containing that query point. Uses sorting + min-heap: process queries in order, maintain valid intervals in heap.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Interval problems deal with <strong>ranges and overlaps</strong>:</p>\n            <ul>\n                <li><strong>Sort:</strong> Usually sort by start time</li>\n                <li><strong>Merge:</strong> Combine overlapping intervals</li>\n                <li><strong>Compare:</strong> Check if intervals overlap</li>\n                <li><strong>Track:</strong> Maintain current merged interval</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Minimum Interval To Include Each Query\n\nProblem from LeetCode: https://leetcode.com/problems/minimum-interval-to-include-each-query/\n\nYou are given a 2D integer array intervals, where intervals[i] = [lefti, righti] \ndescribes the ith interval starting at lefti and ending at righti (inclusive). \nThe size of an interval is defined as the number of integers it contains, or more \nformally righti - lefti + 1.\n\nYou are also given an integer array queries. The answer to the jth query is the \nsize of the smallest interval i such that lefti <= queries[j] <= righti. If no \nsuch interval exists, the answer is -1.\n\nReturn an array containing the answers to the queries.\n\nExample 1:\n    Input: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]\n    Output: [3,3,1,4]\n    Explanation: The queries are processed as follows:\n    - Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.\n    - Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.\n    - Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.\n    - Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.\n\nExample 2:\n    Input: intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]\n    Output: [2,-1,4,6]\n    Explanation: The queries are processed as follows:\n    - Query = 2: The interval [2,3] is the smallest interval containing 2. The answer is 3 - 2 + 1 = 2.\n    - Query = 19: None of the intervals contain 19. The answer is -1.\n    - Query = 5: The interval [2,5] is the smallest interval containing 5. The answer is 5 - 2 + 1 = 4.\n    - Query = 22: The interval [20,25] is the smallest interval containing 22. The answer is 25 - 20 + 1 = 6.\n\nConstraints:\n    1 <= intervals.length <= 10^5\n    1 <= queries.length <= 10^5\n    intervals[i].length == 2\n    1 <= lefti <= righti <= 10^7\n    1 <= queries[j] <= 10^7",
    "tags": [
      "\ud83d\udccf Intervals"
    ]
  },
  "0127": {
    "shortDescription": "Problem: Find the shortest transformation sequence from beginWord to endWord, where each step changes exactly one letter.",
    "timeComplexity": "O(N \u00d7 L\u00b2)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Search for the shortest chain of one-letter changes with <strong>breadth-first search</strong>. Words that differ in one place share a wildcard pattern such as <code>h*t</code>.</p>\n            <ul>\n                <li><strong>Patterns:</strong> Group the words by every wildcard pattern</li>\n                <li><strong>Layers:</strong> From the start word, visit all words reachable by one change before moving deeper</li>\n                <li><strong>Visited:</strong> Never revisit a word</li>\n                <li><strong>Answer:</strong> The layer count when the end word appears, or 0 if it never does</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Word Ladder\n\nProblem from LeetCode: https://leetcode.com/problems/word-ladder/\n\nDescription:\nA transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:\n- Every adjacent pair of words differs by a single letter.\n- Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.\n- sk == endWord\n\nGiven two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.\n\nExample 1:\nInput: beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]\nOutput: 5\nExplanation: One shortest transformation sequence is \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\", which is 5 words long.\n\nExample 2:\nInput: beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]\nOutput: 0\nExplanation: The endWord \"cog\" is not in wordList, so there is no valid transformation sequence.",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83c\udf0a BFS"
    ]
  },
  "0130": {
    "shortDescription": "Problem: Capture all regions that are 4-directionally surrounded by 'X'. A region is captured by flipping all 'O's into 'X's.",
    "timeComplexity": "O(m \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Only <code>O</code> regions that touch the border are safe. Mark those first, then flip whatever is left.</p>\n            <ul>\n                <li><strong>Border DFS:</strong> From every border <code>O</code>, mark all connected <code>O</code> cells as <code>T</code></li>\n                <li><strong>Flip:</strong> Any remaining <code>O</code> is surrounded, so it becomes <code>X</code></li>\n                <li><strong>Restore:</strong> Turn every <code>T</code> back into <code>O</code></li>\n            </ul>",
    "fullProblemStatement": "LeetCode Surrounded Regions\n\nProblem from LeetCode: https://leetcode.com/problems/surrounded-regions/\n\nDescription:\nGiven an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.\nA region is captured by flipping all 'O's into 'X's in that surrounded region.\n\nExample 1:\nInput: board = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]\nOutput: [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]\nExplanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'.\nAny 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'.\nTwo cells are connected if they are adjacent cells connected horizontally or vertically.\n\nExample 2:\nInput: board = [[\"X\"]]\nOutput: [[\"X\"]]",
    "tags": [
      "\ud83d\udd0d DFS"
    ]
  },
  "0133": {
    "shortDescription": "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node contains a value and a list of its neighbors.",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Graph problems are like <strong>exploring a maze</strong>:</p>\n            <ul>\n                <li><strong>Nodes:</strong> Points or locations</li>\n                <li><strong>Edges:</strong> Connections between nodes</li>\n                <li><strong>Traverse:</strong> Use DFS or BFS to explore</li>\n                <li><strong>Track visited:</strong> Avoid infinite loops</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Clone Graph\n\nProblem from LeetCode: https://leetcode.com/problems/clone-graph/\n\nDescription:\nGiven a reference of a node in a connected undirected graph.\nReturn a deep copy (clone) of the graph.\n\nEach node in the graph contains a value (int) and a list (List[Node]) of its neighbors.\n\nclass Node {\n    public int val;\n    public List<Node> neighbors;\n}\n\nTest case format:\nFor simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.\n\nAn adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.\n\nThe given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.\n\nExample 1:\nInput: adjList = [[2,4],[1,3],[2,4],[1,3]]\nOutput: [[2,4],[1,3],[2,4],[1,3]]\nExplanation: There are 4 nodes in the graph.\n1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n\nExample 2:\nInput: adjList = [[]]\nOutput: [[]]\nExplanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.\n\nExample 3:\nInput: adjList = []\nOutput: []\nExplanation: This an empty graph, it does not have any nodes.",
    "tags": [
      "\ud83d\udd17 Graph"
    ]
  },
  "0200": {
    "shortDescription": "Given a 2D grid of '1's (land) and '0's (water), count the number of islands. An island is formed by connecting adjacent lands horizontally or vertically.",
    "timeComplexity": "O(m\u00d7n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine you're flying over an ocean with scattered islands:</p>\n            <ul>\n                <li><strong>Scan the map:</strong> Go through each cell from top-left to bottom-right</li>\n                <li><strong>Found land?:</strong> This is a new island! Increment counter</li>\n                <li><strong>Explore:</strong> Use DFS to visit all connected land cells (mark them as visited)</li>\n                <li><strong>Why mark visited?:</strong> So we don't count the same island twice</li>\n                <li><strong>Result:</strong> Number of times we found \"new land\" = number of islands</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Number of Islands\n\nProblem from LeetCode: https://leetcode.com/problems/number-of-islands/\n\nDescription:\nGiven an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.\n\nExample 1:\nInput: grid = [\n  [\"1\",\"1\",\"1\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"0\",\"0\"]\n]\nOutput: 1\n\nExample 2:\nInput: grid = [\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"1\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"1\",\"1\"]\n]\nOutput: 3",
    "tags": [
      "\ud83d\udcca Graph",
      "\ud83d\udd0d DFS/BFS",
      "\ud83d\udce6 Matrix"
    ]
  },
  "0207": {
    "shortDescription": "Given numCourses and prerequisites pairs [a, b] (meaning course a requires course b first), determine if you can finish all courses. Essentially: detect if there's a cycle in the dependency graph.",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "laymanHtml": "<p>This problem asks: <strong>Can you complete all courses given their prerequisites?</strong></p>\n            <ul>\n                <li><strong>Build a graph:</strong> Course B \u2192 Course A means \"B is needed for A\"</li>\n                <li><strong>The key question:</strong> Is there a cycle? If A needs B, B needs C, and C needs A, it's impossible!</li>\n                <li><strong>DFS approach:</strong> Follow paths through the graph. If we revisit a node we're currently exploring, it's a cycle</li>\n                <li><strong>No cycle = can finish all courses!</strong></li>\n            </ul>",
    "fullProblemStatement": "LeetCode Course Schedule\n\nProblem from LeetCode: https://leetcode.com/problems/course-schedule/\n\nDescription:\nThere are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.\n\nFor example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.\nReturn true if you can finish all courses. Otherwise, return false.\n\nExample 1:\nInput: numCourses = 2, prerequisites = [[1,0]]\nOutput: true\nExplanation: There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0. So it is possible.\n\nExample 2:\nInput: numCourses = 2, prerequisites = [[1,0],[0,1]]\nOutput: false\nExplanation: There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.",
    "tags": [
      "\ud83d\udd17 Graphs",
      "\ud83d\udd04 DFS / Topological Sort"
    ]
  },
  "0210": {
    "shortDescription": "Problem: Find an ordering of courses such that all prerequisites are satisfied. Return empty if impossible (cycle).",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Graph problems are like <strong>exploring a maze</strong>:</p>\n            <ul>\n                <li><strong>Nodes:</strong> Points or locations</li>\n                <li><strong>Edges:</strong> Connections between nodes</li>\n                <li><strong>Traverse:</strong> Use DFS or BFS to explore</li>\n                <li><strong>Track visited:</strong> Avoid infinite loops</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 210: Course Schedule II\n\nProblem from LeetCode: https://leetcode.com/problems/course-schedule-ii/\n\nThere are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. \nYou are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must \ntake course bi first if you want to take course ai.\n\nFor example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.\n\nReturn the ordering of courses you should take to finish all courses. If there are many valid \nanswers, return any of them. If it is impossible to finish all courses, return an empty array.\n\nExample 1:\nInput: numCourses = 2, prerequisites = [[1,0]]\nOutput: [0,1]\nExplanation: There are a total of 2 courses to take. To take course 1 you should have finished \ncourse 0. So the correct course order is [0,1].\n\nExample 2:\nInput: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\nOutput: [0,1,2,3] or [0,2,1,3]\nExplanation: There are a total of 4 courses to take. To take course 3 you should have finished \nboth courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.\nSo one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].\n\nExample 3:\nInput: numCourses = 1, prerequisites = []\nOutput: [0]\n\nConstraints:\n- 1 <= numCourses <= 2000\n- 0 <= prerequisites.length <= numCourses * (numCourses - 1)\n- prerequisites[i].length == 2\n- 0 <= ai, bi < numCourses\n- ai != bi\n- All the pairs [ai, bi] are distinct.",
    "tags": [
      "\ud83d\udd17 Graph"
    ]
  },
  "0261": {
    "shortDescription": "Problem from LeetCode: https://leetcode.com/problems/graph-valid-tree/ Description:",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A stack works like a <strong>pile of plates</strong> - last in, first out (LIFO):</p>\n            <ul>\n                <li><strong>Push:</strong> Add item to the top</li>\n                <li><strong>Pop:</strong> Remove and return the top item</li>\n                <li><strong>Peek:</strong> Look at top without removing</li>\n                <li><strong>Match pairs:</strong> Great for matching brackets, parentheses</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 261. Graph Valid Tree\n\nProblem from LeetCode: https://leetcode.com/problems/graph-valid-tree/\n\nDescription:\nYou have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.\n\nReturn true if the edges of the given graph make up a valid tree, and false otherwise.\n\nA graph is a valid tree if:\n- It is connected (there is a path between every pair of nodes).\n- It has n - 1 edges.\n- It has no cycles.\n\nExample 1:\nInput: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]\nOutput: true\nExplanation: The graph is a valid tree with 5 nodes and 4 edges.\n\nExample 2:\nInput: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]\nOutput: false\nExplanation: The graph has a cycle: 1-2-3-1.\n\nConstraints:\n- 1 <= n <= 2000\n- 0 <= edges.length <= 5000\n- edges[i].length == 2\n- 0 <= ai, bi < n\n- ai != bi\n- There are no self-loops or repeated edges.",
    "tags": [
      "Medium",
      "Graph",
      "Union Find",
      "DFS/BFS"
    ]
  },
  "0269": {
    "shortDescription": "Given a sorted list of words in an alien language, determine the character order. Build a directed graph from character precedence, then use topological sort.",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Graph problems are like <strong>exploring a maze</strong>:</p>\n            <ul>\n                <li><strong>Nodes:</strong> Points or locations</li>\n                <li><strong>Edges:</strong> Connections between nodes</li>\n                <li><strong>Traverse:</strong> Use DFS or BFS to explore</li>\n                <li><strong>Track visited:</strong> Avoid infinite loops</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 269. Alien Dictionary\n\nProblem from LeetCode: https://leetcode.com/problems/alien-dictionary/\n\nDescription:\nThere is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.\n\nYou are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.\n\nReturn a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return \"\". If there are multiple solutions, return any of them.\n\nExample 1:\nInput: words = [\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"]\nOutput: \"wertf\"\n\nExample 2:\nInput: words = [\"z\",\"x\"]\nOutput: \"zx\"\n\nExample 3:\nInput: words = [\"z\",\"x\",\"z\"]\nOutput: \"\"\nExplanation: The order is invalid, so return \"\".",
    "tags": [
      "\ud83d\udd17 Graph"
    ]
  },
  "0277": {
    "shortDescription": "Among n people, find the celebrity (everyone knows them, they know no one). Use knows(a, b) API which returns if a knows b.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p><strong>Two-pass algorithm:</strong></p>\n            <ul>\n                <li><strong>Pass 1:</strong> Eliminate non-celebrities by asking \"does A know B?\"</li>\n                <li><strong>If A knows B:</strong> A can't be celebrity (celebrities know no one)</li>\n                <li><strong>If A doesn't know B:</strong> B can't be celebrity (everyone knows celebrity)</li>\n                <li><strong>Pass 2:</strong> Verify the candidate is actually a celebrity</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 277. Find the Celebrity\n\nProblem from LeetCode: https://leetcode.com/problems/find-the-celebrity/\n\nDescription:\nSuppose you are at a party with n people (labeled from 0 to n - 1), and among them, there may exist one celebrity. \nThe definition of a celebrity is that all the other n - 1 people know him/her, but he/she does not know any of them.\n\nNow you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions \nlike: \"Hi, A. Do you know B?\" to get information about whether A knows B. You need to find out the celebrity (or verify there is not one) \nby asking as few questions as possible (in the asymptotic sense).\n\nYou are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n). \nThere will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. \nIf there is no celebrity, return -1.\n\nExample 1:\nInput: graph = [[1,1,0],[0,1,0],[1,1,1]]\nOutput: 1\nExplanation: There are three persons labeled with 0, 1 and 2. graph[i][j] = 1 means person i knows person j, otherwise graph[i][j] = 0 means person i does not know person j. The celebrity is the person labeled as 1 because both 0 and 2 know him but 1 does not know anybody.\n\nExample 2:\nInput: graph = [[1,0,1],[1,1,0],[0,1,1]]\nOutput: -1\nExplanation: There is no celebrity.\n\nConstraints:\n- n == graph.length\n- n == graph[i].length\n- 2 <= n <= 100\n- graph[i][j] is 0 or 1.\n- graph[i][i] == 1",
    "tags": [
      "\ud83d\udcca Graph",
      "\ud83d\udd04 Two Pass"
    ]
  },
  "0286": {
    "shortDescription": "Fill each empty room with distance to nearest gate. -1 = wall, 0 = gate, INF = empty room.",
    "timeComplexity": "O(m\u00d7n)",
    "spaceComplexity": "O(m\u00d7n)",
    "laymanHtml": "<p><strong>Multi-source BFS</strong> from all gates simultaneously:</p>\n            <ul>\n                <li><strong>Start:</strong> Add all gates to queue (distance 0)</li>\n                <li><strong>Expand:</strong> BFS level by level, incrementing distance</li>\n                <li><strong>Update:</strong> Only update cells with larger distances</li>\n                <li><strong>Result:</strong> Each cell gets distance to nearest gate</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 286. Walls and Gates\n\nProblem from LeetCode: https://leetcode.com/problems/walls-and-gates/\n\nDescription:\nYou are given an m x n grid rooms initialized with these three possible values:\n- -1: A wall or an obstacle\n- 0: A gate\n- INF (2^31 - 1): Empty room\n\nFill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.\n\nExample 1:\nInput: rooms = [\n  [2147483647, -1, 0, 2147483647],\n  [2147483647, 2147483647, 2147483647, -1],\n  [2147483647, -1, 2147483647, -1],\n  [0, -1, 2147483647, 2147483647]\n]\nOutput: [\n  [3, -1, 0, 1],\n  [2, 2, 1, -1],\n  [1, -1, 2, -1],\n  [0, -1, 3, 4]\n]\nExplanation: \n- The gate at (0,2) can reach empty rooms at (0,0), (0,3), (1,0), (1,1), (1,2), (2,0), (2,2), (3,2), (3,3)\n- The gate at (3,0) can reach empty rooms at (0,0), (1,0), (2,0), (3,2), (3,3)\n- The closest gate for the room at (0,0) is at (3,0), which is 3 steps away",
    "tags": [
      "\ud83d\udcca Graph",
      "\ud83d\udd0d BFS"
    ]
  },
  "0323": {
    "shortDescription": "Problem: Given n nodes and edges, find the number of connected components in an undirected graph.",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Count separate islands in a graph: start a DFS from every unvisited node and each start is one new component.</p>\n            <ul>\n                <li><strong>Graph:</strong> Build an adjacency list from the edges</li>\n                <li><strong>Explore:</strong> From an unvisited node, mark everything reachable</li>\n                <li><strong>Count:</strong> Add one for each new start</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Number Of Connected Components In An Undirected Graph\n\nProblem from LeetCode: https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/\n\nDescription:\nYou have a graph of n nodes. You are given an integer n and an array edges where \nedges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.\n\nReturn the number of connected components in the graph.\n\nExample 1:\nInput: n = 5, edges = [[0,1],[1,2],[3,4]]\nOutput: 2\n\nExample 2:\nInput: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]\nOutput: 1\n\nConstraints:\n1 <= n <= 2000\n1 <= edges.length <= 5000\nedges[i].length == 2\n0 <= ai <= bi < n\nai != bi\nThere are no repeated edges.",
    "tags": [
      "\ud83d\udd17 Graph"
    ]
  },
  "0329": {
    "shortDescription": "Given an m x n matrix of integers, return the length of the longest increasing path. From each cell, you can move in 4 directions (up, down, left, right). Uses DFS with memoization to cache path lengths.",
    "timeComplexity": "O(m\u00d7n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Walking uphill on a grid with <strong>DFS and memoization</strong>:</p>\n            <ul>\n                <li><strong>Start anywhere:</strong> Try every cell as a starting point</li>\n                <li><strong>Move to larger neighbors:</strong> Only step up, down, left, right onto a strictly larger value</li>\n                <li><strong>Memoize:</strong> Store the longest path from each cell so it is computed once</li>\n                <li><strong>Answer:</strong> The maximum stored length</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Longest Increasing Path In A Matrix\n\nProblem from LeetCode: https://leetcode.com/problems/longest-increasing-path-in-a-matrix/\n\nDescription:\nGiven an m x n integers matrix, return the length of the longest increasing path in matrix.\n\nFrom each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).\n\nExample 1:\nInput: matrix = [[9,9,4],[6,6,8],[2,1,1]]\nOutput: 4\nExplanation: The longest increasing path is [1, 2, 6, 9].\n\nExample 2:\nInput: matrix = [[3,4,5],[3,2,6],[2,2,1]]\nOutput: 4\nExplanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.\n\nExample 3:\nInput: matrix = [[1]]\nOutput: 1\n\nConstraints:\nm == matrix.length\nn == matrix[i].length\n1 <= m, n <= 200\n0 <= matrix[i][j] <= 2^31 - 1",
    "tags": [
      "\ud83d\udd32 Matrix",
      "\ud83e\uddee DP"
    ]
  },
  "0332": {
    "shortDescription": "Given airline tickets, reconstruct the itinerary starting from \"JFK\". If multiple valid itineraries exist, return the one with smallest lexical order. Uses Hierholzer's algorithm to find Eulerian path.",
    "timeComplexity": "O(E log E)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Use every ticket exactly once, always preferring the smallest airport name first. This is an <strong>Eulerian path</strong> found with DFS.</p>\n            <ul>\n                <li><strong>Sort:</strong> Sort each airport's destinations</li>\n                <li><strong>DFS:</strong> Follow tickets from JFK until stuck</li>\n                <li><strong>Post-order:</strong> Add an airport to the route when it has no tickets left</li>\n                <li><strong>Reverse:</strong> The reversed list is the itinerary</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Reconstruct Itinerary\n\nProblem from LeetCode: https://leetcode.com/problems/reconstruct-itinerary/\n\nDescription:\nYou are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.\n\nAll of the tickets belong to a man who departs from \"JFK\", thus, the itinerary must begin with \"JFK\". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.\n\nFor example, the itinerary [\"JFK\", \"LGA\"] has a smaller lexical order than [\"JFK\", \"LGB\"].\nYou may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.\n\nExample 1:\nInput: tickets = [[\"MUC\",\"LHR\"],[\"JFK\",\"MUC\"],[\"SFO\",\"SJC\"],[\"LHR\",\"SFO\"]]\nOutput: [\"JFK\",\"MUC\",\"LHR\",\"SFO\",\"SJC\"]\n\nExample 2:\nInput: tickets = [[\"JFK\",\"SFO\"],[\"JFK\",\"ATL\"],[\"SFO\",\"ATL\"],[\"ATL\",\"JFK\"],[\"ATL\",\"SFO\"]]\nOutput: [\"JFK\",\"ATL\",\"JFK\",\"SFO\",\"ATL\",\"SFO\"]\nExplanation: Another possible reconstruction is [\"JFK\",\"SFO\",\"ATL\",\"JFK\",\"ATL\",\"SFO\"] but it is larger in lexical order.\n\nConstraints:\n1 <= tickets.length <= 300\ntickets[i].length == 2\nfromi.length == 3\ntoi.length == 3\nfromi and toi consist of uppercase English letters.\nfromi != toi",
    "tags": [
      "\ud83d\udcdd Algorithm"
    ]
  },
  "0417": {
    "shortDescription": "Find all cells where water can flow to both Pacific (top/left edges) and Atlantic (bottom/right edges) oceans. Water flows from higher to lower or equal cells.",
    "timeComplexity": "O(m \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Graph problems are like <strong>exploring a maze</strong>:</p>\n            <ul>\n                <li><strong>Nodes:</strong> Points or locations</li>\n                <li><strong>Edges:</strong> Connections between nodes</li>\n                <li><strong>Traverse:</strong> Use DFS or BFS to explore</li>\n                <li><strong>Track visited:</strong> Avoid infinite loops</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Pacific Atlantic Water Flow\n\nProblem from LeetCode: https://leetcode.com/problems/pacific-atlantic-water-flow/\n\nThere is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. \nThe Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches \nthe island's right and bottom edges.\n\nThe island is partitioned into a grid of square cells. You are given an m x n integer matrix \nheights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).\n\nThe island receives a lot of rain, and the rain water can flow to neighboring cells directly \nnorth, south, east, and west if the neighboring cell's height is less than or equal to the \ncurrent cell's height. Water can flow from any cell adjacent to an ocean into the ocean.\n\nReturn a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water \ncan flow from cell (ri, ci) to both the Pacific and Atlantic oceans.\n\nExample 1:\n    Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]\n    Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]\n    Explanation: The following cells can flow to both the Pacific and Atlantic oceans:\n    - [0,4]: [0,4] -> Pacific Ocean \n             [0,4] -> Atlantic Ocean\n    - [1,3]: [1,3] -> [0,3] -> Pacific Ocean \n             [1,3] -> [1,4] -> Atlantic Ocean\n    - [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean \n             [1,4] -> Atlantic Ocean\n    - [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean \n             [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean\n    - [3,0]: [3,0] -> Pacific Ocean \n             [3,0] -> [4,0] -> Atlantic Ocean\n    - [3,1]: [3,1] -> [3,0] -> Pacific Ocean \n             [3,1] -> [4,1] -> Atlantic Ocean\n    - [4,0]: [4,0] -> Pacific Ocean \n             [4,0] -> Atlantic Ocean\n\nExample 2:\n    Input: heights = [[2,1],[1,2]]\n    Output: [[0,0],[0,1],[1,0],[1,1]]\n    Explanation: Water can flow to both the Pacific and Atlantic Ocean from all cells.\n\nConstraints:\n    m == heights.length\n    n == heights[r].length\n    1 <= m, n <= 200\n    0 <= heights[r][c] <= 10^5",
    "tags": [
      "\ud83d\udd17 Graph"
    ]
  },
  "0547": {
    "shortDescription": "Given a matrix where isConnected[i][j] = 1 if city i and j are directly connected, find the total number of provinces (connected components).",
    "timeComplexity": "O(n\u00b2)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Use <strong>DFS/BFS or Union-Find</strong> to count connected components:</p>\n            <ul>\n                <li><strong>DFS Approach:</strong> Start from unvisited city, mark all reachable as visited</li>\n                <li><strong>Count:</strong> Each DFS traversal = one province</li>\n                <li><strong>Union-Find:</strong> Union connected cities, count unique parents</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Number Of Provinces\n\nProblem from LeetCode: https://leetcode.com/problems/number-of-provinces/\n\nThere are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, \nand city b is connected directly with city c, then city a is connected indirectly with city c.\n\nA province is a group of directly or indirectly connected cities and no other cities outside of the group.\n\nYou are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are \ndirectly connected, and isConnected[i][j] = 0 otherwise.\n\nReturn the total number of provinces.\n\nExample 1:\n    Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]\n    Output: 2\n\nExample 2:\n    Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]\n    Output: 3\n\nConstraints:\n    1 <= n <= 200\n    n == isConnected.length\n    n == isConnected[i].length\n    isConnected[i][j] is 1 or 0.\n    isConnected[i][i] == 1\n    isConnected[i][j] == isConnected[j][i]",
    "tags": [
      "\ud83d\udcca Graph",
      "\ud83d\udd17 Union Find"
    ]
  },
  "0684": {
    "shortDescription": "Problem: Find the edge that, if removed, would result in a tree (no cycle). Return the last such edge.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Add the edges one by one and use <strong>Union-Find</strong> to see whether the two ends are already connected.</p>\n            <ul>\n                <li><strong>Find:</strong> Each node has a root representing its group</li>\n                <li><strong>Union:</strong> Merge the groups of the two ends</li>\n                <li><strong>Cycle:</strong> If they already share a root, this edge closes a cycle and is the answer</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Redundant Connection\n\nProblem from LeetCode: https://leetcode.com/problems/redundant-connection/\n\nDescription:\nIn this problem, a tree is an undirected graph that is connected and has no cycles.\n\nYou are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.\n\nReturn an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.\n\nExample 1:\nInput: edges = [[1,2],[1,3],[2,3]]\nOutput: [2,3]\n\nExample 2:\nInput: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]\nOutput: [1,4]\n\nConstraints:\nn == edges.length\n3 <= n <= 1000\nedges[i].length == 2\n1 <= ai < bi <= edges.length\nai != bi\nThere are no repeated edges.\nThe given graph is connected.",
    "tags": [
      "\ud83d\udd17 Union Find"
    ]
  },
  "0695": {
    "shortDescription": "Given a 2D grid where 1 represents land and 0 represents water, find the maximum area of an island (group of 1s connected 4-directionally).",
    "timeComplexity": "O(m\u00d7n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Graph problems are like <strong>exploring a maze</strong>:</p>\n            <ul>\n                <li><strong>Nodes:</strong> Points or locations</li>\n                <li><strong>Edges:</strong> Connections between nodes</li>\n                <li><strong>Traverse:</strong> Use DFS or BFS to explore</li>\n                <li><strong>Track visited:</strong> Avoid infinite loops</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Max Area Of Island\n\nProblem from LeetCode: https://leetcode.com/problems/max-area-of-island/\n\nYou are given an m x n binary matrix grid. An island is a group of 1's (representing land) \nconnected 4-directionally (horizontal or vertical). You may assume all four edges of the \ngrid are surrounded by water.\n\nThe area of an island is the number of cells with a value 1 in the island.\n\nReturn the maximum area of an island in grid. If there is no island, return 0.\n\nExample 1:\n    Input: grid = [\n        [0,0,1,0,0,0,0,1,0,0,0,0,0],\n        [0,0,0,0,0,0,0,1,1,1,0,0,0],\n        [0,1,1,0,1,0,0,0,0,0,0,0,0],\n        [0,1,0,0,1,1,0,0,1,0,1,0,0],\n        [0,1,0,0,1,1,0,0,1,1,1,0,0],\n        [0,0,0,0,0,0,0,0,0,0,1,0,0],\n        [0,0,0,0,0,0,0,1,1,1,0,0,0],\n        [0,0,0,0,0,0,0,1,1,0,0,0,0]\n    ]\n    Output: 6\n    Explanation: The answer is not 11, because the island must be connected 4-directionally.\n\nExample 2:\n    Input: grid = [[0,0,0,0,0,0,0,0]]\n    Output: 0\n\nConstraints:\n    m == grid.length\n    n == grid[i].length\n    1 <= m, n <= 50\n    grid[i][j] is either 0 or 1.",
    "tags": [
      "\ud83d\udd17 Graph",
      "\ud83d\udd0d DFS"
    ]
  },
  "0743": {
    "shortDescription": "Given a network of n nodes and weighted edges, find the time for a signal to reach all nodes from source k. Return -1 if impossible.",
    "timeComplexity": "O(E log V)",
    "spaceComplexity": "O(V + E)",
    "laymanHtml": "<p>Use <strong>Dijkstra's algorithm</strong> to find shortest paths from source to all nodes:</p>\n            <ul>\n                <li><strong>Min-Heap:</strong> Always process the node with smallest known distance</li>\n                <li><strong>Relaxation:</strong> Update neighbors if we found a shorter path</li>\n                <li><strong>Answer:</strong> Maximum distance among all reachable nodes</li>\n                <li><strong>Unreachable:</strong> If any node has \u221e distance, return -1</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Network Delay Time\n\nProblem from LeetCode: https://leetcode.com/problems/network-delay-time/\n\nYou are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges \ntimes[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to \ntravel from source to target.\n\nWe will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. \nIf it is impossible for all the n nodes to receive the signal, return -1.\n\nExample 1:\nInput: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2\nOutput: 2\n\nExample 2:\nInput: times = [[1,2,1]], n = 2, k = 1\nOutput: 1\n\nExample 3:\nInput: times = [[1,2,1]], n = 2, k = 2\nOutput: -1\n\nConstraints:\n- 1 <= k <= n <= 100\n- 1 <= times.length <= 6000\n- times[i].length == 3\n- 1 <= ui, vi <= n\n- ui != vi\n- 0 <= wi <= 100\n- All the pairs (ui, vi) are unique (i.e., no multiple edges).",
    "tags": [
      "\ud83d\udcca Graph",
      "\ud83d\udd0d Dijkstra"
    ]
  },
  "0778": {
    "shortDescription": "Find the minimum time to swim from top-left to bottom-right. At time t, you can swim to adjacent squares with elevation \u2264 t. Uses Dijkstra/Min-Heap to find path with minimum maximum elevation.",
    "timeComplexity": "O(n\u00b2 log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Find the path whose <strong>highest cell</strong> is as low as possible. A min-heap always expands the lowest reachable cell first (a Dijkstra-style search).</p>\n            <ul>\n                <li><strong>Start:</strong> Push the top-left cell</li>\n                <li><strong>Expand:</strong> Pop the cell with the lowest water level needed</li>\n                <li><strong>Neighbours:</strong> Their cost is the larger of the current level and their own height</li>\n                <li><strong>Finish:</strong> The level at which the bottom-right cell is popped</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Swim In Rising Water\n\nProblem from LeetCode: https://leetcode.com/problems/swim-in-rising-water\n\nDescription:\nYou are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).\n\nThe rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.\n\nReturn the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).\n\nExample 1:\nInput: grid = [[0,2],[1,3]]\nOutput: 3\nExplanation:\nAt time 0, you are at position (0, 0).\nYou cannot swim to (0, 1) because the water depth at (0, 1) is 2.\nYou cannot swim to (1, 0) because the water depth at (1, 0) is 1.\nYou must wait until time 1, when you can swim anywhere in the grid.\nAt time 1, you can swim to (1, 0).\nAt time 2, you cannot swim to (1, 1), again because the water depth at (1, 1) is 3.\nYou must wait until time 3 to swim to the bottom right corner.\n\nExample 2:\nInput: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]\nOutput: 16\nExplanation: The final route is shown in the grid.\n\nConstraints:\nn == grid.length\nn == grid[i].length\n1 <= n <= 50\n0 <= grid[i][j] < n^2\nEach value grid[i][j] is unique.",
    "tags": [
      "\ud83d\udcdd Algorithm"
    ]
  },
  "0787": {
    "shortDescription": "Find the cheapest price from source to destination with at most K stops. Uses Bellman-Ford algorithm: relax all edges K+1 times.",
    "timeComplexity": "O(K \u00d7 E)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Finding the cheapest route with <strong>Bellman-Ford</strong>:</p>\n            <ul>\n                <li><strong>Rounds:</strong> At most K stops means K+1 rounds of edge relaxation</li>\n                <li><strong>Snapshot:</strong> Each round relaxes edges using the previous round's costs</li>\n                <li><strong>Relax:</strong> Keep the lower cost to each city</li>\n                <li><strong>Answer:</strong> The cost of the destination after the last round</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Cheapest Flights Within K Stops\n\nProblem from LeetCode: https://leetcode.com/problems/cheapest-flights-within-k-stops/\n\nDescription:\nThere are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.\n\nYou are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.\n\nExample 1:\nInput: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1\nOutput: 700\nExplanation:\nThe graph is shown above.\nThe optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.\nNote that the path through cities [0,2,3] is cheaper but is invalid because it uses 2 stops.\n\nExample 2:\nInput: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1\nOutput: 200\nExplanation:\nThe graph is shown above.\nThe optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.\n\nExample 3:\nInput: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0\nOutput: 500\nExplanation:\nThe graph is shown above.\nThe optimal path with no stops from city 0 to 2 is marked in red and has cost 500.\n\nConstraints:\n1 <= n <= 100\n0 <= flights.length <= (n * (n - 1) / 2)\nflights[i].length == 3\n0 <= fromi, toi < n\nfromi != toi\n1 <= pricei <= 104\nThere will not be any multiple flights between two cities.\n0 <= src, dst, k < n\nsrc != dst",
    "tags": [
      "\ud83d\udcca Graph"
    ]
  },
  "0994": {
    "shortDescription": "Problem: Every minute, fresh oranges adjacent to rotten oranges become rotten. Return the minimum minutes until no fresh oranges remain, or -1 if impossible.",
    "timeComplexity": "O(m \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Rot spreads one minute at a time to the four neighbours, which is a <strong>multi-source BFS</strong>.</p>\n            <ul>\n                <li><strong>Start:</strong> Queue every rotten orange and count the fresh ones</li>\n                <li><strong>Minute:</strong> Rot all fresh neighbours of the current queue and count one minute</li>\n                <li><strong>Answer:</strong> The minutes when no fresh orange remains, or -1 if some are unreachable</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Rotting Oranges\n\nProblem from LeetCode: https://leetcode.com/problems/rotting-oranges/\n\nYou are given an m x n grid where each cell can have one of three values:\n- 0 representing an empty cell,\n- 1 representing a fresh orange, or\n- 2 representing a rotten orange.\n\nEvery minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. \nIf this is impossible, return -1.\n\nExample 1:\nInput: grid = [[2,1,1],[1,1,0],[0,1,1]]\nOutput: 4\n\nExample 2:\nInput: grid = [[2,1,1],[0,1,1],[1,0,1]]\nOutput: -1\nExplanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.\n\nExample 3:\nInput: grid = [[0,2]]\nOutput: 0\nExplanation: Since there are already no fresh oranges at minute 0, the answer is just 0.\n\nConstraints:\n- m == grid.length\n- n == grid[i].length\n- 1 <= m, n <= 10\n- grid[i][j] is 0, 1, or",
    "tags": [
      "\ud83d\udcdd Algorithm"
    ]
  },
  "1584": {
    "shortDescription": "Problem from LeetCode: https://leetcode.com/problems/min-cost-to-connect-all-points/ You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Connect all points with the smallest total wire length using <strong>Prim's algorithm</strong> on Manhattan distances.</p>\n            <ul>\n                <li><strong>Start:</strong> Begin at point 0 with cost 0</li>\n                <li><strong>Pick:</strong> Take the cheapest edge to a point not yet connected</li>\n                <li><strong>Grow:</strong> Add that point and push its distances to the unconnected points</li>\n                <li><strong>Done:</strong> Sum the edge costs once all points are connected</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Min Cost To Connect All Points\n\nProblem from LeetCode: https://leetcode.com/problems/min-cost-to-connect-all-points/\n\nYou are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].\n\nThe cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, \nwhere |val| denotes the absolute value of val.\n\nReturn the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.\n\nExample 1:\nInput: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]\nOutput: 20\nExplanation: \nWe can connect the points as shown above to get the minimum cost of 20.\nNotice that there is a unique path between every pair of points.\n\nExample 2:\nInput: points = [[3,12],[-2,5],[-4,1]]\nOutput: 18\n\nConstraints:\n- 1 <= points.length <= 1000\n- -10^6 <= xi, yi <= 10^6\n- All pairs (xi, yi) are distinct.",
    "tags": [
      "Medium",
      "Graph",
      "Union Find",
      "Minimum Spanning Tree"
    ]
  },
  "0005": {
    "shortDescription": "Problem: Find the longest palindromic substring in a given string.",
    "timeComplexity": "O(n\u00b2)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Finding the longest palindrome by <strong>expanding from every center</strong>:</p>\n            <ul>\n                <li><strong>Centers:</strong> Every character and every gap between two characters</li>\n                <li><strong>Expand:</strong> Move left and right outward while the characters match</li>\n                <li><strong>Track:</strong> Remember the longest span found so far</li>\n                <li><strong>Cost:</strong> n centers, each expanding up to n steps</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Longest Palindromic Substring\n\nProblem from LeetCode: https://leetcode.com/problems/longest-palindromic-substring/\n\nDescription:\nGiven a string s, return the longest palindromic substring in s.\nA palindrome is a string that reads the same backward as forward.\n\nExample 1:\nInput: s = \"babad\"\nOutput: \"bab\"\nExplanation: \"aba\" is also a valid answer.\n\nExample 2:\nInput: s = \"cbbd\"\nOutput: \"bb\"\n\nExample 3:\nInput: s = \"a\"\nOutput: \"a\"",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83e\uddee DP"
    ]
  },
  "0010": {
    "shortDescription": "Problem from LeetCode: https://leetcode.com/problems/regular-expression-matching/ Description:",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Match the pattern against the text from the left, remembering the answer for each (text position, pattern position) pair so nothing is solved twice.</p>\n            <ul>\n                <li><strong>Plain match:</strong> A letter or <code>.</code> must match the current character, then both move on</li>\n                <li><strong>Star:</strong> <code>x*</code> either matches zero characters (skip the pair) or one more character (stay on the pattern)</li>\n                <li><strong>Memory:</strong> A cache stores each (i, j) result</li>\n                <li><strong>Done:</strong> Success when the pattern is used up exactly at the end of the text</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Regular Expression Matching\n\nProblem from LeetCode: https://leetcode.com/problems/regular-expression-matching/\n\nDescription:\nGiven an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:\n- '.' Matches any single character.\n- '*' Matches zero or more of the preceding element.\nThe matching should cover the entire input string (not partial).\n\nExample 1:\nInput: s = \"aa\", p = \"a\"\nOutput: false\nExplanation: \"a\" does not match the entire string \"aa\".\n\nExample 2:\nInput: s = \"aa\", p = \"a*\"\nOutput: true\nExplanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes \"aa\".\n\nExample 3:\nInput: s = \"ab\", p = \".*\"\nOutput: true\nExplanation: \".*\" means \"zero or more (*) of any character (.)\".",
    "tags": [
      "Hard",
      "Dynamic Programming",
      "String"
    ]
  },
  "0045": {
    "shortDescription": "Find the minimum number of jumps to reach the last index. Uses greedy approach: track current boundary and farthest reachable position.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Greedy algorithms make <strong>locally optimal choices</strong>:</p>\n            <ul>\n                <li><strong>Local best:</strong> At each step, pick the best option</li>\n                <li><strong>No backtrack:</strong> Commit to choices</li>\n                <li><strong>Prove:</strong> Local optimal leads to global optimal</li>\n                <li><strong>Efficient:</strong> Usually O(n) time</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Jump Game II\n\nProblem from LeetCode: https://leetcode.com/problems/jump-game-ii/\n\nDescription:\nYou are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].\nEach element nums[i] represents the maximum length of a forward jump from index i.\nIn other words, if you are at nums[i], you can jump to any nums[i + j] where:\n- 0 <= j <= nums[i] and\n- i + j < n\n\nReturn the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].\n\nExample 1:\nInput: nums = [2,3,1,1,4]\nOutput: 2\nExplanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.\n\nExample 2:\nInput: nums = [2,3,0,1,4]\nOutput: 2",
    "tags": [
      "\ud83e\uddee DP",
      "\ud83d\udcb0 Greedy"
    ]
  },
  "0053": {
    "shortDescription": "Given an integer array, find the contiguous subarray with the largest sum and return its sum.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>At each position, ask yourself: <strong>\"Should I keep adding to my current streak, or start fresh?\"</strong></p>\n            <ul>\n                <li><strong>curr_sum:</strong> Best sum ending at current position</li>\n                <li><strong>max_sum:</strong> Best sum seen so far (the answer)</li>\n                <li><strong>Key insight:</strong> If current sum is negative, it's better to start fresh!</li>\n                <li><strong>Decision:</strong> max(start fresh, keep going) = max(num, curr_sum + num)</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Maximum Subarray\n\nProblem from LeetCode: https://leetcode.com/problems/maximum-subarray/\n\nDescription:\nGiven an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.\nA subarray is a contiguous part of an array.\n\nExample 1:\nInput: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: [4,-1,2,1] has the largest sum = 6.\n\nExample 2:\nInput: nums = [1]\nOutput: 1\n\nExample 3:\nInput: nums = [5,4,-1,7,8]\nOutput: 23",
    "tags": [
      "\ud83e\udd11 Greedy",
      "\ud83d\udcc8 Kadane's Algorithm"
    ]
  },
  "0055": {
    "shortDescription": "Given an array where each element represents your maximum jump length at that position, determine if you can reach the last index starting from index 0.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Instead of asking \"can I reach the end?\", we ask <strong>\"can I reach a known good position?\"</strong></p>\n            <ul>\n                <li><strong>Start:</strong> The goal is the last index (we know it's reachable from itself)</li>\n                <li><strong>Go backwards:</strong> For each position, check if we can jump to the goal</li>\n                <li><strong>If yes:</strong> Move the goal to this position (it's now a \"good\" position too)</li>\n                <li><strong>Final check:</strong> Did the goal move all the way to index 0?</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Jump Game\n\nProblem from LeetCode: https://leetcode.com/problems/jump-game/\n\nDescription:\nYou are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.\nReturn true if you can reach the last index, or false otherwise.\n\nExample 1:\nInput: nums = [2,3,1,1,4]\nOutput: true\nExplanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.\n\nExample 2:\nInput: nums = [3,2,1,0,4]\nOutput: false\nExplanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.",
    "tags": [
      "\ud83c\udfaf Greedy",
      "\ud83d\udcca Array"
    ]
  },
  "0062": {
    "shortDescription": "A robot on an m\u00d7n grid can only move right or down. Count the number of unique paths from top-left to bottom-right corner.",
    "timeComplexity": "O(m \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Counting grid paths with <strong>dynamic programming</strong>:</p>\n            <ul>\n                <li><strong>Each cell:</strong> Paths = paths from above + paths from the left</li>\n                <li><strong>Base:</strong> The first row and first column each have exactly 1 path</li>\n                <li><strong>Fill:</strong> Go row by row so both inputs are already known</li>\n                <li><strong>Answer:</strong> The bottom-right cell</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Unique Paths\n\nProblem from LeetCode: https://leetcode.com/problems/unique-paths/\n\nDescription:\nThere is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.\n\nGiven the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.\n\nExample 1:\nInput: m = 3, n = 7\nOutput: 28\n\nExample 2:\nInput: m = 3, n = 2\nOutput: 3\nExplanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:\n1. Right -> Down -> Down\n2. Down -> Down -> Right\n3. Down -> Right -> Down",
    "tags": [
      "\ud83e\uddee DP"
    ]
  },
  "0070": {
    "shortDescription": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. How many distinct ways can you reach the top?",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n) or O(1)",
    "laymanHtml": "<p>This is actually the <strong>Fibonacci sequence</strong> in disguise! Think about it:</p>\n            <ul>\n                <li><strong>To reach step n:</strong> You either came from step n-1 (took 1 step) OR step n-2 (took 2 steps)</li>\n                <li><strong>Total ways to step n:</strong> ways(n-1) + ways(n-2)</li>\n                <li><strong>Base cases:</strong> 1 step \u2192 1 way, 2 steps \u2192 2 ways</li>\n                <li><strong>Pattern:</strong> 1, 2, 3, 5, 8, 13... (Fibonacci!)</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Climbing Stairs\n\nProblem from LeetCode: https://leetcode.com/problems/climbing-stairs/\n\nDescription:\nYou are climbing a staircase. It takes n steps to reach the top.\nEach time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?\n\nExample 1:\nInput: n = 2\nOutput: 2\nExplanation: There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps\n\nExample 2:\nInput: n = 3\nOutput: 3\nExplanation: There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step",
    "tags": [
      "\ud83d\udcc8 Dynamic Programming",
      "\ud83d\udd22 Fibonacci"
    ]
  },
  "0072": {
    "shortDescription": "Given two strings, find the minimum number of operations (insert, delete, replace) required to convert word1 to word2. Classic Levenshtein distance problem.",
    "timeComplexity": "O(m \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Dynamic Programming <strong>breaks big problems into smaller ones</strong>:</p>\n            <ul>\n                <li><strong>Subproblems:</strong> Solve smaller versions first</li>\n                <li><strong>Memoization:</strong> Cache results to avoid recalculation</li>\n                <li><strong>Build up:</strong> Combine small solutions for final answer</li>\n                <li><strong>State:</strong> Define what each position represents</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Edit Distance\n\nProblem from LeetCode: https://leetcode.com/problems/edit-distance/\n\nDescription:\nGiven two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.\nYou have the following three operations permitted on a word:\n- Insert a character\n- Delete a character\n- Replace a character\n\nExample 1:\nInput: word1 = \"horse\", word2 = \"ros\"\nOutput: 3\nExplanation: \nhorse -> rorse (replace 'h' with 'r')\nrorse -> rose (remove 'r')\nrose -> ros (remove 'e')\n\nExample 2:\nInput: word1 = \"intention\", word2 = \"execution\"\nOutput: 5\nExplanation: \nintention -> inention (remove 't')\ninention -> enention (replace 'i' with 'e')\nenention -> exention (replace 'n' with 'x')\nexention -> exection (replace 'n' with 'c')\nexection -> execution (insert 'u')",
    "tags": [
      "\ud83e\uddee DP"
    ]
  },
  "0091": {
    "shortDescription": "Given a string of digits, count the ways to decode it as letters (A=1, B=2, ..., Z=26). Uses dynamic programming: dp[i] = dp[i-1] (single digit) + dp[i-2] (two digits if valid).",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Dynamic Programming <strong>breaks big problems into smaller ones</strong>:</p>\n            <ul>\n                <li><strong>Subproblems:</strong> Solve smaller versions first</li>\n                <li><strong>Memoization:</strong> Cache results to avoid recalculation</li>\n                <li><strong>Build up:</strong> Combine small solutions for final answer</li>\n                <li><strong>State:</strong> Define what each position represents</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Decode Ways\n\nProblem from LeetCode: https://leetcode.com/problems/decode-ways/\n\nDescription:\nA message containing letters from A-Z can be encoded into numbers using the mapping:\n'A' -> \"1\"\n'B' -> \"2\"\n...\n'Z' -> \"26\"\n\nTo decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, \"11106\" can be mapped into:\n- \"AAJF\" with the grouping (1 1 10 6)\n- \"KJF\" with the grouping (11 10 6)\n\nNote that the grouping (1 11 06) is invalid because \"06\" cannot be mapped into 'F' since \"6\" is different from \"06\".\n\nGiven a string s containing only digits, return the number of ways to decode it.\n\nExample 1:\nInput: s = \"12\"\nOutput: 2\nExplanation: \"12\" could be decoded as \"AB\" (1 2) or \"L\" (12).\n\nExample 2:\nInput: s = \"226\"\nOutput: 3\nExplanation: \"226\" could be decoded as \"BZ\" (2 26), \"VF\" (22 6), or \"BBF\" (2 2 6).\n\nExample 3:\nInput: s = \"06\"\nOutput: 0\nExplanation: \"06\" cannot be mapped to \"F\" because of the leading zero (\"6\" is different from \"06\").",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83e\uddee DP"
    ]
  },
  "0097": {
    "shortDescription": "Check if s3 is formed by interleaving s1 and s2. Uses 2D DP where dp[i][j] represents whether s3[0:i+j] can be formed by interleaving s1[0:i] and s2[0:j].",
    "timeComplexity": "O(m \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Fill a grid where cell <code>(i, j)</code> says whether the first <code>i</code> letters of s1 and the first <code>j</code> letters of s2 can weave into the first <code>i + j</code> letters of s3.</p>\n            <ul>\n                <li><strong>Length check:</strong> If the lengths do not add up, the answer is False</li>\n                <li><strong>Borders:</strong> Using only s1 or only s2 must match s3 so far</li>\n                <li><strong>Each cell:</strong> True if the previous cell above matches via s1, or the previous cell to the left matches via s2</li>\n                <li><strong>Answer:</strong> The bottom-right cell</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Interleaving String\n\nProblem from LeetCode: https://leetcode.com/problems/interleaving-string/\n\nDescription:\nGiven strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.\nAn interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:\n- s = s1 + s2 + ... + sn\n- t = t1 + t2 + ... + tm\n- |n - m| <= 1\n- The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...\n\nNote: a + b is the concatenation of strings a and b.\n\nExample 1:\nInput: s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\"\nOutput: true\nExplanation: One way to obtain s3 is:\nSplit s1 into s1 = \"aa\" + \"bc\" + \"c\", and s2 into s2 = \"dbbc\" + \"a\".\nInterleaving the two splits, we get \"aa\" + \"dbbc\" + \"bc\" + \"a\" + \"c\" = \"aadbbcbcac\".\n\nExample 2:\nInput: s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbbaccc\"\nOutput: false\nExplanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.\n\nExample 3:\nInput: s1 = \"\", s2 = \"\", s3 = \"\"\nOutput: true",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83e\uddee DP"
    ]
  },
  "0115": {
    "shortDescription": "Problem from LeetCode: https://leetcode.com/problems/distinct-subsequences/ Description:",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Count in how many ways the first <code>j</code> letters of t can be picked from the first <code>i</code> letters of s.</p>\n            <ul>\n                <li><strong>Empty target:</strong> There is exactly one way to build an empty t</li>\n                <li><strong>Letters match:</strong> Add the ways that use this letter and the ways that skip it</li>\n                <li><strong>Letters differ:</strong> The letter cannot be used, so copy the count from the row above</li>\n                <li><strong>Answer:</strong> The bottom-right cell</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 115. Distinct Subsequences\n\nProblem from LeetCode: https://leetcode.com/problems/distinct-subsequences/\n\nDescription:\nGiven two strings s and t, return the number of distinct subsequences of s which equals t.\n\nA subsequence of a string is a new string which is formed from the original string by deleting some (can be none) \nof the characters without disturbing the relative positions of the remaining characters. \n(i.e., \"ace\" is a subsequence of \"abcde\" while \"aec\" is not).\n\nThe test cases are generated so that the answer fits on a 32-bit signed integer.\n\nExample 1:\nInput: s = \"rabbbit\", t = \"rabbit\"\nOutput: 3\nExplanation:\nThere are 3 ways to get \"rabbit\" from \"rabbbit\":\n\"ra_bbit\" -> \"rabbit\"\n\"rab_bit\" -> \"rabbit\"\n\"rabb_it\" -> \"rabbit\"\n\nExample 2:\nInput: s = \"babgbag\", t = \"bag\"\nOutput: 5\nExplanation:\nThere are 5 ways to get \"bag\" from \"babgbag\":\n\"ba_g___\" -> \"bag\"\n\"ba__g__\" -> \"bag\"\n\"b__ag__\" -> \"bag\"\n\"__bag__\" -> \"bag\"\n\"____bag\" -> \"bag\"\n\nConstraints:\n- 1 <= s.length, t.length <= 1000\n- s and t consist of lowercase English letters.",
    "tags": [
      "Hard",
      "Dynamic Programming",
      "String"
    ]
  },
  "0139": {
    "shortDescription": "Given a string s and a dictionary of words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.",
    "timeComplexity": "O(n\u00b2)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>We ask: <strong>\"Can I break this string into dictionary words?\"</strong></p>\n            <ul>\n                <li><strong>dp[i]:</strong> \"Can s[0:i] be broken into valid words?\"</li>\n                <li><strong>Base case:</strong> dp[0] = True (empty string is valid)</li>\n                <li><strong>For each position i:</strong> Check all possible splits. If dp[j] is true AND s[j:i] is a word, then dp[i] = True!</li>\n                <li><strong>Answer:</strong> dp[len(s)] tells us if the whole string can be broken</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Word Break\n\nProblem from LeetCode: https://leetcode.com/problems/word-break/\n\nDescription:\nGiven a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.\n\nExample 1:\nInput: s = \"leetcode\", wordDict = [\"leet\",\"code\"]\nOutput: true\nExplanation: Return true because \"leetcode\" can be segmented as \"leet code\".\n\nExample 2:\nInput: s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]\nOutput: true\nExplanation: Return true because \"applepenapple\" can be segmented as \"apple pen apple\".\nNote that you are allowed to reuse a dictionary word.\n\nExample 3:\nInput: s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]\nOutput: false",
    "tags": [
      "\ud83d\udcca Dynamic Programming",
      "\ud83d\udd24 String"
    ]
  },
  "0152": {
    "shortDescription": "Find the contiguous subarray that has the largest product. Track both max and min because a negative times negative becomes positive.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Track both the biggest and the smallest product ending at each position, because a negative number can turn the smallest into the biggest.</p>\n            <ul>\n                <li><strong>Candidates:</strong> For each number: the number itself, <code>max * num</code> and <code>min * num</code></li>\n                <li><strong>Update:</strong> New max is the largest candidate, new min the smallest</li>\n                <li><strong>Answer:</strong> The largest max seen so far</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Maximum Product Subarray\n\nProblem from LeetCode: https://leetcode.com/problems/maximum-product-subarray/\n\nProblem Statement:\nGiven an integer array nums, find a contiguous non-empty subarray within the array \nthat has the largest product, and return the product.\n\nThe test cases are generated so that the answer will fit in a 32-bit integer.\n\nA subarray is a contiguous subsequence of the array.\n\nExamples:\nExample 1:\nInput: nums = [2,3,-2,4]\nOutput: 6\nExplanation: [2,3] has the largest product 6.\n\nExample 2:\nInput: nums = [-2,0,-1]\nOutput: 0\nExplanation: The result cannot be 2, because [-2,-1] is not a subarray.\n\nConstraints:\n- 1 <= nums.length <= 2 * 10^4\n- -10 <= nums[i] <= 10\n- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
    "tags": [
      "\ud83d\udcca Array"
    ]
  },
  "0198": {
    "shortDescription": "You are a robber planning to rob houses along a street. Adjacent houses have connected security systems - if you rob two adjacent houses, the police will be alerted. What's the maximum amount you can rob?",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>At each house, you have a choice: <strong>rob it</strong> or <strong>skip it</strong>.</p>\n            <ul>\n                <li><strong>If you rob this house:</strong> You get its money + whatever you made from 2 houses back (you must skip the previous house)</li>\n                <li><strong>If you skip this house:</strong> You keep whatever you made from the previous house</li>\n                <li><strong>Decision:</strong> Pick whichever option gives you more money!</li>\n                <li><strong>Key insight:</strong> We only need to track 2 values (not the entire history)</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 198. House Robber\n\nProblem from LeetCode: https://leetcode.com/problems/house-robber/\n\nDescription:\nYou are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, \nthe only constraint stopping you from robbing each of them is that adjacent houses have security systems connected \nand it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array nums representing the amount of money of each house, return the maximum amount of money \nyou can rob tonight without alerting the police.\n\nExample 1:\nInput: nums = [1,2,3,1]\nOutput: 4\nExplanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.\n\nExample 2:\nInput: nums = [2,7,9,3,1]\nOutput: 12\nExplanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).\nTotal amount you can rob = 2 + 9 + 1 = 12.\n\nConstraints:\n- 1 <= nums.length <= 100\n- 0 <= nums[i] <= 400",
    "tags": [
      "\ud83d\udcc8 Dynamic Programming",
      "\ud83c\udfe0 Array"
    ]
  },
  "0213": {
    "shortDescription": "Problem: Houses are arranged in a circle. Adjacent houses have security systems connected. Determine the maximum amount you can rob without alerting police.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Dynamic Programming <strong>breaks big problems into smaller ones</strong>:</p>\n            <ul>\n                <li><strong>Subproblems:</strong> Solve smaller versions first</li>\n                <li><strong>Memoization:</strong> Cache results to avoid recalculation</li>\n                <li><strong>Build up:</strong> Combine small solutions for final answer</li>\n                <li><strong>State:</strong> Define what each position represents</li>\n            </ul>",
    "fullProblemStatement": "LeetCode House Robber II\n\nProblem from LeetCode: https://leetcode.com/problems/house-robber-ii/\n\nDescription:\nYou are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.\n\nExample 1:\nInput: nums = [2,3,2]\nOutput: 3\nExplanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.\n\nExample 2:\nInput: nums = [1,2,3,1]\nOutput: 4\nExplanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.\n\nExample 3:\nInput: nums = [1,2,3]\nOutput: 3",
    "tags": [
      "\ud83e\uddee DP"
    ]
  },
  "0300": {
    "shortDescription": "Given an integer array, return the length of the longest strictly increasing subsequence. A subsequence can skip elements but must maintain relative order.",
    "timeComplexity": "O(n\u00b2)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Dynamic Programming <strong>breaks big problems into smaller ones</strong>:</p>\n            <ul>\n                <li><strong>Subproblems:</strong> Solve smaller versions first</li>\n                <li><strong>Memoization:</strong> Cache results to avoid recalculation</li>\n                <li><strong>Build up:</strong> Combine small solutions for final answer</li>\n                <li><strong>State:</strong> Define what each position represents</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Longest Increasing Subsequence\n\nProblem from LeetCode: https://leetcode.com/problems/longest-increasing-subsequence/\n\nDescription:\nGiven an integer array nums, return the length of the longest strictly increasing subsequence.\nA subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.\n\nExample 1:\nInput: nums = [10,9,2,5,3,7,101,18]\nOutput: 4\nExplanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.\n\nExample 2:\nInput: nums = [0,1,0,3,2,3]\nOutput: 4\nExplanation: The longest increasing subsequence is [0,1,2,3], therefore the length is 4.\n\nExample 3:\nInput: nums = [7,7,7,7,7,7,7]\nOutput: 1\nExplanation: The longest increasing subsequence is [7], therefore the length is 1.",
    "tags": [
      "\ud83e\uddee DP"
    ]
  },
  "0309": {
    "shortDescription": "Problem from LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/ Description:",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Dynamic Programming <strong>breaks big problems into smaller ones</strong>:</p>\n            <ul>\n                <li><strong>Subproblems:</strong> Solve smaller versions first</li>\n                <li><strong>Memoization:</strong> Cache results to avoid recalculation</li>\n                <li><strong>Build up:</strong> Combine small solutions for final answer</li>\n                <li><strong>State:</strong> Define what each position represents</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Best Time To Buy And Sell Stock With Cooldown\n\nProblem from LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/\n\nDescription:\nYou are given an array prices where prices[i] is the price of a given stock on the ith day.\n\nFind the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:\n\nAfter you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).\nNote: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).\n\nExample 1:\nInput: prices = [1,2,3,0,2]\nOutput: 3\nExplanation: transactions = [buy, sell, cooldown, buy, sell]\n\nExample 2:\nInput: prices = [1]\nOutput: 0\n\nConstraints:\n1 <= prices.length <= 5000\n0 <= prices[i] <= 1000",
    "tags": [
      "Medium",
      "Dynamic Programming",
      "State Machine"
    ]
  },
  "0312": {
    "shortDescription": "Given n balloons with values, burst all balloons to maximize coins. When you burst balloon i, you get nums[i-1] \u00d7 nums[i] \u00d7 nums[i+1] coins. Key insight: think about which balloon to burst LAST in each range.",
    "timeComplexity": "O(n\u00b3)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Think backwards: choose which balloon is burst <strong>last</strong> in a range, so its neighbours are fixed.</p>\n            <ul>\n                <li><strong>Padding:</strong> Add a 1 at each end</li>\n                <li><strong>Ranges:</strong> For every range, try each balloon <code>i</code> as the last one</li>\n                <li><strong>Value:</strong> <code>nums[left-1] * nums[i] * nums[right+1]</code> plus the best of the left and right parts</li>\n                <li><strong>Answer:</strong> The best value for the whole range</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Burst Balloons\n\nProblem from LeetCode: https://leetcode.com/problems/burst-balloons/\n\nDescription:\nYou are given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.\n\nIf you burst the ith balloon, you will get nums[i-1] * nums[i] * nums[i+1] coins. If i-1 or i+1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.\n\nReturn the maximum coins you can collect by bursting the balloons wisely.\n\nExample 1:\nInput: nums = [3,1,5,8]\nOutput: 167\nExplanation:\nnums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []\ncoins =  3*1*5    +  3*5*8   +  1*3*8  + 1*8*1 = 167\n\nExample 2:\nInput: nums = [1,5]\nOutput: 10\n\nConstraints:\nn == nums.length\n1 <= n <= 300\n0 <= nums[i] <= 100",
    "tags": [
      "\ud83d\udcdd Algorithm"
    ]
  },
  "0322": {
    "shortDescription": "Given coins of different denominations and a total amount, find the fewest number of coins needed to make up that amount. Return -1 if impossible.",
    "timeComplexity": "O(amount \u00d7 coins)",
    "spaceComplexity": "O(amount)",
    "laymanHtml": "<p>Build up from small amounts to the target. For each amount, try every coin:</p>\n            <ul>\n                <li><strong>dp[a]:</strong> Minimum coins needed to make amount 'a'</li>\n                <li><strong>For each coin:</strong> If we use this coin, we need 1 + dp[a - coin] coins</li>\n                <li><strong>Take the best:</strong> min of all possibilities across all coins</li>\n                <li><strong>Build up:</strong> Solutions for larger amounts depend on smaller ones</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Coin Change\n\nProblem from LeetCode: https://leetcode.com/problems/coin-change/\n\nDescription:\nYou are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.\n\nYou may assume that you have an infinite number of each kind of coin.\n\nExample 1:\nInput: coins = [1,2,5], amount = 11\nOutput: 3\nExplanation: 11 = 5 + 5 + 1\n\nExample 2:\nInput: coins = [2], amount = 3\nOutput: -1\n\nExample 3:\nInput: coins = [1], amount = 0\nOutput: 0\n\nConstraints:\n1 <= coins.length <= 12\n1 <= coins[i] <= 2^31 - 1\n0 <= amount <= 10^4",
    "tags": [
      "\ud83d\udcc8 Dynamic Programming",
      "\ud83d\udcb0 Unbounded Knapsack"
    ]
  },
  "0416": {
    "shortDescription": "Given an array, determine if it can be partitioned into two subsets with equal sum. This is a 0/1 knapsack problem where target = totalSum / 2.",
    "timeComplexity": "O(n \u00d7 sum)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Splitting into two equal halves with <strong>subset-sum DP</strong>:</p>\n            <ul>\n                <li><strong>Target:</strong> The total must be even; aim for half of it</li>\n                <li><strong>DP array:</strong> dp[j] says whether some subset sums to j</li>\n                <li><strong>Update:</strong> For each number, go from target down to the number so it is used once</li>\n                <li><strong>Answer:</strong> dp[target]</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Partition Equal Subset Sum\n\nProblem from LeetCode: https://leetcode.com/problems/partition-equal-subset-sum/\n\nGiven an integer array nums, return true if you can partition the array into two subsets \nsuch that the sum of the elements in both subsets is equal or false otherwise.\n\nExample 1:\n    Input: nums = [1,5,11,5]\n    Output: true\n    Explanation: The array can be partitioned as [1, 5, 5] and [11].\n\nExample 2:\n    Input: nums = [1,2,3,5]\n    Output: false\n    Explanation: The array cannot be partitioned into equal sum subsets.\n\nConstraints:\n    1 <= nums.length <= 200\n    1 <= nums[i] <= 100",
    "tags": [
      "\ud83d\udcca Array",
      "\ud83e\uddee DP",
      "\ud83d\udd04 Backtracking"
    ]
  },
  "0494": {
    "shortDescription": "Given an array of integers and a target, find the number of ways to assign + or - to each number such that they sum to the target. Uses DP subset sum transformation.",
    "timeComplexity": "O(n \u00d7 sum)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Choosing + or - for each number is the same as choosing a subset that sums to <code>(total + target) / 2</code>.</p>\n            <ul>\n                <li><strong>Check:</strong> If that value is not a whole non-negative number, there are 0 ways</li>\n                <li><strong>Subset count:</strong> <code>dp[j]</code> counts subsets that sum to j</li>\n                <li><strong>Update:</strong> For each number, go from large j to small and add <code>dp[j - num]</code></li>\n                <li><strong>Answer:</strong> <code>dp[subset_sum]</code></li>\n            </ul>",
    "fullProblemStatement": "LeetCode Target Sum\n\nProblem from LeetCode: https://leetcode.com/problems/target-sum\n\nYou are given an integer array nums and an integer target.\n\nYou want to build an expression out of nums by adding one of the symbols '+' and '-' \nbefore each integer in nums and then concatenate all the integers.\n\nFor example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and \nconcatenate them to build the expression \"+2-1\".\n\nReturn the number of different expressions that you can build, which evaluates to target.\n\nExample 1:\n    Input: nums = [1,1,1,1,1], target = 3\n    Output: 5\n    Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.\n    -1 + 1 + 1 + 1 + 1 = 3\n    +1 - 1 + 1 + 1 + 1 = 3\n    +1 + 1 - 1 + 1 + 1 = 3\n    +1 + 1 + 1 - 1 + 1 = 3\n    +1 + 1 + 1 + 1 - 1 = 3\n\nExample 2:\n    Input: nums = [1], target = 1\n    Output: 1\n\nConstraints:\n    1 <= nums.length <= 20\n    0 <= nums[i] <= 1000\n    0 <= sum(nums[i]) <= 1000\n    -1000 <= target <= 1000",
    "tags": [
      "\ud83d\udcca Array",
      "\ud83e\uddee DP"
    ]
  },
  "0518": {
    "shortDescription": "Given coins of different denominations and a total amount, find the number of combinations that make up that amount. This is an unbounded knapsack problem.",
    "timeComplexity": "O(amount \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Dynamic Programming <strong>breaks big problems into smaller ones</strong>:</p>\n            <ul>\n                <li><strong>Subproblems:</strong> Solve smaller versions first</li>\n                <li><strong>Memoization:</strong> Cache results to avoid recalculation</li>\n                <li><strong>Build up:</strong> Combine small solutions for final answer</li>\n                <li><strong>State:</strong> Define what each position represents</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Coin Change II\n\nProblem from LeetCode: https://leetcode.com/problems/coin-change-ii/\n\nYou are given an integer array coins representing coins of different denominations \nand an integer amount representing a total amount of money.\n\nReturn the number of combinations that make up that amount. If that amount of money \ncannot be made up by any combination of the coins, return 0.\n\nYou may assume that you have an infinite number of each kind of coin.\nThe answer is guaranteed to fit into a signed 32-bit integer.\n\nExample 1:\n    Input: amount = 5, coins = [1,2,5]\n    Output: 4\n    Explanation: there are four ways to make up the amount:\n    5=5\n    5=2+2+1\n    5=2+1+1+1\n    5=1+1+1+1+1\n\nExample 2:\n    Input: amount = 3, coins = [2]\n    Output: 0\n    Explanation: the amount of 3 cannot be made up just with coins of 2.\n\nExample 3:\n    Input: amount = 10, coins = [10]\n    Output: 1\n\nConstraints:\n    1 <= coins.length <= 300\n    1 <= coins[i] <= 5000\n    All the values of coins are unique.\n    0 <= amount <= 5000",
    "tags": [
      "\ud83e\uddee DP"
    ]
  },
  "0647": {
    "shortDescription": "Problem: Count the number of palindromic substrings in a string.",
    "timeComplexity": "O(n\u00b2)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Counting palindromic substrings by <strong>expanding from every center</strong>:</p>\n            <ul>\n                <li><strong>Centers:</strong> Every character and every gap between two characters</li>\n                <li><strong>Expand:</strong> Move outward while the characters match</li>\n                <li><strong>Count:</strong> Each successful expansion is one more palindrome</li>\n                <li><strong>Cost:</strong> n centers, each expanding up to n steps</li>\n            </ul>",
    "fullProblemStatement": "647. Palindromic Substrings\nhttps://leetcode.com/problems/palindromic-substrings/\n\nGiven a string s, return the number of palindromic substrings in it.\nA string is a palindrome when it reads the same backward as forward.\nA substring is a contiguous sequence of characters within the string.\n\nTime Complexity: O(n\u00b2)\nSpace Complexity: O(1)",
    "tags": [
      "\ud83d\udd24 String"
    ]
  },
  "0746": {
    "shortDescription": "Problem: You can start from step 0 or 1. Each step has a cost. You can climb 1 or 2 steps at a time. Find the minimum cost to reach the top.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Dynamic Programming <strong>breaks big problems into smaller ones</strong>:</p>\n            <ul>\n                <li><strong>Subproblems:</strong> Solve smaller versions first</li>\n                <li><strong>Memoization:</strong> Cache results to avoid recalculation</li>\n                <li><strong>Build up:</strong> Combine small solutions for final answer</li>\n                <li><strong>State:</strong> Define what each position represents</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Min Cost Climbing Stairs\n\nProblem from LeetCode: https://leetcode.com/problems/min-cost-climbing-stairs/\n\nDescription:\nYou are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.\n\nYou can either start from the step with index 0, or the step with index 1.\n\nReturn the minimum cost to reach the top of the floor.\n\nExample 1:\nInput: cost = [10,15,20]\nOutput: 15\nExplanation: You will start at index 1.\n- Pay 15 and climb two steps to reach the top.\nThe total cost is 15.\n\nExample 2:\nInput: cost = [1,100,1,1,1,100,1,1,100,1]\nOutput: 6\nExplanation: You will start at index 0.\n- Pay 1 and climb two steps to reach index 2.\n- Pay 1 and climb two steps to reach index 4.\n- Pay 1 and climb two steps to reach index 6.\n- Pay 1 and climb two steps to reach index 8.\n- Pay 1 and climb two steps to reach the top.\nThe total cost is 6.\n\nConstraints:\n2 <= cost.length <= 1000\n0 <= cost[i] <= 999",
    "tags": [
      "\ud83e\uddee DP"
    ]
  },
  "0818": {
    "shortDescription": "Your car starts at position 0 with speed +1. Use 'A' (accelerate) and 'R' (reverse) commands to reach target position with minimum instructions.",
    "timeComplexity": "O(t log t)",
    "spaceComplexity": "O(t)",
    "laymanHtml": "<p>BFS explores all possible states (position, speed):</p>\n            <ul>\n                <li><strong>'A' (Accelerate):</strong> position += speed, speed *= 2</li>\n                <li><strong>'R' (Reverse):</strong> speed = -1 if positive, +1 if negative</li>\n                <li><strong>Pruning:</strong> Skip states too far from target</li>\n                <li><strong>Goal:</strong> Find shortest sequence to reach target</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Race Car\n\nProblem from LeetCode: https://leetcode.com/problems/race-car/\n\nDescription:\nYour car starts at position 0 and speed +1 on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions 'A' (accelerate) and 'R' (reverse):\n\nWhen you get an instruction 'A', your car does the following:\n- position += speed\n- speed *= 2\n\nWhen you get an instruction 'R', your car does the following:\n- If your speed is positive then speed = -1\n- Otherwise speed = 1\nYour position stays the same.\n\nFor example, after commands \"AAR\", your car goes to positions 0 --> 1 --> 3 --> 3, and your speed goes to 1 --> 2 --> 4 --> -1.\n\nGiven a target position target, return the length of the shortest sequence of instructions to get there.\n\nExample 1:\nInput: target = 3\nOutput: 2\nExplanation: \nThe shortest instruction sequence is \"AA\".\nYour position goes from 0 --> 1 --> 3.\n\nExample 2:\nInput: target = 6\nOutput: 5\nExplanation: \nThe shortest instruction sequence is \"AAARA\".\nYour position goes from 0 --> 1 --> 3 --> 7 --> 7 --> 6.\n\nConstraints:\n1 <= target <= 10^4",
    "tags": [
      "\ud83d\ude97 Simulation",
      "\ud83d\udd0d BFS"
    ]
  },
  "1143": {
    "shortDescription": "Given two strings, return the length of their longest common subsequence. A subsequence maintains relative order but doesn't need to be contiguous.",
    "timeComplexity": "O(m \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Dynamic Programming <strong>breaks big problems into smaller ones</strong>:</p>\n            <ul>\n                <li><strong>Subproblems:</strong> Solve smaller versions first</li>\n                <li><strong>Memoization:</strong> Cache results to avoid recalculation</li>\n                <li><strong>Build up:</strong> Combine small solutions for final answer</li>\n                <li><strong>State:</strong> Define what each position represents</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Longest Common Subsequence\n\nProblem from LeetCode: https://leetcode.com/problems/longest-common-subsequence/\n\nGiven two strings text1 and text2, return the length of their longest common subsequence.\nA subsequence of a string is a new string generated from the original string with some characters\n(can be none) deleted without changing the relative order of the remaining characters.\n\nFor example, \"ace\" is a subsequence of \"abcde\".\nA common subsequence of two strings is a subsequence that is common to both strings.\n\nExample 1:\nInput: text1 = \"abcde\", text2 = \"ace\" \nOutput: 3  \nExplanation: The longest common subsequence is \"ace\" and its length is 3.\n\nExample 2:\nInput: text1 = \"abc\", text2 = \"abc\"\nOutput: 3\nExplanation: The longest common subsequence is \"abc\" and its length is 3.\n\nExample 3:\nInput: text1 = \"abc\", text2 = \"def\"\nOutput: 0\nExplanation: There is no such common subsequence, so the result is 0.\n\nConstraints:\n- 1 <= text1.length, text2.length <= 1000\n- text1 and text2 consist of only lowercase English characters.",
    "tags": [
      "\ud83e\uddee DP"
    ]
  },
  "0134": {
    "shortDescription": "Travel around a circular route of gas stations. At each station, you get gas[i] and consume cost[i] to reach the next. Find the starting station to complete the circuit.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Greedy algorithms make <strong>locally optimal choices</strong>:</p>\n            <ul>\n                <li><strong>Local best:</strong> At each step, pick the best option</li>\n                <li><strong>No backtrack:</strong> Commit to choices</li>\n                <li><strong>Prove:</strong> Local optimal leads to global optimal</li>\n                <li><strong>Efficient:</strong> Usually O(n) time</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Gas Station\n\nProblem from LeetCode: https://leetcode.com/problems/gas-station/\n\nDescription:\nThere are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].\nYou have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.\nYou begin the journey with an empty tank at one of the gas stations.\n\nGiven two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.\nIf there exists a solution, it is guaranteed to be unique.\n\nExample 1:\nInput: gas = [1,2,3,4,5], cost = [3,4,5,1,2]\nOutput: 3\nExplanation:\nStart at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 4. Your tank = 4 - 1 + 5 = 8\nTravel to station 0. Your tank = 8 - 2 + 1 = 7\nTravel to station 1. Your tank = 7 - 3 + 2 = 6\nTravel to station 2. Your tank = 6 - 4 + 3 = 5\nTravel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.\nTherefore, return 3 as the starting index.\n\nExample 2:\nInput: gas = [2,3,4], cost = [3,4,3]\nOutput: -1\nExplanation:\nYou can't start at station 0 or 1, as there is not enough gas to travel to the next station.\nLet's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 0. Your tank = 4 - 3 + 2 = 3\nTravel to station 1. Your tank = 3 - 3 + 3 = 3\nYou cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.\nTherefore, you can't travel around the circuit once no matter where you start.",
    "tags": [
      "\ud83d\udcb0 Greedy"
    ]
  },
  "0179": {
    "shortDescription": "Given a list of non-negative integers, arrange them to form the largest number.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Use <strong>custom comparator</strong> for sorting:</p>\n            <ul>\n                <li><strong>Key Insight:</strong> Compare \"a + b\" vs \"b + a\" as strings</li>\n                <li><strong>Example:</strong> For 3 and 30: \"330\" > \"303\", so 3 comes first</li>\n                <li><strong>Sort:</strong> Using this comparison gives optimal order</li>\n                <li><strong>Edge Case:</strong> All zeros \u2192 return \"0\"</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 179. Largest Number\n\nProblem from LeetCode: https://leetcode.com/problems/largest-number/\n\nDescription:\nGiven a list of non-negative integers nums, arrange them such that they form the largest number and return it.\n\nSince the result may be very large, so you need to return a string instead of an integer.\n\nExample 1:\nInput: nums = [10,2]\nOutput: \"210\"\n\nExample 2:\nInput: nums = [3,30,34,5,9]\nOutput: \"9534330\"\n\nConstraints:\n- 1 <= nums.length <= 100\n- 0 <= nums[i] <= 10^9",
    "tags": [
      "\ud83d\udcca Sorting",
      "\ud83c\udfaf Greedy"
    ]
  },
  "0678": {
    "shortDescription": "Problem: Check if string with '(', ')', '*' can be valid. '*' can be '(', ')' or empty.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A stack works like a <strong>pile of plates</strong> - last in, first out (LIFO):</p>\n            <ul>\n                <li><strong>Push:</strong> Add item to the top</li>\n                <li><strong>Pop:</strong> Remove and return the top item</li>\n                <li><strong>Peek:</strong> Look at top without removing</li>\n                <li><strong>Match pairs:</strong> Great for matching brackets, parentheses</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Valid Parenthesis String\n\nProblem from LeetCode: https://leetcode.com/problems/valid-parenthesis-string/\n\nDescription:\nGiven a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.\n\nThe following rules define a valid string:\n1. Any left parenthesis '(' must have a corresponding right parenthesis ')'. \n2. Any right parenthesis ')' must have a corresponding left parenthesis '('.\n3. Left parenthesis '(' must go before the corresponding right parenthesis ')'. \n4. '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string \"\". \n\nExample 1:\nInput: s = \"()\"\nOutput: true\n\nExample 2:\nInput: s = \"(*)\"\nOutput: true\n\nExample 3:\nInput: s = \"(*))\"\nOutput: true\n\nConstraints:\n1 <= s.length <= 100\ns consists of characters '(', ')' and '*'.",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83d\udcda Stack"
    ]
  },
  "0763": {
    "shortDescription": "Partition a string into as many parts as possible so that each letter appears in at most one part. Return the sizes of these parts.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Greedy algorithms make <strong>locally optimal choices</strong>:</p>\n            <ul>\n                <li><strong>Local best:</strong> At each step, pick the best option</li>\n                <li><strong>No backtrack:</strong> Commit to choices</li>\n                <li><strong>Prove:</strong> Local optimal leads to global optimal</li>\n                <li><strong>Efficient:</strong> Usually O(n) time</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Partition Labels\n\nProblem from LeetCode: https://leetcode.com/problems/partition-labels/\n\nDescription:\nYou are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.\n\nNote that the partition is done so that after concatenating all the parts in order, the resultant string should be s.\n\nReturn a list of integers representing the size of these parts.\n\nExample 1:\nInput: s = \"ababcbacadefegdehijhklij\"\nOutput: [9,7,8]\nExplanation:\nThe partition is \"ababcbaca\", \"defegde\", \"hijhklij\".\nThis is a partition so that each letter appears in at most one part.\nA partition like \"ababcbacadefegde\", \"hijhklij\" is incorrect, because it splits s into less parts.\n\nExample 2:\nInput: s = \"eccbbbbdec\"\nOutput: [10]\n\nConstraints:\n1 <= s.length <= 500\ns consists of lowercase English letters.",
    "tags": [
      "\ud83d\udcb0 Greedy"
    ]
  },
  "0846": {
    "shortDescription": "Problem: Determine if you can rearrange cards into groups of size W, where each group contains W consecutive cards.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Always start a group at the smallest card left, then take the next <code>groupSize - 1</code> consecutive cards.</p>\n            <ul>\n                <li><strong>Check size:</strong> The hand size must be divisible by the group size</li>\n                <li><strong>Count:</strong> Keep how many copies of each card remain</li>\n                <li><strong>Build group:</strong> From the smallest card, take <code>first, first+1, ...</code>; a missing card means failure</li>\n                <li><strong>Repeat:</strong> Continue until no cards remain</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Hand Of Straights\n\nProblem from LeetCode: https://leetcode.com/problems/hand-of-straights/\n\nDescription:\nAlice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.\n\nGiven an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.\n\nExample 1:\nInput: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3\nOutput: true\nExplanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]\n\nExample 2:\nInput: hand = [1,2,3,4,5], groupSize = 4\nOutput: false\nExplanation: Alice's hand can not be rearranged into groups of 4.\n\nConstraints:\n1 <= hand.length <= 10^4\n0 <= hand[i] <= 10^9\n1 <= groupSize <= hand.length",
    "tags": [
      "\ud83d\udcb0 Greedy"
    ]
  },
  "1899": {
    "shortDescription": "Given triplets and a target, determine if target can be formed by taking max of each position from selected triplets.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p><strong>Filter \u2192 Check</strong> approach:</p>\n            <ul>\n                <li><strong>Invalid:</strong> Skip triplets where ANY value > target (would exceed target)</li>\n                <li><strong>Valid:</strong> Triplets where all values \u2264 corresponding target values</li>\n                <li><strong>Collect:</strong> From valid triplets, can we find each target value?</li>\n                <li><strong>Answer:</strong> Yes if we can match all 3 positions from valid triplets</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Merge Triplets To Form Target Triplet\n\nProblem from LeetCode: https://leetcode.com/problems/merge-triplets-to-form-target-triplet/\n\nA triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] \ndescribes the ith triplet. You are also given an integer array target = [x, y, z] that describes the triplet you want to obtain.\n\nTo obtain target, you may apply the following operation on triplets any number of times:\n- Choose two indices (0-indexed) i and j (i != j) and update triplets[j] to become [max(ai, aj), max(bi, bj), max(ci, cj)].\n- For example, if triplets[i] = [2, 5, 3] and triplets[j] = [1, 7, 5], triplets[j] will be updated to [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5].\n\nReturn true if it is possible to obtain the target triplet [x, y, z] as an element of triplets, or false otherwise.\n\nExample 1:\nInput: triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]\nOutput: true\nExplanation: Perform the following operations:\n- Choose the first and last triplets [[2,5,3],[1,8,4],[1,7,5]]. Update the last triplet to [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]\nThe target triplet [2,7,5] is now an element of triplets.\n\nExample 2:\nInput: triplets = [[3,4,5],[4,5,6]], target = [3,2,5]\nOutput: false\nExplanation: It is impossible to have [3,2,5] as an element because there is no 2 in any of the triplets.\n\nExample 3:\nInput: triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]\nOutput: true\nExplanation: Perform the following operations:\n- Choose the first and third triplets [[2,5,3],[2,3,4],[1,2,5],[5,2,3]]. Update the third triplet to [max(2,1), max(5,2), max(3,5)] = [2,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,2,3]].\n- Choose the third and fourth triplets [[2,5,3],[2,3,4],[2,5,5],[5,2,3]]. Update the fourth triplet to [max(2,5), max(5,2), max(5,3)] = [5,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,5,5]].\nThe target triplet [5,5,5] is now an element of triplets.\n\nConstraints:\n- 1 <= triplets.length <= 10^5\n- triplets[i].length == target.length == 3\n- 1 <= ai, bi, ci, x, y, z <= 1000",
    "tags": [
      "\ud83c\udfaf Greedy",
      "\ud83d\udcca Array"
    ]
  },
  "0017": {
    "shortDescription": "Problem: Given a string of digits 2-9, return all possible letter combinations that the number could represent.",
    "timeComplexity": "O(4\u207f \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Backtracking <strong>explores all possibilities</strong> like solving a maze:</p>\n            <ul>\n                <li><strong>Choose:</strong> Make a decision</li>\n                <li><strong>Explore:</strong> Recursively continue</li>\n                <li><strong>Validate:</strong> Check if path is valid</li>\n                <li><strong>Backtrack:</strong> Undo choice if stuck, try another</li>\n            </ul>",
    "fullProblemStatement": "17. Letter Combinations of a Phone Number\nhttps://leetcode.com/problems/letter-combinations-of-a-phone-number/\n\nGiven a string containing digits from 2-9 inclusive, return all possible \nletter combinations that the number could represent.\n\nA mapping of digits to letters (just like on the telephone buttons) is given.\nNote that 1 does not map to any letters.\n\nTime Complexity: O(4^n) where n is the length of digits\nSpace Complexity: O(n) for recursion stack",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83d\udd04 Backtracking"
    ]
  },
  "0039": {
    "shortDescription": "Given an array of distinct integers and a target, find all unique combinations where the numbers sum to target. The same number may be used unlimited times.",
    "timeComplexity": "O(2\u207f)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Backtracking <strong>explores all possibilities</strong> like solving a maze:</p>\n            <ul>\n                <li><strong>Choose:</strong> Make a decision</li>\n                <li><strong>Explore:</strong> Recursively continue</li>\n                <li><strong>Validate:</strong> Check if path is valid</li>\n                <li><strong>Backtrack:</strong> Undo choice if stuck, try another</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Combination Sum\n\nProblem from LeetCode: https://leetcode.com/problems/combination-sum/\n\nDescription:\nGiven an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.\nThe same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.\nIt is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.\n\nExample 1:\nInput: candidates = [2,3,6,7], target = 7\nOutput: [[2,2,3],[7]]\nExplanation:\n2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.\n7 is a candidate, and 7 = 7.\nThese are the only two combinations.\n\nExample 2:\nInput: candidates = [2,3,5], target = 8\nOutput: [[2,2,2,2],[2,3,3],[3,5]]\n\nExample 3:\nInput: candidates = [2], target = 1\nOutput: []",
    "tags": [
      "\ud83d\udcca Array",
      "\ud83d\udd04 Backtracking"
    ]
  },
  "0040": {
    "shortDescription": "Find all unique combinations where numbers sum to target. Each number can only be used once. Sort array first, then skip duplicates at same recursion level.",
    "timeComplexity": "O(2\u207f)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Backtracking <strong>explores all possibilities</strong> like solving a maze:</p>\n            <ul>\n                <li><strong>Choose:</strong> Make a decision</li>\n                <li><strong>Explore:</strong> Recursively continue</li>\n                <li><strong>Validate:</strong> Check if path is valid</li>\n                <li><strong>Backtrack:</strong> Undo choice if stuck, try another</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Combination Sum II\n\nProblem from LeetCode: https://leetcode.com/problems/combination-sum-ii/\n\nDescription:\nGiven a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.\nEach number in candidates may only be used once in the combination.\nNote: The solution set must not contain duplicate combinations.\n\nExample 1:\nInput: candidates = [10,1,2,7,6,1,5], target = 8\nOutput: [[1,1,6],[1,2,5],[1,7],[2,6]]\n\nExample 2:\nInput: candidates = [2,5,2,1,2], target = 5\nOutput: [[1,2,2],[5]]",
    "tags": [
      "\ud83d\udcca Array",
      "\ud83d\udd04 Backtracking"
    ]
  },
  "0046": {
    "shortDescription": "Given an array of distinct integers, return all possible permutations. You can return them in any order.",
    "timeComplexity": "O(n! \u00d7 n)",
    "spaceComplexity": "O(n!)",
    "laymanHtml": "<p>Think of arranging people in a line - pick one for position 1, then one for position 2, and so on:</p>\n            <ul>\n                <li><strong>Choose:</strong> Pick an element for the current position</li>\n                <li><strong>Explore:</strong> Recursively arrange the remaining elements</li>\n                <li><strong>Unchoose:</strong> Backtrack and try the next element</li>\n                <li><strong>Base case:</strong> When no elements left, we have a complete permutation!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Permutations\n\nProblem from LeetCode: https://leetcode.com/problems/permutations/\n\nDescription:\nGiven an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.\n\nExample 1:\nInput: nums = [1,2,3]\nOutput: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n\nExample 2:\nInput: nums = [0,1]\nOutput: [[0,1],[1,0]]\n\nExample 3:\nInput: nums = [1]\nOutput: [[1]]",
    "tags": [
      "\u21a9\ufe0f Backtracking",
      "\ud83d\udd04 Recursion"
    ]
  },
  "0051": {
    "shortDescription": "Place N queens on an N\u00d7N chessboard so that no two queens attack each other. Queens attack horizontally, vertically, and diagonally.",
    "timeComplexity": "O(n!)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Backtracking <strong>explores all possibilities</strong> like solving a maze:</p>\n            <ul>\n                <li><strong>Choose:</strong> Make a decision</li>\n                <li><strong>Explore:</strong> Recursively continue</li>\n                <li><strong>Validate:</strong> Check if path is valid</li>\n                <li><strong>Backtrack:</strong> Undo choice if stuck, try another</li>\n            </ul>",
    "fullProblemStatement": "LeetCode N-Queens\n\nProblem from LeetCode: https://leetcode.com/problems/n-queens/\n\nDescription:\nThe n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.\nGiven an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.\n\nEach solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.\n\nExample 1:\nInput: n = 4\nOutput: [[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]\nExplanation: There exist two distinct solutions to the 4-queens puzzle as shown above\n\nExample 2:\nInput: n = 1\nOutput: [[\"Q\"]]",
    "tags": [
      "\ud83d\udd04 Backtracking"
    ]
  },
  "0078": {
    "shortDescription": "Given an array of unique integers, return all possible subsets (the power set). The solution must not contain duplicate subsets.",
    "timeComplexity": "O(n \u00d7 2\u207f)",
    "spaceComplexity": "O(n \u00d7 2\u207f)",
    "laymanHtml": "<p>For each element, you have two choices: <strong>include it</strong> or <strong>don't include it</strong>.</p>\n            <ul>\n                <li><strong>Power set:</strong> All possible combinations (2\u207f subsets for n elements)</li>\n                <li><strong>At each step:</strong> Add current subset to result, then explore adding more elements</li>\n                <li><strong>Start index:</strong> Ensures we don't create duplicates like [1,2] and [2,1]</li>\n                <li><strong>Backtracking:</strong> After exploring with an element, remove it and try next</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Subsets\n\nProblem from LeetCode: https://leetcode.com/problems/subsets/\n\nDescription:\nGiven an integer array nums of unique elements, return all possible subsets (the power set).\nThe solution set must not contain duplicate subsets. Return the solution in any order.\n\nExample 1:\nInput: nums = [1,2,3]\nOutput: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n\nExample 2:\nInput: nums = [0]\nOutput: [[],[0]]",
    "tags": [
      "\u21a9\ufe0f Backtracking",
      "\ud83d\udd22 Bit Manipulation"
    ]
  },
  "0079": {
    "shortDescription": "Given a 2D board and a word, find if the word exists in the grid by moving to adjacent cells. Uses DFS backtracking, marking cells as visited and restoring them.",
    "timeComplexity": "O(m \u00d7 n \u00d7 4^L)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Backtracking <strong>explores all possibilities</strong> like solving a maze:</p>\n            <ul>\n                <li><strong>Choose:</strong> Make a decision</li>\n                <li><strong>Explore:</strong> Recursively continue</li>\n                <li><strong>Validate:</strong> Check if path is valid</li>\n                <li><strong>Backtrack:</strong> Undo choice if stuck, try another</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Word Search\n\nProblem from LeetCode: https://leetcode.com/problems/word-search/\n\nDescription:\nGiven an m x n grid of characters board and a string word, return true if word exists in the grid.\n\nThe word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.\n\nExample 1:\nInput: board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"\nOutput: true\n\nExample 2:\nInput: board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\"\nOutput: true\n\nExample 3:\nInput: board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCB\"\nOutput: false",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83d\udd04 Backtracking"
    ]
  },
  "0090": {
    "shortDescription": "Given an array with duplicates, return all unique subsets. Sort the array first, then skip duplicates during backtracking.",
    "timeComplexity": "O(2\u207f)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Backtracking <strong>explores all possibilities</strong> like solving a maze:</p>\n            <ul>\n                <li><strong>Choose:</strong> Make a decision</li>\n                <li><strong>Explore:</strong> Recursively continue</li>\n                <li><strong>Validate:</strong> Check if path is valid</li>\n                <li><strong>Backtrack:</strong> Undo choice if stuck, try another</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Subsets II\n\nProblem from LeetCode: https://leetcode.com/problems/subsets-ii/\n\nDescription:\nGiven an integer array nums that may contain duplicates, return all possible subsets (the power set).\nThe solution set must not contain duplicate subsets. Return the solution in any order.\n\nExample 1:\nInput: nums = [1,2,2]\nOutput: [[],[1],[1,2],[1,2,2],[2],[2,2]]\n\nExample 2:\nInput: nums = [0]\nOutput: [[],[0]]",
    "tags": [
      "\ud83d\udd04 Backtracking"
    ]
  },
  "0131": {
    "shortDescription": "Partition a string such that every substring is a palindrome. Uses backtracking to try all possible partition points.",
    "timeComplexity": "O(n \u00d7 2\u207f)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Cut the string into pieces, but only keep a cut if the piece is a palindrome. <strong>Backtracking</strong> tries every option.</p>\n            <ul>\n                <li><strong>Choose:</strong> From the current start, try each end position</li>\n                <li><strong>Check:</strong> Only continue if <code>s[start..end]</code> is a palindrome</li>\n                <li><strong>Recurse and undo:</strong> Add the piece, explore the rest, then remove it</li>\n                <li><strong>Record:</strong> When the start reaches the end, save the current list of pieces</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Palindrome Partitioning\n\nProblem from LeetCode: https://leetcode.com/problems/palindrome-partitioning/\n\nDescription:\nGiven a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.\n\nA palindrome string is a string that reads the same backward as forward.\n\nExample 1:\nInput: s = \"aab\"\nOutput: [[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]\n\nExample 2:\nInput: s = \"a\"\nOutput: [[\"a\"]]",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83d\udd04 Backtracking"
    ]
  },
  "0007": {
    "shortDescription": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2\u00b3\u00b9, 2\u00b3\u00b9 - 1], return 0.",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Reversing a number is like <strong>moving digits one by one</strong> from the end to build a new number:</p>\n            <ul>\n                <li><strong>Pop last digit:</strong> Use <code>x % 10</code> to get the last digit</li>\n                <li><strong>Remove last digit:</strong> Use <code>x // 10</code> to shrink the number</li>\n                <li><strong>Push to result:</strong> Use <code>result * 10 + digit</code> to build reversed number</li>\n                <li><strong>Check overflow:</strong> Ensure result stays within 32-bit range</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Reverse Integer\n\nProblem from LeetCode: https://leetcode.com/problems/reverse-integer/\n\nDescription:\nGiven a signed 32-bit integer x, return x with its digits reversed.\nIf reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.\n\nAssume the environment does not allow you to store 64-bit integers (signed or unsigned).\n\nExample 1:\nInput: x = 123\nOutput: 321\n\nExample 2:\nInput: x = -123\nOutput: -321\n\nExample 3:\nInput: x = 120\nOutput: 21",
    "tags": [
      "\ud83d\udd22 Math",
      "\ud83d\udcca Modulo"
    ]
  },
  "0043": {
    "shortDescription": "Given two non-negative integers represented as strings, return the product as a string. Cannot use built-in BigInteger or convert inputs to integers directly. Use grade-school multiplication algorithm.",
    "timeComplexity": "O(m \u00d7 n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Multiply the way you learned in school, digit by digit, adding each product into the right column of a result array.</p>\n            <ul>\n                <li><strong>Positions:</strong> Digits <code>i</code> and <code>j</code> contribute to columns <code>i + j</code> and <code>i + j + 1</code></li>\n                <li><strong>Multiply and add:</strong> Add the product to the low column, keep its last digit, and carry the rest to the high column</li>\n                <li><strong>Trim:</strong> Drop leading zeros and return the string</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Multiply Strings\n\nProblem from LeetCode: https://leetcode.com/problems/multiply-strings/\n\nDescription:\nGiven two non-negative integers represented as strings, return their product.\nNote: You must not use any built-in BigInteger library or convert the inputs to integer directly.\n\nExample 1:\nInput: num1 = \"2\", num2 = \"3\"\nOutput: \"6\"\n\nExample 2:\nInput: num1 = \"123\", num2 = \"456\"\nOutput: \"56088\"",
    "tags": [
      "\ud83d\udd24 String",
      "\ud83d\udd22 Math"
    ]
  },
  "0048": {
    "shortDescription": "Problem: You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees clockwise in-place.",
    "timeComplexity": "O(n\u00b2)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Matrix problems work with <strong>2D grids</strong>:</p>\n            <ul>\n                <li><strong>Row/Col:</strong> Access elements by [row][col]</li>\n                <li><strong>Traverse:</strong> Iterate in various patterns</li>\n                <li><strong>In-place:</strong> Often modify without extra space</li>\n                <li><strong>Boundaries:</strong> Watch for edge cases</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Rotate Image\n\nProblem from LeetCode: https://leetcode.com/problems/rotate-image/\n\nDescription:\nYou are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).\nYou have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.\n\nExample 1:\nInput: matrix = [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[7,4,1],[8,5,2],[9,6,3]]\n\nExample 2:\nInput: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\nOutput: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
    "tags": [
      "\ud83d\udcca Array"
    ]
  },
  "0050": {
    "shortDescription": "Implement pow(x, n), which calculates x raised to the power n. Use binary exponentiation for O(log n) time complexity. If n is odd, multiply by x. If even, square the result.",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Square the base repeatedly so that the exponent is halved each time (<strong>fast exponentiation</strong>).</p>\n            <ul>\n                <li><strong>Negative power:</strong> Use <code>1 / x</code> and make <code>n</code> positive</li>\n                <li><strong>Odd bit:</strong> If <code>n</code> is odd, multiply the result by the current base</li>\n                <li><strong>Square:</strong> Square the base and halve <code>n</code></li>\n                <li><strong>Result:</strong> About log n multiplications instead of n</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Pow(x, n)\n\nProblem from LeetCode: https://leetcode.com/problems/powx-n/\n\nDescription:\nImplement pow(x, n), which calculates x raised to the power n (i.e., x^n).\n\nExample 1:\nInput: x = 2.00000, n = 10\nOutput: 1024.00000\n\nExample 2:\nInput: x = 2.10000, n = 3\nOutput: 9.26100\n\nExample 3:\nInput: x = 2.00000, n = -2\nOutput: 0.25000\nExplanation: 2^-2 = 1/2^2 = 1/4 = 0.25",
    "tags": [
      "\ud83d\udd22 Math"
    ]
  },
  "0054": {
    "shortDescription": "Problem: Given an m x n matrix, return all elements of the matrix in spiral order.",
    "timeComplexity": "O(m\u00d7n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Matrix problems work with <strong>2D grids</strong>:</p>\n            <ul>\n                <li><strong>Row/Col:</strong> Access elements by [row][col]</li>\n                <li><strong>Traverse:</strong> Iterate in various patterns</li>\n                <li><strong>In-place:</strong> Often modify without extra space</li>\n                <li><strong>Boundaries:</strong> Watch for edge cases</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Spiral Matrix\n\nProblem from LeetCode: https://leetcode.com/problems/spiral-matrix/\n\nDescription:\nGiven an m x n matrix, return all elements of the matrix in spiral order.\n\nExample 1:\nInput: matrix = [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [1,2,3,6,9,8,7,4,5]\n\nExample 2:\nInput: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\nOutput: [1,2,3,4,8,12,11,10,9,5,6,7]",
    "tags": [
      "\ud83d\udd32 Matrix"
    ]
  },
  "0066": {
    "shortDescription": "Given a large integer represented as an integer array digits, increment one to the integer. Handle carry propagation when digit is 9. May need to prepend 1 for cases like 999 + 1 = 1000.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Add one to the last digit and pass a carry to the left only when a digit is 9.</p>\n            <ul>\n                <li><strong>From the right:</strong> A digit below 9 is incremented and we are done</li>\n                <li><strong>Nines:</strong> A 9 becomes 0 and the carry continues left</li>\n                <li><strong>All nines:</strong> Return a new array that starts with 1 followed by zeros</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Plus One\n\nProblem from LeetCode: https://leetcode.com/problems/plus-one/\n\nDescription:\nYou are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.\n\nIncrement the large integer by one and return the resulting array of digits.\n\nExample 1:\nInput: digits = [1,2,3]\nOutput: [1,2,4]\nExplanation: The array represents the integer 123.\nIncrementing by one gives 123 + 1 = 124.\nThus, the result should be [1,2,4].\n\nExample 2:\nInput: digits = [4,3,2,1]\nOutput: [4,3,2,2]\nExplanation: The array represents the integer 4321.\nIncrementing by one gives 4321 + 1 = 4322.\nThus, the result should be [4,3,2,2].\n\nExample 3:\nInput: digits = [9]\nOutput: [1,0]\nExplanation: The array represents the integer 9.\nIncrementing by one gives 9 + 1 = 10.\nThus, the result should be [1,0].",
    "tags": [
      "\ud83d\udd22 Math"
    ]
  },
  "0073": {
    "shortDescription": "Problem: Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.",
    "timeComplexity": "O(m\u00d7n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Matrix problems work with <strong>2D grids</strong>:</p>\n            <ul>\n                <li><strong>Row/Col:</strong> Access elements by [row][col]</li>\n                <li><strong>Traverse:</strong> Iterate in various patterns</li>\n                <li><strong>In-place:</strong> Often modify without extra space</li>\n                <li><strong>Boundaries:</strong> Watch for edge cases</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Set Matrix Zeroes\n\nProblem from LeetCode: https://leetcode.com/problems/set-matrix-zeroes/\n\nDescription:\nGiven an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.\nYou must do it in place.\n\nExample 1:\nInput: matrix = [[1,1,1],[1,0,1],[1,1,1]]\nOutput: [[1,0,1],[0,0,0],[1,0,1]]\n\nExample 2:\nInput: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\nOutput: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
    "tags": [
      "\ud83d\udd32 Matrix"
    ]
  },
  "0136": {
    "shortDescription": "Problem: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Bit manipulation works with <strong>binary representations</strong>:</p>\n            <ul>\n                <li><strong>AND (&):</strong> Both bits must be 1</li>\n                <li><strong>OR (|):</strong> At least one bit is 1</li>\n                <li><strong>XOR (^):</strong> Bits must be different</li>\n                <li><strong>Shift:</strong> Move bits left/right</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Single Number\n\nProblem from LeetCode: https://leetcode.com/problems/single-number/\n\nDescription:\nGiven a non-empty array of integers nums, every element appears twice except for one. Find that single one.\nYou must implement a solution with a linear runtime complexity and use only constant extra space.\n\nExample 1:\nInput: nums = [2,2,1]\nOutput: 1\n\nExample 2:\nInput: nums = [4,1,2,1,2]\nOutput: 4\n\nExample 3:\nInput: nums = [1]\nOutput: 1",
    "tags": [
      "\ud83d\udcbb Bit"
    ]
  },
  "0190": {
    "shortDescription": "Problem: Reverse bits of a given 32 bits unsigned integer.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Reversing bits is like <strong>reading a binary number backwards</strong>:</p>\n            <ul>\n                <li><strong>Extract:</strong> Take the lowest bit of n with <code>n &amp; 1</code></li>\n                <li><strong>Place:</strong> Put it into the result starting from the highest position</li>\n                <li><strong>Shift:</strong> Move n right to expose the next bit</li>\n                <li><strong>Demo width:</strong> This demo uses 8 bits for readability; the Python solution uses 32</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Reverse Bits\n\nProblem from LeetCode: https://leetcode.com/problems/reverse-bits/\n\nDescription:\nReverse bits of a given 32 bits unsigned integer.\n\nExample 1:\nInput: n = 00000010100101000001111010011100\nOutput:    964176192 (00111001011110000010100101000000)\nExplanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.\n\nExample 2:\nInput: n = 11111111111111111111111111111101\nOutput:   3221225471 (10111111111111111111111111111111)\nExplanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.",
    "tags": [
      "\ud83d\udcbb Bit"
    ]
  },
  "0191": {
    "shortDescription": "Problem: Write a function that takes an unsigned integer and returns the number of '1' bits it has.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Bit manipulation works with <strong>binary representations</strong>:</p>\n            <ul>\n                <li><strong>AND (&):</strong> Both bits must be 1</li>\n                <li><strong>OR (|):</strong> At least one bit is 1</li>\n                <li><strong>XOR (^):</strong> Bits must be different</li>\n                <li><strong>Shift:</strong> Move bits left/right</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 191. Number of 1 Bits\n\nProblem from LeetCode: https://leetcode.com/problems/number-of-1-bits/\n\nDescription:\nWrite a function that takes an unsigned integer and returns the number of '1' bits it has \n(also known as the Hamming weight).\n\nNote:\n- Note that in some languages, such as Java, there is no unsigned integer type. \n  In this case, the input will be given as a signed integer type. \n  It should not affect your implementation, as the integer's internal binary representation is the same, \n  whether it is signed or unsigned.\n- In Java, the compiler represents the signed integers using 2's complement notation. \n  Therefore, in Example 3, the input represents the signed integer -3.\n\nExample 1:\nInput: n = 00000000000000000000000000001011\nOutput: 3\nExplanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.\n\nExample 2:\nInput: n = 00000000000000000000000010000000\nOutput: 1\nExplanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.\n\nExample 3:\nInput: n = 11111111111111111111111111111101\nOutput: 31\nExplanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.\n\nConstraints:\n- The input must be a binary string of length 32.\n\nFollow up: If this function is called many times, how would you optimize it?",
    "tags": [
      "\ud83d\udcbb Bit"
    ]
  },
  "0202": {
    "shortDescription": "A happy number is defined by repeatedly replacing the number with the sum of squares of its digits until it equals 1 (happy) or loops endlessly (not happy). Use a set to detect cycles, or Floyd's cycle detection.",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Replace the number with the sum of the squares of its digits again and again. It either reaches 1 (happy) or falls into a loop.</p>\n            <ul>\n                <li><strong>Step:</strong> Compute the sum of squared digits</li>\n                <li><strong>Remember:</strong> Store every number already seen</li>\n                <li><strong>Stop:</strong> Happy if it reaches 1, otherwise a repeat means a cycle</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 202. Happy Number\n\nProblem from LeetCode: https://leetcode.com/problems/happy-number/\n\nDescription:\nWrite an algorithm to determine if a number n is happy.\n\nA happy number is a number defined by the following process:\n- Starting with any positive integer, replace the number by the sum of the squares of its digits.\n- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.\n- Those numbers for which this process ends in 1 are happy numbers.\n\nReturn true if n is a happy number, and false if not.\n\nExample 1:\nInput: n = 19\nOutput: true\nExplanation:\n1\u00b2 + 9\u00b2 = 82\n8\u00b2 + 2\u00b2 = 68\n6\u00b2 + 8\u00b2 = 100\n1\u00b2 + 0\u00b2 + 0\u00b2 = 1\n\nExample 2:\nInput: n = 2\nOutput: false\n\nConstraints:\n- 1 <= n <= 2\u00b3\u00b9 - 1",
    "tags": [
      "\ud83d\udd22 Math"
    ]
  },
  "0268": {
    "shortDescription": "Problem: Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>XOR every index from 0 to n with every array value. Equal values cancel out, and the missing number is left.</p>\n            <ul>\n                <li><strong>XOR indices:</strong> Fold in <code>0..n</code></li>\n                <li><strong>XOR values:</strong> Fold in each number of the array</li>\n                <li><strong>Result:</strong> Everything cancels except the missing number</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Missing Number\n\nProblem from LeetCode: https://leetcode.com/problems/missing-number/\n\nDescription:\nGiven an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.\n\nExample 1:\nInput: nums = [3,0,1]\nOutput: 2\nExplanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.\n\nExample 2:\nInput: nums = [0,1]\nOutput: 2\nExplanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.\n\nExample 3:\nInput: nums = [9,6,4,2,3,5,7,0,1]\nOutput: 8\nExplanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.",
    "tags": [
      "\ud83d\udcca Array",
      "\ud83d\udcbb Bit"
    ]
  },
  "0338": {
    "shortDescription": "Problem: Given an integer n, return an array ans of length n + 1 such that for each i (0 \u2264 i \u2264 n), ans[i] is the number of 1's in the binary representation of i.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Bit manipulation works with <strong>binary representations</strong>:</p>\n            <ul>\n                <li><strong>AND (&):</strong> Both bits must be 1</li>\n                <li><strong>OR (|):</strong> At least one bit is 1</li>\n                <li><strong>XOR (^):</strong> Bits must be different</li>\n                <li><strong>Shift:</strong> Move bits left/right</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Counting Bits\n\nProblem from LeetCode: https://leetcode.com/problems/counting-bits/\n\nDescription:\nGiven an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.\n\nExample 1:\nInput: n = 2\nOutput: [0,1,1]\nExplanation:\n0 --> 0 (0 '1' bits)\n1 --> 1 (1 '1' bit)\n2 --> 10 (1 '1' bit)\n\nExample 2:\nInput: n = 5\nOutput: [0,1,1,2,1,2]\nExplanation:\n0 --> 0 (0 '1' bits)\n1 --> 1 (1 '1' bit)\n2 --> 10 (1 '1' bit)\n3 --> 11 (2 '1' bits)\n4 --> 100 (1 '1' bit)\n5 --> 101 (2 '1' bits)\n\nConstraints:\n0 <= n <= 10^5\n\nFollow up:\n- It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?\n- Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?",
    "tags": [
      "\ud83d\udcbb Bit"
    ]
  },
  "0371": {
    "shortDescription": "Problem: Given two integers a and b, return the sum of the two integers without using the operators + and -.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Add without <code>+</code>: XOR gives the sum without carries and AND shifted left gives the carries.</p>\n            <ul>\n                <li><strong>Sum bits:</strong> <code>a ^ b</code> adds without carry</li>\n                <li><strong>Carry bits:</strong> <code>(a &amp; b) &lt;&lt; 1</code> is the carry</li>\n                <li><strong>Repeat:</strong> Continue until there is no carry</li>\n                <li><strong>Mask:</strong> A 32-bit mask keeps Python's integers in range, and the sign is restored at the end</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Sum Of Two Integers\n\nProblem from LeetCode: https://leetcode.com/problems/sum-of-two-integers/\n\nDescription:\nGiven two integers a and b, return the sum of the two integers without using the + and - operators.\n\nExample 1:\nInput: a = 1, b = 2\nOutput: 3\n\nExample 2:\nInput: a = 2, b = 3\nOutput: 5\n\nConstraints:\n-1000 <= a, b <= 1000",
    "tags": [
      "\ud83d\udd22 Bit"
    ]
  },
  "0056": {
    "shortDescription": "Given an array of intervals, merge all overlapping intervals and return an array of non-overlapping intervals that cover all the intervals in the input.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Think of merging meeting times on a calendar:</p>\n            <ul>\n                <li><strong>First:</strong> Sort intervals by start time (so we process in order)</li>\n                <li><strong>For each interval:</strong> Compare with the last merged interval</li>\n                <li><strong>If overlapping:</strong> Extend the end time of the last interval</li>\n                <li><strong>If not overlapping:</strong> Add as a new separate interval</li>\n                <li><strong>Key insight:</strong> Two intervals overlap if current.start \u2264 prev.end</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Merge Intervals\n\nProblem from LeetCode: https://leetcode.com/problems/merge-intervals/\n\nDescription:\nGiven an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.\n\nExample 1:\nInput: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]\nExplanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].\n\nExample 2:\nInput: intervals = [[1,4],[4,5]]\nOutput: [[1,5]]\nExplanation: Intervals [1,4] and [4,5] are considered overlapping.",
    "tags": [
      "\ud83d\udcc5 Intervals",
      "\ud83d\udd22 Sorting"
    ]
  },
  "0057": {
    "shortDescription": "Given a sorted list of non-overlapping intervals, insert a new interval and merge overlaps. The algorithm processes intervals in three phases: before, overlapping, and after.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Interval problems deal with <strong>ranges and overlaps</strong>:</p>\n            <ul>\n                <li><strong>Sort:</strong> Usually sort by start time</li>\n                <li><strong>Merge:</strong> Combine overlapping intervals</li>\n                <li><strong>Compare:</strong> Check if intervals overlap</li>\n                <li><strong>Track:</strong> Maintain current merged interval</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Insert Interval\n\nProblem from LeetCode: https://leetcode.com/problems/insert-interval/\n\nDescription:\nYou are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.\n\nInsert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).\n\nReturn intervals after the insertion.\n\nExample 1:\nInput: intervals = [[1,3],[6,9]], newInterval = [2,5]\nOutput: [[1,5],[6,9]]\n\nExample 2:\nInput: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]\nOutput: [[1,2],[3,10],[12,16]]\nExplanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].",
    "tags": [
      "\ud83d\udccf Intervals"
    ]
  },
  "0252": {
    "shortDescription": "Problem: Given an array of meeting time intervals, determine if a person can attend all meetings (no overlaps).",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Interval problems deal with <strong>ranges and overlaps</strong>:</p>\n            <ul>\n                <li><strong>Sort:</strong> Usually sort by start time</li>\n                <li><strong>Merge:</strong> Combine overlapping intervals</li>\n                <li><strong>Compare:</strong> Check if intervals overlap</li>\n                <li><strong>Track:</strong> Maintain current merged interval</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 252: Meeting Rooms\n\nProblem description (premium problem):\n\nGiven an array of meeting time intervals where intervals[i] = [starti, endi], \ndetermine if a person could attend all meetings.\n\nExample 1:\nInput: intervals = [[0,30],[5,10],[15,20]]\nOutput: false\nExplanation: The person cannot attend all meetings because there is an overlap between [0,30] and [5,10].\n\nExample 2:\nInput: intervals = [[7,10],[2,4]]\nOutput: true\nExplanation: The person can attend all meetings because they do not overlap.\n\nConstraints:\n- 0 <= intervals.length <= 10^4\n- intervals[i].length == 2\n- 0 <= starti < endi <= 10^6",
    "tags": [
      "\ud83d\udccf Intervals"
    ]
  },
  "0253": {
    "shortDescription": "Problem: Find the minimum number of conference rooms required to hold all meetings.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Interval problems deal with <strong>ranges and overlaps</strong>:</p>\n            <ul>\n                <li><strong>Sort:</strong> Usually sort by start time</li>\n                <li><strong>Merge:</strong> Combine overlapping intervals</li>\n                <li><strong>Compare:</strong> Check if intervals overlap</li>\n                <li><strong>Track:</strong> Maintain current merged interval</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Meeting Rooms II\n\nProblem from LeetCode: https://leetcode.com/problems/meeting-rooms-ii/\n\nDescription:\nGiven an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.\n\nExample 1:\nInput: intervals = [[0,30],[5,10],[15,20]]\nOutput: 2\n\nExample 2:\nInput: intervals = [[7,10],[2,4]]\nOutput: 1",
    "tags": [
      "\ud83d\udccf Intervals"
    ]
  },
  "0435": {
    "shortDescription": "Problem: Find the minimum number of intervals to remove to make the rest non-overlapping.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Interval problems deal with <strong>ranges and overlaps</strong>:</p>\n            <ul>\n                <li><strong>Sort:</strong> Usually sort by start time</li>\n                <li><strong>Merge:</strong> Combine overlapping intervals</li>\n                <li><strong>Compare:</strong> Check if intervals overlap</li>\n                <li><strong>Track:</strong> Maintain current merged interval</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Non-Overlapping Intervals\n\nProblem from LeetCode: https://leetcode.com/problems/non-overlapping-intervals/\n\nGiven an array of intervals intervals where intervals[i] = [starti, endi], \nreturn the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.\n\nExample 1:\n    Input: intervals = [[1,2],[2,3],[3,4],[1,3]]\n    Output: 1\n    Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.\n\nExample 2:\n    Input: intervals = [[1,2],[1,2],[1,2]]\n    Output: 2\n    Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.\n\nExample 3:\n    Input: intervals = [[1,2],[2,3]]\n    Output: 0\n    Explanation: You don't need to remove any of the intervals since they're already non-overlapping.\n\nConstraints:\n    1 <= intervals.length <= 10^5\n    intervals[i].length == 2\n    -5 * 10^4 <= starti < endi <= 5 * 10^4",
    "tags": [
      "\ud83d\udccf Intervals"
    ]
  },
  "0759": {
    "shortDescription": "Given schedules of multiple employees, find common free time intervals where all employees are available.",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Merge all schedules and find gaps:</p>\n            <ul>\n                <li><strong>Step 1:</strong> Flatten all intervals from all employees</li>\n                <li><strong>Step 2:</strong> Sort intervals by start time</li>\n                <li><strong>Step 3:</strong> Merge overlapping intervals</li>\n                <li><strong>Step 4:</strong> Find gaps between merged intervals = Free time!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Employee Free Time\n\nProblem from LeetCode: https://leetcode.com/problems/employee-free-time/\n\nDescription:\nWe are given a list schedule of employees, which represents the working time for each employee.\nEach employee has a list of non-overlapping Intervals, and these intervals are in sorted order.\nReturn the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.\n\nExample 1:\nInput: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]\nOutput: [[3,4]]\nExplanation: There are a total of three employees, and all common\nfree time intervals would be [-inf, 1], [3, 4], [10, inf].\nWe discard any intervals that contain inf as they aren't finite.\n\nExample 2:\nInput: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]\nOutput: [[5,6],[7,9]]\n\nConstraints:\n1 <= schedule.length <= 50\n0 <= schedule[i].length <= 50\n0 <= schedule[i][j].start < schedule[i][j].end <= 10^8",
    "tags": [
      "\ud83d\udcc5 Intervals",
      "\ud83d\udd3a Heap"
    ]
  },
  "1272": {
    "shortDescription": "Given a sorted list of disjoint intervals and an interval to remove, return the remaining intervals after removal.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>For each interval, check overlap with removal interval:</p>\n            <ul>\n                <li><strong>No overlap:</strong> Keep interval as-is</li>\n                <li><strong>Full overlap:</strong> Remove entire interval</li>\n                <li><strong>Left part remains:</strong> Keep [start, removeStart]</li>\n                <li><strong>Right part remains:</strong> Keep [removeEnd, end]</li>\n                <li><strong>Split:</strong> Keep both left and right parts</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Remove Interval\n\nProblem from LeetCode: https://leetcode.com/problems/remove-interval/\n\nGiven a sorted list of disjoint intervals, each interval intervals[i] = [a, b] \nrepresents the set of real numbers x such that a <= x < b.\n\nWe remove the intersections between any interval in intervals and the interval toBeRemoved.\n\nReturn a sorted list of intervals after all such removals.\n\nExample 1:\n    Input: intervals = [[0,2],[3,4],[5,7]], toBeRemoved = [1,6]\n    Output: [[0,1],[6,7]]\n    Explanation: After removing the intersection of [1,6] with the intervals, \n    we are left with [0,1] and [6,7].\n\nExample 2:\n    Input: intervals = [[0,5]], toBeRemoved = [2,3]\n    Output: [[0,2],[3,5]]\n    Explanation: After removing the intersection of [2,3] with the intervals, \n    we are left with [0,2] and [3,5].\n\nConstraints:\n    1 <= intervals.length <= 10^4\n    -10^9 <= intervals[i][0] < intervals[i][1] <= 10^9\n    intervals[i][0] < intervals[i][1]\n    intervals are pairwise disjoint.\n    -10^9 <= toBeRemoved[0] < toBeRemoved[1] <= 10^9",
    "tags": [
      "\ud83d\udcc5 Intervals",
      "\u2795 Merge"
    ]
  },
  "0006": {
    "shortDescription": "Write characters in a zigzag pattern on given number of rows, then read line by line.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Imagine writing the text in a zigzag down and up across the rows, then reading each row from left to right.</p>\n            <ul>\n                <li><strong>Walk the rows:</strong> Put each character in the current row, starting at row 0</li>\n                <li><strong>Bounce:</strong> Reverse direction at the top and bottom rows</li>\n                <li><strong>Join:</strong> Concatenate all rows to get the answer</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Zigzag Conversion\n\nProblem from LeetCode: https://leetcode.com/problems/zigzag-conversion/\n\nDescription:\nThe string \"PAYPALISHIRING\" is written in a zigzag pattern on a given number of rows like this:\nP   A   H   N\nA P L S I I G\nY   I   R\nAnd then read line by line: \"PAHNAPLSIIGYIR\"\n\nWrite the code that will take a string and make this conversion given a number of rows.\n\nExample 1:\nInput: s = \"PAYPALISHIRING\", numRows = 3\nOutput: \"PAHNAPLSIIGYIR\"\n\nExample 2:\nInput: s = \"PAYPALISHIRING\", numRows = 4\nOutput: \"PINALSIGYAHRPI\"\nExplanation:\nP     I    N\nA   L S  I G\nY A   H R\nP     I\n\nExample 3:\nInput: s = \"A\", numRows = 1\nOutput: \"A\"",
    "tags": [
      "String",
      "Medium"
    ]
  },
  "0008": {
    "shortDescription": "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Parse the text the way a careful reader would: skip blanks, read an optional sign, then take digits until something else appears.</p>\n            <ul>\n                <li><strong>Skip spaces:</strong> Move past leading whitespace</li>\n                <li><strong>Read the sign:</strong> A single <code>+</code> or <code>-</code> sets the sign</li>\n                <li><strong>Accumulate digits:</strong> Build <code>result * 10 + digit</code> and stop at the first non-digit</li>\n                <li><strong>Clamp:</strong> If the value would pass the 32-bit range, return the limit instead</li>\n            </ul>",
    "fullProblemStatement": "LeetCode String to Integer (atoi)\n\nProblem from LeetCode: https://leetcode.com/problems/string-to-integer-atoi/\n\nDescription:\nImplement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.\n\nThe algorithm for myAtoi(string s) is as follows:\n1. Read in and ignore any leading whitespace.\n2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.\n3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.\n4. Convert these digits into an integer (i.e. \"123\" -> 123, \"0032\" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).\n5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.\n6. Return the integer as the final result.\n\nExample 1:\nInput: s = \"42\"\nOutput: 42\nExplanation: The underlined characters are what is read in, the caret is the current reader position.\nStep 1: \"42\" (no characters read because there is no leading whitespace)\nStep 2: \"42\" (no characters read because there is neither a '-' nor '+')\nStep 3: \"42\" (\"42\" is read in)\nThe parsed integer is 42.\nSince 42 is in the range [-2^31, 2^31 - 1], the final result is 42.\n\nExample 2:\nInput: s = \"   -42\"\nOutput: -42\nExplanation:\nStep 1: \"   -42\" (leading whitespace is read and ignored)\nStep 2: \"   -42\" ('-' is read, so the result should be negative)\nStep 3: \"   -42\" (\"42\" is read in)\nThe parsed integer is -42.\nSince -42 is in the range [-2^31, 2^31 - 1], the final result is -42.\n\nExample 3:\nInput: s = \"4193 with words\"\nOutput: 4193\nExplanation:\nStep 1: \"4193 with words\" (no characters read because there is no leading whitespace)\nStep 2: \"4193 with words\" (no characters read because there is neither a '-' nor '+')\nStep 3: \"4193 with words\" (\"4193\" is read in; reading stops because the next character is a non-digit)\nThe parsed integer is 4193.\nSince 4193 is in the range [-2^31, 2^31 - 1], the final result is 4193.",
    "tags": [
      "String",
      "Medium"
    ]
  },
  "0009": {
    "shortDescription": "Determine whether an integer is a palindrome (reads the same backward as forward).",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Instead of converting to text, reverse only the <strong>second half</strong> of the digits and compare it with the first half.</p>\n            <ul>\n                <li><strong>Reject early:</strong> Negative numbers and numbers ending in 0 (except 0) are not palindromes</li>\n                <li><strong>Peel digits:</strong> Move the last digit of <code>x</code> onto <code>reversed_half</code> until <code>reversed_half</code> catches up</li>\n                <li><strong>Compare:</strong> Equal halves (ignoring the middle digit for odd lengths) means a palindrome</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Palindrome Number\n\nProblem from LeetCode: https://leetcode.com/problems/palindrome-number/\n\nDescription:\nGiven an integer x, return true if x is a palindrome, and false otherwise.\nAn integer is a palindrome when it reads the same backward as forward.\n\nExample 1:\nInput: x = 121\nOutput: true\nExplanation: 121 reads as 121 from left to right and from right to left.\n\nExample 2:\nInput: x = -121\nOutput: false\nExplanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.\n\nExample 3:\nInput: x = 10\nOutput: false\nExplanation: Reads 01 from right to left. Therefore it is not a palindrome.",
    "tags": [
      "Math",
      "Easy"
    ]
  },
  "0012": {
    "shortDescription": "Convert an integer to a Roman numeral.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Greedy change-making: always use the largest Roman symbol that still fits.</p>\n            <ul>\n                <li><strong>Table:</strong> Values from 1000 down to 1, including the subtractive ones like 900 (CM) and 4 (IV)</li>\n                <li><strong>Take:</strong> While the number is at least the current value, append its symbol and subtract</li>\n                <li><strong>Move on:</strong> Go to the next smaller value until the number reaches 0</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Integer to Roman\n\nProblem from LeetCode: https://leetcode.com/problems/integer-to-roman/\n\nDescription:\nRoman numerals are represented by seven different symbols: I, V, X, L, C, D and M.\n\nSymbol       Value\nI            1\nV            5\nX            10\nL            50\nC            100\nD            500\nM            1000\n\nFor example, 2 is written as II in Roman numeral, just two one's added together. \n12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.\n\nRoman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. \nInstead, the number four is written as IV. Because the one is before the five we subtract it making four. \nThe same principle applies to the number nine, which is written as IX.\n\nThere are six instances where subtraction is used:\n- I can be placed before V (5) and X (10) to make 4 and 9. \n- X can be placed before L (50) and C (100) to make 40 and 90. \n- C can be placed before D (500) and M (1000) to make 400 and 900.\n\nGiven an integer, convert it to a roman numeral.\n\nExample 1:\nInput: num = 3\nOutput: \"III\"\nExplanation: 3 is represented as 3 ones.\n\nExample 2:\nInput: num = 58\nOutput: \"LVIII\"\nExplanation: L = 50, V = 5, III = 3.\n\nExample 3:\nInput: num = 1994\nOutput: \"MCMXCIV\"\nExplanation: M = 1000, CM = 900, XC = 90 and IV = 4.",
    "tags": [
      "Math",
      "String",
      "Medium"
    ]
  },
  "0013": {
    "shortDescription": "Convert a Roman numeral to an integer.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Read the numeral from left to right and add each symbol, except when a smaller symbol sits in front of a larger one, which means subtraction.</p>\n            <ul>\n                <li><strong>Look ahead:</strong> Compare the current value with the next one</li>\n                <li><strong>Subtract pair:</strong> If current &lt; next, add <code>next - current</code> and skip both</li>\n                <li><strong>Otherwise:</strong> Add the current value and move one step</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Roman to Integer\n\nProblem from LeetCode: https://leetcode.com/problems/roman-to-integer/\n\nDescription:\nRoman numerals are represented by seven different symbols: I, V, X, L, C, D and M.\n\nSymbol       Value\nI            1\nV            5\nX            10\nL            50\nC            100\nD            500\nM            1000\n\nFor example, 2 is written as II in Roman numeral, just two ones added together. \n12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.\n\nRoman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. \nInstead, the number four is written as IV. Because the one is before the five we subtract it making four. \nThe same principle applies to the number nine, which is written as IX.\n\nThere are six instances where subtraction is used:\n- I can be placed before V (5) and X (10) to make 4 and 9. \n- X can be placed before L (50) and C (100) to make 40 and 90. \n- C can be placed before D (500) and M (1000) to make 400 and 900.\n\nGiven a roman numeral, convert it to an integer.\n\nExample 1:\nInput: s = \"III\"\nOutput: 3\nExplanation: III = 3.\n\nExample 2:\nInput: s = \"LVIII\"\nOutput: 58\nExplanation: L = 50, V = 5, III = 3.\n\nExample 3:\nInput: s = \"MCMXCIV\"\nOutput: 1994\nExplanation: M = 1000, CM = 900, XC = 90 and IV = 4.",
    "tags": [
      "Math",
      "String",
      "Easy"
    ]
  },
  "0014": {
    "shortDescription": "Find the longest common prefix string amongst an array of strings.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Finding a common prefix by <strong>shrinking a candidate</strong>:</p>\n            <ul>\n                <li><strong>Start:</strong> Take the first string as the candidate prefix</li>\n                <li><strong>Compare:</strong> Check each following string against the candidate</li>\n                <li><strong>Shrink:</strong> Drop the last character until the string starts with it</li>\n                <li><strong>Answer:</strong> Whatever survives all strings</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Longest Common Prefix\n\nProblem from LeetCode: https://leetcode.com/problems/longest-common-prefix/\n\nDescription:\nWrite a function to find the longest common prefix string amongst an array of strings.\nIf there is no common prefix, return an empty string \"\".\n\nExample 1:\nInput: strs = [\"flower\",\"flow\",\"flight\"]\nOutput: \"fl\"\n\nExample 2:\nInput: strs = [\"dog\",\"racecar\",\"car\"]\nOutput: \"\"\nExplanation: There is no common prefix among the input strings.",
    "tags": [
      "String",
      "Easy"
    ]
  },
  "0031": {
    "shortDescription": "Rearrange numbers into the lexicographically next greater permutation.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Finding the next permutation <strong>in place</strong>:</p>\n            <ul>\n                <li><strong>Pivot:</strong> Scan from the right for the first digit smaller than its right neighbor</li>\n                <li><strong>Swap:</strong> Swap it with the smallest larger digit to its right</li>\n                <li><strong>Reverse:</strong> Reverse the suffix so it becomes the smallest order</li>\n                <li><strong>No pivot:</strong> Already the largest order, so reverse the whole array</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Next Permutation\n\nProblem from LeetCode: https://leetcode.com/problems/next-permutation/\n\nDescription:\nA permutation of an array of integers is an arrangement of its members into a sequence or linear order.\nFor example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1].\n\nThe next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).\n\nFor example, the next permutation of arr = [1,2,3] is [1,3,2].\nSimilarly, the next permutation of arr = [2,3,1] is [3,1,2].\nWhile the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.\n\nGiven an array of integers nums, find the next permutation of nums.\n\nThe replacement must be in place and use only constant extra memory.\n\nExample 1:\nInput: nums = [1,2,3]\nOutput: [1,3,2]\n\nExample 2:\nInput: nums = [3,2,1]\nOutput: [1,2,3]\n\nExample 3:\nInput: nums = [1,1,5]\nOutput: [1,5,1]",
    "tags": [
      "Array",
      "Two Pointers",
      "Medium"
    ]
  },
  "0032": {
    "shortDescription": "Find the length of the longest valid (well-formed) parentheses substring.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A stack works like a <strong>pile of plates</strong> - last in, first out (LIFO):</p>\n            <ul>\n                <li><strong>Push:</strong> Add item to the top</li>\n                <li><strong>Pop:</strong> Remove and return the top item</li>\n                <li><strong>Peek:</strong> Look at top without removing</li>\n                <li><strong>Match pairs:</strong> Great for matching brackets, parentheses</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Longest Valid Parentheses\n\nProblem from LeetCode: https://leetcode.com/problems/longest-valid-parentheses/\n\nDescription:\nGiven a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.\n\nExample 1:\nInput: s = \"(()\"\nOutput: 2\nExplanation: The longest valid parentheses substring is \"()\".\n\nExample 2:\nInput: s = \")()())\"\nOutput: 4\nExplanation: The longest valid parentheses substring is \"()()\".\n\nExample 3:\nInput: s = \"\"\nOutput: 0",
    "tags": [
      "String",
      "Stack",
      "Hard"
    ]
  },
  "0068": {
    "shortDescription": "Format text with even spacing to fit exactly maxWidth characters per line.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Pack as many words as fit on each line, then spread the spaces so the line is exactly the maximum width.</p>\n            <ul>\n                <li><strong>Greedy fit:</strong> Add words while one space between words still fits</li>\n                <li><strong>Distribute:</strong> Divide the spare spaces evenly between the gaps; the leftmost gaps get the extra ones</li>\n                <li><strong>Special lines:</strong> The last line and single-word lines are left-aligned and padded on the right</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Text Justification\n\nProblem from LeetCode: https://leetcode.com/problems/text-justification/\n\nDescription:\nGiven an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.\n\nYou should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.\n\nExtra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.\n\nFor the last line of text, it should be left-justified, and no extra space is inserted between words.\n\nNote:\n- A word is defined as a character sequence consisting of non-space characters only.\n- Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.\n- The input array words contains at least one word.\n\nExample 1:\nInput: words = [\"This\", \"is\", \"an\", \"example\", \"of\", \"text\", \"justification.\"], maxWidth = 16\nOutput: [\n   \"This    is    an\",\n   \"example  of text\",\n   \"justification.  \"\n]\n\nExample 2:\nInput: words = [\"What\",\"must\",\"be\",\"acknowledgment\",\"shall\",\"be\"], maxWidth = 16\nOutput: [\n  \"What   must   be\",\n  \"acknowledgment  \",\n  \"shall be        \"\n]\nExplanation: Note that the last line is \"shall be    \" instead of \"shall     be\", because the last line must be left-justified instead of fully-justified.\nNote that the second line is also left-justified because it contains only one word.\n\nExample 3:\nInput: words = [\"Science\",\"is\",\"what\",\"we\",\"understand\",\"well\",\"enough\",\"to\",\"explain\",\"to\",\"a\",\"computer.\",\"Art\",\"is\",\"everything\",\"else\",\"we\",\"do\"], maxWidth = 20\nOutput: [\n  \"Science  is  what we\",\n  \"understand      well\",\n  \"enough to explain to\",\n  \"a  computer.  Art is\",\n  \"everything  else  we\",\n  \"do                  \"\n]",
    "tags": [
      "String",
      "Simulation",
      "Hard"
    ]
  },
  "0024": {
    "shortDescription": "Swap every two adjacent nodes in a linked list without modifying values.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>A linked list is like a <strong>chain of train cars</strong>:</p>\n            <ul>\n                <li><strong>Each node:</strong> Contains data and points to next node</li>\n                <li><strong>Traversal:</strong> Follow the chain one node at a time</li>\n                <li><strong>Modification:</strong> Redirect links to rearrange</li>\n                <li><strong>Two pointers:</strong> Often use slow/fast pointers</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Swap Nodes in Pairs\n\nProblem from LeetCode: https://leetcode.com/problems/swap-nodes-in-pairs/\n\nDescription:\nGiven a linked list, swap every two adjacent nodes and return its head. \nYou must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)\n\nExample 1:\nInput: head = [1,2,3,4]\nOutput: [2,1,4,3]\n\nExample 2:\nInput: head = []\nOutput: []\n\nExample 3:\nInput: head = [1]\nOutput: [1]",
    "tags": [
      "Linked List",
      "Medium"
    ]
  },
  "0041": {
    "shortDescription": "Find the smallest missing positive integer in O(n) time and O(1) space.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Use the array itself as a checklist: the value <code>v</code> is recorded by marking position <code>v - 1</code> negative.</p>\n            <ul>\n                <li><strong>Check for 1:</strong> If 1 is absent, the answer is 1</li>\n                <li><strong>Clean up:</strong> Replace values that are not in <code>1..n</code> with 1</li>\n                <li><strong>Mark:</strong> For each value <code>v</code>, make <code>nums[v - 1]</code> negative</li>\n                <li><strong>Scan:</strong> The first position that is still positive gives the answer, otherwise <code>n + 1</code></li>\n            </ul>",
    "fullProblemStatement": "LeetCode First Missing Positive\n\nProblem from LeetCode: https://leetcode.com/problems/first-missing-positive/\n\nDescription:\nGiven an unsorted integer array nums, return the smallest missing positive integer.\nYou must implement an algorithm that runs in O(n) time and uses constant extra space.\n\nExample 1:\nInput: nums = [1,2,0]\nOutput: 3\n\nExample 2:\nInput: nums = [3,4,-1,1]\nOutput: 2\n\nExample 3:\nInput: nums = [7,8,9,11,12]\nOutput: 1",
    "tags": [
      "Array",
      "Hash Table",
      "Hard"
    ]
  },
  "0094": {
    "shortDescription": "Return the inorder traversal of a binary tree's values (Left \u2192 Root \u2192 Right).",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Binary Tree Inorder Traversal\n\nProblem from LeetCode: https://leetcode.com/problems/binary-tree-inorder-traversal/\n\nDescription:\nGiven the root of a binary tree, return the inorder traversal of its nodes' values.\n\nExample 1:\nInput: root = [1,null,2,3]\nOutput: [1,3,2]\n\nExample 2:\nInput: root = []\nOutput: []\n\nExample 3:\nInput: root = [1]\nOutput: [1]",
    "tags": [
      "Tree",
      "Stack",
      "Easy"
    ]
  },
  "0101": {
    "shortDescription": "Check whether a binary tree is a mirror of itself (symmetric around its center).",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Symmetric Tree\n\nProblem from LeetCode: https://leetcode.com/problems/symmetric-tree/\n\nDescription:\nGiven the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).\n\nExample 1:\nInput: root = [1,2,2,3,4,4,3]\nOutput: true\n\nExample 2:\nInput: root = [1,2,2,null,3,null,3]\nOutput: false",
    "tags": [
      "Tree",
      "BFS/DFS",
      "Easy"
    ]
  },
  "0103": {
    "shortDescription": "Return the zigzag level order traversal (alternating left-right, right-left).",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Tree traversal is like <strong>exploring a family tree</strong>:</p>\n            <ul>\n                <li><strong>Root:</strong> Start at the top node</li>\n                <li><strong>Recurse:</strong> Visit left and right children</li>\n                <li><strong>Base case:</strong> Stop at null/leaf nodes</li>\n                <li><strong>Combine:</strong> Build answer from subtree results</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Binary Tree Zigzag Level Order Traversal\n\nProblem from LeetCode: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/\n\nDescription:\nGiven the root of a binary tree, return the zigzag level order traversal of its nodes' values.\n(i.e., from left to right, then right to left for the next level and alternate between).\n\nExample 1:\nInput: root = [3,9,20,null,null,15,7]\nOutput: [[3],[20,9],[15,7]]\n\nExample 2:\nInput: root = [1]\nOutput: [[1]]\n\nExample 3:\nInput: root = []\nOutput: []",
    "tags": [
      "Tree",
      "BFS",
      "Medium"
    ]
  },
  "0169": {
    "shortDescription": "Find the element that appears more than \u230an/2\u230b times using Boyer-Moore Voting.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "laymanHtml": "<p>Count how often each number appears and return the one with the highest count.</p>\n            <ul>\n                <li><strong>Count:</strong> Store each number's count in a hash map</li>\n                <li><strong>Compare:</strong> Keep the number with the largest count</li>\n                <li><strong>Return:</strong> That number is the majority element</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 169. Majority Element\n\nProblem from LeetCode: https://leetcode.com/problems/majority-element/\n\nDescription:\nGiven an array nums of size n, return the majority element.\n\nThe majority element is the element that appears more than \u230an / 2\u230b times. \nYou may assume that the majority element always exists in the array.\n\nExample 1:\nInput: nums = [3,2,3]\nOutput: 3\n\nExample 2:\nInput: nums = [2,2,1,1,1,2,2]\nOutput: 2\n\nConstraints:\n- n == nums.length\n- 1 <= n <= 5 * 10^4\n- -10^9 <= nums[i] <= 10^9\n\nFollow-up: Could you solve the problem in linear time and in O(1) space?",
    "tags": [
      "Array",
      "Divide and Conquer",
      "Easy"
    ]
  },
  "0289": {
    "shortDescription": "Implement Conway's Game of Life. Given an m x n grid of cells, compute the next state based on survival rules.",
    "timeComplexity": "O(m\u00d7n)",
    "spaceComplexity": "O(1) in-place",
    "laymanHtml": "<ul>\n                <li><strong>\ud83d\udfe2 Live cell with 2-3 neighbors:</strong> Survives</li>\n                <li><strong>\ud83d\udc80 Live cell with &lt;2 or &gt;3 neighbors:</strong> Dies</li>\n                <li><strong>\ud83c\udf31 Dead cell with exactly 3 neighbors:</strong> Becomes alive</li>\n                <li><strong>Trick:</strong> Use intermediate states (2, 3) to update in-place!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode 289. Game of Life\n\nProblem from LeetCode: https://leetcode.com/problems/game-of-life/\n\nDescription:\nAccording to Wikipedia's article: \"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.\"\n\nThe board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules:\n\n1. Any live cell with fewer than two live neighbors dies as if caused by under-population.\n2. Any live cell with two or three live neighbors lives on to the next generation.\n3. Any live cell with more than three live neighbors dies, as if by over-population.\n4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.\n\nThe next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. \nGiven the current state of the m x n grid board, return the next state.\n\nExample 1:\nInput: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]\nOutput: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]\n\nExample 2:\nInput: board = [[1,1],[1,0]]\nOutput: [[1,1],[1,1]]\n\nConstraints:\n- m == board.length\n- n == board[i].length\n- 1 <= m, n <= 25\n- board[i][j] is 0 or 1\n\nFollow up:\n- Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.\n- In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?",
    "tags": [
      "\ud83c\udfae Simulation",
      "\ud83d\udcca Matrix",
      "\ud83d\udfe2 Alive: 0",
      "\ud83d\udc80 Dead: 0"
    ]
  },
  "0346": {
    "shortDescription": "Design a class to calculate the moving average of all integers in a sliding window of size k.",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(k)",
    "laymanHtml": "<p>Use a <strong>sliding window with running sum</strong>:</p>\n            <ul>\n                <li><strong>Queue:</strong> Store last k elements</li>\n                <li><strong>Running Sum:</strong> Track sum of window elements</li>\n                <li><strong>Add:</strong> Add to sum, if queue full \u2192 subtract oldest</li>\n                <li><strong>Average:</strong> sum / queue size = O(1)!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Moving Average From Data Stream\n\nProblem from LeetCode: https://leetcode.com/problems/moving-average-from-data-stream/\n\nDescription:\nGiven a stream of integers and a window size, calculate the moving average of all integers in the sliding window.\n\nImplement the MovingAverage class:\n- MovingAverage(int size) Initializes the object with the size of the window size.\n- double next(int val) Returns the moving average of the last size values of the stream.\n\nExample:\nInput:\n[\"MovingAverage\", \"next\", \"next\", \"next\", \"next\"]\n[[3], [1], [10], [3], [5]]\nOutput:\n[null, 1.0, 5.5, 4.66667, 6.0]\n\nExplanation:\nMovingAverage movingAverage = new MovingAverage(3);\nmovingAverage.next(1); // return 1.0 = 1 / 1\nmovingAverage.next(10); // return 5.5 = (1 + 10) / 2\nmovingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3\nmovingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3\n\nConstraints:\n1 <= size <= 1000\n-10^5 <= val <= 10^5\nAt most 10^4 calls will be made to next.",
    "tags": [
      "\ud83d\udd27 Design",
      "\ud83d\udcca Queue"
    ]
  },
  "0348": {
    "shortDescription": "Design a Tic-Tac-Toe game that can check if a player wins after each move in O(1) time.",
    "timeComplexity": "O(1) per move",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Track <strong>counts</strong> instead of checking entire board:</p>\n            <ul>\n                <li><strong>Row counts:</strong> +1 for player 1, -1 for player 2</li>\n                <li><strong>Column counts:</strong> Same idea for each column</li>\n                <li><strong>Diagonals:</strong> Two extra counters for diagonals</li>\n                <li><strong>Win condition:</strong> If any count = n or -n \u2192 winner!</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Design Tic-Tac-Toe\n\nProblem from LeetCode: https://leetcode.com/problems/design-tic-tac-toe/\n\nDescription:\nDesign a Tic-tac-toe game that is played between two players on an n x n grid.\nYou may assume the following rules:\n1. A move is guaranteed to be valid and is placed on an empty block.\n2. Once a winning condition is reached, no more moves are allowed.\n3. A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.\n\nExample:\nInput: [\"TicTacToe\", \"move\", \"move\", \"move\", \"move\", \"move\", \"move\", \"move\"]\n[[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]]\nOutput: [null, 0, 0, 0, 0, 0, 0, 1]\n\nExplanation:\nTicTacToe ticTacToe = new TicTacToe(3);\nticTacToe.move(0, 0, 1); // return 0 (no one wins)\nticTacToe.move(0, 2, 2); // return 0 (no one wins)\nticTacToe.move(2, 2, 1); // return 0 (no one wins)\nticTacToe.move(1, 1, 2); // return 0 (no one wins)\nticTacToe.move(2, 0, 1); // return 0 (no one wins)\nticTacToe.move(1, 0, 2); // return 0 (no one wins)\nticTacToe.move(2, 1, 1); // return 1 (player 1 wins)\n\nConstraints:\n- 2 <= n <= 100\n- player is 1 or 2\n- 0 <= row, col < n\n- (row, col) are unique for each different call to move.\n- At most n^2 calls will be made to move.\n\nFollow-up: Could you do better than O(n^2) per move() operation?",
    "tags": [
      "\ud83d\udd27 Design",
      "\ud83d\udcca Array"
    ]
  },
  "0359": {
    "shortDescription": "Design a logger that returns true if the message should be printed (hasn't been printed in last 10 seconds).",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Use a <strong>HashMap</strong> to store message \u2192 last printed time:</p>\n            <ul>\n                <li><strong>Check:</strong> If message not in map, or time diff \u2265 10 \u2192 print</li>\n                <li><strong>Update:</strong> Store current timestamp for the message</li>\n                <li><strong>Return:</strong> True if printed, False if rate-limited</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Logger Rate Limiter\n\nProblem from LeetCode: https://leetcode.com/problems/logger-rate-limiter/\n\nDescription:\nDesign a logger system that receives a stream of messages along with their timestamps. \nEach unique message should only be printed at most every 10 seconds \n(i.e. a message printed at timestamp t will prevent other identical messages from being printed until timestamp t + 10).\n\nAll messages will come in chronological order. Several messages may arrive at the same timestamp.\n\nImplement the Logger class:\n- Logger() Initializes the logger object.\n- bool shouldPrintMessage(int timestamp, string message) Returns true if the message should be printed in the given timestamp, otherwise returns false.\n\nExample:\nInput\n[\"Logger\", \"shouldPrintMessage\", \"shouldPrintMessage\", \"shouldPrintMessage\", \"shouldPrintMessage\", \"shouldPrintMessage\", \"shouldPrintMessage\"]\n[[], [1, \"foo\"], [2, \"bar\"], [3, \"foo\"], [8, \"bar\"], [10, \"foo\"], [11, \"foo\"]]\nOutput\n[null, true, true, false, false, false, true]\n\nExplanation\nLogger logger = new Logger();\nlogger.shouldPrintMessage(1, \"foo\");  // return true, next allowed timestamp for \"foo\" is 1 + 10 = 11\nlogger.shouldPrintMessage(2, \"bar\");  // return true, next allowed timestamp for \"bar\" is 2 + 10 = 12\nlogger.shouldPrintMessage(3, \"foo\");  // return false, message \"foo\" was printed at timestamp 1, the next allowed timestamp is 11\nlogger.shouldPrintMessage(8, \"bar\");  // return false, message \"bar\" was printed at timestamp 2, the next allowed timestamp is 12\nlogger.shouldPrintMessage(10, \"foo\"); // return false, message \"foo\" was printed at timestamp 1, the next allowed timestamp is 11\nlogger.shouldPrintMessage(11, \"foo\"); // return true, message \"foo\" was not printed in the last 10 seconds, timestamp 11 is allowed\n\nConstraints:\n0 <= timestamp <= 10^9\nEvery timestamp will be passed in non-decreasing order (chronological order).\n1 <= message.length <= 30\nAt most 10^4 calls will be made to shouldPrintMessage.",
    "tags": [
      "\ud83d\udd27 Design",
      "\ud83d\udcca Hash Map"
    ]
  },
  "0380": {
    "shortDescription": "Design a data structure that supports insert, remove, and getRandom in average O(1) time.",
    "timeComplexity": "O(1) average",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>Combine <strong>Array + HashMap</strong> for O(1) operations:</p>\n            <ul>\n                <li><strong>Array:</strong> Store values for O(1) random access</li>\n                <li><strong>HashMap:</strong> Map value \u2192 index for O(1) lookup</li>\n                <li><strong>Insert:</strong> Append to array, update map</li>\n                <li><strong>Remove:</strong> Swap with last element, pop, update map</li>\n                <li><strong>Random:</strong> Pick random index from array</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Insert Delete GetRandom O(1)\n\nProblem from LeetCode: https://leetcode.com/problems/insert-delete-getrandom-o1/\n\nDescription:\nImplement the RandomizedSet class:\n- RandomizedSet() Initializes the RandomizedSet object.\n- bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.\n- bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.\n- int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.\n\nYou must implement the functions of the class such that each function works in average O(1) time complexity.\n\nExample 1:\nInput\n[\"RandomizedSet\", \"insert\", \"remove\", \"insert\", \"getRandom\", \"remove\", \"insert\", \"getRandom\"]\n[[], [1], [2], [2], [], [1], [2], []]\nOutput\n[null, true, false, true, 2, true, false, 2]\n\nExplanation\nRandomizedSet randomizedSet = new RandomizedSet();\nrandomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.\nrandomizedSet.remove(2); // Returns false as 2 does not exist in the set.\nrandomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].\nrandomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.\nrandomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].\nrandomizedSet.insert(2); // 2 was already in the set, so return false.\nrandomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.\n\nConstraints:\n-2^31 <= val <= 2^31 - 1\nAt most 2 * 10^5 calls will be made to insert, remove, and getRandom.\nThere will be at least one element in the data structure when getRandom is called.",
    "tags": [
      "\ud83d\udd27 Design",
      "\ud83d\udcca Hash Map"
    ]
  },
  "0412": {
    "shortDescription": "Given an integer n, return a string array where: \"FizzBuzz\" if i divisible by 3 and 5, \"Fizz\" if divisible by 3, \"Buzz\" if divisible by 5, else the number.",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<ul>\n                <li><strong>Divisibility:</strong> Check if number is divisible by 3, 5, or both</li>\n                <li><strong>Priority:</strong> Check 15 (FizzBuzz) first, then 3 (Fizz), then 5 (Buzz)</li>\n                <li><strong>Default:</strong> If not divisible by 3 or 5, use the number itself</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Fizz Buzz\n\nProblem from LeetCode: https://leetcode.com/problems/fizz-buzz/\n\nGiven an integer n, return a string array answer (1-indexed) where:\n\n- answer[i] == \"FizzBuzz\" if i is divisible by 3 and 5.\n- answer[i] == \"Fizz\" if i is divisible by 3.\n- answer[i] == \"Buzz\" if i is divisible by 5.\n- answer[i] == i (as a string) if none of the above conditions are true.\n\nExample 1:\n    Input: n = 3\n    Output: [\"1\",\"2\",\"Fizz\"]\n\nExample 2:\n    Input: n = 5\n    Output: [\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]\n\nExample 3:\n    Input: n = 15\n    Output: [\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]\n\nConstraints:\n    1 <= n <= 10^4",
    "tags": [
      "\ud83d\udd22 Math",
      "\ud83d\udcdd String"
    ]
  },
  "2013": {
    "shortDescription": "Design a data structure to add points and count axis-aligned squares that can be formed with a query point.",
    "timeComplexity": "O(n) count",
    "spaceComplexity": "O(n)",
    "laymanHtml": "<p>For counting squares with a query point:</p>\n            <ul>\n                <li><strong>Fix diagonal:</strong> Query point is one corner</li>\n                <li><strong>Find opposite:</strong> Look for points that could be diagonal opposite</li>\n                <li><strong>Check others:</strong> Need 2 more corners to complete square</li>\n                <li><strong>Count:</strong> Multiply counts of matching corners</li>\n            </ul>",
    "fullProblemStatement": "LeetCode Detect Squares\n\nProblem from LeetCode: https://leetcode.com/problems/detect-squares/\n\nYou are given a stream of points on the X-Y plane. Design an algorithm that:\n\n- Adds new points from the stream into a data structure. Duplicate points are allowed \n  and should be treated as different points.\n- Given a query point, counts the number of ways to choose three points from the data \n  structure such that the three points and the query point form an axis-aligned square \n  with positive area.\n\nAn axis-aligned square is a square whose edges are all the same length and are either \nparallel or perpendicular to the x-axis and y-axis.\n\nImplement the DetectSquares class:\n\n- DetectSquares() Initializes the object with an empty data structure.\n- void add(int[] point) Adds a new point point = [x, y] to the data structure.\n- int count(int[] point) Counts the number of ways to form axis-aligned squares with \n  point point = [x, y] as described above.\n\nExample:\n    Input:\n    [\"DetectSquares\", \"add\", \"add\", \"add\", \"count\", \"count\", \"add\", \"count\"]\n    [[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]\n    Output:\n    [null, null, null, null, 1, 0, null, 2]\n\n    Explanation:\n    DetectSquares detectSquares = new DetectSquares();\n    detectSquares.add([3, 10]);\n    detectSquares.add([11, 2]);\n    detectSquares.add([3, 2]);\n    detectSquares.count([11, 10]); // return 1. You can choose:\n                                   //   - The first, second, and third points\n    detectSquares.count([14, 8]);  // return 0. The query point cannot form a square with any points in the data structure.\n    detectSquares.add([11, 2]);    // Adding duplicate points is allowed.\n    detectSquares.count([11, 10]); // return 2. You can choose:\n                                   //   - The first, second, and third points\n                                   //   - The first, third, and fourth points\n\nConstraints:\n    point.length == 2\n    0 <= x, y <= 1000\n    At most 3000 calls in total will be made to add and count.",
    "tags": [
      "\ud83d\udd27 Design",
      "\ud83d\udcca Hash Map"
    ]
  }
};
