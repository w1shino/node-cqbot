//插件模板
const api = require('../api/go-cqhttp-api')
const CQcode = require('../api/go-cqhttp-CQcode')

exports.main = async function(req) {
    if (req.post_type == 'notice') {//通知上报 
        if (req.notice_type == 'friend_recall') {//私聊消息撤回
            
        }
        if (req.notice_type == 'group_recall') {//群消息撤回
            
        }
        if (req.notice_type == 'group_increase') {//群成员增加
            if (req.sub_type == 'approve') {//管理员已同意入群

            }
            if (req.sub_type == 'invite') {//管理员邀请入群

            }
        }
        if (req.notice_type == 'group_decrease') {//群成员减少
            if (req.sub_type == 'leave') {//主动退群

            }
            if (req.sub_type == 'kick') {//成员被踢

            }
            if (req.sub_type == 'kick_me') {//登录号被踢

            }
        }
        if (req.notice_type == 'group_admin') {//群管理员变动
            if (req.sub_type == 'set') {//设置管理员

            }
            if (req.sub_type == 'unset') {//取消管理员

            }
        }
        if (req.notice_type == 'group_upload') {//群文件上传

        }
        if (req.notice_type == 'group_ban') {//群禁言
            if (req.sub_type == 'ban') {//禁言

            }
            if (req.sub_type == 'lift_ban') {//解除禁言

            }
        }
        if (req.notice_type == 'friend_add') {//好友添加

        }
        if (req.notice_type == 'notify') {//群内触发其他事件
            if (req.sub_type == 'poke') {//戳一戳
                if (req.group_id == null) {//好友戳一戳（双击头像）
                
                } else {//群内戳一戳（双击头像）
    
                }
            }
            if (req.sub_type == 'lucky_king') {//群红包运气王提示

            }
            if (req.sub_type == 'honor') {//群成员荣誉变更提示

            }
            if (req.sub_type == 'title') {//群成员头衔变更

            }
            if (req.sub_type == 'group_card') {//群成员名片更新

            }
        }
        if (req.notice_type == 'offline_file') {//收到离线文件
            
        }
        if (req.notice_type == 'client_status') {//其他客户端在线状态变更
            
        }
        if (req.notice_type == 'essence') {//精华消息变更
            if (req.sub_type == 'add') {//添加

            }
            if (req.sub_type == 'delete') {//移出

            }
        }
    }
    if (req.post_type == 'message') {//消息上报
        if (req.message_type == 'private') {
            if (req.sub_type == 'friend') {//私聊消息
                //const data = await api.发送私聊消息(req.user_id, 0,'测试消息',false)
            }
            if (req.sub_type == 'group') {//群聊消息
                
            }
            if (req.sub_type == 'group_self') {//临时消息
                
            }
            if (req.sub_type == 'other') {//自身消息
                
            }
        }
    }
    if (req.post_type == 'request') {//请求上报
        if (req.request_type == 'group') {
            
        }
    }
}
