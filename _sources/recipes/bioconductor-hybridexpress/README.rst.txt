:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hybridexpress'
.. highlight: bash

bioconductor-hybridexpress
==========================

.. conda:recipe:: bioconductor-hybridexpress
   :replaces_section_title:
   :noindex:

   Comparative analysis of RNA\-seq data for hybrids and their progenitors

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HybridExpress.html
   :license: GPL-3
   :recipe: /`bioconductor-hybridexpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hybridexpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hybridexpress/meta.yaml>`_

   HybridExpress can be used to perform comparative transcriptomics analysis of hybrids \(or allopolyploids\) relative to their progenitor species. The package features functions to perform exploratory analyses of sample grouping\, identify differentially expressed genes in hybrids relative to their progenitors\, classify genes in expression categories \(N \= 12\) and classes \(N \= 5\)\, and perform functional analyses. We also provide users with graphical functions for the seamless creation of publication\-ready figures that are commonly used in the literature.


.. conda:package:: bioconductor-hybridexpress

   |downloads_bioconductor-hybridexpress| |docker_bioconductor-hybridexpress|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
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

      mamba install bioconductor-hybridexpress

   and update with::

      mamba update bioconductor-hybridexpress

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hybridexpress

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hybridexpress:<tag>

   (see `bioconductor-hybridexpress/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hybridexpress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hybridexpress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hybridexpress
   :alt:   (downloads)
.. |docker_bioconductor-hybridexpress| image:: https://quay.io/repository/biocontainers/bioconductor-hybridexpress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hybridexpress
.. _`bioconductor-hybridexpress/tags`: https://quay.io/repository/biocontainers/bioconductor-hybridexpress?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hybridexpress";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hybridexpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hybridexpress/README.html