:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-restfulse'
.. highlight: bash

bioconductor-restfulse
======================

.. conda:recipe:: bioconductor-restfulse
   :replaces_section_title:
   :noindex:

   Access matrix\-like HDF5 server content or BigQuery content through a SummarizedExperiment interface

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/restfulSE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-restfulse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-restfulse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-restfulse/meta.yaml>`_

   This package provides functions and classes to interface with remote data stores by operating on SummarizedExperiment\-like objects.


.. conda:package:: bioconductor-restfulse

   |downloads_bioconductor-restfulse| |docker_bioconductor-restfulse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.13.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rhdf5client: ``>=1.24.0,<1.25.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bigrquery: 
   :depends r-dbi: 
   :depends r-dplyr: ``>=0.7.1``
   :depends r-magrittr: 
   :depends r-reshape2: 
   :depends r-rlang: 
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

      mamba install bioconductor-restfulse

   and update with::

      mamba update bioconductor-restfulse

  To create a new environment, run::

      mamba create --name myenvname bioconductor-restfulse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-restfulse:<tag>

   (see `bioconductor-restfulse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-restfulse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-restfulse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-restfulse
   :alt:   (downloads)
.. |docker_bioconductor-restfulse| image:: https://quay.io/repository/biocontainers/bioconductor-restfulse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-restfulse
.. _`bioconductor-restfulse/tags`: https://quay.io/repository/biocontainers/bioconductor-restfulse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-restfulse";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.13.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-restfulse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-restfulse/README.html