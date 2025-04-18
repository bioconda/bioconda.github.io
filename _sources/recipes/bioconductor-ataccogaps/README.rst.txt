:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ataccogaps'
.. highlight: bash

bioconductor-ataccogaps
=======================

.. conda:recipe:: bioconductor-ataccogaps
   :replaces_section_title:
   :noindex:

   Analysis Tools for scATACseq Data with CoGAPS

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ATACCoGAPS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ataccogaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ataccogaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ataccogaps/meta.yaml>`_

   Provides tools for running the CoGAPS algorithm \(Fertig et al\, 2010\) on single\-cell ATAC sequencing data and analysis of the results. Can be used to perform analyses at the level of genes\, motifs\, TFs\, or pathways. Additionally provides tools for transfer learning and data integration with single\-cell RNA sequencing data.


.. conda:package:: bioconductor-ataccogaps

   |downloads_bioconductor-ataccogaps| |docker_bioconductor-ataccogaps|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.0,<1.5.0``
   :depends bioconductor-chromvar: ``>=1.24.0,<1.25.0``
   :depends bioconductor-cogaps: ``>=3.22.0,<3.23.0``
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0``
   :depends bioconductor-geneoverlap: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-jaspar2016: ``>=1.30.0,<1.31.0``
   :depends bioconductor-motifmatchr: ``>=1.24.0,<1.25.0``
   :depends bioconductor-mus.musculus: ``>=1.3.0,<1.4.0``
   :depends bioconductor-projectr: ``>=1.18.0,<1.19.0``
   :depends bioconductor-rgreat: ``>=2.4.0,<2.5.0``
   :depends bioconductor-tfbstools: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-msigdbr: 
   :depends r-stringr: 
   :depends r-tidyverse: 
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

      mamba install bioconductor-ataccogaps

   and update with::

      mamba update bioconductor-ataccogaps

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ataccogaps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ataccogaps:<tag>

   (see `bioconductor-ataccogaps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ataccogaps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ataccogaps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ataccogaps
   :alt:   (downloads)
.. |docker_bioconductor-ataccogaps| image:: https://quay.io/repository/biocontainers/bioconductor-ataccogaps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ataccogaps
.. _`bioconductor-ataccogaps/tags`: https://quay.io/repository/biocontainers/bioconductor-ataccogaps?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ataccogaps";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ataccogaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ataccogaps/README.html