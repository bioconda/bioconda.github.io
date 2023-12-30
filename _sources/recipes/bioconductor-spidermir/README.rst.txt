:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spidermir'
.. highlight: bash

bioconductor-spidermir
======================

.. conda:recipe:: bioconductor-spidermir
   :replaces_section_title:
   :noindex:

   SpidermiR\: An R\/Bioconductor package for integrative network analysis with miRNA data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SpidermiR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-spidermir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spidermir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spidermir/meta.yaml>`_
   :links: biotools: :biotools:`spidermir`, doi: :doi:`10.3390/ijms18020274`

   The aims of SpidermiR are \: i\) facilitate the network open\-access data retrieval from GeneMania data\, ii\) prepare the data using the appropriate gene nomenclature\, iii\) integration of miRNA data in a specific network\, iv\) provide different standard analyses and v\) allow the user to visualize the results. In more detail\, the package provides multiple methods for query\, prepare and download network data \(GeneMania\)\, and the integration with validated and predicted miRNA data \(mirWalk\, miRTarBase\, miRandola\, Miranda\, PicTar and TargetScan\). Furthermore\, we also present a statistical test to identify pharmaco\-mir relationships using the gene\-drug interactions derived by DGIdb and MATADOR database.


.. conda:package:: bioconductor-spidermir

   |downloads_bioconductor-spidermir| |docker_bioconductor-spidermir|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-mirnatap: ``>=1.36.0,<1.37.0``
   :depends bioconductor-mirnatap.db: ``>=0.99.0,<0.100.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gdata: 
   :depends r-httr: 
   :depends r-igraph: 
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

      mamba install bioconductor-spidermir

   and update with::

      mamba update bioconductor-spidermir

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spidermir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spidermir:<tag>

   (see `bioconductor-spidermir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spidermir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spidermir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spidermir
   :alt:   (downloads)
.. |docker_bioconductor-spidermir| image:: https://quay.io/repository/biocontainers/bioconductor-spidermir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spidermir
.. _`bioconductor-spidermir/tags`: https://quay.io/repository/biocontainers/bioconductor-spidermir?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spidermir";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spidermir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spidermir/README.html