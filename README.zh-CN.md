# **致谢开源社区**
本项目基于 [nextjs-corporate-starter](https://github.com/strapi/nextjs-corporate-starter) 构建，作为 Strapi 生态系统的重要组成部分，其优秀的架构设计为开发工作提供了坚实基础。在此特别感谢原作者的卓越贡献，正是开源精神的薪火相传，才让技术创新的脚步永不停息。

# 项目演进

迭代与创新
在继承原项目优秀基因的基础上，我们针对企业级应用场景进行了深度优化：

引入模块化架构设计，提升代码可维护性
增强内容管理系统的可视化配置能力
优化前后端数据交互流程，提升响应效率
开源回馈
所有改进方案均已通过 MIT 协议开源，开发者可通过 GitHub 仓库 获取最新代码。我们期待与社区共同推动项目的持续演进，欢迎提交 PR 或 Issue 参与协作。


## 创业实践分享
作为连续创业者，我将技术实践与商业探索相结合，在 [SeanCloud](http://cloud.dooboom.com/projects) 创新平台 持续输出：
✅ 已验证的商业模式案例库
✅ 技术产品化实战指南
✅ 创业资源对接网络

诚邀各位开发者与创业者通过 联络邮箱 或 [SeanCloud](http://cloud.dooboom.com/contract) 主页 交流合作，共同探索AI时代的创新机遇。


## 特性

- **内容类型构建器**：为您的内容管理员提供最灵活的发布体验，让他们可以使用[字段](https://docs.strapi.io/user-docs/content-manager/writing-content#filling-up-fields)、组件和[动态区域](https://docs.strapi.io/user-docs/content-manager/writing-content#dynamic-zones)随时创建任何页面。
- **媒体库**：将您的图片、视频、音频或文档上传到媒体库。轻松找到合适的资源，编辑并重复使用。
- **国际化**：国际化（i18n）插件允许Strapi用户创建、管理和分发不同语言（称为"区域设置"）的本地化内容。
- **基于角色的访问控制**：为管理员和最终用户创建无限数量的自定义角色和权限。
- **GraphQL或REST**：使用REST或GraphQL消费API。

您可以在[Strapi Cloud](https://cloud.strapi.io/login?source=github1)或[Strapi Enterprise](https://strapi.io/enterprise?source=github1)中解锁额外功能，如SSO、审计日志、审核工作流程。


## 入门指南

如果您喜欢指导您完成设置过程的视频，可以在[这里](https://github.com/strapi/nextjs-corporate-starter/issues/71)找到它们。

1. 在本地克隆仓库：

```bash
  git clone https://github.com/strapi/nextjs-corporate-starter.git
    或
  gh repo clone strapi/nextjs-corporate-starter
```

2. 运行`setup`命令来设置前端和后端依赖：

```bash
  yarn setup
```

3. 接下来，导航到您的`/backend`目录并设置您的`.env`文件。您可以使用`.env.example`文件作为参考：

```bash
HOST=localhost
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
```

4. 通过运行以下命令启动您的项目：

```bash
  yarn build
  yarn develop
```

系统将提示您创建第一个管理员用户。

![管理员用户](https://user-images.githubusercontent.com/6153188/231865420-5f03a90f-b893-4057-9634-9632920a7d97.gif)

太好了。您现在已经启动了项目。让我们添加一些数据。

## 数据填充

我们将使用DEITS功能，它可以让您轻松地将数据导入到您的项目中。

您可以在我们的文档[这里](https://docs.strapi.io/dev-docs/data-management)了解更多信息。

在我们项目的根目录中，有一个`seed-data.tar.gz`文件。我们将使用它来填充我们的数据。

1. 打开您的终端，确保您仍然在`backend`文件夹中。

2. 运行以下命令来填充您的数据：

```bash
  yarn strapi import -f ../seed-data.tar.gz
```

![导入后](https://user-images.githubusercontent.com/6153188/231865491-05cb5818-a0d0-49ce-807e-a879f7e3070c.gif)

这将在本地导入您的数据。重新登录到您的管理面板，查看新导入的数据。

这里有一个快速视频，涵盖了初始设置和数据填充。

https://github.com/strapi/nextjs-corporate-starter/assets/6153188/80f00bf5-d17b-449d-8a0d-7f0d9614f40b

## 设置前端

接下来，我们需要切换到`/frontend`目录，创建我们的`.env`文件并粘贴以下内容。

```bash
NEXT_PUBLIC_STRAPI_API_TOKEN=your-api-token
NEXT_PUBLIC_PAGE_LIMIT=6
NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN=your-form-submission-token
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337

```

在启动我们的Next JS应用之前，我们需要进入Strapi管理面板，创建两个令牌，用于**表单提交**和显示我们的**内容**。

在您的Strapi管理面板中，导航到设置 -> API令牌，然后点击`创建新的API令牌`。

![api-tokens](https://user-images.githubusercontent.com/6153188/231865572-cebc5538-374c-4050-91cd-c303fae25a3d.png)

以下是我们的令牌设置：

名称：Public API Token Content
描述：Access to public content.
令牌持续时间：无限制
令牌类型：自定义

在权限中，让我们给予以下访问权限。

| 内容            |      权限       |
| --------------- | :-------------: |
| Article         | find和findOne   |
| Author          | find和findOne   |
| Category        | find和findOne   |
| Global          |      find       |
| Page            | find和findOne   |
| Product-feature | find和findOne   |

![permissions](https://user-images.githubusercontent.com/6153188/231865625-a3634d89-0f40-4a6d-a356-8f654abd88b9.gif)

获得令牌后，将其添加到`.env`文件中的`NEXT_PUBLIC_STRAPI_API_TOKEN`变量名中。

**或者：**您可以创建一个只读令牌，它将为所有端点提供读取权限。

在这个特定项目中，这不是问题。虽然上述方法是推荐的方式，但我也想在这里向您展示这个选项。

创建令牌时，只需从令牌类型下拉菜单中选择`只读`选项。

<img width="1093" alt="create-read-only-token" src="https://github.com/strapi/nextjs-corporate-starter/assets/6153188/3ea6c029-b296-4bbc-a5ce-33eedac52a03">

接下来创建一个允许我们提交表单的令牌。

名称：Public API Form Submit
描述：Form Submission.
令牌持续时间：无限制
令牌类型：自定义

在权限中，让我们给予以下访问权限。

| 内容                 |  权限  |
| -------------------- | :----: |
| Lead-Form-Submission | create |

将您的令牌添加到`.env`文件中的`NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN`变量名中。

一旦您的环境变量设置完成，您可以通过运行`yarn dev`来启动您的前端应用程序。

现在您应该可以看到您的Next JS前端了。

![frontend](https://user-images.githubusercontent.com/6153188/231865662-d870051f-4503-4a01-bc6b-635c7c5ca40d.png)

## 同时启动两个项目

我们也可以使用`concurrently`包通过一个命令启动两个项目。

您可以在根文件夹中的`package.json`文件中找到设置。

```json
{
  "scripts": {
    "frontend": "yarn dev --prefix ../frontend/",
    "backend": "yarn dev --prefix ../backend/",
    "clear": "cd frontend && rm -rf .next && rm -rf cache",
    "setup:frontend": "cd frontend && yarn",
    "setup:backend": "cd backend && yarn",
    "setup": "yarn install && yarn setup:frontend && yarn setup:backend",
    "dev": "yarn clear && concurrently \"cd frontend && yarn dev\" \"cd backend && yarn develop\""
  },
  "dependencies": {
    "concurrently": "^7.6.0"
  }
}
```
进入根文件夹并安装包，`yarn`
您可以通过运行`yarn dev`来启动两个应用。

## 结论

希望您觉得这个启动器有用，它是一个基础示例，帮助您快速入门。

很想听听您用它构建了什么。

如果您发现错误或有建议，请随时创建issue。

谢谢，保持出色。

# 为Next.js Corporate Starter仓库做贡献

我们非常高兴您考虑为Next.js Corporate Starter开源项目做贡献！如果您不确定或担心什么，请知道您在这里不会搞砸。任何贡献都是有价值的，我们感谢您！

本文档旨在为您提供做出贡献所需的所有必要信息。

## 先决条件

在您可以做出贡献之前，您需要安装以下内容：

- Node.js和npm：您可以从官方[Node.js网站](https://nodejs.org/)下载这些。
- Git：您可以在官方[Git书籍](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)中找到Git的安装说明。

## 贡献步骤

### 1. Fork仓库

在您的网络浏览器中，导航到[https://github.com/strapi/nextjs-corporate-starter](https://github.com/strapi/nextjs-corporate-starter)。点击页面右上角的'Fork'按钮。这将在您的GitHub账户中创建一个仓库副本。

### 2. 克隆您的Fork

现在，转到您的仓库版本。您可以通过导航到https://github.com/USERNAME/nextjs-corporate-starter（将'USERNAME'替换为您的GitHub用户名）来做到这一点。在这里，点击'Clone'按钮，然后点击'Copy to clipboard'复制git URL。

接下来，您需要打开终端，导航到您想要存储项目的位置，然后输入以下命令，然后按'Enter'：

```bash
git clone PASTE_CLONED_REPOSITORY_URL
```

将'PASTE_CLONED_REPOSITORY_URL'替换为您之前复制的URL。此命令将您的fork下载到您的计算机。

### 3. 添加上游仓库

在您开始贡献之前，您需要设置对原始仓库的引用。您可以使用以下命令执行此操作：
