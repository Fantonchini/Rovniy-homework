/*https://www.codewars.com/kata/57680d0128ed87c94f000bfd/train/javascript
На входе двумерный массив букв (неограниченных размеров) и строка (неограниченных размеров, верхний регистр). Строка должна быть разбита на буквы и проверяться, может ли она быть написана в массиве (по правилам боггл).

1. Разбить строку на массив букв
2. найти элемент, соответствующий первой букве.
3. выполнить поиск соседей (до 8 соседей), содержащих следующую букву строки
4. если сосед не найден, найти следующий элемент в массиве.
5. если элемента нет, вернуть false
6. если элемент найден, выполнить пункт 3.
7. если сосед найден, выполнить пункт 3.
8. если сосед не найден, выполнить пункт 4
9. если строка закончилась, вернуть true.
  
[
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

checkWord([
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
], 'n')
BAILER


[
  ["E(0,0)","A(0,1)","R(0,2)","A(0,3)"],
  ["N(1,0","L(1,1)","E(1,2)","C(1,3)"],
  ["I(2,0)","_(2,1)","I(2,2)","S(2,3)"],
  ["_(3,0)","Y(3,1)","O(3,2)","R(3,3)"]
];

B+ A+ I L E R

если мы нашли элемент в n,m то мы должны найти следующий элемент в n-1,m-1; n-1,m; n-1,m+1; n,m-1; n,m+1; n+1,m-1; n+1,m; n+1,m+1;

i = 3; -1 <= k <= 1;
*/
function checkWord( board, word ) {
	let check = word.toUpperCase().split('');
  	let array = [...board];
  	for (let i = 0; i < array.length; i++) {
  		let letterIndex = array[i].indexOf(check[0]);
  		if (~letterIndex) {
  			let row = i;
  			let column;
  			for (let j = 1; j < check.length; j++) {
  				array[row][letterIndex] = '';
  				console.log(array[row-1]);
  				console.log(array[row]);
  				console.log(array[row+1])
  				column = letterIndex - 1;
  				let checkExit = 0;
  				while (column <= letterIndex + 1) {
  					if (array[row-1] != undefined && check[j] == array[row-1][column]) {
  						 row = row - 1;
  						 letterIndex = column;
  						 checkExit++;
  						 break;
  					} else if (check[j] == array[row][column]) {
  						 letterIndex = column;
  						 checkExit++;
  						 break;
  					} else if (array[row+1] != undefined && check[j] == array[row+1][column]) {
  						 row = row + 1;
  						 letterIndex = column;
  						 checkExit++;
  						 break;
  					}
  					column++;
  				}
  				if (!checkExit) return false;
  			}
  			return true; 
  		}
  	}
  	return false;
};
