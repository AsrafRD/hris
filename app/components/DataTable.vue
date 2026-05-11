<template>
  <div class="table-responsive">
    <table class="table table-hover align-middle border-top">
      <thead class="bg-light">
        <tr>
          <th v-if="selectable" style="width: 40px" class="ps-4">
            <input 
              type="checkbox" 
              class="form-check-input" 
              :checked="isAllSelected" 
              @change="$emit('toggleSelectAll')"
            >
          </th>
          <th v-for="col in columns" :key="col.key" :style="col.style" :class="col.class">
            <div class="d-flex align-items-center gap-1 cursor-pointer" @click="handleSort(col.key)">
              {{ col.label }}
              <i v-if="sortKey === col.key" :class="sortOrder === 'asc' ? 'bi bi-sort-up' : 'bi bi-sort-down'" class="text-primary"></i>
            </div>
          </th>
          <th class="text-end pe-4">Aksi</th>
        </tr>
      </thead>
      <tbody class="border-top-0">
        <template v-if="loading">
          <tr v-for="i in 5" :key="i">
            <td v-if="selectable" class="ps-4"><div class="skeleton" style="height: 20px; width: 20px"></div></td>
            <td v-for="col in columns" :key="col.key">
              <div class="skeleton" style="height: 20px; width: 100%"></div>
            </td>
            <td class="pe-4"><div class="skeleton ms-auto" style="height: 20px; width: 60px"></div></td>
          </tr>
        </template>
        <template v-else-if="data.length > 0">
          <tr v-for="(item, index) in data" :key="item[itemKey] || index">
            <td v-if="selectable" class="ps-4">
              <input 
                type="checkbox" 
                class="form-check-input" 
                :checked="selectedItems.includes(item[itemKey])" 
                @change="$emit('toggleSelect', item[itemKey])"
              >
            </td>
            <td v-for="col in columns" :key="col.key" :class="col.class">
              <slot :name="`col-${col.key}`" :item="item" :index="index">
                {{ item[col.key] }}
              </slot>
            </td>
            <td class="text-end pe-4">
              <slot name="actions" :item="item"></slot>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td :colspan="columns.length + (selectable ? 2 : 1)" class="text-center py-5">
            <div class="py-4">
              <i class="bi bi-inbox display-4 text-muted opacity-25"></i>
              <p class="text-muted mt-2">Tidak ada data ditemukan</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div v-if="meta && meta.totalHalaman > 1" class="d-flex flex-column flex-md-row align-items-center justify-content-between p-4 border-top gap-3">
      <div class="text-muted small">
        Menampilkan <strong>{{ ((meta.halaman - 1) * meta.perHalaman) + 1 }}</strong> - 
        <strong>{{ Math.min(meta.halaman * meta.perHalaman, meta.totalData) }}</strong> dari 
        <strong>{{ meta.totalData }}</strong> data
      </div>
      <nav>
        <ul class="pagination pagination-sm mb-0">
          <li class="page-item" :class="{ disabled: meta.halaman === 1 }">
            <button class="page-link" @click="$emit('pageChange', meta.halaman - 1)">
              <i class="bi bi-chevron-left"></i>
            </button>
          </li>
          <li 
            v-for="p in visiblePages" 
            :key="p" 
            class="page-item" 
            :class="{ active: meta.halaman === p, disabled: p === '...' }"
          >
            <button class="page-link" @click="p !== '...' && $emit('pageChange', p)">{{ p }}</button>
          </li>
          <li class="page-item" :class="{ disabled: meta.halaman === meta.totalHalaman }">
            <button class="page-link" @click="$emit('pageChange', meta.halaman + 1)">
              <i class="bi bi-chevron-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  columns: { type: Array, required: true },
  data: { type: Array, required: true },
  loading: { type: Boolean, default: false },
  meta: { type: Object, default: null },
  selectable: { type: Boolean, default: false },
  selectedItems: { type: Array, default: () => [] },
  itemKey: { type: String, default: 'id' },
  sortKey: { type: String, default: '' },
  sortOrder: { type: String, default: 'asc' }
})

const emit = defineEmits(['pageChange', 'sort', 'toggleSelect', 'toggleSelectAll'])

const isAllSelected = computed(() => {
  return props.data.length > 0 && props.selectedItems.length === props.data.length
})

const visiblePages = computed(() => {
  if (!props.meta) return []
  const current = props.meta.halaman
  const total = props.meta.totalHalaman
  const pages = []
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    pages.push(1)
    if (current > 3) pages.push('...')
    
    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)
    
    for (let i = start; i <= end; i++) {
      if (!pages.includes(i)) pages.push(i)
    }
    
    if (current < total - 2) pages.push('...')
    if (!pages.includes(total)) pages.push(total)
  }
  
  return pages
})

const handleSort = (key) => {
  const order = props.sortKey === key && props.sortOrder === 'asc' ? 'desc' : 'asc'
  emit('sort', { key, order })
}
</script>

<style scoped>
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.cursor-pointer {
  cursor: pointer;
}

.pagination .page-link {
  border: none;
  color: #6c757d;
  min-width: 32px;
  text-align: center;
  border-radius: 4px;
  margin: 0 2px;
}

.pagination .page-item.active .page-link {
  background-color: #0d6efd;
  color: #fff;
}

.pagination .page-link:hover:not(.active) {
  background-color: #e9ecef;
}
</style>
