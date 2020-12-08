var tone94 = function () {

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

  // 返回一个对象
  return {
    compact,
    join,
    last,
    lastIndexOf,
    chunk,
  }

}()