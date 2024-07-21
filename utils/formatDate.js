export default function formatDate(dateString, incTime) {
  if(incTime){
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric',  hour: 'numeric',
    minute: 'numeric', };
    return date.toLocaleDateString(undefined, options);
  }else{
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString(undefined, options);
  }
   
  }