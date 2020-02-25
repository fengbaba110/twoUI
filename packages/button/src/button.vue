<template>
     <button 
        :disabled="disabled"
        :class="[
            'two-button',
            type ? 'two-button-' + type : '',
            {
                'is-disabled': disabled,
                'is-loading': loading,
            }
        ]"
    >
        <slot></slot>
    </button>
</template>


<script>
export default {
    name:'two-button',
    props:{
        type:{
            type: String,
            default: 'default',
        },
        disabled:{
            type: Boolean,
            default: false,
        },
        loading: Boolean,
    }
}
</script>


<style scoped>
    .two-button{
        margin: 0;
        padding: 0;
        border: 1px solid transparent;  
        outline: none; 
        background: transparent;
        font-size:24px;
        font-family:PingFang SC;
        font-weight:bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>