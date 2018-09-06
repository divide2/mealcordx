<script>
import Api from './utils/api'

export default {
  created () {
    console.log(process)
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
    wx.login({
      success: res => {
        if (res.code) {
          console.log(res)
          Api.post('/login/mp', {code: res.code}).then((res) => {
            wx.getUserInfo({
              success: (response) => {
                response.userInfo.skey = res.skey
                Api.post('/v1/mp/user', response.userInfo)
              },
              fail: (error) => {
                console.log(error)
              }
            })
          })

          wx.getLocation({
            success: (res) => {
              wx.setStorage({
                key: 'position',
                data: res
              })
            }
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
