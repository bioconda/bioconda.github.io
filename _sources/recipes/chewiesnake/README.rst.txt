:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chewiesnake'
.. highlight: bash

chewiesnake
===========

.. conda:recipe:: chewiesnake
   :replaces_section_title:
   :noindex:

   ChewieSnake is a snakemake workflow that performs cgMLST allele calling for a set of assembled genomes using chewBBACA.

   :homepage: https://gitlab.com/bfr_bioinformatics/chewieSnake
   :license: BSD-3
   :recipe: /`chewiesnake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chewiesnake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chewiesnake/meta.yaml>`_

   


.. conda:package:: chewiesnake

   |downloads_chewiesnake| |docker_chewiesnake|

   :versions:
      
      

      ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.46``
   :depends bioconductor-biostrings: ``>=2.54``
   :depends bioconductor-ggtree: ``>=2.0.0``
   :depends biopython: ``1.76.*``
   :depends chewbbaca: ``2.0.12.*``
   :depends fastp: ``0.19.5.*``
   :depends grapetree: ``2.1.*``
   :depends kmc: ``3.1.0.*``
   :depends pandoc: ``>=2.11``
   :depends python: ``>=3.6``
   :depends r-ape: ``5.*``
   :depends r-base: ``>=3.6.3``
   :depends r-dendextend: ``>=1.14``
   :depends r-dt: 
   :depends r-knitr: 
   :depends r-optparse: 
   :depends r-plotly: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-tidyverse: ``>=1.3``
   :depends shovill: ``1.1.0.*``
   :depends snakemake: ``>=5.30``
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

      mamba install chewiesnake

   and update with::

      mamba update chewiesnake

  To create a new environment, run::

      mamba create --name myenvname chewiesnake

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chewiesnake:<tag>

   (see `chewiesnake/tags`_ for valid values for ``<tag>``)


.. |downloads_chewiesnake| image:: https://img.shields.io/conda/dn/bioconda/chewiesnake.svg?style=flat
   :target: https://anaconda.org/bioconda/chewiesnake
   :alt:   (downloads)
.. |docker_chewiesnake| image:: https://quay.io/repository/biocontainers/chewiesnake/status
   :target: https://quay.io/repository/biocontainers/chewiesnake
.. _`chewiesnake/tags`: https://quay.io/repository/biocontainers/chewiesnake?tab=tags


.. raw:: html

    <script>
        var package = "chewiesnake";
        var versions = ["3.0.0","3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chewiesnake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chewiesnake/README.html