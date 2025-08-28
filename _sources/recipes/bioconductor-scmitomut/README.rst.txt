:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmitomut'
.. highlight: bash

bioconductor-scmitomut
======================

.. conda:recipe:: bioconductor-scmitomut
   :replaces_section_title:
   :noindex:

   Single\-cell Mitochondrial Mutation Analysis Tool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scMitoMut.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scmitomut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmitomut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmitomut/meta.yaml>`_

   This package is designed for calling lineage\-informative mitochondrial mutations using single\-cell sequencing data\, such as scRNASeq and scATACSeq \(preferably the latter due to RNA editing issues\). It includes functions for mutation calling and visualization. Mutation calling is done using beta\-binomial distribution.


.. conda:package:: bioconductor-scmitomut

   |downloads_bioconductor-scmitomut| |docker_bioconductor-scmitomut|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0a0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-readr: 
   :depends r-stringr: 
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

      mamba install bioconductor-scmitomut

   and update with::

      mamba update bioconductor-scmitomut

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scmitomut

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmitomut:<tag>

   (see `bioconductor-scmitomut/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmitomut| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmitomut.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmitomut
   :alt:   (downloads)
.. |docker_bioconductor-scmitomut| image:: https://quay.io/repository/biocontainers/bioconductor-scmitomut/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmitomut
.. _`bioconductor-scmitomut/tags`: https://quay.io/repository/biocontainers/bioconductor-scmitomut?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmitomut";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmitomut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmitomut/README.html