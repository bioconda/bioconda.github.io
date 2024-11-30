:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bbcanalyzer'
.. highlight: bash

bioconductor-bbcanalyzer
========================

.. conda:recipe:: bioconductor-bbcanalyzer
   :replaces_section_title:
   :noindex:

   BBCAnalyzer\: an R\/Bioconductor package for visualizing base counts

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BBCAnalyzer.html
   :license: LGPL-3
   :recipe: /`bioconductor-bbcanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bbcanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bbcanalyzer/meta.yaml>`_
   :links: biotools: :biotools:`bbcanalyzer`, doi: :doi:`10.1186/s12859-017-1549-4`

   BBCAnalyzer is a package for visualizing the relative or absolute number of bases\, deletions and insertions at defined positions in sequence alignment data available as bam files in comparison to the reference bases. Markers for the relative base frequencies\, the mean quality of the detected bases\, known mutations or polymorphisms and variants called in the data may additionally be included in the plots.


.. conda:package:: bioconductor-bbcanalyzer

   |downloads_bioconductor-bbcanalyzer| |docker_bioconductor-bbcanalyzer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-bbcanalyzer

   and update with::

      mamba update bioconductor-bbcanalyzer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bbcanalyzer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bbcanalyzer:<tag>

   (see `bioconductor-bbcanalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bbcanalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bbcanalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bbcanalyzer
   :alt:   (downloads)
.. |docker_bioconductor-bbcanalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-bbcanalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bbcanalyzer
.. _`bioconductor-bbcanalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-bbcanalyzer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bbcanalyzer";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bbcanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bbcanalyzer/README.html