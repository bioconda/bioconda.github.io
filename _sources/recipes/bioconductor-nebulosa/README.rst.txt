:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nebulosa'
.. highlight: bash

bioconductor-nebulosa
=====================

.. conda:recipe:: bioconductor-nebulosa
   :replaces_section_title:
   :noindex:

   Single\-Cell Data Visualisation Using Kernel Gene\-Weighted Density Estimation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Nebulosa.html
   :license: GPL-3
   :recipe: /`bioconductor-nebulosa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nebulosa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nebulosa/meta.yaml>`_

   This package provides a enhanced visualization of single\-cell data based on gene\-weighted density estimation. Nebulosa recovers the signal from dropped\-out features and allows the inspection of the joint expression from multiple features \(e.g. genes\). Seurat and SingleCellExperiment objects can be used within Nebulosa.


.. conda:package:: bioconductor-nebulosa

   |downloads_bioconductor-nebulosa| |docker_bioconductor-nebulosa|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.2-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ks: 
   :depends r-matrix: 
   :depends r-patchwork: 
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

      mamba install bioconductor-nebulosa

   and update with::

      mamba update bioconductor-nebulosa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nebulosa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nebulosa:<tag>

   (see `bioconductor-nebulosa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nebulosa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nebulosa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nebulosa
   :alt:   (downloads)
.. |docker_bioconductor-nebulosa| image:: https://quay.io/repository/biocontainers/bioconductor-nebulosa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nebulosa
.. _`bioconductor-nebulosa/tags`: https://quay.io/repository/biocontainers/bioconductor-nebulosa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nebulosa";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nebulosa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nebulosa/README.html