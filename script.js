const projects = [
  {
    title: "短视频平台内容自动化生产",
    subtitle: "多媒体 AIGC 工作流",
    period: "2025.05 - 2025.09",
    theme: "aigc",
    labels: ["NotebookLM", "GPT-SoVITS", "AIGC 工作流"],
    shortDescription: "围绕长篇文本拆分、角色第一人称叙事、AI 语音合成和视频自动化制作，构建面向短视频平台的 AIGC 内容生产流程。",
    fullDescription: [
      "基于 NotebookLM 将长篇文本拆分并重写为角色第一人称叙事文案，形成适配短视频平台节奏的系列化内容脚本。",
      "使用 GPT-SoVITS v4 训练角色语音模型，将生成文案转化为特定角色音色配音，并结合自动化字幕与剪辑流程完成视频定期制作。",
      "通过 AIGC 工作流完成并发布角色说书作品数十期，半年内热门作品播放量超 25 万，抖音累计播放量超 150 万。"
    ],
    demoUrl: "https://dadongshancc.github.io/lord-of-the-mysteries-character-graph/",
    githubUrl: "https://github.com/dadongshancc/lord-of-the-mysteries-character-graph",
    douyinUrl: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7526863954049600827&showTab=post"
  },
  {
    title: "GridForge 空间推理数据集",
    subtitle: "规则智能体系统",
    period: "2023.09 - 2025.01",
    theme: "grid",
    labels: ["空间推理", "Python", "规则智能体"],
    shortDescription: "基于网格假设构建空间推理数据集，通过规则智能体生成结构化布局样本、标签数据与可视化结果。",
    fullDescription: [
      "作为项目负责人统筹项目策划、算法开发与数据管理，持续推进 13 个月，并获得 1.5 万元竞赛资金支持。",
      "基于网格假设构建面向空间推理的数据集，支持批量生成结构化布局样本、标签数据与可视化结果。",
      "基于 Python 分层设计 4 类规则智能体，在网格空间中提升数据样本复杂度与多样性。"
    ],
    demoUrl: "https://dadongshancc.github.io/GridForge/",
    githubUrl: "https://github.com/dadongshancc/GridForge"
  },
  {
    title: "MarketGraph AI 股票复盘助手",
    subtitle: "金融事件知识图谱",
    period: "2025.03 - 至今",
    theme: "market",
    labels: ["LLM", "知识图谱", "复盘助手"],
    shortDescription: "面向个人投资复盘场景，记录市场走势、主观判断与事件链接，构建个人化金融事件知识图谱。",
    fullDescription: [
      "面向个人投资复盘场景，轻量化记录市场走势、主观判断与关联逻辑，追踪个性化投资策略。",
      "设计“事件-判断-链接”时间轴交互，以正向、负向与不确定标签记录个人判断，链接事件表达市场行为的长期关联。",
      "接入 LLM 完成财经事件抽取、态度识别与关系链路整理，构建由个人判断与金融事件组成的用户知识图谱。"
    ],
    githubUrl: "https://github.com/dadongshancc"
  }
];

