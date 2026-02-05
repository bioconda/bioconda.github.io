:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellscape'
.. highlight: bash

bioconductor-cellscape
======================

.. conda:recipe:: bioconductor-cellscape
   :replaces_section_title:
   :noindex:

   Explores single cell copy number profiles in the context of a single cell tree

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cellscape.html
   :license: GPL-3
   :recipe: /`bioconductor-cellscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellscape/meta.yaml>`_

   CellScape facilitates interactive browsing of single cell clonal evolution datasets. The tool requires two main inputs\: \(i\) the genomic content of each single cell in the form of either copy number segments or targeted mutation values\, and \(ii\) a single cell phylogeny. Phylogenetic formats can vary from dendrogram\-like phylogenies with leaf nodes to evolutionary model\-derived phylogenies with observed or latent internal nodes. The CellScape phylogeny is flexibly input as a table of source\-target edges to support arbitrary representations\, where each node may or may not have associated genomic data. The output of CellScape is an interactive interface displaying a single cell phylogeny and a cell\-by\-locus genomic heatmap representing the mutation status in each cell for each locus.


.. conda:package:: bioconductor-cellscape

   |downloads_bioconductor-cellscape| |docker_bioconductor-cellscape|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-dplyr: ``>=0.4.3``
   :depends r-gtools: ``>=3.5.0``
   :depends r-htmlwidgets: ``>=0.5``
   :depends r-jsonlite: ``>=0.9.19``
   :depends r-reshape2: ``>=1.4.1``
   :depends r-stringr: ``>=1.0.0``
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

      mamba install bioconductor-cellscape

   and update with::

      mamba update bioconductor-cellscape

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellscape

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellscape:<tag>

   (see `bioconductor-cellscape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellscape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellscape
   :alt:   (downloads)
.. |docker_bioconductor-cellscape| image:: https://quay.io/repository/biocontainers/bioconductor-cellscape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellscape
.. _`bioconductor-cellscape/tags`: https://quay.io/repository/biocontainers/bioconductor-cellscape?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellscape";
        var versions = ["1.34.0","1.30.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellscape/README.html