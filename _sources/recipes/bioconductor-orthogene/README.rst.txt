:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-orthogene'
.. highlight: bash

bioconductor-orthogene
======================

.. conda:recipe:: bioconductor-orthogene
   :replaces_section_title:
   :noindex:

   Interspecies gene mapping

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/orthogene.html
   :license: GPL-3
   :recipe: /`bioconductor-orthogene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orthogene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orthogene/meta.yaml>`_

   \`orthogene\` is an R package for easy mapping of orthologous genes across hundreds of species. It pulls up\-to\-date gene ortholog mappings across \*\*700\+ organisms\*\*. It also provides various utility functions to aggregate\/expand common objects \(e.g. data.frames\, gene expression matrices\, lists\) using \*\*1\:1\*\*\, \*\*many\:1\*\*\, \*\*1\:many\*\* or \*\*many\:many\*\* gene mappings\, both within\- and between\-species.


.. conda:package:: bioconductor-orthogene

   |downloads_bioconductor-orthogene| |docker_bioconductor-orthogene|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0``
   :depends r-babelgene: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gprofiler2: 
   :depends r-grr: 
   :depends r-homologene: 
   :depends r-jsonlite: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-repmis: 
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

      mamba install bioconductor-orthogene

   and update with::

      mamba update bioconductor-orthogene

  To create a new environment, run::

      mamba create --name myenvname bioconductor-orthogene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-orthogene:<tag>

   (see `bioconductor-orthogene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-orthogene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-orthogene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-orthogene
   :alt:   (downloads)
.. |docker_bioconductor-orthogene| image:: https://quay.io/repository/biocontainers/bioconductor-orthogene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-orthogene
.. _`bioconductor-orthogene/tags`: https://quay.io/repository/biocontainers/bioconductor-orthogene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-orthogene";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-orthogene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-orthogene/README.html