:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ripat'
.. highlight: bash

bioconductor-ripat
==================

.. conda:recipe:: bioconductor-ripat
   :replaces_section_title:
   :noindex:

   Retroviral Integration Pattern Analysis Tool \(RIPAT\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RIPAT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ripat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ripat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ripat/meta.yaml>`_

   RIPAT is developed as an R package for retroviral integration sites annotation and distribution analysis. RIPAT needs local alignment results from BLAST and BLAT. Specific input format is depicted in RIPAT manual. RIPAT provides RV integration pattern analysis result as forms of R objects\, excel file with multiple sheets and plots.


.. conda:package:: bioconductor-ripat

   |downloads_bioconductor-ripat| |docker_bioconductor-ripat|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-karyoploter: ``>=1.26.0,<1.27.0``
   :depends bioconductor-regioner: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: ``>=3.1.0``
   :depends r-openxlsx: ``>=4.1.4``
   :depends r-plyr: ``>=1.8.4``
   :depends r-stringr: ``>=1.3.1``
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

      mamba install bioconductor-ripat

   and update with::

      mamba update bioconductor-ripat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ripat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ripat:<tag>

   (see `bioconductor-ripat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ripat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ripat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ripat
   :alt:   (downloads)
.. |docker_bioconductor-ripat| image:: https://quay.io/repository/biocontainers/bioconductor-ripat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ripat
.. _`bioconductor-ripat/tags`: https://quay.io/repository/biocontainers/bioconductor-ripat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ripat";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ripat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ripat/README.html