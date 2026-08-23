class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagramMap = new Map();
        for (const s of strs){
            // Map to a freq string instead of sorted the string
            // Create key as freq string
            const charFreq = new Array(26).fill(0);
            for (const c of s){
                charFreq[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            const key = charFreq.join("");

            // Check if key in anagramMap
            if (!anagramMap.has(key)) anagramMap.set(key, [s]);
            else anagramMap.get(key).push(s);
        }
        return [...anagramMap.values()];
    }
}
