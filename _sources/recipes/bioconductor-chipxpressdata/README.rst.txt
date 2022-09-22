:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipxpressdata'
.. highlight: bash

bioconductor-chipxpressdata
===========================

.. conda:recipe:: bioconductor-chipxpressdata
   :replaces_section_title:
   :noindex:

   ChIPXpress Pre\-built Databases

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/ChIPXpressData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-chipxpressdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipxpressdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipxpressdata/meta.yaml>`_

   Contains pre\-built mouse \(GPL1261\) and human \(GPL570\) database of gene expression profiles to be used for ChIPXpress ranking.


.. conda:package:: bioconductor-chipxpressdata

   |downloads_bioconductor-chipxpressdata| |docker_bioconductor-chipxpressdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bigmemory: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipxpressdata

   and update with::

      conda update bioconductor-chipxpressdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipxpressdata:<tag>

   (see `bioconductor-chipxpressdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipxpressdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipxpressdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipxpressdata
   :alt:   (downloads)
.. |docker_bioconductor-chipxpressdata| image:: https://quay.io/repository/biocontainers/bioconductor-chipxpressdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipxpressdata
.. _`bioconductor-chipxpressdata/tags`: https://quay.io/repository/biocontainers/bioconductor-chipxpressdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipxpressdata";
        var versions = ["1.32.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipxpressdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipxpressdata/README.html