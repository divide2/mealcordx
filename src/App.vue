<script>

export default {
  created () {
    console.log(process)
    const baseURL = process.env.API_BASE_URL

    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
    wx.login({
      success: res => {
        if (res.code) {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
          wx.request({
            url: `${baseURL}/login/mp`,
            data: {code: res.code},
            method: 'POST',
            success (data) { console.log(data) }
          })
        } else {
          console.log('登录失败')
        }
      }
    })
  }
}
</script>

<style>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200 rpx 0;
    box-sizing: border-box;
  }

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
</style>
