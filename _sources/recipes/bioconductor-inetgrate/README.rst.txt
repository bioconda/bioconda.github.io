:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inetgrate'
.. highlight: bash

bioconductor-inetgrate
======================

.. conda:recipe:: bioconductor-inetgrate
   :replaces_section_title:
   :noindex:

   Integrates DNA methylation data with gene expression in a single gene network

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iNETgrate.html
   :license: GPL-3
   :recipe: /`bioconductor-inetgrate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inetgrate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inetgrate/meta.yaml>`_

   The iNETgrate package provides functions to build a correlation network in which nodes are genes. DNA methylation and gene expression data are integrated to define the connections between genes. This network is used to identify modules \(clusters\) of genes. The biological information in each of the resulting modules is represented by an eigengene. These biological signatures can be used as features e.g.\, for classification of patients into risk categories. The resulting biological signatures are very robust and give a holistic view of the underlying molecular changes.


.. conda:package:: bioconductor-inetgrate

   |downloads_bioconductor-inetgrate| |docker_bioconductor-inetgrate|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-minfi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-pigengene: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-caret: 
   :depends r-glmnet: 
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-rfast: 
   :depends r-survival: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-wgcna: 
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

      mamba install bioconductor-inetgrate

   and update with::

      mamba update bioconductor-inetgrate

  To create a new environment, run::

      mamba create --name myenvname bioconductor-inetgrate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-inetgrate:<tag>

   (see `bioconductor-inetgrate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-inetgrate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inetgrate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inetgrate
   :alt:   (downloads)
.. |docker_bioconductor-inetgrate| image:: https://quay.io/repository/biocontainers/bioconductor-inetgrate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inetgrate
.. _`bioconductor-inetgrate/tags`: https://quay.io/repository/biocontainers/bioconductor-inetgrate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-inetgrate";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inetgrate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inetgrate/README.html