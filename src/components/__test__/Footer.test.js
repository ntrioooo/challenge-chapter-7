import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Footer from '../LandingPage/footer';
import '@testing-library/jest-dom';

test('should render footer component', () => {
  const linkElement = Renderer.create(<Footer />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
