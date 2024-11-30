:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-droplettestfiles'
.. highlight: bash

bioconductor-droplettestfiles
=============================

.. conda:recipe:: bioconductor-droplettestfiles
   :replaces_section_title:
   :noindex:

   Test Files for Single\-Cell Droplet Utilities

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/DropletTestFiles.html
   :license: GPL-3
   :recipe: /`bioconductor-droplettestfiles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-droplettestfiles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-droplettestfiles/meta.yaml>`_

   Assorted files generated from droplet\-based single\-cell protocols\, to be used for testing functions in DropletUtils. Primarily intended for storing files that directly come out of processing pipelines like 10X Genomics\' CellRanger software\, prior to the formation of a SingleCellExperiment object. Unlike other packages\, this is not designed to provide objects that are immediately ready for analysis.


.. conda:package:: bioconductor-droplettestfiles

   |downloads_bioconductor-droplettestfiles| |docker_bioconductor-droplettestfiles|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-droplettestfiles

   and update with::

      mamba update bioconductor-droplettestfiles

  To create a new environment, run::

      mamba create --name myenvname bioconductor-droplettestfiles

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-droplettestfiles:<tag>

   (see `bioconductor-droplettestfiles/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-droplettestfiles| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-droplettestfiles.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-droplettestfiles
   :alt:   (downloads)
.. |docker_bioconductor-droplettestfiles| image:: https://quay.io/repository/biocontainers/bioconductor-droplettestfiles/status
   :target: https://quay.io/repository/biocontainers/bioconductor-droplettestfiles
.. _`bioconductor-droplettestfiles/tags`: https://quay.io/repository/biocontainers/bioconductor-droplettestfiles?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-droplettestfiles";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-droplettestfiles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-droplettestfiles/README.html