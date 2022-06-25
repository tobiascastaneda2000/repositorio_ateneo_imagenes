package xyz.dev3k.ateneo2.model;

import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.label.ImageLabel;

import java.util.List;

public class ImagenEtiquetada {
    private String id;
    private String path;
    private List<ImageLabel> labels;

    public ImagenEtiquetada(String id, String path, List<ImageLabel> labels) {
        this.id = id;
        this.path = path;
        this.labels = labels;
    }

    public ImagenEtiquetada(String id, List<ImageLabel> labels) {
        this.id = id;
        this.labels = labels;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public List<ImageLabel> getLabel() {
        return labels;
    }

    public void setLabel(List<ImageLabel> labels) {
        this.labels = labels;
    }
}
