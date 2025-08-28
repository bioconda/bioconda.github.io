:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-degnorm'
.. highlight: bash

bioconductor-degnorm
====================

.. conda:recipe:: bioconductor-degnorm
   :replaces_section_title:
   :noindex:

   DegNorm\: degradation normalization for RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DegNorm.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-degnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degnorm/meta.yaml>`_

   This package performs degradation normalization in bulk RNA\-seq data to improve differential expression analysis accuracy.


.. conda:package:: bioconductor-degnorm

   |downloads_bioconductor-degnorm| |docker_bioconductor-degnorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=1.0.2``
   :depends r-rcpparmadillo: 
   :depends r-viridis: 
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

      mamba install bioconductor-degnorm

   and update with::

      mamba update bioconductor-degnorm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-degnorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-degnorm:<tag>

   (see `bioconductor-degnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-degnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-degnorm
   :alt:   (downloads)
.. |docker_bioconductor-degnorm| image:: https://quay.io/repository/biocontainers/bioconductor-degnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degnorm
.. _`bioconductor-degnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-degnorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-degnorm";
        var versions = ["1.16.0","1.12.0","1.10.1","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degnorm/README.html