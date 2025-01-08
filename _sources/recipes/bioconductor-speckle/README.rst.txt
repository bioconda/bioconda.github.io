:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-speckle'
.. highlight: bash

bioconductor-speckle
====================

.. conda:recipe:: bioconductor-speckle
   :replaces_section_title:
   :noindex:

   Statistical methods for analysing single cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/speckle.html
   :license: GPL-3
   :recipe: /`bioconductor-speckle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-speckle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-speckle/meta.yaml>`_

   The speckle package contains functions for the analysis of single cell RNA\-seq data. The speckle package currently contains functions to analyse differences in cell type proportions. There are also functions to estimate the parameters of the Beta distribution based on a given counts matrix\, and a function to normalise a counts matrix to the median library size. There are plotting functions to visualise cell type proportions and the mean\-variance relationship in cell type proportions and counts. As our research into specialised analyses of single cell data continues we anticipate that the package will be updated with new functions.


.. conda:package:: bioconductor-speckle

   |downloads_bioconductor-speckle| |docker_bioconductor-speckle|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-seurat: 
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

      mamba install bioconductor-speckle

   and update with::

      mamba update bioconductor-speckle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-speckle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-speckle:<tag>

   (see `bioconductor-speckle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-speckle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-speckle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-speckle
   :alt:   (downloads)
.. |docker_bioconductor-speckle| image:: https://quay.io/repository/biocontainers/bioconductor-speckle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-speckle
.. _`bioconductor-speckle/tags`: https://quay.io/repository/biocontainers/bioconductor-speckle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-speckle";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-speckle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-speckle/README.html