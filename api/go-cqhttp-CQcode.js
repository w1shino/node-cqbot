//CQcode
exports.转义 = function(message) {
    let text = message
    let result
    const code1 = '['
    result = text.replace(/&/g,"&amp;");
    result = result.replaceAll('[',"&#91;");
    result = result.replaceAll(']',"&#93;");
    result = result.replace(/,/g,"&#44;");
    return result
}

exports.QQ表情 = function(id) {
    return '[CQ:face,id=' + id + ']'
}

exports.语音 = function(file) {
    return '[CQ:record,file=' + file + ']'
}

exports.短视频 = function(file) {
    return '[CQ:video,file=' + file + ']'
}

exports.艾特 = function(qq) {
    return '[CQ:at,qq=' + qq + ']'
}

exports.艾特全体 = function() {
    return '[CQ:at,qq=all]'
}

exports.链接分享 = function(url, title) {//仅支持私聊
    return '[CQ:share,url=' + url + ',title=' + title + ']'
}

exports.音乐分享 = function(type, id) {
    return '[CQ:music,type=' + type + ',id=' + id + ']'
}

exports.音乐自定义分享 = function(type, url, audio, title) {
    return '[CQ:music,type=' + type + ',url=' + url + ',audio=' + audio + ',title=' + title +']'
}

exports.图片 = function(file, type, subType, url, cache, id, c) {
    return '[CQ:image,file='+ file +',type=' + type + ',subType=' + subType +',url=' + url +',cache=' + cache + ',id=' + id + ',c=' + c + ']'
}

exports.回复 = function(id) {
    return '[CQ:reply,id=' + id + ']'
}

exports.红包 = function(title) {
    return '[CQ:redbag,title=' + title + ']'
}

exports.戳一戳 = function(qq) {
    return '[CQ:poke,qq=' + qq + ']'
}

exports.礼物 = function(qq, id) {
    return '[CQ:gift,qq=' + qq + ',id=' + id + ']'
}

exports.合并转发 = function(id) {
    return '[CQ:forward,id=' + id + ']'
}

exports.XML消息 = function(data, resid) {
    return '[CQ:xml,data=' + data + ',resid=' + resid + ']'
}

exports.JSON消息 = function(data, resid) {
    return '[CQ:json,data=' + data + ',resid=' + resid + ']'
}

exports.cardimage = function(file, minwidth, minheight, maxwidth, maxheight, source, icon) {
    return '[CQ:cardimage,file=' + file + ',minwidth=' + minwidth + ',minheight=' + minheight + ',maxwidth=' + maxwidth + ',maxheight=' + maxheight + ',source=' + source + ',icon=' + icon + ']'
}

exports.文本转语音 = function(text) {
    return '[CQ:tts,text=' + text + ']'
}
