import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@/hooks/formHooks';
import type { UploadResponse } from '@sharedTypes/MessageTypes';
import { useFile, useMedia } from 'mediastore/apiHooks';

const MediaForm = () => {
  const [mediaType, setMediaType] = useState<'video' | 'live_stream'>('video');
  const [file, setFile] = useState<File | null>(null);

  const { postFile } = useFile();
  const { postMedia } = useMedia();
  const navigate = useNavigate();

  const initValues = {
    title: '',
    description: '',
    tag: '',
    stream_url: '',
  };

  const doUpload = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token || (!file && !inputs.stream_url)) {
        return;
      }

      let fileResult: UploadResponse = {
        message: '',
        data: {
          filename: inputs.stream_url,
          media_type: 'application/dash+xml',
          filesize: 0,
        },
      };
      if (mediaType === 'video' && file) {
        fileResult = await postFile(file, token);
      }

      const mediaInputs = {
        title: inputs.title,
        description: inputs.description,
        type: mediaType,
        tags: inputs.tag.split(',').map((tag) => tag.trim()),
        screenshots: fileResult.data.screenshots || [],
      };

      const mediaResult = await postMedia(fileResult, mediaInputs, token);
      alert(mediaResult.message);
      navigate('/profile');
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(
    doUpload,
    initValues
  );

  return (
    <div style={{ padding: 16 }}>
      <form onSubmit={handleSubmit}>
        <div style={{ paddingBottom: 16 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
            Type
          </h3>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <input
                type="radio"
                id="video"
                name="type"
                value="video"
                defaultChecked={mediaType === 'video'}
                onClick={() => setMediaType('video')}
              />
              <span>Video</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <input
                type="radio"
                id="live"
                name="type"
                value="live"
                defaultChecked={mediaType === 'live_stream'}
                onClick={() => setMediaType('live_stream')}
              />
              <span>Live Stream</span>
            </label>
          </div>
        </div>

        <div style={{ paddingBottom: 16 }}>
          <label
            htmlFor="title"
            style={{ display: 'block', fontWeight: 700, marginBottom: 8 }}
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title for your video"
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: 6,
            }}
          />
        </div>

        <div style={{ paddingBottom: 16 }}>
          <label
            htmlFor="description"
            style={{ display: 'block', fontWeight: 700, marginBottom: 8 }}
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Describe your video so others can find it"
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: 6,
            }}
          />
        </div>

        <div style={{ paddingBottom: 16 }}>
          <label
            htmlFor="tag"
            style={{ display: 'block', fontWeight: 700, marginBottom: 8 }}
          >
            Tag
          </label>
          <input
            type="text"
            name="tag"
            id="tag"
            placeholder="Separate tags with commas"
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: 6,
            }}
          />
        </div>

        {mediaType === 'video' ? (
          <div style={{ paddingBottom: 16 }}>
            <label
              htmlFor="file"
              style={{ display: 'block', fontWeight: 700, marginBottom: 8 }}
            >
              File
            </label>
            <input
              id="file_input"
              type="file"
              name="file"
              accept="video/*"
              onChange={handleFileChange}
              style={{ width: '100%' }}
            />
          </div>
        ) : (
          <div style={{ paddingBottom: 16 }}>
            <label
              htmlFor="stream_url"
              style={{ display: 'block', fontWeight: 700, marginBottom: 8 }}
            >
              Stream URL
            </label>
            <input
              type="text"
              name="stream_url"
              id="stream_url"
              placeholder="Your stream URL"
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #e5e7eb',
                borderRadius: 6,
              }}
            />
          </div>
        )}

        <div style={{ paddingTop: 16 }}>
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              background: '#111827',
              color: '#fff',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MediaForm;
