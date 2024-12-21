:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hipathia'
.. highlight: bash

bioconductor-hipathia
=====================

.. conda:recipe:: bioconductor-hipathia
   :replaces_section_title:
   :noindex:

   HiPathia\: High\-throughput Pathway Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/hipathia.html
   :license: GPL-2
   :recipe: /`bioconductor-hipathia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hipathia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hipathia/meta.yaml>`_

   Hipathia is a method for the computation of signal transduction along signaling pathways from transcriptomic data. The method is based on an iterative algorithm which is able to compute the signal intensity passing through the nodes of a network by taking into account the level of expression of each gene and the intensity of the signal arriving to it. It also provides a new approach to functional analysis allowing to compute the signal arriving to the functions annotated to each pathway.


.. conda:package:: bioconductor-hipathia

   |downloads_bioconductor-hipathia| |docker_bioconductor-hipathia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.2-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``3.6.0-0``,  ``3.2.0-0``,  ``3.0.2-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-coin: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-igraph: ``>=1.0.1``
   :depends r-matrixstats: 
   :depends r-metbrewer: 
   :depends r-reshape2: 
   :depends r-servr: 
   :depends r-tibble: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-hipathia

   and update with::

      mamba update bioconductor-hipathia

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hipathia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hipathia:<tag>

   (see `bioconductor-hipathia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hipathia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hipathia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hipathia
   :alt:   (downloads)
.. |docker_bioconductor-hipathia| image:: https://quay.io/repository/biocontainers/bioconductor-hipathia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hipathia
.. _`bioconductor-hipathia/tags`: https://quay.io/repository/biocontainers/bioconductor-hipathia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hipathia";
        var versions = ["3.6.0","3.2.0","3.0.2","2.14.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hipathia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hipathia/README.html