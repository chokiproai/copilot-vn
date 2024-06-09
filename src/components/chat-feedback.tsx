import { useEffect } from "react"
import { toast } from "react-hot-toast"
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard"
import { SVG } from "./ui/svg"
import CopyIcon from '@/assets/images/copy.svg'


interface ChatFeedbackProps {
  text: string
}
export function ChatFeedback({ text }: ChatFeedbackProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

  useEffect(() => {
    if (isCopied) {
      toast.success('Đã sao chép thành công')
    }
  }, [isCopied])
  return text ? (
    <div className="chat-feedback">
      <div className="chat-feedback-container">
        <button type="button" role="button" aria-label="Sao chép" title="Sao chép" onClick={() => copyToClipboard(text)}>
          <SVG src={CopyIcon} width={24} />
          <div>Sao chép</div>
        </button>
      </div>
    </div>
  ) : null
}
