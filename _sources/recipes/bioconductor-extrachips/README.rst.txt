:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-extrachips'
.. highlight: bash

bioconductor-extrachips
=======================

.. conda:recipe:: bioconductor-extrachips
   :replaces_section_title:
   :noindex:

   Additional functions for working with ChIP\-Seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/extraChIPs.html
   :license: GPL-3
   :recipe: /`bioconductor-extrachips <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-extrachips>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-extrachips/meta.yaml>`_

   This package builds on existing tools and adds some simple but extremely useful capabilities for working wth ChIP\-Seq data. The focus is on detecting differential binding windows\/regions. One set of functions focusses on set\-operations retaining mcols for GRanges objects\, whilst another group of functions are to aid visualisation of results. Coercion to tibble objects is also implemented.


.. conda:package:: bioconductor-extrachips

   |downloads_bioconductor-extrachips| |docker_bioconductor-extrachips|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.5-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocio: ``>=1.16.0,<1.17.0``
   :depends bioconductor-biocio: ``>=1.16.0,<1.17.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-csaw: ``>=1.40.0,<1.41.0``
   :depends bioconductor-csaw: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicinteractions: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicinteractions: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-broom: 
   :depends r-complexupset: 
   :depends r-dplyr: ``>=1.1.1``
   :depends r-forcats: 
   :depends r-ggforce: 
   :depends r-ggplot2: ``>=3.5.0``
   :depends r-ggrepel: 
   :depends r-ggside: ``>=0.3.1``
   :depends r-glue: 
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-vctrs: 
   :depends r-venndiagram: 
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

      mamba install bioconductor-extrachips

   and update with::

      mamba update bioconductor-extrachips

  To create a new environment, run::

      mamba create --name myenvname bioconductor-extrachips

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-extrachips:<tag>

   (see `bioconductor-extrachips/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-extrachips| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-extrachips.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-extrachips
   :alt:   (downloads)
.. |docker_bioconductor-extrachips| image:: https://quay.io/repository/biocontainers/bioconductor-extrachips/status
   :target: https://quay.io/repository/biocontainers/bioconductor-extrachips
.. _`bioconductor-extrachips/tags`: https://quay.io/repository/biocontainers/bioconductor-extrachips?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-extrachips";
        var versions = ["1.10.0","1.6.0","1.4.5","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-extrachips/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-extrachips/README.html