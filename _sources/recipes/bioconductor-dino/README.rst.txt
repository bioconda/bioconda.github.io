:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dino'
.. highlight: bash

bioconductor-dino
=================

.. conda:recipe:: bioconductor-dino
   :replaces_section_title:
   :noindex:

   Normalization of Single\-Cell mRNA Sequencing Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Dino.html
   :license: GPL-3
   :recipe: /`bioconductor-dino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dino/meta.yaml>`_

   Dino normalizes single\-cell\, mRNA sequencing data to correct for technical variation\, particularly sequencing depth\, prior to downstream analysis. The approach produces a matrix of corrected expression for which the dependency between sequencing depth and the full distribution of normalized expression\; many existing methods aim to remove only the dependency between sequencing depth and the mean of the normalized expression. This is particuarly useful in the context of highly sparse datasets such as those produced by 10X genomics and other uninque molecular identifier \(UMI\) based microfluidics protocols for which the depth\-dependent proportion of zeros in the raw expression data can otherwise present a challenge.


.. conda:package:: bioconductor-dino

   |downloads_bioconductor-dino| |docker_bioconductor-dino|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocsingular: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-seurat: 
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

      mamba install bioconductor-dino

   and update with::

      mamba update bioconductor-dino

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dino

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dino:<tag>

   (see `bioconductor-dino/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dino| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dino.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dino
   :alt:   (downloads)
.. |docker_bioconductor-dino| image:: https://quay.io/repository/biocontainers/bioconductor-dino/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dino
.. _`bioconductor-dino/tags`: https://quay.io/repository/biocontainers/bioconductor-dino?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dino";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dino/README.html