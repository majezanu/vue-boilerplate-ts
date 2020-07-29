<template>
 <div :id="id">Example Component</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

 @Component
export default class Example extends Vue {
  @Prop({ required: false, type: String, default: 'Example-id' }) readonly id!: string
}
</script>
<style>
 .Example {
 }
</style>
