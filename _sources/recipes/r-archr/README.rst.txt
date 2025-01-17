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
   :license: MIT / MIT
   :recipe: /`r-archr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-archr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-archr/meta.yaml>`_

   


.. conda:package:: r-archr

   |downloads_r-archr| |docker_r-archr|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-chromvar: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-motifmatchr: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.9.25``
   :depends bioconductor-sparsematrixstats: ``>=1.14.0,<1.15.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-chromvarmotifs: ``>=0.2.0,<0.3.0a0``
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-ggplot2: ``<3.5``
   :depends r-ggrastr: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-gtools: 
   :depends r-harmony: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-nabor: 
   :depends r-plyr: 
   :depends r-presto: ``>=1.0.0,<1.0.1.0a0``
   :depends r-rcpp: ``>=0.12.16``
   :depends r-rcpparmadillo: 
   :depends r-seurat: 
   :depends r-seuratobject: 
   :depends r-stringr: 
   :depends r-uwot: 
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
        var versions = ["1.0.3","1.0.2"];
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