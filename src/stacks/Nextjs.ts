import { Config, NextjsSite, StackContext } from "sst/constructs";

export function Nextjs({ stack }: StackContext) {
  const STRIPE_SECRET_KEY = new Config.Secret(stack, "STRIPE_SECRET_KEY");
  const SOME_PARAM = new Config.Parameter(stack, "SOME_PARAM", {
    value: "some value",
  });

  const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = new Config.Parameter(
    stack,
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
    {
      value: "pk_test_51J2",
    }
  );

  const site = new NextjsSite(stack, "site", {
    bind: [STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, SOME_PARAM],
    environment: {
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.value,
    },
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}

// const getBindableConfig = (stack: StackContext["stack"]) => {
//   const STRIPE_SECRET_KEY = new Config.Secret(stack, "STRIPE_SECRET_KEY");
//   const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = new Config.Parameter(
//     stack,
//     "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
//     {
//       value: "pk_test_51J2",
//     },
//   );
//   return { STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY };
// };
