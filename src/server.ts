import app from "./app";
import config from "./config";

app.listen(config.port, () => console.log(`server run on port ${config.port}`));
