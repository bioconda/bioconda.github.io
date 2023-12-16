:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scnorm'
.. highlight: bash

bioconductor-scnorm
===================

.. conda:recipe:: bioconductor-scnorm
   :replaces_section_title:
   :noindex:

   Normalization of single cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SCnorm.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-scnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scnorm/meta.yaml>`_

   This package implements SCnorm — a method to normalize single\-cell RNA\-seq data.


.. conda:package:: bioconductor-scnorm

   |downloads_bioconductor-scnorm| |docker_bioconductor-scnorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.3-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-moments: 
   :depends r-quantreg: 
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

      mamba install bioconductor-scnorm

   and update with::

      mamba update bioconductor-scnorm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scnorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scnorm:<tag>

   (see `bioconductor-scnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scnorm
   :alt:   (downloads)
.. |docker_bioconductor-scnorm| image:: https://quay.io/repository/biocontainers/bioconductor-scnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scnorm
.. _`bioconductor-scnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-scnorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scnorm";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scnorm/README.html