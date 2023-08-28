:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scfeatures'
.. highlight: bash

bioconductor-scfeatures
=======================

.. conda:recipe:: bioconductor-scfeatures
   :replaces_section_title:
   :noindex:

   scFeatures\: Multi\-view representations of single\-cell and spatial data for disease outcome prediction

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scFeatures.html
   :license: GPL-3
   :recipe: /`bioconductor-scfeatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfeatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfeatures/meta.yaml>`_

   scFeatures constructs multi\-view representations of single\-cell and spatial data. scFeatures is a tool that generates multi\-view representations of single\-cell and spatial data through the construction of a total of 17 feature types. These features can then be used for a variety of analyses using other software in Biocondutor.


.. conda:package:: bioconductor-scfeatures

   |downloads_bioconductor-scfeatures| |docker_bioconductor-scfeatures|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-aucell: ``>=1.22.0,<1.23.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends bioconductor-ensdb.hsapiens.v79: ``>=2.99.0,<2.100.0``
   :depends bioconductor-ensdb.mmusculus.v79: ``>=2.99.0,<2.100.0``
   :depends bioconductor-ensembldb: ``>=2.24.0,<2.25.0``
   :depends bioconductor-gsva: ``>=1.48.0,<1.49.0``
   :depends bioconductor-matrixgenerics: ``>=1.12.0,<1.13.0``
   :depends bioconductor-singlecellsignalr: ``>=1.12.0,<1.13.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-glue: 
   :depends r-gtools: 
   :depends r-msigdbr: 
   :depends r-proxyc: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-seurat: 
   :depends r-spatstat.explore: 
   :depends r-spatstat.geom: 
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

      mamba install bioconductor-scfeatures

   and update with::

      mamba update bioconductor-scfeatures

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scfeatures

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scfeatures:<tag>

   (see `bioconductor-scfeatures/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scfeatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scfeatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scfeatures
   :alt:   (downloads)
.. |docker_bioconductor-scfeatures| image:: https://quay.io/repository/biocontainers/bioconductor-scfeatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scfeatures
.. _`bioconductor-scfeatures/tags`: https://quay.io/repository/biocontainers/bioconductor-scfeatures?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scfeatures";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scfeatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scfeatures/README.html