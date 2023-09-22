:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metablastr'
.. highlight: bash

r-metablastr
============

.. conda:recipe:: r-metablastr
   :replaces_section_title:
   :noindex:

   The metablastr package harnesses the power of BLAST by providing interface functions between it and R.

   :homepage: https://github.com/drostlab/metablastr
   :license: GPL / GPL-2.0-or-later
   :recipe: /`r-metablastr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metablastr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metablastr/meta.yaml>`_

   


.. conda:package:: r-metablastr

   |downloads_r-metablastr| |docker_r-metablastr|

   :versions:
      
      

      ``0.3.2-0``

      

   
   :depends bioconductor-biostrings: ``>=2.48.0``
   :depends bioconductor-genomicfeatures: ``>=1.30.3``
   :depends bioconductor-genomicranges: ``>=1.30.3``
   :depends bioconductor-iranges: ``>=2.16``
   :depends bioconductor-rsamtools: ``>=1.30.0``
   :depends bioconductor-rtracklayer: ``>=1.38.3``
   :depends libgcc-ng: ``>=12``
   :depends libpq: ``>=15.4,<16.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fs: ``>=1.5.1``
   :depends r-ggplot2: ``>=3.3.3``
   :depends r-ggridges: ``>=0.5.0``
   :depends r-ggsci: ``>=2.9``
   :depends r-rcolorbrewer: ``>=1.1_2``
   :depends r-rcpp: ``>=0.12.0``
   :depends r-readr: ``>=1.3.1``
   :depends r-scales: ``>=1.0.0``
   :depends r-seqinr: ``>=3.6_1``
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

      mamba install r-metablastr

   and update with::

      mamba update r-metablastr

  To create a new environment, run::

      mamba create --name myenvname r-metablastr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-metablastr:<tag>

   (see `r-metablastr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-metablastr| image:: https://img.shields.io/conda/dn/bioconda/r-metablastr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metablastr
   :alt:   (downloads)
.. |docker_r-metablastr| image:: https://quay.io/repository/biocontainers/r-metablastr/status
   :target: https://quay.io/repository/biocontainers/r-metablastr
.. _`r-metablastr/tags`: https://quay.io/repository/biocontainers/r-metablastr?tab=tags


.. raw:: html

    <script>
        var package = "r-metablastr";
        var versions = ["0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metablastr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metablastr/README.html