:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mvoutdata'
.. highlight: bash

bioconductor-mvoutdata
======================

.. conda:recipe:: bioconductor-mvoutdata
   :replaces_section_title:
   :noindex:

   affy and illumina raw data for assessing outlier detector performance

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/mvoutData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mvoutdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mvoutdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mvoutdata/meta.yaml>`_

   affy and illumina raw data for assessing outlier detector performance


.. conda:package:: bioconductor-mvoutdata

   |downloads_bioconductor-mvoutdata| |docker_bioconductor-mvoutdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-lumi: ``>=2.52.0,<2.53.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mvoutdata

   and update with::

      conda update bioconductor-mvoutdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mvoutdata:<tag>

   (see `bioconductor-mvoutdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mvoutdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mvoutdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mvoutdata
   :alt:   (downloads)
.. |docker_bioconductor-mvoutdata| image:: https://quay.io/repository/biocontainers/bioconductor-mvoutdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mvoutdata
.. _`bioconductor-mvoutdata/tags`: https://quay.io/repository/biocontainers/bioconductor-mvoutdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mvoutdata";
        var versions = ["1.36.0","1.34.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mvoutdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mvoutdata/README.html