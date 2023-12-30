:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-single'
.. highlight: bash

bioconductor-single
===================

.. conda:recipe:: bioconductor-single
   :replaces_section_title:
   :noindex:

   Accurate consensus sequence from nanopore reads of a gene library

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/single.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-single <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-single>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-single/meta.yaml>`_

   Accurate consensus sequence from nanopore reads of a DNA gene library. SINGLe corrects for systematic errors in nanopore sequencing reads of gene libraries and it retrieves true consensus sequences of variants identified by a barcode\, needing only a few reads per variant. More information in preprint doi\: https\:\/\/doi.org\/10.1101\/2020.03.25.007146.


.. conda:package:: bioconductor-single

   |downloads_bioconductor-single| |docker_bioconductor-single|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-single

   and update with::

      mamba update bioconductor-single

  To create a new environment, run::

      mamba create --name myenvname bioconductor-single

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-single:<tag>

   (see `bioconductor-single/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-single| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-single.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-single
   :alt:   (downloads)
.. |docker_bioconductor-single| image:: https://quay.io/repository/biocontainers/bioconductor-single/status
   :target: https://quay.io/repository/biocontainers/bioconductor-single
.. _`bioconductor-single/tags`: https://quay.io/repository/biocontainers/bioconductor-single?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-single";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-single/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-single/README.html