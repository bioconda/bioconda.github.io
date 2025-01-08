:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellbaser'
.. highlight: bash

bioconductor-cellbaser
======================

.. conda:recipe:: bioconductor-cellbaser
   :replaces_section_title:
   :noindex:

   Querying annotation data from the high performance Cellbase web

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cellbaseR.html
   :license: Apache License (== 2.0)
   :recipe: /`bioconductor-cellbaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbaser/meta.yaml>`_

   This R package makes use of the exhaustive RESTful Web service API that has been implemented for the Cellabase database. It enable researchers to query and obtain a wealth of biological information from a single database saving a lot of time. Another benefit is that researchers can easily make queries about different biological topics and link all this information together as all information is integrated.


.. conda:package:: bioconductor-cellbaser

   |downloads_bioconductor-cellbaser| |docker_bioconductor-cellbaser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-pbapply: 
   :depends r-r.utils: 
   :depends r-tidyr: 
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

      mamba install bioconductor-cellbaser

   and update with::

      mamba update bioconductor-cellbaser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellbaser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellbaser:<tag>

   (see `bioconductor-cellbaser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellbaser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellbaser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellbaser
   :alt:   (downloads)
.. |docker_bioconductor-cellbaser| image:: https://quay.io/repository/biocontainers/bioconductor-cellbaser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellbaser
.. _`bioconductor-cellbaser/tags`: https://quay.io/repository/biocontainers/bioconductor-cellbaser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellbaser";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellbaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellbaser/README.html