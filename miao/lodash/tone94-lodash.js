var tone94 = function () {

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

  // 按顺序插入的位置,相同靠左
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

  function flattenDepth(ary, depth = 1) {
    if (!ary || !ary.length) return []
    var result = []
    var func = (it, depth) => {
      if (depth >= 0 && (it instanceof Array)) {
        for (var i = 0; i < it.length; i++) {
          func(it[i], depth--)
        }
      } else {
        result.push(it)
      }
    }
    func(ary, depth)
    return result
  }

  // 代码优化
  function flattenDepth2(ary, depth = 1) {
    if (depth == 0) {
      return ary.slice()
    }
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] instanceof Array) {
        result.push(...flattenDepth2(ary[i], depth - 1))
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

    // --r
  }

}()