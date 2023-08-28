:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgc'
.. highlight: bash

bioconductor-hgc
================

.. conda:recipe:: bioconductor-hgc
   :replaces_section_title:
   :noindex:

   A fast hierarchical graph\-based clustering method

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HGC.html
   :license: GPL-3
   :recipe: /`bioconductor-hgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgc/meta.yaml>`_

   HGC \(short for Hierarchical Graph\-based Clustering\) is an R package for conducting hierarchical clustering on large\-scale single\-cell RNA\-seq \(scRNA\-seq\) data. The key idea is to construct a dendrogram of cells on their shared nearest neighbor \(SNN\) graph. HGC provides functions for building graphs and for conducting hierarchical clustering on the graph. The users with old R version could visit https\:\/\/github.com\/XuegongLab\/HGC\/tree\/HGC4oldRVersion to get HGC package built for R 3.6.


.. conda:package:: bioconductor-hgc

   |downloads_bioconductor-hgc| |docker_bioconductor-hgc|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-mclust: 
   :depends r-patchwork: 
   :depends r-rann: 
   :depends r-rcpp: ``>=1.0.0``
   :depends r-rcppeigen: ``>=0.3.2.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hgc

   and update with::

      mamba update bioconductor-hgc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgc:<tag>

   (see `bioconductor-hgc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgc
   :alt:   (downloads)
.. |docker_bioconductor-hgc| image:: https://quay.io/repository/biocontainers/bioconductor-hgc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgc
.. _`bioconductor-hgc/tags`: https://quay.io/repository/biocontainers/bioconductor-hgc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgc";
        var versions = ["1.8.0","1.6.0","1.6.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgc/README.html