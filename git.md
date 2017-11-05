# Git 指令简析
## commit
```git commit -m “提交的描述信息”```   
如果没有-m参数，则会进入文本编辑器模式，输入提交的描述信息   
```git commit -a -m "提交的描述信息"```   
将所有已经被git管理，同时被修改或者被删除的文档提交到repository,(git add . 是添加所有变动的文档)  
```git commit --amend```  
修改已经提交过的注释，编辑后保存退出，再重新push即可(好像对一段时间后的操作无效）  
