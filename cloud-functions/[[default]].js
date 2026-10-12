// EdgeOne Makers Node 云函数入口（占位文件，必须入库）。
//
// 为什么必须提交：EdgeOne Pages 在部署开始时扫描仓库判定项目类型；
// 仓库里没有 cloud-functions/ 目录会被识别为纯静态站
// （构建日志："未检测到 server-handler，为纯静态项目生成了 routes.json"），
// 导致 /api/* 等请求永远到不了云函数。
// 每次部署时 `pnpm run build`（scripts/build-edge.mjs）都会重新生成覆盖本文件，
// 线上实际运行的永远是构建产物，不是这个占位。
export function onRequest() {
  return new Response("edgeone cloud function placeholder (not built yet)", {
    status: 500,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

export default onRequest;
