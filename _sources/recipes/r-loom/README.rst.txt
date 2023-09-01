:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-loom'
.. highlight: bash

r-loom
======

.. conda:recipe:: r-loom
   :replaces_section_title:
   :noindex:

   An interface for the single\-cell RNAseq\-oriented loom format. Loom files are an HDF5\-based format for storing and interacting with large single\-cell RNAseq datasets. loomR provides an interface for working with loom files in a loom\-specific way\; we provide routines for validating loom files\, iterating with chunks through data within the loom file\, and provide a platform for other packages to build support for loom files.

   :homepage: https://github.com/mojaveazure/loomR
   :license: GPL3 / GPL-3
   :recipe: /`r-loom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-loom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-loom/meta.yaml>`_

   


.. conda:package:: r-loom

   |downloads_r-loom| |docker_r-loom|

   :versions:
      
      

      ``0.2.0.2-6``,  ``0.2.0.2-5``,  ``0.2.0.2-4``,  ``0.2.0.2-3``,  ``0.2.0.2-2``,  ``0.2.0.2-1``,  ``0.2.0.2-0``,  ``0.2.0.1-0``

      

   
   :depends icu: ``>=64``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hdf5r: 
   :depends r-iterators: 
   :depends r-itertools: 
   :depends r-matrix: 
   :depends r-pbapply: 
   :depends r-stringr: 
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

      mamba install r-loom

   and update with::

      mamba update r-loom

  To create a new environment, run::

      mamba create --name myenvname r-loom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-loom:<tag>

   (see `r-loom/tags`_ for valid values for ``<tag>``)


.. |downloads_r-loom| image:: https://img.shields.io/conda/dn/bioconda/r-loom.svg?style=flat
   :target: https://anaconda.org/bioconda/r-loom
   :alt:   (downloads)
.. |docker_r-loom| image:: https://quay.io/repository/biocontainers/r-loom/status
   :target: https://quay.io/repository/biocontainers/r-loom
.. _`r-loom/tags`: https://quay.io/repository/biocontainers/r-loom?tab=tags


.. raw:: html

    <script>
        var package = "r-loom";
        var versions = ["0.2.0.2","0.2.0.2","0.2.0.2","0.2.0.2","0.2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-loom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-loom/README.html