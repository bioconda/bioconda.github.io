:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cdi'
.. highlight: bash

bioconductor-cdi
================

.. conda:recipe:: bioconductor-cdi
   :replaces_section_title:
   :noindex:

   Clustering Deviation Index \(CDI\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CDI.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-cdi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cdi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cdi/meta.yaml>`_

   Single\-cell RNA\-sequencing \(scRNA\-seq\) is widely used to explore cellular variation. The analysis of scRNA\-seq data often starts from clustering cells into subpopulations. This initial step has a high impact on downstream analyses\, and hence it is important to be accurate. However\, there have not been unsupervised metric designed for scRNA\-seq to evaluate clustering performance. Hence\, we propose clustering deviation index \(CDI\)\, an unsupervised metric based on the modeling of scRNA\-seq UMI counts to evaluate clustering of cells.


.. conda:package:: bioconductor-cdi

   |downloads_bioconductor-cdi| |docker_bioconductor-cdi|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggsci: 
   :depends r-matrixstats: 
   :depends r-reshape2: 
   :depends r-seurat: 
   :depends r-seuratobject: 
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

      mamba install bioconductor-cdi

   and update with::

      mamba update bioconductor-cdi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cdi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cdi:<tag>

   (see `bioconductor-cdi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cdi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cdi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cdi
   :alt:   (downloads)
.. |docker_bioconductor-cdi| image:: https://quay.io/repository/biocontainers/bioconductor-cdi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cdi
.. _`bioconductor-cdi/tags`: https://quay.io/repository/biocontainers/bioconductor-cdi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cdi";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cdi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cdi/README.html