const facadeArticleBlocks = [
  {
    type: "lead",
    title: "Grounding DINO × Segment Anything × ControlNet",
    subtitle: "文本驱动的建筑立面语义掩码生成与可控生成实验"
  },
  {
    type: "paragraph",
    text: "2023 年，Segment Anything Model（SAM）发布后，通用图像分割第一次变得非常直接：给定点或目标框，模型便能够输出边界较为精细的对象掩码。对于建筑立面图像而言，这一能力很有吸引力。窗、门与建筑主体具有清晰的空间轮廓，如果能够将这些构件稳定地提取出来，就有可能进一步转换为生成模型可以读取的结构条件。"
  },
  { type: "paragraph", text: "但在实际任务中，仅有分割轮廓并不够。" },
  {
    type: "paragraph",
    text: "实际任务需要一张具有明确语义规则的控制图，单独抠出的对象无法满足后续生成控制需求：图像中的所有窗应统一对应 <code>window</code> 类别，并映射为同一种颜色；所有门应统一对应 <code>door</code> 类别；建筑主体也应形成稳定的整体轮廓。换言之，目标从一次性的实例分割，转向建立“文本类别—掩码区域—固定色值”一致的数据表达。"
  },
  {
    type: "paragraph",
    text: "初代 SAM 擅长根据已有提示生成精细掩码，但并不直接承担建筑构件类别识别与类别合并的工作。即使能够获得某些对象的分割区域，也仍然无法直接得到符合后续 ControlNet 输入要求的语义编码图。"
  },
  { type: "paragraph", text: "因此，这项工作的核心问题逐渐明确下来：" },
  {
    type: "quote",
    text: "如何先用文字指定需要识别的建筑构件类别，再获得准确边界，并最终输出类别与色值一致的结构控制图？"
  },
  { type: "heading", text: "从分割能力到语义接口" },
  {
    type: "paragraph",
    text: "建筑立面与普通单体物品图像不同。它通常包含大量密集、重复、尺度接近的构件：同一立面上可能连续出现数十扇窗，首层入口与玻璃幕墙具有相近的视觉特征，主体建筑与远处背景建筑也可能具有相同的类别名称。"
  },
  {
    type: "paragraph",
    text: "在生成任务中，这些差异必须被明确处理。窗除了作为被检测到的矩形区域，还承担立面节奏、开口比例与构图秩序的信息；门不仅是一个局部对象，也关系到首层入口位置；建筑主体则定义了整体体量轮廓与生成范围。"
  },
  { type: "paragraph", text: "因此，面向建筑立面的控制图需要同时满足三个条件：" },
  {
    type: "list",
    items: [
      "<strong>类别明确</strong>：窗、门与建筑主体应被区分，避免只输出无类别的实例区域；",
      "<strong>边界准确</strong>：构件轮廓应足够连续，能够表达真实立面的结构关系；",
      "<strong>编码一致</strong>：同一类别在不同图像中应始终对应相同色值，以便继续用于生成控制与数据训练。"
    ]
  },
  {
    type: "paragraph",
    text: "SAM 解决了其中的边界问题，却没有直接提供完整的语义接口。为了补上类别定位这一环，我引入了能够接受文字提示的目标检测模型 Grounding DINO。"
  },
  { type: "heading", text: "让 Grounding DINO 找对象，让 SAM 生成边界" },
  {
    type: "paragraph",
    text: "Grounding DINO 可以根据文字描述在图像中定位对应对象。对于建筑立面图像，可以分别输入 <code>window</code>、<code>door</code>、<code>building</code> 等类别提示，由模型返回匹配目标的位置框与置信度。"
  },
  {
    type: "paragraph",
    text: "在此基础上，SAM 无需自行判断对象类别，只接收已经具备语义信息的目标框，进一步生成像素级的精细掩码。两类模型由此形成一条职责明确的处理链路："
  },
  {
    type: "code",
    lines: [
      "prompts = [\"window\", \"door\", \"building\"]",
      "boxes = GroundingDINO(image, prompts)",
      "boxes = filter(boxes, score > threshold)",
      "masks = SAM(image, boxes)",
      "layers = merge_by_class(masks)",
      "control_map = color_encode(layers)"
    ]
  },
  {
    type: "paragraph",
    text: "这种拆分方式的优势并非来自更复杂的模型结构，关键在于每一步都可以被检查和调整。Grounding DINO 负责判断“需要处理的对象在哪里”，SAM 负责细化“该对象的边界如何展开”，最终的类别合并与色值映射则由任务规则控制。"
  },
  { type: "paragraph", text: "这使得输出从不可解释的一次性分割结果，转化为能够进入后续生成流程的结构化数据。" },
  {
    type: "figure",
    image: "images/r1-1.jpg",
    label: "Grounding DINO 基于文本提示识别建筑主体、窗与门的中间结果",
    caption: "Grounding DINO 根据 <code>window</code>、<code>door</code> 与 <code>building</code> 等文本提示返回目标候选框。检测结果在后续步骤中作为 SAM 的分割提示，用于生成精细语义掩码。"
  },
  {
    type: "paragraph",
    text: "在这一阶段，图像中显示的检测框仍然只是中间结果。对于窗这类大量重复出现的元素，检测模型负责尽可能完整地找出实例；对于建筑主体与背景建筑，则需要结合后续用途进行筛选，避免不相关对象进入控制图。"
  },
  { type: "heading", text: "从模型输出到固定色值语义掩码" },
  { type: "paragraph", text: "完成检测与分割之后，仍然需要进行一层关键的后处理：将实例结果整理为稳定的语义图。" },
  {
    type: "paragraph",
    text: "检测与分割模型天然更关注“对象实例”，而 ControlNet 与训练数据更需要“类别表达”。例如，一张立面图中可能存在几十个窗实例，但在控制图中，它们应当被统一视为 <code>window</code> 类别，并使用相同颜色进行表达。不同图像中的窗也必须遵循完全相同的色值规则，否则模型看到的只是视觉上相似但语义不稳定的输入。"
  },
  { type: "paragraph", text: "因此，最终的输出过程包含了三类处理：" },
  {
    type: "code",
    lines: [
      "instances = filter_low_confidence(instances)",
      "instances = remove_off_target(instances)",
      "layers = group_by_class(instances)",
      "control_map = color_encode(layers)"
    ]
  },
  {
    type: "paragraph",
    text: "建筑立面还存在明确的空间层级关系：窗和门通常位于建筑主体内部。如果简单叠加各类 mask，建筑主体可能覆盖窗洞，或者不同类别之间出现冲突。因此，语义图的渲染顺序也需要被固定下来："
  },
  {
    type: "code",
    lines: [
      "canvas = init_background()",
      "draw(canvas, building_mask)",
      "draw(canvas, window_masks)",
      "draw(canvas, door_masks)",
      "validate(canvas)"
    ]
  },
  {
    type: "paragraph",
    text: "经过这一过程，原始建筑照片中的材质、阴影、反射与环境干扰被剥离，保留下来的则是与生成控制直接相关的结构信息：整体轮廓、开口排列与入口位置。"
  },
  {
    type: "figure",
    image: "images/r1-2.jpg",
    label: "原始建筑立面图像与固定色值语义掩码图对照",
    caption: "真实立面图像经过文本驱动检测、精细分割与类别重编码后，转换为色值规则一致的语义结构图。"
  },
  { type: "heading", text: "在 Jupyter Notebook 中串联处理流程" },
  {
    type: "paragraph",
    text: "这套流程最初通过 Jupyter Notebook 中的 Python 脚本逐步搭建完成。当时并没有现成的可视化工作流能够直接处理建筑立面中的类别筛选、掩码合并与固定色值输出，因此模型之间的连接以及结果整理都需要在脚本中明确实现。"
  },
  { type: "paragraph", text: "整个处理过程包括：" },
  {
    type: "code",
    lines: [
      "image, models = load_inputs()",
      "prompts = build_facade_prompts()",
      "boxes = detect_with_prompts(image, prompts)",
      "masks = segment_with_boxes(image, boxes)",
      "layers = merge_instances(masks)",
      "export(color_encode(layers))"
    ]
  },
  {
    type: "paragraph",
    text: "这一过程并不涉及重新训练视觉基础模型。真正需要设计的是模型输出之间的接口：如何将开放词汇检测得到的类别信息，与精细分割得到的轮廓信息结合；如何将实例级输出整理为可被生成模型读取的语义级输入；如何保证同一套规则能够应用于不同建筑图片。"
  },
  {
    type: "paragraph",
    text: "从这个角度看，这项工作超出了简单调用两个现成模型的范围，更接近于建立一条面向具体任务的数据转换管线。模型负责提供能力，脚本负责将能力组织成可以重复运行的工作流程。"
  },
  { type: "heading", text: "作为 ControlNet 条件输入的建筑结构图" },
  { type: "paragraph", text: "构建语义掩码的最初目的，是为建筑立面可控生成提供结构条件。" },
  {
    type: "paragraph",
    text: "仅依赖文本生成建筑立面时，模型可以较容易地产生材质、光影与风格变化，却难以稳定控制窗洞排列、入口位置与主体轮廓。这些信息对于建筑生成并非次要细节，它们决定了立面构图是否具有合理的基础结构。"
  },
  { type: "paragraph", text: "固定色值语义图提供了一种更加直接的输入方式：" },
  {
    type: "list",
    items: [
      "<code>building</code> 类别限定主体轮廓与整体体量范围；",
      "<code>window</code> 类别表达开口数量、排列方式与立面节奏；",
      "<code>door</code> 类别表达首层入口位置；",
      "背景区域帮助模型区分主要生成对象与周边环境。"
    ]
  },
  {
    type: "paragraph",
    text: "处理后的语义图被接入 ComfyUI 工作流，并作为 ControlNet 的条件输入传递给 Stable Diffusion。生成模型由此可以在保留主要结构约束的基础上，继续生成真实感材质、构造细节与视觉风格。"
  },
  {
    type: "figure",
    image: "images/r1-3.jpg",
    label: "语义控制图接入 ControlNet 并生成真实建筑立面结果",
    caption: "固定色值语义图作为 ControlNet 的结构条件，约束 Stable Diffusion 生成结果中的主体轮廓、窗洞排列与入口位置。"
  },
  {
    type: "paragraph",
    text: "在这一流程中，生成结果的评价标准也发生了变化。重点从图像是否具有真实感，进一步转向生成结果是否尊重输入控制图中的结构信息：窗的位置是否保持，门是否仍位于合理区域，整体轮廓是否与输入条件对应。"
  },
  {
    type: "paragraph",
    text: "可控生成的意义，也正是在这里体现出来：生成模型不再完全依赖文本去猜测设计结构，转而接受一份已经被明确编码的空间条件。"
  },
  { type: "heading", text: "从生成控制图到数据构建工具" },
  {
    type: "paragraph",
    text: "随着样本数量增加，这条流程的作用也逐渐超出了单次生成实验。"
  },
  {
    type: "paragraph",
    text: "真实建筑立面照片包含大量与结构无关的视觉信息，例如材质差异、光照变化、植被遮挡、透视畸变与周边环境。对于研究建筑构图与结构条件生成而言，更需要的是一套能够稳定表达立面组成关系的数据形式。"
  },
  {
    type: "paragraph",
    text: "通过 Grounding DINO 与 SAM 的组合，并叠加统一的类别处理与颜色编码规则，真实建筑图像可以被持续转换为结构清晰、含义一致的语义样本。这些样本不仅可以作为 ControlNet 的输入，也可以进一步用于训练集构建、结果比较与生成模型实验。"
  },
  { type: "paragraph", text: "这使原本的问题发生了转变：" },
  {
    type: "code",
    lines: [
      "for image in facade_dataset:",
      "    control_map = build_semantic_control(image)",
      "    control_map = validate_color_rules(control_map)",
      "    dataset.append(control_map)"
    ]
  },
  {
    type: "paragraph",
    text: "对我而言，这也是这项工作中最重要的认识：生成模型的控制能力，往往取决于输入数据是否能够明确表达任务所需要的结构规则，单靠模型本身无法决定最终效果。"
  },
  {
    type: "paragraph",
    text: "对于建筑立面而言，窗、门与主体轮廓本身就是设计信息。将这些信息从真实图像中提取出来，并整理成模型能够稳定读取的控制条件，生成结果才具备进一步讨论、比较和调整的基础。"
  },
  { type: "heading", text: "结语" },
  {
    type: "paragraph",
    text: "这项实验没有提出新的基础模型，重点放在一个具体的建筑生成问题上，搭建由检测、分割、语义编码与条件生成组成的视觉处理流程。"
  },
  {
    type: "paragraph",
    text: "初代 SAM 提供了高质量的分割能力，但无法直接形成符合建筑生成任务要求的语义控制图；Grounding DINO 补充了文字驱动的类别定位能力；自定义脚本进一步将检测与分割结果组织为固定色值的结构条件；ControlNet 与 Stable Diffusion 则将这些条件转化为可控生成结果。"
  },
  {
    type: "paragraph",
    text: "从文本提示到语义掩码，从结构控制到数据构建，这条流程构成了我进入可控视觉生成研究的起点。相比无约束地产生更多图像，我更关心的问题始终是：如何让生成模型读取结构信息，并在输出中保留设计逻辑。"
  }
];

