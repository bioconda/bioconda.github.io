:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-newwave'
.. highlight: bash

bioconductor-newwave
====================

.. conda:recipe:: bioconductor-newwave
   :replaces_section_title:
   :noindex:

   Negative binomial model for scRNA\-seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NewWave.html
   :license: GPL-3
   :recipe: /`bioconductor-newwave <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-newwave>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-newwave/meta.yaml>`_

   A model designed for dimensionality reduction and batch effect removal for scRNA\-seq data. It is designed to be massively parallelizable using shared objects that prevent memory duplication\, and it can be used with different mini\-batch approaches in order to reduce time consumption. It assumes a negative binomial distribution for the data with a dispersion parameter that can be both commonwise across gene both genewise.


.. conda:package:: bioconductor-newwave

   |downloads_bioconductor-newwave| |docker_bioconductor-newwave|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.2-0``,  ``0.99.10-1``

      

   
   :depends bioconductor-biocsingular: ``>=1.22.0,<1.23.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-sharedobject: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-irlba: 
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

      mamba install bioconductor-newwave

   and update with::

      mamba update bioconductor-newwave

  To create a new environment, run::

      mamba create --name myenvname bioconductor-newwave

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-newwave:<tag>

   (see `bioconductor-newwave/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-newwave| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-newwave.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-newwave
   :alt:   (downloads)
.. |docker_bioconductor-newwave| image:: https://quay.io/repository/biocontainers/bioconductor-newwave/status
   :target: https://quay.io/repository/biocontainers/bioconductor-newwave
.. _`bioconductor-newwave/tags`: https://quay.io/repository/biocontainers/bioconductor-newwave?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-newwave";
        var versions = ["1.16.0","1.12.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-newwave/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-newwave/README.html