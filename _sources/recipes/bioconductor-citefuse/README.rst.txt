:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-citefuse'
.. highlight: bash

bioconductor-citefuse
=====================

.. conda:recipe:: bioconductor-citefuse
   :replaces_section_title:
   :noindex:

   CiteFuse\: multi\-modal analysis of CITE\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CiteFuse.html
   :license: GPL-3
   :recipe: /`bioconductor-citefuse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-citefuse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-citefuse/meta.yaml>`_

   CiteFuse pacakage implements a suite of methods and tools for CITE\-seq data from pre\-processing to integrative analytics\, including doublet detection\, network\-based modality integration\, cell type clustering\, differential RNA and protein expression analysis\, ADT evaluation\, ligand\-receptor interaction analysis\, and interactive web\-based visualisation of the analyses.


.. conda:package:: bioconductor-citefuse

   |downloads_bioconductor-citefuse| |docker_bioconductor-citefuse|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-compositions: 
   :depends r-cowplot: 
   :depends r-dbscan: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggridges: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-mixtools: 
   :depends r-pheatmap: 
   :depends r-randomforest: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-uwot: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-citefuse

   and update with::

      mamba update bioconductor-citefuse

  To create a new environment, run::

      mamba create --name myenvname bioconductor-citefuse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-citefuse:<tag>

   (see `bioconductor-citefuse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-citefuse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-citefuse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-citefuse
   :alt:   (downloads)
.. |docker_bioconductor-citefuse| image:: https://quay.io/repository/biocontainers/bioconductor-citefuse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-citefuse
.. _`bioconductor-citefuse/tags`: https://quay.io/repository/biocontainers/bioconductor-citefuse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-citefuse";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-citefuse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-citefuse/README.html