const planArticleBlocks = [
  {
    type: "lead",
    title: "Graph Representation Learning × Conditional Autoregressive Generation",
    subtitle: "面向住宅平面设计的拓扑条件矢量生成研究"
  },
  {
    type: "paragraph",
    text: "在住宅平面的早期设计阶段，人们通常先描述空间关系，再进一步确定几何形态：需要几个卧室，客厅是否连接阳台，厨房与餐厅是否相邻，入口如何组织交通。这类关系可以用泡泡图表达：节点表示房间，连线表示连通关系，门则对应空间之间实际发生连接的位置。"
  },
  {
    type: "paragraph",
    text: "对生成模型而言，泡泡图提供了一种清晰的设计条件。它保留了使用者最容易控制的功能信息，也避免了用户在概念阶段提前指定每一道墙的位置。"
  },
  {
    type: "paragraph",
    text: "我的研究从这一输入形式出发，希望生成可继续编辑的矢量化住宅平面：输入为房间类型与连通关系构成的拓扑图，输出为由房间与门的几何坐标组成的结构化平面结果。"
  },
  {
    type: "figure",
    image: "images/r2-1.jpg",
    label: "输入泡泡图与生成矢量平面结果对照",
    caption: "用户通过泡泡图指定房间类别、数量与门连接关系，模型生成满足拓扑条件的矢量化住宅平面。"
  },
  { type: "heading", text: "为什么选择矢量平面" },
  {
    type: "paragraph",
    text: "早期平面生成方法常将结果表达为彩色栅格图像。此类结果能够直观显示房间分区，却难以直接支持修改、尺寸调整与后续设计操作。住宅平面中的房间边界、门位置和连接关系，本身具有明确的几何结构，更适合使用矢量对象表达。"
  },
  {
    type: "paragraph",
    text: "在本研究中，每一个房间和门都被表示为可计算的几何元素。模型生成的结果可以进一步导出为 SVG，用于可视化、编辑与下游设计应用。"
  },
  {
    type: "paragraph",
    text: "这种表示方式也带来了新的问题：当模型开始逐个预测几何坐标时，如何持续遵守最初输入的空间关系？一张平面图可能包含多个类型重复的房间，也可能包含复杂的门连接关系。如果生成过程只关注当前已经输出的坐标，前期的拓扑条件很容易在长序列中逐渐弱化。"
  },
  { type: "paragraph", text: "因此，这项工作的核心问题落在两种表达之间：" },
  {
    type: "quote",
    text: "如何让拓扑图中的空间关系，在矢量几何逐步生成的过程中始终保持有效？"
  },
  { type: "heading", text: "将门纳入拓扑表达" },
  {
    type: "paragraph",
    text: "泡泡图通常将门隐含在线之间：两个房间相连，意味着它们之间存在门。但在矢量平面中，门本身也需要被生成，它具有位置、方向与连接对象。"
  },
  {
    type: "paragraph",
    text: "因此，我首先将输入泡泡图转换为房间关系图。房间、入口门与室内门被统一表示为节点，连接关系则通过图中的边表达。这样，拓扑输入与几何输出共享同一组对象：模型既需要生成房间，也需要生成对应的门。"
  },
  { type: "paragraph", text: "这一转换解决了两个具体问题：" },
  {
    type: "list",
    items: [
      "房间关系与门位置能够在同一套表示中被建模；",
      "后续几何序列中的每一个对象，都能够在输入图中找到对应节点。"
    ]
  },
  {
    type: "figure",
    image: "images/r2-2.jpg",
    label: "泡泡图转换为房间关系图的示意图",
    caption: "原始泡泡图中的连通关系被展开为包含房间节点、入口门节点与室内门节点的关系图，为后续几何生成建立统一对象空间。"
  },
  { type: "noteLabel", text: "Pipeline" },
  {
    type: "code",
    lines: [
      "G0 = input_bubble_graph",
      "G = expand_doors(G0)",
      "nodes = rooms + front_door + interior_doors",
      "edges = build_room_door_relations(G)",
      "tokens = order_topology(nodes, edges)",
      "sequence = vectorize_floorplan(tokens)"
    ]
  },
  {
    type: "paragraph",
    text: "这里的节点顺序十分关键。房间与门首先按照对象类型排序，再按照空间位置建立确定顺序。后续生成阶段沿用同一顺序，使输入图中的某个节点能够稳定对应输出序列中的某段坐标。"
  },
  { type: "heading", text: "从泡泡图到稳定拓扑驱动的矢量生成" },
  {
    type: "paragraph",
    text: "从 RPLAN 平面样本中可以提取泡泡图关系，但泡泡图并不会直接给出房间边界和门的位置。围绕这一输入，常见路线大致可以分为两类：一类将生成结果落到栅格图像上，另一类直接从图关系生成矢量平面。"
  },
  {
    type: "paragraph",
    text: "栅格生成可以得到直观的房间分区，但容易出现房间碎片、训练不稳定和复杂后处理问题；普通图驱动矢量生成更接近可编辑结果，却仍可能出现缺失房间、功能关系不一致和几何控制不稳定等问题。"
  },
  {
    type: "paragraph",
    text: "我的处理方式是在生成几何之前先学习稳定图表征。模型首先从完整房间关系图中提取房间、门与连接关系的拓扑上下文，再在几何感知的解码阶段生成矢量平面，使结果同时具备拓扑可控性、几何一致性和可编辑性。"
  },
  {
    type: "paragraph",
    text: "具体而言，GraphMAE2 用于在完整房间关系图上学习节点级拓扑表征，条件自回归 Transformer 则在固定图上下文约束下逐步生成房间与门的矢量坐标。这样，几何生成全过程都能读取同一份拓扑条件，避免空间关系在长序列中逐渐弱化。"
  },
  {
    type: "figure",
    image: "images/r2-3.png",
    label: "从栅格生成、图驱动矢量生成到稳定拓扑驱动矢量生成",
    caption: "基于泡泡图条件的不同生成范式对比：栅格输出依赖后处理，普通矢量生成容易丢失功能关系；稳定图表征与几何感知学习共同支持可控、可编辑的矢量平面生成。"
  },
  { type: "noteLabel", text: "Generation Logic" },
  {
    type: "code",
    lines: [
      "G = encode_complete_topology(bubble_graph)",
      "H = topology_encoder(G)",
      "sequence = [BOS]",
      "while not finished(sequence):",
      "    token = decoder(sequence, context = H)",
      "    sequence.append(token)",
      "floorplan = decode_coordinates(sequence)"
    ]
  },
  {
    type: "paragraph",
    text: "这一路线的重点在于，完整拓扑条件在生成前被编码为稳定上下文，几何生成阶段持续读取同一份图表征。房间数量增加、连接关系变复杂或坐标序列变长时，拓扑信息仍然保持清晰来源。"
  },
  { type: "heading", text: "对齐图节点与坐标序列" },
  {
    type: "paragraph",
    text: "拓扑图的基本单位是节点，几何生成的基本单位则是坐标 token。一个房间节点对应四个连续坐标，多个相同类别的房间还可能同时出现。例如，平面中存在三个卧室时，仅凭 <code>bedroom</code> 这一类别标记，模型很难判断当前生成的是哪一个卧室的哪一条边界。"
  },
  { type: "paragraph", text: "为此，我在几何解码中加入节点身份与坐标角色编码：" },
  {
    type: "list",
    items: [
      "节点身份用于标识当前坐标属于哪一个房间或门；",
      "坐标角色用于标识当前 token 表示左边界、上边界、右边界或下边界；",
      "固定节点顺序将图中的对象与几何序列中的位置连接起来。"
    ]
  },
  { type: "paragraph", text: "这使模型能够明确区分：" },
  {
    type: "code",
    lines: [
      "coord_token = {",
      "    node_id: target_node,",
      "    role: left | top | right | bottom,",
      "    value: coordinate_bin",
      "}"
    ]
  },
  {
    type: "paragraph",
    text: "图结构提供连接关系，身份编码提供对应关系，几何序列最终形成可编辑的空间结果。"
  },
  { type: "heading", text: "从真实数据中构建训练样本" },
  {
    type: "paragraph",
    text: "实验基于 RPLAN 住宅平面数据集开展。为了适配矢量化边界框生成任务，我对原始样本进行了进一步处理：将房间与门统一转换为边界框表达，清理连接关系异常、门位置不合法或无法形成完整拓扑条件的样本，并为每个平面保留对应的泡泡图关系。"
  },
  {
    type: "paragraph",
    text: "这一数据处理过程直接影响模型能否学习可靠的空间关系。门是否真实连接两个相邻房间，入口是否落在外部边界上，房间关系图是否保持连通，都会影响后续拓扑条件的有效性。"
  },
  {
    type: "figure",
    image: "images/r2-4.jpg",
    label: "数据集处理示意",
    caption: "真实住宅平面经过结构清理与几何转换后，形成可用于拓扑条件矢量生成的训练样本。"
  },
  { type: "noteLabel", text: "Data Preparation" },
  {
    type: "code",
    lines: [
      "for plan in RPLAN:",
      "    rooms, doors = extract_geometry(plan)",
      "    boxes = to_bounding_boxes(rooms, doors)",
      "    graph = build_topology(rooms, doors)",
      "    if is_valid(graph, boxes):",
      "        cache(graph, vector_sequence(boxes))"
    ]
  },
  { type: "heading", text: "从真实性、多样性与复杂度评估生成结果" },
  {
    type: "paragraph",
    text: "对于住宅平面生成，仅观察图像是否整齐远远不够。一个视觉上规整的方案，如果门连接错误、房间关系违反输入条件，仍然无法满足设计需求。因此，评估需要同时关注视觉质量、拓扑关系和生成复杂度。"
  },
  { type: "paragraph", text: "结合对比表，实验主要从三个结果指标和两个范式维度展开：" },
  {
    type: "list",
    items: [
      "<strong>真实性</strong>：生成平面在整体分布上是否接近真实住宅样本，数值越高越好；",
      "<strong>多样性与复杂度</strong>：结果是否避免过度发散，同时保持较低的形态复杂度，数值越低越稳定；",
      "<strong>拓扑约束范式</strong>：方法是依赖显式图约束、耦合式约束，还是形成稳定图表征；",
      "<strong>几何生成范式</strong>：方法采用对抗生成、扩散生成，还是自回归矢量生成。"
    ]
  },
  {
    type: "paragraph",
    text: "在混合训练设定下，模型同时学习具有不同房间数量的平面布局，并在未见过的拓扑组合上进行测试。这更接近真实使用情境：系统应当能够面对不同规模、不同连接方式的住宅需求，不局限于固定房间数量的单一任务。"
  },
  {
    type: "paragraph",
    text: "对比结果显示，基于稳定图表征和自回归生成的方案在真实性指标上达到 0.76，同时将多样性与复杂度控制在更低水平。相比显式图约束或耦合式约束，稳定图表征能够更持续地参与几何生成过程，使拓扑条件从输入提示升级为整个解码过程中的结构上下文。"
  },
  {
    type: "table",
    label: "与既有住宅平面生成方法对比",
    columns: ["Method", "Realism ↑", "Diversity ↓", "Complexity ↓", "Topology Constraint", "Geometry Generation"],
    rows: [
      ["HouseGAN++", "0.12", "17.9/0.2", "2.7/0.1", "Explicit graph constraints", "Adversarial generation"],
      ["PanopticRefine", "0.46", "16.3/0.4", "2.5/0.1", "Coupled constraints", "Autoregressive generation"],
      ["HouseDiffusion", "0.67", "10.5/0.2", "2.0/0.0", "Coupled constraints", "Diffusion generation"],
      ["Ours", "0.76", "9.2/0.2", "1.6/0.0", "Stable graph representation", "Autoregressive generation"]
    ]
  },
  { type: "heading", text: "从平面生成到空间结构表达" },
  {
    type: "paragraph",
    text: "这项研究关注的对象是住宅平面，但其中的问题具有更普遍的意义。许多设计任务都存在类似关系：输入首先以结构或关系形式出现，输出则需要转换为可编辑的几何结果。"
  },
  {
    type: "paragraph",
    text: "泡泡图表达空间意图，矢量平面表达空间形态。两者之间的连接，决定生成模型能否真正参与设计过程。通过预先学习完整拓扑、在几何生成阶段持续读取稳定图条件，模型能够更可靠地将功能关系保留到最终布局中。"
  },
  {
    type: "paragraph",
    text: "对于建筑设计而言，这意味着生成结果可以从视觉参考进一步转向结构可控、关系可核验、结果可编辑的工作对象。"
  },
  { type: "heading", text: "结语" },
  {
    type: "paragraph",
    text: "本研究建立了一条从空间拓扑到矢量几何的生成流程：房间与门的关系首先被编码为稳定的图表征，随后由条件自回归模型逐步生成可编辑的平面坐标，并通过节点身份对齐维持拓扑对象与几何结果之间的对应。"
  },
  {
    type: "paragraph",
    text: "它延续了我在可控建筑生成中的一个核心关注点：设计信息需要以明确、稳定的方式进入模型。立面生成中，这类信息体现为窗、门与轮廓构成的语义控制图；平面生成中，它进一步转化为房间、门与连通关系组成的拓扑条件。"
  },
  {
    type: "paragraph",
    text: "当结构关系能够被模型持续读取，生成结果才更接近可操作的设计方案。"
  }
];

