<template>
  <canvas ref="product_schedule" width="1200" height="600">A product scheduler</canvas>
</template>

<script>
export default {
  name: 'Platform',
  data() {
    return {
      ctx: null,
      pane_width: 1200,
      pane_height: 600,
      legend_pane_x: 20,
      legend_pane_y: 60,
      schedule_pane_x: 230,
      legend_number: 8,
      margin: 10,
      textSize: 8,
      startMonth: 6,
      monthNumber: 12,
      legend_height: 0,
      monthWidth: 0
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawY()
      this.drawX()
      this.drawTriangles()
      this.drawArrows()
      this.drawRecs()
      this.drawCircles()
      this.drawStars()
    })
  },
  methods: {
    drawY() {
      this.legend_height = (this.pane_height - (this.margin * 4)) / this.legend_number
      this.ctx = this.$refs.product_schedule.getContext('2d')
      this.ctx.font = '8px Arial'
      this.ctx.fillStyle = 'White'
      const legends = ['Key Milestone', 'L10 system build', 'L6 system build', 'PCBA', 'Tooling/PPAP/DMFAA', 'Key commodity (X on X)', 'ITM test', 'FGA readiness']
      legends.forEach(this.processLegend)
    },
    drawX() {
      this.monthWidth = (this.pane_width - this.schedule_pane_x - this.margin) / this.monthNumber
      const monthList = this.getMonthList()
      monthList.forEach(this.processMonth)

      const d = new Date()
      const nowMonth = d.getMonth() + 1 // month of new, 1-12
      const nowDate = d.getDate() // date of now, 1-31
      const nowMonthIndex = this.findNowMonthIndex(nowMonth)
      this.drawNowLine(this.schedule_pane_x + nowMonthIndex * this.monthWidth + this.monthWidth / 30 * nowDate, this.legend_pane_y + this.margin * 4, this.pane_height - this.legend_pane_y + this.margin * 4, 'Now')
    },
    drawTriangles() {
      // start to draw some schedules on each line.
      // start to draw triangle schedule
      let scheduleText = 'CPE 7/2'
      const legendIndex = 1
      let scheduleMonth = 7
      let scheduleDate = 2
      let monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawTriAngleSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + scheduleDate / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.75) * this.legend_height, '#6EA204', scheduleText, 'bottom')

      scheduleText = 'DPE 8/16'
      scheduleMonth = 8
      scheduleDate = 16
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawTriAngleSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + scheduleDate / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.75) * this.legend_height, '#6EA204', scheduleText, 'bottom')

      scheduleText = 'PPE 8/16'
      scheduleMonth = 10
      scheduleDate = 5
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawTriAngleSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + scheduleDate / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.75) * this.legend_height, '#6EA204', scheduleText, 'bottom')

      scheduleText = 'RFD/QPE 2/25'
      scheduleMonth = 2
      scheduleDate = 25
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawTriAngleSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + scheduleDate / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.75) * this.legend_height, '#6EA204', scheduleText, 'bottom')

      scheduleText = 'FRC 3/27'
      scheduleMonth = 3
      scheduleDate = 27
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawTriAngleSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + scheduleDate / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.75) * this.legend_height, '#6EA204', scheduleText, 'bottom')

      scheduleText = 'RTS 4/20'
      scheduleMonth = 4
      scheduleDate = 20
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawTriAngleSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + scheduleDate / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.75) * this.legend_height, '#6EA204', scheduleText, 'bottom')

      scheduleText = 'RTO 5/27'
      scheduleMonth = 5
      scheduleDate = 15
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      // alert(monthIndex)
      // alert(this.monthWidth)
      // alert(this.schedule_pane_x + monthIndex * this.monthWidth + scheduleDate / 30 * this.monthWidth)
      this.drawTriAngleSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + scheduleDate / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.75) * this.legend_height, '#6EA204', scheduleText, 'top')
    },
    drawArrows() {
      // start to draw some arrow schedule
      let scheduleText = 'EVT 10/31 - 11/8'
      const legendIndex = 2
      let scheduleMonth = 10
      let scheduleDate = 31
      let monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawArrowSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, '#E8FDBC', scheduleText)

      scheduleText = 'DVT1 11/29 - 12/8'
      scheduleMonth = 11
      scheduleDate = 29
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawArrowSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, '#E8FDBC', scheduleText)

      scheduleText = 'DVT2 12/18 - 12/30'
      scheduleMonth = 12
      scheduleDate = 18
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawArrowSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, '#E8FDBC', scheduleText)

      scheduleText = 'DVT2 1/3 - 1/17'
      scheduleMonth = 1
      scheduleDate = 3
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawArrowSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, '#E8FDBC', scheduleText)

      scheduleText = 'Pilot 3/12 - 3/27'
      scheduleMonth = 3
      scheduleDate = 12
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawArrowSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, '#E8FDBC', scheduleText)

      scheduleText = 'Pilot 4/12 - 4/18'
      scheduleMonth = 4
      scheduleDate = 12
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      // #E0E0E0
      this.drawArrowSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, '#E8FDBC', scheduleText)
    },
    drawRecs() {
      // start to draw some arrow schedule
      let scheduleText = 'EVT PSCS  TA  review'
      const legendIndex = 5
      let scheduleMonth = 9
      let scheduleDate = 15
      let monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawRecSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, scheduleText)

      scheduleText = 'T1 PSCS'
      scheduleMonth = 10
      scheduleDate = 15
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawRecSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, scheduleText)
    },
    drawCircles() {
      // start to draw some arrow schedule
      let scheduleText = 'FC: 10/12'
      const legendIndex = 7
      let scheduleMonth = 10
      let scheduleDate = 10
      let monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawCircleSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, scheduleText)

      scheduleText = 'BCO 12/6'
      scheduleMonth = 12
      scheduleDate = 10
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawCircleSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, scheduleText)
    },
    drawStars() {
      // start to draw some arrow schedule
      let scheduleText = 'MU Review 7/4 – 7/11'
      let legendIndex = 6
      let scheduleMonth = 10
      let scheduleDate = 10
      let monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawStarSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, scheduleText, 10, '#6495ED')

      scheduleText = 'BCO 12/6'
      scheduleMonth = 12
      scheduleDate = 10
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawStarSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, scheduleText, 10, '#6495ED')

      legendIndex = 8
      scheduleText = 'FHC Spin'
      scheduleMonth = 11
      scheduleDate = 15
      monthIndex = this.findNowMonthIndex(scheduleMonth)
      this.drawStarSchedule(this.schedule_pane_x + monthIndex * this.monthWidth + Math.min(scheduleDate, 30) / 30 * this.monthWidth, this.legend_pane_y + (legendIndex - 0.9) * this.legend_height, scheduleText, 12, '#B58300')
    },
    // Y
    processLegend(value, index, array) {
      // main function to draw schedule
      // start to draw legend
      this.drawBorder(this.schedule_pane_x, this.legend_pane_y, (this.pane_width - this.schedule_pane_x - this.margin), (this.pane_height - this.legend_pane_y - this.margin))
      this.drawLegend(this.legend_pane_x, this.legend_pane_y + index * this.legend_height, (this.schedule_pane_x - this.margin * 4), this.legend_height - (this.margin * 3), value)
    },
    drawBorder(x, y, width, height) {
      this.ctx.beginPath()
      this.ctx.lineWidth = '4'
      this.ctx.strokeStyle = '#0085C3'
      this.ctx.rect(x, y, width, height)
      this.ctx.stroke()
    },
    drawLegend(x, y, width, height, text) {
      this.ctx.beginPath()
      this.ctx.rect(x, y, width, height)
      this.ctx.fillStyle = '#0085C3'
      this.ctx.fill()
      // add text
      this.ctx.font = 'bold 15px Arial'
      this.ctx.fillStyle = 'white'
      this.ctx.fillText(text, x + 10, y + height / 2)
    },
    // X
    getMonthList() {
      const baseline = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const result = []
      if (this.startMonth <= 0 || this.monthNumber <= 0) return result

      for (let i = this.startMonth; i < (this.startMonth + Math.min(this.monthNumber, 12)); i++) {
        result[i - this.startMonth] = baseline[(i - 1) % 12]
      }
      return result
    },
    findNowMonthIndex(nowMonth) {
      for (let i = this.startMonth; i < this.startMonth + this.monthNumber; i++) {
        if (nowMonth === i % 12 || nowMonth === i) {
          return i - this.startMonth
        }
      }

      return -1
    },
    processMonth(value, index, array) {
      this.drawScheduleMonth(this.schedule_pane_x + index * this.monthWidth + this.margin * 2, this.legend_pane_y - this.margin, value)
      // line number is monthNumber-1
      if (index !== 0) {
        this.drawMonthDotLine(this.schedule_pane_x + index * this.monthWidth, this.legend_pane_y, (this.pane_height - this.legend_pane_y + this.margin * 4))
      }
    },
    drawScheduleMonth(x, y, text) {
      this.ctx.beginPath()
      // add text
      this.ctx.font = 'bold 16px Arial'
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(text, x, y)
    },
    drawMonthDotLine(x, start_y, end_y) {
      const length = 10
      const gap = 3
      let i
      const step = (end_y - start_y) / (length + gap)
      this.ctx.lineWidth = '0.1'
      this.ctx.setLineDash([20])
      this.ctx.strokeStyle = 'black'
      for (i = 0; i < step; i++) {
        this.ctx.beginPath()
        this.ctx.moveTo(x, start_y + (length + gap) * i)
        this.ctx.lineTo(x, start_y + (length + gap) * i + length)
        this.ctx.closePath()
        this.ctx.stroke()
      }
    },
    drawNowLine(x, start_y, end_y, text) {
      // draw Now text
      this.ctx.textAligh = 'center'
      this.ctx.font = '15px Arial'
      this.ctx.fillStyle = '#0085C3'
      this.ctx.fillText(text, x - this.margin, start_y - this.margin)

      // draw Now line
      this.ctx.beginPath()
      this.ctx.setLineDash([])
      this.ctx.lineWidth = '2'
      this.ctx.strokeStyle = '#0085C3'
      this.ctx.moveTo(x, start_y)
      this.ctx.lineTo(x, end_y)
      this.ctx.closePath()
      this.ctx.stroke()
    },
    // Triangle
    drawTriAngleSchedule(x, y, color, text, position) {
      const triAngleWidth = 11
      const triAngleHeight = 12
      let textX
      let textY
      this.drawTriAngle(x, y, color, triAngleWidth, triAngleHeight)
      this.ctx.font = this.textSize + 'px Arial'
      this.ctx.fillStyle = 'black'
      const textWidth = this.ctx.measureText(text).width
      if (position === 'bottom') {
        this.ctx.textBaseLine = 'top'
        textY = y + triAngleHeight + this.textSize
        textX = x + (triAngleWidth / 2) - textWidth / 2
      }
      if (position === 'top') {
        this.ctx.textBaseLine = 'bottom'
        textY = y
        textX = x + (triAngleWidth / 2) - textWidth / 2
      }
      if (position === 'right') {
        textY = y + triAngleHeight
        textX = x + triAngleWidth
      }
      this.ctx.fillText(text, textX, textY)
    },
    drawTriAngle(x, y, color, triAngleWidth, triAngleHeight) {
      this.ctx.beginPath()
      this.ctx.moveTo(x + triAngleWidth / 2, y)
      this.ctx.lineTo(x, y + triAngleHeight)
      this.ctx.lineTo(x + triAngleWidth, y + triAngleHeight)
      this.ctx.closePath()
      this.ctx.fillStyle = color
      this.ctx.fill()
    },
    // Circle
    drawCircleSchedule(x, y, text) {
      const radius = 10
      this.ctx.beginPath()
      this.ctx.arc(x, y, radius, 0, 2 * Math.PI)
      this.ctx.fillStyle = '#87CEFA'
      this.ctx.fill()
      this.ctx.font = this.textSize + 'px Arial'
      this.ctx.fillStyle = 'black'
      const textWidth = this.ctx.measureText(text).width
      this.ctx.textBaseLine = 'top'
      const textY = y + radius + this.textSize
      const textX = x + (radius / 2) - textWidth / 2
      this.ctx.fillText(text, textX, textY)
    },
    // Arrow
    drawArrowSchedule(x, y, color, text) {
      const arrowSize = 42
      // const texts = this.splitTextIntoLines(text)
      this.drawArrow(x, y, color, arrowSize)
      this.drawTextOn(text, x, y, arrowSize - 20)
      // if (texts == null || texts.length !== 3) {
      //   return
      // }
      // for (var i = 0; i < 3; i++) {
      //   this.processArrowScheduleText(texts[i], i, x, y)
      // }
    },
    drawArrow(x, y, color) {
      const arrowSize = 42
      this.ctx.beginPath()
      this.ctx.moveTo(x, y)
      this.ctx.lineTo(x, y + arrowSize)
      this.ctx.lineTo(x + arrowSize - this.margin, y + arrowSize)
      this.ctx.lineTo(x + arrowSize, y + arrowSize / 2)
      this.ctx.lineTo(x + arrowSize - this.margin, y)
      this.ctx.closePath()
      this.ctx.fillStyle = color
      this.ctx.fill()
    },
    // Rec
    drawRecSchedule(x, y, text) {
      const width = 50
      const height = 25
      this.ctx.beginPath()
      this.ctx.rect(x, y, width, height)
      this.ctx.fillStyle = '#FFE4B5'
      this.ctx.fill()
      this.drawTextOn(text, x, y, width - 10)
    },
    // Star
    drawStarSchedule(x, y, text, n, color) {
      this.ctx.beginPath()
      this.drawStar(x, y, n, color)
      this.ctx.font = this.textSize + 'px Arial'
      this.ctx.fillStyle = 'black'
      const textWidth = this.ctx.measureText(text).width
      this.ctx.textBaseLine = 'top'
      const textY = y + this.textSize + 5
      const textX = x - textWidth / 2
      this.ctx.fillText(text, textX, textY)
    },
    drawStar(x, y, n, color) {
      this.ctx.beginPath()
      const alpha = (2 * Math.PI) / n
      const radius = 10
      const starXY = [x, y]

      this.ctx.beginPath()

      for (let i = n + 1; i !== 0; i--) {
        const r = radius * (i % 2 + 1) / 2
        const omega = alpha * i
        this.ctx.lineTo((r * Math.sin(omega)) + starXY[0], (r * Math.cos(omega)) + starXY[1])
      }
      this.ctx.fillStyle = color
      this.ctx.fill()
    },
    drawTextOn(t, x, y, w) {
      const chr = t.split('')
      let temp = ''
      const row = []

      this.ctx.font = this.textSize + 'px Arial'
      this.ctx.fillStyle = 'black'
      this.ctx.textBaseline = 'middle'

      for (let a = 0; a < chr.length; a++) {
        if (this.ctx.measureText(temp).width > w) {
          row.push(temp)
          temp = ''
        }
        temp += chr[a]
      }
      row.push(temp)
      for (let b = 0; b < row.length; b++) {
        this.ctx.fillText(row[b], x, y + (b + 1) * 10)
      }
    }
    // processArrowScheduleText(value, index, x, y) {
    //   let r
    //   if (index === 1) {
    //     r = value + '-'
    //   } else {
    //     r = value
    //   }
    //   this.ctx.font = this.textSize + 'px Arial'
    //   this.ctx.fillStyle = 'black'
    //   this.ctx.fillText(r, x, y + (this.margin / 2) + (index + 1) * this.textSize * 1.3)
    // },
    // splitTextIntoLines(text) {
    //   const re = /([A-Za-z0-9/]+)\s|\u2013/g
    //   return (text + ' ').match(re)
    // },
    // rectangular
  }
}
</script>

<style scoped>

</style>
