:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qubic'
.. highlight: bash

bioconductor-qubic
==================

.. conda:recipe:: bioconductor-qubic
   :replaces_section_title:
   :noindex:

   An R package for qualitative biclustering in support of gene co\-expression analyses

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/QUBIC.html
   :license: CC BY-NC-ND 4.0 + file LICENSE
   :recipe: /`bioconductor-qubic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qubic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qubic/meta.yaml>`_

   The core function of this R package is to provide the implementation of the well\-cited and well\-reviewed QUBIC algorithm\, aiming to deliver an effective and efficient biclustering capability. This package also includes the following related functions\: \(i\) a qualitative representation of the input gene expression data\, through a well\-designed discretization way considering the underlying data property\, which can be directly used in other biclustering programs\; \(ii\) visualization of identified biclusters using heatmap in support of overall expression pattern analysis\; \(iii\) bicluster\-based co\-expression network elucidation and visualization\, where different correlation coefficient scores between a pair of genes are provided\; and \(iv\) a generalize output format of biclusters and corresponding network can be freely downloaded so that a user can easily do following comprehensive functional enrichment analysis \(e.g. DAVID\) and advanced network visualization \(e.g. Cytoscape\).


.. conda:package:: bioconductor-qubic

   |downloads_bioconductor-qubic| |docker_bioconductor-qubic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biclust: 
   :depends r-matrix: 
   :depends r-rcpp: ``>=0.11.0``
   :depends r-rcpparmadillo: 
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

      mamba install bioconductor-qubic

   and update with::

      mamba update bioconductor-qubic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qubic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qubic:<tag>

   (see `bioconductor-qubic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qubic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qubic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qubic
   :alt:   (downloads)
.. |docker_bioconductor-qubic| image:: https://quay.io/repository/biocontainers/bioconductor-qubic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qubic
.. _`bioconductor-qubic/tags`: https://quay.io/repository/biocontainers/bioconductor-qubic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qubic";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qubic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qubic/README.html