/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const ans = {};
  const generalArr = [];
  domains.forEach((el) => {
    const supArr = el.split('.').reverse();
    supArr.reduce((acc, elem) => {
      let helper = acc;
      helper += `.${elem}`;
      generalArr.push(helper);
      return helper;
    }, '');
  });
  const setArr = new Set(generalArr);
  setArr.forEach((elem1) => {
    generalArr.forEach((elem2) => {
      if (elem1 === elem2) {
        if (!ans[elem1]) ans[elem1] = 1;
        else ans[elem1]++;
      }
    });
  });
  return ans;
}

module.exports = getDNSStats;
