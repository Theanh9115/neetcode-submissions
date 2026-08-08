class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        #Create a freq list to contain 26 chr of english
        freq = [0] *26

        #Update the freq
        for chr in s:
            chr = chr.lower()
            freq[ord(chr) - ord("a")] += 1
        for chr in t:
            chr = chr.lower()
            freq[ord(chr) - ord("a")] -= 1
        for count in freq:
            if count != 0:
                return False
        return True
