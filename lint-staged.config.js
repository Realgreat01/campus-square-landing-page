function quoteFilenames(filenames) {
  return filenames.map((filename) => JSON.stringify(filename)).join(" ");
}

module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "pnpm tsc --noEmit",

  // Lint + Format
  "**/*.(ts|tsx|js)": (filenames) => [
    `pnpm eslint --fix ${quoteFilenames(filenames)}`,
    `pnpm prettier --write ${quoteFilenames(filenames)}`,
  ],

  // Format other files
  "**/*.(md|json|css)": (filenames) =>
    `pnpm prettier --write ${quoteFilenames(filenames)}`,
};