const researchArticles = [
  {
    title: "建筑立面语义识别与分割",
    modalTitle: "从实例分割到语义控制图：建筑立面检测、分割与可控生成流程",
    role: "西安建筑科技大学 | 研究助理",
    period: "2023.06 - 2024.06",
    theme: "facade",
    coverImage: "images/r1-1.jpg",
    tags: ["GroundingDINO", "SAM", "ControlNet"],
    blocks: facadeArticleBlocks
  },
  {
    title: "可编辑住宅平面生成",
    modalTitle: "从房间关系到可编辑平面：拓扑约束下的矢量布局生成",
    role: "华南理工大学 | 研究助理",
    period: "2025.12 - 2026.03",
    theme: "plan",
    coverImage: "images/r2-1.jpg",
    tags: ["GraphMAE2", "GPT-1", "SVG"],
    blocks: planArticleBlocks
  }
];

const projectsGrid = document.getElementById("projects-grid");
const researchList = document.getElementById("research-list");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const stickyNav = document.querySelector(".sticky-nav");
const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalMediaWrapper = document.getElementById("modalMediaWrapper");
const modalExternal = document.getElementById("modalExternal");
const modalGithub = document.getElementById("modalGithub");
const modalDouyin = document.getElementById("modalDouyin");
const closeModalButton = document.getElementById("closeModal");
const articleModal = document.getElementById("articleModal");
const articleTitle = document.getElementById("articleTitle");
const articleMeta = document.getElementById("articleMeta");
const articleBody = document.getElementById("articleBody");
const closeArticleModalButton = document.getElementById("closeArticleModal");
const emailToggle = document.getElementById("emailToggle");
const emailReveal = document.getElementById("emailReveal");

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderArticleBlocks(blocks) {
  return blocks.map((block) => {
    if (block.type === "lead") {
      return `
        <div class="article-lead">
          <strong>${block.title}</strong>
          <em>${block.subtitle}</em>
        </div>
      `;
    }

    if (block.type === "heading") {
      return `<h3 class="article-section-title">${block.text}</h3>`;
    }

    if (block.type === "quote") {
      return `<blockquote class="article-quote">${block.text}</blockquote>`;
    }

    if (block.type === "noteLabel") {
      return `<div class="article-note-label">${block.text}</div>`;
    }

    if (block.type === "list") {
      return `<ul class="article-list">${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    }

    if (block.type === "code") {
      return `<pre class="article-code"><code>${block.lines.join("\n")}</code></pre>`;
    }

    if (block.type === "figure") {
      return `
        <figure class="article-hero-image article-inline-figure">
          <img src="${block.image}" alt="${block.label}">
          <figcaption>${block.label}</figcaption>
        </figure>
      `;
    }

    if (block.type === "placeholderFigure") {
      return `
        <figure class="article-hero-image article-inline-figure article-figure-placeholder">
          <div class="article-placeholder-box">${block.label}</div>
          <figcaption>${block.label}</figcaption>
        </figure>
      `;
    }

    if (block.type === "table") {
      const header = block.columns.map((column) => `<th>${column}</th>`).join("");
      const rows = block.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("");

      return `
        <figure class="article-table-figure">
          <div class="article-table-scroll">
            <table class="article-comparison-table">
              <thead><tr>${header}</tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
          <figcaption>${block.label}</figcaption>
        </figure>
      `;
    }

    return `<p>${block.text}</p>`;
  }).join("");
}

function renderArticleContent(article) {
  if (article.blocks) {
    return `<div class="article-scroll-text article-rich-text">${renderArticleBlocks(article.blocks)}</div>`;
  }

  const paragraphs = article.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  const cover = article.coverImage
    ? `
      <figure class="article-hero-image">
        <img src="${article.coverImage}" alt="">
        <figcaption>${article.imageCaption || article.title}</figcaption>
      </figure>
    `
    : "";

  return `${cover}<div class="article-scroll-text">${paragraphs}</div>`;
}

function buildCardLinks(project) {
  const links = [];
  if (project.githubUrl) {
    links.push(`<a href="${project.githubUrl}" target="_blank" rel="noreferrer" aria-label="GitHub" data-stop-modal="true"><i class="fab fa-github"></i></a>`);
  }
  if (project.douyinUrl) {
    links.push(`<a href="${project.douyinUrl}" target="_blank" rel="noreferrer" aria-label="抖音" data-stop-modal="true"><i class="fab fa-tiktok"></i></a>`);
  }
  return links.length ? `<div class="card-links spotlight-card-links">${links.join("")}</div>` : "";
}

function renderProjectCard(project, index) {
  const panelLabels = [
    project.labels[0] || project.subtitle,
    project.labels[1] || project.title,
    project.labels[2] || project.period
  ];

  return `
    <article class="card card-spotlight project-theme-${project.theme}" data-project-index="${index}" tabindex="0" role="button" aria-label="打开 ${project.title} 的详情">
      <div class="spotlight-cover">
        <div class="spotlight-cover-top">
          <div class="spotlight-panel panel-script"><span>${panelLabels[0]}</span></div>
          <div class="spotlight-panel panel-core"><span>${panelLabels[1]}</span></div>
          <div class="spotlight-panel panel-flow"><span>${panelLabels[2]}</span></div>
        </div>
        <div class="spotlight-cover-bottom">
          <div class="spotlight-copy">
            <p class="spotlight-meta">${project.period} · ${project.subtitle}</p>
            <h3>${project.title}</h3>
            <p class="spotlight-description">${project.shortDescription}</p>
          </div>
          <div class="spotlight-actions">
            ${buildCardLinks(project)}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderProjects() {
  if (!projectsGrid) {
    return;
  }

  projectsGrid.innerHTML = projects.map(renderProjectCard).join("");

  projectsGrid.querySelectorAll(".card-spotlight").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("[data-stop-modal='true']")) {
        event.stopPropagation();
        return;
      }
      openProjectModal(Number(card.dataset.projectIndex));
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectModal(Number(card.dataset.projectIndex));
      }
    });
  });
}

