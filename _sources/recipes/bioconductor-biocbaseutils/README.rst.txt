:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocbaseutils'
.. highlight: bash

bioconductor-biocbaseutils
==========================

.. conda:recipe:: bioconductor-biocbaseutils
   :replaces_section_title:
   :noindex:

   General utility functions for developing Bioconductor packages

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BiocBaseUtils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocbaseutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocbaseutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocbaseutils/meta.yaml>`_

   The package provides utility functions related to package development. These include functions that replace slots\, and selectors for show methods. It aims to coalesce the various helper functions often re\-used throughout the Bioconductor ecosystem.


.. conda:package:: bioconductor-biocbaseutils

   |downloads_bioconductor-biocbaseutils| |docker_bioconductor-biocbaseutils|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-biocbaseutils

   and update with::

      mamba update bioconductor-biocbaseutils

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocbaseutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocbaseutils:<tag>

   (see `bioconductor-biocbaseutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocbaseutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocbaseutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocbaseutils
   :alt:   (downloads)
.. |docker_bioconductor-biocbaseutils| image:: https://quay.io/repository/biocontainers/bioconductor-biocbaseutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocbaseutils
.. _`bioconductor-biocbaseutils/tags`: https://quay.io/repository/biocontainers/bioconductor-biocbaseutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocbaseutils";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocbaseutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocbaseutils/README.html