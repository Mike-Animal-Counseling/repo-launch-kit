# Repo Launch Kit 实施交接

目标是把现有开仓 Skill 扩展为轻量仓库维护 Skill。核心成果是一套人和 Agent 都能遵循的 PR 交接流程，用普通 Markdown 和已有 GitHub 工作流运行。

起点：现有 Skill 位于当前仓库根目录，包含 `SKILL.md`、`agents/openai.yaml`、PR 模板和 CI 参考。优先从该目录接续开发。如果已经有独立仓库，以确认后的仓库为准。

## 实施顺序

1. **开仓或接手。** 检查 Git 根、现有说明、TODO、Issue、PR 模板、工作流和实际检查命令。先展示计划和 diff，再补缺项。核心默认是 `AGENTS.md`、任务清单和 PR 模板。已有 Issues、路线图或 OpenSpec 时复用当前权威任务源。CI 按真实命令生成并保留检查名。README、CONTRIBUTING、SECURITY、CODEOWNERS、Issue 模板和 CD 按需配置。
2. **每次 PR 都核对任务变化。** `TODO.md` 分进行中、待办、已完成，阻塞或下一步写在未完成条目里。值得追踪的发现加入清单，部分交付写明剩余条件，满足验收后才标记完成并附结果或链接。状态变化跟代码进同一个 PR。PR 正文固定有「任务变化」一栏，只摘录本次相关条目。无变化时填「无任务变化」。在 `AGENTS.md` 留下检查任务来源的规则，未安装 Skill 的贡献者也能遵循。
3. **回滚与并行。** 合并时按任务对照主分支，保留其他贡献者的条目。优先复用稳定任务 ID 或 Issue 链接。回滚使验收失效时随修复 PR 重新开启任务。二次运行无额外 diff，保护检查名、用户改动和现有规范。首版用 Skill、Markdown、PR 和 Git 跑通。实测发现模板生成漂移后再考虑可选的确定性脚本。
4. **独立发行。** 整理源码、模板、安装与卸载文档、许可证、变更记录和两个连续 PR 的示例。先核对是否已有同名仓库。完成公开内容审查与真实验证后准备独立开源 `v0.1`，发布范围和权限按用户指示。兼容表只列实际测试过的客户端、系统和技术栈。

## 验收

- 第一条 PR 部分交付并留下下一步。第二条 PR 换一个 Agent，在新会话中仅凭仓库接手，验证并完成任务。记录是否需要重新补充上下文。
- 再用一个已有 CI 和任务清单的仓库验证。覆盖空仓、现有规则、monorepo、未知技术栈、并行 PR 和二次调用。同配置没有无意义的改动。
- 生成的 CI 复用真实检查，示例仓库实跑。PR workflow 使用最小权限，fork PR 无发布凭据。Skill 可回装旧版本，目标仓库用 Git 回退。
- 第一批把 TODO 模板、PR 任务变化和 Skill 的维护入口做成可验证的链路。

## v0.1 进度

- [x] 完成一个可安装的 Skill、三份 Markdown 模板、MIT 许可证、安装和卸载说明及版本记录。
- [x] 完成两条本地 PR 演练。第一条建立流程并留下 R01。独立 Agent 在新会话中仅凭仓库完成 R01，附验证证据。
- [x] 在旧仓隔离快照完成两次接手调用。第二次无额外 diff，保留现有规范、任务清单和 CI。空仓、未知技术栈、monorepo 和并行任务更新的本地验证已记录。
- [x] 从候选 ZIP 干净安装并调用开仓和 PR 维护。包检查及生成的 monorepo CI 命令已在本机执行。
- [x] 两条真实验收 PR 依次通过 GitHub Actions 并合并。第二条由独立会话从合并后的主分支接手。
- [ ] 发布 `v0.1` 并从公开 ZIP 验证干净安装、开仓和 PR 维护。

[双 PR 草稿及证据](examples/pull-requests.md) · [发布验证记录](RELEASING.md)

参考：[Agent Skills 规范](https://agentskills.io/specification) · [OpenSpec](https://github.com/Fission-AI/OpenSpec#see-it-in-action) · [GitHub Actions 安全实践](https://docs.github.com/en/actions/reference/security/secure-use)
