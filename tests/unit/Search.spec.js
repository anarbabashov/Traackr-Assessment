import Search from '@/components/Search.vue';
import { mount } from '@vue/test-utils';

test('Checking the input value', async () => {
  const wrapper = mount(Search);

  const textInput = wrapper.find('input[type="text"]');
  await textInput.setValue('Giuseppe Hickle');

  expect(wrapper.find('input[type="text"]').element.value).toBe(
    'Giuseppe Hickle'
  );
});

test('Emits an event when clicked', () => {
  const wrapper = mount(Search);
  wrapper.find('form').trigger('click');
  expect(wrapper.emitted()).toHaveProperty('expanded-event');
});
