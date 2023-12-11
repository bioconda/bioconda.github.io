:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosia'
.. highlight: bash

bioconductor-cosia
==================

.. conda:recipe:: bioconductor-cosia
   :replaces_section_title:
   :noindex:

   An Investigation Across Different Species and Tissues

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CoSIA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cosia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosia/meta.yaml>`_

   Cross\-Species Investigation and Analysis \(CoSIA\) is a package that provides researchers with an alternative methodology for comparing across species and tissues using normal wild\-type RNA\-Seq Gene Expression data from Bgee. Using RNA\-Seq Gene Expression data\, CoSIA provides multiple visualization tools to explore the transcriptome diversity and variation across genes\, tissues\, and species. CoSIA uses the Coefficient of Variation and Shannon Entropy and Specificity to calculate transcriptome diversity and variation. CoSIA also provides additional conversion tools and utilities to provide a streamlined methodology for cross\-species comparison.


.. conda:package:: bioconductor-cosia

   |downloads_bioconductor-cosia| |docker_bioconductor-cosia|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationtools: ``>=1.76.0,<1.77.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-org.ce.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.dm.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.dr.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.rn.eg.db: ``>=3.18.0,<3.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=1.0.7``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-homologene: ``>=1.4.68.19``
   :depends r-magrittr: ``>=2.0.1``
   :depends r-plotly: ``>=4.10.0``
   :depends r-rcolorbrewer: ``>=1.1-2``
   :depends r-readr: ``>=2.1.1``
   :depends r-stringr: ``>=1.4.0``
   :depends r-tibble: ``>=3.1.7``
   :depends r-tidyr: ``>=1.2.0``
   :depends r-tidyselect: ``>=1.1.2``
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

      mamba install bioconductor-cosia

   and update with::

      mamba update bioconductor-cosia

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cosia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cosia:<tag>

   (see `bioconductor-cosia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cosia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosia
   :alt:   (downloads)
.. |docker_bioconductor-cosia| image:: https://quay.io/repository/biocontainers/bioconductor-cosia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosia
.. _`bioconductor-cosia/tags`: https://quay.io/repository/biocontainers/bioconductor-cosia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cosia";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosia/README.html