:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnabarcodes'
.. highlight: bash

bioconductor-dnabarcodes
========================

.. conda:recipe:: bioconductor-dnabarcodes
   :replaces_section_title:
   :noindex:

   A tool for creating and analysing DNA barcodes used in Next Generation Sequencing multiplexing experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DNABarcodes.html
   :license: GPL-2
   :recipe: /`bioconductor-dnabarcodes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodes/meta.yaml>`_
   :links: biotools: :biotools:`dnabarcodes`

   The package offers a function to create DNA barcode sets capable of correcting insertion\, deletion\, and substitution errors. Existing barcodes can be analysed regarding their minimal\, maximal and average distances between barcodes. Finally\, reads that start with a \(possibly mutated\) barcode can be demultiplexed\, i.e.\, assigned to their original reference barcode.


.. conda:package:: bioconductor-dnabarcodes

   |downloads_bioconductor-dnabarcodes| |docker_bioconductor-dnabarcodes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.24.0-2``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-matrix: 
   :depends r-rcpp: ``>=0.11.2``
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

      mamba install bioconductor-dnabarcodes

   and update with::

      mamba update bioconductor-dnabarcodes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dnabarcodes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dnabarcodes:<tag>

   (see `bioconductor-dnabarcodes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dnabarcodes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnabarcodes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnabarcodes
   :alt:   (downloads)
.. |docker_bioconductor-dnabarcodes| image:: https://quay.io/repository/biocontainers/bioconductor-dnabarcodes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnabarcodes
.. _`bioconductor-dnabarcodes/tags`: https://quay.io/repository/biocontainers/bioconductor-dnabarcodes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dnabarcodes";
        var versions = ["1.32.0","1.32.0","1.30.0","1.28.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnabarcodes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnabarcodes/README.html