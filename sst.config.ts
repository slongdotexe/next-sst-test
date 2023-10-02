import { IAM } from "@app/stacks/IAM";
import { Nextjs } from "@app/stacks/Nextjs";
import { SSTConfig } from "sst";


export default {
  config(_input) {
    return {
      name: "next-sst-test",
      region: "ap-southeast-2", 
      profile: process.env.CI === "ci" ? "default" : "next-sst-deploy",
    };
  },
  stacks(app) {
    app.stack(Nextjs);
    app.stack(IAM)
  },

} satisfies SSTConfig;
