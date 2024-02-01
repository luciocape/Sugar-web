<template>
  <q-page>
    <div class="w-100 h-100 d-flex justify-content-center align-items-center">
      <img class="img-carta-isa" style="height: 100vh;" src="../../public/contenido/Linktree_Isa.png" />
    </div>
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7095142348136865793" target="_blank" class="link-isa"
      style="background-color: blue"></a>
    <a href="https://www.sugar.coach" target="_blank" class="link-isa" style="background-color: red"></a>
    <a href="https://www.linkedin.com/company/sugar-coach/" target="_blank" class="link-isa"
      style="background-color: green"></a>
    <a href="https://google.com" target="_blank" class="link-isa" style="background-color: violet"></a>
  </q-page>
</template>

<script>
export default {
  name: 'IsaLinktree'
}

</script>

<style>
.link-isa {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 170px;
  height: 30px;
}

@media only screen and (max-width:400px) {
  .img-carta-isa {
    object-fit: cover;
  }
}
</style>