function renderResearchArticles() {
  if (!researchList) {
    return;
  }

  researchList.innerHTML = researchArticles.map((article, index) => {
    const tags = article.tags.map((tag) => `<span>${tag}</span>`).join("");
    const visual = article.coverImage
      ? `<img class="research-cover-image" src="${article.coverImage}" alt="">`
      : `
          <div class="research-visual-frame">
            <div class="research-visual-grid"></div>
            <div class="research-visual-mask mask-a"></div>
            <div class="research-visual-mask mask-b"></div>
          </div>
        `;
    return `
      <article class="research-card research-theme-${article.theme}" data-research-index="${index}" tabindex="0" role="button" aria-label="阅读 ${article.title}">
        <div class="research-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="research-visual" aria-hidden="true">${visual}</div>
        <div class="research-content">
          <p class="research-meta">${article.role} · ${article.period}</p>
          <h3>${article.title}</h3>
          <div class="research-tags">${tags}</div>
        </div>
        <span class="research-read-more">阅读全文</span>
      </article>
    `;
  }).join("");

  researchList.querySelectorAll(".research-card").forEach((card) => {
    card.addEventListener("click", () => openResearchArticle(Number(card.dataset.researchIndex)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openResearchArticle(Number(card.dataset.researchIndex));
      }
    });
  });
}

