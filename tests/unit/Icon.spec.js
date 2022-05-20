import Icon from '@/components/Card/Icon.vue';
import { shallowMount } from '@vue/test-utils';

describe('Testing the props for icon', () => {
  const wrapper = shallowMount(Icon, {
    propsData: {
      name: 'INSTAGRAM',
    },
  });

  test('checks the prop title', () => {
    expect(wrapper.props('name')).toBe('INSTAGRAM');
  });
});
