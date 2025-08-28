:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ribodipa'
.. highlight: bash

bioconductor-ribodipa
=====================

.. conda:recipe:: bioconductor-ribodipa
   :replaces_section_title:
   :noindex:

   Differential pattern analysis for Ribo\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RiboDiPA.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-ribodipa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribodipa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribodipa/meta.yaml>`_

   This package performs differential pattern analysis for Ribo\-seq data. It identifies genes with significantly different patterns in the ribosome footprint between two conditions. RiboDiPA contains five major components including bam file processing\, P\-site mapping\, data binning\, differential pattern analysis and footprint visualization.


.. conda:package:: bioconductor-ribodipa

   |downloads_bioconductor-ribodipa| |docker_bioconductor-ribodipa|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0a0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-elitism: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-rcpp: ``>=1.0.2``
   :depends r-reldist: 
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

      mamba install bioconductor-ribodipa

   and update with::

      mamba update bioconductor-ribodipa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ribodipa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ribodipa:<tag>

   (see `bioconductor-ribodipa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ribodipa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ribodipa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ribodipa
   :alt:   (downloads)
.. |docker_bioconductor-ribodipa| image:: https://quay.io/repository/biocontainers/bioconductor-ribodipa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ribodipa
.. _`bioconductor-ribodipa/tags`: https://quay.io/repository/biocontainers/bioconductor-ribodipa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ribodipa";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ribodipa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ribodipa/README.html