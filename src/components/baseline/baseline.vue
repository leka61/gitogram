<template>
    <div class="c-baseline">
        <div class="x-container">
            <div class="content" v-if="$slots.content">
                 <slot name="content"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./baseline.scss" scoped>

</style>
