const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

    const name = 'Wes Bos';

    // For
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
    }

    // For of

    // For in

    const basehumanStats = {
      feet: 2,
      arms: 2,
      eyes: 2,
      head: 1
    }

    function Human (name) {
      this.name = name;
    }

    Human.prototype = basehumanStats;

    const artemHuman = new Human('Artem');
    console.log(artemHuman);

    for (const key in artemHuman) {
      console.log(key);
    }

    console.log('---------');
    for (const key of artemHuman) {
      console.log(key);
    }
 
    // While Loop 