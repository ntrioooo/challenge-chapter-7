import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Banner from '../LandingPage/banner';
import '@testing-library/jest-dom';

test('should render banner component', () => {
  const linkElement = Renderer.create(<Banner />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
