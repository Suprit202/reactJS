export function useTitleCase(data) {
  var dataArray = data.split(" ");
  var newData = "";
  
  dataArray.map((data) => {
    newData += (data.charAt(0).toUpperCase( )+ data.slice(1)+" ");
  })

  return newData;
}