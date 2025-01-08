:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nearbynding'
.. highlight: bash

bioconductor-nearbynding
========================

.. conda:recipe:: bioconductor-nearbynding
   :replaces_section_title:
   :noindex:

   Discern RNA structure proximal to protein binding

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/nearBynding.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-nearbynding <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nearbynding>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nearbynding/meta.yaml>`_

   Provides a pipeline to discern RNA structure at and proximal to the site of protein binding within regions of the transcriptome defined by the user. CLIP protein\-binding data can be input as either aligned BAM or peak\-called bedGraph files. RNA structure can either be predicted internally from sequence or users have the option to input their own RNA structure data. RNA structure binding profiles can be visually and quantitatively compared across multiple formats.


.. conda:package:: bioconductor-nearbynding

   |downloads_bioconductor-nearbynding| |docker_bioconductor-nearbynding|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-plyranges: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.20.0,<3.21.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-r.utils: 
   :depends r-rlang: 
   :depends r-transport: 
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

      mamba install bioconductor-nearbynding

   and update with::

      mamba update bioconductor-nearbynding

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nearbynding

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nearbynding:<tag>

   (see `bioconductor-nearbynding/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nearbynding| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nearbynding.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nearbynding
   :alt:   (downloads)
.. |docker_bioconductor-nearbynding| image:: https://quay.io/repository/biocontainers/bioconductor-nearbynding/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nearbynding
.. _`bioconductor-nearbynding/tags`: https://quay.io/repository/biocontainers/bioconductor-nearbynding?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nearbynding";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nearbynding/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nearbynding/README.html