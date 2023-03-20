const got = require('got')
const YAML = require('yaml')
const fs = require('fs')
const url = YAML.parse(fs.readFileSync(process.cwd() + '/config.yml', 'utf8'))['go-cqhttp'].api_url

exports.获取登录号信息 = async function() {
    const result = await got(url + "get_login_info").json()
    return result
}

exports.设置登录号资料 = function(nickname, company, email, college, personal_note) {
    got.post(url + "set_qq_profile",{
        json: {
            nickname: nickname,
            company: company,
            email: email,
            college: college,
            personal_note: personal_note
        }
    }).json()
}

exports.获取企点账号信息 = async function() {
    const result = await got(url + "qidian_get_account_info").json()
    return result
}

exports.获取在线机型 = async function(model) {
    const result = await got.post(url + "_get_model_show",{
        json: {
            model: model
        }
    }).json()
    return result
}

exports.设置在线机型 = function(model, model_show) {
    got.post(url + "_set_model_show",{
        json: {
            model: model,
            model_show: model_show
        }
    }).json()
}

exports.获取当前账号在线客户端列表 = async function(no_cache) {
    const result = await got.post(url + "get_online_clients",{
        json: {
            no_cache: no_cache
        }
    }).json()
    return result
}

exports.获取陌生人信息 = async function(user_id, no_cache) {
    const result = await got.post(url + "get_stranger_info",{
        json: {
            user_id: user_id,
            no_cache: no_cache
        }
    }).json()
    return result
}

exports.获取好友列表 = async function() {
    const result = await got(url + "get_friend_list").json()
    return result
}

exports.获取单向好友列表 = async function() {
    const result = await got(url + "get_unidirectional_friend_list").json()
    return result
}

exports.删除好友 = function(user_id) {
    got.post(url + "delete_friend",{
        json: {
            user_id: user_id
        }
    }).json()
}

exports.删除单向好友 = function(user_id) {
    got.post(url + "delete_unidirectional_friend",{
        json: {
            user_id: user_id
        }
    }).json()
}

exports.发送私聊消息 = async function(user_id, group_id, message, auto_escape) {
    const result = await got.post(url + "send_private_msg",{
        json: {
            user_id: user_id,
            group_id: group_id,
            message: message,
            auto_escape: auto_escape
        }
    }).json()
    return result
}

exports.发送群聊消息 = async function(group_id, message, auto_escape) {
    const result = await got.post(url + "send_group_msg",{
        json: {
            group_id: group_id,
            message: message,
            auto_escape: auto_escape,
        }
    }).json()
    return result
}

exports.发送消息 = async function(message_type, user_id, group_id, message, auto_escape) {
    const result = await got.post(url + "send_msg",{
        json: {
            message_type: message_type,
            user_id: user_id,
            group_id: group_id,
            message: message,
            auto_escape: auto_escape,
        }
    }).json()
    return result
}

exports.获取消息 = async function(message_id) {
    const result = await got.post(url + "get_msg",{
        json: {
            message_id: message_id
        }
    }).json()
    return result
}

exports.撤回消息 = function(message_id) {
    got.post(url + "delete_msg",{
        json: {
            message_id: message_id
        }
    }).json()
}

exports.标记消息已读 = function (message_id) {
    got.post(url + "mark_msg_as_read",{
        json: {
            message_id: message_id
        }
    }).json()
}

exports.获取合并转发内容 = async function(message_id) {
    const result = await got.post(url + "get_forward_msg",{
        json: {
            message_id: message_id
        }
    }).json()
    return result
}

exports.发送合并转发_群聊 = async function(group_id, message) {
    const result = await got.post(url + "send_group_forward_msg",{
        json: {
            group_id: group_id,
            message: message
        }
    }).json()
    return result
}

exports.发送合并转发_好友 = async function(user_id, messages) {
    const result = await got.post(url + "send_private_forward_msg",{
        json: {
            user_id: user_id,
            messages: messages
        }
    }).json()
    return result
}

exports.获取群消息历史记录 = async function(message_id) {
    const result = await got.post(url + "get_group_msg_history",{
        json: {
            message_seq: message_seq,
            group_id: group_id
        }
    }).json()
    return result
}

exports.获取图片信息 = async function(file) {
    const result = await got.post(url + "get_image",{
        json: {
            file: file
        }
    }).json()
    return result
}

exports.检查是否可以发送图片 = async function() {
    const result = await got(url + "can_send_image").json()
    return result
}

