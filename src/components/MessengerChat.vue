<!-- File: MessengerChat.vue -->
<template>
      <div>
            <div id="fb-root"></div>
            <div id="fb-customer-chat" class="fb-customerchat"></div>
      </div>
</template>
    
<script>
export default {
      mounted() {
            this.initializeFacebookChat();
      },
      methods: {
            initializeFacebookChat() {
                  var chatbox = document.getElementById('fb-customer-chat');
                  chatbox.setAttribute("page_id", "127163283823737");
                  chatbox.setAttribute("attribution", "biz_inbox");

                  window.fbAsyncInit = function () {
                        FB.init({
                              xfbml: true,
                              version: 'v18.0'
                        });
                  };

                  (function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                        fjs.parentNode.insertBefore(js, fjs);
                  }(document, 'script', 'facebook-jssdk'));
            }
      }
}
</script>
    
<style scoped>
/* Your component-specific styles go here */
</style>
    