function setProjectLink(element, url, label, iconClass) {
  if (!element) {
    return;
  }
  if (!url) {
    element.style.display = "none";
    return;
  }
  element.href = url;
  element.innerHTML = `<i class="${iconClass}"></i>${label ? ` ${label}` : ""}`;
  element.style.display = "inline-flex";
}

function resolveDemoEmbedSrc(project) {
  return project.demoUrl || "";
}

function renderProjectStage(project) {
  if (project.demoUrl) {
    return `
      <div class="modal-live-stage">
        <iframe class="modal-stage-iframe" src="${resolveDemoEmbedSrc(project)}" title="${project.title}" loading="lazy"></iframe>
      </div>
    `;
  }

  const labels = project.labels.map((label) => `<span>${label}</span>`).join("");
  return `
    <div class="modal-live-stage modal-placeholder-stage project-theme-${project.theme}">
      <div class="modal-placeholder-main">
        <div class="modal-placeholder-grid"></div>
        <div class="visual-node node-a"></div>
        <div class="visual-node node-b"></div>
        <div class="visual-node node-c"></div>
        <div class="visual-line line-a"></div>
        <div class="visual-line line-b"></div>
      </div>
      <div class="modal-placeholder-side">
        <p>${project.period}</p>
        <h3>${project.subtitle}</h3>
        <div class="visual-chip-row">${labels}</div>
      </div>
    </div>
  `;
}

