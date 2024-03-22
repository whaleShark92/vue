<template>
  <div class="components-container">
    <split-pane split="vertical" @resize="resize">
      <template slot="paneL">
        <!--        <div class="left-container">-->
        <el-col
          :xs="{span: 24}"
          :sm="{span: 18}"
          :md="{span: 18}"
          :lg="{span: 12}"
          :xl="{span: 12}"
          style="margin-bottom:30px;"
        >
          <box-card />
        </el-col>
        <!--        </div>-->
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <!--            <div class="top-container">-->
            <p>456</p>
            <!--            </div>-->
          </template>
          <template slot="paneR">
            <!--            <div class="bottom-container">-->
            <p>789</p>
            <!--            </div>-->
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from 'vue-splitpane'
import BoxCard from './BoxCard'

export default {
  name: 'SplitpaneDemo',
  components: { splitPane, BoxCard },
  methods: {
    resize() {
      console.log('resize')
    }
  }
}
</script>

<style scoped>
.components-container {
  position: relative;
  height: 100vh;
}

.left-container {
  background-color: #F38181;
  height: 100%;
}

.right-container {
  background-color: #FCE38A;
  height: 200px;
}

.top-container {
  background-color: #FCE38A;
  width: 100%;
  height: 100%;
}

.bottom-container {
  width: 100%;
  background-color: #95E1D3;
  height: 100%;
}
</style>
