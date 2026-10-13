import React from "react";

interface JsonLdProps {
  schema: Record<string, any> | Array<Record<string, any>>;
}

/**
 * Server-rendered Schema.org JSON-LD Component
 * Safely serializes structured data into <script type="application/ld+json">
 */
export default function JsonLd({ schema }: JsonLdProps) {
  const content = Array.isArray(schema)
    ? {
        "@context": "https://schema.org",
        "@graph": schema,
      }
    : schema["@context"]
    ? schema
    : {
        "@context": "https://schema.org",
        ...schema,
      };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(content).replace(/</g, "\\u003c"),
      }}
    />
  );
}
