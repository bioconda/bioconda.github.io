:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-codex'
.. highlight: bash

bioconductor-codex
==================

.. conda:recipe:: bioconductor-codex
   :replaces_section_title:
   :noindex:

   A Normalization and Copy Number Variation Detection Method for Whole Exome Sequencing

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CODEX.html
   :license: GPL-2
   :recipe: /`bioconductor-codex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codex/meta.yaml>`_
   :links: biotools: :biotools:`codex`, doi: :doi:`10.1093/nar/gku1363`

   A normalization and copy number variation calling procedure for whole exome DNA sequencing data. CODEX relies on the availability of multiple samples processed using the same sequencing pipeline for normalization\, and does not require matched controls. The normalization model in CODEX includes terms that specifically remove biases due to GC content\, exon length and targeting and amplification efficiency\, and latent systemic artifacts. CODEX also includes a Poisson likelihood\-based recursive segmentation procedure that explicitly models the count\-based exome sequencing data.


.. conda:package:: bioconductor-codex

   |downloads_bioconductor-codex| |docker_bioconductor-codex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
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

      mamba install bioconductor-codex

   and update with::

      mamba update bioconductor-codex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-codex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-codex:<tag>

   (see `bioconductor-codex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-codex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-codex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-codex
   :alt:   (downloads)
.. |docker_bioconductor-codex| image:: https://quay.io/repository/biocontainers/bioconductor-codex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-codex
.. _`bioconductor-codex/tags`: https://quay.io/repository/biocontainers/bioconductor-codex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-codex";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-codex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-codex/README.html