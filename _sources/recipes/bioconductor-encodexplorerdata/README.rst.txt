:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-encodexplorerdata'
.. highlight: bash

bioconductor-encodexplorerdata
==============================

.. conda:recipe:: bioconductor-encodexplorerdata
   :replaces_section_title:
   :noindex:

   A compilation of ENCODE metadata

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/ENCODExplorerData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-encodexplorerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-encodexplorerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-encodexplorerdata/meta.yaml>`_

   This package allows user to quickly access ENCODE project files metadata and give access to helper functions to query the ENCODE rest api\, download ENCODE datasets and save the database in SQLite format.


.. conda:package:: bioconductor-encodexplorerdata

   |downloads_bioconductor-encodexplorerdata| |docker_bioconductor-encodexplorerdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.5-7</code>,  <code>0.99.5-6</code>,  <code>0.99.5-5</code>,  <code>0.99.5-4</code>,  <code>0.99.5-3</code>,  <code>0.99.5-2</code>,  <code>0.99.5-1</code>,  <code>0.99.5-0</code>,  <code>0.99.4-0</code>,  </span></summary>
      

      ``0.99.5-7``,  ``0.99.5-6``,  ``0.99.5-5``,  ``0.99.5-4``,  ``0.99.5-3``,  ``0.99.5-2``,  ``0.99.5-1``,  ``0.99.5-0``,  ``0.99.4-0``,  ``0.99.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-jsonlite: 
   :depends r-rcurl: 
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

      mamba install bioconductor-encodexplorerdata

   and update with::

      mamba update bioconductor-encodexplorerdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-encodexplorerdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-encodexplorerdata:<tag>

   (see `bioconductor-encodexplorerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-encodexplorerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-encodexplorerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-encodexplorerdata
   :alt:   (downloads)
.. |docker_bioconductor-encodexplorerdata| image:: https://quay.io/repository/biocontainers/bioconductor-encodexplorerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-encodexplorerdata
.. _`bioconductor-encodexplorerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-encodexplorerdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-encodexplorerdata";
        var versions = ["0.99.5","0.99.5","0.99.5","0.99.5","0.99.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-encodexplorerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-encodexplorerdata/README.html