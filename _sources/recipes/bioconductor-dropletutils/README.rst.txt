:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dropletutils'
.. highlight: bash

bioconductor-dropletutils
=========================

.. conda:recipe:: bioconductor-dropletutils
   :replaces_section_title:
   :noindex:

   Utilities for Handling Single\-Cell Droplet Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DropletUtils.html
   :license: GPL-3
   :recipe: /`bioconductor-dropletutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dropletutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dropletutils/meta.yaml>`_
   :links: biotools: :biotools:`DropletUtils`

   Provides a number of utility functions for handling single\-cell \(RNA\-seq\) data from droplet technologies such as 10X Genomics. This includes data loading from count matrices or molecule information files\, identification of cells from empty droplets\, removal of barcode\-swapped pseudo\-cells\, and downsampling of the count matrix.


.. conda:package:: bioconductor-dropletutils

   |downloads_bioconductor-dropletutils| |docker_bioconductor-dropletutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.2-1</code>,  <code>1.14.2-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.2-1``,  ``1.14.2-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.3-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.2-0``,  ``1.2.1-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beachmat: ``>=2.18.0,<2.19.0``
   :depends bioconductor-beachmat: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-edger: ``>=4.0.2,<4.1.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-scuttle: ``>=1.12.0,<1.13.0``
   :depends bioconductor-scuttle: ``>=1.12.0,<1.13.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-dqrng: 
   :depends r-matrix: 
   :depends r-r.utils: 
   :depends r-rcpp: 
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

      mamba install bioconductor-dropletutils

   and update with::

      mamba update bioconductor-dropletutils

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dropletutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dropletutils:<tag>

   (see `bioconductor-dropletutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dropletutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dropletutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dropletutils
   :alt:   (downloads)
.. |docker_bioconductor-dropletutils| image:: https://quay.io/repository/biocontainers/bioconductor-dropletutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dropletutils
.. _`bioconductor-dropletutils/tags`: https://quay.io/repository/biocontainers/bioconductor-dropletutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dropletutils";
        var versions = ["1.22.0","1.20.0","1.18.0","1.18.0","1.14.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dropletutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dropletutils/README.html