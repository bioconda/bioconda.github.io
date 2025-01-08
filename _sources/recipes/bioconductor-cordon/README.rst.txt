:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cordon'
.. highlight: bash

bioconductor-cordon
===================

.. conda:recipe:: bioconductor-cordon
   :replaces_section_title:
   :noindex:

   Codon Usage Analysis and Prediction of Gene Expressivity

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/coRdon.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cordon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cordon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cordon/meta.yaml>`_

   Tool for analysis of codon usage in various unannotated or KEGG\/COG annotated DNA sequences. Calculates different measures of CU bias and CU\-based predictors of gene expressivity\, and performs gene set enrichment analysis for annotated sequences. Implements several methods for visualization of CU and enrichment analysis results.


.. conda:package:: bioconductor-cordon

   |downloads_bioconductor-cordon| |docker_bioconductor-cordon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-purrr: 
   :depends r-stringr: 
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

      mamba install bioconductor-cordon

   and update with::

      mamba update bioconductor-cordon

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cordon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cordon:<tag>

   (see `bioconductor-cordon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cordon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cordon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cordon
   :alt:   (downloads)
.. |docker_bioconductor-cordon| image:: https://quay.io/repository/biocontainers/bioconductor-cordon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cordon
.. _`bioconductor-cordon/tags`: https://quay.io/repository/biocontainers/bioconductor-cordon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cordon";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cordon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cordon/README.html