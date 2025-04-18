:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regionalst'
.. highlight: bash

bioconductor-regionalst
=======================

.. conda:recipe:: bioconductor-regionalst
   :replaces_section_title:
   :noindex:

   Investigating regions of interest and performing cross\-regional analysis with spatial transcriptomics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RegionalST.html
   :license: GPL-3
   :recipe: /`bioconductor-regionalst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionalst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionalst/meta.yaml>`_

   This package analyze spatial transcriptomics data through cross\-regional analysis. It selects regions of interest \(ROIs\) and identifys cross\-regional cell type\-specific differential signals. The ROIs can be selected using automatic algorithm or through manual selection. It facilitates manual selection of ROIs using a shiny application.


.. conda:package:: bioconductor-regionalst

   |downloads_bioconductor-regionalst| |docker_bioconductor-regionalst|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bioconductor-bayesspace: ``>=1.12.0,<1.13.0``
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-scater: ``>=1.30.0,<1.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-toast: ``>=1.16.0,<1.17.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colorspace: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-rcolorbrewer: 
   :depends r-seurat: 
   :depends r-shiny: 
   :depends r-tibble: 
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

      mamba install bioconductor-regionalst

   and update with::

      mamba update bioconductor-regionalst

  To create a new environment, run::

      mamba create --name myenvname bioconductor-regionalst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regionalst:<tag>

   (see `bioconductor-regionalst/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regionalst| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regionalst.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regionalst
   :alt:   (downloads)
.. |docker_bioconductor-regionalst| image:: https://quay.io/repository/biocontainers/bioconductor-regionalst/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regionalst
.. _`bioconductor-regionalst/tags`: https://quay.io/repository/biocontainers/bioconductor-regionalst?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regionalst";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regionalst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regionalst/README.html