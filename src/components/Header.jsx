import { SlSocialGithub } from 'react-icons/sl';
export default function Header() {
  return (
    <div className='navBar'>
      <span>Distance Calculator</span>
      <a target='blank' href="https://github.com/leaskn/distance-calculator">
        <button className="githubBtn">
          <SlSocialGithub />
        </button>
      </a>
    </div>
  )
}