import type { Metadata } from "next";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: `Suppression de compte – ${config.appName}`,
  description: `Demandez la suppression de votre compte ${config.appName} et des données associées.`,
};

export default function SuppressionCompte() {
  const {
    appName,
    developerName,
    contactEmail,
    responseDelayDays,
    deletionDelayDays,
    deletedData,
    retainedData,
  } = config;

  const subject = `Suppression de compte – ${appName}`;
  const body =
    "Bonjour,\n\nJe souhaite supprimer mon compte et les données associées.\n\n" +
    "Adresse e-mail ou nom d'utilisateur du compte : \n\nMerci.";
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <main className="page">
      <h1>Supprimer votre compte {appName}</h1>
      <p className="lead">
        Cette page explique comment demander la suppression de votre compte et des données
        associées. Application proposée par <strong>{developerName}</strong>.
      </p>

      <section>
        <h2>Option 1 : depuis l&apos;application</h2>
        <p>
          Ouvrez {appName}, puis allez dans <strong>Paramètres &gt; Compte &gt; Supprimer mon
          compte</strong> et confirmez.
        </p>
      </section>

      <section>
        <h2>Option 2 : par e-mail</h2>
        <ol>
          <li>
            Envoyez un e-mail à <a href={`mailto:${contactEmail}`}>{contactEmail}</a> avec
            l&apos;objet « {subject} ».
          </li>
          <li>
            Indiquez l&apos;adresse e-mail ou le nom d&apos;utilisateur associé à votre compte.
          </li>
          <li>
            Nous vous répondons sous {responseDelayDays} jours pour confirmer la demande.
          </li>
        </ol>
        <p>
          <a className="btn" href={mailto}>
            Envoyer la demande de suppression
          </a>
        </p>
      </section>

      <section>
        <h2>Données supprimées</h2>
        <ul>
          {deletedData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Données conservées</h2>
        {retainedData.length === 0 ? (
          <p>Aucune donnée personnelle n&apos;est conservée après la suppression du compte.</p>
        ) : (
          <ul>
            {retainedData.map((d) => (
              <li key={d.label}>
                <strong>{d.label}</strong> : conservées {d.duration} ({d.reason}).
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Délai de suppression</h2>
        <p>
          Votre compte et vos données sont supprimés définitivement sous {deletionDelayDays}{" "}
          jours maximum après confirmation de la demande. Cette action est irréversible.
        </p>
      </section>

      <footer>
        <p>
          Une question ? Écrivez-nous à <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </footer>
    </main>
  );
}
