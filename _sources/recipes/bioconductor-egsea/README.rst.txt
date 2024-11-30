:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-egsea'
.. highlight: bash

bioconductor-egsea
==================

.. conda:recipe:: bioconductor-egsea
   :replaces_section_title:
   :noindex:

   Ensemble of Gene Set Enrichment Analyses

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/EGSEA.html
   :license: GPL-3
   :recipe: /`bioconductor-egsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egsea/meta.yaml>`_
   :links: biotools: :biotools:`egsea`, usegalaxy-eu: :usegalaxy-eu:`egsea`

   This package implements the Ensemble of Gene Set Enrichment Analyses \(EGSEA\) method for gene set testing.


.. conda:package:: bioconductor-egsea

   |downloads_bioconductor-egsea| |docker_bioconductor-egsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-egseadata: ``>=1.28.0,<1.29.0``
   :depends bioconductor-gage: ``>=2.50.0,<2.51.0``
   :depends bioconductor-globaltest: ``>=5.54.0,<5.55.0``
   :depends bioconductor-gsva: ``>=1.48.0,<1.49.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-org.rn.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-padog: ``>=1.42.0,<1.43.0``
   :depends bioconductor-pathview: ``>=1.40.0,<1.41.0``
   :depends bioconductor-safe: ``>=3.40.0,<3.41.0``
   :depends bioconductor-topgo: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-ggplot2: ``>=1.0.0``
   :depends r-gplots: ``>=2.14.2``
   :depends r-htmlutils: ``>=0.1.5``
   :depends r-htmlwidgets: 
   :depends r-hwriter: ``>=1.2.2``
   :depends r-metap: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-stringi: ``>=0.5.0``
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

      mamba install bioconductor-egsea

   and update with::

      mamba update bioconductor-egsea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-egsea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-egsea:<tag>

   (see `bioconductor-egsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-egsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-egsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-egsea
   :alt:   (downloads)
.. |docker_bioconductor-egsea| image:: https://quay.io/repository/biocontainers/bioconductor-egsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-egsea
.. _`bioconductor-egsea/tags`: https://quay.io/repository/biocontainers/bioconductor-egsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-egsea";
        var versions = ["1.28.0","1.26.0","1.22.0","1.20.0","1.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-egsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-egsea/README.html