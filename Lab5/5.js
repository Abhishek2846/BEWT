const baseURL = new URL("https://github.com/");
baseURL.pathname = "https://github.com/";

baseURL.searchParams.append("name", "abhishek");
baseURL.searchParams.append("age", "19");
baseURL.searchParams.append("city", "rajkot");

console.log("Final URL:", baseURL.href);
