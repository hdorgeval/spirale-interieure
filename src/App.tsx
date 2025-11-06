import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { UserContext, useUserContextInfo } from './contexts/userContext';
import { JourneeCanalisationsEtConstellations } from './events/JourneeCanalisationsEtConstellations';
import { ConstellationsFamilialesEtSystemiques } from './pages/ConstellationsFamilialesEtSystemiques';
import { ConsultationTarotDeMarseille } from './pages/ConsultationTarotDeMarseille';
import { ContactFormError } from './pages/ContactFormError';
import { ContactFormSuccessfullySent } from './pages/ContactFormSuccessfullySent';
import { ContactMe } from './pages/ContactMe';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/LandingPage';
import { LaTrame } from './pages/LaTrame';
import { MassageTantriqueTao } from './pages/MassageTantriqueTao';
import { MentionsLegales } from './pages/MentionsLegales';
import { QuiSuisJe } from './pages/QuiSuisJe';
import { Sophrologie } from './pages/Sophrologie';
import { StageAlchimieDuTarot } from './pages/StageAlchimieDuTarot';
import { Temoignages } from './pages/Temoignages';
import { ThemeDeNaissanceParLeTarotDeMarseille } from './pages/ThemeDeNaissanceParLeTarotDeMarseille';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact/success',
    element: <ContactFormSuccessfullySent />,
  },
  {
    path: '/contact/error',
    element: <ContactFormError />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />,
  },
  {
    path: '/qui-suis-je',
    element: <QuiSuisJe />,
  },
  {
    path: '/temoignages',
    element: <Temoignages />,
  },
  {
    path: '/contact',
    element: <ContactMe />,
  },
  {
    path: '/temoignages',
    element: <Temoignages />,
  },
  {
    path: '/chemin-de-vie-par-le-tarot-de-marseille',
    loader: async () => redirect('/theme-de-naissance-par-le-tarot-de-marseille'),
  },
  {
    path: '/theme-de-naissance-par-le-tarot-de-marseille',
    element: <ThemeDeNaissanceParLeTarotDeMarseille />,
  },
  {
    path: '/consultation-tarot-de-marseille',
    element: <ConsultationTarotDeMarseille />,
  },
  {
    path: '/stages/stage-alchimie-du-tarot',
    element: <StageAlchimieDuTarot />,
  },
  {
    path: '/la-trame',
    element: <LaTrame />,
  },
  {
    path: '/sophrologie',
    element: <Sophrologie />,
  },
  {
    path: '/massage-tantrique-tao',
    element: <MassageTantriqueTao />,
  },
  {
    path: '/constellations-familiales-et-systemiques',
    element: <ConstellationsFamilialesEtSystemiques />,
  },
  {
    path: '/events/journee-canalisations-et-constellations',
    element: <JourneeCanalisationsEtConstellations />,
  },
]);

function App() {
  const [userInfo] = useUserContextInfo();

  return (
    <div className="App">
      <UserContext.Provider value={userInfo}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
