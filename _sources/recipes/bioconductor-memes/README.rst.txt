:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-memes'
.. highlight: bash

bioconductor-memes
==================

.. conda:recipe:: bioconductor-memes
   :replaces_section_title:
   :noindex:

   motif matching\, comparison\, and de novo discovery using the MEME Suite

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/memes.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-memes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-memes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-memes/meta.yaml>`_

   A seamless interface to the MEME Suite family of tools for motif analysis. \'memes\' provides data aware utilities for using GRanges objects as entrypoints to motif analysis\, data structures for examining \& editing motif lists\, and novel data visualizations. \'memes\' functions and data structures are amenable to both base R and tidyverse workflows.


.. conda:package:: bioconductor-memes

   |downloads_bioconductor-memes| |docker_bioconductor-memes|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-universalmotif: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cmdfun: ``>=1.0.2``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggseqlogo: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-processx: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-usethis: 
   :depends r-xml2: 
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

      mamba install bioconductor-memes

   and update with::

      mamba update bioconductor-memes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-memes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-memes:<tag>

   (see `bioconductor-memes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-memes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-memes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-memes
   :alt:   (downloads)
.. |docker_bioconductor-memes| image:: https://quay.io/repository/biocontainers/bioconductor-memes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-memes
.. _`bioconductor-memes/tags`: https://quay.io/repository/biocontainers/bioconductor-memes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-memes";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-memes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-memes/README.html