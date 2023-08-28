:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-universalmotif'
.. highlight: bash

bioconductor-universalmotif
===========================

.. conda:recipe:: bioconductor-universalmotif
   :replaces_section_title:
   :noindex:

   Import\, Modify\, and Export Motifs with R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/universalmotif.html
   :license: GPL-3
   :recipe: /`bioconductor-universalmotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-universalmotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-universalmotif/meta.yaml>`_

   Allows for importing most common motif types into R for use by functions provided by other Bioconductor motif\-related packages. Motifs can be exported into most major motif formats from various classes as defined by other Bioconductor packages. A suite of motif and sequence manipulation and analysis functions are included\, including enrichment\, comparison\, P\-value calculation\, shuffling\, trimming\, higher\-order motifs\, and others.


.. conda:package:: bioconductor-universalmotif

   |downloads_bioconductor-universalmotif| |docker_bioconductor-universalmotif|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.1-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.4-0</code>,  <code>1.12.3-0</code>,  <code>1.12.1-0</code>,  <code>1.10.1-0</code>,  <code>1.8.3-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.18.1-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.4-0``,  ``1.12.3-0``,  ``1.12.1-0``,  ``1.10.1-0``,  ``1.8.3-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-matrixgenerics: ``>=1.12.0,<1.13.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-rcpp: 
   :depends r-rcppthread: 
   :depends r-rlang: 
   :depends r-yaml: 
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

      mamba install bioconductor-universalmotif

   and update with::

      mamba update bioconductor-universalmotif

  To create a new environment, run::

      mamba create --name myenvname bioconductor-universalmotif

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-universalmotif:<tag>

   (see `bioconductor-universalmotif/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-universalmotif| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-universalmotif.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-universalmotif
   :alt:   (downloads)
.. |docker_bioconductor-universalmotif| image:: https://quay.io/repository/biocontainers/bioconductor-universalmotif/status
   :target: https://quay.io/repository/biocontainers/bioconductor-universalmotif
.. _`bioconductor-universalmotif/tags`: https://quay.io/repository/biocontainers/bioconductor-universalmotif?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-universalmotif";
        var versions = ["1.18.1","1.16.0","1.16.0","1.12.4","1.12.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-universalmotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-universalmotif/README.html