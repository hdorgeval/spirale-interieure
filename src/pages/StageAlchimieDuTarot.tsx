import { FC } from 'react';
import { CallablePhoneNumber } from '../components/CallablePhoneNumber';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { Quote } from '../components/Quote';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { websiteConfig } from '../website.config';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const StageAlchimieDuTarot: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/landing-page.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))"
      backgroundPositionX="44%"
      backgroundPositionY="29%"
      htmlTitle={`Stage Alchimie du Tarot du 1er au 3 mai 2026 | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="container-fluid d-flex flex-column justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <SemiTransparentTile
            background="linear-gradient(rgb(12, 65, 71,1), rgba(12, 65, 71,0.3))"
            className="card card-lg text-start text-light fs-5 font-monserrat m-2 fw-medium"
          >
            <img
              src="/images/flyers/alchimie-du-tarot-01.webp"
              alt="Stage Alchimie du Tarot du 1er au 3 mai 2026"
              className="img-fluid rounded-3"
            />
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(12, 65, 71,1), rgba(12, 65, 71,0.3))"
            className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2 fw-medium"
          >
            <ReadMoreReadLess
              height={'21vh'}
              readMoreText={'Lire plus'}
              readLessText={'Lire moins'}
            >
              <p className="text-center fs-4 fw-bolder mb-4">
                Stage L’Alchimie du Tarot : voyage du corps à l’âme, au rythme de l’eau !
              </p>
              <Description>
                Ce stage est une expérience alchimique : une immersion sensorielle et vibratoire, un
                chemin de connexion, de transformation, où nous explorerons le corps et la psyché,
                guidé par la sagesse symbolique des 22 arcanes du Tarot et la douceur enveloppante
                de l’eau chaude. Dans le mouvement et la chaleur de l’eau, dans la résonance des
                symboles et la vibration des arcanes du tarot, nait une alchimie intérieure – celle
                qui transforme, qui relie et qui élève ! Dans la douceur de l’eau, les résistances
                se dissolvent, les émotions se déposent, et l’essence de l’être peut émerger, libre
                et fluide. Je vous propose un retour à l’essence de votre Être, à cette présence
                intime ou le cœur s’ouvre, où la connaissance de soi se fait ressentir, où
                l’évolution intérieure prend racine dans la douceur, la lenteur et le souffle.
                Chaque carte est un miroir vers une évolution intérieure, par l’expérience directe
                du vivant et l’union du corps, du cœur et de l’esprit. C’est une invitation à se
                laisser transformer, à vibrer pleinement et à retrouver la connexion sacrée entre
                soi, la Vie et le grand mystère.
              </Description>
            </ReadMoreReadLess>
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(12, 65, 71,1), rgba(12, 65, 71,0.3))"
            className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2 fw-medium"
          >
            <p className="fw-bolder mb-3">
              <i className="bi bi-circle-fill fs-9 me-2 position-relative top--3px"></i>
              Rencontrez les 22 lames du Tarot et leur enseignement symbolique et vibratoire !
            </p>

            <p className="fw-bolder mb-3">
              <i className="bi bi-circle-fill fs-9 me-2 position-relative top--3px"></i>
              Découvrez votre progr’Âme d’incarnation !
            </p>

            <p className="fw-bolder mb-3">
              <i className="bi bi-circle-fill fs-9 me-2 position-relative top--3px"></i>
              Activez votre GPS intérieur à travers votre cartographie de naissance pour manifester
              pleinement vos talents, ressources et potentiels !
            </p>

            <p className="fw-bolder mb-3">
              <i className="bi bi-circle-fill fs-9 me-2 position-relative top--3px"></i>
              Plongez dans les eaux du corps pour y retrouver la mémoire de l’âme, écouter la
              vibration du cœur et laisser l’esprit s’ouvrir à une conscience plus vaste !
            </p>

            <p className="fw-bolder mb-3">
              <i className="bi bi-circle-fill fs-9 me-2 position-relative top--3px"></i>
              Vivez des immersions sensorielles et symboliques dans la Matrice de l’eau chaude !
            </p>

            <p className="fw-bolder mb-3">
              <i className="bi bi-circle-fill fs-9 me-2 position-relative top--3px"></i>
              Explorez le Tarot comme miroir de l’Âme, pont entre le visible et l’invisible, entre
              le corps et la conscience, vers la connaissance et la transformation intérieure !
            </p>
          </SemiTransparentTile>

          <SemiTransparentTile
            background="linear-gradient(rgb(12, 65, 71,1), rgba(12, 65, 71,0.3))"
            className="card card-lg text-start text-light font-monserrat m-2"
          >
            <div className="card-body">
              <Quote
                sentence="Se laisser traverser par l’eau et le tarot, c’est retrouver son essence "
                author=""
              />
            </div>
          </SemiTransparentTile>

          <SemiTransparentTile
            background="linear-gradient(rgb(12, 65, 71,1), rgba(12, 65, 71,0.3))"
            className="card card-lg text-start text-light font-monserrat m-2"
          >
            <div className="card-header py-3">
              <h5 id="déroulement-et-tarifs" className="card-title mb-0 fw-bolder text-center">
                Déroulement et tarifs
              </h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="pt-2 pb-1 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-event fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle pt-1">
                    <span className="text-wrap fw-medium mt-2 mb-2">
                      3 jours du 1er mai à 11h au dimanche 3 mai à 17h
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-2 pb-0 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="fw-medium mt-1 mb-2">
                      Home Sérénité - 14220 Mutrécy (à 20mn de Caen, à 2h par le train de Paris St
                      Lazare à la gare de Caen)
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-2 pb-1 text-light">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <div className="d-inline-block">
                      <span className="">Tarif: </span>
                      <span className="ms-1 fw-bolder">300€</span>
                    </div>
                    <div className="d-inline-block">
                      <span className="">Hébergement sur place : </span>
                      <span className="ms-1 fw-bolder">50 € par nuitée</span>
                    </div>
                    <div className="d-inline-block">
                      <span className="">Repas :</span>
                      <span className=" ms-1 fw-bolder">Repas en auberge espagnole</span>
                    </div>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">Pour toute question ou renseignement :</span>
                    <span className="">
                      Isabelle HERVOUET : <CallablePhoneNumber phoneNumber="0601908352" />
                    </span>
                    <span className="mt-2">Places limitées à 11 participants</span>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>

          <SemiTransparentTile
            background="linear-gradient(rgb(12, 65, 71,1), rgba(12, 65, 71,0.3))"
            className="card card-lg text-start text-light font-monserrat m-2"
          >
            <OpenExternalLinkButton
              className="btn fw-bolder w-100 mt-0 me-0 pe-0 disabled"
              link="https://billetweb.fr/stage-alchimie-du-tarot-1"
              analyticsEvent="inscription-stage-alchimie-tarot"
              title="S'inscrire au stage"
            >
              S'inscrire au stage (inscriptions bientôt ouvertes)
            </OpenExternalLinkButton>
          </SemiTransparentTile>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

StageAlchimieDuTarot.displayName = 'StageAlchimieDuTarot';
