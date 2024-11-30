:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-apalyzer'
.. highlight: bash

bioconductor-apalyzer
=====================

.. conda:recipe:: bioconductor-apalyzer
   :replaces_section_title:
   :noindex:

   A toolkit for APA analysis using RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/APAlyzer.html
   :license: LGPL-3
   :recipe: /`bioconductor-apalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apalyzer/meta.yaml>`_

   Perform 3\'UTR APA\, Intronic APA and gene expression analysis using RNA\-seq data.


.. conda:package:: bioconductor-apalyzer

   |downloads_bioconductor-apalyzer| |docker_bioconductor-apalyzer|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-hybridmtest: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsubread: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-repmis: 
   :depends r-tidyr: 
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

      mamba install bioconductor-apalyzer

   and update with::

      mamba update bioconductor-apalyzer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-apalyzer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-apalyzer:<tag>

   (see `bioconductor-apalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-apalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-apalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-apalyzer
   :alt:   (downloads)
.. |docker_bioconductor-apalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-apalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-apalyzer
.. _`bioconductor-apalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-apalyzer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-apalyzer";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-apalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-apalyzer/README.html