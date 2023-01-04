

import style from './Step1.module.scss'

const titleData = [
    {value: "mr", title: "先生"},
    {value: "ms", title: "女士"},
    {value: "mx", title: "不明"}
]

const locationData = [
  {value: "", title: "請選擇縣市"},
  {value: "KLU", title: "基隆市"},
  {value: "TPH", title: "新北市"},
  {value: "TPE", title: "臺北市"},
  {value: "TYC", title: "桃園市"},
  {value: "HSH", title: "新竹縣"},
  {value: "HSC", title: "新竹市"},
  {value: "MAC", title: "苗栗市"},
  {value: "MAL", title: "苗栗縣"},
  {value: "TXG", title: "臺中市"},
  {value: "CWH", title: "彰化縣"},
  {value: "CWS", title: "彰化市"},
  {value: "NTC", title: "南投市"},
  {value: "NTO", title: "南投縣"},
  {value: "YLH", title: "雲林縣"},
  {value: "CHY", title: "嘉義縣"},
  {value: "CYI", title: "嘉義市"},
  {value: "TNN", title: "臺南市"},
  {value: "KHH", title: "高雄市"},
  {value: "IUH", title: "屏東縣"},
  {value: "ILN", title: "宜蘭縣"},
  {value: "PTS", title: "宜蘭市"},
  {value: "HWA", title: "花蓮縣"},
  {value: "HWC", title: "花蓮市"},
  {value: "TTC", title: "臺東市"},
  {value: "TTT", title: "臺東縣"},
  {value: "PEH", title: "澎湖縣"},
  {value: "KMN", title: "金門縣"},
  {value: "LNN", title: "連江縣"},
]

export default function Step1 () {
  return (
    <section className={style.registerFormSection}>
      <h3 className="formTitle">寄送地址</h3>
      <form className={style.formContainer}>

        <SelectBox 
          className={`inputGroup ${style.title}`}
          label="稱謂"
          data={titleData}
        />

        <InputBox
          className={`inputGroup ${style.name}`}
          id="name"
          label="姓名"
          type="text"
          placeholder="請輸入姓名"
        />

        <InputBox
          className={`inputGroup ${style.tel}`}
          id="tel"
          label="電話"
          type="tel"
          placeholder="請輸入行動電話"
        />

        <InputBox
          className={`inputGroup ${style.email}`}
          id="email"
          label="Email"
          type="email"
          placeholder="請輸入電子郵件"
        />

      <SelectBox 
          className={`inputGroup ${style.location}`}
          label="縣市"
          data={locationData}
        />

        <InputBox
          className={`inputGroup ${style.address}`}
          id="address"
          label="地址"
          type="text"
          placeholder="請輸入地址"
        />

      </form>
    </section>
  )
}

export function InputBox ({ className, label, name, type, placeholder, value='', onChange=()=>{} }) {
  return (
    <div className={className}>
      <div className={style.inputLabel}>{label}</div>
      <input className={style.input} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

function SelectBox ({ className, label, data }) {
  return (
    <div className={className}>
      <div className={style.inputLabel}>{label}</div>
      <div className={style.selectorWrapper}>
        <select required className={style.selector}>
          {data.map(function (datum, index) {
            const {value, title} = datum
            if(index === 0) {
              return <option key={value} value={value} defaultValue>{title}</option>
            } else {
              return <option key={value} value={value}>{title}</option>
            }
          })}
        </select>
      </div>
    </div>
  )
}