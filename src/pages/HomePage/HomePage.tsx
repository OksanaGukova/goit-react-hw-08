import css from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <h1>Welcome to Contact Manager</h1>
      <p className={css.introText}>
        Manage your contacts easily and efficiently with our application.
      </p>

    </div>
  );
}
