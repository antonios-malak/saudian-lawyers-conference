<template>
  <section class="faqs py-20" id="faqs">
    <div class="faqs-section text-right container mx-auto px-4">
      <h1
        class="faqs-section--head relative w-[107px] mx-auto text-[16px] text-gray-400 mb-20 text-center"
      >
        الاسئله المتكرره
      </h1>
      <el-collapse
        v-model="activeNames"
        class="faqs-section--accorion"
        accordion
      >
        <el-collapse-item
          v-for="(faqItem, index) in faqItems"
          :key="index"
          :title="faqItem.question"
          :name="index"
          class="faqs-section--accorion-item"
        >
          <div class="text-gray-400">
            {{ faqItem.answer }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </section>
</template>

<script setup>
  import { ref , onMounted} from "vue";
  import { ElCollapse, ElCollapseItem } from "element-plus";
  import { homeService } from "~/services/home";

  const activeNames = ref(["0"]);
  const faqItems = ref([]);

  const getFaqItems2 = async () => {
    try {
      const res = await homeService.getFaqs();
      faqItems.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  onMounted(() => {
    getFaqItems2();
  });


</script>
<style scoped>
  .faqs {
    background-image: linear-gradient(to top, rgba(0, 0, 20), rgba(0, 0, 56)),
      url("images/Sections/sectionBg.png");
    background-blend-mode: saturation;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .faqs-section--head::before,
  .faqs-section--head::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 32px;
    height: 2px;
    background-color: #6366f1;
    transform: translateY(-50%);
  }

  .faqs-section--head::before {
    right: 100%;
    margin-right: 16px;
  }

  .faqs-section--head::after {
    left: 100%;
    margin-left: 16px;
  }

  :deep(.el-collapse) {
    --el-collapse-header-height: 48px;
    --el-collapse-header-width: 100%;
    --el-collapse-header-bg-color: transparent;
    --el-collapse-content-bg-color: transparent;
    direction: rtl;
  }

  :deep(.el-collapse-item) {
    width: 100%;
    padding: 16px 0;
  }

  :deep(.el-collapse-item__header) {
    font-size: 20px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:60px;
    padding: 24px 24px;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
    line-height: 1.5;
  }

  :deep(.el-collapse-item:not(:last-child) .el-collapse-item__header) {
    border-bottom: 1px solid #eaecec4d;
  }

  :deep(
      .el-collapse-item:not(:last-child) .el-collapse-item__header.is-active
    ) {
    border: none;
    transition: all 0.5s;
  }

  :deep(.el-collapse-item__arrow) {
    font-size: 10px;
    color: #6b6bcd;
    transform: rotate(45deg);
    transition: transform 0.5s;
    display: inline-block;
    position: relative;
    border: solid #6b6bcd;
    border-width: 0 2px 2px 0;
    padding: 3px;
  }
  :deep(.el-collapse-item__arrow::before) {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border: 1px solid #eaecec4d;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
  }

  :deep(.el-collapse-item__header.is-active .el-collapse-item__arrow) {
    transform: rotate(-135deg);
    color: white;
    border: solid white;
    border-width: 0 2px 2px 0;

    transition: 0.5s;
    /* border: solid white; */
  }
  :deep(.el-collapse-item__header.is-active .el-collapse-item__arrow)::before {
    border: 1px solid white;
  }

  :deep(.el-collapse-item__content) {
    padding: 16px 0 0;
    text-align: right;
    font-size: 18px;
    line-height: 1.5;
  }

  :deep(.el-collapse-item__wrap) {
    direction: rtl;
  }
  @media (max-width: 768px) {
    :deep(.el-collapse-item__content) {
      font-size: 14px;
    }
    :deep(.el-collapse-item__header) {
      font-size: 16px;
      padding: 0 16px 16px;
    }
    :deep(.el-collapse-item__arrow::before) {
      width: 40px;
      height: 40px;
    }
  }
</style>
