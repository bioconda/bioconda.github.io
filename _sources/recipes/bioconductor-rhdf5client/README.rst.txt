:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhdf5client'
.. highlight: bash

bioconductor-rhdf5client
========================

.. conda:recipe:: bioconductor-rhdf5client
   :replaces_section_title:
   :noindex:

   Access HDF5 content from h5serv

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/rhdf5client.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rhdf5client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5client/meta.yaml>`_

   Provides functionality for reading data from h5serv server from within R.


.. conda:package:: bioconductor-rhdf5client

   |downloads_bioconductor-rhdf5client| |docker_bioconductor-rhdf5client|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-httr: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rhdf5client

   and update with::

      conda update bioconductor-rhdf5client

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhdf5client:<tag>

   (see `bioconductor-rhdf5client/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhdf5client| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5client.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhdf5client
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5client| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5client/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5client
.. _`bioconductor-rhdf5client/tags`: https://quay.io/repository/biocontainers/bioconductor-rhdf5client?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rhdf5client";
        var versions = ["1.22.0","1.20.0","1.20.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5client/README.html