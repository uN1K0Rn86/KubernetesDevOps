const randomString = Math.random().toString(36).substring(2, 18);

setInterval(() => {
  console.log(`${new Date().toISOString()}:`, randomString);
}, 5000);
