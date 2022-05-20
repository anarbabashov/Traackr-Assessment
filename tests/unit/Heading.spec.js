import Heading from '@/components/Heading.vue';
import { shallowMount } from '@vue/test-utils';

describe('Testing heading props', () => {
  const wrapper = shallowMount(Heading, {
    propsData: {
      title: 'Influencers',
      expandInput: false,
    },
  });

  test('Checks the prop title  ', () => {
    expect(wrapper.props().title).toBe('Influencers');
    expect(wrapper.props().expandInput).toBe(false);
  });
});
