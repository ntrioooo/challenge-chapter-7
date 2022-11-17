import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Navbar from '../LandingPage/navbar';
import '@testing-library/jest-dom';

test('should render footer component', () => {
  const linkElement = Renderer.create(<Navbar />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
