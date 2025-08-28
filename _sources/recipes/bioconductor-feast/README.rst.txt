:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-feast'
.. highlight: bash

bioconductor-feast
==================

.. conda:recipe:: bioconductor-feast
   :replaces_section_title:
   :noindex:

   FEAture SelcTion \(FEAST\) for Single\-cell clustering

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/FEAST.html
   :license: GPL-2
   :recipe: /`bioconductor-feast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-feast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-feast/meta.yaml>`_

   Cell clustering is one of the most important and commonly performed tasks in single\-cell RNA sequencing \(scRNA\-seq\) data analysis. An important step in cell clustering is to select a subset of genes \(referred to as “features”\)\, whose expression patterns will then be used for downstream clustering. A good set of features should include the ones that distinguish different cell types\, and the quality of such set could have significant impact on the clustering accuracy. FEAST is an R library for selecting most representative features before performing the core of scRNA\-seq clustering. It can be used as a plug\-in for the etablished clustering algorithms such as SC3\, TSCAN\, SHARP\, SIMLR\, and Seurat. The core of FEAST algorithm includes three steps\: 1. consensus clustering\; 2. gene\-level significance inference\; 3. validation of an optimized feature set.


.. conda:package:: bioconductor-feast

   |downloads_bioconductor-feast| |docker_bioconductor-feast|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-sc3: ``>=1.34.0,<1.35.0``
   :depends bioconductor-sc3: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-tscan: ``>=1.44.0,<1.45.0``
   :depends bioconductor-tscan: ``>=1.44.0,<1.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-irlba: 
   :depends r-matrixstats: 
   :depends r-mclust: 
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

      mamba install bioconductor-feast

   and update with::

      mamba update bioconductor-feast

  To create a new environment, run::

      mamba create --name myenvname bioconductor-feast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-feast:<tag>

   (see `bioconductor-feast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-feast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-feast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-feast
   :alt:   (downloads)
.. |docker_bioconductor-feast| image:: https://quay.io/repository/biocontainers/bioconductor-feast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-feast
.. _`bioconductor-feast/tags`: https://quay.io/repository/biocontainers/bioconductor-feast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-feast";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-feast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-feast/README.html