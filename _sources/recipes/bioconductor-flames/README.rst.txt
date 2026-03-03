:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flames'
.. highlight: bash

bioconductor-flames
===================

.. conda:recipe:: bioconductor-flames
   :replaces_section_title:
   :noindex:

   FLAMES\: Full Length Analysis of Mutations and Splicing in long read RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/FLAMES.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-flames <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flames>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flames/meta.yaml>`_

   Semi\-supervised isoform detection and annotation from both bulk and single\-cell long read RNA\-seq data. Flames provides automated pipelines for analysing isoforms\, as well as intermediate functions for manual execution.


.. conda:package:: bioconductor-flames

   |downloads_bioconductor-flames| |docker_bioconductor-flames|

   :versions:
      
      

      ``2.4.2-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``0.99.31-0``

      

   
   :depends bioconductor-bambu: ``>=3.12.0,<3.13.0``
   :depends bioconductor-bambu: ``>=3.12.1,<3.13.0a0``
   :depends bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends bioconductor-basilisk: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends bioconductor-complexheatmap: ``>=2.26.1,<2.27.0a0``
   :depends bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicalignments: ``>=1.46.0,<1.47.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends bioconductor-ggbio: ``>=1.58.0,<1.59.0``
   :depends bioconductor-ggbio: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-rhtslib: ``>=3.6.0,<3.7.0``
   :depends bioconductor-rhtslib: ``>=3.6.0,<3.7.0a0``
   :depends bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.26.0,<2.27.0a0``
   :depends bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-s4arrays: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4arrays: ``>=1.10.1,<1.11.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends bioconductor-scater: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends bioconductor-scran: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends bioconductor-scuttle: ``>=1.20.0,<1.21.0a0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-shortread: ``>=1.68.0,<1.69.0``
   :depends bioconductor-shortread: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=19``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-abind: 
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-circlize: 
   :depends r-cli: 
   :depends r-cowplot: 
   :depends r-crew: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-magick: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-readr: 
   :depends r-reticulate: 
   :depends r-scatterpie: 
   :depends r-stringr: 
   :depends r-testthat: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-withr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-flames

   and update with::

      mamba update bioconductor-flames

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flames

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flames:<tag>

   (see `bioconductor-flames/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flames| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flames.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flames
   :alt:   (downloads)
.. |docker_bioconductor-flames| image:: https://quay.io/repository/biocontainers/bioconductor-flames/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flames
.. _`bioconductor-flames/tags`: https://quay.io/repository/biocontainers/bioconductor-flames?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flames";
        var versions = ["2.4.2","1.8.0","1.6.0","1.3.4","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flames/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flames/README.html