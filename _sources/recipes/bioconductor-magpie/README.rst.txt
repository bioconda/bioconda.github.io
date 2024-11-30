:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-magpie'
.. highlight: bash

bioconductor-magpie
===================

.. conda:recipe:: bioconductor-magpie
   :replaces_section_title:
   :noindex:

   MeRIP\-Seq data Analysis for Genomic Power Investigation and Evaluation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/magpie.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-magpie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magpie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magpie/meta.yaml>`_

   This package aims to perform power analysis for the MeRIP\-seq study. It calculates FDR\, FDC\, power\, and precision under various study design parameters\, including but not limited to sample size\, sequencing depth\, and testing method. It can also output results into .xlsx files or produce corresponding figures of choice.


.. conda:package:: bioconductor-magpie

   |downloads_bioconductor-magpie| |docker_bioconductor-magpie|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-tress: ``>=1.8.0,<1.9.0``
   :depends r-aod: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-openxlsx: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
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

      mamba install bioconductor-magpie

   and update with::

      mamba update bioconductor-magpie

  To create a new environment, run::

      mamba create --name myenvname bioconductor-magpie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-magpie:<tag>

   (see `bioconductor-magpie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-magpie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-magpie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-magpie
   :alt:   (downloads)
.. |docker_bioconductor-magpie| image:: https://quay.io/repository/biocontainers/bioconductor-magpie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-magpie
.. _`bioconductor-magpie/tags`: https://quay.io/repository/biocontainers/bioconductor-magpie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-magpie";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-magpie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-magpie/README.html