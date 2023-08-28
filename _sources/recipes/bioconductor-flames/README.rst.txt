:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flames'
.. highlight: bash

bioconductor-flames
===================

.. conda:recipe:: bioconductor-flames
   :replaces_section_title:
   :noindex:

   FLAMES\: Full Length Analysis of Mutations and Splicing in long read RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/FLAMES.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-flames <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flames>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flames/meta.yaml>`_

   Semi\-supervised isoform detection and annotation from both bulk and single\-cell long read RNA\-seq data. Flames provides automated pipelines for analysing isoforms\, as well as intermediate functions for manual execution.


.. conda:package:: bioconductor-flames

   |downloads_bioconductor-flames| |docker_bioconductor-flames|

   :versions:
      
      

      ``1.6.0-0``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``0.99.31-0``

      

   
   :depends bioconductor-bambu: ``>=3.2.0,<3.3.0``
   :depends bioconductor-basilisk: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-dropletutils: ``>=1.20.0,<1.21.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-ggbio: ``>=1.48.0,<1.49.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rhtslib: ``>=2.2.0,<2.3.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends bioconductor-scran: ``>=1.28.0,<1.29.0``
   :depends bioconductor-scuttle: ``>=1.10.0,<1.11.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-zlibbioc: ``>=1.46.0,<1.47.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-reticulate: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-withr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
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
        var versions = ["1.6.0","1.3.4","1.3.4","1.0.2","1.0.2"];
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