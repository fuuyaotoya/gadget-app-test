import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://my-first-app02.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "5tht95EcUtpz",
  fields: {
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "Lw9JPYO1kZ2w",
    },
  },
  shopify: { fields: ["shop", "shopifySID"] },
};
