:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xenlite'
.. highlight: bash

bioconductor-xenlite
====================

.. conda:recipe:: bioconductor-xenlite
   :replaces_section_title:
   :noindex:

   Simple classes and methods for managing Xenium datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/xenLite.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xenlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xenlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xenlite/meta.yaml>`_

   Define a relatively light class for managing Xenium data using Bioconductor.  Address use of parquet for coordinates\, SpatialExperiment for assay and sample data.  Address serialization and use of cloud storage.


.. conda:package:: bioconductor-xenlite

   |downloads_bioconductor-xenlite| |docker_bioconductor-xenlite|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-tenxio: ``>=1.12.0,<1.13.0``
   :depends r-arrow: 
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-shiny: 
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

      mamba install bioconductor-xenlite

   and update with::

      mamba update bioconductor-xenlite

  To create a new environment, run::

      mamba create --name myenvname bioconductor-xenlite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xenlite:<tag>

   (see `bioconductor-xenlite/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xenlite| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xenlite.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xenlite
   :alt:   (downloads)
.. |docker_bioconductor-xenlite| image:: https://quay.io/repository/biocontainers/bioconductor-xenlite/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xenlite
.. _`bioconductor-xenlite/tags`: https://quay.io/repository/biocontainers/bioconductor-xenlite?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xenlite";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xenlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xenlite/README.html