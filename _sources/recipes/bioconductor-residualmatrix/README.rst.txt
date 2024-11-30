:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-residualmatrix'
.. highlight: bash

bioconductor-residualmatrix
===========================

.. conda:recipe:: bioconductor-residualmatrix
   :replaces_section_title:
   :noindex:

   Creating a DelayedMatrix of Regression Residuals

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ResidualMatrix.html
   :license: GPL-3
   :recipe: /`bioconductor-residualmatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-residualmatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-residualmatrix/meta.yaml>`_

   Provides delayed computation of a matrix of residuals after fitting a linear model to each column of an input matrix. Also supports partial computation of residuals where selected factors are to be preserved in the output matrix. Implements a number of efficient methods for operating on the delayed matrix of residuals\, most notably matrix multiplication and calculation of row\/column sums or means.


.. conda:package:: bioconductor-residualmatrix

   |downloads_bioconductor-residualmatrix| |docker_bioconductor-residualmatrix|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-residualmatrix

   and update with::

      mamba update bioconductor-residualmatrix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-residualmatrix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-residualmatrix:<tag>

   (see `bioconductor-residualmatrix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-residualmatrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-residualmatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-residualmatrix
   :alt:   (downloads)
.. |docker_bioconductor-residualmatrix| image:: https://quay.io/repository/biocontainers/bioconductor-residualmatrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-residualmatrix
.. _`bioconductor-residualmatrix/tags`: https://quay.io/repository/biocontainers/bioconductor-residualmatrix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-residualmatrix";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-residualmatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-residualmatrix/README.html