exports.图片OCR1 = async function(image) {
    const result = await got.post(url + "ocr_image",{
        json: {
            image: image
        }
    }).json()
    return result
}

exports.图片OCR2 = async function(image) {
    const result = await got.post(url + ".ocr_image",{
        json: {
            image: image
        }
    }).json()
    return result
}

exports.检查是否可以发送语音 = async function() {
    const result = await got(url + "can_send_record").json()
    return result
}

exports.处理加好友请求 = function(flag, approve, remark) {
    got.post(url + "set_friend_add_request",{
        json: {
            flag: flag,
            approve: approve,
            remark: remark
        }
    }).json()
}

exports.处理加群请求 = function(flag, approve, remark) {
    got.post(url + "set_group_add_request",{
        json: {
            flag: flag,
            sub_type: "add",
            approve: approve,
            remark: remark
        }
    }).json()
}

exports.处理被邀请进群请求 = function(flag, approve, remark) {
    got.post(url + "set_group_add_request",{
        json: {
            flag: flag,
            sub_type: "invite",
            approve: approve,
            remark: remark
        }
    }).json()
}

exports.获取群信息 = async function(group_id, no_cache) {
    const result = await got.post(url + "get_group_info",{
        json: {
            group_id: group_id,
            no_cache: no_cache
        }
    }).json()
    return result
}

exports.获取群列表 = async function(no_cache) {
    const result = await got.post(url + "get_group_list",{
        json: {
            no_cache: no_cache
        }
    }).json()
    return result
}

exports.获取群成员信息 = async function(group_id, user_id, no_cache) {
    const result = await got.post(url + "get_group_member_info",{
        json: {
            group_id: group_id,
            user_id: user_id,
            no_cache: no_cache
        }
    }).json()
    return result
}

exports.获取群成员列表 = async function(group_id, no_cache) {
    const result = await got.post(url + "get_group_member_list",{
        json: {
            group_id: group_id,
            no_cache: no_cache
        }
    }).json()
    return result
}

exports.获取群荣誉信息 = async function(group_id, type) {
    const result = await got.post(url + "get_group_honor_info",{
        json: {
            group_id: group_id,
            type: type
        }
    }).json()
    return result
}

exports.获取群系统消息 = async function() {
    const result = await got(url + "get_group_system_msg").json()
    return result
}

exports.获取精华消息列表 = async function(group_id) {
    const result = await got.post(url + "get_essence_msg_list",{
        json: {
            group_id: group_id,
        }
    }).json()
    return result
}

exports.获取群艾特全体成员剩余次数 = async function(group_id) {
    const result = await got.post(url + "get_group_at_all_remain",{
        json: {
            group_id: group_id,
        }
    }).json()
    return result
}

exports.设置群名 = function(group_id, group_name) {
    got.post(url + "set_group_name",{
        json: {
            group_id: group_id,
            group_name: group_name
        }
    }).json()
}

exports.设置群头像 = function(group_id, file, cache) {
    got.post(url + "set_group_portrait",{
        json: {
            group_id: group_id,
            file: file,
            cache: cache
        }
    }).json()
}

exports.设置群管理员 = function(group_id, user_id, enable) {
    got.post(url + "set_group_admin",{
        json: {
            group_id: group_id,
            user_id: user_id,
            enable: enable
        }
    }).json()
}

exports.设置群名片 = function(group_id, user_id, card) {
    got.post(url + "set_group_card",{
        json: {
            group_id: group_id,
            user_id: user_id,
            card: card
        }
    }).json()
}

exports.设置群组专属头衔 = function(group_id, user_id, special_title, duration) {
    got.post(url + "set_group_special_title",{
        json: {
            group_id: group_id,
            user_id: user_id,
            special_title: special_title,
            duration: duration
        }
    }).json()
}

exports.群单人禁言 = function(group_id, user_id, duration) {
    got.post(url + "set_group_ban",{
        json: {
            group_id: group_id,
            user_id: user_id,
            duration: duration
        }
    }).json()
}

exports.群全员禁言 = function(group_id, enable) {
    got.post(url + "set_group_whole_ban",{
        json: {
            group_id: group_id,
            enable: enable
        }
    }).json()
}

exports.群匿名用户禁言 = function(group_id, anonymous, anonymous_flag) {
    got.post(url + "set_group_anonymous_ban",{
        json: {
            group_id: group_id,
            anonymous: anonymous,
            anonymous_flag: anonymous_flag
        }
    }).json()
}

exports.设置精华消息 = function(message_id) {
    got.post(url + "set_essence_msg",{
        json: {
            message_id: message_id
        }
    }).json()
}

