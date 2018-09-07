# html与css知识点补充

标签（空格分隔）： html

---

iframe——内联框架
---
设置此项后，在chrome调试中可以看到在iframe中出现`<html><head></head><body><body></html>`字样。

可以设置height、width、src（引入文件的url）等属性。

当希望此项中没有src引入时，在屏幕上显示“此处无信息”时，可以这样写。

 - html：
 
---

        <div class="right-viewer-container" data-dojo-attach-point="winViewerContainer">
        <iframe src="" frameborder="0" width="100%" height="100%" data-dojo-attach-point="iframeViewer"></iframe>
       <div class="right-viewer-container-tips" data-dojo-attach-point="divViewer">此处无信息</div>
       </div>

  - js：

---
    initDetail: function() {
        this.createTable(this._projectData);
        if (this._projectData && this._projectData.url) {
            var url = this._projectData.url;
            this.iframeViewer.src = url;
            this.divViewer.style.display = "none";
        } else {
            this.divViewer.style.display = "block";
        }
    },

---

display:none 与 visibility:hidden的区别
---
两者都可以隐藏元素，但

 - visibility:hidden虽然隐藏了某个元素，但该元素还是会占据空间，影响布局；
 - display:none隐藏的元素不会占用任何空间，原本占用的空间也会从页面布局中消失。

---


