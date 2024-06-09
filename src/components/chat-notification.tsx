import IconWarning from '@/assets/images/warning.svg'
import { ChatError, ErrorCode, ChatMessageModel } from '@/lib/bots/bing/types'
import { ExternalLink } from './external-link'
import { BingReturnType } from '@/lib/hooks/use-bing'
import { SVG } from './ui/svg'

export interface ChatNotificationProps extends Pick<BingReturnType, 'bot'> {
  message?: ChatMessageModel
}

function getAction(error: ChatError, reset: () => void) {
  if (error.code === ErrorCode.THROTTLE_LIMIT) {
    reset()
    return (
      <div>
        Số lượng yêu cầu quá nhanh và bị hạn chế. Vui lòng thử lại sau...
      </div>
    )
  }
  if (error.code === ErrorCode.BING_IP_FORBIDDEN) {
    return (
      <a href={`#dialog="reset"`}>
        Máy chủ hoặc proxy của bạn đã bị cấm, vui lòng thay đổi máy chủ hoặc sử dụng proxy để thử lại
      </a>
    )
  }
  if (error.code === ErrorCode.BING_TRY_LATER) {
    return (
      <a href={`#dialog="reset"`}>
        Yêu cầu không thành công, vui lòng thử lại theo cách thủ công
      </a>
    )
  }
  if (error.code === ErrorCode.BING_FORBIDDEN) {
    return (
      <ExternalLink href=".">
        .
      </ExternalLink>
    )
  }
  if (error.code === ErrorCode.CONVERSATION_LIMIT) {
    return (
      <div>
        Chủ đề hiện tại đã bị tạm dừng, vui lòng nhấp vào
        <a href={`#dialog="reset"`}>Đặt lại</a>
        Bắt đầu cuộc trò chuyện mới
      </div>
    )
  }
  if (error.code === ErrorCode.BING_CAPTCHA) {
    return (
      <ExternalLink href="https://www.bing.com/turing/captcha/challenge">
        Nhấp để vượt qua xác minh người-máy
      </ExternalLink>
    )
  }
  if (error.code === ErrorCode.BING_UNAUTHORIZED) {
    reset()
    return (
      <a href={`#dialog="settings"`}>.</a>
    )
  }
  if (error.code === ErrorCode.BING_IMAGE_UNAUTHORIZED) {
    reset()
    return (
      <a href={`#dialog="settings"`}>.</a>
    )
  }
  return error.message
}

export function ChatNotification({ message, bot }: ChatNotificationProps) {
  if (!message?.error) return

  return (
    <div
      className="notification-container"
    >
      <div className="bottom-notifications">
        <div className="inline-type with-decorative-line">
          <div className="text-container mt-1">
            <div className="title inline-flex items-start">
              <SVG alt="error" src={IconWarning} width={20} className="mr-1 mt-1" />
              {getAction(message.error, () => bot.resetConversation())}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
