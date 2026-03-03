:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transmogr'
.. highlight: bash

bioconductor-transmogr
======================

.. conda:recipe:: bioconductor-transmogr
   :replaces_section_title:
   :noindex:

   Modify a set of reference sequences using a set of variants

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/transmogR.html
   :license: GPL-3
   :recipe: /`bioconductor-transmogr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transmogr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transmogr/meta.yaml>`_

   transmogR provides the tools needed to crate a new reference genome or reference transcriptome\, using a set of variants. Variants can be any combination of SNPs\, Insertions and Deletions. The intended use\-case is to enable creation of variant\-modified reference transcriptomes for incorporation into transcriptomic pseudo\-alignment workflows\, such as salmon.


.. conda:package:: bioconductor-transmogr

   |downloads_bioconductor-transmogr| |docker_bioconductor-transmogr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends bioconductor-variantannotation: ``>=1.56.0,<1.57.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=14``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: ``>=4.0.0``
   :depends r-jsonlite: 
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-scales: 
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

      mamba install bioconductor-transmogr

   and update with::

      mamba update bioconductor-transmogr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-transmogr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-transmogr:<tag>

   (see `bioconductor-transmogr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-transmogr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transmogr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-transmogr
   :alt:   (downloads)
.. |docker_bioconductor-transmogr| image:: https://quay.io/repository/biocontainers/bioconductor-transmogr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transmogr
.. _`bioconductor-transmogr/tags`: https://quay.io/repository/biocontainers/bioconductor-transmogr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-transmogr";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transmogr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transmogr/README.html