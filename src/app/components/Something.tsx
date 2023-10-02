"use client";

import { useEffect } from "react";

export const Something = () => {
    console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    return null
};
