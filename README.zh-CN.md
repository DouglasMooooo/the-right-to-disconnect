# 下班后，仍是自己｜The Right to Disconnect

**职业精神，不是无条件服从。** 一份关于职场尊严、合法边界与工作时间外联系的独立双语公益宣言。

本仓库包含使用 Next.js 静态构建的英文与简体中文网站。内容以澳大利亚职场法律为重点，并对欧盟和美国制度作审慎比较。本项目不构成法律意见，不指认任何雇主或个人。

> 灵感来自 996.ICU 所体现的开源劳动权益倡议精神。

本项目独立运营，与 996.ICU 无隶属关系。仅将其列为项目灵感来源，而非法律依据。本项目未复用其品牌、标志、大段文本或反996许可证。

## 本地运行

需要 Node.js 20 或更新版本及 npm：

```bash
npm install
npm run dev
```

打开 <http://localhost:3000>。上线前检查：

```bash
npm run lint
npm run typecheck
npm run build
```

项目使用 Next.js App Router、React、TypeScript、Tailwind CSS 与 lucide-react。配置 `output: "export"` 后会生成静态 `out/` 目录，可部署到 Vercel，不需要数据库、服务器函数、密钥或 API。

## GitHub 与 Vercel 部署

公开源码仓库地址：<https://github.com/DouglasMooooo/the-right-to-disconnect>。部署时，在 Vercel 导入该仓库，选择 Next.js 预设并使用 `npm run build`，然后在 `app/layout.tsx` 的元数据配置中加入部署域名。本环境没有 Vercel 认证，因此尚未部署网站。

## 编辑及法律资料复核

`data/legal-references.json` 是结构化资料来源清单。发布前及法律变更时，应以官方立法和政府资料复核来源及网站表述。只有实际完成核查后才记录最近核查日期。本项目未声称经过律师正式审阅。

欢迎提交事实纠正、官方来源核验、中文翻译、无障碍改进及编辑建议。请参见 [CONTRIBUTING.md](CONTRIBUTING.md)。宣言文本与软件代码采用不同许可，详见 [CONTENT-LICENSE.md](CONTENT-LICENSE.md)。

## 隐私

网站不收集账户、表单、追踪、分析、评论、雇主黑名单或个人职场材料。网页字体从 Google Fonts 远程加载；如部署环境要求所有资源本地托管，请自行托管或移除该导入。
