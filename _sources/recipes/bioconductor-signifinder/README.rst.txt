:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signifinder'
.. highlight: bash

bioconductor-signifinder
========================

.. conda:recipe:: bioconductor-signifinder
   :replaces_section_title:
   :noindex:

   Implementations of transcriptional cancer signatures

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/signifinder.html
   :license: AGPL-3
   :recipe: /`bioconductor-signifinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signifinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signifinder/meta.yaml>`_

   signifinder is an R package for computing and exploring a compendium of tumor signatures. It allows to compute a variety of signatures\, based on gene expression values\, and return single\-sample scores. Currently\, signifinder contains 46 distinct signatures collected from the literature\, relating to multiple tumors and multiple cancer processes.


.. conda:package:: bioconductor-signifinder

   |downloads_bioconductor-signifinder| |docker_bioconductor-signifinder|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-consensusov: ``>=1.24.0,<1.25.0``
   :depends bioconductor-ensembldb: ``>=2.26.0,<2.27.0``
   :depends bioconductor-gsva: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-spatialexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.18.0,<3.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-dgeobj.utils: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-maxstat: 
   :depends r-openair: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-viridis: 
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

      mamba install bioconductor-signifinder

   and update with::

      mamba update bioconductor-signifinder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-signifinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-signifinder:<tag>

   (see `bioconductor-signifinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-signifinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signifinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signifinder
   :alt:   (downloads)
.. |docker_bioconductor-signifinder| image:: https://quay.io/repository/biocontainers/bioconductor-signifinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signifinder
.. _`bioconductor-signifinder/tags`: https://quay.io/repository/biocontainers/bioconductor-signifinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-signifinder";
        var versions = ["1.4.0","1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signifinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signifinder/README.html