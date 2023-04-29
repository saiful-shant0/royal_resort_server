require(dotenv).config();

const connectionString=process.env.MONGO_URL

const variables={connectionString};

module.exports=variables