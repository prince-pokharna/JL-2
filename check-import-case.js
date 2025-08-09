// check-import-case.js
// Scans imports and checks if the file paths match the actual casing on disk

const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

function fileExistsCaseSensitive(filePath) {
  if (!fs.existsSync(filePath)) return false;

  const dir = path.dirname(filePath);
  const fileName = path.basename(filePath);
  const realNames = fs.readdirSync(dir);

  return realNames.includes(fileName);
}

function checkFile(file) {
  const content = fs.readFileSync(file, "utf8");
  const importRegex = /from\s+['"](.+)['"]|require\(['"](.+)['"]\)/g;
  let match;

  while ((match = importRegex.exec(content))) {
    const importPath = match[1] || match[2];
    if (!importPath.startsWith(".") && !importPath.startsWith("@/")) continue;

    let resolvedPath = importPath.startsWith("@/")
      ? path.resolve(projectRoot, importPath.replace(/^@\//, ""))
      : path.resolve(path.dirname(file), importPath);

    // Try adding extensions if missing
    if (!fs.existsSync(resolvedPath)) {
      const extensions = [".ts", ".tsx", ".js", ".jsx"];
      for (const ext of extensions) {
        if (fs.existsSync(resolvedPath + ext)) {
          resolvedPath += ext;
          break;
        }
      }
    }

    if (fs.existsSync(resolvedPath) && !fileExistsCaseSensitive(resolvedPath)) {
      console.warn(
        `⚠️ Case mismatch: ${importPath} in ${path.relative(projectRoot, file)}`
      );
    }
  }
}

console.log("🔍 Checking for case-sensitive import issues...");
walk(projectRoot)
  .filter((f) => f.endsWith(".ts") || f.endsWith(".tsx") || f.endsWith(".js") || f.endsWith(".jsx"))
  .forEach(checkFile);
console.log("✅ Done checking.");
