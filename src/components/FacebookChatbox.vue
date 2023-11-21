<!-- MessengerChatbox.vue -->

<template>
      <div>
            <!-- Your Facebook SDK code -->
            <div id="fb-root"></div>

            <!-- Your Plugin chat code -->
            <div class="fb-customerchat" :page_id="pageId"></div>
      </div>
</template>
    
<script>
export default {
      data() {
            return {
                  pageId: '127163283823737' // Thay đổi thành Page ID của bạn
            };
      },
      mounted() {
            // Facebook SDK Initialization
            window.fbAsyncInit = function () {
                  FB.init({
                        xfbml: true,
                        version: 'v18.0'
                  });
            };

            // Load the Facebook SDK asynchronously
            (function (d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s);
                  js.id = id;
                  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                  fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
      }
}
</script>
    