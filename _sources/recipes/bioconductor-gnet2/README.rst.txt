:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gnet2'
.. highlight: bash

bioconductor-gnet2
==================

.. conda:recipe:: bioconductor-gnet2
   :replaces_section_title:
   :noindex:

   Constructing gene regulatory networks from expression data through functional module inference

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GNET2.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-gnet2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gnet2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gnet2/meta.yaml>`_
   :links: biotools: :biotools:`gnet2`

   Cluster genes to functional groups with E\-M process. Iteratively perform TF assigning and Gene assigning\, until the assignment of genes did not change\, or max number of iterations is reached.


.. conda:package:: bioconductor-gnet2

   |downloads_bioconductor-gnet2| |docker_bioconductor-gnet2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-diagrammer: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-xgboost: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-gnet2

   and update with::

      mamba update bioconductor-gnet2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gnet2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gnet2:<tag>

   (see `bioconductor-gnet2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gnet2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gnet2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gnet2
   :alt:   (downloads)
.. |docker_bioconductor-gnet2| image:: https://quay.io/repository/biocontainers/bioconductor-gnet2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gnet2
.. _`bioconductor-gnet2/tags`: https://quay.io/repository/biocontainers/bioconductor-gnet2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gnet2";
        var versions = ["1.18.0","1.18.0","1.16.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gnet2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gnet2/README.html