"use strict"

function fifthTask() {
    const arrayOfNumbers = [];  

    for (let i = 5; i < 11; i++) {  
        arrayOfNumbers[i - 5] = i;  
    }

    console.log(arrayOfNumbers); 
    return arrayOfNumbers; 
}

fifthTask();  // 6


// arrayOfNumbers[i - 5] = i;
// В кожній ітерації циклу ми записуємо значення i в масив за індексом i - 5. Це дозволяє нам почати з індексу 0 і зберегти значення чисел у масиві:

// Коли i = 5, в масив записується значення 5 за індексом 5 - 5 = 0.
// Коли i = 6, в масив записується значення 6 за індексом 6 - 5 = 1.
// І так далі, до i = 10, де значення 10 записується за індексом 10 - 5 = 5.
// Таким чином, у масиві з'являться числа: [5, 6, 7, 8, 9, 10].
// Повернення масиву:
// return arrayOfNumbers;
// Функція повертає масив arrayOfNumbers, щоб його можна було використовувати поза функцією, якщо потрібно.