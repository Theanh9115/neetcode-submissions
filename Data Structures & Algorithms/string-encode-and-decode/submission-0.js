class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.join("_");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // Empty string
        if (str == "") return [""];
        let decoded = [];
        let buildStr = "";
        for (let i = 0; i < str.length; i++){
            // At the end of the builded string push new str and reset for the next batch
            if (str[i] == "_" && buildStr.length > 0){
                decoded.push(buildStr);
                buildStr = "";
            }
            // Empty strings
            else if (str[i] == "_" && buildStr.length == 0) {
                // "_" is at the start
                if (i - 1 < 0) decoded.push("");

                // "_" is at the end
                if (i + 1 >= str.length) decoded.push("");
                // "_" is not at the end
                else {
                    // Two consecutive underscores
                    if (str[i + 1] == "_") decoded.push("");
                }
            }
            // Normal character -> build string
            else {
                buildStr = buildStr + str[i];
            }
        }
        if (buildStr.length > 0) decoded.push(buildStr);
        return decoded;
    }
}
