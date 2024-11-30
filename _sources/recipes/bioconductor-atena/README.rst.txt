:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-atena'
.. highlight: bash

bioconductor-atena
==================

.. conda:recipe:: bioconductor-atena
   :replaces_section_title:
   :noindex:

   Analysis of Transposable Elements

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/atena.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-atena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atena/meta.yaml>`_

   Quantify expression of transposable elements \(TEs\) from RNA\-seq data through different methods\, including ERVmap\, TEtranscripts and Telescope. A common interface is provided to use each of these methods\, which consists of building a parameter object\, calling the quantification function with this object and getting a SummarizedExperiment object as output container of the quantified expression profiles. The implementation allows one to quantify TEs and gene transcripts in an integrated manner.


.. conda:package:: bioconductor-atena

   |downloads_bioconductor-atena| |docker_bioconductor-atena|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-sparsematrixstats: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-squarem: 
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

      mamba install bioconductor-atena

   and update with::

      mamba update bioconductor-atena

  To create a new environment, run::

      mamba create --name myenvname bioconductor-atena

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-atena:<tag>

   (see `bioconductor-atena/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-atena| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-atena.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-atena
   :alt:   (downloads)
.. |docker_bioconductor-atena| image:: https://quay.io/repository/biocontainers/bioconductor-atena/status
   :target: https://quay.io/repository/biocontainers/bioconductor-atena
.. _`bioconductor-atena/tags`: https://quay.io/repository/biocontainers/bioconductor-atena?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-atena";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-atena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-atena/README.html