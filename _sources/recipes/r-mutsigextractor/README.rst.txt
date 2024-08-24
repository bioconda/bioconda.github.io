:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mutsigextractor'
.. highlight: bash

r-mutsigextractor
=================

.. conda:recipe:: r-mutsigextractor
   :replaces_section_title:
   :noindex:

   Extract mutational signatures from VCF files

   :homepage: https://github.com/UMCUGenetics/mutSigExtractor
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-mutsigextractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mutsigextractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mutsigextractor/meta.yaml>`_

   


.. conda:package:: r-mutsigextractor

   |downloads_r-mutsigextractor| |docker_r-mutsigextractor|

   :versions:
      
      

      ``1.29-0``,  ``1.28-0``,  ``1.14-0``

      

   
   :depends bioconductor-bsgenome: 
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: 
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: 
   :depends bioconductor-genomeinfodb: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install r-mutsigextractor

   and update with::

      mamba update r-mutsigextractor

  To create a new environment, run::

      mamba create --name myenvname r-mutsigextractor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mutsigextractor:<tag>

   (see `r-mutsigextractor/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mutsigextractor| image:: https://img.shields.io/conda/dn/bioconda/r-mutsigextractor.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mutsigextractor
   :alt:   (downloads)
.. |docker_r-mutsigextractor| image:: https://quay.io/repository/biocontainers/r-mutsigextractor/status
   :target: https://quay.io/repository/biocontainers/r-mutsigextractor
.. _`r-mutsigextractor/tags`: https://quay.io/repository/biocontainers/r-mutsigextractor?tab=tags


.. raw:: html

    <script>
        var package = "r-mutsigextractor";
        var versions = ["1.29","1.28","1.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mutsigextractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mutsigextractor/README.html