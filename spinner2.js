let arrSpin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];

arrSpin.map((x, i) => setTimeout(() => process.stdout.write(x), (i * 200) + 100));