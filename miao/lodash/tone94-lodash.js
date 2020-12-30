var tone94 = function () {

  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    domExcTag = '[object DOMException]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]',
    weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

  const MAX_SAFE_INTEGER = 9007199254740991;

  function identity(value) {
    return value;
  }

  /** math  */
  function max(ary) {
    if (!ary.length) return undefined
    var max = ary[0]
    for (var i = 1; i < ary.length; i++) {
      if (ary[i] > max) max = ary[i]
    }
    return max
  }

  // iteratee invoke for each element in ary to 
  function maxBy(ary, iteratee) {
    if (!ary || !ary.length) return undefined
    if (typeof iteratee != "function") {
      var name = iteratee
      iteratee = o => o[name]
    }
    var max = ary[0]
    for (var i = 1; i < ary.length; i++) {
      if ((iteratee(ary[i]) || -Infinity) > (iteratee(max) || -Infinity)) {
        max = ary[i]
      }
    }
    return iteratee(max) ? max : undefined
  }

  function min(ary) {
    if (!ary.length) return undefined
    var min = ary[0]
    for (var i = 1; i < ary.length; i++) {
      if (ary[i] < min) min = ary[i]
    }
    return min
  }

  function minBy(ary, iteratee) {
    if (!ary || !ary.length) return undefined
    if (typeof iteratee != "function") {
      var name = iteratee
      iteratee = o => o[name]
    }
    var min = ary[0]
    for (var i = 1; i < ary.length; i++) {
      if ((iteratee(ary[i]) || Infinity) < (iteratee(min) || Infinity)) {
        min = ary[i]
      }
    }
    return iteratee(min) ? min : undefined
  }

  function sum(ary) {
    var result = 0
    for (var i = 0; i < ary.length; i++) {
      result += ary[i]
    }
    return result
  }

  function sumBy(ary, iteratee) {
    if (!ary || !ary.length) return undefined
    if (!iteratee) return ary.toString()
    if (typeof iteratee != "function") {
      var name = iteratee
      iteratee = o => o[name]
    }
    var result
    for (var i = 0; i < ary.length; i++) {
      if (iteratee(ary[i]) != undefined) {
        if (result == undefined) result = 0
        result += iteratee(ary[i])
      }
    }
    return result
  }

  /** array  */

  function compact(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }

  function join(ary, sep) {
    var result = ""
    if (sep == null) sep = ","
    for (var i = 0; i < ary.length - 1; i++) {
      result += ary[i] + "" + sep
    }
    result += ary[ary.length - 1]
    return result
  }

  function last(ary) {
    if (!ary) return undefined
    return ary[ary.length - 1]
  }

  function lastIndexOf(ary, val, fromIndex = ary.length - 1) {
    if (val == null) return ary.length
    var idx = -1
    // todo 需要处理fromIndex
    for (var i = fromIndex; i >= 0; i--) {
      if (ary[i] == val) {
        idx = i
        break
      }
    }
    return idx
  }

  function chunk(ary, size = 1) {
    var result = []
    var tail = ary.length - (ary.length % size)
    for (var i = 0; i < tail;) {
      var p = []
      for (var j = 0; j < size; j++) {
        p.push(ary[i++])
      }
      result.push(p)
    }
    var p = []
    while (tail < ary.length) {
      p.push(ary[tail])
      tail++
    }
    if (p.length) result.push(p)
    return result
  }

  function concat(ary) {
    var result = ary == undefined ? [] : ary
    if (arguments.length < 2) return result
    for (var i = 1; i < arguments.length; i++) {
      if (typeof arguments[i] == "object" && arguments[i] instanceof Array) {
        for (var j in arguments[i]) {
          result.push(arguments[i][j])
        }
      } else {
        result.push(arguments[i])
      }
    }
    return result
  }

  function drop(ary, n = 1) {
    var result = []
    for (var i = n; i < ary.length; i++) {
      result.push(ary[i])
    }
    return result
  }

  function dropRight(ary, n = 1) {
    var result = []
    for (var i = 0; i < ary.length - n; i++) {
      result.push(ary[i])
    }
    return result
  }

  function fill(ary, val, start = 0, end = ary.length) {
    var result = ary
    for (var i = start; i < end && i < ary.length; i++) {
      result[i] = val
    }
    return result
  }

  function pull(ary, ...values) {
    return ary.filter((it) => {
      for (var e of values) {
        if (it === e) return false
      }
      return true
    })
  }

  function pullAll(ary, values) {
    return ary.filter((it) => {
      for (var e of values) {
        if (it === e) return false
      }
      return true
    })
  }

  function indexOf(ary, val, fromIndex = 0) {
    for (var i = fromIndex; i < ary.length; i++) {
      if (ary[i] === val) {
        return i
      }
    }
    return -1
  }

  function initial(ary) {
    // pop()
    var result = []
    for (var i = 0; i < ary.length - 1; i++) {
      result.push(ary[i])
    }
    return result
  }

  function head(ary) {
    if (!ary.length) return undefined
    return ary[0]
  }

  // input ary return obj
  function fromPairs(pairs) {
    var result = {}
    for (var i = 0; i < pairs.length; i++) {
      result[pairs[i][0]] = pairs[i][1]
    }
    return result
  }

  // input obj return ary 只返回本身的属性
  function toPairs(obj) {
    var result = []
    Object.keys(obj).forEach(function (name) {
      var item = []
      item.push(name)
      item.push(obj[name])
      result.push(item)
    })
    return result
  }

  function reverse(ary) {
    var result = ary
    var tmp, mid = (result.length - (result.length % 2)) / 2
    for (var i = 0; i < mid; i++) {
      tmp = result[i]
      result[i] = result[result.length - 1 - i]
      result[result.length - 1 - i] = tmp
    }
    return result
  }

  function toArray(val) {
    var result = []
    for (var item in val) {
      result.push(val[item])
    }
    return result
  }

  function difference(array, ...values) {
    var collection = concat(...values)
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (collection.indexOf(array[i]) == -1) {
        res.push(array[i])
      }
    }
    return res
  }

  // 数组的交集
  function intersection(ary, ...arrays) {
    if (!ary || !ary.length) return []
    var res = [...ary]
    for (var ary of arrays) {
      var t = []
      for (var i = 0; i < res.length; i++) {
        if (ary.indexOf(res[i]) != -1) {
          t.push(res[i])
        }
      }
      if (!t.length) return []
      res = [...t]
    }
    return res
  }

  // todo
  function intersectionBy(ary, arrays, iteratee) {
  }

  function differenceBy(array, values, iteratee) {

  }

  function unionBy(ary, arrays, iteratee) {

  }

  function uniqBy(array, iteratee) {

  }

  function includes(collection, value, fromIndex = 0) {

  }

  function countBy(collection, iteratee) {

  }

  function defer(func, ...args) {
    return delay(func, 0, ...args)
  }

  function delay(func, wait, ...args) {
    return setTimeout(func, wait, ...args) - 1
  }

  function isArguments(value) {
    return Object.prototype.toString.call(value) === argsTag
  }

  // 数组的并集
  function union(ary, ...arrays) {
    var res = [...ary]
    for (var ary of arrays) {
      for (var i = 0; i < ary.length; i++) {
        if (res.indexOf(ary[i]) == -1) {
          res.push(ary[i])
        }
      }
    }
    return res
  }

  // 去重
  function uniq(array) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (!res.includes(array[i])) {
        res.push(array[i])
      }
    }
    return res
  }

  function zip(...arrays) {
    var res = []
    if (!arrays.length) return res
    var maxLen = Math.max(...arrays.map(a => a.length))
    // 为什么直接 fill([]) 不行? 直接fill([]), 传进去的所有[]都指向同一个引用
    var res = new Array(maxLen).fill(0).map(() => [])
    for (var i = 0; i < maxLen; i++) {
      for (var j = 0; j < arrays.length; j++) {
        res[i][j] = arrays[j][i]
      }
    }
    return res
  }

  function unzip(array) {
    var res = []
    if (!array || !array.length) return res
    var arrays = [...array]
    var maxLen = Math.max(...arrays.map(a => a.length))
    var res = new Array(maxLen).fill(0).map(() => [])
    for (var i = 0; i < maxLen; i++) {
      for (var j = 0; j < arrays.length; j++) {
        res[i][j] = arrays[j][i]
      }
    }
    return res
  }

  // 和pull的区别是without返回新数组
  function without(array, ...values) {
    var res = [...array]
    return pull(res, ...values)
  }

  // 数组的对称差集
  function xor(...arys) {
    var res = flatten(arys)
    for (var i = 0; i < res.length; i++) {
      if (res.lastIndexOf(res[i]) != i) {
        res = pull(res, res[i])
        i--
      }
    }
    return res
  }

  function nth(array, n = 0) {
    if (n < 0) {
      n = array.length + n
    }
    return array[n]
  }

  function tail(array) {
    var res = []
    for (var i = 1; i < array.length; i++) {
      res.push(array[i])
    }
    return res
  }

  function take(array, n = 1) {
    var res = []
    for (var i = 0; i < n && i < array.length; i++) {
      res.push(array[i])
    }
    return res
  }

  function takeRight(array, n = 1) {
    var res = []
    for (var i = -n; i < 0; i++) {
      var it = nth(array, i)
      if (it !== undefined) res.push(it)
    }
    return res
  }

  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  function isNumber(value) {
    return typeof value == 'number' ||
      (isObjectLike(value) && _getTag(value) == numberTag);
  }

  // 判断是否不是数值
  function isNaN(value) {
    // isNumber 判断是否是数值, 不是直接返回false
    // value != value 用于判断NaN的情况
    // 因为 typeof NaN 返回 'number', 但是 NaN != NaN , +号用于隐式类型转换,不知道是不是没必要用+
    // new Number('f') 为 NaN
    return isNumber(value) && value != +value;
  }

  function sample(collection) {
    if (!collection || !collection.length) return undefined
    const j = Math.floor(Math.random() * (collection.length));
    return collection[j]
  }

  function sampleSize(collection, n = 1) {
    if (!collection || !collection.length) return res
    // 不改变原数组
    let ary = [...collection]
    let len = ary.length
    for (let i = 0; i < ary.length && i < n; i++) {
      const j = Math.floor(Math.random() * (len));
      // 解构赋值语法
      [ary[len - 1], ary[j]] = [ary[j], ary[len - 1]];
      --len
    }
    return ary.slice(len)
  }

  // Fisher–Yates shuffle 洗牌算法
  // 抽牌----不停的从剩下的扑克当中抽取一个，直到抽取的牌组成一副新的扑克为止
  function shuffle(collection) {
    return sampleSize(collection, collection.length)
    // for (let i = collection.length - 1; i > 0; i--) {
    //   // 从剩下的项中抽取一个
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [collection[i], collection[j]] = [collection[j], collection[i]];
    // }
    // return collection
  }

  function lt(value, other) {
    return value < other
  }

  function lte(value, other) {
    return value <= other
  }

  function gt(value, other) {
    return value > other
  }

  function gte(value, other) {
    return value >= other
  }

  function eq(value, other) {
    // 等价于 Number.isNaN() 这个函数会判断是不是数字类型, 再判断是不是NaN
    if (isNumber(value) && isNumber(other) && isNaN(value) && isNaN(other)) {
      return true
    }
    return value === other
  }

  function isArray(value) {
    return isObjectLike(value) && _getTag(value) === arrayTag
  }

  // Checks if value is array-like. 
  // A value is considered array-like if it's not a function and 
  // has a value.length that's an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.
  function isArrayLike(value) {
    return value != null && typeof value != 'function' && isLength(value.length)
  }

  function isArrayLikeObject(value) {
    return isArrayLike(value) && typeof value === 'object'
  }

  function isFunction(value) {
    return _getTag(value) === funcTag
  }

  function isBoolean(value) {
    return _getTag(value) === boolTag
  }

  function isDate(value) {
    return _getTag(value) === dateTag
  }

  function isNull(value) {
    return _getTag(value) === nullTag
  }

  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
  }

  function isFinite(value) {
    return isNumber(value) && value !== Infinity && value !== -Infinity
  }

  function isInteger(value) {
    return typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value;
  }

  // 安全整数
  // 1. 可以准确地表示为一个IEEE-754双精度数字
  // 2. 其IEEE-754表示不能是舍入任何其他整数以适应IEEE-754表示的结果
  function isSafeInteger(value) {
    return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
  }

  function isUndefined(value) {
    return value === undefined
  }

  function isNil(value) {
    return (isNull(value) || isUndefined(value)) ? true : false
  }

  // Checks if value is the language type of Object. 
  // (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))
  function isObject(value) {
    return value != null && typeof value === 'object' || typeof value === "function"
  }

  function isString(value) {
    return _getTag(value) === stringTag
  }

  function isRegExp(value) {
    return _getTag(value) === regexpTag
  }

  function isSet(value) {
    return _getTag(value) === setTag
  }

  function isWeakSet(value) {
    return _getTag(value) === weakSetTag
  }

  function isMap(value) {
    return _getTag(value) === mapTag
  }

  function isWeakMap(value) {
    return _getTag(value) === weakMapTag
  }

  function isArrayBuffer(value) {
    return _getTag(value) === arrayBufferTag
  }

  function isError(value) {
    return _getTag(value) === errorTag
  }

  function isSymbol(value) {
    return _getTag(value) == symbolTag
  }
  // Checks if value is likely a DOM element.
  // Node.ELEMENT_NODE（1）
  function isElement(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value)
  }

  // 判断一个值是否是一个js原生对象
  // 即使用Object构造函数创建的对象, 或[[Prototype]]属性为null的对象
  function isPlainObject(value) {
    if (!isObjectLike(value) || _getTag(value) != objectTag) {
      return false
    }
    if (Object.getPrototypeOf(value) === null) {// 如果原型为null返回true
      return true
    }
    let proto = value
    while (Object.getPrototypeOf(proto) !== null) {// 获取原型是null的那个对象
      proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(value) === proto
  }

  // Checks if value is an empty object, collection, map, or set.
  // Objects are considered empty if they have no own enumerable string keyed properties.
  // have a length of 0. have a size of 0.
  function isEmpty(value) {
    if (isArrayLike(value)) {
      return value.length <= 0
    }
    if (isMap(value) || isWeakMap(value) || isSet(value) || isWeakSet(value)) {
      return value.size() <= 0
    }
    if (isObject(value)) {
      return Object.entries(value).length <= 0
    }
    return true
  }

  // 类型化数组
  function isTypedArray(value) {
    var typeArray = [float32Tag,
      float64Tag,
      int8Tag,
      int16Tag,
      int32Tag,
      uint8Tag,
      uint8ClampedTag,
      uint16Tag,
      uint32Tag,]
    if (typeArray.indexOf(_getTag(value)) != -1) {
      return true
    }
    return false
  }

  function _getTag(value) {
    return Object.prototype.toString.call(value)
  }

  // converts value to a finite number
  function toFinite(value, func = it => it) {
    value = +value
    if (isNumber(value) && isFinite(value)) return func(value)
    if (!isFinite(value)) {
      if (value === Infinity) return func(Number.MAX_VALUE)
      if (value === -Infinity) return func(-Number.MAX_VALUE)
    }
    if (!isNaN(value)) return func(value)
    return 0
  }

  function toNumber(value) {
    return +value
  }

  function toInteger(value, func = Math.floor) {
    return toFinite(value, func)
  }

  function toLength(value) {
    value = toInteger(value)
    var max = 2 ** 32 - 1
    if (value < 0) return 0
    if (value > max) return max
    return value
  }

  function toSafeInteger(value) {
    value = toInteger(value)
    if (value > MAX_SAFE_INTEGER) return MAX_SAFE_INTEGER
    if (value < -MAX_SAFE_INTEGER) return -MAX_SAFE_INTEGER
    return value
  }

  function add(augend, addend) {
    return augend + addend
  }

  function divide(dividend, divisor) {
    return dividend / divisor
  }

  function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand
  }

  function subtract(minuend, subtrahend) {
    return minuend - subtrahend
  }

  function mean(array) {
    var res = 0
    for (var e of array) {
      if (!isNumber(e)) return NaN
      res += e
    }
    return res / array.length
  }

  function castArray(value) {
    if (!arguments.length) return []
    if (isArray(value)) return value
    var res = []
    res.push(value)
    return res
  }

  function conformsTo(object, source) {
    var keyArr = Object.keys(source)
    for (var key of keyArr) {
      if (!source[key].call(null, object[key])) return false
    }
    return true
  }

  // 二分查找
  // 返回给定val, 在数组ary中按顺序应该插入的位置, 相同靠左
  function sortedIndex(ary, val) {
    // 哨兵
    ary.unshift(-Infinity), ary.push(Infinity)
    var left = 0, right = ary.length - 1, mid
    while (right - left > 1) {
      mid = Math.ceil((right + left) / 2)
      if (val > ary[mid]) left = mid
      else if (val <= ary[mid]) right = mid
    }
    // 移除哨兵
    ary.shift(), ary.pop()
    return left
  }

  function sortedUniq(array) {
    if (!array || !array.length) return []
    var res = [array[0]]
    var j = 0, i = 1
    while (i < array.length) {
      if (res[j] != array[i]) {
        res.push(array[i])
        ++j
      }
      ++i
    }
    return res
  }

  function countBy(collection, iteratee = identity) {
    var res = new Map()
    iteratee = getIterator(iteratee)
    for (var item of collection) {
      var key = iteratee(item)
      if (res.has(key)) {
        res.set(key, res.get(key) + 1)
      } else {
        res.set(key, 1)
      }
    }
    return res
  }



  function flatten(ary) {
    var result = []
    var i = 0
    while (i < ary.length) {
      var flag = true
      for (var item in ary[i]) {
        result.push(ary[i][item])
        if (flag) flag = false
      }
      if (flag) result.push(ary[i])
      i++
    }
    return result
  }

  function flattenDeep(ary) {
    if (!ary || !ary.length) return []
    var result = []
    var func = it => {
      if (it instanceof Array) {
        for (var i = 0; i < it.length; i++) {
          func(it[i])
        }
      } else {
        result.push(it)
      }
    }
    func(ary)
    return result
  }

  // 代码优化
  function flattenDeep2(ary) {
    if (!ary || !ary.length) return []
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] instanceof Array) {
        result.push(...flattenDeep2(ary[i]))
      } else {
        result.push(ary[i])
      }
    }
    return result
  }

  // function flattenDepth(ary, depth = 1) {
  //   if (!ary || !ary.length) return []
  //   var result = []
  //   var func = (it, depth) => {
  //     if (depth >= 0 && (it instanceof Array)) {
  //       for (var i = 0; i < it.length; i++) {
  //         func(it[i], depth--)
  //       }
  //     } else {
  //       result.push(it)
  //     }
  //   }
  //   func(ary, depth)
  //   return result
  // }

  // 代码优化
  function flattenDepth(ary, depth = 1) {
    if (depth == 0) {
      return ary.slice()
    }
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] instanceof Array) {
        result.push(...flattenDepth(ary[i], depth - 1))
      } else {
        result.push(ary[i])
      }
    }
    return result
  }



  /** 以下 这几个函数有很多重复的参数校验代码 */

  // predicate 返回真假, 返回所有符合条件的对象
  // function object(全匹配) ary(只匹配前两项) string(有该属性且为真)
  function filter(collection, predicate) {
    if (!collection || !Object.keys(collection).length) return []
    if (predicate === undefined) return collection
    var result = []
    var test = getIterator(predicate)
    for (var item in collection) {
      if (test(collection[item])) {
        result.push(collection[item])
      }
    }
    return result
  }

  // predicate 返回真假, 返回第一个符合条件的对象
  // function object(全匹配) ary(只匹配前两项) string(有该属性且为真)
  function find(collection, predicate, fromIndex = 0) {
    if (!collection || !Object.keys(collection).length) return undefined
    if (predicate === undefined) predicate = {}
    var result
    var test = getIterator(predicate)
    for (var i = fromIndex; i < collection.length; i++) {
      if (test(collection[i])) {
        result = collection[i]
        break
      }
    }
    return result
  }

  function findLast(collection, predicate, fromIndex = collection.length - 1) {
    if (!collection || !Object.keys(collection).length) return undefined
    if (predicate === undefined) predicate = {}
    var result
    var test = getIterator(predicate)
    for (var i = fromIndex; i > 0; i--) {
      if (test(collection[i])) {
        result = collection[i]
        break
      }
    }
    return result
  }

  function flatMap(collection, iteratee = identity) {
    var ary = Object.values(collection)
    var res = []
    for (var e of ary) {
      res.push(iteratee(e))
    }
    return flatten(res)
  }

  function flatMapDeep(collection, iteratee = identity) {
    return flattenDeep(flatMap(collection, iteratee))
  }

  function flatMapDepth(collection, iteratee = identity, depth = 1) {
    return flattenDepth(flatMap(collection, iteratee), --depth)
  }

  // 返回符合条件的索引
  function findIndex(ary, predicate, fromIndex = 0) {
    if (!ary || !Object.keys(ary).length) return undefined
    if (predicate === undefined) predicate = {}
    var result = -1
    var test = getIterator(predicate)
    for (var i = fromIndex; i < ary.length; i++) {
      if (test(ary[i])) {
        result = i
        break
      }
    }
    return result
  }

  // 返回符合条件的索引
  function findLastIndex(ary, predicate, fromIndex = ary ? ary.length - 1 : 0) {
    if (!ary || !Object.keys(ary).length) return -1
    if (predicate === undefined) predicate = {}
    var result = -1
    var test = getIterator(predicate)
    for (var i = fromIndex; i >= 0; i--) {
      if (test(ary[i])) {
        result = i
        break
      }
    }
    return result
  }

  function every(collection, predicate) {
    if (!collection || !Object.keys(collection).length) return true
    if (predicate === undefined) predicate = {}
    var result = true
    var test = getIterator(predicate)
    for (var i = 0; i < collection.length; i++) {
      if (!test(collection[i])) {
        result = false
        break
      }
    }
    return result
  }

  // 从末尾遍历, pop 直到遇到false
  function dropRightWhile(ary, predicate) {
    if (predicate == undefined || !ary || !ary.length) return []
    var result = ary
    var test = getIterator(predicate)
    for (var i = result.length - 1; i >= 0; i--) {
      if (!test(result[i])) {
        break
      } else { result.pop(result[i]) }
    }
    return result
  }

  // 从头遍历, shift 直到遇到false
  function dropWhile(ary, predicate) {
    if (predicate == undefined || !ary || !ary.length) return []
    var result = ary
    var test = getIterator(predicate)
    for (var i = 0; i < result.length; i++) {
      if (!test(result[i])) {
        break
      } else {
        result.shift(result[i])
        i--
      }
    }
    return result
  }

  /** 以上 这几个函数有很多重复的参数校验代码 */

  // --private
  function getIterator(predicate) {
    if (typeof predicate == "function") return predicate
    if (predicate instanceof Array) {
      if (predicate.length < 2) return () => false
      return o => o[predicate[0]] === predicate[1]
    }
    if (typeof predicate == "string") {
      if (!predicate) return () => false
      return o => o[predicate]
    }
    if (typeof predicate == "object") {
      if (!Object.keys(predicate).length) return () => true
      return o => {
        for (var item in predicate) {
          if (o[item] == undefined || o[item] !== predicate[item]) return false
        }
        return true
      }
    }
  }


  // 返回一个对象
  return {
    compact,
    join,
    last,
    lastIndexOf,
    chunk,
    drop,
    dropRight,
    fill,
    indexOf,
    initial,
    head,
    fromPairs,
    toPairs,
    reverse,
    toArray,
    flatten,
    max,
    maxBy,
    min,
    minBy,
    sum,
    sumBy,
    concat,
    filter,
    find,
    findIndex,
    every,
    findLastIndex,
    sortedIndex,
    flattenDeep,
    flattenDepth,
    dropRightWhile,
    dropWhile,
    pull,
    pullAll,
    difference,
    intersection,
    union,
    uniq,
    zip,
    unzip,
    without,
    xor,
    nth,
    tail,
    take,
    takeRight,
    isNaN,
    isNumber,
    isObjectLike,
    shuffle,
    sample,
    sampleSize,
    defer,
    delay,
    isArguments,
    lt,
    lte,
    gt,
    gte,
    eq,
    isArray,
    isBoolean,
    isDate,
    isNull,
    isArrayLike,
    isFunction,
    isLength,
    isInteger,
    isFinite,
    isUndefined,
    isNil,
    isObject,
    isString,
    isRegExp,
    isSet,
    isWeakSet,
    isMap,
    isWeakMap,
    isArrayBuffer,
    isArrayLikeObject,
    isElement,
    isPlainObject,
    isEmpty,
    isError,
    isSafeInteger,
    isSymbol,
    isTypedArray,
    toFinite,
    toInteger,
    toLength,
    toNumber,
    toSafeInteger,
    add,
    divide,
    mean,
    multiply,
    subtract,
    castArray,
    conformsTo,
    sortedUniq,
    countBy,
    findLast,
    flatMap,
    flatMapDeep,
    flatMapDepth,
    // tst


    // differenceBy,
    // differenceWith,
    //intersectionBy,
    //unionBy,
    //uniqBy,
    //countBy,
    // --r
  }

}()