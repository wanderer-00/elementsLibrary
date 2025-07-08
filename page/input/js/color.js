// 1
var cluster = document.body.getElementsByClassName('cluster')[0];

// предпроссмотр
var color_preview = document.body.getElementsByClassName('color_preview')[0];

// выборка
var clear = document.body.getElementsByClassName('clear')[0];
console.log(clear);


for( i=0; i<ORACAL641.length; i++ ){
    cluster.innerHTML += `
    <div numberColor="44" title="${ORACAL641[i].RUS}" onclick="color_preview_f(${i})" style="background-color: rgba(${ORACAL641[i].RGBA})">${ORACAL641[i].CODE}</div>
`
}

function color_preview_f(i){
    if(clear.checked){
        color_preview.style.backgroundColor = 'transparent';
        color_preview.style.color = `rgba(${ORACAL641[i].RGBA})`;
    } else {
        color_preview.style.backgroundColor = `rgba(${ORACAL641[i].RGBA})`;
        color_preview.style.color = `rgba(${ORACAL641[i].RGBA})`;
    }
    

}

function clearF(i){
    if(clear.checked)
    {color_preview.style.backgroundColor = 'transparent'}
    else
    {
        
        color_preview.style.backgroundColor = `rgba(${ORACAL641[4].RGBA})`}

}