:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdsfmt'
.. highlight: bash

bioconductor-gdsfmt
===================

.. conda:recipe:: bioconductor-gdsfmt
   :replaces_section_title:
   :noindex:

   R Interface to CoreArray Genomic Data Structure \(GDS\) Files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gdsfmt.html
   :license: LGPL-3
   :recipe: /`bioconductor-gdsfmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsfmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsfmt/meta.yaml>`_

   Provides a high\-level R interface to CoreArray Genomic Data Structure \(GDS\) data files. GDS is portable across platforms with hierarchical structure to store multiple scalable array\-oriented data sets with metadata information. It is suited for large\-scale datasets\, especially for data which are much larger than the available random\-access memory. The gdsfmt package offers the efficient operations specifically designed for integers of less than 8 bits\, since a diploid genotype\, like single\-nucleotide polymorphism \(SNP\)\, usually occupies fewer bits than a byte. Data compression and decompression are available with relatively efficient random access. It is also allowed to read a GDS file in parallel with multiple R processes supported by the package parallel.


.. conda:package:: bioconductor-gdsfmt

   |downloads_bioconductor-gdsfmt| |docker_bioconductor-gdsfmt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.1-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.1-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-gdsfmt

   and update with::

      mamba update bioconductor-gdsfmt

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdsfmt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdsfmt:<tag>

   (see `bioconductor-gdsfmt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdsfmt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdsfmt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdsfmt
   :alt:   (downloads)
.. |docker_bioconductor-gdsfmt| image:: https://quay.io/repository/biocontainers/bioconductor-gdsfmt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdsfmt
.. _`bioconductor-gdsfmt/tags`: https://quay.io/repository/biocontainers/bioconductor-gdsfmt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdsfmt";
        var versions = ["1.42.0","1.38.0","1.38.0","1.36.1","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdsfmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdsfmt/README.html