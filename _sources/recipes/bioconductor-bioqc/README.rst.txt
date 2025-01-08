:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioqc'
.. highlight: bash

bioconductor-bioqc
==================

.. conda:recipe:: bioconductor-bioqc
   :replaces_section_title:
   :noindex:

   Detect tissue heterogeneity in expression profiles with gene sets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BioQC.html
   :license: GPL (>=3) + file LICENSE
   :recipe: /`bioconductor-bioqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioqc/meta.yaml>`_
   :links: biotools: :biotools:`bioqc`, doi: :doi:`10.1186/s12864-017-3661-2`

   BioQC performs quality control of high\-throughput expression data based on tissue gene signatures. It can detect tissue heterogeneity in gene expression data. The core algorithm is a Wilcoxon\-Mann\-Whitney test that is optimised for high performance.


.. conda:package:: bioconductor-bioqc

   |downloads_bioconductor-bioqc| |docker_bioconductor-bioqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-bioqc

   and update with::

      mamba update bioconductor-bioqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bioqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioqc:<tag>

   (see `bioconductor-bioqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioqc
   :alt:   (downloads)
.. |docker_bioconductor-bioqc| image:: https://quay.io/repository/biocontainers/bioconductor-bioqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioqc
.. _`bioconductor-bioqc/tags`: https://quay.io/repository/biocontainers/bioconductor-bioqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioqc";
        var versions = ["1.34.0","1.30.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioqc/README.html