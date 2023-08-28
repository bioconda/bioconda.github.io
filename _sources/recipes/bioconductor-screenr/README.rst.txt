:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-screenr'
.. highlight: bash

bioconductor-screenr
====================

.. conda:recipe:: bioconductor-screenr
   :replaces_section_title:
   :noindex:

   Package to Perform High Throughput Biological Screening

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ScreenR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-screenr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screenr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screenr/meta.yaml>`_

   ScreenR is a package suitable to perform hit identification in loss of function High Throughput Biological Screenings performed using barcoded shRNA\-based libraries. ScreenR combines the computing power of software such as edgeR with the simplicity of use of the Tidyverse metapackage. ScreenR executes a pipeline able to find candidate hits from barcode counts\, and integrates a wide range of visualization modes for each step of the analysis.


.. conda:package:: bioconductor-screenr

   |downloads_bioconductor-screenr| |docker_bioconductor-screenr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=1.0``
   :depends r-ggplot2: ``>=3.3``
   :depends r-ggvenn: ``>=0.1.9``
   :depends r-magrittr: ``>=1.0``
   :depends r-patchwork: ``>=1.1``
   :depends r-purrr: ``>=0.3.4``
   :depends r-rlang: ``>=0.4``
   :depends r-scales: ``>=1.1.1``
   :depends r-stringr: ``>=1.4``
   :depends r-tibble: ``>=3.1.6``
   :depends r-tidyr: ``>=1.2``
   :depends r-tidyselect: ``>=1.1.2``
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

      mamba install bioconductor-screenr

   and update with::

      mamba update bioconductor-screenr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-screenr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-screenr:<tag>

   (see `bioconductor-screenr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-screenr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-screenr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-screenr
   :alt:   (downloads)
.. |docker_bioconductor-screenr| image:: https://quay.io/repository/biocontainers/bioconductor-screenr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-screenr
.. _`bioconductor-screenr/tags`: https://quay.io/repository/biocontainers/bioconductor-screenr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-screenr";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-screenr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-screenr/README.html