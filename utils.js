// remove points with equal latlngs
function contains(array,obj) {
    for(var i =0;i<array.length;i++) {
        if(isEqual(array[i],obj))return true;
    }
    return false;
}
//comparator
function isEqual(obj1,obj2) {
    if(obj1.latlng.equals(obj2.latlng)) {
        return true;
    }
    return false;
}
function removeDuplicates(ary) {
    var arr = [];
    return ary.filter(function(x) {
        return !contains(arr,x) && arr.push(x);
    });
}