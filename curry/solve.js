module.exports = function curry(cb) {
	var len = cb.length,
        args = [];
	return function interm(arg) {
        args.push(arg);
		return args.length === len ? cb.apply(this,args) : interm;
	};
};

var curried = curry(function(a,b,c) {
	return a+b+c;
});

console.log(curried(9)(4)(3));