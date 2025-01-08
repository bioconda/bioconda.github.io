:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mitoclone2'
.. highlight: bash

bioconductor-mitoclone2
=======================

.. conda:recipe:: bioconductor-mitoclone2
   :replaces_section_title:
   :noindex:

   Clonal Population Identification in Single\-Cell RNA\-Seq Data using Mitochondrial and Somatic Mutations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mitoClone2.html
   :license: GPL-3
   :recipe: /`bioconductor-mitoclone2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitoclone2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitoclone2/meta.yaml>`_

   This package primarily identifies variants in mitochondrial genomes from BAM alignment files. It filters these variants to remove RNA editing events then estimates their evolutionary relationship \(i.e. their phylogenetic tree\) and groups single cells into clones. It also visualizes the mutations and providing additional genomic context.


.. conda:package:: bioconductor-mitoclone2

   |downloads_bioconductor-mitoclone2| |docker_bioconductor-mitoclone2|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-deepsnv: ``>=1.52.0,<1.53.0``
   :depends bioconductor-deepsnv: ``>=1.52.0,<1.53.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-rhtslib: ``>=3.2.0,<3.3.0``
   :depends bioconductor-rhtslib: ``>=3.2.0,<3.3.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-reshape2: 
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

      mamba install bioconductor-mitoclone2

   and update with::

      mamba update bioconductor-mitoclone2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mitoclone2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mitoclone2:<tag>

   (see `bioconductor-mitoclone2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mitoclone2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mitoclone2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mitoclone2
   :alt:   (downloads)
.. |docker_bioconductor-mitoclone2| image:: https://quay.io/repository/biocontainers/bioconductor-mitoclone2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mitoclone2
.. _`bioconductor-mitoclone2/tags`: https://quay.io/repository/biocontainers/bioconductor-mitoclone2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mitoclone2";
        var versions = ["1.12.0","1.8.1","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mitoclone2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mitoclone2/README.html