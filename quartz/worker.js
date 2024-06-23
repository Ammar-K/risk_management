import sourceMapSupport from "source-map-support";
sourceMapSupport.install(options);
import cfg from "../quartz.config";
import { createFileParser, createProcessor } from "./processors/parse";
import { options } from "./util/sourcemap";
// only called from worker thread
export async function parseFiles(argv, fps, allSlugs) {
    const ctx = {
        cfg,
        argv,
        allSlugs,
    };
    const processor = createProcessor(ctx);
    const parse = createFileParser(ctx, fps);
    return parse(processor);
}
