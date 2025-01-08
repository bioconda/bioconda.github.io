:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panomir'
.. highlight: bash

bioconductor-panomir
====================

.. conda:recipe:: bioconductor-panomir
   :replaces_section_title:
   :noindex:

   Detection of miRNAs that regulate interacting groups of pathways

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PanomiR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-panomir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panomir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panomir/meta.yaml>`_

   PanomiR is a package to detect miRNAs that target groups of pathways from gene expression data. This package provides functionality for generating pathway activity profiles\, determining differentially activated pathways between user\-specified conditions\, determining clusters of pathways via the PCxN package\, and generating miRNAs targeting clusters of pathways. These function can be used separately or sequentially to analyze RNA\-Seq data.


.. conda:package:: bioconductor-panomir

   |downloads_bioconductor-panomir| |docker_bioconductor-panomir|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.14.0,<4.15.0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-igraph: 
   :depends r-metap: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-withr: 
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

      mamba install bioconductor-panomir

   and update with::

      mamba update bioconductor-panomir

  To create a new environment, run::

      mamba create --name myenvname bioconductor-panomir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-panomir:<tag>

   (see `bioconductor-panomir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-panomir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panomir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panomir
   :alt:   (downloads)
.. |docker_bioconductor-panomir| image:: https://quay.io/repository/biocontainers/bioconductor-panomir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panomir
.. _`bioconductor-panomir/tags`: https://quay.io/repository/biocontainers/bioconductor-panomir?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-panomir";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panomir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panomir/README.html