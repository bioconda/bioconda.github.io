:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-archr'
.. highlight: bash

r-archr
=======

.. conda:recipe:: r-archr
   :replaces_section_title:
   :noindex:

   This package is designed to streamline scATAC analyses in R.

   :homepage: https://www.archrproject.com
   :documentation: https://www.archrproject.com/bookdown/index.html
   
   :developer docs: https://github.com/GreenleafLab/ArchR
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-archr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-archr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-archr/meta.yaml>`_

   


.. conda:package:: r-archr

   |downloads_r-archr| |docker_r-archr|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-chromvar: 
   :depends bioconductor-complexheatmap: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-motifmatchr: 
   :depends bioconductor-rhdf5: 
   :depends bioconductor-rsamtools: 
   :depends bioconductor-s4vectors: ``>=0.9.25``
   :depends bioconductor-summarizedexperiment: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-nabor: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=0.12.16``
   :depends r-stringr: 
   :depends r-uwot: 
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

      mamba install r-archr

   and update with::

      mamba update r-archr

  To create a new environment, run::

      mamba create --name myenvname r-archr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-archr:<tag>

   (see `r-archr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-archr| image:: https://img.shields.io/conda/dn/bioconda/r-archr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-archr
   :alt:   (downloads)
.. |docker_r-archr| image:: https://quay.io/repository/biocontainers/r-archr/status
   :target: https://quay.io/repository/biocontainers/r-archr
.. _`r-archr/tags`: https://quay.io/repository/biocontainers/r-archr?tab=tags


.. raw:: html

    <script>
        var package = "r-archr";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-archr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-archr/README.html