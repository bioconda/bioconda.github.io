:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aneufinderdata'
.. highlight: bash

bioconductor-aneufinderdata
===========================

.. conda:recipe:: bioconductor-aneufinderdata
   :replaces_section_title:
   :noindex:

   WGSCS Data for Demonstration Purposes

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/AneuFinderData.html
   :license: file LICENSE
   :recipe: /`bioconductor-aneufinderdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aneufinderdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aneufinderdata/meta.yaml>`_

   Whole\-genome single cell sequencing data for demonstration purposes in the AneuFinder package.


.. conda:package:: bioconductor-aneufinderdata

   |downloads_bioconductor-aneufinderdata| |docker_bioconductor-aneufinderdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221107``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aneufinderdata

   and update with::

      conda update bioconductor-aneufinderdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aneufinderdata:<tag>

   (see `bioconductor-aneufinderdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aneufinderdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aneufinderdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aneufinderdata
   :alt:   (downloads)
.. |docker_bioconductor-aneufinderdata| image:: https://quay.io/repository/biocontainers/bioconductor-aneufinderdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aneufinderdata
.. _`bioconductor-aneufinderdata/tags`: https://quay.io/repository/biocontainers/bioconductor-aneufinderdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aneufinderdata";
        var versions = ["1.26.0","1.25.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aneufinderdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aneufinderdata/README.html