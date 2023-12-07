// EXERCISE #1

function xDownBy3(x) {
    for(i=x; i>=0; i=i-3){console.log(i);
    }
}
xDownBy3(10);

х 0-с их байвал x-с 3-г хас. хасаад гарсан утга болгоноо хэвлэ.
хасаад гарсан утгаа хадгалж аваад үнээсээ дахиад 3-г хас. хасаад гарсан утга болгоноо хэвлэ.
хэрвээ 0-тэй тэнцүү буюу 0-с бага болчихвол давталтыг зогсоо. 

// EXERCISE #2

function minByMax(a,b) { 
    if (a>b) {
        for (let i=b; i<=a; i++)
            {console.log(i);
            }
        
            } else for (let i=a; i<=b; i++)
            {console.log(i);
            
        }
                        }
minByMax(15,9);
minByMax(9,15);

    if (15>9) {console.log(9);
        {for (let i=9; i<=15; i++){console.log(i);}}
}

// EXERCISE #3

function aToBByC(a,b,c) {
    let outArray = [];
    let outArrayCount = -1;
    for (let i=a; i<=b; i=i+c) {
        // console.log("i : ",i);
        outArrayCount = outArrayCount + 1;
        // console.log("outArrayCount : ",outArrayCount);
        // console.log("outArray : ",outArray);
        outArray[outArrayCount] = i;
    }
    console.log("Last : ",outArray);
}
aToBByC(10,30,3);