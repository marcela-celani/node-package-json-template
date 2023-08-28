
const iterate = (num) => {
    for(let i=0; i < num; i ++){
        console.log('console', i)
    }
}

iterate(process.argv[2])