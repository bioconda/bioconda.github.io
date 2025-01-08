:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-degcre'
.. highlight: bash

bioconductor-degcre
===================

.. conda:recipe:: bioconductor-degcre
   :replaces_section_title:
   :noindex:

   Probabilistic association of DEGs to CREs from differential data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DegCre.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-degcre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degcre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degcre/meta.yaml>`_

   DegCre generates associations between differentially expressed genes \(DEGs\) and cis\-regulatory elements \(CREs\) based on non\-parametric concordance between differential data. The user provides GRanges of DEG TSS and CRE regions with differential p\-value and optionally log\-fold changes and DegCre returns an annotated Hits object with associations and their calculated probabilities. Additionally\, the package provides functionality for visualization and conversion to other formats.


.. conda:package:: bioconductor-degcre

   |downloads_bioconductor-degcre| |docker_bioconductor-degcre|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-plotgardener: ``>=1.12.0,<1.13.0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.20.0,<3.21.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-degcre

   and update with::

      mamba update bioconductor-degcre

  To create a new environment, run::

      mamba create --name myenvname bioconductor-degcre

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-degcre:<tag>

   (see `bioconductor-degcre/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-degcre| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degcre.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-degcre
   :alt:   (downloads)
.. |docker_bioconductor-degcre| image:: https://quay.io/repository/biocontainers/bioconductor-degcre/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degcre
.. _`bioconductor-degcre/tags`: https://quay.io/repository/biocontainers/bioconductor-degcre?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-degcre";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degcre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degcre/README.html