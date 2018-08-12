
var fs = require('fs');
 command = process.argv[2];
 




if(command== 'list'){
    list();
}else if(command=='add'){
    
    add();
    console.log('item added');
}else if(command=='help' || command== undefined){
    help();
    
    
}else if(command=='reset'){
    reset();
    console.log('reset done');
    
}
/*else if(command=='remove' && val == 'val'){
   // var val='val'
    remove();
    console.log('item removed');
    
}*/
else{
    console.log("error");
}

function list(){
    fs.readFile('./data.txt', 'utf8', function (err, data){
        if(err){
           
            console.log("list is empty");
        }else{
            console.error(data);
        }
    })
}
function help(){
    fs.readFile('./help.txt', 'utf8', function (err, data){
        if(err){
           
            console.log("no help found");
        }else{
            console.error(data);
        }
    })
}


function add(){
    fs.appendFile('./data.txt', process.argv[3] + '\n', function(err){
        if(err){
            console.error(error);
        }
    });


}

function reset(){

fs.writeFile('./data.txt', '', function (err) {
  if (err) throw err;
  
});
}
/*
function remove(){
    
    fs.readFile('./data.txt', 'utf8', function(err, data) {
        if (err){
        console.log('error');
        }else{
        var toDos = data.toString().split('\n');
        
        console.log(toDos);
      }
      });
    };
}
*/
//var val="val"
/*
fs.readFile('./data.txt', 'utf8', function(err, data){
    if (err)
    {
        console.log("error");
    }else{
    
    var listAfterRemoval = data.split('\n').slice(val).join('\n');
    fs.writeFile('./data.txt', listAfterRemoval);
    
   console.log(data);}
});
};

}
*/
