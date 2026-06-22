# Region Snapshot Foundation 数据说明

本阶段为 **History Connected** 增加了一个小而稳定的地区数据地基，重点是让未来的 Lens、timeline、map 可以更自然地接入地区语境。当前改动只补充数据，不改变现有 UI、Lens Lineage View、Connection Explorer、地图交互或 1453 / 1879 / 1914 demo。

## 新增的 `regionSnapshots`

新增了顶层集合 `regionSnapshots`，用于比旧版 `snapshots` 更结构化地描述关键年份的地区状态。

覆盖年份：

- `1453`
- `1879`
- `1914`

每个年份覆盖以下优先地区：

- `europe`
- `middle-east`
- `china`
- `japan`
- `india`
- `africa`
- `americas`
- `united-states`
- `latin-america`
- `korea`

共新增 `30` 条地区快照。每条 snapshot 包含：

- `id`
- `year`
- `regionId`
- `regionName`
- `title`
- `summary`
- `primaryLensIds`
- `lineageTags`
- `relatedEventIds`
- `confidence`
- `sources`

当前 UI 仍然读取旧的 `snapshots` 集合来显示 World Snapshot cards；新的 `regionSnapshots` 是下一阶段的数据地基，暂时不会改变页面现有显示。

## 新增的 `regionLineages`

替换了原先占位性质的 `regionLineages`，新增 8 个地区的轻量主线脉络，每个地区 6 个 high-level curated nodes。

覆盖地区：

- `europe`
- `middle-east`
- `china`
- `japan`
- `india`
- `africa`
- `americas`
- `united-states`

每个 lineage node 包含：

- `id`
- `regionId`
- `title`
- `period`
- `summary`
- `lensIds`
- `relatedRegionIds`
- `relatedEventIds`
- `sources`
- `confidence`

这些节点不是完整历史数据库，而是教学型主线骨架，用来帮助之后的产品逻辑回答：“某个地区在这个时间附近处于什么长期脉络中？”

## 未来如何帮助 Lens 接入 timeline / map

这些数据可以支持下一阶段的几类联动：

1. 当用户选择年份和地区时，除了显示当年 snapshot，还可以找到该地区所属的长期 lineage node。
2. 当用户进入某个 Lens，例如 Economy / Trade 或 State / Empire，可以筛选出相关地区 lineage 中带有对应 `lensIds` 的节点。
3. 当地图区域被点击时，可以展示该地区在不同年份的 snapshot 与长期 region lineage。
4. 当 Connection Explorer 中的事件跨地区传播时，可以用 `relatedRegionIds` 帮助解释地区之间的连接背景。
5. `lineageTags` 可以作为轻量标签，把 Snapshot、Lens Lineage、Region Lineage 和 Event 逐步接起来。

## Sources 策略

当前每条 `regionSnapshot` 和每个 `regionLineage` node 都带有 `sources`。本阶段使用已有 source catalog 中的高层级来源 id，例如：

- `world-history-encyclopedia`
- `britannica`
- `khan-academy`
- `wikidata`
- `our-world-in-data`

这些 source id 目前是来源目录引用，不是逐条节点 URL。下一阶段如果需要更强的学术可追溯性，可以把 `sources` 从 source id 扩展为带具体条目、URL、访问日期和备注的引用对象。

## Curated Approximation 说明

本阶段数据属于 curated approximation，而不是精确历史数据库：

- 许多 period 边界是 broad periodization，用于教学和产品原型，不代表严格学术分期。
- 部分地区在同一年内部存在多种政治、文化和社会状态，当前 snapshot 只保留一个高层 summary。
- `Americas`、`Africa`、`Middle East` 等大区尤其容易过度概括，后续应拆分为更细的地区或 polity。
- `confidence: "medium"` 表示该节点或分期适合原型展示，但仍需要后续来源细化。
- `Wikidata` 主要适合未来补实体 id、日期、地点、坐标候选，不应作为最终解释来源。

当前目标是先建立地区脉络骨架，让未来 Lens 和 map 的连接有可靠落点，而不是一次性追求完整历史覆盖。
