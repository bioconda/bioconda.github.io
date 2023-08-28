:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-comapr'
.. highlight: bash

bioconductor-comapr
===================

.. conda:recipe:: bioconductor-comapr
   :replaces_section_title:
   :noindex:

   Crossover analysis and genetic map construction

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/comapr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-comapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comapr/meta.yaml>`_

   comapr detects crossover intervals for single gametes from their haplotype states sequences and stores the crossovers in GRanges object. The genetic distances can then be calculated via the mapping functions using estimated crossover rates for maker intervals. Visualisation functions for plotting interval\-based genetic map or cumulative genetic distances are implemented\, which help reveal the variation of crossovers landscapes across the genome and across individuals.


.. conda:package:: bioconductor-comapr

   |downloads_bioconductor-comapr| |docker_bioconductor-comapr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-tidyr: 
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

      mamba install bioconductor-comapr

   and update with::

      mamba update bioconductor-comapr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-comapr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-comapr:<tag>

   (see `bioconductor-comapr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-comapr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-comapr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-comapr
   :alt:   (downloads)
.. |docker_bioconductor-comapr| image:: https://quay.io/repository/biocontainers/bioconductor-comapr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-comapr
.. _`bioconductor-comapr/tags`: https://quay.io/repository/biocontainers/bioconductor-comapr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-comapr";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-comapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-comapr/README.html