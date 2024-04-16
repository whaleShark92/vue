<template>
  <div>
    <mallki class-name="mallki-text" text="歷史資料" />
    <el-table :data="tableData" style="width: 100%;padding-top: 15px;">
      <el-table-column prop="no" label="No." width="180" />
      <el-table-column prop="date" label="Date" width="180" />
    </el-table>
  </div>
</template>

<script>
import { transactionList } from '@/api/remote-search'
import Mallki from '@/components/TextHoverEffect/Mallki.vue'

export default {
  components: { Mallki },
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null,
      tableData: [
        {
          no: 'S008',
          date: '2024-01-15'
        },
        {
          no: 'S0011',
          date: '2024-02-22'
        },
        {
          no: 'S0015',
          date: '2024-03-17'
        }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    }
  }
}
</script>
