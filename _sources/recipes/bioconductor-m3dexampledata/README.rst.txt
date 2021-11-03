:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-m3dexampledata'
.. highlight: bash

bioconductor-m3dexampledata
===========================

.. conda:recipe:: bioconductor-m3dexampledata
   :replaces_section_title:
   :noindex:

   M3Drop Example Data

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/M3DExampleData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-m3dexampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3dexampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3dexampledata/meta.yaml>`_

   Example data for M3Drop package.


.. conda:package:: bioconductor-m3dexampledata

   |downloads_bioconductor-m3dexampledata| |docker_bioconductor-m3dexampledata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.15.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-m3dexampledata

   and update with::

      conda update bioconductor-m3dexampledata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-m3dexampledata:<tag>

   (see `bioconductor-m3dexampledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-m3dexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m3dexampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-m3dexampledata
   :alt:   (downloads)
.. |docker_bioconductor-m3dexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-m3dexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m3dexampledata
.. _`bioconductor-m3dexampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-m3dexampledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-m3dexampledata";
        var versions = ["1.20.0","1.18.0","1.16.0","1.16.0","1.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m3dexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m3dexampledata/README.html