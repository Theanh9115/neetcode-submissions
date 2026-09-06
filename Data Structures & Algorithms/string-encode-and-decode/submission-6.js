class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // code: length#actualcontent
        let lengths = [];
        for (let s of strs){
            lengths.push(s.length.toString());
        }
        let lengthsStr = lengths.join(",")
        let content = ["#", ...strs].join("")
        return lengthsStr + content;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let seperatorIndex = str.indexOf("#");
        console.log(seperatorIndex);
        let lengthsStr = str.slice(0, seperatorIndex);
        let content = str.slice(seperatorIndex);
        // no length -> orginal string is ""
        if (lengthsStr.length == 0) return [];
        // have length
        let lengthsArr = [];
        let buildStr = "";
        for (let char of lengthsStr) {
            if (char != ",") buildStr = buildStr + char;
            else {
            lengthsArr.push(Number(buildStr));
            buildStr = "";
            }
        }
        if (buildStr.length != 0) lengthsArr.push(Number(buildStr));
        let strs = [];
        let i = 1;
        for (let length of lengthsArr) {
            i += length;
            if (i > content.length) strs.push("");
            else {
            strs.push(content.slice(i - length, i));
            }
        }
        console.log(strs.length);
        return strs;
        }
}
