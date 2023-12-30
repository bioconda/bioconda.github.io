:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-roseq'
.. highlight: bash

bioconductor-roseq
==================

.. conda:recipe:: bioconductor-roseq
   :replaces_section_title:
   :noindex:

   Modeling expression ranks for noise\-tolerant differential expression analysis of scRNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ROSeq.html
   :license: GPL-3
   :recipe: /`bioconductor-roseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roseq/meta.yaml>`_

   ROSeq \- A rank based approach to modeling gene expression with filtered and normalized read count matrix. ROSeq takes filtered and normalized read matrix and cell\-annotation\/condition as input and determines the differentially expressed genes between the contrasting groups of single cells. One of the input parameters is the number of cores to be used.


.. conda:package:: bioconductor-roseq

   |downloads_bioconductor-roseq| |docker_bioconductor-roseq|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.10-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-pbmcapply: 
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

      mamba install bioconductor-roseq

   and update with::

      mamba update bioconductor-roseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-roseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-roseq:<tag>

   (see `bioconductor-roseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-roseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-roseq
   :alt:   (downloads)
.. |docker_bioconductor-roseq| image:: https://quay.io/repository/biocontainers/bioconductor-roseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roseq
.. _`bioconductor-roseq/tags`: https://quay.io/repository/biocontainers/bioconductor-roseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-roseq";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roseq/README.html