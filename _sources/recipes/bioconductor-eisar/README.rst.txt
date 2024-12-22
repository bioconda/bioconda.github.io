:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eisar'
.. highlight: bash

bioconductor-eisar
==================

.. conda:recipe:: bioconductor-eisar
   :replaces_section_title:
   :noindex:

   Exon\-Intron Split Analysis \(EISA\) in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/eisaR.html
   :license: GPL-3
   :recipe: /`bioconductor-eisar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eisar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eisar/meta.yaml>`_

   Exon\-intron split analysis \(EISA\) uses ordinary RNA\-seq data to measure changes in mature RNA and pre\-mRNA reads across different experimental conditions to quantify transcriptional and post\-transcriptional regulation of gene expression. For details see Gaidatzis et al.\, Nat Biotechnol 2015. doi\: 10.1038\/nbt.3269. eisaR implements the major steps of EISA in R.


.. conda:package:: bioconductor-eisar

   |downloads_bioconductor-eisar| |docker_bioconductor-eisar|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
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

      mamba install bioconductor-eisar

   and update with::

      mamba update bioconductor-eisar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-eisar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eisar:<tag>

   (see `bioconductor-eisar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eisar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eisar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eisar
   :alt:   (downloads)
.. |docker_bioconductor-eisar| image:: https://quay.io/repository/biocontainers/bioconductor-eisar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eisar
.. _`bioconductor-eisar/tags`: https://quay.io/repository/biocontainers/bioconductor-eisar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eisar";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eisar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eisar/README.html