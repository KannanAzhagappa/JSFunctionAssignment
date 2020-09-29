function sumArray(a, b) {
    var sum = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      sum.push((a[i] || 0) + (b[i] || 0));
    }
    alert('Sum of the two arrays is ['+sum+']');
}