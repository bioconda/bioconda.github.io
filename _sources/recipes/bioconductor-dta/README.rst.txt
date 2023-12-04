:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dta'
.. highlight: bash

bioconductor-dta
================

.. conda:recipe:: bioconductor-dta
   :replaces_section_title:
   :noindex:

   Dynamic Transcriptome Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DTA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dta/meta.yaml>`_
   :links: biotools: :biotools:`dta`, doi: :doi:`10.1093/bioinformatics/bts052`

   Dynamic Transcriptome Analysis \(DTA\) can monitor the cellular response to perturbations with higher sensitivity and temporal resolution than standard transcriptomics. The package implements the underlying kinetic modeling approach capable of the precise determination of synthesis\- and decay rates from individual microarray or RNAseq measurements.


.. conda:package:: bioconductor-dta

   |downloads_bioconductor-dta| |docker_bioconductor-dta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.48.0-1</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-1</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  </span></summary>
      

      ``2.48.0-1``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lsd: 
   :depends r-scatterplot3d: 
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

      mamba install bioconductor-dta

   and update with::

      mamba update bioconductor-dta

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dta:<tag>

   (see `bioconductor-dta/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dta.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dta
   :alt:   (downloads)
.. |docker_bioconductor-dta| image:: https://quay.io/repository/biocontainers/bioconductor-dta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dta
.. _`bioconductor-dta/tags`: https://quay.io/repository/biocontainers/bioconductor-dta?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dta";
        var versions = ["2.48.0","2.48.0","2.46.0","2.44.0","2.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dta/README.html