:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsearray'
.. highlight: bash

bioconductor-sparsearray
========================

.. conda:recipe:: bioconductor-sparsearray
   :replaces_section_title:
   :noindex:

   High\-performance sparse data representation and manipulation in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SparseArray.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sparsearray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsearray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsearray/meta.yaml>`_

   The SparseArray package provides array\-like containers for efficient in\-memory representation of multidimensional sparse data in R \(arrays and matrices\). The package defines the SparseArray virtual class and two concrete subclasses\: COO\_SparseArray and SVT\_SparseArray. Each subclass uses its own internal representation of the nonzero multidimensional data\: the \"COO layout\" and the \"SVT layout\"\, respectively. SVT\_SparseArray objects mimic as much as possible the behavior of ordinary matrix and array objects in base R. In particular\, they suppport most of the \"standard matrix and array API\" defined in base R and in the matrixStats package from CRAN.


.. conda:package:: bioconductor-sparsearray

   |downloads_bioconductor-sparsearray| |docker_bioconductor-sparsearray|

   :versions:
      
      

      ``1.10.8-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.0.10-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-s4arrays: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4arrays: ``>=1.10.1,<1.11.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends bioconductor-xvector: ``>=0.50.0,<0.51.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=14``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-matrix: 
   :depends r-matrixstats: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-sparsearray

   and update with::

      mamba update bioconductor-sparsearray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sparsearray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sparsearray:<tag>

   (see `bioconductor-sparsearray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sparsearray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsearray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparsearray
   :alt:   (downloads)
.. |docker_bioconductor-sparsearray| image:: https://quay.io/repository/biocontainers/bioconductor-sparsearray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsearray
.. _`bioconductor-sparsearray/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsearray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sparsearray";
        var versions = ["1.10.8","1.6.0","1.6.0","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsearray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsearray/README.html