import DetailRow from "../../ui/DetailRow";
import PageContainer from "../../ui/PageContainer";

function UserDetails({ user }) {
  return (
    <PageContainer
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.6rem",
        border: "3px solid var(--color-brand-500)",
        minWidth: "300px",
        borderRadius: "var(--border-radius-lg)",
      }}
    >
      <DetailRow
        label="Name"
        value={user.name}
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          textTransform: "capitalize",
          color: "var(--color-grey-900)",
        }}
      />

      <DetailRow label="Email" value={user.email} />
      <DetailRow label="Phone" value={user.phone} />
      <DetailRow label="Address" value={user.address.street} />
      <DetailRow label="Company" value={user.company.name} />
      <DetailRow label="Website" value={user.website} />
    </PageContainer>
  );
}

export default UserDetails;
