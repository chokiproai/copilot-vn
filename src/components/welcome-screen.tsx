import { BingReturnType } from '@/lib/hooks/use-bing'

const exampleMessages = [
  {
    heading: '🧐Đặt những câu hỏi phức tạp',
    message: `Đâu là một số chuyến tàu đẹp nhất với tầm nhìn toàn cảnh?`
  },
  {
    heading: '🙌 Nhận câu trả lời tốt hơn',
    message: 'Một số cách tôi có thể ưu tiên chăm sóc bản thân là gì?'
  },
  {
    heading: '🎨 Lấy cảm hứng sáng tạo',
    message: `Tạo hình ảnh Pop Art về một người phụ nữ đeo kính râm và đội mũ nồi`
  }
]

export function WelcomeScreen({ setInput }: Pick<BingReturnType, 'setInput'>) {
  return (
    <div className="welcome-container flex">
      {exampleMessages.map(example => (
        <button key={example.heading} className="welcome-item w-4/5 sm:w-[240px]" type="button" onClick={() => setInput(example.message)}>
          <div className="item-title">{example.heading}</div>
          <div className="item-content">
            <div className="item-body">
              <div className="item-header"></div>
              <div>&ldquo;{example.message}&rdquo;</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
