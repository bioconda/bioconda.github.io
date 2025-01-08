:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-outsplice'
.. highlight: bash

bioconductor-outsplice
======================

.. conda:recipe:: bioconductor-outsplice
   :replaces_section_title:
   :noindex:

   Comparison of Splicing Events between Tumor and Normal Samples

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OutSplice.html
   :license: GPL-2
   :recipe: /`bioconductor-outsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outsplice/meta.yaml>`_

   An easy to use tool that can compare splicing events in tumor and normal tissue samples using either a user generated matrix\, or data from The Cancer Genome Atlas \(TCGA\). This package generates a matrix of splicing outliers that are significantly over or underexpressed in tumors samples compared to normal denoted by chromosome location. The package also will calculate the splicing burden in each tumor and characterize the types of splicing events that occur.


.. conda:package:: bioconductor-outsplice

   |downloads_bioconductor-outsplice| |docker_bioconductor-outsplice|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
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

      mamba install bioconductor-outsplice

   and update with::

      mamba update bioconductor-outsplice

  To create a new environment, run::

      mamba create --name myenvname bioconductor-outsplice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-outsplice:<tag>

   (see `bioconductor-outsplice/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-outsplice| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-outsplice.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-outsplice
   :alt:   (downloads)
.. |docker_bioconductor-outsplice| image:: https://quay.io/repository/biocontainers/bioconductor-outsplice/status
   :target: https://quay.io/repository/biocontainers/bioconductor-outsplice
.. _`bioconductor-outsplice/tags`: https://quay.io/repository/biocontainers/bioconductor-outsplice?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-outsplice";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-outsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-outsplice/README.html