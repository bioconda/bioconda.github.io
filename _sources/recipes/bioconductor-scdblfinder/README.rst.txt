:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdblfinder'
.. highlight: bash

bioconductor-scdblfinder
========================

.. conda:recipe:: bioconductor-scdblfinder
   :replaces_section_title:
   :noindex:

   scDblFinder

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scDblFinder.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-scdblfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdblfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdblfinder/meta.yaml>`_

   The scDblFinder package gathers various methods for the detection and handling of doublets\/multiplets in single\-cell sequencing data \(i.e. multiple cells captured within the same droplet or reaction volume\). It includes methods formerly found in the scran package\, the new fast and comprehensive scDblFinder method\, and a reimplementation of the Amulet detection method for single\-cell ATAC\-seq.


.. conda:package:: bioconductor-scdblfinder

   |downloads_bioconductor-scdblfinder| |docker_bioconductor-scdblfinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.23.4-0</code>,  <code>1.20.2-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.23.4-0``,  ``1.20.2-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocneighbors: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocsingular: ``>=1.22.0,<1.23.0``
   :depends bioconductor-bluster: ``>=1.16.0,<1.17.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-xgboost: 
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

      mamba install bioconductor-scdblfinder

   and update with::

      mamba update bioconductor-scdblfinder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scdblfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scdblfinder:<tag>

   (see `bioconductor-scdblfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scdblfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdblfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdblfinder
   :alt:   (downloads)
.. |docker_bioconductor-scdblfinder| image:: https://quay.io/repository/biocontainers/bioconductor-scdblfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdblfinder
.. _`bioconductor-scdblfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-scdblfinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdblfinder";
        var versions = ["1.23.4","1.20.2","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdblfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdblfinder/README.html