:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multiwgcna'
.. highlight: bash

bioconductor-multiwgcna
=======================

.. conda:recipe:: bioconductor-multiwgcna
   :replaces_section_title:
   :noindex:

   multiWGCNA

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/multiWGCNA.html
   :license: GPL-3
   :recipe: /`bioconductor-multiwgcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiwgcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiwgcna/meta.yaml>`_

   An R package for deeping mining gene co\-expression networks in multi\-trait expression data. Provides functions for analyzing\, comparing\, and visualizing WGCNA networks across conditions. multiWGCNA was designed to handle the common case where there are multiple biologically meaningful sample traits\, such as disease vs wildtype across development or anatomical region.


.. conda:package:: bioconductor-multiwgcna

   |downloads_bioconductor-multiwgcna| |docker_bioconductor-multiwgcna|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-dcanr: ``>=1.18.0,<1.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-flashclust: 
   :depends r-ggalluvial: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-patchwork: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-wgcna: 
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

      mamba install bioconductor-multiwgcna

   and update with::

      mamba update bioconductor-multiwgcna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multiwgcna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multiwgcna:<tag>

   (see `bioconductor-multiwgcna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multiwgcna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multiwgcna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multiwgcna
   :alt:   (downloads)
.. |docker_bioconductor-multiwgcna| image:: https://quay.io/repository/biocontainers/bioconductor-multiwgcna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multiwgcna
.. _`bioconductor-multiwgcna/tags`: https://quay.io/repository/biocontainers/bioconductor-multiwgcna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multiwgcna";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multiwgcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multiwgcna/README.html