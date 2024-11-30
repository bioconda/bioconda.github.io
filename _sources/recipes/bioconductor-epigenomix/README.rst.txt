:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epigenomix'
.. highlight: bash

bioconductor-epigenomix
=======================

.. conda:recipe:: bioconductor-epigenomix
   :replaces_section_title:
   :noindex:

   Epigenetic and gene transcription data normalization and integration with mixture models

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/epigenomix.html
   :license: LGPL-3
   :recipe: /`bioconductor-epigenomix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epigenomix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epigenomix/meta.yaml>`_
   :links: biotools: :biotools:`epigenomix`

   A package for the integrative analysis of RNA\-seq or microarray based gene transcription and histone modification data obtained by ChIP\-seq. The package provides methods for data preprocessing and matching as well as methods for fitting bayesian mixture models in order to detect genes with differences in both data types.


.. conda:package:: bioconductor-epigenomix

   |downloads_bioconductor-epigenomix| |docker_bioconductor-epigenomix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beadarray: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mcmcpack: 
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

      mamba install bioconductor-epigenomix

   and update with::

      mamba update bioconductor-epigenomix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epigenomix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epigenomix:<tag>

   (see `bioconductor-epigenomix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epigenomix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epigenomix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epigenomix
   :alt:   (downloads)
.. |docker_bioconductor-epigenomix| image:: https://quay.io/repository/biocontainers/bioconductor-epigenomix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epigenomix
.. _`bioconductor-epigenomix/tags`: https://quay.io/repository/biocontainers/bioconductor-epigenomix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epigenomix";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epigenomix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epigenomix/README.html