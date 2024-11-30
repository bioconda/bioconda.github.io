:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancer'
.. highlight: bash

bioconductor-cancer
===================

.. conda:recipe:: bioconductor-cancer
   :replaces_section_title:
   :noindex:

   A Graphical User Interface for accessing and modeling the Cancer Genomics Data of MSKCC

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/canceR.html
   :license: GPL-2
   :recipe: /`bioconductor-cancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancer/meta.yaml>`_

   The package is user friendly interface based on the cgdsr and other modeling packages to explore\, compare\, and analyse all available Cancer Data \(Clinical data\, Gene Mutation\, Gene Methylation\, Gene Expression\, Protein Phosphorylation\, Copy Number Alteration\) hosted by the Computational Biology Center at Memorial\-Sloan\-Kettering Cancer Center \(MSKCC\).


.. conda:package:: bioconductor-cancer

   |downloads_bioconductor-cancer| |docker_bioconductor-cancer|

   :versions:
      
      

      ``1.36.0-0``,  ``1.32.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genetclassifier: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-phenotest: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-formula: 
   :depends r-httr: 
   :depends r-plyr: 
   :depends r-r.methodss3: 
   :depends r-r.oo: 
   :depends r-rpart: 
   :depends r-runit: 
   :depends r-survival: 
   :depends r-tkrplot: 
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

      mamba install bioconductor-cancer

   and update with::

      mamba update bioconductor-cancer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cancer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cancer:<tag>

   (see `bioconductor-cancer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cancer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancer
   :alt:   (downloads)
.. |docker_bioconductor-cancer| image:: https://quay.io/repository/biocontainers/bioconductor-cancer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancer
.. _`bioconductor-cancer/tags`: https://quay.io/repository/biocontainers/bioconductor-cancer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cancer";
        var versions = ["1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancer/README.html