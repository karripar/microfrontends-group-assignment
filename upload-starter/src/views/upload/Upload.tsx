import MediaForm from './MediaForm.tsx';

const Upload = () => {
  return (
    <main style={{ padding: 16 }}>
      <div style={{ maxWidth: 768, margin: '0 auto' }}>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <div style={{ padding: 16, textAlign: 'center' }}>
            <h2 style={{ fontSize: 24, fontWeight: 700 }}>Upload</h2>
          </div>
          <MediaForm />
        </div>
      </div>
    </main>
  );
};

export default Upload;
