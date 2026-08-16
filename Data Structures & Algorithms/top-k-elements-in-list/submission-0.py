class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Answer container
        ans = []

        # Build counter
        counter = {};
        for num in nums:
            if num in counter:
                counter[num] += 1            
            else:
                counter[num] = 0
        
        # Loop k times each time taking a max freq element
        for _ in range(k):
            max_freq = max(counter.values())
            # loop through the counter to find first num that is the most freq
            for num in counter:
                if counter[num] == max_freq:
                    ans.append(num)
                    # remove num
                    del counter[num]
                    break
        
        return ans
