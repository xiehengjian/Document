(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{576:function(t,_,a){"use strict";a.r(_);var v=a(4),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基于光场图像的透明及反射平面深度估计网络模型设计与实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于光场图像的透明及反射平面深度估计网络模型设计与实现"}},[t._v("#")]),t._v(" 基于光场图像的透明及反射平面深度估计网络模型设计与实现")]),t._v(" "),a("h2",{attrs:{id:"研究背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#研究背景"}},[t._v("#")]),t._v(" 研究背景")]),t._v(" "),a("p",[t._v("随着人工智能技术的兴起，虚拟现实、增强现实、立体3D视频等技术发展迅速，各类应用层出不穷。而在诸多应用中，如何获取场景的深度一直是研究的终点。")]),t._v(" "),a("h3",{attrs:{id:"深度估计的应用价值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深度估计的应用价值"}},[t._v("#")]),t._v(" 深度估计的应用价值")]),t._v(" "),a("ul",[a("li",[t._v("目标识别")]),t._v(" "),a("li",[t._v("显著性检测")]),t._v(" "),a("li",[t._v("超分辨率重建")]),t._v(" "),a("li",[t._v("3D表面重建")]),t._v(" "),a("li",[t._v("三维重建")]),t._v(" "),a("li",[t._v("实时图像提取")]),t._v(" "),a("li",[t._v("AR")])]),t._v(" "),a("h3",{attrs:{id:"深度估计的现状"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深度估计的现状"}},[t._v("#")]),t._v(" 深度估计的现状")]),t._v(" "),a("h4",{attrs:{id:"主动式深度信息获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主动式深度信息获取"}},[t._v("#")]),t._v(" 主动式深度信息获取")]),t._v(" "),a("blockquote",[a("p",[t._v("技术成熟，但设备价格昂贵")])]),t._v(" "),a("ul",[a("li",[t._v("阴影法")]),t._v(" "),a("li",[t._v("TOF相机")]),t._v(" "),a("li",[t._v("结构光法")]),t._v(" "),a("li",[t._v("激光雷达")])]),t._v(" "),a("h4",{attrs:{id:"被动式深度信息获取方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#被动式深度信息获取方式"}},[t._v("#")]),t._v(" 被动式深度信息获取方式")]),t._v(" "),a("blockquote",[a("p",[t._v("将观察所得的图像数据直接作为输入，以数据驱动的方式复原场景的空间几何信息，对设备依赖较小，更具有实用性")])]),t._v(" "),a("h5",{attrs:{id:"二维图像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二维图像"}},[t._v("#")]),t._v(" 二维图像")]),t._v(" "),a("ul",[a("li",[t._v("单目视觉")])]),t._v(" "),a("blockquote",[a("p",[t._v("从单张二维图像中提取场景的深度信息")])]),t._v(" "),a("ul",[a("li",[t._v("双目或多目立体视觉")])]),t._v(" "),a("blockquote",[a("p",[t._v("利用三角测量原理从2张或多张二维图像中获取场景的深度信息")])]),t._v(" "),a("p",[t._v("传统的深度估计方法主要基于二维图像的像素信息来进行计算")]),t._v(" "),a("h5",{attrs:{id:"光场图像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#光场图像"}},[t._v("#")]),t._v(" 光场图像")]),t._v(" "),a("blockquote",[a("p",[t._v("思维光场能够提高更多的有效信息因而更具显著优势")])]),t._v(" "),a("p",[t._v("光场图像记录的不是一个个像素值，而是一条条的光线的矢量值，")]),t._v(" "),a("p",[t._v("因此在先天的信息量上，光场图像相比二维图像就具有显著优势。")]),t._v(" "),a("p",[t._v("随着光场成像技术的发展与成熟，光场深度估计收到越来越多的关注。")]),t._v(" "),a("ul",[a("li",[t._v("对极平面")]),t._v(" "),a("li",[t._v("多视角")]),t._v(" "),a("li",[t._v("重聚焦")])]),t._v(" "),a("h4",{attrs:{id:"主要场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要场景"}},[t._v("#")]),t._v(" 主要场景")]),t._v(" "),a("ul",[a("li",[t._v("以上介绍的方案主要针对的都是单平面的深度估计，即成像中只有像平面。")]),t._v(" "),a("li",[t._v("而在现实场景中，常常会遇到物体被透明物体遮盖的情况，如玻璃展示柜等，对于此类场景，目前只有光场图像可以较好的解决该问题。")])]),t._v(" "),a("h3",{attrs:{id:"深度估计的理论价值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深度估计的理论价值"}},[t._v("#")]),t._v(" 深度估计的理论价值")]),t._v(" "),a("ul",[a("li",[t._v("因为，在老师的指导下，我们提出了基于卷积神经网络的双平面深度估计模型，该模型结合了光场图像、深度学习等前沿工程与理论知识，旨在解决目前尚未得到解决的双平面深度估计问题。")])]),t._v(" "),a("h2",{attrs:{id:"研究内容-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#研究内容-原理"}},[t._v("#")]),t._v(" 研究内容(原理)")]),t._v(" "),a("h3",{attrs:{id:"光场"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#光场"}},[t._v("#")]),t._v(" 光场")]),t._v(" "),a("blockquote",[a("p",[t._v("指光辐射在空间场景中的各个坐标向不同方向的传播，即光在每一点通过每个方向的辐射量")])]),t._v(" "),a("h4",{attrs:{id:"双平面参数化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双平面参数化"}},[t._v("#")]),t._v(" 双平面参数化")]),t._v(" "),a("p",[t._v("假设存在两个平行的平面，每条光线由其与这两个平面的坐标(x,y)和(s,t)表示。")]),t._v(" "),a("p",[t._v("可将st平面理解为视角平面(相当于相机阵列采集方式的相机阵列平面)")]),t._v(" "),a("p",[t._v("xy平面可理解为从st平面不同位置观察到的子孔径图像的集合。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/Users/creative/Downloads/SDSX20200907000_99.jpg",alt:"SDSX20200907000_99"}})]),t._v(" "),a("h3",{attrs:{id:"光场相机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#光场相机"}},[t._v("#")]),t._v(" 光场相机")]),t._v(" "),a("p",[t._v("光场相机布满了类似蜻蜓副眼一样的微棱镜，从此记录的不再是像素值，而是一条条光线的矢量值")]),t._v(" "),a("p",[a("img",{attrs:{src:"/Users/creative/Downloads/9261bb1d977fb0226ff3042e16b3c9d5_b.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"epi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epi"}},[t._v("#")]),t._v(" EPI")]),t._v(" "),a("p",[t._v("利用对极平面图像中的直线斜率与深度的关系，通过求直线的斜率来间接获得场景的深度。对极平面图像是把三维场景点投影到不同视角的投影点收集成的直线所组成的二维图像，它反映了当相机沿某一方向变换时场景点在子孔径图像中的运动轨迹。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.hjxie.icu/SDSX20200907000_116.jpg",alt:"SDSX20200907000_116"}})]),t._v(" "),a("p",[t._v("$Z=-f\\dfrac{\\Delta s}{\\Delta x}=-ftan\\theta$")]),t._v(" "),a("h3",{attrs:{id:"透明平面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#透明平面"}},[t._v("#")]),t._v(" 透明平面")]),t._v(" "),a("p",[t._v("当物体被透明玻璃所遮挡时，传统的基于像素的深度估计方法无法区别真实物体与玻璃板，因此识别精度较差，而通过光场图片中记录的光线信息可以用来计算玻璃板与观测物体，但是传统的计算算法在精度与速度上仍有待提高，因此我们设想使用深度学习的方法来对光线特征进行提取，使得机器在充足的信息中学习到合理的计算方式。")]),t._v(" "),a("h2",{attrs:{id:"工作内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作内容"}},[t._v("#")]),t._v(" 工作内容")]),t._v(" "),a("p",[t._v("设计了适用于光场图像的卷积神经网络网络模型，使用深度学习的方法计算光场图像中场景的深度。")]),t._v(" "),a("p",[t._v("输入层")]),t._v(" "),a("p",[t._v("使用水平、竖直、左右倾斜四个方向的EPI信息作为网络输入")]),t._v(" "),a("p",[t._v("多流卷积层")]),t._v(" "),a("p",[t._v("使用三个卷积块，对输入层输入的四个方向的EPI信息经过低阶特征提取")]),t._v(" "),a("p",[t._v("混合卷积层")]),t._v(" "),a("p",[t._v("将提取的低阶特征进行融合，并且将特征的大小放大四倍，并对合并后的特征使用8个卷积块来对融合后的特征进行高阶特征提取")]),t._v(" "),a("p",[t._v("输出层")]),t._v(" "),a("p",[t._v("将学习完毕的特征转化为初始深度图。为了进一步提高估计精度，将两幅深度图拼接进行卷积操作，一次计算即可得到整幅深度图")]),t._v(" "),a("h2",{attrs:{id:"进展情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进展情况"}},[t._v("#")]),t._v(" 进展情况")]),t._v(" "),a("h2",{attrs:{id:"后续安排预期成果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续安排预期成果"}},[t._v("#")]),t._v(" 后续安排预期成果")]),t._v(" "),a("p",[t._v("论文")])])}),[],!1,null,null,null);_.default=s.exports}}]);