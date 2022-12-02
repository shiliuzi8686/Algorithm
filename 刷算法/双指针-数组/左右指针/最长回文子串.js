const {log} = console

function palindrome(s,l,r) {
    //防止索引越界
    while(l >= 0 && r < s.length && s[l] === s[r]){
        //双指针向两边展开
        l--
        r++
    }
    //返回以s[l]和s[r]为中心的最长回文串
    return s.substring(l + 1, r)
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = ''
    for(let i = 0;i < s.length;i++){
        //以s[i]为中心的最长回文子串
        let str1 = palindrome(s,i,i)
        log('str1',str1)
        //以s[i]和s[i+1]为中心的最长回文子串
        let str2 = palindrome(s,i,i+1)
        log('str2',str2)
        //更新res
        res = res.length > str1.length ? res : str1
        res = res.length > str2.length ? res : str2
        log('res', res)
    }
    return res
};
log(longestPalindrome("babad"))