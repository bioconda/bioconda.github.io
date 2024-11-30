:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sccb2'
.. highlight: bash

bioconductor-sccb2
==================

.. conda:recipe:: bioconductor-sccb2
   :replaces_section_title:
   :noindex:

   CB2 improves power of cell detection in droplet\-based single\-cell RNA sequencing data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scCB2.html
   :license: GPL-3
   :recipe: /`bioconductor-sccb2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sccb2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sccb2/meta.yaml>`_

   scCB2 is an R package implementing CB2 for distinguishing real cells from empty droplets in droplet\-based single cell RNA\-seq experiments \(especially for 10x Chromium\). It is based on clustering similar barcodes and calculating Monte\-Carlo p\-value for each cluster to test against background distribution. This cluster\-level test outperforms single\-barcode\-level tests in dealing with low count barcodes and homogeneous sequencing library\, while keeping FDR well controlled.


.. conda:package:: bioconductor-sccb2

   |downloads_bioconductor-sccb2| |docker_bioconductor-sccb2|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-dropletutils: ``>=1.22.0,<1.23.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-matrix: 
   :depends r-seurat: 
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

      mamba install bioconductor-sccb2

   and update with::

      mamba update bioconductor-sccb2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sccb2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sccb2:<tag>

   (see `bioconductor-sccb2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sccb2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sccb2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sccb2
   :alt:   (downloads)
.. |docker_bioconductor-sccb2| image:: https://quay.io/repository/biocontainers/bioconductor-sccb2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sccb2
.. _`bioconductor-sccb2/tags`: https://quay.io/repository/biocontainers/bioconductor-sccb2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sccb2";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sccb2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sccb2/README.html