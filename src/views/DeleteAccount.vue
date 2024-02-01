<template>
  <q-page>
      <form class="form" action="https://formsubmit.co/admin.team@sugar.coach" method="POST" style="width:340px;height:440px;background:#e6e6e6;border-radius:8px;box-shadow:0 0 40px -10px #000;margin:calc(50vh - 220px) auto;padding:20px 30px;max-width:calc(100vw - 40px);box-sizing:border-box;font-family:'Montserrat',sans-serif;position:relative">
        <h2 style="margin:10px 0;padding-bottom:10px;width:180px;color:#78788c;border-bottom:3px solid #78788c">DELETE YOUR ACCOUNT</h2>
        <p type="Name:"><input style="width:100%;padding:10px;box-sizing:border-box;background:none;outline:none;resize:none;border:0;font-family:'Montserrat',sans-serif;transition:all .3s;border-bottom:2px solid #bebed2" type="text" name="name" placeholder="Write your name here.."/></p>
        <p type="Email:"><input style="width:100%;padding:10px;box-sizing:border-box;background:none;outline:none;resize:none;border:0;font-family:'Montserrat',sans-serif;transition:all .3s;border-bottom:2px solid #bebed2" type="email" name="email" placeholder="The email that you registered in our app"/></p>
        <p type="Message:"><input style="width:100%;padding:10px;box-sizing:border-box;background:none;outline:none;resize:none;border:0;font-family:'Montserrat',sans-serif;transition:all .3s;border-bottom:2px solid #bebed2" type="text" name="Message" placeholder="What would you like to tell us.."/></p>
        <button type="submit" style="float:right;padding:8px 12px;margin:8px 0 0;font-family:'Montserrat',sans-serif;border:2px solid #78788c;background:0;color:#5a5a6e;cursor:pointer;transition:all .3s; hover{background:#78788c;color:#fff}">Send Message</button>
        <div style="content:'Hi';position:absolute;bottom:-15px;right:-20px;background:#50505a;color:#fff;width:320px;padding:16px 4px 16px 0;border-radius:6px;font-size:13px;box-shadow:10px 10px 40px -14px #000">
          <span class="fa fa-envelope-o" style="margin:0 5px 0 15px"></span>Contact us: info@sugar.coach
        </div>
      </form>
  </q-page>
</template>

<script>
export default {
  name: 'NotFound'
}

</script>