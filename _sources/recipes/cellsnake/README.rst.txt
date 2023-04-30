:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellsnake'
.. highlight: bash

cellsnake
=========

.. conda:recipe:: cellsnake
   :replaces_section_title:
   :noindex:

   cellsnake\, a user\-friendly tool for single cell RNA sequencing analysis

   :homepage: https://github.com/sinanugur/cellsnake
   :license: MIT
   :recipe: /`cellsnake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellsnake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellsnake/meta.yaml>`_

   


.. conda:package:: cellsnake

   |downloads_cellsnake| |docker_cellsnake|

   :versions:
      
      

      ``0.2.0-0``,  ``0.2.0.dev9-0``

      

   
   :depends bedtools: 
   :depends bioconductor-celldex: 
   :depends bioconductor-clusterprofiler: ``4.6.0``
   :depends bioconductor-complexheatmap: 
   :depends bioconductor-enhancedvolcano: 
   :depends bioconductor-limma: 
   :depends bioconductor-miqc: 
   :depends bioconductor-org.hs.eg.db: 
   :depends bioconductor-rhdf5lib: 
   :depends bioconductor-scater: ``1.26.0``
   :depends bioconductor-singler: 
   :depends bioconductor-topgo: 
   :depends celltypist: ``1.3.0``
   :depends cmake: 
   :depends docopt: 
   :depends fuzzywuzzy: 
   :depends geos: ``3.11.1``
   :depends hdf5: 
   :depends kraken2: 
   :depends levenshtein: 
   :depends matplotlib-base: ``<3.7``
   :depends numba: ``>=0.56.4``
   :depends openblas: ``0.3.21``
   :depends pandas: 
   :depends pandoc: 
   :depends plotly: 
   :depends pysam: ``>=0.16.0.1``
   :depends python: 
   :depends python-kaleido: 
   :depends r-base: ``4.2.2``
   :depends r-clustree: ``0.5.0``
   :depends r-cowplot: 
   :depends r-curl: 
   :depends r-expm: 
   :depends r-fields: 
   :depends r-ggalluvial: 
   :depends r-ggpubr: 
   :depends r-ggraph: ``2.1.0``
   :depends r-ggthemes: 
   :depends r-hdf5r: 
   :depends r-igraph: ``1.3.4``
   :depends r-librarian: 
   :depends r-minqa: 
   :depends r-monocle3: 
   :depends r-nmf: 
   :depends r-openxlsx: 
   :depends r-optparse: 
   :depends r-patchwork: 
   :depends r-plotly: 
   :depends r-r.utils: 
   :depends r-randomcolor: 
   :depends r-reticulate: 
   :depends r-rsvd: 
   :depends r-seurat: ``4.3.0``
   :depends r-spdep: 
   :depends r-terra: 
   :depends r-tidyseurat: 
   :depends r-tidyverse: 
   :depends r-v8: 
   :depends r-viridis: 
   :depends r-xml: 
   :depends regex: ``>=2021.4.4``
   :depends samtools: 
   :depends scanpy: ``>=1.9.1``
   :depends scipy: 
   :depends snakemake: ``>=7.22.0``
   :depends umap-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cellsnake

   and update with::

      conda update cellsnake

   or use the docker container::

      docker pull quay.io/biocontainers/cellsnake:<tag>

   (see `cellsnake/tags`_ for valid values for ``<tag>``)


.. |downloads_cellsnake| image:: https://img.shields.io/conda/dn/bioconda/cellsnake.svg?style=flat
   :target: https://anaconda.org/bioconda/cellsnake
   :alt:   (downloads)
.. |docker_cellsnake| image:: https://quay.io/repository/biocontainers/cellsnake/status
   :target: https://quay.io/repository/biocontainers/cellsnake
.. _`cellsnake/tags`: https://quay.io/repository/biocontainers/cellsnake?tab=tags


.. raw:: html

    <script>
        var package = "cellsnake";
        var versions = ["0.2.0","0.2.0.dev9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellsnake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellsnake/README.html