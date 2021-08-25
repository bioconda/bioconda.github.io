:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrmdata'
.. highlight: bash

bioconductor-arrmdata
=====================

.. conda:recipe:: bioconductor-arrmdata
   :replaces_section_title:
   :noindex:

   Example dataset for normalization of Illumina 450k Methylation data

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/ARRmData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-arrmdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrmdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrmdata/meta.yaml>`_

   Raw Beta values from 36 samples across 3 groups from Illumina 450k methylation arrays


.. conda:package:: bioconductor-arrmdata

   |downloads_bioconductor-arrmdata| |docker_bioconductor-arrmdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-3</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-3``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arrmdata

   and update with::

      conda update bioconductor-arrmdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arrmdata:<tag>

   (see `bioconductor-arrmdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arrmdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrmdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrmdata
   :alt:   (downloads)
.. |docker_bioconductor-arrmdata| image:: https://quay.io/repository/biocontainers/bioconductor-arrmdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrmdata
.. _`bioconductor-arrmdata/tags`: https://quay.io/repository/biocontainers/bioconductor-arrmdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-arrmdata";
        var versions = ["1.28.0","1.26.0","1.26.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrmdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrmdata/README.html