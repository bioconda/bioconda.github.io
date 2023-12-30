:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-demuxsnp'
.. highlight: bash

bioconductor-demuxsnp
=====================

.. conda:recipe:: bioconductor-demuxsnp
   :replaces_section_title:
   :noindex:

   scRNAseq demultiplexing using cell hashing and SNPs

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/demuxSNP.html
   :license: GPL-3
   :recipe: /`bioconductor-demuxsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demuxsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demuxsnp/meta.yaml>`_

   This package assists in demultiplexing scRNAseq data using both cell hashing and SNPs data. The SNP profile of each group os learned using high confidence assignments from the cell hashing data. Cells which cannot be assigned with high confidence from the cell hashing data are assigned to their most similar group based on their SNPs. We also provide some helper function to optimise SNP selection\, create training data and merge SNP data into the SingleCellExperiment framework.


.. conda:package:: bioconductor-demuxsnp

   |downloads_bioconductor-demuxsnp| |docker_bioconductor-demuxsnp|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-demuxmix: ``>=1.4.0,<1.5.0``
   :depends bioconductor-ensembldb: ``>=2.26.0,<2.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-class: 
   :depends r-combinat: 
   :depends r-matrix: 
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

      mamba install bioconductor-demuxsnp

   and update with::

      mamba update bioconductor-demuxsnp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-demuxsnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-demuxsnp:<tag>

   (see `bioconductor-demuxsnp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-demuxsnp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-demuxsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-demuxsnp
   :alt:   (downloads)
.. |docker_bioconductor-demuxsnp| image:: https://quay.io/repository/biocontainers/bioconductor-demuxsnp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-demuxsnp
.. _`bioconductor-demuxsnp/tags`: https://quay.io/repository/biocontainers/bioconductor-demuxsnp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-demuxsnp";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-demuxsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-demuxsnp/README.html