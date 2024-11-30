:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocancer'
.. highlight: bash

bioconductor-biocancer
======================

.. conda:recipe:: bioconductor-biocancer
   :replaces_section_title:
   :noindex:

   Interactive Multi\-Omics Cancers Data Visualization and Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/bioCancer.html
   :license: AGPL-3 | file LICENSE
   :recipe: /`bioconductor-biocancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocancer/meta.yaml>`_

   This package is a Shiny App to visualize and analyse interactively Multi\-Assays of Cancer Genomic Data.


.. conda:package:: bioconductor-biocancer

   |downloads_bioconductor-biocancer| |docker_bioconductor-biocancer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-dose: ``>=3.28.0,<3.29.0``
   :depends bioconductor-genetclassifier: ``>=1.42.0,<1.43.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.bt.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-reactome.db: ``>=1.86.0,<1.87.0``
   :depends bioconductor-reactomepa: ``>=1.46.0,<1.47.0``
   :depends r-algdesign: ``>=1.1.7.3``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-diagrammer: ``<=1.01``
   :depends r-dplyr: ``>=0.7.2``
   :depends r-dt: ``>=0.3``
   :depends r-htmlwidgets: 
   :depends r-httr: 
   :depends r-import: ``>=1.1.0``
   :depends r-plyr: 
   :depends r-r.methodss3: 
   :depends r-r.oo: 
   :depends r-radiant.data: ``>=0.9.1``
   :depends r-shiny: ``>=1.0.5``
   :depends r-shinythemes: 
   :depends r-tibble: 
   :depends r-visnetwork: 
   :depends r-xml: ``>=3.98``
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

      mamba install bioconductor-biocancer

   and update with::

      mamba update bioconductor-biocancer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocancer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocancer:<tag>

   (see `bioconductor-biocancer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocancer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocancer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocancer
   :alt:   (downloads)
.. |docker_bioconductor-biocancer| image:: https://quay.io/repository/biocontainers/bioconductor-biocancer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocancer
.. _`bioconductor-biocancer/tags`: https://quay.io/repository/biocontainers/bioconductor-biocancer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocancer";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocancer/README.html