export default function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric',  hour: 'numeric',
    minute: 'numeric', };
    return date.toLocaleDateString(undefined, options);
  }