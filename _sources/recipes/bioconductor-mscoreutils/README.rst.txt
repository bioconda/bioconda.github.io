:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mscoreutils'
.. highlight: bash

bioconductor-mscoreutils
========================

.. conda:recipe:: bioconductor-mscoreutils
   :replaces_section_title:
   :noindex:

   Core Utils for Mass Spectrometry Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MsCoreUtils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mscoreutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mscoreutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mscoreutils/meta.yaml>`_
   :links: biotools: :biotools:`mscoreutils`, usegalaxy-eu: :usegalaxy-eu:`mscoreutils`

   MsCoreUtils defines low\-level functions for mass spectrometry data and is independent of any high\-level data structures. These functions include mass spectra processing functions \(noise estimation\, smoothing\, binning\)\, quantitative aggregation functions \(median polish\, robust summarisation\, ...\)\, missing data imputation\, data normalisation \(quantiles\, vsn\, ...\) as well as misc helper functions\, that are used across high\-level data structure within the R for Mass Spectrometry packages.


.. conda:package:: bioconductor-mscoreutils

   |downloads_bioconductor-mscoreutils| |docker_bioconductor-mscoreutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.1-1</code>,  <code>1.14.1-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.14.1-1``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-clue: 
   :depends r-mass: 
   :depends r-rcpp: 
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

      mamba install bioconductor-mscoreutils

   and update with::

      mamba update bioconductor-mscoreutils

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mscoreutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mscoreutils:<tag>

   (see `bioconductor-mscoreutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mscoreutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mscoreutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mscoreutils
   :alt:   (downloads)
.. |docker_bioconductor-mscoreutils| image:: https://quay.io/repository/biocontainers/bioconductor-mscoreutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mscoreutils
.. _`bioconductor-mscoreutils/tags`: https://quay.io/repository/biocontainers/bioconductor-mscoreutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mscoreutils";
        var versions = ["1.14.1","1.14.1","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mscoreutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mscoreutils/README.html