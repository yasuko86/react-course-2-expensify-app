import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
  const wrapper = expenses.map(expense => shallow(<ExpenseListItem {...expense} />)); 
  expect(wrapper).toMatchSnapshot();
});
