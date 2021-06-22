import path from "path";
import fs from "fs";
import { registRoute } from "./register";

import * as Home from "../../client/pages/Home.svelte";
import * as Fruits from "../../client/pages/Fruits.svelte";
import * as Puzzle from "../../client/pages/Puzzle.svelte";
import * as PuzzleN from "../../client/pages/PuzzleN.svelte";
import * as PuzzleH from "../../client/pages/PuzzleH.svelte";
import * as Demo from "../../client/pages/Demo.svelte";
import * as UI from "../../client/pages/UI.svelte";

const pathStaticDir = path.resolve(__dirname, "./static");
const files = fs.readdirSync(pathStaticDir);

// 파일 이름 가져오기
export const getFileName = (fileNames, fileName) =>
  fileNames.filter((_filename) => _filename.includes(fileName));

export const init = (instance) => {
  // Home
  registRoute(instance, "/", Home, getFileName(files, Puzzle.fileName));
  // Fruits
  registRoute(instance, "/fruits", Fruits, getFileName(files, Fruits.fileName));
  //Puzzle
  registRoute(instance, "/puzzle", Puzzle, getFileName(files, Puzzle.fileName));
  registRoute(
    instance,
    "/puzzleN",
    PuzzleN,
    getFileName(files, PuzzleN.fileName)
  );
  registRoute(
    instance,
    "/puzzleH",
    PuzzleH,
    getFileName(files, PuzzleH.fileName)
  );
  // Demo
  registRoute(instance, "/demo", Demo, getFileName(files, Demo.fileName));
  // UI Demo
  registRoute(instance, "/ui", UI, getFileName(files, UI.fileName));

  return instance;
};
