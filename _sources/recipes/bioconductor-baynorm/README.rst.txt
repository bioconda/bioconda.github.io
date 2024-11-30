:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-baynorm'
.. highlight: bash

bioconductor-baynorm
====================

.. conda:recipe:: bioconductor-baynorm
   :replaces_section_title:
   :noindex:

   Single\-cell RNA sequencing data normalization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/bayNorm.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-baynorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-baynorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-baynorm/meta.yaml>`_

   bayNorm is used for normalizing single\-cell RNA\-seq data.


.. conda:package:: bioconductor-baynorm

   |downloads_bioconductor-baynorm| |docker_bioconductor-baynorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bb: 
   :depends r-dosnow: 
   :depends r-fitdistrplus: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-locfit: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-rcpp: ``>=0.12.12``
   :depends r-rcpparmadillo: 
   :depends r-rcppprogress: 
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

      mamba install bioconductor-baynorm

   and update with::

      mamba update bioconductor-baynorm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-baynorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-baynorm:<tag>

   (see `bioconductor-baynorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-baynorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-baynorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-baynorm
   :alt:   (downloads)
.. |docker_bioconductor-baynorm| image:: https://quay.io/repository/biocontainers/bioconductor-baynorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-baynorm
.. _`bioconductor-baynorm/tags`: https://quay.io/repository/biocontainers/bioconductor-baynorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-baynorm";
        var versions = ["1.20.0","1.18.1","1.16.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-baynorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-baynorm/README.html