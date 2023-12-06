:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-blima'
.. highlight: bash

bioconductor-blima
==================

.. conda:recipe:: bioconductor-blima
   :replaces_section_title:
   :noindex:

   Tools for the preprocessing and analysis of the Illumina microarrays on the detector \(bead\) level

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/blima.html
   :license: GPL-3
   :recipe: /`bioconductor-blima <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blima>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blima/meta.yaml>`_
   :links: biotools: :biotools:`blima`, doi: :doi:`10.1038/nmeth.3252`

   Package blima includes several algorithms for the preprocessing of Illumina microarray data. It focuses to the bead level analysis and provides novel approach to the quantile normalization of the vectors of unequal lengths. It provides variety of the methods for background correction including background subtraction\, RMA like convolution and background outlier removal. It also implements variance stabilizing transformation on the bead level. There are also implemented methods for data summarization. It also provides the methods for performing T\-tests on the detector \(bead\) level and on the probe level for differential expression testing.


.. conda:package:: bioconductor-blima

   |downloads_bioconductor-blima| |docker_bioconductor-blima|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beadarray: ``>=2.52.0,<2.53.0``
   :depends bioconductor-beadarray: ``>=2.52.0,<2.53.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcpp: ``>=0.12.8``
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

      mamba install bioconductor-blima

   and update with::

      mamba update bioconductor-blima

  To create a new environment, run::

      mamba create --name myenvname bioconductor-blima

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-blima:<tag>

   (see `bioconductor-blima/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-blima| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-blima.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-blima
   :alt:   (downloads)
.. |docker_bioconductor-blima| image:: https://quay.io/repository/biocontainers/bioconductor-blima/status
   :target: https://quay.io/repository/biocontainers/bioconductor-blima
.. _`bioconductor-blima/tags`: https://quay.io/repository/biocontainers/bioconductor-blima?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-blima";
        var versions = ["1.36.0","1.34.0","1.32.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-blima/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-blima/README.html