import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default { title: 'HelloWorld' };

export const asAComponent = () => ({
  components: { HelloWorld },
  template: '<HelloWorld/>',
});
