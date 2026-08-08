class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        dublicate_container = {}
        for val in nums:
            if val in dublicate_container:
                return True
            dublicate_container[val] = 1
        return False
            
            