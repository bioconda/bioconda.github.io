:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlemoleculefootprinting'
.. highlight: bash

bioconductor-singlemoleculefootprinting
=======================================

.. conda:recipe:: bioconductor-singlemoleculefootprinting
   :replaces_section_title:
   :noindex:

   Analysis tools for Single Molecule Footprinting \(SMF\) data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SingleMoleculeFootprinting.html
   :license: GPL-3
   :recipe: /`bioconductor-singlemoleculefootprinting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlemoleculefootprinting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlemoleculefootprinting/meta.yaml>`_

   SingleMoleculeFootprinting provides functions to analyze Single Molecule Footprinting \(SMF\) data. Following the workflow exemplified in its vignette\, the user will be able to perform basic data analysis of SMF data with minimal coding effort. Starting from an aligned bam file\, we show how to perform quality controls over sequencing libraries\, extract methylation information at the single molecule level accounting for the two possible kind of SMF experiments \(single enzyme or double enzyme\)\, classify single molecules based on their patterns of molecular occupancy\, plot SMF information at a given genomic location.


.. conda:package:: bioconductor-singlemoleculefootprinting

   |downloads_bioconductor-singlemoleculefootprinting| |docker_bioconductor-singlemoleculefootprinting|

   :versions:
      
      

      ``2.0.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-plyranges: ``>=1.26.0,<1.27.0``
   :depends bioconductor-quasr: ``>=1.46.0,<1.47.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpointdensity: 
   :depends r-ggrepel: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyverse: 
   :depends r-viridis: 
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

      mamba install bioconductor-singlemoleculefootprinting

   and update with::

      mamba update bioconductor-singlemoleculefootprinting

  To create a new environment, run::

      mamba create --name myenvname bioconductor-singlemoleculefootprinting

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlemoleculefootprinting:<tag>

   (see `bioconductor-singlemoleculefootprinting/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlemoleculefootprinting| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlemoleculefootprinting.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlemoleculefootprinting
   :alt:   (downloads)
.. |docker_bioconductor-singlemoleculefootprinting| image:: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprinting/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprinting
.. _`bioconductor-singlemoleculefootprinting/tags`: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprinting?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singlemoleculefootprinting";
        var versions = ["2.0.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlemoleculefootprinting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlemoleculefootprinting/README.html