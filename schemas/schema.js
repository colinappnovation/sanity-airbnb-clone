// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import property from "./documents/property";
import galleryImage from "./objects/galleryImage";
import category from "./documents/category";
import feature from "./documents/feature";
import hero from "./documents/hero";
import navigationLink from "./documents/navigationLink";
import listingBlock from "./documents/listingBlock"
import casino from "./documents/casino";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    galleryImage,
    property,
    category,
    feature,
    hero,
    navigationLink,
    listingBlock,
    casino
  ]),
});
