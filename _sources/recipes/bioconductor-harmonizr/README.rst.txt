:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-harmonizr'
.. highlight: bash

bioconductor-harmonizr
======================

.. conda:recipe:: bioconductor-harmonizr
   :replaces_section_title:
   :noindex:

   Handles missing values and makes more data available

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HarmonizR.html
   :license: GPL-3
   :recipe: /`bioconductor-harmonizr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harmonizr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harmonizr/meta.yaml>`_

   An implementation\, which takes input data and makes it available for proper batch effect removal by ComBat or Limma. The implementation appropriately handles missing values by dissecting the input matrix into smaller matrices with sufficient data to feed the ComBat or limma algorithm. The adjusted data is returned to the user as a rebuild matrix. The implementation is meant to make as much data available as possible with minimal data loss.


.. conda:package:: bioconductor-harmonizr

   |downloads_bioconductor-harmonizr| |docker_bioconductor-harmonizr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: ``>=1.0.16``
   :depends r-foreach: ``>=1.5.1``
   :depends r-janitor: ``>=2.1.0``
   :depends r-plyr: ``>=1.8.6``
   :depends r-seriation: ``>=1.3.5``
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

      mamba install bioconductor-harmonizr

   and update with::

      mamba update bioconductor-harmonizr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-harmonizr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-harmonizr:<tag>

   (see `bioconductor-harmonizr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-harmonizr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-harmonizr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-harmonizr
   :alt:   (downloads)
.. |docker_bioconductor-harmonizr| image:: https://quay.io/repository/biocontainers/bioconductor-harmonizr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-harmonizr
.. _`bioconductor-harmonizr/tags`: https://quay.io/repository/biocontainers/bioconductor-harmonizr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-harmonizr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-harmonizr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-harmonizr/README.html