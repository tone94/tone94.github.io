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

  // function flattenDeep(ary) {

  // }

  // function flattenDepth(ary, depth = 1) {

  // }

  // function sortedIndex(ary, val) {

  // }

  // function find(collection, predicate = 0, fromIndex = 0) {

  // }

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
    min,

  }

}()