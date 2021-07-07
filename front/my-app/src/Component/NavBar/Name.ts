export let a=4


interface Fn{
  ():string[]
}

let array =["Home","Browse","Radio",]

let func: Fn = () => {
  return array
}

export default func