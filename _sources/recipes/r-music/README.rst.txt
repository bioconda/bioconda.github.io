:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-music'
.. highlight: bash

r-music
=======

.. conda:recipe:: r-music
   :replaces_section_title:
   :noindex:

   Companion package to\: A bulk tissue deconvolution method with multi\-subject single cell expression reference. This package provide functions to estimate bulk tissue cell type proportions with multi\-subject single cell expression as reference.

   :homepage: https://github.com/xuranw/MuSiC
   :license: GPL / GPL-3
   :recipe: /`r-music <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-music>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-music/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-018-08023-x`

   


.. conda:package:: r-music

   |downloads_r-music| |docker_r-music|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends bioconductor-biobase: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-mcmcpack: 
   :depends r-nnls: 
   :depends r-plyr: 
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

      mamba install r-music

   and update with::

      mamba update r-music

  To create a new environment, run::

      mamba create --name myenvname r-music

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-music:<tag>

   (see `r-music/tags`_ for valid values for ``<tag>``)


.. |downloads_r-music| image:: https://img.shields.io/conda/dn/bioconda/r-music.svg?style=flat
   :target: https://anaconda.org/bioconda/r-music
   :alt:   (downloads)
.. |docker_r-music| image:: https://quay.io/repository/biocontainers/r-music/status
   :target: https://quay.io/repository/biocontainers/r-music
.. _`r-music/tags`: https://quay.io/repository/biocontainers/r-music?tab=tags


.. raw:: html

    <script>
        var package = "r-music";
        var versions = ["0.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-music/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-music/README.html