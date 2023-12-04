:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dialignr'
.. highlight: bash

bioconductor-dialignr
=====================

.. conda:recipe:: bioconductor-dialignr
   :replaces_section_title:
   :noindex:

   Dynamic Programming Based Alignment of MS2 Chromatograms

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DIAlignR.html
   :license: GPL-3
   :recipe: /`bioconductor-dialignr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dialignr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dialignr/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`dialignr`

   To obtain unbiased proteome coverage from a biological sample\, mass\-spectrometer is operated in Data Independent Acquisition \(DIA\) mode. Alignment of these DIA runs establishes consistency and less missing values in complete data\-matrix. This package implements dynamic programming with affine gap penalty based approach for pair\-wise alignment of analytes. A hybrid approach of global alignment \(through MS2 features\) and local alignment \(with MS2 chromatograms\) is implemented in this tool.


.. conda:package:: bioconductor-dialignr

   |downloads_bioconductor-dialignr| |docker_bioconductor-dialignr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-mzr: ``>=2.36.0,<2.37.0``
   :depends bioconductor-mzr: ``>=2.36.0,<2.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bit64: 
   :depends r-data.table: 
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-phangorn: 
   :depends r-pracma: 
   :depends r-rcpp: 
   :depends r-rcppeigen: 
   :depends r-reticulate: 
   :depends r-rlang: 
   :depends r-rmsnumpress: 
   :depends r-rsqlite: 
   :depends r-signal: 
   :depends r-tidyr: 
   :depends r-zoo: ``>=1.8-3``
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

      mamba install bioconductor-dialignr

   and update with::

      mamba update bioconductor-dialignr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dialignr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dialignr:<tag>

   (see `bioconductor-dialignr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dialignr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dialignr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dialignr
   :alt:   (downloads)
.. |docker_bioconductor-dialignr| image:: https://quay.io/repository/biocontainers/bioconductor-dialignr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dialignr
.. _`bioconductor-dialignr/tags`: https://quay.io/repository/biocontainers/bioconductor-dialignr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dialignr";
        var versions = ["2.10.0","2.8.0","2.6.0","2.6.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dialignr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dialignr/README.html