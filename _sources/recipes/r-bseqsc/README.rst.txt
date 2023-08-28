:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bseqsc'
.. highlight: bash

r-bseqsc
========

.. conda:recipe:: r-bseqsc
   :replaces_section_title:
   :noindex:

   Companion package to\: A single\-cell transcriptomic map of the human and mouse pancreas reveals inter\- and intra\-cell population structure. Baron et al. Cell Systems \(2016\) https\:\/\/www.ncbi.nlm.nih.gov\/pubmed\/27667365

   :homepage: https://github.com/shenorrLab/bseqsc
   :license: GPL / GPL-2
   :recipe: /`r-bseqsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bseqsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bseqsc/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2016.08.011`

   


.. conda:package:: r-bseqsc

   |downloads_r-bseqsc| |docker_r-bseqsc|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.48.0``
   :depends bioconductor-biobase: ``>=2.46.0``
   :depends bioconductor-edger: ``>=3.28.0``
   :depends bioconductor-preprocesscore: ``>=1.48.0``
   :depends r-abind: ``>=1.4_5``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cssam: ``>=1.4``
   :depends r-dplyr: ``>=1.0.6``
   :depends r-e1071: ``>=1.7_7``
   :depends r-ggplot2: ``>=3.3.3``
   :depends r-nmf: ``>=0.21.0``
   :depends r-openxlsx: ``>=4.2.3``
   :depends r-pkgmaker: ``>=0.32.2``
   :depends r-plyr: ``>=1.8.6``
   :depends r-rngtools: ``>=1.5``
   :depends r-scales: ``>=1.1.1``
   :depends r-stringr: ``>=1.4.0``
   :depends xbioc: ``>=0.1.18``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-bseqsc

   and update with::

      mamba update r-bseqsc

  To create a new environment, run::

      mamba create --name myenvname r-bseqsc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-bseqsc:<tag>

   (see `r-bseqsc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bseqsc| image:: https://img.shields.io/conda/dn/bioconda/r-bseqsc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bseqsc
   :alt:   (downloads)
.. |docker_r-bseqsc| image:: https://quay.io/repository/biocontainers/r-bseqsc/status
   :target: https://quay.io/repository/biocontainers/r-bseqsc
.. _`r-bseqsc/tags`: https://quay.io/repository/biocontainers/r-bseqsc?tab=tags


.. raw:: html

    <script>
        var package = "r-bseqsc";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bseqsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bseqsc/README.html