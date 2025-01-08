:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synapter'
.. highlight: bash

bioconductor-synapter
=====================

.. conda:recipe:: bioconductor-synapter
   :replaces_section_title:
   :noindex:

   Label\-free data analysis pipeline for optimal identification and quantitation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/synapter.html
   :license: GPL-2
   :recipe: /`bioconductor-synapter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapter/meta.yaml>`_

   The synapter package provides functionality to reanalyse label\-free proteomics data acquired on a Synapt G2 mass spectrometer. One or several runs\, possibly processed with additional ion mobility separation to increase identification accuracy can be combined to other quantitation files to maximise identification and quantitation accuracy.


.. conda:package:: bioconductor-synapter

   |downloads_bioconductor-synapter| |docker_bioconductor-synapter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  </span></summary>
      

      ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.6.1-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-cleaver: ``>=1.44.0,<1.45.0``
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0``
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-lattice: 
   :depends r-rcolorbrewer: 
   :depends r-readr: ``>=0.2``
   :depends r-rmarkdown: ``>=1.0``
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

      mamba install bioconductor-synapter

   and update with::

      mamba update bioconductor-synapter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-synapter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synapter:<tag>

   (see `bioconductor-synapter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synapter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synapter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synapter
   :alt:   (downloads)
.. |docker_bioconductor-synapter| image:: https://quay.io/repository/biocontainers/bioconductor-synapter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synapter
.. _`bioconductor-synapter/tags`: https://quay.io/repository/biocontainers/bioconductor-synapter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-synapter";
        var versions = ["2.30.0","2.26.0","2.24.0","2.22.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synapter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synapter/README.html