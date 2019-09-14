// Много If'ов))))))))))))))))
//Task 1
var $wrapper = document.getElementById("wrapper");
const COLS = ['A','B','C','D','E','F','G','H'];
const ROWS = 9;
for (let i = 0; i <= ROWS; i++){
    let $row = document.createElement('div');
    $row.className = "row";
    for (let j = 0; j <= COLS.length + 1; j++){
        let $col = document.createElement('div');
        $col.className = "cell";
        if ( i === 0 ){
            if ( j !== 0 ){
                $col.textContent = COLS[j-1];
                $col.style.transform = "rotate(180deg)";
            }
        } else if (i !== ROWS && j === COLS.length + 1){
            $col.textContent = i;
            $col.style.transform = "rotate(180deg)";
        }
        else {
            if ( j === 0 && i !== ROWS){
                $col.textContent = COLS.length + 1 - i;
            } else {
                if( i !== ROWS && j !== COLS.length + 1){
                    if ( i % 2 === 0 && j % 2 !== 0 ){
                        $col.style.backgroundColor = "black";
                    } else if( i % 2 !== 0 && j % 2 === 0 ){
                        $col.style.backgroundColor = "black";
                    }
                }
            }
            if( i === ROWS && j !== 0 && j !== COLS.length + 1 ){
                $col.textContent = COLS[j-1];
            }
        }
        $row.appendChild($col);
    }
    $wrapper.appendChild($row);
}
