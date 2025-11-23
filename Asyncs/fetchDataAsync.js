function fetchData() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) resolve("Data fetched successfully");
      else reject("Failed to fetch data");
    }, 1000);
  });
}




async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();

console.log("Fetching data asynchronously...");
