<template>
    <div class="widget">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="body"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
</template>

<style scoped>
  .widget {
    border: 1px solid #666666;
    background: white;
  }

  header {
    padding: 15px;
    font-weight: bold
  }

  main {
    padding: 15px;
  }

  footer {
    padding: 15px;
    color: #999;
    font-size: 12px;
  }
</style>