exports.移出精华消息 = function(message_id) {
    got.post(url + "delete_essence_msg",{
        json: {
            message_id: message_id
        }
    }).json()
}

exports.群打卡 = function(group_id) {
    got.post(url + "send_group_sign",{
        json: {
            group_id: group_id
        }
    }).json()
}

exports.发送群公告 = function(group_id, content, image) {
    got.post(url + "_send_group_notice",{
        json: {
            group_id: group_id,
            content: content,
            image: image
        }
    }).json()
}

exports.获取群公告 = async function(group_id) {
    const result = await got.post(url + "_get_group_notice",{
        json: {
            group_id: group_id
        }
    }).json()
    return result
}

exports.群组踢人 = function(group_id, user_id, reject_add_request) {
    got.post(url + "set_group_kick",{
        json: {
            group_id: group_id,
            user_id: user_id,
            reject_add_request: reject_add_request
        }
    }).json()
}

exports.退出群组 = function(group_id, is_dismiss) {
    got.post(url + "set_group_leave",{
        json: {
            group_id: group_id,
            is_dismiss: is_dismiss
        }
    }).json()
}

exports.上传群文件 = function(group_id, file, name, folder) {
    got.post(url + "upload_group_file",{
        json: {
            group_id: group_id,
            file: file,
            name: name,
            folder: folder
        }
    }).json()
}

exports.删除群文件 = function(group_id, file_id, busid) {
    got.post(url + "upload_group_file",{
        json: {
            group_id: group_id,
            file_id: file_id,
            busid: busid
        }
    }).json()
}

exports.创建群文件文件夹 = function(group_id, name, parent_id) {
    got.post(url + "create_group_file_folder",{
        json: {
            group_id: group_id,
            name: name,
            parent_id: parent_id
        }
    }).json()
}

exports.删除群文件文件夹 = function(group_id, folder_id) {
    got.post(url + "delete_group_folder",{
        json: {
            group_id: group_id,
            folder_id: folder_id
        }
    }).json()
}

exports.获取群文件系统信息 = async function(group_id) {
    const result = await got.post(url + "get_group_file_system_info",{
        json: {
            group_id: group_id
        }
    }).json()
    return result
}

exports.获取群根目录文件列表 = async function(group_id) {
    const result = await got.post(url + "get_group_root_files",{
        json: {
            group_id: group_id
        }
    }).json()
    return result
}

exports.获取群子目录文件列表 = async function(group_id, folder_id) {
    const result = await got.post(url + "get_group_files_by_folder",{
        json: {
            group_id: group_id,
            folder_id: folder_id
        }
    }).json()
    return result
}

exports.获取群文件资源链接 = async function(group_id, file_id, busid) {
    const result = await got.post(url + "get_group_file_url",{
        json: {
            group_id: group_id,
            file_id: file_id,
            busid: busid
        }
    }).json()
    return result
}

exports.上传私聊文件 = function(user_id, file, name) {
    got.post(url + "upload_private_file",{
        json: {
            user_id: user_id,
            file: file,
            name: name
        }
    }).json()
}

exports.获取版本信息 = async function() {
    const result = await got(url + "get_version_info").json()
    return result
}

exports.获取状态 = async function() {
    const result = await got(url + "get_status").json()
    return result
}

exports.重载事件过滤器 = function(file) {
    const result = got.post(url + "reload_event_filter",{
        json: {
            file: file
        }
    }).json()
}

exports.下载文件到缓存目录 = async function(url, thread_count, headers) {
    const result = await got.post(url + "download_file",{
        json: {
            url: url,
            thread_count: thread_count,
            headers: headers
        }
    }).json()
    return result
}

exports.检查链接安全性 = async function(url) {
    const result = await got.post(url + "check_url_safely",{
        json: {
            url: url
        }
    }).json()
    return result
}

exports.获取群成员身份 = async function(group_id, user_id) {
    const result = await got.post(url + "get_group_member_info",{
        json: {
            group_id: group_id,
            user_id: user_id,
            no_cache: false
        }
    }).json()
    if (result.data.role == 'owner') {
        return 2    //群主
    }
    if (result.data.role == 'admin') {
        return 1    //管理
    }
    return 0    //普通群员
}

exports.bot是否在指定群内 = async function(group_id) {
    const result = await got.post(url + "get_group_list",{
        json: {
            no_cache: false
        }
    }).json()
    for (var i = 0; i < result.data.length; i++) {
        if (result.data[i].group_id == group_id) {
            return true
        }
    }
    return false
}