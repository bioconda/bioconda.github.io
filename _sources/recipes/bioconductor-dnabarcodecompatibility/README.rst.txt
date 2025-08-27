:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnabarcodecompatibility'
.. highlight: bash

bioconductor-dnabarcodecompatibility
====================================

.. conda:recipe:: bioconductor-dnabarcodecompatibility
   :replaces_section_title:
   :noindex:

   A Tool for Optimizing Combinations of DNA Barcodes Used in Multiplexed Experiments on Next Generation Sequencing Platforms

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DNABarcodeCompatibility.html
   :license: file LICENSE
   :recipe: /`bioconductor-dnabarcodecompatibility <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodecompatibility>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodecompatibility/meta.yaml>`_

   The package allows one to obtain optimised combinations of DNA barcodes to be used for multiplex sequencing. In each barcode combination\, barcodes are pooled with respect to Illumina chemistry constraints. Combinations can be filtered to keep those that are robust against substitution and insertion\/deletion errors thereby facilitating the demultiplexing step. In addition\, the package provides an optimiser function to further favor the selection of barcode combinations with least heterogeneity in barcode usage.


.. conda:package:: bioconductor-dnabarcodecompatibility

   |downloads_bioconductor-dnabarcodecompatibility| |docker_bioconductor-dnabarcodecompatibility|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-dplyr: 
   :depends r-numbers: 
   :depends r-purrr: 
   :depends r-rcpp: ``>=0.11.2``
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-dnabarcodecompatibility

   and update with::

      mamba update bioconductor-dnabarcodecompatibility

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dnabarcodecompatibility

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dnabarcodecompatibility:<tag>

   (see `bioconductor-dnabarcodecompatibility/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dnabarcodecompatibility| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnabarcodecompatibility.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnabarcodecompatibility
   :alt:   (downloads)
.. |docker_bioconductor-dnabarcodecompatibility| image:: https://quay.io/repository/biocontainers/bioconductor-dnabarcodecompatibility/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnabarcodecompatibility
.. _`bioconductor-dnabarcodecompatibility/tags`: https://quay.io/repository/biocontainers/bioconductor-dnabarcodecompatibility?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dnabarcodecompatibility";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnabarcodecompatibility/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnabarcodecompatibility/README.html