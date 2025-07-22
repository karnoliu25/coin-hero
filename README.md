# 钱包拯救计划 - 记账应用

设计图:[点击这里跳转查看](设计图.pdf)

## 项目简介

"钱包拯救计划"是一款简洁易用的个人记账应用，帮助用户追踪收入支出，管理财务流水。应用包含账目记录、分类管理、数据统计等核心功能，采用 Vue 3 技术栈开发，具有响应式设计和良好的用户体验。

## 功能特性

- 收支记录：快速添加收入/支出记录
- 标签管理：自定义收支分类标签
- 数据统计：可视化查看周/月/年收支趋势
- 明细查询：按标签筛选查看详细记录
- 移动优先：专为移动设备优化的 UI 设计
- 本地存储：数据自动保存至浏览器本地存储

## 技术栈

- Vue 3 (Composition API + <script setup>)
- Pinia (状态管理)
- Vue Router (路由)
- ECharts (数据可视化)
- Tailwind CSS (实用工具类 CSS)

## 项目结构

src/
├── assets/ # 静态资源
├── components/ # 公共组件
│ ├── Common/ # 通用组件
│ ├── CreateBills/ # 创建账单相关组件
│ ├── EditBills/ # 编辑管理相关组件
│ ├── HomeView/ # 首页相关组件
│ └── ReadBills/ # 查看账单相关组件
├── stores/ # Pinia 状态管理
│ └── data.js # 应用数据 store
├── views/ # 页面视图
├── App.vue # 根组件
├── main.js # 应用入口
└── router/ # 路由配置

## 安装与运行

1. 克隆仓库：

```bash
git clone https://github.com/karnoliu25/coin-hero.git
cd coin-hero
```

2. 安装依赖：

```bash
npm install
```

3. 启动开发服务器：

```bash
npm run dev
```

4. 生产构建

```bash
npm run build
```

构建产物将生成在 dist/ 目录下。

## 使用说明

1. 首页：查看当前余额、总收入、总支出和最近记录
2. 记一笔：添加新的收入或支出记录
3. 看账单：查看统计图表和详细记录
4. 编辑：管理账目记录和标签分类

## 贡献指南

欢迎提交 Issue 和 Pull Request。提交前请确保：

代码风格与现有代码一致

通过 ESLint 检查

为新功能添加相应测试

## 许可证

MIT License

## 联系方式

如有任何问题或建议，请联系：

开发者：Karnoliu

Email：Karnoliu@163.com

**温馨提示**：本应用使用浏览器本地存储保存数据，清除浏览器缓存会导致数据丢失，重要数据请自行备份。
