:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snifter'
.. highlight: bash

bioconductor-snifter
====================

.. conda:recipe:: bioconductor-snifter
   :replaces_section_title:
   :noindex:

   R wrapper for the python openTSNE library

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/snifter.html
   :license: GPL-3
   :recipe: /`bioconductor-snifter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snifter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snifter/meta.yaml>`_

   Provides an R wrapper for the implementation of FI\-tSNE from the python package openTNSE. See Poličar et al. \(2019\) \<doi\:10.1101\/731877\> and the algorithm described by Linderman et al. \(2018\) \<doi\:10.1038\/s41592\-018\-0308\-4\>.


.. conda:package:: bioconductor-snifter

   |downloads_bioconductor-snifter| |docker_bioconductor-snifter|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-irlba: 
   :depends r-reticulate: 
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

      mamba install bioconductor-snifter

   and update with::

      mamba update bioconductor-snifter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snifter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snifter:<tag>

   (see `bioconductor-snifter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snifter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snifter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snifter
   :alt:   (downloads)
.. |docker_bioconductor-snifter| image:: https://quay.io/repository/biocontainers/bioconductor-snifter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snifter
.. _`bioconductor-snifter/tags`: https://quay.io/repository/biocontainers/bioconductor-snifter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snifter";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snifter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snifter/README.html