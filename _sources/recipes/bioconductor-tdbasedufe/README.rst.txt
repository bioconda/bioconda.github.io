:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tdbasedufe'
.. highlight: bash

bioconductor-tdbasedufe
=======================

.. conda:recipe:: bioconductor-tdbasedufe
   :replaces_section_title:
   :noindex:

   Tensor Decomposition Based Unsupervised Feature Extraction

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TDbasedUFE.html
   :license: GPL-3
   :recipe: /`bioconductor-tdbasedufe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdbasedufe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdbasedufe/meta.yaml>`_

   This is a comprehensive package to perform Tensor decomposition based unsupervised feature extraction. It can perform unsupervised feature extraction. It uses tensor decomposition. It is applicable to gene expression\, DNA methylation\, and histone modification etc. It can perform multiomics analysis. It is also potentially applicable to single cell omics data sets.


.. conda:package:: bioconductor-tdbasedufe

   |downloads_bioconductor-tdbasedufe| |docker_bioconductor-tdbasedufe|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-mofadata: ``>=1.16.0,<1.17.0``
   :depends bioconductor-tximport: ``>=1.28.0,<1.29.0``
   :depends bioconductor-tximportdata: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-readr: 
   :depends r-rtensor: 
   :depends r-shiny: 
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

      mamba install bioconductor-tdbasedufe

   and update with::

      mamba update bioconductor-tdbasedufe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tdbasedufe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tdbasedufe:<tag>

   (see `bioconductor-tdbasedufe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tdbasedufe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tdbasedufe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tdbasedufe
   :alt:   (downloads)
.. |docker_bioconductor-tdbasedufe| image:: https://quay.io/repository/biocontainers/bioconductor-tdbasedufe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tdbasedufe
.. _`bioconductor-tdbasedufe/tags`: https://quay.io/repository/biocontainers/bioconductor-tdbasedufe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tdbasedufe";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tdbasedufe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tdbasedufe/README.html