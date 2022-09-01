import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../apollo/schema";
import { PageConfig } from "next";
import Cors from "micro-cors";
import { dbConnection } from "../../helper/dbConnection";

dbConnection();
const cors = Cors();
const apolloServer = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};
const startServer = apolloServer.start();
export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});