:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treesummarizedexperiment'
.. highlight: bash

bioconductor-treesummarizedexperiment
=====================================

.. conda:recipe:: bioconductor-treesummarizedexperiment
   :replaces_section_title:
   :noindex:

   TreeSummarizedExperiment\: a S4 Class for Data with Tree Structures

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TreeSummarizedExperiment.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-treesummarizedexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treesummarizedexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treesummarizedexperiment/meta.yaml>`_

   TreeSummarizedExperiment has extended SingleCellExperiment to include hierarchical information on the rows or columns of the rectangular data.


.. conda:package:: bioconductor-treesummarizedexperiment

   |downloads_bioconductor-treesummarizedexperiment| |docker_bioconductor-treesummarizedexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.6.2-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-treeio: ``>=1.26.0,<1.27.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-rlang: 
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

      mamba install bioconductor-treesummarizedexperiment

   and update with::

      mamba update bioconductor-treesummarizedexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-treesummarizedexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-treesummarizedexperiment:<tag>

   (see `bioconductor-treesummarizedexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-treesummarizedexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-treesummarizedexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-treesummarizedexperiment
   :alt:   (downloads)
.. |docker_bioconductor-treesummarizedexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-treesummarizedexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-treesummarizedexperiment
.. _`bioconductor-treesummarizedexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-treesummarizedexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-treesummarizedexperiment";
        var versions = ["2.10.0","2.8.0","2.6.0","2.2.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treesummarizedexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treesummarizedexperiment/README.html