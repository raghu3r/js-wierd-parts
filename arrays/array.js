var arr = [
  1,
  false,
  {
    name: 'Raghu',
    address: '32 Milner Road',
  },
  function (name) {
    var greeting = 'Hellooo ';
    console.log(greeting + name);
  },
  'Hello',
];

console.log('arr', arr);
arr[3](arr[2].name);
