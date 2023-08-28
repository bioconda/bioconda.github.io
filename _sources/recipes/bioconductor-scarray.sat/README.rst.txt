:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scarray.sat'
.. highlight: bash

bioconductor-scarray.sat
========================

.. conda:recipe:: bioconductor-scarray.sat
   :replaces_section_title:
   :noindex:

   Large\-scale single\-cell RNA\-seq data analysis using GDS files and Seurat

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SCArray.sat.html
   :license: GPL-3
   :recipe: /`bioconductor-scarray.sat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scarray.sat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scarray.sat/meta.yaml>`_

   Extends the Seurat classes and functions to support Genomic Data Structure \(GDS\) files as a DelayedArray backend for data representation. It relies on the implementation of GDS\-based DelayedMatrix in the SCArray package to represent single cell RNA\-seq data. The common optimized algorithms leveraging GDS\-based and single cell\-specific DelayedMatrix \(SC\_GDSMatrix\) are implemented in the SCArray package. SCArray.sat introduces a new SCArrayAssay class \(derived from the Seurat Assay\)\, which wraps raw counts\, normalized expressions and scaled data matrix based on GDS\-specific DelayedMatrix. It is designed to integrate seamlessly with the Seurat package to provide common data analysis in the SeuratObject\-based workflow. Compared with Seurat\, SCArray.sat significantly reduces the memory usage without downsampling and can be applied to very large datasets.


.. conda:package:: bioconductor-scarray.sat

   |downloads_bioconductor-scarray.sat| |docker_bioconductor-scarray.sat|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biocsingular: ``>=1.16.0,<1.17.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-gdsfmt: ``>=1.36.0,<1.37.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scarray: ``>=1.8.0,<1.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-seurat: ``>=4.0``
   :depends r-seuratobject: ``>=4.0``
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

      mamba install bioconductor-scarray.sat

   and update with::

      mamba update bioconductor-scarray.sat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scarray.sat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scarray.sat:<tag>

   (see `bioconductor-scarray.sat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scarray.sat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scarray.sat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scarray.sat
   :alt:   (downloads)
.. |docker_bioconductor-scarray.sat| image:: https://quay.io/repository/biocontainers/bioconductor-scarray.sat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scarray.sat
.. _`bioconductor-scarray.sat/tags`: https://quay.io/repository/biocontainers/bioconductor-scarray.sat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scarray.sat";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scarray.sat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scarray.sat/README.html