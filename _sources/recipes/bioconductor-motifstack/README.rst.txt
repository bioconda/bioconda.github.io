:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifstack'
.. highlight: bash

bioconductor-motifstack
=======================

.. conda:recipe:: bioconductor-motifstack
   :replaces_section_title:
   :noindex:

   Plot stacked logos for single or multiple DNA\, RNA and amino acid sequence

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/motifStack.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-motifstack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifstack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifstack/meta.yaml>`_
   :links: biotools: :biotools:`motifstack`, doi: :doi:`10.1038/nmeth.3252`

   The motifStack package is designed for graphic representation of multiple motifs with different similarity scores. It works with both DNA\/RNA sequence motif and amino acid sequence motif. In addition\, it provides the flexibility for users to customize the graphic parameters such as the font type and symbol colors.


.. conda:package:: bioconductor-motifstack

   |downloads_bioconductor-motifstack| |docker_bioconductor-motifstack|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.1-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.1-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-tfbstools: ``>=1.44.0,<1.45.0``
   :depends r-ade4: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-xml: 
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

      mamba install bioconductor-motifstack

   and update with::

      mamba update bioconductor-motifstack

  To create a new environment, run::

      mamba create --name myenvname bioconductor-motifstack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motifstack:<tag>

   (see `bioconductor-motifstack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motifstack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifstack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifstack
   :alt:   (downloads)
.. |docker_bioconductor-motifstack| image:: https://quay.io/repository/biocontainers/bioconductor-motifstack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifstack
.. _`bioconductor-motifstack/tags`: https://quay.io/repository/biocontainers/bioconductor-motifstack?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motifstack";
        var versions = ["1.50.0","1.46.0","1.44.1","1.42.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifstack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifstack/README.html