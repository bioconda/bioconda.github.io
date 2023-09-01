:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biscuiteer'
.. highlight: bash

bioconductor-biscuiteer
=======================

.. conda:recipe:: bioconductor-biscuiteer
   :replaces_section_title:
   :noindex:

   Convenience Functions for Biscuit

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/biscuiteer.html
   :license: GPL-3
   :recipe: /`bioconductor-biscuiteer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biscuiteer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biscuiteer/meta.yaml>`_

   A test harness for bsseq loading of Biscuit output\, summarization of WGBS data over defined regions and in mappable samples\, with or without imputation\, dropping of mostly\-NA rows\, age estimates\, etc.


.. conda:package:: bioconductor-biscuiteer

   |downloads_bioconductor-biscuiteer| |docker_bioconductor-biscuiteer|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biscuiteerdata: ``>=1.14.0,<1.15.0``
   :depends bioconductor-bsseq: ``>=1.36.0,<1.37.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends bioconductor-dmrseq: ``>=1.20.0,<1.21.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-mus.musculus: ``>=1.3.0,<1.4.0``
   :depends bioconductor-qdnaseq: ``>=1.36.0,<1.37.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-gtools: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-qualv: 
   :depends r-r.utils: 
   :depends r-readr: 
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

      mamba install bioconductor-biscuiteer

   and update with::

      mamba update bioconductor-biscuiteer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biscuiteer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biscuiteer:<tag>

   (see `bioconductor-biscuiteer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biscuiteer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biscuiteer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biscuiteer
   :alt:   (downloads)
.. |docker_bioconductor-biscuiteer| image:: https://quay.io/repository/biocontainers/bioconductor-biscuiteer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biscuiteer
.. _`bioconductor-biscuiteer/tags`: https://quay.io/repository/biocontainers/bioconductor-biscuiteer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biscuiteer";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biscuiteer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biscuiteer/README.html