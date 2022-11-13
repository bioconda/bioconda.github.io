:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-harbchip'
.. highlight: bash

bioconductor-harbchip
=====================

.. conda:recipe:: bioconductor-harbchip
   :replaces_section_title:
   :noindex:

   Experimental Data Package\: harbChIP

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/harbChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-harbchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harbchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harbchip/meta.yaml>`_

   data from a yeast ChIP\-chip experiment


.. conda:package:: bioconductor-harbchip

   |downloads_bioconductor-harbchip| |docker_bioconductor-harbchip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20221107``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-harbchip

   and update with::

      conda update bioconductor-harbchip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-harbchip:<tag>

   (see `bioconductor-harbchip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-harbchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-harbchip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-harbchip
   :alt:   (downloads)
.. |docker_bioconductor-harbchip| image:: https://quay.io/repository/biocontainers/bioconductor-harbchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-harbchip
.. _`bioconductor-harbchip/tags`: https://quay.io/repository/biocontainers/bioconductor-harbchip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-harbchip";
        var versions = ["1.36.0","1.32.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-harbchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-harbchip/README.html