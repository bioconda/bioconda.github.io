:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffhic'
.. highlight: bash

bioconductor-diffhic
====================

.. conda:recipe:: bioconductor-diffhic
   :replaces_section_title:
   :noindex:

   Differential Analysis of Hi\-C Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/diffHic.html
   :license: GPL-3
   :recipe: /`bioconductor-diffhic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffhic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffhic/meta.yaml>`_
   :links: biotools: :biotools:`diffhic`

   Detects differential interactions across biological conditions in a Hi\-C experiment. Methods are provided for read alignment and data pre\-processing into interaction counts. Statistical analysis is based on edgeR and supports normalization and filtering. Several visualization options are also available.


.. conda:package:: bioconductor-diffhic

   |downloads_bioconductor-diffhic| |docker_bioconductor-diffhic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-csaw: ``>=1.40.0,<1.41.0``
   :depends bioconductor-csaw: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0a0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0a0``
   :depends bioconductor-rhtslib: ``>=3.2.0,<3.3.0``
   :depends bioconductor-rhtslib: ``>=3.2.0,<3.3.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-locfit: 
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

      mamba install bioconductor-diffhic

   and update with::

      mamba update bioconductor-diffhic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-diffhic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffhic:<tag>

   (see `bioconductor-diffhic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffhic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffhic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffhic
   :alt:   (downloads)
.. |docker_bioconductor-diffhic| image:: https://quay.io/repository/biocontainers/bioconductor-diffhic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffhic
.. _`bioconductor-diffhic/tags`: https://quay.io/repository/biocontainers/bioconductor-diffhic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diffhic";
        var versions = ["1.38.0","1.34.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffhic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffhic/README.html