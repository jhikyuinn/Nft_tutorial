import { NFTStorage, File } from "nft.storage";
import fs from "fs";

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGM0M0QzNTFDODZEQUIzYkM5QjNhZWZkMjMzMGRkQjM3RUY3MzY1MjEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NDE0NTkwMTA2MCwibmFtZSI6ImZpcnN0In0.NrWmAvcBKVDwPdELBG9rTRC4jI8PY3CJyG-Nfoy4CkU";
const client = new NFTStorage({ token: apiKey});

const metadata = await client.store({
  description : "0xf93c88a46fA8b6E902D409eE496F54e2D4882010",
  name: "kyuinn123",
  image: new File([fs.readFileSync("./validation.png")], "validation.png", {
    type: "image/png ",
  }),
  Hash: "E0DB3B7125386CBCB03D6AC78EF5C146836B798258A8990637EC1E78BA30ABA1",
  attributes:[
    {
      trait_type:"Disability",
      value:"leg",
    },
    {
      trait_type:"Hair",
      value:"hairloss",
    },
  ]
});

console.log(metadata.url);
