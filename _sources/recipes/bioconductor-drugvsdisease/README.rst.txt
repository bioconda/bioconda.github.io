:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drugvsdisease'
.. highlight: bash

bioconductor-drugvsdisease
==========================

.. conda:recipe:: bioconductor-drugvsdisease
   :replaces_section_title:
   :noindex:

   Comparison of disease and drug profiles using Gene set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DrugVsDisease.html
   :license: GPL-3
   :recipe: /`bioconductor-drugvsdisease <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugvsdisease>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugvsdisease/meta.yaml>`_
   :links: biotools: :biotools:`drugvsdisease`, doi: :doi:`10.1038/nmeth.3252`

   This package generates ranked lists of differential gene expression for either disease or drug profiles. Input data can be downloaded from Array Express or GEO\, or from local CEL files. Ranked lists of differential expression and associated p\-values are calculated using Limma. Enrichment scores \(Subramanian et al. PNAS 2005\) are calculated to a reference set of default drug or disease profiles\, or a set of custom data supplied by the user. Network visualisation of significant scores are output in Cytoscape format.


.. conda:package:: bioconductor-drugvsdisease

   |downloads_bioconductor-drugvsdisease| |docker_bioconductor-drugvsdisease|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-1</code>,  <code>2.26.0-1</code>,  </span></summary>
      

      ``2.42.0-0``,  ``2.40.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.26.0-1``,  ``2.24.2-0``,  ``2.22.0-0``,  ``2.20.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-annotate: ``>=1.78.0,<1.79.0``
   :depends bioconductor-arrayexpress: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-cmap2data: ``>=1.36.0,<1.37.0``
   :depends bioconductor-drugvsdiseasedata: ``>=1.36.0,<1.37.0``
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends bioconductor-hgu133a.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-hgu133a2.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-hgu133plus2.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-qvalue: ``>=2.32.0,<2.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-runit: 
   :depends r-xtable: 
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

      mamba install bioconductor-drugvsdisease

   and update with::

      mamba update bioconductor-drugvsdisease

  To create a new environment, run::

      mamba create --name myenvname bioconductor-drugvsdisease

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drugvsdisease:<tag>

   (see `bioconductor-drugvsdisease/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drugvsdisease| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drugvsdisease.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drugvsdisease
   :alt:   (downloads)
.. |docker_bioconductor-drugvsdisease| image:: https://quay.io/repository/biocontainers/bioconductor-drugvsdisease/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drugvsdisease
.. _`bioconductor-drugvsdisease/tags`: https://quay.io/repository/biocontainers/bioconductor-drugvsdisease?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-drugvsdisease";
        var versions = ["2.42.0","2.40.0","2.36.0","2.34.0","2.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drugvsdisease/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drugvsdisease/README.html