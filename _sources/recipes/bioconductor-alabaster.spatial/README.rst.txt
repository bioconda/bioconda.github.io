:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.spatial'
.. highlight: bash

bioconductor-alabaster.spatial
==============================

.. conda:recipe:: bioconductor-alabaster.spatial
   :replaces_section_title:
   :noindex:

   Save and Load Spatial \'Omics Data to\/from File

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/alabaster.spatial.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.spatial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.spatial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.spatial/meta.yaml>`_

   Save SpatialExperiment objects and their images into file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.spatial

   |downloads_bioconductor-alabaster.spatial| |docker_bioconductor-alabaster.spatial|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.2.0,<1.3.0``
   :depends bioconductor-alabaster.sce: ``>=1.2.0,<1.3.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-spatialexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-jsonlite: 
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

      mamba install bioconductor-alabaster.spatial

   and update with::

      mamba update bioconductor-alabaster.spatial

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alabaster.spatial

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.spatial:<tag>

   (see `bioconductor-alabaster.spatial/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.spatial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.spatial.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.spatial
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.spatial| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.spatial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.spatial
.. _`bioconductor-alabaster.spatial/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.spatial?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.spatial";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.spatial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.spatial/README.html