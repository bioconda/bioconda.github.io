:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-standr'
.. highlight: bash

bioconductor-standr
===================

.. conda:recipe:: bioconductor-standr
   :replaces_section_title:
   :noindex:

   Spatial transcriptome analyses of Nanostring\'s DSP data in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/standR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-standr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-standr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-standr/meta.yaml>`_

   standR is an user\-friendly R package providing functions to assist conducting good\-practice analysis of Nanostring\'s GeoMX DSP data. All functions in the package are built based on the SpatialExperiment object\, allowing integration into various spatial transcriptomics\-related packages from Bioconductor. standR allows data inspection\, quality control\, normalization\, batch correction and evaluation with informative visualizations.


.. conda:package:: bioconductor-standr

   |downloads_bioconductor-standr| |docker_bioconductor-standr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.2-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-ruvseq: ``>=1.36.0,<1.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-spatialexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggalluvial: 
   :depends r-ggplot2: 
   :depends r-mclustcomp: 
   :depends r-patchwork: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-ruv: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-standr

   and update with::

      mamba update bioconductor-standr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-standr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-standr:<tag>

   (see `bioconductor-standr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-standr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-standr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-standr
   :alt:   (downloads)
.. |docker_bioconductor-standr| image:: https://quay.io/repository/biocontainers/bioconductor-standr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-standr
.. _`bioconductor-standr/tags`: https://quay.io/repository/biocontainers/bioconductor-standr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-standr";
        var versions = ["1.6.0","1.4.2","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-standr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-standr/README.html