function openProjectModal(projectIndex) {
  const project = projects[projectIndex];
  if (!project || !projectModal) {
    return;
  }

  modalTitle.textContent = project.title;
  modalDescription.innerHTML = renderParagraphs(project.fullDescription);
  modalMediaWrapper.innerHTML = renderProjectStage(project);
  setProjectLink(modalExternal, project.demoUrl, "", "fa-solid fa-arrow-up-right-from-square");
  setProjectLink(modalGithub, project.githubUrl, "查看 GitHub", "fab fa-github");
  setProjectLink(modalDouyin, project.douyinUrl, "查看抖音", "fab fa-tiktok");

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  if (!projectModal) {
    return;
  }
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openResearchArticle(articleIndex) {
  const article = researchArticles[articleIndex];
  if (!article || !articleModal) {
    return;
  }

  if (articleMeta) {
    articleMeta.textContent = `${article.role} · ${article.period}`;
  }
  articleTitle.textContent = article.modalTitle || article.title;
  articleBody.innerHTML = renderArticleContent(article);

  articleModal.classList.add("is-open");
  articleModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeResearchArticle() {
  if (!articleModal) {
    return;
  }
  articleModal.classList.remove("is-open");
  articleModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function syncNavState() {
  if (!hamburger || !navLinks) {
    return;
  }
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  if (!expanded) {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function handleAnchorClick(event) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target || !stickyNav) {
      return;
    }

    event.preventDefault();
    const navHeight = stickyNav.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
    window.scrollTo({
      top: targetTop,
      behavior: "smooth"
    });

    if (hamburger && navLinks) {
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("active");
    }
  });
});

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(!expanded));
  });
}

window.addEventListener("click", (event) => {
  if (hamburger && navLinks && !hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }

  if (event.target === projectModal) {
    closeProjectModal();
  }

  if (event.target === articleModal) {
    closeResearchArticle();
  }
});

if (closeModalButton) {
  closeModalButton.addEventListener("click", closeProjectModal);
}

if (closeArticleModalButton) {
  closeArticleModalButton.addEventListener("click", closeResearchArticle);
}

if (emailToggle && emailReveal) {
  emailToggle.addEventListener("click", () => {
    const expanded = emailToggle.getAttribute("aria-expanded") === "true";
    emailToggle.setAttribute("aria-expanded", String(!expanded));
    emailReveal.classList.toggle("is-open", !expanded);
    emailReveal.setAttribute("aria-hidden", String(expanded));
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
    closeResearchArticle();
  }
});

window.addEventListener("scroll", syncNavState);

renderProjects();
renderResearchArticles();
syncNavState();
