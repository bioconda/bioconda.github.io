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
   :links: doi: :doi:`10.1038/s41588-021-00790-6`, biotools: :biotools:`archr`

   


.. conda:package:: r-archr

   |downloads_r-archr| |docker_r-archr|

   :versions:
      
      

      ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-chromvar: ``>=1.30.1,<2.0a0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-motifmatchr: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-s4vectors: ``>=0.9.25``
   :depends bioconductor-sparsematrixstats: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-chromvarmotifs: ``>=0.2.0,<0.3.0a0``
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-ggplot2: 
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
   :depends r-presto: ``>=1.0.0,<2.0a0``
   :depends r-rcpp: ``>=0.12.16``
   :depends r-rcpparmadillo: 
   :depends r-seurat: 
   :depends r-seuratobject: 
   :depends r-stringr: 
   :depends r-uwot: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.2"];
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