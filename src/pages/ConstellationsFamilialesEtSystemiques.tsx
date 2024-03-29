import { FC } from 'react';
import { CallablePhoneNumberButton } from '../components/CallablePhoneNumberButton';
import { Description } from '../components/Description';
import { OpenModalButton } from '../components/OpenModalButton';
import { PhoneNumber } from '../components/PhoneNumber';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { RendezVousModal } from '../components/RendezVousModal';
import { websiteConfig } from '../website.config';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const ConstellationsFamilialesEtSystemiques: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/backgrounds/constellations.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.9), rgba(79, 79, 93, 0.1))"
      backgroundPositionX="53%"
      backgroundPositionY="0%"
      htmlTitle={`Constellations familiales et systémiques | ${websiteConfig.websiteTitle}`}
    >
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-7">
          <PageTitle>Constellations familiales et systémiques</PageTitle>
          <OpenModalButton
            className="btn btn-outline-light fw-bolder w-75 mt-1"
            modalId="prendre-rendez-vous"
          >
            Prendre rendez-vous
          </OpenModalButton>
        </div>
        <div className="" style={{ minHeight: '7vh' }}></div>
        <div className="container-fluid d-flex flex-row justify-content-start align-items-stretch flex-wrap py-2 px-0">
          <SemiTransparentTile
            background="linear-gradient(rgb(37, 54, 35, 0.7), rgba(14, 62, 106, 0.2))"
            className="card card-lg text-start text-light fs-5 font-monserrat px-4 py-3 m-2 fw-medium"
          >
            <ReadMoreReadLess
              height={'21vh'}
              readMoreText={'Lire plus'}
              readLessText={'Lire moins'}
            >
              <Description>
                Les Constellations sont un outil de développement personnel, de compréhension et de
                changement pour agir dans sa vie. C'est une méthode de thérapie transgénérationnelle
                dont le but est la mise à jour de l'inconscient familial. Des évènements vécus par
                nos ancêtres, nos parents ou nos proches, des secrets, des conflits non résolus
                peuvent être à l'origine de nos blocages et nos répétitions. Apporter de la
                conscience et désamalgamer certaines énergies, croyances… qui ne nous appartiennent
                pas, va permettre d'éclairer des zones cachées, inconscientes, pour libérer et
                réparer des blocages et ce qui vous empêche d'agir. On vient remettre la bonne
                information au bon endroit ; remettre de l'amour, du lien là où il n'y a en a pas eu
                et permettre ainsi la libération, la réconciliation afin d'être pleinement nous-même
                sur notre chemin de vie. Les constellations se pratiquent en groupe ou en
                individuelle.
              </Description>
              <p>
                <OpenModalButton
                  className="btn btn-outline-light fw-bolder mt-0 mb-1"
                  modalId="prendre-rendez-vous"
                >
                  Prendre rendez-vous
                </OpenModalButton>
              </p>
            </ReadMoreReadLess>
          </SemiTransparentTile>
          <SemiTransparentTile
            background="linear-gradient(rgb(37, 54, 35, 0.7), rgba(14, 62, 106, 0.2))"
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
                  <i className="bi bi-clock-history fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle pt-1">
                    <span className="text-wrap fs-7">Séance individuelle d' 1h00</span>
                    <span className="text-wrap fs-7">
                      Séance collective de 1/2 journée à 1 journée
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-2 pb-0 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">En présentiel</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-2 pb-0 text-light">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="fw-bolder">70€ la séance individuelle d' 1h00</span>
                    <span className="fw-bolder">
                      40€ la séance collective en tant que participant
                    </span>
                    <span className="fw-bolder">80€ la séance collective pour être constellé</span>

                    {/* <span className="fs-7 fw-normal">Moyens de paiement: virement ou espèces</span> */}
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="py-3 text-light fw-bolder">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-event fs-2 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <OpenModalButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      modalId="prendre-rendez-vous"
                    >
                      Prendre rendez-vous
                    </OpenModalButton>

                    <span className="mt-4">Ou bien appelez-moi directement :</span>
                    <CallablePhoneNumberButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      phoneNumber={websiteConfig.links.phone.url}
                      title="Appeler pour prendre rendez-vous"
                      analyticsEvent="tel-constellation"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <span className="">
                          Isabelle Hervouet{' '}
                          <PhoneNumber phoneNumber={websiteConfig.links.phone.url} />
                        </span>
                      </div>
                    </CallablePhoneNumberButton>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
        </div>

        <RendezVousModal
          modalId="prendre-rendez-vous"
          analyticsEvent="rdv-form-constellation"
          subjectOptions={[
            { label: 'Prendre un rendez-vous Constellations familiales et systémiques' },
            { label: 'Autre' },
          ]}
          backgroundColor="#534119"
          backgroundImageUrl="/images/backgrounds/constellations.webp"
          backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.9), rgba(79, 79, 93, 0.1))"
          backgroundPositionX="53%"
          backgroundPositionY="0%"
          formBackgroundClassName="form-rdv-light-green fw-medium text-light placeholder-text-light"
        ></RendezVousModal>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

ConstellationsFamilialesEtSystemiques.displayName = 'ConstellationsFamilialesEtSystemiques';
