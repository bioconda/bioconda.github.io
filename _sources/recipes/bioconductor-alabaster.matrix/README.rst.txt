:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.matrix'
.. highlight: bash

bioconductor-alabaster.matrix
=============================

.. conda:recipe:: bioconductor-alabaster.matrix
   :replaces_section_title:
   :noindex:

   Load and Save Artifacts from File

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.matrix.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.matrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.matrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.matrix/meta.yaml>`_

   Save matrices\, arrays and similar objects into file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.matrix

   |downloads_bioconductor-alabaster.matrix| |docker_bioconductor-alabaster.matrix|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.0.0,<1.1.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-alabaster.matrix

   and update with::

      mamba update bioconductor-alabaster.matrix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alabaster.matrix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.matrix:<tag>

   (see `bioconductor-alabaster.matrix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.matrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.matrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.matrix
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.matrix| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.matrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.matrix
.. _`bioconductor-alabaster.matrix/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.matrix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.matrix";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.matrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.matrix/README.html